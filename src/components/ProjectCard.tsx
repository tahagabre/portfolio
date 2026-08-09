"use client"

import Image from "next/image";
import { Project } from "@/data/companies"
import { useState } from "react"
import { Modal } from "@/components/Modal"

type ProjectCardProps = { project: Project, priority?: boolean;};

export function ProjectCard({ project, priority }: ProjectCardProps) {
    const thumbnail = project.media[0];
    const thumbnailSrc = thumbnail.type === "video" ? thumbnail.poster : thumbnail.src;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <article 
            className="group overflow-hidden rounded-xl border border-stone-200 dark:border-stone-800 transition-transform duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background" 
            onTouchStart={() => {}}
            onClick={() => setIsOpen(true)}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${project.title}`}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setIsOpen(true);
                }
            }}
        >
            <div className="relative aspect-9/16 w-full max-h-[70vh] bg-stone-100 dark:bg-stone-900">
            {thumbnailSrc && (
                    <Image
                        src={thumbnailSrc}
                        alt={thumbnail.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(min-width: 640px) 50vw, 100vw"
                        priority={priority}
                    />
                )}
                {thumbnail.type === "video" && (
                    <span className="absolute right-3 top-3 rounded-full bg-black/70 px-2 py-1 text-xs font-medium text-white">
                        Video
                    </span>
                )}

                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 px-4 pb-4 pt-24 bg-linear-to-t from-background/95 from-40% to-transparent mask-t-from-40% mask-t-to-100% backdrop-blur-xs">
                    <h2 className="text-lg font-medium">{project.title}</h2>
                    <p className="text-sm text-stone-600 dark:text-stone-400">{project.description}</p>
                </div>
            </div>
            {isOpen && (
                <Modal onClose={() => setIsOpen(false)} title={`${project.title} details`}>
                    <div className="flex flex-col gap-4">
                        <h2 className="font-serif text-2xl font-semibold">{project.title}</h2>
                        <p className="text-stone-600 dark:text-stone-400">{project.description}</p>
                        <div className="flex flex-col gap-8 divide-y divide-stone-200 dark:divide-stone-800">
                            { project.media.map((item, index) => {
                                const src = item.type === "video" ? item.poster : item.src;
                                return (
                                    <div key={index} className="flex flex-col gap-2">
                                        <div className="relative aspect-9/16 w-full max-h-[70vh] overflow-hidden rounded-lg bg-stone-100 dark:bg-stone-900">
                                            {src && <Image src={src} alt={item.alt} fill className="object-contain" sizes="(min-width: 640px) 50vw, 100vw" />}
                                        </div>
                                        <p className="mx-auto max-w-sm pb-2 text-center text-xs italic text-stone-500 dark:text-stone-400">{item.caption}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Modal>
            )}
        </article>
    )
}