import { forwardRef } from "react";
import { cn } from "src/lib/utils/style";

const Background = forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("absolute inset-0 flex justify-center", className)}
        style={{ top: "-282px" }}
        {...props}
      >
        <div className="bg-shape bg-gradient-start opacity-50 bg-blur translate-x-20"></div>
        <div className="bg-shape bg-gradient-end opacity-50 bg-blur -translate-x-20"></div>
      </div>
    );
  },
);

Background.displayName = "Background";

export default Background;
