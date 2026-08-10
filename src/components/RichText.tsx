"use client";

import { PortableText } from "@portabletext/react";
import React from "react";

interface RichTextProps {
  value?: any;
  fallback?: React.ReactNode;
  className?: string;
}

export function RichText({ value, fallback, className }: RichTextProps) {
  if (!value) {
    return fallback ? <>{fallback}</> : null;
  }

  // If value is a plain string
  if (typeof value === "string") {
    return className ? <div className={className}>{value}</div> : <>{value}</>;
  }

  // If value is an array (standard Sanity portable text blocks or array of strings)
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return fallback ? <>{fallback}</> : null;
    }
    if (typeof value[0] === "string") {
      return (
        <div className={className}>
          {value.map((item: string, i: number) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      );
    }
    return (
      <div className={className}>
        <PortableText value={value} />
      </div>
    );
  }

  // If value is a single block object e.g. {_key, _type: 'block', children, markDefs, style}
  if (typeof value === "object" && value !== null) {
    if (value._type || value.children || value._key) {
      return (
        <div className={className}>
          <PortableText value={[value]} />
        </div>
      );
    }
    return fallback ? <>{fallback}</> : null;
  }

  return fallback ? <>{fallback}</> : null;
}
