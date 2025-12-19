import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const authCookie = await cookies();
  const isAuthenticated = authCookie.get("auth");

  if (!isAuthenticated) {
    redirect("/signin");
  }

  return (
    <div className="p-10 min-h-screen">
      <h1 className="text-4xl font-semibold">Dashboard</h1>
      <p>This is a protected route.</p>
    </div>
  );
}
