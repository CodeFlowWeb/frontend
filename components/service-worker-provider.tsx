"use client";

import { useEffect } from "react";
import { registerServiceWorker } from "@/lib/register-sw";

export function ServiceWorkerProvider() {
  useEffect(() => {
    registerServiceWorker();
  }, []);

  return null;
}
