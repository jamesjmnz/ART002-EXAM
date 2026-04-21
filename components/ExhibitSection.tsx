import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import {
  philippineArtExhibit,
  type ExhibitArtwork,
  type ExhibitChapter,
} from '@/lib/philippine-art-exhibit';
import { cn } from '@/lib/utils';

function ChapterPrelude({ chapter }: { chapter: ExhibitChapter }) {
  return (
    <section
      id={chapter.id}
      className="relative overflow-hidden border-y border-white/10 bg-[#070707] scroll-mt-32"
    >
      <div className="museum-grid absolute inset-0 opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(211,173,104,0.18),transparent_28%),radial-gradient(circle_at_82%_58%,rgba(109,146,196,0.16),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 lg:grid-cols-12 lg:px-12 lg:py-24 xl:px-16">
        <div className="lg:col-span-4">
          <p className="museum-kicker">{chapter.label}</p>
          <h3 className="mt-4 font-serif text-4xl leading-none md:text-5xl xl:text-6xl">
            {chapter.title}
          </h3>
        </div>
        <div className="lg:col-span-8 lg:pl-12">
          <p className="max-w-3xl text-base leading-7 text-white/72 md:text-xl md:leading-9">
            {chapter.summary}
          </p>
        </div>
      </div>
    </section>
  );
}

