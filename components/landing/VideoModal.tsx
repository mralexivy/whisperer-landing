"use client";

import { useRef, useCallback } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export function VideoModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleOpenChange = useCallback(
    (next: boolean) => {
      if (!next) {
        videoRef.current?.pause();
      }
      onOpenChange(next);
    },
    [onOpenChange],
  );

  return (
    <DialogPrimitive.Root open={open} onOpenChange={handleOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed left-[50%] top-[50%] z-50 w-[calc(100%-2rem)] max-w-4xl translate-x-[-50%] translate-y-[-50%] rounded-2xl border border-white/10 bg-black/95 p-0 shadow-2xl overflow-hidden duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
          {/* Glow effect */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-primary/25 via-primary/5 to-transparent pointer-events-none -z-10 blur-md" />

          <DialogPrimitive.Title className="sr-only">Whisperer Demo</DialogPrimitive.Title>

          <DialogPrimitive.Close className="absolute right-3 top-3 z-20 rounded-full bg-white/10 p-2 text-white/70 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>

          <video
            ref={videoRef}
            src="/demo.mp4"
            autoPlay
            controls
            playsInline
            className="w-full"
          />
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
