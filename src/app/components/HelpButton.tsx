import { AlertCircle } from 'lucide-react';

interface HelpButtonProps {
  onClick: () => void;
}

export function HelpButton({ onClick }: HelpButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed top-6 right-6 bg-[#FF6B6B] text-white rounded-full p-4 shadow-2xl hover:bg-[#E85555] transition-all active:scale-95 z-50"
    >
      <AlertCircle size={32} strokeWidth={2.5} />
    </button>
  );
}
