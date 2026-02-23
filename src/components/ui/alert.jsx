import * as React from "react"
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm shadow-lg bg-white z-50 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef(({ className, variant, title, description, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  >
    {title && <h5 className="mb-1 font-medium leading-none tracking-tight">{title}</h5>}
    {description && <div className="text-sm [&_p]:leading-relaxed">{description}</div>}
  </div>
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props} />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props} />
))
AlertDescription.displayName = "AlertDescription"

// Toast manager
let addToast;

export function ToastManager() {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    addToast = (toast) => {
      const id = Math.random().toString(36).substr(2, 9);
      setToasts((prev) => [...prev, { ...toast, id }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, toast.duration || 3000);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', top: 24, right: 24, zIndex: 9999, display: 'flex', flexDirection: 'column', gap: 12 }}>
      {toasts.map(({ id, message, description, variant }) => (
        <Alert key={id} title={message} description={description} variant={variant} style={{ minWidth: 280, maxWidth: 360 }} />
      ))}
    </div>
  );
}

// Función global tipo Ant Design
export function showAlert({ message, description, variant, duration, placement }) {
  if (addToast) {
    addToast({ message, description, variant, duration, placement });
  } else {
    // fallback: alert
    window.alert(message + (description ? `\n${description}` : ''));
  }
}

export { Alert, AlertTitle, AlertDescription }
