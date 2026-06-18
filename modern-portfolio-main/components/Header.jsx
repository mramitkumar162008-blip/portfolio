import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="relative md:absolute z-30 w-full items-center px-6 md:px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          {/* logo */}
          <Link href={"/"} className="-ml-8">
            <h1 className="text-6xl font-bold text-white">
   Amit <span className="text-accent ml-[-8px]">Creations.</span>
</h1>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
