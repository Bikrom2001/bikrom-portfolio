import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buttonClasses } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="relative grid min-h-screen place-items-center px-6">
      <div aria-hidden className="bg-grid mask-fade absolute inset-0 -z-10" />
      <div className="text-center">
        <p className="font-mono text-sm text-accent">404 · page not found</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
          This route doesn&apos;t exist.
        </h1>
        <p className="mt-4 text-muted">The page you&apos;re looking for may have moved or never existed.</p>
        <Link href="/" className={`${buttonClasses("primary")} mt-8`}>
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
    </main>
  );
}
