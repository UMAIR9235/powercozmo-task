"use client";
import { signout } from "@/services/auth.services";
import { Button } from "../ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

function AuthButton({ className }: { className?: string }) {
  const { isAuthenticated, refreshAuth } = useAuth();
  const router = useRouter();
  const handleClick = async () => {
    if (isAuthenticated) {
      await signout();
      router.push("/");
      refreshAuth();
    } else {
      router.push("/signin");
    }
  };
  return (
    <Button onClick={handleClick} className={cn(className)}>
      {isAuthenticated ? "Signout" : "Signin"}
    </Button>
  );
}

export default AuthButton;
