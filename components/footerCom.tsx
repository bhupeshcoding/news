// Newsarticle.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "./icons";

export function Newsarticles() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-6 md:px-8 lg:px-10">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            <Link href="/" prefetch={false}>
              Harvard News
            </Link>
          </h1>
          <div className="relative flex items-center w-full max-w-md">
            <Input
              type="text"
              placeholder="Search news..."
              className="pl-10 pr-4 py-2 rounded-lg border-none focus:ring-2 focus:ring-blue-400"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-16 lg:py-20">
          {/* ... (hero section content) ... */}
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
              {/* ... (news article cards) ... */}
            </div>
          </div>
        </section>
      </main>
      <aside className="bg-muted border-t py-8 px-6 md:px-8 lg:px-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Categories</h3>
            <nav className="space-y-2">
              <Link
                href="#"
                className="flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                <HomeIcon className="w-4 h-4" />
                Academics
              </Link>
              {/* ... (other category links) ... */}
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Popular Articles</h3>
            <div className="space-y-4">
              {/* ... (popular article previews) ... */}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="text-muted-foreground">
              Subscribe to our newsletter to stay up-to-date with the latest
              news and updates.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </aside>

      <Footer />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#4169E1] text-white py-4 px-6 md:px-8 lg:px-10">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm">
          &copy; 2024 Harvard University. All rights reserved.
        </p>
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

// ... (icon component definitions: FilmIcon, HomeIcon, LaptopIcon, NewspaperIcon, TrophyIcon) ...
