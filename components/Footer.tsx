// Footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#4169E1] text-white py-4 px-6 md:px-8 lg:px-10">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm">&copy; 2024 . All rights reserved.</p>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
}