function ArtworkFeature({
  artwork,
  chapter,
  index,
  priority = false,
}: {
  artwork: ExhibitArtwork;
  chapter: ExhibitChapter;
  index: number;
  priority?: boolean;
}) {
  const reverse = index % 2 === 1;

  return (
    <article
      id={artwork.id}
      className="relative border-t border-white/10 bg-[#050505] scroll-mt-32 lg:min-h-[155vh]"
    >
      <div className="relative overflow-hidden lg:sticky lg:top-0 lg:min-h-screen">
        <div className="absolute inset-0">
          <Image
            src={artwork.imageSrc}
            alt={artwork.imageAlt}
            fill
            priority={priority}
            sizes="100vw"
            className="object-cover opacity-[0.18] scale-110 blur-[10px] saturate-[0.8]"
            style={{ objectPosition: artwork.imagePosition ?? 'center center' }}
          />
          <div className="museum-grid absolute inset-0 opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,177,110,0.16),transparent_26%),radial-gradient(circle_at_75%_18%,rgba(109,145,193,0.12),transparent_24%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/20 via-[#050505]/60 to-[#050505]" />
        </div>

        <div className="relative z-10 grid gap-10 px-4 py-10 md:px-8 md:py-12 lg:min-h-screen lg:grid-cols-12 lg:items-center lg:px-12 xl:px-16">
          <div
            className={cn(
              'museum-reveal lg:col-span-7',
              reverse && 'lg:order-2'
            )}
          >
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.04] shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
              <div className="relative h-[50vh] w-full sm:h-[58vh] lg:h-[72vh]">
                <Image
                  src={artwork.imageSrc}
                  alt={artwork.imageAlt}
                  fill
                  priority={priority}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                  style={{ objectPosition: artwork.imagePosition ?? 'center center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/18 to-black/12" />
              </div>

              <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-5 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="max-w-xs">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-white/66">
                      {artwork.year}
                    </p>
                    <p className="mt-3 font-serif text-2xl leading-tight text-white md:text-3xl">
                      {artwork.title}
                    </p>
                  </div>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-white/60">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex flex-wrap items-end justify-between gap-4">
                  <p className="max-w-lg text-sm leading-6 text-white/76 md:text-base">
                    {artwork.visualCue}
                  </p>
                  <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-white/78">
                    {chapter.label}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className={cn(
              'museum-reveal flex items-center lg:col-span-5',
              reverse && 'lg:order-1'
            )}
          >
            <div className="museum-panel w-full p-6 md:p-8 lg:p-10">
              <div className="relative z-10">
                <p className="museum-kicker">{chapter.label}</p>
                <h3 className="mt-4 font-serif text-4xl leading-none md:text-5xl xl:text-6xl">
                  {artwork.title}
                </h3>
                <p className="mt-5 text-base text-white/76 md:text-lg">
                  {artwork.artist}
                </p>

                <div className="mt-4 flex flex-wrap gap-3 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/48">
                  <span>{artwork.hall}</span>
                  <span>{artwork.location}</span>
                </div>

                <p className="mt-8 text-sm leading-7 text-white/74 md:text-[15px]">
                  {artwork.background}
                </p>

                <dl className="mt-8 space-y-4 border-t border-white/10 pt-6">
                  {[
                    ['Subject', artwork.subject],
                    ['Content', artwork.content],
                    ['Context', artwork.context],
                  ].map(([label, value]) => (
                    <div key={label} className="border-b border-white/8 pb-4 last:border-b-0 last:pb-0">
                      <dt className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-white/45">
                        {label}
                      </dt>
                      <dd className="mt-2 text-sm leading-7 text-white/76 md:text-[15px]">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <span className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm text-white/72">
                    {artwork.location}
                  </span>
                  <a
                    href={artwork.sourceHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/78 transition hover:text-white"
                  >
                    {artwork.sourceLabel}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ExhibitSection() {
  return (
    <section className="relative bg-[#050505] text-white">
      <section
        id="exhibit"
        className="relative overflow-hidden border-t border-white/10 bg-[#050505] scroll-mt-32"
      >
        <div className="museum-grid absolute inset-0 opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(211,173,104,0.22),transparent_28%),radial-gradient(circle_at_82%_22%,rgba(109,146,196,0.16),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_45%)]" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end gap-16 px-4 py-16 md:px-8 lg:px-12 lg:py-20 xl:px-16">
          <div className="max-w-5xl">
            <p className="museum-kicker">Curated Exhibit</p>
            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.94] md:text-7xl xl:text-[6.4rem]">
              {philippineArtExhibit.title}
            </h2>
            <p className="mt-5 max-w-3xl text-lg text-white/62 md:text-2xl">
              {philippineArtExhibit.subtitle}
            </p>
            <p className="mt-8 max-w-3xl text-sm leading-7 text-white/74 md:text-base">
              {philippineArtExhibit.introduction}
            </p>
          </div>

          <div className="grid gap-8 border-t border-white/10 pt-8 md:grid-cols-3">
            {philippineArtExhibit.chapters.map((chapter) => (
              <div key={chapter.id} className="space-y-3">
                <p className="museum-kicker">{chapter.label}</p>
                <h3 className="font-serif text-2xl text-white md:text-[2rem]">
                  {chapter.title}
                </h3>
                <p className="text-sm leading-7 text-white/66 md:text-[15px]">
                  {chapter.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {philippineArtExhibit.chapters.map((chapter, chapterIndex) => (
        <div key={chapter.id}>
          <ChapterPrelude chapter={chapter} />
          {chapter.artworks.map((artwork, artworkIndex) => (
            <ArtworkFeature
              key={artwork.id}
              artwork={artwork}
              chapter={chapter}
              index={artworkIndex}
              priority={chapterIndex === 0 && artworkIndex === 0}
            />
          ))}
        </div>
      ))}

      <section className="relative overflow-hidden border-t border-white/10 bg-[#040404]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(211,173,104,0.16),transparent_22%),radial-gradient(circle_at_12%_70%,rgba(109,146,196,0.12),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-12 lg:py-24 xl:px-16">
          <p className="museum-kicker">Closing Note</p>
          <h3 className="mt-5 max-w-4xl font-serif text-4xl leading-none md:text-6xl">
            From spectacle to care, the exhibit returns to one question:
            what kind of nation do images teach us to see?
          </h3>
          <p className="mt-8 max-w-3xl text-sm leading-7 text-white/72 md:text-base">
            The works above are drawn from National Museum references and
            Philippine cultural collections. Together they build a virtual passage
            through grief, ritual, beauty, labor, and institution-making without
            interrupting the site&apos;s original cinematic flow.
          </p>
        </div>
      </section>
    </section>
  );
}
