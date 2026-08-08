"use client"

import Image from "next/image";
import { Project } from "@/data/companies"
import { useState } from "react"
import { Modal } from "@/components/Modal"

type ProjectCardProps = { project: Project};

export function ProjectCard({ project }: ProjectCardProps) {
    const thumbnail = project.media[0];
    const thumbnailSrc = thumbnail.type === "video" ? thumbnail.poster : thumbnail.src;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <article 
            className="group flex flex-col gap-3 overflow-hidden rounded-xl border border-stone-200 dark:border-stone-800 transition-transform duration-150 active:scale-95"
            onTouchStart={() => {}}
            onClick={() => setIsOpen(true)}
        >
            <div className="relative aspect-3/2 w-full bg-stone-100 dark:bg-stone-900">
            {thumbnailSrc && (
                    <Image
                        src={thumbnailSrc}
                        alt={thumbnail.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                )}
                {thumbnail.type === "video" && (
                    <span className="absolute right-3 top-3 rounded-full bg-black/70 px-2 py-1 text-xs font-medium text-white">
                        Video
                    </span>
                )}
            </div>
            <div className="flex flex-col gap-1 px-4 pb-4">
            <h2 className="text-lg font-medium">{project.title}</h2>
            <p className="text-sm text-stone-600 dark:text-stone-400">
                {project.description}
            </p>
            </div>
            {isOpen && (
                <Modal onClose={() => setIsOpen(false)}>
                    <div className="flex flex-col gap-4">
                        <h2 className="font-serif text-2xl font-semibold">{project.title}</h2>
                        <p className="text-stone-600 dark:text-stone-400">{project.description}</p>
                        <div className="flex flex-col gap-4">
                            { project.media.map((item, index) => {
                                const src = item.type === "video" ? item.poster : item.src;
                                return (
                                    <div key={index} className="relative aspect-[3/2] w-full overflow-hidden rounded-lg bg-stone-100 dark:bg-stone-900">
                                        {src && <Image src={src} alt={item.alt} fill className="object-cover" />}
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