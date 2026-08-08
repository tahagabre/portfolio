"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

export function Modal({ onClose, children }: ModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={(event) => {
        event.stopPropagation();
        onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-xl bg-background p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-stone-500 hover:text-foreground"
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
