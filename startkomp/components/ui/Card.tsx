import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "green";
  as?: "div" | "article" | "section" | "li";
}

export default function Card({
  children,
  className,
  variant = "default",
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-xl border p-5",
        variant === "default" && "border-[#1a2d4a] bg-[#0b1829]",
        variant === "green" &&
          "border-[rgba(25,171,79,0.30)] bg-[rgba(25,171,79,0.06)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
