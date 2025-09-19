import { Container } from "@/shared/ui/container";
import { cases } from "../model/const";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import Image from "next/image";
import { cn } from "@/shared/lib/utils";

const OurCases = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "max-tablet:pb-[128px] max-mobile:pb-[96px] pb-[160px]",
        className,
      )}
    >
      <Container className="max-tablet:gap-12 flex flex-col items-center gap-[80px]">
        <h2 className="text-primary-black max-mobile:text-[32px] max-mobile:leading-[110%] text-[48px] leading-[125%] font-semibold">
          Наши кейсы
        </h2>

        <div className="max-mobile:grid-cols-1 max-mobile:gap-6 grid w-full grid-cols-2 gap-x-6 gap-y-12">
          {cases.map((item) => (
            <Link
              href={"/cases/" + item.id}
              key={item.id}
              className="group max-tablet:gap-3 flex flex-col gap-6"
            >
              <div className="max-tablet:h-[236px] max-tablet:rounded-[12px] max-mobile:h-[230px] relative h-[440px] w-full overflow-hidden rounded-[20px]">
                <Image
                  fill
                  src={item.img}
                  alt={item.title}
                  className="absolute object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="max-tablet:bottom-3 max-tablet:opacity-100 max-tablet:left-3 max-tablet:gap-1.5 absolute bottom-6 left-6 z-10 flex flex-wrap gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  {item.labels.map((tag) => (
                    <span
                      key={tag}
                      className="text-primary-black max-tablet:py-2 max-tablet:px-3 max-tablet:text-[12px] rounded-[100px] bg-white px-[18px] py-3 text-[16px] leading-[125%] font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="max-tablet:hidden absolute top-0 left-0 h-full w-full bg-black/15 opacity-0 transition-all duration-300 group-hover:opacity-100" />
              </div>

              <div className="max-tablet:pl-3 tablet:gap-1 flex flex-col">
                <h3 className="text-primary-black max-tablet:text-[18px] text-[24px] leading-[125%] font-semibold">
                  {item.title}
                </h3>

                <p className="font-raleway text-additional-grey-60 max-tablet:text-[14px] text-[18px] leading-[125%] font-medium">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}

          <div className="max-mobile:mt-6 flex items-center justify-center">
            <Button className="max-tablet:max-w-[195px] max-tablet:max-h-[52px] max-tablet:text-[16px] max-tablet:leading-[20px] h-full max-h-[62px] w-full max-w-[227px] rounded-[100px] text-[18px] leading-[22px] font-bold">
              Заказать проект
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export { OurCases };
