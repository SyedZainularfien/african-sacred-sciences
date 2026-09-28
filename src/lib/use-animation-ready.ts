"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const clientSnapshot = () => typeof IntersectionObserver !== "undefined";
const serverSnapshot = () => false;

// Keep server-rendered content visible until the client can run its reveal.
export function useAnimationReady() {
  return useSyncExternalStore(subscribe, clientSnapshot, serverSnapshot);
}
