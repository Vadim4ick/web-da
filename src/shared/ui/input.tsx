"use client";

import * as React from "react";

import { cn } from "@/shared/lib/utils";

function Input({
  className,
  type,
  label,
  ...props
}: React.ComponentProps<"input"> & {
  label: string;
}) {
  const [focused, setFocused] = React.useState(false);

  return (
    <div
      className={cn(
        "bg-additional-grey-neutral flex flex-col gap-[10px] rounded-[12px] px-4 pt-3 pb-[14px] transition-all",
        {
          "hover:bg-additional-grey-cold": !focused,
        },
      )}
    >
      <span className="font-raleway text-additional-grey-60 max-tablet:text-[12px] max-tablet:leading-[16px] text-[14px] leading-[18px] font-medium">
        {label}
      </span>

      <input
        type={type}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        data-slot="input"
        className={cn(
          "placeholder:text-additional-grey-60 max-tablet:text-[16px] max-tablet:leading-[20px] text-primary-black flex w-full bg-transparent text-[18px] leading-[22px] font-semibold transition-all outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    </div>
  );
}

export { Input };
