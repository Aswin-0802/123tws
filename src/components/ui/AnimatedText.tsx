import { Fragment, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Wraps each word in a mask so it can rise into view. Spaces stay real text nodes for screen readers. */
export function SplitWords({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="w">
            <span>{word}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}

type Props = {
  as?: ElementType;
  text: string;
  className?: string;
  delay?: number;
  id?: string;
  children?: ReactNode;
};

/** Server-rendered heading/paragraph whose lines rise in when scrolled into view (see RevealEngine). */
export function AnimatedText({ as: Tag = "h2", text, className, delay, id }: Props) {
  return (
    <Tag id={id} data-reveal="lines" data-delay={delay} className={cn(className)}>
      <SplitWords text={text} />
    </Tag>
  );
}
