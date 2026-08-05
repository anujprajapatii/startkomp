import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div"|"section"|"header"|"footer"|"nav"|"main"|"aside";
}

export default function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={cn(
      "w-full max-w-[1100px] mx-auto",
      "px-4 sm:px-6 lg:px-8",  // responsive padding: 16px mobile → 24px tablet → 32px desktop
      className
    )}>
      {children}
    </Tag>
  );
}
