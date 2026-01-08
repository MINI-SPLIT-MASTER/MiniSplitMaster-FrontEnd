import React from 'react';
import { Check } from "lucide-react";
import { cn } from "../../lib/utils";

export function Stepper({ steps, activeStep }) {
    const safeSteps = Array.isArray(steps) ? steps : [];
    return (
        <div className="flex w-full items-center justify-between space-x-4 p-4">
        {safeSteps.map((step, index) => (
            <React.Fragment key={index}>
                <div className="flex items-center gap-2">
                    <div className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold transition-all",
                    index <= activeStep 
                        ? "bg-primary text-primary-foreground border-primary shadow-sm" 
                        : "bg-background text-muted-foreground border-input"
                    )}>
                    {index < activeStep ? <Check className="h-4 w-4" /> : index + 1}
                    </div>
                    <span className={cn(
                    "text-sm font-medium",
                    index <= activeStep ? "text-foreground" : "text-muted-foreground"
                    )}>
                    {step.label}
                    </span>
                </div>
                {index < safeSteps.length - 1 && (
                    <div className={cn(
                    "h-[1px] flex-1 transition-colors",
                    index < activeStep ? "bg-primary" : "bg-border"
                    )} />
                )}
            </React.Fragment>
        ))}
        </div>
    );
}