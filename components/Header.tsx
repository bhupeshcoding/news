// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input"; // Assuming this is where your custom Input component is located
// import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="bg-primary text-primary-foreground py-4 px-6">
//       <div className="container mx-auto flex items-center justify-between">
//         <Link href="/" className="text-lg font-bold">
//           News Hub
//         </Link>
//         <nav
//           className={`flex-col md:flex-row md:flex ${
//             isMenuOpen ? "flex" : "hidden"
//           } gap-4`}
//         >
//           <Link href="/" className="hover:underline">
//             Home
//           </Link>
//           <Link href="/politics" className="hover:underline">
//             Politics
//           </Link>
//           <Link href="/technology" className="hover:underline">
//             Technology
//           </Link>
//           <Link href="/sports" className="hover:underline">
//             Sports
//           </Link>
//           <Link href="/entertainment" className="hover:underline">
//             Entertainment
//           </Link>
//           {/* Stunning Search Bar */}
//           <div className="relative flex items-center w-full max-w-md">
//             <Input
//               type="text"
//               placeholder="Search news..."
//               className="pl-10 pr-4 py-2 rounded-lg border-none focus:ring-2 focus:ring-blue-400"
//             />
//             <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//           </div>
//         </nav>
//         <Button
//           variant="ghost"
//           className="md:hidden"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <MenuIcon className="w-6 h-6" />
//         </Button>
//       </div>
//     </header>
//   );
// }

// function MenuIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       strokeWidth={2}
//       className="w-6 h-6"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M4 6h16M4 12h16m-7 6h7"
//       />
//     </svg>
//   );
// }

// Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-lg font-bold">
          News Hub
        </Link>
        <nav
          className={`flex-col md:flex-row md:flex ${
            isMenuOpen ? "flex" : "hidden"
          } gap-4`}
        >
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/politics" className="hover:underline">
            Politics
          </Link>
          <Link href="/technology" className="hover:underline">
            Technology
          </Link>
          <Link href="/sports" className="hover:underline">
            Sports
          </Link>
          <Link href="/entertainment" className="hover:underline">
            Entertainment
          </Link>
          {/* Stunning Search Bar */}
          <div className="relative flex items-center w-full max-w-md">
            <Input
              type="text"
              placeholder="Search news..."
              className="pl-10 pr-4 py-2 rounded-lg border-none focus:ring-2 focus:ring-blue-400"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </nav>
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon className="w-6 h-6" />
        </Button>
      </div>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  );
}
