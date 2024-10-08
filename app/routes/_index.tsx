import type { MetaFunction } from "@remix-run/cloudflare";
import FirstSection from "~/components/landing/firstSection";
import SecondSection from "~/components/landing/secondSection";
import ThirdSection from "~/components/landing/thirdSection";
import SectionFAQ from "~/components/landing/sectionFAQ";
import DivideComponent from "~/components/landing/divideComponent";
import Sectionheader from "~/components/landing/sectionheader";
import EarlyAdopterSection from "~/components/task/EarlyAdopterSection";
 
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
      <Sectionheader/>
      <DivideComponent/>
      {/* <FirstSection/> */}
      <SecondSection/>
      <div data-aos="fade-down-right" className="w-full">
      <EarlyAdopterSection/>

      <p className="text-3xl lg:text-4xl font-bold text-black text-center mt-40 w-full">Frecuently Asked Questions</p>
      <SectionFAQ />

      </div>
    </div>
  );
}
