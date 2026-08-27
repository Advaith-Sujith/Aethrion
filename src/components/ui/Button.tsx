"use client";

import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
  target?: string;
  rel?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  onClick,
  href,
  className = "",
  type = "button",
  disabled = false,
  fullWidth = false,
  target,
  rel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-xl select-none cursor-pointer max-w-full text-center";

  const sizes = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-xs sm:text-sm px-5 py-2.5 sm:py-3 gap-2",
    lg: "text-sm sm:text-base px-6 py-3 sm:py-3.5 gap-2.5",
  };

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-dark active:scale-[0.98] shadow-sm hover:shadow-accent-glow",
    secondary:
      "bg-navy-900 text-white hover:bg-navy-800 active:scale-[0.98] shadow-sm border border-white/10",
    ghost:
      "text-slate-600 hover:text-slate-900 hover:bg-slate-100 active:scale-[0.98]",
    outline:
      "border border-slate-300 text-slate-700 hover:border-accent hover:text-accent active:scale-[0.98] bg-white",
  };

  const width = fullWidth ? "w-full" : "";
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "";

  const classes = [base, sizes[size], variants[variant], width, disabledStyles, className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
