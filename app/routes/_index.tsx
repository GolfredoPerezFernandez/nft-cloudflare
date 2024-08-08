import type { MetaFunction } from "@remix-run/cloudflare";
import FirstSection from "~/components/landing/firstSection";
import SecondSection from "~/components/landing/secondSection";
import ThirdSection from "~/components/landing/thirdSection";
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
    <div className="">
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
    </div>
  );
}
