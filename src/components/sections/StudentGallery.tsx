"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  Calendar,
  Camera,
  ChevronLeft,
  ChevronRight,
  Expand,
  Images,
  Play,
  Sparkles,
  Users,
  Video,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { trainingMoments, type TrainingMoment } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function StudentGallery() {
  const [activeMoment, setActiveMoment] = useState<TrainingMoment | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [cardImageIndices, setCardImageIndices] = useState<Record<string, number>>({});
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});
  const [filter, setFilter] = useState("all");

  const filterTabs = useMemo(
    () => [
      { id: "all", label: "All Batches", count: trainingMoments.length },
      {
        id: "eshikhon",
        label: "eShikhon.com",
        count: trainingMoments.filter((m) => m.company.toLowerCase().includes("eshikhon")).length,
      },
      {
        id: "infosystem",
        label: "Infosystem Tech",
        count: trainingMoments.filter((m) => m.company.toLowerCase().includes("infosystem")).length,
      },
      {
        id: "peoplentech",
        label: "PeopleNTech",
        count: trainingMoments.filter((m) => m.company.toLowerCase().includes("peoplentech")).length,
      },
      {
        id: "ticon",
        label: "Ticon System",
        count: trainingMoments.filter((m) => m.company.toLowerCase().includes("ticon")).length,
      },
      {
        id: "video",
        label: "Video",
        count: trainingMoments.filter((m) => m.type === "video").length,
      },
    ],
    [],
  );

  const visibleMoments = useMemo(() => {
    if (filter === "eshikhon") {
      return trainingMoments.filter((m) => m.company.toLowerCase().includes("eshikhon"));
    }
    if (filter === "infosystem") {
      return trainingMoments.filter((m) => m.company.toLowerCase().includes("infosystem"));
    }
    if (filter === "peoplentech") {
      return trainingMoments.filter((m) => m.company.toLowerCase().includes("peoplentech"));
    }
    if (filter === "ticon") {
      return trainingMoments.filter((m) => m.company.toLowerCase().includes("ticon"));
    }
    if (filter === "video") {
      return trainingMoments.filter((m) => m.type === "video");
    }
    return trainingMoments;
  }, [filter]);

  // Open lightbox and set initial image index
  const openLightbox = (moment: TrainingMoment) => {
    setActiveMoment(moment);
    setModalImageIndex(cardImageIndices[moment.id] || 0);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!activeMoment) return;
      if (e.key === "Escape") {
        setActiveMoment(null);
      } else if (e.key === "ArrowLeft" && activeMoment.images && activeMoment.images.length > 1) {
        setModalImageIndex((prev) => (prev === 0 ? activeMoment.images!.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight" && activeMoment.images && activeMoment.images.length > 1) {
        setModalImageIndex((prev) => (prev + 1) % activeMoment.images!.length);
      }
    }
    if (activeMoment) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeMoment]);

  const handleImageError = (id: string) => {
    setImageErrorMap((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="gallery" className="relative max-w-full overflow-hidden bg-surface-2/30 py-24 sm:py-32">
      {/* Background ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/4 -z-10 h-80 w-80 max-w-full rounded-full bg-accent/10 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-1/4 -z-10 h-80 w-80 max-w-full rounded-full bg-emerald-500/10 blur-[100px]"
      />

      <Container>
        <SectionHeading
          index="06"
          eyebrow="Classroom & Mentorship"
          title={
            <>
              Training In Action &amp; <span className="text-gradient">Student Moments</span>
            </>
          }
          description="Real moments with my students from hands-on training sessions, interactive workshops, and intensive coding programs across various institutes."
        />

        {/* Filter Tabs */}
        <Reveal className="mb-10 flex flex-wrap gap-2" y={10}>
          <div role="tablist" aria-label="Filter gallery moments" className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => {
              const selected = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setFilter(tab.id)}
                  className={cn(
                    "relative isolate inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-colors sm:text-sm",
                    selected
                      ? "border-transparent text-white"
                      : "border-line bg-surface text-muted hover:text-fg",
                  )}
                >
                  {selected && (
                    <motion.span
                      layoutId="gallery-filter-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-linear-to-r from-accent to-accent-2 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {tab.label}
                  <span
                    className={cn(
                      "rounded-full px-1.5 py-0.5 font-mono text-[10px]",
                      selected ? "bg-white/20 text-white" : "bg-surface-2 text-muted",
                    )}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Gallery Grid - Equal Height Cards */}
        <div className="grid w-full max-w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleMoments.map((moment, index) => {
            const hasImages = moment.images && moment.images.length > 0;
            const currentImgIndex = cardImageIndices[moment.id] || 0;
            const currentImgSrc = hasImages ? moment.images![currentImgIndex] : moment.image;
            const hasError = !currentImgSrc || imageErrorMap[moment.id];
            const isVideo = moment.type === "video";
            const multipleImages = hasImages && moment.images!.length > 1;

            return (
              <Reveal key={moment.id} delay={index * 0.08} className="min-w-0 w-full h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  onClick={() => openLightbox(moment)}
                  className="card group relative flex h-full w-full min-w-0 cursor-pointer flex-col justify-between overflow-hidden border-line bg-surface/90 shadow-xl shadow-black/5 backdrop-blur-md transition-all duration-300 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10"
                >
                  {/* Image/Video Preview Container */}
                  <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-surface-2">
                    {!hasError ? (
                      moment.isBrandLogo ? (
                        <div className="relative flex h-full w-full items-center justify-center bg-linear-to-br from-surface via-surface-2/80 to-surface p-6 sm:p-8">
                          {/* Ambient glow behind logo */}
                          <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 bg-radial from-emerald-500/10 via-accent/5 to-transparent opacity-80"
                          />
                          <div className="relative h-16 w-44 transition-transform duration-500 ease-out group-hover:scale-105 sm:h-20 sm:w-52">
                            <Image
                              src={currentImgSrc!}
                              alt={moment.company}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-contain drop-shadow-sm"
                              onError={() => handleImageError(moment.id)}
                            />
                          </div>
                        </div>
                      ) : (
                        <>
                          <Image
                            src={currentImgSrc!}
                            alt={moment.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                            onError={() => handleImageError(moment.id)}
                          />
                          {/* Gradient shade over image */}
                          <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 bg-linear-to-t from-bg via-bg/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-70"
                          />

                          {/* Video Play Overlay */}
                          {isVideo && (
                            <div className="absolute inset-0 z-10 grid place-items-center bg-black/25 backdrop-blur-[1px] transition-all duration-300 group-hover:bg-black/35">
                              <div className="grid h-12 w-12 place-items-center rounded-full border border-white/60 bg-accent text-white shadow-xl shadow-accent/40 backdrop-blur-sm transition-transform duration-300 group-hover:scale-115">
                                <Play className="ml-0.5 h-5 w-5 fill-current" />
                              </div>
                            </div>
                          )}

                          {/* Multiple Image Mini Slider Arrows on Card */}
                          {multipleImages && (
                            <>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCardImageIndices((prev) => {
                                    const cur = prev[moment.id] || 0;
                                    const next = cur === 0 ? moment.images!.length - 1 : cur - 1;
                                    return { ...prev, [moment.id]: next };
                                  });
                                }}
                                aria-label="Previous image"
                                className="absolute left-2.5 top-1/2 z-20 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/60 text-white opacity-0 backdrop-blur-md transition-all hover:bg-black/90 group-hover:opacity-100"
                              >
                                <ChevronLeft className="h-4 w-4" />
                              </button>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCardImageIndices((prev) => {
                                    const cur = prev[moment.id] || 0;
                                    const next = (cur + 1) % moment.images!.length;
                                    return { ...prev, [moment.id]: next };
                                  });
                                }}
                                aria-label="Next image"
                                className="absolute right-2.5 top-1/2 z-20 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/60 text-white opacity-0 backdrop-blur-md transition-all hover:bg-black/90 group-hover:opacity-100"
                              >
                                <ChevronRight className="h-4 w-4" />
                              </button>
                            </>
                          )}
                        </>
                      )
                    ) : (
                      <div className="relative flex h-full w-full flex-col items-center justify-center p-6 text-center">
                        <div
                          aria-hidden
                          className="absolute inset-0 bg-linear-to-br from-accent/10 via-surface-2 to-emerald-500/10 opacity-70"
                        />
                        <div className="relative z-10 flex flex-col items-center">
                          <div className="grid h-16 w-16 place-items-center rounded-2xl border border-accent/30 bg-surface/80 text-accent shadow-lg shadow-accent/5 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:border-accent">
                            <Camera className="h-8 w-8" />
                          </div>
                          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/90 px-3 py-1 font-mono text-xs text-muted backdrop-blur-sm">
                            <Sparkles className="h-3 w-3 text-accent" />
                            Student Session Photo
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Top Badges */}
                    <div className="pointer-events-none absolute left-3 right-3 top-3 z-10 flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-line/80 bg-surface/90 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-accent shadow-sm backdrop-blur-md sm:px-3 sm:py-1 sm:text-[11px]">
                        {isVideo ? (
                          <Video className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        ) : (
                          <Users className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        )}
                        {moment.badge || "Classroom"}
                      </span>

                      {/* Multiple Images Counter Pill */}
                      {multipleImages ? (
                        <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/70 px-2.5 py-0.5 font-mono text-[10px] font-medium text-white shadow-sm backdrop-blur-md sm:text-[11px]">
                          <Images className="h-3 w-3 text-accent" />
                          {currentImgIndex + 1}/{moment.images!.length} Photos
                        </span>
                      ) : moment.period ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-line/80 bg-surface/90 px-2 py-0.5 font-mono text-[10px] text-muted shadow-sm backdrop-blur-md sm:px-2.5 sm:py-1 sm:text-[11px]">
                          <Calendar className="h-3 w-3 text-accent-2" />
                          {moment.period}
                        </span>
                      ) : null}
                    </div>

                    {/* Expand icon pill */}
                    <div className="absolute bottom-3 right-3 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-black/70 px-2.5 py-1 text-xs font-medium text-white shadow-lg backdrop-blur-md">
                        {isVideo ? <Play className="h-3.5 w-3.5 fill-current" /> : <Expand className="h-3.5 w-3.5" />}
                        {isVideo ? "Play" : "View"}
                      </span>
                    </div>

                    {/* Dot indicators for multiple images */}
                    {multipleImages && (
                      <div className="pointer-events-none absolute bottom-2.5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1">
                        {moment.images!.map((_, i) => (
                          <span
                            key={i}
                            className={cn(
                              "h-1.5 rounded-full transition-all duration-300",
                              i === currentImgIndex
                                ? "w-4 bg-accent shadow-xs"
                                : "w-1.5 bg-white/50",
                            )}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Content & Details (Same Height Across All Cards) */}
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 min-w-0">
                    <div className="min-w-0">
                      {/* Organization / Company Tag */}
                      <div className="mb-2.5 flex items-center gap-2 min-w-0">
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md border border-accent/30 bg-accent/10 text-accent mt-0.5">
                          <Building2 className="h-3.5 w-3.5" />
                        </span>
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent sm:text-[13px] break-words min-w-0">
                          {moment.company}
                        </span>
                      </div>

                      {/* Course Title */}
                      <h3 className="font-display text-base font-bold leading-snug text-fg transition-colors group-hover:text-accent sm:text-lg break-words min-w-0">
                        {moment.title}
                      </h3>
                    </div>

                    {/* Bottom Area: Level and Batch Separated into Distinct Pills (No Caption) */}
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-line/60 pt-4">
                      <div className="flex flex-wrap items-center gap-1.5 min-w-0">
                        {moment.level && (
                          <span className="rounded-md border border-accent-2/30 bg-accent-2/10 px-2 py-0.5 font-mono text-[11px] font-semibold text-accent-2">
                            {moment.level}
                          </span>
                        )}
                        <span className="rounded-md border border-line bg-surface-2 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-fg/85">
                          {moment.batch}
                        </span>
                      </div>

                      {moment.period && (
                        <span className="flex items-center gap-1 font-mono text-[11px] text-muted">
                          <Calendar className="h-3 w-3 text-accent-2" />
                          {moment.period}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </Container>

      {/* Lightbox Modal with Full-Screen Carousel & Video Player */}
      <AnimatePresence>
        {activeMoment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveMoment(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveMoment(null)}
                aria-label="Close dialog"
                className="absolute right-4 top-4 z-30 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-black/90 hover:text-accent"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Media View (Image or Video) */}
              <div className="relative aspect-[16/10] w-full bg-surface-2 sm:aspect-[16/9]">
                {activeMoment.type === "video" && activeMoment.videoUrl ? (
                  <div className="flex h-full w-full items-center justify-center bg-black">
                    <video
                      src={activeMoment.videoUrl}
                      controls
                      autoPlay
                      playsInline
                      className="h-full w-full max-h-[70vh] object-contain"
                    />
                  </div>
                ) : (
                  (() => {
                    const hasImgs = activeMoment.images && activeMoment.images.length > 0;
                    const modalSrc = hasImgs ? activeMoment.images![modalImageIndex] : activeMoment.image;
                    const isMulti = hasImgs && activeMoment.images!.length > 1;

                    return (
                      <>
                        {modalSrc ? (
                          activeMoment.isBrandLogo ? (
                            <div className="flex h-full w-full items-center justify-center bg-surface p-8 sm:p-12">
                              <div className="relative h-28 w-72 sm:h-36 sm:w-96">
                                <Image
                                  src={modalSrc}
                                  alt={activeMoment.company}
                                  fill
                                  sizes="(max-width: 1200px) 100vw, 1200px"
                                  className="object-contain drop-shadow-md"
                                />
                              </div>
                            </div>
                          ) : (
                            <Image
                              src={modalSrc}
                              alt={activeMoment.title}
                              fill
                              sizes="(max-width: 1200px) 100vw, 1200px"
                              className="object-contain"
                            />
                          )
                        ) : (
                          <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
                            <div className="grid h-20 w-20 place-items-center rounded-3xl border border-accent/30 bg-accent/10 text-accent">
                              <Camera className="h-10 w-10" />
                            </div>
                            <p className="mt-4 font-display text-lg font-semibold text-fg">
                              Student Session Photo
                            </p>
                          </div>
                        )}

                        {/* Modal Carousel Navigation for Multi-Image Cards */}
                        {isMulti && (
                          <>
                            <button
                              type="button"
                              onClick={() =>
                                setModalImageIndex((prev) =>
                                  prev === 0 ? activeMoment.images!.length - 1 : prev - 1,
                                )
                              }
                              aria-label="Previous photo"
                              className="absolute left-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-black/90 hover:text-accent"
                            >
                              <ChevronLeft className="h-6 w-6" />
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                setModalImageIndex((prev) => (prev + 1) % activeMoment.images!.length)
                              }
                              aria-label="Next photo"
                              className="absolute right-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-black/90 hover:text-accent"
                            >
                              <ChevronRight className="h-6 w-6" />
                            </button>

                            {/* Modal Bottom Counter Pill */}
                            <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2">
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/70 px-3 py-1 font-mono text-xs font-medium text-white shadow-md backdrop-blur-md">
                                <Images className="h-3.5 w-3.5 text-accent" />
                                Photo {modalImageIndex + 1} of {activeMoment.images!.length}
                              </span>
                            </div>
                          </>
                        )}
                      </>
                    );
                  })()
                )}
              </div>

              {/* Modal Details Footer */}
              <div className="border-t border-line bg-surface p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-accent" />
                    <span className="font-mono text-sm font-semibold text-accent">
                      {activeMoment.company}
                    </span>
                  </div>
                  {activeMoment.period && (
                    <span className="font-mono text-xs text-muted">
                      {activeMoment.period}
                    </span>
                  )}
                </div>

                <h3 className="mt-2 font-display text-xl font-bold text-fg sm:text-2xl">
                  {activeMoment.title}
                </h3>

                {/* Level and Batch Badges in Modal */}
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {activeMoment.level && (
                    <span className="rounded-md border border-accent-2/30 bg-accent-2/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-accent-2">
                      {activeMoment.level}
                    </span>
                  )}
                  <span className="rounded-md border border-line bg-surface-2 px-3 py-0.5 font-mono text-xs font-semibold text-fg/85">
                    {activeMoment.batch}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
