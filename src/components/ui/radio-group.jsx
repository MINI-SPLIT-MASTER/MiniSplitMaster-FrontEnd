import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "../../lib/utils"

const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  return (<RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />);
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}>
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-3.5 w-3.5 fill-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

// Permite un radio con contenido HTML personalizado y clickeable, sin label

// RadioGroupHtmlItem: el borde de selección rodea el contenido HTML
const RadioGroupHtmlItem = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          // Borde y transición para selección
          "border-2 border-primary rounded-xl transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 p-0 m-0 bg-transparent relative",
          // Efecto de selección
          "data-[state=checked]:border-[3px] data-[state=checked]:border-[#09a498] data-[state=checked]:shadow-lg",
          className
        )}
        tabIndex={0}
        {...props}
        style={{ background: 'none', ...props.style }}
      >
        {/* El contenido HTML queda rodeado por el borde del radio */}
        <div className="w-full h-full cursor-pointer select-none flex items-center justify-center p-2">
          {children}
        </div>
      </RadioGroupPrimitive.Item>
    );
  }
);
RadioGroupHtmlItem.displayName = 'RadioGroupHtmlItem';

export { RadioGroup, RadioGroupItem, RadioGroupHtmlItem }
