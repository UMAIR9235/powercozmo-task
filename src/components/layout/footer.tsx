"use client";
import { usePathname } from "next/navigation";
import Logo from "./logo";

function Footer() {
  const pathname = usePathname();
  const routeName = pathname.split("/")[1];

  const hideFooter = ["dashboard", "signin"].includes(routeName);
  if (hideFooter) return null;
  return (
    <footer className="bg-primary lg:h-96 flex -mx-[calc(100vw-100%)/2] py-8">
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-end justify-between max-w-7xl mx-auto border-b-[0.5] border-muted-foreground pb-4 gap-y-6 lg:gap-y-0">
        <Logo className="bg-transparent text-primary-foreground text-4xl lg:text-7xl" />
        <span className="text-muted-foreground text-xs">
          © 2025 Premium Store | All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
