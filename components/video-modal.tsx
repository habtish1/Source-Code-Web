"use client";

import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { HiPlay } from "react-icons/hi2";

export default function VideoModal({ video, label }: { video: string; label: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group inline-flex items-center gap-3 rounded-full bg-ink-900 py-2 pl-2 pr-5 text-sm font-semibold text-white transition hover:bg-brand-600"
      >
        <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white text-ink-900">
          <span className="absolute inset-0 rounded-full bg-white/60 animate-pulse-ring" />
          <HiPlay className="relative h-4 w-4 translate-x-px" />
        </span>
        {label}
      </button>

      <Dialog open={open} onClose={() => setOpen(false)} transition className="relative z-[80]">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-ink-900/85 backdrop-blur-sm transition-opacity duration-200 data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-8">
          <DialogPanel
            transition
            className="w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            {open && (
              <video className="aspect-video w-full" controls autoPlay playsInline preload="metadata">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
