import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
export default function SecondSection() {
  return (
    <div className="grid w-full lg:grid-cols-[300px_1fr]">    
        <div className="flex items-center justify-center">
            <CardStack items={CARDS} />
        </div>
        <div className="xl font-bold text-white dark:text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto my-4 z-40 flex flex-col items-center justify-center">
            <span className="text-[16px] font-medium text-white dark:text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto lg:text-4xl">
              MEET THE MOST <span className="text-green-500">EXPERIENCED</span> IN THE WORLD
            </span>
            <p className="w-3/4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum natus ipsam commodi assumenda voluptates saepe cupiditate, vel dicta quod sint beatae voluptatem doloribus sequi amet deleniti distinctio magnam quae!
            </p>
        </div>
    </div>
  )
}


export const Highlight = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <span
        className={cn(
          "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
          className
        )}
      >
        {children}
      </span>
    );
  };
   
  const CARDS = [
    {
      id: 0,
      name: "Manu Arora",
      designation: "Senior Software Engineer",
      content: (
        <p>
          These cards are amazing, <Highlight>I want to use them</Highlight> in my
          project. Framer motion is a godsend ngl tbh fam 🙏
        </p>
      ),
    },
    {
      id: 1,
      name: "Elon Musk",
      designation: "Senior Shitposter",
      content: (
        <p>
          I dont like this Twitter thing,{" "}
          <Highlight>deleting it right away</Highlight> because yolo. Instead, I
          would like to call it <Highlight>X.com</Highlight> so that it can easily
          be confused with adult sites.
        </p>
      ),
    },
    {
      id: 2,
      name: "Tyler Durden",
      designation: "Manager Project Mayhem",
      content: (
        <p>
          The first rule of
          <Highlight>Fight Club</Highlight> is that you do not talk about fight
          club. The second rule of
          <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
          club.
        </p>
      ),
    },
  ];