"use client";

import { useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import AuthButton from "./auth-button";
import GithubLink from "./github-link";
import { navLinks } from "@/data/nav.data";

export default function MobileNav() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openMenu = () => dialogRef.current?.showModal();
  const closeMenu = () => dialogRef.current?.close();

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <>
      <Button variant={"outline"} onClick={openMenu} className="md:hidden p-2">
        <Menu className="h-6 w-6" />
      </Button>

      <dialog
        ref={dialogRef}
        onClose={closeMenu}
        className="fixed inset-0 z-50 m-0 p-0 w-screen h-full max-w-none bg-background"
      >
        <div className="">
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-semibold text-lg">Menu</span>
            <button onClick={closeMenu} aria-label="Close menu">
              <X aria-hidden className="h-6 w-6" />
            </button>
          </div>

          <nav className="p-6">
            <ul className="flex flex-col gap-y-6 text-lg">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} onClick={handleLinkClick}>
                    {link.title}
                  </Link>
                </li>
              ))}

              <li key={"auth-button"}>
                <AuthButton />
              </li>
              <li key={"github-link"}>
                <GithubLink onClick={closeMenu} />
              </li>
            </ul>
          </nav>
        </div>
      </dialog>
    </>
  );
}
