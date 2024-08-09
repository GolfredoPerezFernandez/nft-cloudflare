import { motion } from "framer-motion";
import { Highlight } from "@/components/ui/hero-highlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
export default function FirstSection() {
  return (
    <div data-aos="fade-up-right" className="my-20 md:my-40 w-full flex flex-col md:flex-row items-start">
      {/* Contenedor con línea vertical y texto */}
      <div className="flex items-start md:space-x-4">
        {/* Línea verde vertical */}
        <div className="w-[2px] bg-green-500 mr-4 h-full md:h-auto align-self-stretch"></div>
        <div>
          <div className="text-lg md:text-xl lg:text-2xl font-bold text-white dark:text-white max-w-full md:max-w-4xl leading-relaxed lg:leading-snug mx-auto my-4">
            <span className="text-lg md:text-xl font-bold text-white dark:text-white leading-relaxed lg:leading-snug mx-auto">
              Lorem ipsum
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
            className="text-[16px] md:text-[20px] lg:text-5xl font-bold text-white dark:text-white max-w-full md:max-w-4xl leading-relaxed lg:leading-snug mx-auto px-2 md:px-4"
          >
            With insomnia, nothing&apos;s real. Everything is far away. Everything
            is a{" "}
            <Highlight className="text-white dark:text-white z-20">
              copy, of a copy, of a copy.
            </Highlight>
          </motion.h1>
          <div className="text-sm md:text-base xl font-bold text-white dark:text-white max-w-full md:max-w-4xl leading-relaxed lg:leading-snug mx-auto my-4 z-40">
            <TextGenerateEffect 
           className="text-white"
            words="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates sunt distinctio esse. Esse voluptatibus laborum dignissimos minima architecto placeat ipsam praesentium? Delectus, odit itaque doloribus praesentium labore alias quibusdam ipsa!"/>
            {/* <p className="text-[14px] md:text-[16px] font-medium text-white dark:text-white max-w-full md:max-w-4xl leading-relaxed lg:leading-snug mx-auto">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates sunt distinctio esse. Esse voluptatibus laborum dignissimos minima architecto placeat ipsam praesentium? Delectus, odit itaque doloribus praesentium labore alias quibusdam ipsa!
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}