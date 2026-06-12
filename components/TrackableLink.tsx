"use client";

import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    eventName?: string;
    eventProps?: Record<string, string | number | boolean>;
    children: ReactNode;
  };

function track(eventName: string, props?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;
  const plausible = (window as Window & {
    plausible?: (event: string, options?: { props?: Record<string, string | number | boolean> }) => void;
  }).plausible;
  if (typeof plausible === "function") {
    plausible(eventName, props ? { props } : undefined);
  }
}

export default function TrackableLink({ eventName = "CTA Click", eventProps, onClick, children, ...props }: Props) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        track(eventName, eventProps);
        onClick?.(event);
      }}
    >
      {children}
    </Link>
  );
}
