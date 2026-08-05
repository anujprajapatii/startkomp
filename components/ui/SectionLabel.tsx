import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  emoji?: string;
  className?: string;
  as?: "h2" | "h3" | "p";
}

export default function SectionLabel({
  children,
  emoji,
  className,
  as: Tag = "h2",
}: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-2 mb-5", className)}>
      {emoji && <span aria-hidden="true">{emoji}</span>}
      <Tag
        className="text-[#f0f4f8] font-semibold text-base"
        style={{ fontFamily: "Space Grotesk, sans-serif" }}
      >
        {children}
      </Tag>
    </div>
  );
}
