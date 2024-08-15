import type { MetaFunction } from "@remix-run/cloudflare";
import FirstSection from "~/components/landing/firstSection";
import SecondSection from "~/components/landing/secondSection";
import ThirdSection from "~/components/landing/thirdSection";
import SectionFAQ from "~/components/landing/sectionFAQ";
 
export const meta: MetaFunction = () => {
  return [
    { title: "landing" },
    {
      name: "",
      content: "",
    },
  ];
};

export default function Index() {
  return (
    <div>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <div data-aos="fade-down-right" className="w-full">
        <p className="text-lg md:text-xl font-bold text-white text-center w-full">Section FAQ</p>
        <SectionFAQ />
      </div>
    </div>
  );
}
