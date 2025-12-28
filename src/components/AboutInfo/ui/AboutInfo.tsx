'use client'

import { Container } from '@/shared/ui/container'
import { advantages, services } from '../model/const'
import { AboutServicesCard } from './AboutServicesCard'
import { useMediaQuery } from '@/shared/hooks/useMedia'
import { cn } from '@/shared/lib/utils'
import { About, Service } from '@/payload-types'

const AboutInfo = ({
  servicesItems,
  aboutInfo,
}: {
  servicesItems: Service[]
  aboutInfo: About
}) => {
  const isDesktop1150 = useMediaQuery(1150)

  return (
    <section className="max-tablet:py-[64px] max-mobile:py-[48px] max-mobile:mb-[64px] max-tablet:rounded-[20px] max-tablet:gap-[96px] max-mobile:gap-[80px] mb-[120px] flex flex-col gap-[160px] rounded-[40px] bg-white py-[120px]">
      <Container className="mobile:px-[24px] max-mobile:px-4 max-w-[1392px]">
        <div className="max-tablet:gap-[48px] flex flex-col gap-[80px]">
          <div
            id="about"
            className="max-mobile:gap-3 flex flex-col items-center justify-center gap-4"
          >
            <h3 className="text-primary-black max-mobile:text-[32px] text-center text-[48px] leading-[125%] font-semibold">
              {aboutInfo.title}
            </h3>

            {aboutInfo.description && (
              <p className="font-raleway text-additional-grey-50 max-mobile:text-[16px] max-tablet:text-additional-grey-60 max-w-[582px] text-center text-[18px] leading-[130%] font-medium">
                {aboutInfo.description}
              </p>
            )}
          </div>

          {aboutInfo.items && (
            <div className="about-grid">
              {aboutInfo.items.map((item) => (
                <article
                  key={item.id}
                  className="bg-additional-grey-cold max-tablet:gap-[20px] max-mobile:gap-[36px] max-mobile:px-[28px] max-mobile:py-[24px] flex flex-col gap-12 rounded-[12px] px-[36px] py-[32px]"
                >
                  <h4 className="text-primary-blue max-mobile:text-[24px] text-[32px] leading-[125%] font-semibold">
                    {item.title}
                  </h4>

                  <p className="font-raleway max-mobile:text-[14px] text-additional-grey-50 text-[18px] leading-[130%] font-medium">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>
      </Container>

      <Container className="mobile:px-[24px] max-mobile:px-4 max-w-[1392px]">
        <div id="advantages" className="max-tablet:gap-[48px] flex flex-col gap-[80px]">
          <h3 className="text-primary-black max-mobile:text-[32px] text-center text-[48px] leading-[125%] font-semibold">
            {advantages.title}
          </h3>

          <div className="grid grid-cols-2 gap-6">
            {advantages.items.map((item) => (
              <article
                key={item.id}
                className="bg-additional-grey-cold max-mobile:gap-[36px] max-mobile:px-[28px] max-mobile:py-[24px] flex flex-col gap-[48px] rounded-[12px] px-[36px] py-[32px]"
              >
                <div className="max-mobile:size-[64px] flex size-[72px] items-center justify-center">
                  <item.Icon />
                </div>

                <div className="max-mobile:gap-3 flex flex-col gap-[20px]">
                  <h4 className="text-primary-black max-mobile:text-[18px] text-[20px] leading-[125%] font-semibold">
                    {item.title}
                  </h4>

                  <p className="font-raleway max-mobile:text-[14px] text-additional-grey-50 text-[16px] leading-[130%] font-medium">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>

      <Container className="mobile:px-[24px] max-mobile:px-4 max-desktop:pr-[0!important] max-w-[1392px]">
        <div id="services" className="max-tablet:gap-[48px] flex flex-col gap-[80px]">
          <h3 className="text-primary-black max-mobile:text-[32px] text-center text-[48px] leading-[125%] font-semibold">
            {services.title}
          </h3>

          <div
            className={cn(
              'max-desktop:flex max-desktop:items-start scrollbar-hide max-desktop:gap-4 max-desktop:overflow-auto max-mobile:flex-col max-mobile:gap-3 pr-4',
              {
                'about-grid': !isDesktop1150,
              },
            )}
          >
            {servicesItems.map((item, idx) => (
              <AboutServicesCard key={item.id} item={item} idx={idx} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export { AboutInfo }
