"use client";
import { Info } from "lucide-react";
import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea, type TextareaProps } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

// ----------------------------------------------------------------------
// Standalone TextAreaField Component (without react-hook-form)
// ----------------------------------------------------------------------
interface ITextAreaFieldProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  description?: string;
  textAreaProps?: TextareaProps;
  infoIcon?: boolean;
  infoText?: string;
  className?: string;
}

export function TextAreaField({
  label,
  value,
  onChange,
  error,
  description,
  textAreaProps,
  infoIcon,
  infoText,
  className,
}: ITextAreaFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
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
      <Textarea
        {...textAreaProps}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={cn(
          error && "border-destructive ",
          textAreaProps?.className,
          "bg-transparent"
        )}
      />
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      {error && <p className="text-sm font-medium text-destructive">{error}</p>}
    </div>
  );
}

// ----------------------------------------------------------------------
// React Hook Form TextAreaField Component
// ----------------------------------------------------------------------
interface IRHFTextAreaProps {
  name: string;
  label?: string;
  description?: string;
  textAreaProps?: TextareaProps;
  infoIcon?: boolean;
  infoText?: string;
  [otherOptions: string]: unknown;
}

export default function RHFTextArea({
  name,
  label,
  textAreaProps,
  description,
  infoIcon,
  infoText,
  ...other
}: IRHFTextAreaProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex items-center gap-1">
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
          <FormControl>
            <Textarea
              {...textAreaProps}
              {...field}
              className={cn(textAreaProps?.className, "bg-transparent")}
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
      {...other}
    />
  );
}
