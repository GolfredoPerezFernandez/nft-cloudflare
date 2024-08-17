import { motion } from "framer-motion";
import { Highlight } from "@/components/ui/hero-highlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Link } from "@remix-run/react";

export default function FirstSection() {
  return (
    <div className="w-full flex flex-col items-start container">
      {/* Contenedor con línea vertical y texto */}
      <div className="flex flex-col md:flex-row items-start md:space-x-4 w-full px-4 md:px-8">
        {/* Línea verde vertical */}
        <div className="w-[2px] bg-[#0066FF] h-16 md:h-auto self-start md:self-stretch mb-4 md:mb-0 hidden lg:flex "></div>
        <div className="flex flex-col space-y-4 max-w-full md:max-w-4xl">
          <div className="text-lg md:text-xl lg:text-2xl font-bold">
            <span className="text-lg md:text-xl font-bold text-white">
            Xentro Early Adopters Airdrop
            </span>
          </div>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-[20px] md:text-[28px] lg:text-[36px] xl:text-5xl font-bold text-white leading-tight"
          >
            Get ready to{" "}
            <Highlight className="text-white z-20">
            Embrace Early Adoption  
            </Highlight>{" "}
            and Earn Exclusive Reward
          </motion.h1>
          <div className="text-sm md:text-base font-bold text-white leading-relaxed">
            <TextGenerateEffect 
              className="text-white"
              words="Unlock vast financial opportunities and effortlessly trade, earn interest and borrow assets across multiple blockchains, creating a unified and borderless financial network.."
            />
          </div>
          <button className="p-[3px] relative w-60">
            <Link to="/ta">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px] font-bold relative group transition duration-200 text-white hover:bg-transparent">
    Explore Task
  </div></Link>
</button>
        </div>
      </div>
    </div>
  );
}
