import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
export default function SectionFAQ() {
  return (
    <Accordion type="single" collapsible className="w-full p-4 lg:p-20">
        <AccordionItem value="item-1">
        <AccordionTrigger className="text-white">What is Xentro?</AccordionTrigger>
        <AccordionContent className="text-white">
        Xentro is a web3 financial platform designed to offer innovative financial solutions through decentralized technologies, enhancing security and control for users.
        </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
        <AccordionTrigger className="text-white">How does Xentro ensure the security of my funds?</AccordionTrigger>
        <AccordionContent className="text-white">
        We utilize cutting-edge blockchain technology and smart contract protocols to ensure the highest level of security and transparency for your transactions and assets.
        </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
        <AccordionTrigger className="text-white">What does non-custodial management mean for my assets?</AccordionTrigger>
        <AccordionContent className="text-white">
        Non-custodial management means that you retain full control of your assets without relying on intermediaries. Xentro’s platform ensures you have direct access to and control over your funds at all times.
        </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
        <AccordionTrigger className="text-white"> Do I need prior experience with blockchain to use Xentro?</AccordionTrigger>
        <AccordionContent className="text-white">
        No prior experience is necessary. Our user-friendly interface and educational resources are designed to help both beginners and experienced users navigate the platform with ease.
        </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
        <AccordionTrigger className="text-white">What types of financial services are available on Xentro?</AccordionTrigger>
        <AccordionContent className="text-white">
        Xentro offers a range of services including decentralized lending and borrowing, automated investment strategies, and comprehensive financial analytics.
        </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
        <AccordionTrigger className="text-white">What kind of analytics does Xentro offer?</AccordionTrigger>
        <AccordionContent className="text-white">
        Xentro provides advanced financial analytics that offer real-time insights into your financial activities, helping you track performance, identify trends, and make informed decisions.
        </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
        <AccordionTrigger className="text-white"> How can I get support if I encounter any issues?</AccordionTrigger>
        <AccordionContent className="text-white">
        Our dedicated support team is available 24/7 to assist you with any issues. You can reach out via our support portal or contact us directly through email or chat.
        </AccordionContent>
        </AccordionItem>
       
    </Accordion>
  )
}
