import { cn } from "@/lib/utils"

interface DottedSeparatorProps {
  className?: string
  color?: string
  height?: number
  dotSize?: number
  gapSize?: number
  direction?: "horizontal" | "vertical"
}

export const DottedSeparator = ({
  className,
  color = "#e5e5e5",
  height = 2,
  dotSize = 2,
  gapSize = 6,
  direction = "horizontal",
}: DottedSeparatorProps) => {
  const isHorizontal = direction === "horizontal"

  return (
    <div
      className={cn(
        isHorizontal
          ? "w-full flex items-center"
          : "h-full flex flex-col items-center",
        className
      )}
    >
      <div
        className={isHorizontal ? "flex-grow" : "flex-grow-0"}
        style={{
          width: isHorizontal ? "100%" : height,
          height: isHorizontal ? height : "100%",
          backgroundImage: `radial-gradient(circle, ${color} 25%, transparent 25%)`,
          backgroundSize: isHorizontal
            ? `${dotSize + gapSize}px ${height}px`
            : `${height}px ${dotSize + gapSize}px`,
          backgroundRepeat: isHorizontal ? "repeat-x" : "repeat-y",
          backgroundPosition: "center",
        }}
      />
    </div>
  )
} 