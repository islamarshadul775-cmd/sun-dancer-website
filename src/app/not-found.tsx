import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-ocean-deep via-ocean to-ocean-light">
      <div className="text-center text-white">
        <h1 className="text-8xl font-display font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Page not found</p>
        <Link href="/" className="btn-primary inline-block">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
