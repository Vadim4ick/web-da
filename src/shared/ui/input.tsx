/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client'

import * as React from 'react'

import { cn } from '@/shared/lib/utils'
import { FieldError } from 'react-hook-form'

import { IMaskInput } from 'react-imask'

function Input({
  className,
  type,
  label,
  error,
  ...props
}: React.ComponentProps<'input'> & {
  label: string
  error?: FieldError | undefined
}) {
  const [focused, setFocused] = React.useState(false)

  const inputClasses = cn(
    'placeholder:text-additional-grey-60 max-tablet:text-[16px] max-tablet:leading-[20px] text-primary-black flex w-full bg-transparent text-[18px] leading-[22px] font-semibold transition-all outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
    className,
    {
      'text-[#F22424]': error,
    },
  )

  return (
    <div
      className={cn(
        'bg-additional-grey-neutral flex flex-col gap-[10px] rounded-[12px] px-4 pt-3 pb-[14px] transition-all',
        {
          'hover:bg-additional-grey-cold': !focused,
        },
      )}
    >
      <span
        className={cn(
          'font-raleway text-additional-grey-60 max-tablet:text-[12px] max-tablet:leading-[16px] text-[14px] leading-[18px] font-medium',
          {
            'text-[#F22424]': error,
          },
        )}
      >
        {label}
      </span>

      {type === 'tel' ? (
        <IMaskInput
          mask="+7 (000) 000-00-00"
          unmask={true}
          onAccept={(value: string) => {
            // @ts-ignore
            props.onChange(value)
          }}
          placeholder="+7 (999) 123-45-67"
          className={inputClasses}
        />
      ) : (
        <input
          type={type}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          data-slot="input"
          className={inputClasses}
          {...props}
        />
      )}
    </div>
  )
}

export { Input }
