"use client";

import { CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { useId, useRef, useState, type FormEvent } from "react";
import { contact } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";
type Field = "name" | "email" | "phone" | "service" | "message";
type Errors = Partial<Record<Field, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[\d\s-]{6,15}$/;

function validate(data: FormData): Errors {
  const e: Errors = {};
  const get = (k: string) => String(data.get(k) ?? "").trim();
  if (get("name").length < 2) e.name = "Please enter your name.";
  if (!EMAIL.test(get("email"))) e.email = "Please enter a valid email address.";
  if (!PHONE.test(get("phone"))) e.phone = "Please enter a valid phone number.";
  if (!get("service")) e.service = "Please choose a service.";
  if (get("message").length < 10) e.message = "Please tell us a little more (at least 10 characters).";
  return e;
}

function ErrorText({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-[13px] text-accent-strong">
      {message}
    </p>
  );
}

const field =
  "block w-full rounded-[8px] border border-transparent bg-surface px-4 text-[15px] text-fg transition-[border-color,box-shadow,background-color] duration-300 outline-none hover:border-line focus:border-accent focus:bg-white focus:shadow-[0_0_0_4px_rgb(232_71_72/0.14)] aria-[invalid=true]:border-accent-strong";
const label = "text-[14px] font-semibold text-fg";
const chevron =
  "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22><path d=%22M4 6l4 4 4-4%22 fill=%22none%22 stroke=%22%23454545%22 stroke-width=%221.6%22/></svg>')] bg-[length:14px] bg-[right_0.9rem_center] bg-no-repeat pr-9";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const describe = (name: Field) => (errors[name] ? id(`${name}-error`) : undefined);

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);
    const found = validate(data);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative min-h-[520px]">
      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <motion.div
            key="done"
            role="status"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex min-h-[480px] flex-col items-start justify-center"
          >
            <CheckCircle aria-hidden weight="fill" className="size-14 text-accent" />
            <h3 className="mt-6 font-display text-[26px] leading-tight font-semibold text-fg">Thank you! Your request is in.</h3>
            <p className="mt-3 max-w-[40ch] text-[16px] leading-[1.75] text-text">Our team will get back to you within one working day.</p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-8 text-[15px] font-semibold text-accent-strong underline-offset-4 hover:underline"
            >
              Send another request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            ref={formRef}
            noValidate
            onSubmit={onSubmit}
            aria-labelledby={id("title")}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            <h3 id={id("title")} className="font-display text-[16px] font-bold tracking-[0.02em] text-fg uppercase sm:col-span-2">
              {contact.formTitle}
            </h3>

            <div className="grid gap-2">
              <label htmlFor={id("name")} className={label}>
                Name
              </label>
              <input id={id("name")} name="name" autoComplete="name" required aria-invalid={!!errors.name} aria-describedby={describe("name")} className={cn(field, "h-12")} />
              <ErrorText id={id("name-error")} message={errors.name} />
            </div>

            <div className="grid gap-2">
              <label htmlFor={id("email")} className={label}>
                Email ID
              </label>
              <input id={id("email")} name="email" type="email" autoComplete="email" required aria-invalid={!!errors.email} aria-describedby={describe("email")} className={cn(field, "h-12")} />
              <ErrorText id={id("email-error")} message={errors.email} />
            </div>

            <div className="grid gap-2 sm:col-span-2">
              <label htmlFor={id("phone")} className={label}>
                Phone Number
              </label>
              <div className="grid grid-cols-[minmax(0,10rem)_1fr] gap-3">
                <select name="countryCode" aria-label="Country code" defaultValue="+91" className={cn(field, chevron, "h-12")}>
                  {contact.countryCodes.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
                <input
                  id={id("phone")}
                  name="phone"
                  type="tel"
                  autoComplete="tel-national"
                  inputMode="tel"
                  required
                  aria-invalid={!!errors.phone}
                  aria-describedby={describe("phone")}
                  className={cn(field, "h-12")}
                />
              </div>
              <ErrorText id={id("phone-error")} message={errors.phone} />
            </div>

            <div className="grid gap-2 sm:col-span-2">
              <label htmlFor={id("service")} className={label}>
                Service
              </label>
              <select
                id={id("service")}
                name="service"
                required
                defaultValue=""
                aria-invalid={!!errors.service}
                aria-describedby={describe("service")}
                className={cn(field, chevron, "h-12")}
              >
                <option value="" disabled>
                  Choose a service
                </option>
                {contact.services.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <ErrorText id={id("service-error")} message={errors.service} />
            </div>

            <div className="grid gap-2 sm:col-span-2">
              <label htmlFor={id("message")} className={label}>
                Message
              </label>
              <textarea id={id("message")} name="message" rows={4} required aria-invalid={!!errors.message} aria-describedby={describe("message")} className={cn(field, "resize-y py-3")} />
              <ErrorText id={id("message-error")} message={errors.message} />
            </div>

            {/* Honeypot: hidden from people, tempting to bots */}
            <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label htmlFor={id("website")}>Website</label>
              <input id={id("website")} name="website" tabIndex={-1} autoComplete="off" />
            </div>

            {status === "error" && (
              <p role="alert" className="flex items-start gap-2 rounded-[8px] bg-accent/10 p-4 text-[15px] text-accent-strong sm:col-span-2">
                <WarningCircle aria-hidden className="mt-0.5 size-5 shrink-0" />
                Something went wrong sending your request. Please try again, or email info@123tws.com.
              </p>
            )}

            <div className="sm:col-span-2">
              <Button type="submit" disabled={status === "submitting"} aria-busy={status === "submitting"}>
                {status === "submitting" ? "Sending..." : "Submit Now"}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
