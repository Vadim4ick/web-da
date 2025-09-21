'use client'

import { cn, formatPrice, pad2 } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { ArrowBottom } from '@/shared/icons/ArrowBottom'
import { useMediaQuery } from '@/shared/hooks/useMedia'
import { Service } from '@/payload-types'

export function AboutServicesCard({ item, idx }: { item: Service; idx: number }) {
  const isTablet = useMediaQuery(991)
  const [open, setOpen] = useState(false)

  return (
    <article
      key={item.id}
      className={cn(
        'group about-card max-tablet:flex-[0_0_432px] max-mobile:flex-[0_0_auto] relative flex h-fit flex-col gap-1',
      )}
      onMouseEnter={!isTablet ? () => setOpen(true) : undefined}
      onMouseLeave={!isTablet ? () => setOpen(false) : undefined}
    >
      <div
        className={cn(
          'bg-additional-grey-cold max-mobile:py-[24px] max-mobile:px-[28px] relative flex flex-col rounded-[20px] px-[36px] py-[32px] transition-all duration-[450ms]',
          {
            'rounded-b-[0px]': open,
          },
        )}
      >
        {/* Номер */}
        <div className="text-primary-blue max-mobile:text-[28px] max-mobile:mb-12 mb-[64px] text-[36px] leading-[125%] font-semibold">
          {pad2(idx + 1)}
        </div>

        {/* Контент */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <h4 className="text-primary-black max-mobile:text-[20px] text-[24px] leading-[125%] font-semibold">
              {item.title}
            </h4>

            {item.description && (
              <p className="text-additional-grey-50 font-raleway max-mobile:text-[14px] text-[16px] leading-[130%] font-medium">
                {item.description}
              </p>
            )}
          </div>

          <div className="text-primary-black max-mobile:text-[20px] text-[24px] leading-[125%] font-semibold">
            от {formatPrice(item.priceFrom)} ₽
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="tablet:hidden absolute right-4 bottom-4 flex size-[32px] items-center justify-center rounded-full bg-white"
        >
          <ArrowBottom
            className={cn('transition-all duration-[450ms]', open ? 'rotate-180' : '')}
          />
        </button>
      </div>

      {/* Блок при hover */}
      {item.extras && (
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="flex flex-col gap-1 overflow-hidden"
            >
              <div className="text-primary-black max-mobile:py-[24px] max-mobile:px-[28px] bg-additional-grey-cold flex flex-col gap-1.5 px-[36px] py-[32px] text-[14px]">
                {item.extras.map((extra) => (
                  <div
                    key={extra.id}
                    className="font-raleway max-mobile:text-[12px] flex justify-between text-[16px] leading-[130%] font-semibold"
                  >
                    <span>{extra?.name}</span>
                    <span>{extra?.price}</span>
                  </div>
                ))}
              </div>

              <Button className="font-montserrat max-mobile:h-[54px] max-mobile:text-[14px] h-[60px] w-full rounded-t-[0px] rounded-b-[20px] text-[16px] leading-[20px]">
                Заказать
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </article>
  )
}
