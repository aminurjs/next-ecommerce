import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";
import MaxWidthWrapper from "./MaxWidthWrapper";

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });
export const navItems = [
  { id: 1, page: "Home", path: "/home" },
  { id: 2, page: "Shop", path: "/shop" },
  { id: 3, page: "Deals", path: "/deals" },
  { id: 4, page: "About", path: "/about" },
  { id: 5, page: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <MaxWidthWrapper className="h-20 relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">AMINUR</div>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={24} height={24} />
            <div className="text-2xl tracking-wide">AMINUR</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            {navItems.map(({ id, page, path }) => (
              <Link href={path} key={id}>
                {page}
              </Link>
            ))}
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Navbar;
