"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";

/** Floating "Start a Project" pill from the mobile design. */
export default function MobileCta() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <nav className="pointer-events-none fixed bottom-0 z-40 w-full pb-[env(safe-area-inset-bottom)] md:hidden">
      <div className="flex h-20 items-center justify-center px-6">
        <Link
          href="/contact"
          className="pointer-events-auto flex min-h-[44px] w-full max-w-sm items-center justify-between rounded-full bg-primary px-6 py-3 text-surface shadow-[0_8px_24px_rgba(36,27,20,0.18)] transition-colors hover:bg-primary-container"
        >
          <span className="text-label-md tracking-[0.14em] uppercase">Start a Project</span>
          <span className="flex items-center gap-1.5 text-secondary-container">
            <span className="text-[11px] font-semibold tracking-wider uppercase">Consultation</span>
            <Icon name="arrow_forward" className="text-[16px]" />
          </span>
        </Link>
      </div>
    </nav>
  );
}
