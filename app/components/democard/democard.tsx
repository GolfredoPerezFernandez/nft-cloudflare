import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import React, { useState, useEffect } from "react";
import { createPublicClient, createWalletClient, custom, http, parseEther, WalletClient } from 'viem'
import { base } from 'viem/chains'
import { useAccount } from 'wagmi'
import mintABI from '../../abi/mint.json'

declare global {
  interface Window {
    ethereum: any;
  }
}

export function DemoCard() {
  const { address } = useAccount(); // Assume using Wagmi to get the user's wallet address
  const [walletClient, setWalletClient] = useState<WalletClient | null>(null);
  const [minting, setMinting] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.ethereum) {
      const client = createWalletClient({
        account: address,
        chain: base,
        transport: custom(window.ethereum)
      });
      setWalletClient(client);
    }
  }, [address]);

  // Viem client setup
  const client = createPublicClient({
    chain: base,
    transport: http('https://mainnet.infura.io/v3/2GVwX3wwtCmTMM5PjDPD2p67ZDL'),
  });

  const handleMint = async () => {
    if (!walletClient) {
      console.error("Wallet client is not initialized");
      return;
    }

    if (!address) {
      console.error("No address found. Please connect your wallet.");
      return;
    }

    setMinting(true);

    try {
      const request = await client.simulateContract({
        address: '0x6846CFAcf21bcf97c3e078bc2c376244594A8bb9',
        abi: mintABI,
        functionName: 'safeMint',
        args: [address, "https://example.com/metadata.json"],  // Provide a valid URI for the NFT    
        value: parseEther("1.5"), 
        account:address// Assuming 1.5 ETH is the required fee
      });

      // Check if request is valid before proceeding
      if (!request) {
        throw new Error("Failed to create request from simulateContract");
      }

      await walletClient.writeContract(request);

      console.log("Mint successful");
    } catch (error) {
      console.error("Mint failed:", error);
    } finally {
      setMinting(false);
    }
  };

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            onClick={handleMint}
            disabled={minting || !walletClient || !address}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            {minting ? "Minting..." : "Mint Now"}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
