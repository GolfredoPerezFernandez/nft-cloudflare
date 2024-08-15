import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";

export default function SecondSection() {
  return (
    <div data-aos="fade-left" className="p-0 grid w-full lg:grid-cols-[300px_1fr] my-20 lg:my-44">
      <div className="flex items-center justify-left w-full">
        <CardStack  items={CARDS} />
      </div>
      <div className="font-bold text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto my-4 z-40 flex flex-col items-center lg:items-right justify-center text-right">
        <div className="w-full">
          <span className="text-[16px] lg:text-4xl mb-4">
            EMBARK ON YOUR <span className="text-[#0066FF]">BREAKDOWN</span> JOURNEY
          </span>
        </div>
        <div className="w-full">
          <p className="lg:pl-40  text-center lg:text-right text-sm md:text-base">
            {
              `Unlock the potential within. Every task you complete brings you one step closer to mastering the digital frontier. It's time to prove your worth and claim your rewards. The journey isn't easy, but it's worth every challenge.`
            }
          </p>
        </div>
      </div>
    </div>
  );
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
    name: "Alice Anderson",
    designation: "Blockchain Enthusiast",
    content: (
      <p>
        {`This platform is a game-changer. <Highlight>I can't wait to explore</Highlight> all the opportunities it provides. The future of digital engagement is here.`}
      </p>
    ),
  },
  {
    id: 1,
    name: "Bob Bailey",
    designation: "Crypto Pioneer",
    content: (
      <p>
        {`I've seen many projects, but <Highlight>Breakdown</Highlight> stands out. The integration of tasks and rewards makes it a unique and compelling experience. This is the next big thing.`}
      </p>
    ),
  },
  {
    id: 2,
    name: "Charlie Cooper",
    designation: "Digital Nomad",
    content: (
      <p>
       {`The first step to success is <Highlight>participation</Highlight>. Breakdown offers a straightforward yet challenging way to immerse in the world of blockchain. Let's get started.`}
      </p>
    ),
  },
];
