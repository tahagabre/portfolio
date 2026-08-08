"use client"

import { companies } from "@/data/companies";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Placeholder nav — plain links, no active-tab styling yet.
// We'll rebuild this together as a client component with usePathname
// and a horizontal-scroll layout for mobile.
export function Nav() {
  const pathName = usePathname();
  const isHomeActive = pathName === "/"

  return (
    <nav className="flex gap-6 overflow-x-auto border-b border-stone-200 px-6 py-4 dark:border-stone-800">
      <Link href="/" className={`whitespace-nowrap font-medium ${isHomeActive ? "text-foreground" : "text-stone-400"}`}>
        Home
      </Link>
      {companies.map((company) => (
        <Link
          key={company.slug}
          href={`/work/${company.slug}`}
          className={`whitespace-nowrap font-medium ${pathName === `/work/${company.slug}` ? "text-foreground" : "text-stone-400"}`}
        >
          {company.name}
        </Link>
      ))}
    </nav>
  );
}
