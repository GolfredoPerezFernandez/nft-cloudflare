import { GlareCard } from "@/components/ui/glare-card";
export default function ThirdSection() {
  return (
    <div className="grid w-full lg:grid-cols-2 my-28">    
    <div className="xl font-bold text-white dark:text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto my-4 z-40 flex flex-col items-center lg:items-start justify-center">
        <span className="text-[16px] font-medium text-white dark:text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto lg:text-4xl">
          MEET THE MOST <span className="text-green-500">EXPERIENCED</span> IN THE WORLD
        </span>
        <p className="w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum natus ipsam commodi assumenda voluptates saepe cupiditate, vel dicta quod sint beatae voluptatem doloribus sequi amet deleniti distinctio magnam quae!
        </p>
    </div>
    <div className="flex items-center justify-center">
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
        <p className="text-white font-bold text-xl mt-4">Aceternity</p>
        </GlareCard>
    </div>
</div>
  )
}
