import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
export default function AirdropFAQ() {
  return (
    <div className="container">
      <Accordion type="single" collapsible className="w-full p-20">
          <AccordionItem value="item-1">
          <AccordionTrigger className="text-black">What is Xentro?</AccordionTrigger>
          <AccordionContent className="text-black">
          Xentro offers robust staking, bridging, and trading opportunities within the web3 ecosystem, catering to those seeking innovative financial products in cryptocurrency. We aim to provide a platform that supports secure low & high yield activities and enhances accessibility to decentralized financial services.
          </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
          <AccordionTrigger className="text-black">What are the benefits for the early adopters of Xentro?</AccordionTrigger>
          <AccordionContent className="text-black">
          Early adopters of Xentro will enjoy the advantages of accessing offerings ahead of others, positioning themselves as ambassadors of the project. By being an early supporter, you also play a crucial role in shaping the project's advancement and adoption while gaining insights into its growth and development.          </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
          <AccordionTrigger className="text-black">What is the Xentro Warrior badge?</AccordionTrigger>
          <AccordionContent className="text-black">
          It qualifies holders for our upcoming airdrop and exclusive benefits, while also filtering out airdrop hunters, farmers, and sybils to maintain exclusivity for our core community.          </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
          <AccordionTrigger className="text-black"> Why are the badges capped at only 200,000?</AccordionTrigger>
          <AccordionContent className="text-black">
          We have set this limit to ensure the campaign runs efficiently and concludes promptly, without indefinite extension.
          </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
          <AccordionTrigger className="text-black">What happens when all badges are minted?</AccordionTrigger>
          <AccordionContent className="text-black">
          Once all badges are minted, the next phase of airdrop and product launch is immediately activated.          </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
          <AccordionTrigger className="text-black">When does the airdrop start and end?</AccordionTrigger>
          <AccordionContent className="text-black">
          The countdown to the airdrop has officially begun. Please refer to our website or official announcements for specific start and end dates.
          </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
          <AccordionTrigger className="text-black"> What blockchain network can I mint the Xentro Warrior badge?</AccordionTrigger>
          <AccordionContent className="text-black">
          To mint a Xentro Warrior badge, you must have ETH on the Base network to cover blockchain transaction costs.          </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
          <AccordionTrigger className="text-black"> Do I need to pay anything to participate in the airdrop?</AccordionTrigger>
          <AccordionContent className="text-black">
          No, participation in the airdrop is free. You only need to pay the Base blockchain network fee to mint your Xentro Warrior badge. Be cautious of any sites or individuals asking for payment, as they may be fraudulent.   
          </AccordionContent>
           </AccordionItem>
        

           <AccordionItem value="item-7">
          <AccordionTrigger className="text-black"> What wallet can I use?</AccordionTrigger>
          <AccordionContent className="text-black">
          We recommend using a secure & verified non-custodial wallet compatible with the Base network. Some trusted examples are MetaMask, Trustwallet, TokenPocket.          
           </AccordionContent>
          </AccordionItem>

          
          <AccordionItem value="item-7">
          <AccordionTrigger className="text-black"> Do I need a referral to mint a Xentro Warrior badge?</AccordionTrigger>
          <AccordionContent className="text-black">
          No, you don’t need a referral to mint a Xentro Warrior Badge.
              </AccordionContent>
          </AccordionItem>

          
          <AccordionItem value="item-7">
          <AccordionTrigger className="text-black"> Why can’t I find my referral link?</AccordionTrigger>
          <AccordionContent className="text-black">
          To get a referral link you must complete the Xentro Warrior Exclusive tasks and mint the Xentro Warrior Badge.
          </AccordionContent>
          </AccordionItem>


          <AccordionItem value="item-7">
          <AccordionTrigger className="text-black"> What are score points?</AccordionTrigger>
          <AccordionContent className="text-black">
          This determines your allocation in our upcoming airdrop. We advise to perform all tasks to get the maximum amount of points.
          </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
          <AccordionTrigger className="text-black"> How do I claim my airdrop tokens?</AccordionTrigger>
          <AccordionContent className="text-black">
          After the completion of the airdrop qualification phase, a snapshot will be taken and instructions on how to claim your tokens will be published. Typically, this will involve connecting your eligible wallet address through our platform to claim your tokens.
          </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
          <AccordionTrigger className="text-black"> What about the whitepaper and roadmap?</AccordionTrigger>
          <AccordionContent className="text-black">
          The whitepaper and roadmap will be released concurrently with our product launch, outlining comprehensive details and strategic direction for our offerings.
          </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-7">
          <AccordionTrigger className="text-black">Where can I find more information about Xentro and the airdrop?</AccordionTrigger>
          <AccordionContent className="text-black">
          For the latest information, visit our official website, follow our social media channels, and check our announcements. We provide regular updates and details through these platforms.
          </AccordionContent>
          </AccordionItem>
      </Accordion>
    </div>
  )
}
