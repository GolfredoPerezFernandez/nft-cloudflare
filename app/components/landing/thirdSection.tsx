import { GlareCard } from "@/components/ui/glare-card";

export default function ThirdSection() {
  return (
    <div data-aos="fade-down-right" className="grid w-full lg:grid-cols-2 my-20 lg:my-28">
      <div className="font-bold text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto my-4 z-40 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
        <span className="text-[20px] lg:text-4xl mb-4">
          DISCOVER THE MOST <span className="text-[#0066FF]">INNOVATIVE</span> MINDS
        </span>
        <p className="w-full md:w-3/4 text-sm md:text-base">
          Dive deep into the world of Breakdown, where the brightest minds collaborate to redefine the boundaries of digital innovation. Join us and meet the pioneers who are leading this revolution. Their expertise and vision are shaping the future, and you can be a part of it.
        </p>
      </div>
      <div className="flex items-center justify-center w-full">
        <GlareCard className="flex flex-col items-center justify-center">
          <svg
            width="66"
            height="65"
            viewBox="0 0 66 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-white"
          >
            <path
              d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
              stroke="currentColor"
              strokeWidth="15"
              strokeMiterlimit="3.86874"
              strokeLinecap="round"
            />
          </svg>
          <p className="text-white font-bold text-xl mt-4">Breakdown Innovators</p>
        </GlareCard>
      </div>
    </div>
  );
}
