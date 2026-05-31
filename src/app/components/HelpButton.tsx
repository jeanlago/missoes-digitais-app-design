import * as React from 'react';
import { AlertCircle } from 'lucide-react';

interface HelpButtonProps {
  onClick: () => void;
  variant?: 'icon' | 'labeled';
}

export function HelpButton({ onClick, variant = 'labeled' }: HelpButtonProps) {
  if (variant === 'icon') {
    return (
      <button
        onClick={onClick}
        className="fixed top-5 right-6 bg-[#FF6B6B] text-white rounded-full p-3 shadow-2xl hover:bg-[#E85555] transition-all active:scale-95 z-50"
        aria-label="Pedir ajuda"
      >
        <AlertCircle size={28} strokeWidth={2.5} />
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="fixed top-5 right-0 flex items-center gap-2 bg-[#FF6B6B] text-white rounded-l-full py-3 pl-4 pr-5 shadow-2xl hover:bg-[#E85555] transition-all active:scale-95 z-50"
      aria-label="Pedir ajuda"
    >
      <AlertCircle size={28} strokeWidth={2.5} />
      <span className="text-xl font-medium">AJUDA</span>
    </button>
  );
}
