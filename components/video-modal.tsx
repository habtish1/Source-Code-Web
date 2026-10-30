"use client";

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiPlay } from "react-icons/hi2";

export default function VideoModal({ video, label }: { video: string; label: string }) {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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

      <Transition show={open} as={Fragment} afterEnter={() => videoRef.current?.play()}>
        <Dialog initialFocus={videoRef} onClose={() => setOpen(false)} className="relative z-[80]">
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-ink-900/85 backdrop-blur-sm" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition duration-150 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-8">
              <Dialog.Panel className="w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl">
                <video ref={videoRef} className="aspect-video w-full" controls playsInline preload="metadata">
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
