import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react"
import "./globals.css"

// import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
// import { SidebarComponent } from "./components/globals/sidebarComponent";
import Footer from "./components/globals/footer";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";
import stylesheet from '~/globals.css?url';
import { LinksFunction } from "@remix-run/cloudflare";
// import { Connect } from "@/components/ui/connect";
import Navbar from "./components/globals/navbar";

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
const config = getDefaultConfig({
  appName: 'polygonswap',
  projectId: '298ddb71d1b78a9d266f2ee6633c0d16',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
import {  Theme } from '@rainbow-me/rainbowkit';const myCustomTheme: Theme = {
  blurs: {
    modalOverlay: 'blur(10px)',
  },
  colors: {
    accentColor: 'linear-gradient(90deg, #4A5EF5, #B650E7)', // Gradient from blue to pink/purple
    accentColorForeground: '#FFFFFF', // White text over the gradient accent color
    actionButtonBorder: '#4A5EF5', // A color that complements the gradient
    actionButtonBorderMobile: '#B650E7',
    actionButtonSecondaryBackground: '#4A5EF5', // A single color from the gradient for secondary buttons
    closeButton: '#FFFFFF', // White close button
    closeButtonBackground: '#B650E7', // Use one of the gradient colors for close button background
    connectButtonBackground: '#4A5EF5', // One of the gradient colors for the connect button background
    connectButtonBackgroundError: '#FF0000', // Red for errors
    connectButtonInnerBackground: '#B650E7', // The other gradient color for inner background
    connectButtonText: '#FFFFFF', // White text on the connect button
    connectButtonTextError: '#FF0000', // Red text for errors
    connectionIndicator: '#B650E7', // Use a gradient color for the connection indicator
    downloadBottomCardBackground: '#4A5EF5', // Blue from the gradient for card backgrounds
    downloadTopCardBackground: '#B650E7', // Pink/purple from the gradient for card backgrounds
    error: '#FF0000', // Red for errors
    generalBorder: '#4A5EF5', // Use the gradient's blue for general borders
    generalBorderDim: '#B650E7', // Dim border with the gradient's pink/purple
    menuItemBackground: '#4A5EF5', // Blue from the gradient for menu items
    modalBackdrop: 'rgba(0, 0, 0, 0.8)', // Semi-transparent black for modals backdrop
    modalBackground: '#001100', // Dark background for modals
    modalBorder: '#B650E7', // Bright pink/purple from the gradient for modal borders
    modalText: '#FFFFFF', // White text in modals
    modalTextDim: '#CCCCCC', // Light gray for dimmed text
    modalTextSecondary: '#B650E7', // Pink/purple for secondary text
    profileAction: '#4A5EF5', // Blue from the gradient for profile actions
    profileActionHover: '#B650E7', // Pink/purple for hover state on profile actions
    profileForeground: '#B650E7', // Pink/purple for profile text
    selectedOptionBorder: '#B650E7', // Pink/purple border for selected options
    standby: '#001100', // Dark standby background
  },
  fonts: {
    body: '"Helvetica Neue", Arial, sans-serif', // Simple, modern font
  },
  radii: {
    actionButton: '8px', // Softly rounded corners for buttons
    connectButton: '8px',
    menuButton: '8px',
    modal: '16px', // Rounded corners for modals
    modalMobile: '16px',
  },
  shadows: {
    connectButton: '0px 4px 8px rgba(74, 94, 245, 0.5)', // Soft blue shadow for connect button
    dialog: '0px 4px 8px rgba(0, 0, 0, 0.3)', // Light shadow for dialogs
    profileDetailsAction: '0px 4px 8px rgba(182, 80, 231, 0.5)', // Soft pink/purple shadow for profile actions
    selectedOption: '0px 4px 8px rgba(182, 80, 231, 0.5)', // Pink/purple shadow for selected options
    selectedWallet: '0px 4px 8px rgba(182, 80, 231, 0.5)', // Pink/purple shadow for the selected wallet
    walletLogo: '0px 4px 8px rgba(74, 94, 245, 0.5)', // Soft blue shadow for wallet logo
  },
};

export function Layout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  const location = useLocation();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider theme={myCustomTheme} >
          {/* <BackgroundGradientAnimation className="h-full w-full"> */}
            {/* <SidebarComponent> */}
              {/* <Connect/> */}
              <div className="relative z-[2] w-full h-full">
                <Navbar/>

                {children}
              </div>
            {/* </SidebarComponent> */}
            <Footer/>
          {/* </BackgroundGradientAnimation> */}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
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
