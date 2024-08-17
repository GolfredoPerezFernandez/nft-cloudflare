import type { MetaFunction } from "@remix-run/cloudflare";
import AirdropFAQ from "~/components/landing/airdropFAQ";
import ThirdSection from "~/components/landing/thirdSection";
import { TaskComponent } from "~/components/task/taskComponent";
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
    <div className="w-fit m-auto p-7 rounded-2xl bg-white">
            <p className="text-3xl lg:text-4xl font-bold text-black text-center mt-20 mb-20 w-full">Complete the Task</p>

      <TaskComponent/>
      <p className="text-3xl lg:text-4xl font-bold text-black text-center mt-40 mb-[-80px] w-full">NFT REWARD</p>

      <ThirdSection/>
      <p className="text-3xl lg:text-4xl font-bold text-black text-center mt-40 w-full">Frecuently Asked Questions</p>

      <AirdropFAQ/>

    </div>
  );
}
