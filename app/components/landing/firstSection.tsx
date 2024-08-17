import { motion } from "framer-motion";
import { Highlight } from "@/components/ui/hero-highlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Link } from "@remix-run/react";

export default function FirstSection() {
  return (
    <div className="w-full flex flex-col items-start container px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mt-10 sm:mt-20">
      {/* Contenedor con línea vertical y texto */}
      <div className="flex flex-col md:flex-row items-start md:space-x-6 w-full">
        {/* Línea verde vertical */}
        <div className="w-[2px] bg-[#0066FF] h-16 md:h-auto self-start md:self-stretch mb-4 md:mb-0 hidden lg:flex"></div>
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
            className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[36px] xl:text-[42px] 2xl:text-[48px] font-bold text-white leading-tight"
          >
            Get ready to{" "}
            <Highlight className="text-white z-20">
              Embrace Early Adoption
            </Highlight>{" "}
            and Earn Exclusive Rewards
          </motion.h1>
          <div className="text-sm md:text-base lg:text-lg font-bold text-white leading-relaxed">
            <TextGenerateEffect
              className="text-white"
              words="Unlock vast financial opportunities and effortlessly trade, earn interest and borrow assets across multiple blockchains, creating a unified and borderless financial network."
            />
          </div>
          <div className="flex justify-start">
            <Link to="/ta">
              <button className="relative w-60 p-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg transition duration-200 transform hover:scale-105">
                <div className="px-8 py-2 bg-black rounded-lg font-bold text-white hover:bg-transparent">
                  Explore Task
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
