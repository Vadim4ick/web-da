/* eslint-disable @next/next/no-img-element */
'use client'

import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import { Banner as TBanner } from '@/payload-types'
import { ScrollLink } from '@/shared/ui/scrollLink'

// const slider = [
//   {
//     id: 1,
//     img: '/1.png',
//     title: 'Создаём современные, функциональные и привлекательные сайты',
//     subtitle:
//       ' Каждый проект разрабатывается индивидуально, с учетом специфики вашего бизнеса и ваших целей',
//   },
//   {
//     id: 2,
//     img: '/2.png',
//     title: 'Создаём современные, функциональные и привлекательные сайты',
//     subtitle:
//       ' Каждый проект разрабатывается индивидуально, с учетом специфики вашего бизнеса и ваших целей',
//   },
//   {
//     id: 3,
//     img: '/3.png',
//     title: 'Создаём современные, функциональные и привлекательные сайты',
//     subtitle:
//       ' Каждый проект разрабатывается индивидуально, с учетом специфики вашего бизнеса и ваших целей',
//   },
// ]

const Banner = ({ banners }: { banners: TBanner[] }) => {
  return (
    <section className="max-mobile:pt-[8px] max-tablet:pb-[80px] max-mobile:pb-[64px] py-[48px]">
      <Container>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={16}
          loop
          className="w-full overflow-hidden rounded-[20px]"
        >
          {banners.map((item) => (
            <SwiperSlide key={item.id}>
              <article className="bg-primary-blue tablet:min-h-[664px] tablet:h-[calc(100vh_-_var(--h-header)_-_96px)] max-tablet:h-[656px] max-tablet:flex-col relative flex items-end overflow-hidden rounded-[20px]">
                {/* Текстовый блок */}
                <div className="tablet:pl-[60px] max-tablet:items-center tablet:pt-[60px] tablet:pb-[60px] max-tablet:pb-[72px] max-mobile:pb-[64px] relative z-10 flex h-full flex-col justify-between gap-4 p-6">
                  <div className="max-tablet:gap-3 tablet:max-w-[600px] flex flex-col gap-6">
                    <h2 className="max-tablet:text-[22px] text-[40px] leading-[125%] font-semibold text-white">
                      {item.title}
                    </h2>
                    {item.description && (
                      <p className="font-raleway max-tablet:text-[14px] max-w-[511px] text-[24px] leading-[125%] font-semibold text-white opacity-70">
                        {item.description}
                      </p>
                    )}
                  </div>

                  <ScrollLink to={'contacts'} className="max-tablet:w-[160px] w-full max-w-[221px]">
                    <Button className="text-primary-blue max-tablet:h-[46px] font-montserrat max-tablet:max-w-[160px] max-tablet:text-[14px] max-tablet:leading-[18px] h-[66px] w-full rounded-[100px] bg-white text-[16px] text-[18px] leading-[22px] font-semibold hover:bg-[#E8F4FF]">
                      Заказать сайт
                    </Button>
                  </ScrollLink>
                </div>

                {/* Картинка */}
                {/* <div className="tablet:w-1/2 max-tablet:justify-end max-tablet:w-full max-tablet:left-1/2 max-tablet:-translate-x-1/2 absolute right-0 bottom-0 flex h-full items-end">
                  <img
                    src={item.img}
                    alt="slide"
                    className="max-tablet:max-h-[530px] max-tablet:object-cover max-tablet:h-[450px]"
                  />
                </div> */}

                {typeof item.image !== 'number' && item.image?.url && (
                  <div className="tablet:w-full tablet:max-w-[615px] desktop1250:max-w-[815px] max-tablet:justify-end max-tablet:w-full max-tablet:left-1/2 max-tablet:-translate-x-1/2 absolute right-0 bottom-0 flex h-full items-end">
                    <img
                      src={item.image.url}
                      alt={`slide ${item.id}`}
                      className="max-tablet:max-h-[530px] max-tablet:object-cover max-tablet:h-[450px]"
                    />
                  </div>
                )}
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  )
}

export { Banner }
