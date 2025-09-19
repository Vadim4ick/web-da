import { BannerSend } from "@/components/BannerSend";
import { CaseImagesBlocks } from "@/components/CaseImages";
import { Container } from "@/shared/ui/container";

const PageCase = () => {
  return (
    <section className="max-tablet:pt-[64px] pt-[80px]">
      <Container>
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-primary-black text-[48px] leading-[125%] font-semibold">
            Evergreen design
          </h1>
          <p className="text-additional-grey-60 font-raleway text-[24px] leading-[125%] font-medium">
            студия интерьерного озеленения
          </p>
        </div>

        <div className="about-grid pt-[80px] pb-[120px]">
          <article className="flex flex-col gap-6 rounded-[12px] bg-white px-[36px] py-[32px]">
            <h4 className="text-additional-soft-black text-[24px] leading-[125%] font-semibold">
              Задачи
            </h4>

            <p className="font-raleway text-additional-grey-50 text-[18px] leading-[130%] font-medium">
              Разработать современный, адаптивный сайт для компании,
              занимающейся поставками товаров для ландшафтного дизайна <br />
              <br />
              Обеспечить удобную навигацию и каталог продукции <br />
              <br /> Внедрить систему управления контентом для самостоятельного
              обновления информации <br />
              <br /> Оптимизировать сайт для поисковых систем
            </p>
          </article>

          <article className="flex flex-col gap-6 rounded-[12px] bg-white px-[36px] py-[32px]">
            <h4 className="text-additional-soft-black text-[24px] leading-[125%] font-semibold">
              Задачи
            </h4>

            <p className="font-raleway text-additional-grey-50 text-[18px] leading-[130%] font-medium">
              Разработать современный, адаптивный сайт для компании,
              занимающейся поставками товаров для ландшафтного дизайна <br />
              <br />
              Обеспечить удобную навигацию и каталог продукции <br />
              <br /> Внедрить систему управления контентом для самостоятельного
              обновления информации <br />
              <br /> Оптимизировать сайт для поисковых систем
            </p>
          </article>

          <article className="flex flex-col gap-6 rounded-[12px] bg-white px-[36px] py-[32px]">
            <h4 className="text-additional-soft-black text-[24px] leading-[125%] font-semibold">
              Задачи
            </h4>

            <p className="font-raleway text-additional-grey-50 text-[18px] leading-[130%] font-medium">
              Разработать современный, адаптивный сайт для компании,
              занимающейся поставками товаров для ландшафтного дизайна <br />
              <br />
              Обеспечить удобную навигацию и каталог продукции <br />
              <br /> Внедрить систему управления контентом для самостоятельного
              обновления информации <br />
              <br /> Оптимизировать сайт для поисковых систем
            </p>
          </article>
        </div>
      </Container>

      <CaseImagesBlocks />

      <Container>
        <BannerSend className="max-tablet:py-[128px] max-mobile:py-[128px] py-[160px]" />
      </Container>
    </section>
  );
};

export default PageCase;
