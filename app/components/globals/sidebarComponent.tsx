import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  // IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
// import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props{
  children: React.ReactNode;
}
 
export function SidebarComponent({ children }: Props) {

  const links = [
    {
      label: "Home",
      href: "/",
      icon: (
        <IconBrandTabler className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Task",
      href: "/task",
      icon: (
        <IconSettings className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "/profile",
      icon: (
        <IconUserBolt className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-transparent dark:bg-neutral-800 w-full flex-1 relative mx-auto  dark:border-neutral-700 overflow-hidden h-full" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 bg-gradient-to-r border-none fixed top-0 left-0 z-30 bg-opacity-30 bg-moving-gradient  backdrop-blur-lg">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          {/* <div>
            {
              session?.user ? (
                <SidebarLink
                link={{
                  label: session.user.name as string,
                  href: "#",
                  icon: (
                    <Image
                      src={session.user.image as string}
                      className="h-7 w-7 flex-shrink-0 rounded-full"
                      width={50}
                      height={50}
                      alt="Avatar"
                    />
                  ),
                }}
              />
              ) :
              (
                <h1> no existe</h1>
              )
            }
           
          </div> */}
        </SidebarBody>
      </Sidebar>
      <div className="flex flex-1">
        <div className="p-2 md:p-10 border-neutral-200 dark:border-neutral-700 bg-transparent dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
          {
            children
          }
        </div>
      </div>

      {/* <Dashboard /> */}
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      to="#"
      className="font-normal flex items-center space-x-2 text-sm text-white py-1 relative z-20"
    >
      <div className="h-10 w-10 bg-white dark:bg-white rounded-full flex-shrink-0 overflow-hidden">
        <img src="/public/logo.png" alt="logo" className="w-full h-full object-cover"/>
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-white dark:text-white whitespace-pre"
      >
        XENTRO
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      to="#"
      className="font-normal flex items-center text-sm text-white py-1 relative z-20"
    >
      <div className="h-6 w-6 bg-white dark:bg-white rounded-full flex-shrink-0 overflow-hidden">
        <img src="/public/logo.png" alt="logo" className="w-full h-full object-cover"/>
      </div>
    </Link>
  );
}
 
// Dummy dashboard component with content
// const Dashboard = () => {
//   return (
//     <div className="flex flex-1">
//       <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
//         <div className="flex gap-2">
//           {[...new Array(4)].map((i) => (
//             <div
//               key={"first-array" + i}
//               className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
//             ></div>
//           ))}
//         </div>
//         <div className="flex gap-2 flex-1">
//           {[...new Array(2)].map((i) => (
//             <div
//               key={"second-array" + i}
//               className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };