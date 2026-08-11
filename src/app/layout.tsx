import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import { Nav } from "@/components/Nav";
import { site } from "@/data/site";
import { companies } from "@/data/companies";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`,
  },
  description: site.intro.join(" "),
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description: site.intro.join(" "),
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description: site.intro.join(" "),
  },
};

const currentCompany = companies.find((company) => !company.endDate);
const pastCompanies = companies.filter((company) => company.endDate);

function placeJsonLd(location: { city: string; region: string; country: string }) {
  return {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressRegion: location.region,
      addressCountry: location.country,
    },
  };
}

function roleDescription(company: { workArrangement: string; summary: string[] }) {
  return [company.workArrangement, ...company.summary].join(" ");
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  url: site.url,
  email: site.email,
  sameAs: [site.linkedin, site.github],
  homeLocation: placeJsonLd({ city: "New York", region: "NY", country: "US" }),
  worksFor: currentCompany && {
    "@type": "OrganizationRole",
    roleName: currentCompany.role,
    startDate: currentCompany.startDate,
    description: roleDescription(currentCompany),
    workLocation: currentCompany.workLocation && placeJsonLd(currentCompany.workLocation),
    worksFor: { "@type": "Organization", name: currentCompany.name },
  },
  alumniOf: [
    ...pastCompanies.map((company) => ({
      "@type": "OrganizationRole",
      roleName: company.role,
      startDate: company.startDate,
      endDate: company.endDate,
      description: roleDescription(company),
      workLocation: company.workLocation && placeJsonLd(company.workLocation),
      alumniOf: { "@type": "Organization", name: company.name },
    })),
    {
      "@type": "OrganizationRole",
      roleName: site.education.degree,
      endDate: site.education.endDate,
      alumniOf: { "@type": "EducationalOrganization", name: site.education.institution },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Nav />
        <div className="flex flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}
