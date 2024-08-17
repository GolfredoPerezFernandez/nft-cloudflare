import { FaWallet, FaTasks, FaMedal, FaTrophy } from "react-icons/fa";

export default function EarlyAdopterSection() {
  return (
    <div className="container mx-auto mt-32  px-4 sm:px-6 md:px-8  lg:px-10 xl:px-12 mt-10 bg-white rounded-lg  py-10">
      <h2 className="text-2xl  md:text-3xl lg:text-4xl font-bold text-[#001133] mb-24 text-center">
        How can I become an early adopter?
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex flex-col items-center text-center">
          <FaWallet className="text-indigo-500 text-4xl md:text-5xl lg:text-6xl mb-4" />
          <h3 className="text-xl md:text-2xl font-semibold text-[#001133]">
            Connect your wallet
          </h3>
          <p className="text-sm md:text-base text-[#333] leading-relaxed max-w-xs">
            Connect your secure, non-custodial wallet to the Xentro platform to get started.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaTasks className="text-indigo-500 text-4xl md:text-5xl lg:text-6xl mb-4" />
          <h3 className="text-xl md:text-2xl font-semibold text-[#001133]">
            Complete the Xentro Warrior tasks
          </h3>
          <p className="text-sm md:text-base text-[#333] leading-relaxed max-w-xs">
            Participate in exclusive tasks designed for early adopters to earn your Xentro Warrior badge.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaMedal className="text-indigo-500 text-4xl md:text-5xl lg:text-6xl mb-4" />
          <h3 className="text-xl md:text-2xl font-semibold text-[#001133]">
            Mint a Xentro Warrior badge
          </h3>
          <p className="text-sm md:text-base text-[#333] leading-relaxed max-w-xs">
            Once you’ve completed the tasks, mint your Xentro Warrior badge as proof of your early adoption.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaTrophy className="text-indigo-500 text-4xl md:text-5xl lg:text-6xl mb-4" />
          <h3 className="text-xl md:text-2xl font-semibold text-[#001133]">
            Gain points in the airdrop
          </h3>
          <p className="text-sm md:text-base text-[#333] leading-relaxed max-w-xs">
            Participate in additional tasks to earn points that will increase your allocation in the upcoming airdrop.
          </p>
        </div>
      </div>
    </div>
  );
}
