import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="text-destructive font-semibold">Not Found</h2>
      <p className="text-muted-foreground">Could not find requested resource</p>
      <Link className="text-blue-500" href="/">
        Return Home
      </Link>
    </div>
  );
}
