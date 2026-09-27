"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { ReactNode, CSSProperties } from "react";

function subscribeReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  style,
  onReveal,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
  onReveal?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      onReveal?.();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timer = setTimeout(() => {
              setIsVisible(true);
              onReveal?.();
            }, delay);
            observer.unobserve(entry.target);
            return () => clearTimeout(timer);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, onReveal, prefersReducedMotion]);

  const isShown = prefersReducedMotion || isVisible;
  const visibilityClass = isShown
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-6";

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visibilityClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

export function StaggerReveal({
  children,
  className = "",
  staggerDelay = 80,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const childArray = Array.isArray(children) ? children : [children];

  return (
    <>
      {childArray.map((child, idx) => (
        <Reveal
          key={idx}
          delay={idx === 0 ? 0 : idx * staggerDelay}
          className={className}
        >
          {child}
        </Reveal>
      ))}
    </>
  );
}
