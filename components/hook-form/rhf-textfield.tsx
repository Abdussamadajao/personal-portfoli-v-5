"use client";
import { Info } from "lucide-react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

// ----------------------------------------------------------------------
// Standalone TextField Component (without react-hook-form)
// ----------------------------------------------------------------------
type ITextFieldProps = {
  label?: ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  infoIcon?: boolean;
  infoText?: string;
  className?: string;
};

export function TextField({
  label,
  value,
  onChange,
  error,
  inputProps,
  infoIcon,
  infoText,
  className,
}: ITextFieldProps) {
  return (
    <div className={cn("space-y-2 w-full md:w-auto", className)}>
      {label && (
        <div className="flex items-center gap-1">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
          </label>
          {infoIcon && infoText && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{infoText}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      )}
      <Input
        {...inputProps}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={cn(
          " border-input focus:border-primary transition-colors ",
          error && "border-destructive",
          inputProps?.className
        )}
      />
      {error && <p className="text-sm font-medium text-destructive">{error}</p>}
    </div>
  );
}

// ----------------------------------------------------------------------
// React Hook Form TextField Component
// ----------------------------------------------------------------------
type IRHFTextFieldProps = {
  name: string;
  label?: ReactNode;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  infoIcon?: boolean;
  infoText?: string;
  className?: string;
  [otherOptions: string]: unknown;
  formItemClassName?: string;
};

export default function RHFTextField({
  name,
  label,
  inputProps,
  infoIcon,
  infoText,
  className,
  formItemClassName,
  ...other
}: IRHFTextFieldProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("items-center gap-2", formItemClassName)}>
          {label &&
            (typeof label === "string" ? (
              <div className="flex items-center ">
                <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {label}
                </FormLabel>
                {infoIcon && infoText && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{infoText}</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
            ) : (
              <FormLabel asChild>{label}</FormLabel>
            ))}
          <FormControl>
            <Input
              {...inputProps}
              {...field}
              className={cn(
                "pr-10 border-input focus:border-primary transition-colors",
                className
              )}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
      {...other}
    />
  );
}
