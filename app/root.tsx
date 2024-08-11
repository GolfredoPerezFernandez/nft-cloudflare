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
import stylesheet from '~/globals.css?url';
import { LinksFunction } from "@remix-run/cloudflare";
import { Navbar } from "@/components/ui/navbar";

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
import {  Theme } from '@rainbow-me/rainbowkit';
const myCustomTheme: Theme = {
  blurs: {
    modalOverlay: 'blur(10px)',
  },
  colors: {
    accentColor: '#00FF66', // Un verde brillante que resalta sobre el fondo oscuro
    accentColorForeground: '#FFFFFF', // Blanco para el texto sobre el color de acento
    actionButtonBorder: '#00CC52', // Un verde ligeramente más oscuro
    actionButtonBorderMobile: '#00CC52', 
    actionButtonSecondaryBackground: '#004422', // Verde oscuro para botones secundarios
    closeButton: '#FFFFFF', // Blanco para los botones de cerrar
    closeButtonBackground: '#00FF66', // Verde brillante para el fondo del botón de cerrar
    connectButtonBackground: '#003311', // Un verde oscuro para el fondo del botón de conectar
    connectButtonBackgroundError: '#FF0000', // Rojo para errores
    connectButtonInnerBackground: '#00CC52', // Verde intermedio para el fondo interior del botón
    connectButtonText: '#FFFFFF', // Blanco para el texto del botón
    connectButtonTextError: '#FF0000', // Rojo para el texto de error
    connectionIndicator: '#00FF66', // Indicador de conexión en verde brillante
    downloadBottomCardBackground: '#002211', // Verde muy oscuro para las tarjetas
    downloadTopCardBackground: '#003311', // Verde oscuro
    error: '#FF0000', // Rojo para los errores
    generalBorder: '#004422', // Verde oscuro para los bordes generales
    generalBorderDim: '#002211', // Verde muy oscuro para bordes suaves
    menuItemBackground: '#003311', // Fondo de los elementos del menú en verde oscuro
    modalBackdrop: 'rgba(0, 0, 0, 0.8)', // Fondo semi-transparente negro para modales
    modalBackground: '#001100', // Fondo verde muy oscuro para modales
    modalBorder: '#00FF66', // Borde verde brillante para modales
    modalText: '#FFFFFF', // Blanco para el texto en modales
    modalTextDim: '#CCCCCC', // Gris claro para texto dimmed en modales
    modalTextSecondary: '#00FF66', // Verde brillante para texto secundario
    profileAction: '#004422', // Verde oscuro para acciones de perfil
    profileActionHover: '#00CC52', // Verde intermedio para hover en acciones de perfil
    profileForeground: '#00FF66', // Verde brillante para el texto de perfil
    selectedOptionBorder: '#00FF66', // Verde brillante para el borde de la opción seleccionada
    standby: '#001100', // Fondo standby en verde muy oscuro
  },
  fonts: {
    body: '"Helvetica Neue", Arial, sans-serif', // Fuente sencilla y moderna
  },
  radii: {
    actionButton: '8px', // Bordes suavemente redondeados para botones
    connectButton: '8px',
    menuButton: '8px',
    modal: '16px', // Bordes redondeados para modales
    modalMobile: '16px',
  },
  shadows: {
    connectButton: '0px 4px 8px rgba(0, 255, 102, 0.5)', // Sombra verde brillante suave para el botón de conectar
    dialog: '0px 4px 8px rgba(0, 0, 0, 0.3)', // Sombra ligera para diálogos
    profileDetailsAction: '0px 4px 8px rgba(0, 255, 102, 0.5)', // Sombra suave verde brillante para acciones de perfil
    selectedOption: '0px 4px 8px rgba(0, 255, 102, 0.5)', // Sombra verde brillante para la opción seleccionada
    selectedWallet: '0px 4px 8px rgba(0, 255, 102, 0.5)', // Sombra verde brillante para la billetera seleccionada
    walletLogo: '0px 4px 8px rgba(0, 255, 102, 0.5)', // Sombra suave para el logo de la billetera
  },
};


export function Layout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body><WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={myCustomTheme} >
        
        <BackgroundGradientAnimation className="h-full w-full">
          <Navbar/>
          <SidebarComponent>
            <div className=" relative z-[2] lg:p-1 w-full container h-full">
              {children}
            </div>
          </SidebarComponent>
          <Footer/>
        </BackgroundGradientAnimation>  {/* Your App */}
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
