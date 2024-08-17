import { GlareCard } from "@/components/ui/glare-card";
import { DemoCard } from "../democard/democard";

export default function ThirdSection() {
  return (
    <div data-aos="fade-down-right" className="grid pl-20 w-full mt-[-20px] lg:grid-cols-2 my-20 lg:my-28 container">
      
      <div className="font-bold text-black max-w-4xl leading-relaxed lg:leading-snug mx-auto my-4 z-40 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
        <span className="text-[20px] lg:text-4xl mb-4">
        Our  <span className="text-[#0066FF]">Mission</span> 
        </span>
        <p className="w-full md:w-3/4 text-sm md:text-base text-black">
        At Xentro, our mission is to revolutionize financial management by leveraging the power of blockchain technology. We aim to provide a transparent, secure, and user-centric platform that enables you to take full control of your financial future.
        </p>
      </div>
      <div className="flex items-center justify-center w-full">
        <DemoCard/>
      </div>
    </div>
  );
}
