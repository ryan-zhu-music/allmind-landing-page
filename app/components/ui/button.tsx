import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant:
    | "primary"
    | "secondary"
    | "outline-foreground"
    | "outline-background";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

const variants = {
  primary: "bg-mint text-foreground",
  secondary: "bg-navy-dark text-background",
  "outline-foreground": "border border-foreground text-foreground",
  "outline-background": "border border-background text-background",
};

const sizes = {
  sm: "px-2 py-1.5 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

export default function Button({
  children,
  className,
  variant,
  size = "md",
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap h-fit rounded-md font-semibold ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
