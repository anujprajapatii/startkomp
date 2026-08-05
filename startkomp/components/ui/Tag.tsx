import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "green" | "boosted";
  className?: string;
}

export default function Tag({
  children,
  variant = "default",
  className,
}: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium border",
        variant === "default" &&
          "bg-[#111f35] border-[#1a2d4a] text-[#7a8fa8]",
        variant === "green" &&
          "bg-[rgba(25,171,79,0.10)] border-[rgba(25,171,79,0.25)] text-[#19AB4F]",
        variant === "boosted" &&
          "bg-[rgba(25,171,79,0.10)] border-[rgba(25,171,79,0.25)] text-[#19AB4F] font-bold tracking-wider uppercase",
        className
      )}
    >
      {children}
    </span>
  );
}
