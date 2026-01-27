import { cn } from "@/lib/utils";

interface RunnerIconProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
}

const sizes = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-24 h-24",
};

const RunnerIcon = ({ className, size = "md", animate = true }: RunnerIconProps) => {
  return (
    <svg
      viewBox="0 0 80 100"
      className={cn(
        sizes[size],
        animate && "animate-bounce-subtle",
        className
      )}
      fill="none"
    >
      {/* Head - Tertiary color (cyan) */}
      <circle cx="60" cy="10" r="10" className="fill-tertiary" />
      
      {/* Upper wave - Primary color (teal) */}
      <path
        d="M20 35 Q35 20 50 35 Q65 50 80 35"
        className="stroke-primary"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Lower wave - Secondary color (orange) */}
      <path
        d="M0 60 Q15 45 30 60 Q45 75 60 60"
        className="stroke-secondary"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default RunnerIcon;
