import { BannerSend } from "@/components/BannerSend";
import { OurCases } from "@/components/OurCases";

export default function Home() {
  return (
    <>
      <OurCases className="max-tablet:pt-[64px] max-mobile:pt-[48px] pt-[80px]" />
      <BannerSend />
    </>
  );
}
