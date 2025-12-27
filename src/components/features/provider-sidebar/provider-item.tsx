import { forwardRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "src/components/ui/tooltip";
import { getProviderById } from "src/lib/providers/provider-config";
import { cn } from "src/lib/utils/style";

interface ProviderItemProps {
  providerName: string;
}

const ProviderItem = forwardRef<
  HTMLDivElement,
  ProviderItemProps & React.HTMLAttributes<HTMLDivElement>
>(({ providerName, className, ...props }, ref) => {
  const provider = getProviderById(providerName);

  const color = provider ? provider.color : "hsl(0deg 0% 80%)";
  const initial = provider?.name.charAt(0) || "?";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          ref={ref}
          {...props}
          style={
            {
              [`--provider-color`]: color,
            } as React.CSSProperties
          }
          className={cn(
            `bg-(--provider-color) uppercase w-full aspect-square rounded-sm justify-center items-center flex font-medium text-lg text-white`,
            className,
          )}
        >
          {initial}
        </div>
      </TooltipTrigger>
      <TooltipContent>
        {provider ? provider.name : "Unknown Provider"}
      </TooltipContent>
    </Tooltip>
  );
});

ProviderItem.displayName = "ProviderItem";

export default ProviderItem;
