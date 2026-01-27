import { cn } from "@/lib/utils";

interface WaveDecorationProps {
  className?: string;
  variant?: "primary" | "secondary" | "tertiary" | "mixed";
  position?: "top" | "bottom";
}

const WaveDecoration = ({ className, variant = "mixed", position = "bottom" }: WaveDecorationProps) => {
  const colors = {
    primary: "stroke-primary",
    secondary: "stroke-secondary",
    tertiary: "stroke-tertiary",
  };

  return (
    <div className={cn(
      "absolute left-0 right-0 overflow-hidden pointer-events-none",
      position === "top" ? "top-0" : "bottom-0",
      className
    )}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={cn(
          "w-[200%] h-16 sm:h-24",
          "animate-wave"
        )}
      >
        {variant === "mixed" ? (
          <>
            <path
              d="M0 60 Q150 20 300 60 T600 60 T900 60 T1200 60 T1500 60 T1800 60 T2100 60 T2400 60"
              fill="none"
              className="stroke-primary/20"
              strokeWidth="3"
            />
            <path
              d="M0 70 Q150 100 300 70 T600 70 T900 70 T1200 70 T1500 70 T1800 70 T2100 70 T2400 70"
              fill="none"
              className="stroke-secondary/20"
              strokeWidth="3"
            />
            <path
              d="M0 50 Q150 30 300 50 T600 50 T900 50 T1200 50 T1500 50 T1800 50 T2100 50 T2400 50"
              fill="none"
              className="stroke-tertiary/15"
              strokeWidth="2"
            />
          </>
        ) : (
          <path
            d="M0 60 Q150 20 300 60 T600 60 T900 60 T1200 60 T1500 60 T1800 60 T2100 60 T2400 60"
            fill="none"
            className={cn(colors[variant], "opacity-20")}
            strokeWidth="3"
          />
        )}
      </svg>
    </div>
  );
};

export default WaveDecoration;
