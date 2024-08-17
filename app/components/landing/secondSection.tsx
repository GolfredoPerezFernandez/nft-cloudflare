import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";

export default function SecondSection() {
  return (
    <div data-aos="fade-left" className=" grid pl-20 w-full lg:grid-cols-[300px_1fr] mt-[-30px] my-10 lg:my-10 container">
      <div className="flex  items-center justify-left w-full">
        <CardStack  items={CARDS} />
      </div>
      <div className="font-bold text-black max-w-4xl leading-relaxed lg:leading-snug mx-auto my-4 z-40 flex flex-col items-center lg:items-right justify-center text-right">
        <div className="w-full">
          <span className="text-[16px] lg:text-4xl mb-4">
          Gateway to  <span className="text-[#0066FF]">UNTRAD </span> Banking
          </span>
        </div>
        <div className="w-full">
          <p className="lg:pl-40 text-black text-center lg:text-right text-sm md:text-base">
            {
              `Enjoy Finance on a Freeway with Xentro.`
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
    id: 1,
    name: "Decentralized Finance (DeFi) Integration.",
    designation: "",
    content: (
      <p>
        {`Seamlessly Connect with the Future of Finance
Description: Access a wide range of DeFi services directly from our platform, allowing you to earn, borrow, and invest with unprecedented ease and security.`}
      </p>
    ),
  },
  {
    id: 2,
    name: "Non-Custodial Management.",
    designation: "",
    content: (
      <p>
        {`Retain Full Control Over Your Assets
Description: Manage your assets without intermediaries. Xentro’s non-custodial approach ensures that you remain in full control of your funds at all times, enhancing security and autonomy.`}
      </p>
    ),
  },
  {
    id: 3,
    name: "Discover Top-Tier, Secure Yield Options.",
    designation: "",
    content: (
      <p>
       {`Access a curated selection of exclusive, secure investment opportunities with varying yield potentials, tailored to suit different risk profiles and financial goals.`}
      </p>
    ),
  },
  {
    id: 4,
    name: "Seamless Cross-Chain Bridging.",
    designation: "",
    content: (
      <p>
       {`Effortlessly Connect Assets Across Blockchains
Description: Effortlessly move assets between different blockchains, enabling greater flexibility and integration within the decentralized financial ecosystem.`}
      </p>
    ),
  },
];
