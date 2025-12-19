"use client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import {
  signinUserSchema,
  SigninUserSchemaType,
} from "@/schemas/signin.schema";
import { signin } from "@/services/auth.services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

function SignInPage() {
  const router = useRouter();
  const { refreshAuth } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninUserSchemaType>({
    resolver: zodResolver(signinUserSchema),
  });

  const onSubmit = async (values: SigninUserSchemaType) => {
    await signin(values.email, values.password);
    refreshAuth();
    router.push("/dashboard");
  };
  return (
    <main className="min-h-screen flex flex-col items-center justify-center ">
      <div className="w-full lg:max-w-xl p-6">
        <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-8">
          Sign in{" "}
        </h2>
        <form
          action=""
          className=" rounded-lg min-w-full lg:min-w-xl space-y-6 p-4 shadow"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-y-1">
            <label
              className="font-bold text-muted-foreground text-sm"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              className="px-4 py-2 rounded-md border border-border"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-xs text-destructive">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-y-1">
            <label
              className="font-bold text-muted-foreground text-sm"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="px-4 py-2 rounded-md border border-border"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-xs text-destructive">
                {errors.password.message}
              </span>
            )}
          </div>
          <Button type="submit">Signin</Button>
        </form>
      </div>
    </main>
  );
}

export default SignInPage;
