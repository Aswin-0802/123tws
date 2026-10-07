const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  countryCode?: string;
  service?: string;
  message?: string;
  website?: string;
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot filled: pretend success so bots learn nothing.
  if (body.website) return Response.json({ ok: true });

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();
  const phone = (body.phone ?? "").trim();
  if (name.length < 2 || !EMAIL.test(email) || phone.length < 6 || !body.service || message.length < 10 || message.length > 5000) {
    return Response.json({ ok: false, error: "Validation failed" }, { status: 422 });
  }

  // TODO: deliver the lead (SMTP, Resend, CRM webhook). Until then it is logged server-side only.
  console.info("[quote] new request", { name, email, phone: `${body.countryCode ?? ""} ${phone}`.trim(), service: body.service });

  return Response.json({ ok: true });
}
