import Link from "next/link";
import Logo from "./logo";
import OpenCartButton from "./open-cart-button";
import AuthButton from "./auth-button";
import MobileNav from "./mobile-nav";

function Header() {
  return (
    <header className="sticky top-0 py-8 bg-background border -mx-[calc((100vw-100%)/2)] z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
        <Logo />

        <nav className="hidden md:block">
          <ul className="flex items-center gap-x-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-x-2">
          <AuthButton className="hidden lg:block" />
          <OpenCartButton />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
