import { Connect } from "@/components/ui/connect";
import { Link } from "@remix-run/react";

export default function Navbar() {
    return (
        <nav className="px-9 backdrop-blur-xl  bg-gradient-to-r from-[#00c6ff] to-[#0072ff] sticky top-0 z-30">
            <div className="flex items-center justify-between">
            <div>
                <img src="/logo.png" alt="Logo" className="h-[100px]" />
            </div>
            <div>
                <ul className="flex items-center justify-center gap-7">
                <Link to={"/"} className="text-white cursor-pointer text-xl">Home</Link>
                <Link to={"/airdrop"} className="text-white cursor-pointer text-xl">Airdrop</Link>
                <li><Connect/></li>
                </ul>
            </div>
            </div>
        </nav>
    );
  }