import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { notFound } from "next/navigation";
import { companies, getCompany } from "@/data/companies";

export function generateStaticParams() {
  return companies.map((company) => ({ company: company.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[company]">
): Promise<Metadata> {
  const { company: slug } = await props.params;
  const company = getCompany(slug);
  if (!company) return {};

  return {
    title: company.shortName,
    description: company.summary.join(" "),
    openGraph: {
      title: `${company.name} — ${company.role}`,
      description: company.summary.join(" "),
    },
  };
}

export default async function CompanyPage(
  props: PageProps<"/work/[company]">
) {
  const { company: slug } = await props.params;
  const company = getCompany(slug);
  if (!company) notFound();

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-10 px-6 py-16">
      <header className="flex flex-col gap-2">
        <h1 className="font-serif text-3xl font-semibold tracking-tight">
          {company.name}
        </h1>
        <p className="text-stone-500 dark:text-stone-400">
          {company.role} · <span className="italic">{company.dateRange}</span>
        </p>
        <div className="max-w-3xl text-lg leading-8 text-stone-600 dark:text-stone-300">
          {company.summary.map((paragraph, index) => (
            <p key={index} className="pb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </header>

      <div className="flex flex-col gap-6">
        <p className="border-b border-stone-200 pb-2 text-xs font-semibold uppercase tracking-widest text-stone-500 dark:border-stone-800 dark:text-stone-400">
          Selected Work
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {company.projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} priority={index === 0} />
          ))}
        </div>
      </div>
        <ul className="flex flex-wrap gap-4 text-base font-medium">
          {company.appLinks.map((appLink) => (
                <li key={appLink.link} className="underline decoration-stone-300 underline-offset-4 hover:decoration-stone-500 dark:decoration-stone-600">
                    <a
                      href={appLink.link}
                    >
                      {appLink.name}
                    </a>
                </li>
          ))}
        </ul>
    </section>
  );
}
