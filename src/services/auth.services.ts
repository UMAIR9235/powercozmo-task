export async function signin(email: string, password: string) {
  const res = await fetch("/api/auth/signin", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("Sign in failed!");
  }

  const user = await res.json();

  return user;
}

export async function signout() {
  const res = await fetch("/api/auth/signout", {
    method: "POST",
  });

  if (!res.ok) {
    throw new Error("Sign out failed");
  }
}

export async function getCurrentUser() {
  const res = await fetch("/api/auth/me");

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  return data.user;
}
