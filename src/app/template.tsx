"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "motion/react";
import { SiteLoader } from "@/components/ui/site-loader";

const pagesWithLoader = new Set([
  "/",
  "/contact-us",
  "/doctrine",
  "/privacy-policy",
  "/terms-and-conditions",
]);

const LOADER_ENTRANCE_MS = 2200;

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (!pagesWithLoader.has(pathname)) return;

    let entranceComplete = false;
    let pageReady = document.readyState === "complete";
    const finishLoading = () => {
      if (entranceComplete && pageReady) setShowLoader(false);
    };
    const onLoad = () => {
      pageReady = true;
      finishLoading();
    };
    const timeout = window.setTimeout(() => {
      entranceComplete = true;
      finishLoading();
    }, LOADER_ENTRANCE_MS);
    window.addEventListener("load", onLoad);

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("load", onLoad);
    };
  }, [pathname]);

  return (
    <>
      {children}
      <AnimatePresence>
        {showLoader && pagesWithLoader.has(pathname) && <SiteLoader key={pathname} />}
      </AnimatePresence>
      <noscript><style>{"#site-loader-overlay { display: none; }"}</style></noscript>
    </>
  );
}
