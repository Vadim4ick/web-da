import { AboutInfo } from "@/components/AboutInfo";
import { Banner } from "@/components/Banner";
import { BannerSend } from "@/components/BannerSend";
import { OurCases } from "@/components/OurCases";

export default function Home() {
  return (
    <>
      <Banner />

      <AboutInfo />

      <OurCases />
      <BannerSend />
    </>
  );
}
