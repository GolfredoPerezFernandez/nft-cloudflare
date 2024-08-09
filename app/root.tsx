import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import "./globals.css"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { SidebarComponent } from "./components/globals/sidebarComponent";
import Footer from "./components/globals/footer";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <BackgroundGradientAnimation className="h-full w-full">
          <SidebarComponent>
            <div className="p-4 relative z-[2] lg:p-8 container h-full">
              {children}
            </div>
          </SidebarComponent>
          <Footer/>
        </BackgroundGradientAnimation>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return <Outlet />;
}
