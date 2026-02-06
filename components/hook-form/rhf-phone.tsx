"use client";
import { Info } from "lucide-react";
import { useFormContext } from "react-hook-form";
import PhoneInput, {
  type Props as PhoneInputProps,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

// ----------------------------------------------------------------------
// Standalone PhoneField Component (without react-hook-form)
// ----------------------------------------------------------------------
type IPhoneFieldProps = {
  label?: string;
  value?: string;
  onChange?: (value: string | undefined) => void;
  error?: string;
  phoneInputProps?: Omit<
    PhoneInputProps<typeof PhoneInput>,
    "value" | "onChange"
  >;
  infoIcon?: boolean;
  infoText?: string;
  placeholder?: string;
  defaultCountry?: string;
  className?: string;
};

export function PhoneField({
  label,
  value,
  onChange,
  error,
  phoneInputProps,
  infoIcon,
  infoText,
  defaultCountry = "NG",
  placeholder,
  className,
}: IPhoneFieldProps) {
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
      <PhoneInput
        {...phoneInputProps}
        placeholder={placeholder}
        defaultCountry={
          defaultCountry as PhoneInputProps<typeof PhoneInput>["defaultCountry"]
        }
        value={value}
        onChange={(value) => onChange?.(value || "")}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none",
          "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-destructive",
          phoneInputProps?.className
        )}
        countrySelectProps={{
          className: cn(
            "bg-transparent outline-none border-none focus:ring-0 text-sm md:text-sm text-black",
            "mr-2"
          ),
        }}
        numberInputProps={{
          className: cn(
            "flex-1 bg-transparent outline-none border-none focus:ring-0 text-sm md:text-sm",
            "placeholder:text-muted-foreground"
          ),
        }}
      />
      {error && <p className="text-sm font-medium text-destructive">{error}</p>}
    </div>
  );
}

// ----------------------------------------------------------------------
// React Hook Form PhoneField Component
// ----------------------------------------------------------------------
type RHFPhoneProps = {
  name: string;
  label?: string;
  phoneInputProps?: Omit<
    PhoneInputProps<typeof PhoneInput>,
    "value" | "onChange"
  >;
  infoIcon?: boolean;
  infoText?: string;
  placeholder?: string;
  defaultCountry?: string;
  [otherOptions: string]: unknown;
};

export default function RHFPhone({
  name,
  label,
  phoneInputProps,
  infoIcon,
  infoText,
  defaultCountry = "NG",
  placeholder,
  ...other
}: RHFPhoneProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="items-center gap-2">
          {label && (
            <div className="flex items-center">
              <FormLabel>{label}</FormLabel>
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
          )}
          <FormControl>
            <PhoneInput
              {...phoneInputProps}
              placeholder={placeholder}
              defaultCountry={
                defaultCountry as PhoneInputProps<
                  typeof PhoneInput
                >["defaultCountry"]
              }
              value={field.value}
              onChange={field.onChange}
              className={cn(
                "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none",
                "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]",
                "disabled:cursor-not-allowed disabled:opacity-50",
                "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                phoneInputProps?.className
              )}
              countrySelectProps={{
                className: cn(
                  "bg-transparent outline-none border-none focus:ring-0 text-sm md:text-sm text-black",
                  "mr-2"
                ),
              }}
              numberInputProps={{
                className: cn(
                  "flex-1 bg-transparent outline-none border-none focus:ring-0 text-sm md:text-sm",
                  "placeholder:text-muted-foreground"
                ),
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
      {...other}
    />
  );
}
