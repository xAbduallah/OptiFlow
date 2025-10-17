"use client";
import React, { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: string; // e.g. '+50', '+3.4M'
  duration?: number; // ms
  className?: string;
}

function parseNumber(value: string) {
  // Extract numeric part and suffix (e.g. '+', 'M')
  const match = value.match(/([+\-]?\d*\.?\d*)([a-zA-Z+%]*)/);
  if (!match) return { number: 0, suffix: "" };
  return {
    number: parseFloat(match[1]) || 0,
    suffix: match[2] || "",
  };
}

const Counter: React.FC<CounterProps> = ({
  value,
  duration = 1200,
  className,
}) => {
  const { number, suffix } = parseNumber(value);
  const [display, setDisplay] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    if (ref.current && !hasAnimated) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            if (observer) {
              observer.disconnect();
            }
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(ref.current);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    let start: number | null = null;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // For decimals, keep precision
      const next = number * progress;
      setDisplay(next);
      if (progress < 1) {
        raf.current = requestAnimationFrame(animate);
      } else {
        setDisplay(number);
      }
    };
    raf.current = requestAnimationFrame(animate);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [number, duration, hasAnimated]);

  // Format display value
  let formatted: string;
  if (value.includes(".")) {
    formatted = display.toFixed(1);
  } else {
    formatted = Math.round(display).toString();
  }

  return (
    <span ref={ref} className={className}>
      {formatted}
      {suffix}
    </span>
  );
};

export default Counter;
