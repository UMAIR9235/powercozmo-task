import { Github } from "lucide-react";
import Link from "next/link";
import React, { HTMLAttributes } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface GithubLinkProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

function GithubLink({ className, ...props }: GithubLinkProps) {
  return (
    <Button asChild variant={"outline"} className={cn(className)} {...props}>
      <Link href={"https://github.com/UMAIR9235/powercozmo-task"}>
        <Github />
      </Link>
    </Button>
  );
}

export default GithubLink;
