import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

function Logo({ className }: { className?: string }) {
  return (
    <Link
      href={"/"}
      className={cn("text-2xl font-bold text-primary", className)}
    >
      PremiumStore
    </Link>
  );
}

export default Logo;
