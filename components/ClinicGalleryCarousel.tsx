"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";

interface ClinicGallery {
  name: string;
  tag?: string;
  coverImg: string;
  photos: { src: string; label: string }[];
}

interface Props {
  clinics: ClinicGallery[];
}

function GalleryModal({
  clinic,
  startIndex,
  onClose,
}: {
  clinic: ClinicGallery;
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);
  const touchStartX = useRef<number | null>(null);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + clinic.photos.length) % clinic.photos.length), [clinic.photos.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % clinic.photos.length), [clinic.photos.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [prev, next, onClose]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
    touchStartX.current = null;
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-4 flex flex-col"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-2 pb-3">
          <div>
            <span className="text-white font-bold text-base">{clinic.name}</span>
            <span className="text-white/50 text-sm ml-3">{current + 1} / {clinic.photos.length}</span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Fechar"
          >
            <X size={18} className="text-white" />
          </button>
        </div>

        {/* Main image */}
        <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full rounded-[20px] overflow-hidden bg-[#0D1E2C]">
          <Image
            key={current}
            src={clinic.photos[current].src}
            alt={clinic.photos[current].label}
            fill
            sizes="(max-width:640px) 100vw, 900px"
            className="object-cover"
            priority
          />
          {/* Prev / Next */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center transition-colors"
            aria-label="Seguinte"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
          {/* Label */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
            <span className="text-white text-sm font-medium">{clinic.photos[current].label}</span>
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1 px-1">
          {clinic.photos.map((p, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`relative flex-shrink-0 w-16 h-12 rounded-[10px] overflow-hidden transition-all duration-200 ${
                i === current ? "ring-2 ring-[#1C9FD6] opacity-100" : "opacity-50 hover:opacity-75"
              }`}
            >
              <Image src={p.src} alt={p.label} fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function ClinicGalleryCarousel({ clinics }: Props) {
  const [modal, setModal] = useState<{ clinicIndex: number; photoIndex: number } | null>(null);

  const openModal = (clinicIndex: number, photoIndex = 0) =>
    setModal({ clinicIndex, photoIndex });
  const closeModal = () => setModal(null);

  return (
    <>
      <div className="grid md:grid-cols-3 gap-6">
        {clinics.map((clinic, ci) => (
          <div
            key={ci}
            className="group bg-white rounded-[24px] overflow-hidden border border-[#D5E4EE] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            onClick={() => openModal(ci, 0)}
          >
            {/* Cover image */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={clinic.coverImg}
                alt={clinic.name}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {clinic.tag && (
                <span className="absolute top-3 left-3 bg-[#1C9FD6] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                  {clinic.tag}
                </span>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E2C]/60 via-transparent to-transparent" />
              {/* Photo count badge */}
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1.5 rounded-full">
                <Images size={12} />
                {clinic.photos.length} fotos
              </div>
            </div>

            {/* Thumbnail strip preview */}
            <div className="flex gap-2 px-4 pt-3">
              {clinic.photos.slice(0, 3).map((p, pi) => (
                <div
                  key={pi}
                  className="relative flex-1 aspect-square rounded-[8px] overflow-hidden bg-[#E8F6FC]"
                  onClick={(e) => { e.stopPropagation(); openModal(ci, pi); }}
                >
                  <Image src={p.src} alt={p.label} fill sizes="80px" className="object-cover hover:scale-110 transition-transform duration-300" />
                </div>
              ))}
              {clinic.photos.length > 3 && (
                <div className="relative flex-1 aspect-square rounded-[8px] overflow-hidden bg-[#0D1E2C] flex items-center justify-center">
                  <span className="text-white text-xs font-bold">+{clinic.photos.length - 3}</span>
                </div>
              )}
            </div>

            <div className="px-4 pt-3 pb-4">
              <h3 className="font-display font-bold text-[#0D1E2C] text-base">{clinic.name}</h3>
              <p className="text-[#1C9FD6] text-xs font-semibold mt-0.5">Ver galeria →</p>
            </div>
          </div>
        ))}
      </div>

      {modal !== null && (
        <GalleryModal
          clinic={clinics[modal.clinicIndex]}
          startIndex={modal.photoIndex}
          onClose={closeModal}
        />
      )}
    </>
  );
}
