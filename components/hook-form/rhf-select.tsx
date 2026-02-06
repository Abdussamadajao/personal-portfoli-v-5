"use client";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown, Info } from "lucide-react";
import * as React from "react";
import { useFormContext } from "react-hook-form";

interface SelectOption {
  label: string;
  value: string | number;
}

// ----------------------------------------------------------------------
// Standalone SelectField Component (without react-hook-form)
// ----------------------------------------------------------------------
interface ISelectFieldProps {
  label?: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
  error?: string;
  placeholder?: string;
  options: SelectOption[];
  infoIcon?: boolean;
  infoText?: string;
  className?: string;
  showSearch?: boolean;
  footerLink?: {
    label: string;
    href: string;
  };
}

export function SelectField({
  label,
  value,
  onChange,
  error,
  placeholder,
  options = [],
  infoIcon,
  infoText,
  className,
  showSearch = true,
  footerLink,
}: ISelectFieldProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="space-y-[14px]">
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
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-full justify-between bg-transparent! h-10!",
              !value && "text-muted-foreground",
              error && "border-destructive",
              className
            )}
          >
            <span className="truncate">
              {value
                ? options.find((option) => option.value === value)?.label
                : placeholder || "Select option..."}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50 " />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="p-0"
          style={{ width: "var(--radix-popover-trigger-width)" }}
        >
          <Command>
            {showSearch && <CommandInput placeholder="Search..." />}
            <CommandList>
              <CommandEmpty>No option found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={String(option.value)}
                    onSelect={(currentValue) => {
                      const newValue =
                        typeof option.value === "number"
                          ? Number(currentValue)
                          : currentValue;
                      onChange?.(newValue === value ? "" : newValue);
                      setOpen(false);
                    }}
                    className="cursor-pointer"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === option.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
              {footerLink && (
                <>
                  <CommandSeparator />
                  <div className="p-2">
                    <a
                      href={footerLink.href}
                      className="text-xs text-primary hover:underline inline-block"
                      onClick={() => setOpen(false)}
                    >
                      {footerLink.label}
                    </a>
                  </div>
                </>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {error && <p className="text-sm font-medium text-destructive">{error}</p>}
    </div>
  );
}

// ----------------------------------------------------------------------
// React Hook Form SelectField Component
// ----------------------------------------------------------------------
interface IRHFSelectProps {
  name: string;
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  infoIcon?: boolean;
  infoText?: string;
  [otherOptions: string]: unknown;
}

export default function RHFSelect({
  name,
  label,
  placeholder,
  options = [],
  infoIcon,
  infoText,
  ...other
}: IRHFSelectProps) {
  const { control } = useFormContext();
  const [open, setOpen] = React.useState(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="items-center gap-2">
          <div className="flex items-center">
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
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className={cn(
                    "w-full justify-between h-10 bg-transparent",
                    !field.value && "text-secondary"
                  )}
                >
                  <span className="truncate max-w-md text-secondary">
                    {field.value
                      ? options.find((option) => option.value === field.value)
                        ?.label
                      : placeholder || "Select option..."}
                  </span>

                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent
              className="p-0"
              style={{ width: "var(--radix-popover-trigger-width)" }}
            >
              <Command>
                <CommandInput placeholder="Search..." />
                <CommandList>
                  <CommandEmpty>No option found.</CommandEmpty>
                  <CommandGroup>
                    {options.map((option) => (
                      <CommandItem
                        key={option.value}
                        value={String(option.value)}
                        onSelect={(currentValue) => {
                          const value =
                            typeof option.value === "number"
                              ? Number(currentValue)
                              : currentValue;
                          field.onChange(value === field.value ? "" : value);
                          setOpen(false);
                        }}
                        className="cursor-pointer"
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            field.value === option.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {option.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
      {...other}
    />
  );
}
