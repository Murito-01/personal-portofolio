"use client";

/**
 * Carousel for projects with multiple screenshots (see `gallery` in data/projects).
 * Uses client state for arrows/dots; projects without `gallery` use `ProjectPreview` instead.
 */

import Image from "next/image";
import { useCallback, useState } from "react";

type ProjectGalleryProps = {
  images: string[];
  title: string;
  layout?: "landscape" | "portrait";
};

export default function ProjectGallery({ images, title, layout = "landscape" }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const isPortrait = layout === "portrait";

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  if (count === 0) return null;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-100 dark:border-zinc-700/80 dark:bg-zinc-900 ${
        isPortrait ? "h-[420px] sm:h-[500px]" : "aspect-[4/3]"
      }`}
      role="region"
      aria-roledescription="carousel"
      aria-label={`${title} preview gallery`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          style={{
            width: `${count * 100}%`,
            transform: `translateX(-${(index * 100) / count}%)`,
          }}
        >
          {images.map((src, i) => (
            <div
              key={src}
              className="relative h-full shrink-0 overflow-hidden"
              style={{ width: `${100 / count}%` }}
              aria-hidden={i !== index}
            >
              <Image
                src={src}
                alt={`${title} screenshot ${i + 1} of ${count}`}
                fill
                className={isPortrait ? "object-contain p-2" : "object-cover object-top"}
                sizes={isPortrait ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 50vw"}
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {count > 1 ? (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200/90 bg-white/90 text-zinc-800 shadow-sm backdrop-blur-sm transition hover:bg-white dark:border-zinc-600 dark:bg-zinc-900/90 dark:text-zinc-100 dark:hover:bg-zinc-800"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5 shrink-0" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200/90 bg-white/90 text-zinc-800 shadow-sm backdrop-blur-sm transition hover:bg-white dark:border-zinc-600 dark:bg-zinc-900/90 dark:text-zinc-100 dark:hover:bg-zinc-800"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5 shrink-0" />
          </button>

          <div
            className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full border border-zinc-200/80 bg-white/80 px-2 py-1.5 backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-900/80"
            role="tablist"
            aria-label="Slide indicators"
          >
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-5 bg-cyan-600 dark:bg-cyan-400" : "w-1.5 bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-600 dark:hover:bg-zinc-500"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  );
}
