import { motion } from "framer-motion";
import { Highlight } from "@/components/ui/hero-highlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function FirstSection() {
  return (
    <div className="my-10 md:my-20 lg:my-40 w-full flex flex-col items-start">
      {/* Contenedor con línea vertical y texto */}
      <div className="flex flex-col md:flex-row items-start md:space-x-4 w-full px-4 md:px-8">
        {/* Línea azul vertical */}
        <div className="w-[2px] bg-blue-500 h-16 md:h-auto self-start md:self-stretch mb-4 md:mb-0"></div>
        <div className="flex flex-col space-y-4 max-w-full md:max-w-4xl">
          <div className="text-lg md:text-xl lg:text-2xl font-bold text-blue-100">
            <span className="text-lg md:text-xl font-bold text-blue-100">
              Welcome to Breakdown
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
            className="text-[20px] md:text-[28px] lg:text-[36px] xl:text-5xl font-bold text-blue-100 leading-tight"
          >
            Get ready to{" "}
            <Highlight className="text-black z-20">
              break the limits
            </Highlight>{" "}
            and enter the new era. Your journey starts now.
          </motion.h1>
          <div className="text-sm md:text-base font-bold text-blue-100 leading-relaxed">
            <TextGenerateEffect 
              className="text-blue-100"
              words="Complete exciting tasks, earn points, and mint your unique NFT. Are you ready to unlock exclusive rewards? Let's make your mark in the digital world."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
