"use client";

import { Container } from "@/shared/ui/container";
import { about, advantages, services } from "../model/const";
import { AboutServicesCard } from "./AboutServicesCard";
import { useMediaQuery } from "@/shared/hooks/useMedia";
import { cn } from "@/shared/lib/utils";

const AboutInfo = () => {
  const isTablet = useMediaQuery(991);

  return (
    <section className="max-tablet:py-[64px] max-tablet:rounded-[20px] max-tablet:gap-[96px] max-mobile:gap-[80px] mb-[120px] flex flex-col gap-[160px] rounded-[40px] bg-white py-[120px]">
      <Container className="mobile:px-[24px] max-mobile:px-4 max-w-[1392px]">
        <div className="max-tablet:gap-[48px] flex flex-col gap-[80px]">
          <div className="max-mobile:gap-3 flex flex-col items-center justify-center gap-4">
            <h3 className="text-primary-black max-mobile:text-[32px] text-center text-[48px] leading-[125%] font-semibold">
              {about.title}
            </h3>

            <p className="font-raleway text-additional-grey-50 max-mobile:text-[16px] max-tablet:text-additional-grey-60 max-w-[582px] text-center text-[18px] leading-[130%] font-medium">
              {about.desc}
            </p>
          </div>

          <div className="about-grid">
            {about.items.map((item) => (
              <article
                key={item.id}
                className="bg-additional-grey-cold max-tablet:gap-[20px] max-mobile:gap-[36px] max-mobile:px-[28px] max-mobile:py-[24px] flex flex-col gap-12 rounded-[12px] px-[36px] py-[32px]"
              >
                <h4 className="text-primary-blue max-mobile:text-[24px] text-[32px] leading-[125%] font-semibold">
                  {item.title}
                </h4>

                <p className="font-raleway max-mobile:text-[14px] text-additional-grey-50 text-[18px] leading-[130%] font-medium">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>

      <Container className="mobile:px-[24px] max-mobile:px-4 max-w-[1392px]">
        <div className="max-tablet:gap-[48px] flex flex-col gap-[80px]">
          <h3 className="text-primary-black max-mobile:text-[32px] text-center text-[48px] leading-[125%] font-semibold">
            {advantages.title}
          </h3>

          <div className="about-grid">
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

      <Container className="mobile:px-[24px] max-mobile:px-4 max-tablet:pr-[0!important] max-w-[1392px]">
        <div className="max-tablet:gap-[48px] flex flex-col gap-[80px]">
          <h3 className="text-primary-black max-mobile:text-[32px] text-center text-[48px] leading-[125%] font-semibold">
            {services.title}
          </h3>

          <div
            className={cn(
              "max-tablet:flex max-tablet:items-start max-tablet:gap-4 max-tablet:overflow-auto max-mobile:flex-col max-mobile:gap-3 pr-4",
              {
                "about-grid": !isTablet,
              },
            )}
          >
            {services.items.map((item, idx) => (
              <AboutServicesCard key={item.id} item={item} idx={idx} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export { AboutInfo };

{
  /* <article
    key={item.id}
    className="group relative flex h-fit flex-col gap-1"
  >
    <div className="bg-additional-grey-cold flex flex-col rounded-[20px] px-[36px] py-[32px] transition-all duration-[450ms] group-hover:rounded-b-[0px]">

      <div className="text-primary-blue mb-[64px] text-[36px] leading-[125%] font-semibold">
        {pad2(idx + 1)}
      </div>

      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-[12px]">
          <h4 className="text-primary-black text-[24px] leading-[125%] font-semibold">
            {item.title}
          </h4>
          <p className="text-additional-grey-50 font-raleway text-[16px] leading-[130%] font-medium">
            {item.desc}
          </p>
        </div>

        <div className="text-primary-black text-[24px] leading-[125%] font-semibold">
          от {formatPrice(item.price)} ₽
        </div>
      </div>
    </div>

    <div className="flex max-h-0 flex-col gap-1 overflow-hidden opacity-0 transition-all duration-[450ms] group-hover:max-h-[200px] group-hover:opacity-100">
      <div className="text-primary-black bg-additional-grey-cold flex flex-col gap-1.5 px-[36px] py-[32px] text-[14px]">
        <div className="font-raleway flex justify-between text-[16px] leading-[130%] font-semibold">
          <span>система управления сайтом</span>
          <span>+ 8 000 ₽</span>
        </div>
        <div className="font-raleway flex justify-between text-[16px] leading-[130%] font-semibold">
          <span>наполнение контентом</span>
          <span>от 10 000 ₽</span>
        </div>
        <div className="font-raleway flex justify-between text-[16px] leading-[130%] font-semibold">
          <span>пакет юридических услуг</span>
          <span>от 8 000 ₽</span>
        </div>
      </div>

      <Button className="font-montserrat h-[60px] w-full rounded-t-[0px] rounded-b-[20px] text-[16px] leading-[20px]">
        Заказать
      </Button>
    </div>
  </article> */
}
