import { site } from "@/data/site";

export default function Home() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-8 px-6 py-24">
      <div className="flex flex-col gap-3">
        <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
          {site.name}
        </h1>
        <p className="text-xl italic text-stone-500 dark:text-stone-400">
          {site.title}
        </p>
      </div>

      <p className="max-w-xl text-lg leading-8 text-stone-600 dark:text-stone-300">
        {site.intro}
      </p>

      <ul className="flex flex-wrap gap-4 text-base font-medium">
        <li>
          <a
            className="underline decoration-stone-300 underline-offset-4 hover:decoration-stone-500 dark:decoration-stone-600"
            href={`mailto:${site.email}`}
          >
            Email
          </a>
        </li>
        <li>
          <a
            className="underline decoration-stone-300 underline-offset-4 hover:decoration-stone-500 dark:decoration-stone-600"
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            className="underline decoration-stone-300 underline-offset-4 hover:decoration-stone-500 dark:decoration-stone-600"
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className="underline decoration-stone-300 underline-offset-4 hover:decoration-stone-500 dark:decoration-stone-600"
            href="/resume.pdf"
            target="_blank" rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </section>
  );
}
