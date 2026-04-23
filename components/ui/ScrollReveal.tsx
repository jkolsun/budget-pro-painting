"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "left" | "right" | "scale";
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  threshold = 0.15,
  className = "",
  style = {},
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  const dirClass =
    direction === "left"
      ? "from-left"
      : direction === "right"
      ? "from-right"
      : direction === "scale"
      ? "scale-in"
      : "";

  const TagElement = Tag as React.ElementType;

  return (
    <TagElement
      ref={ref}
      className={`reveal ${dirClass} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </TagElement>
  );
}
