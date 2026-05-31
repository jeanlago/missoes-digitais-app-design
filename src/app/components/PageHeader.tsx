import { AlertCircle, ArrowLeft } from 'lucide-react';

interface PageHeaderProps {
  title?: string;
  onBack?: () => void;
  onHelp: () => void;
  showHelp?: boolean;
}

export function PageHeader({ title, onBack, onHelp, showHelp = true }: PageHeaderProps) {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-b-2 border-[#E8F1F8] py-4 px-6 z-40">
      <div className="max-w-[600px] mx-auto flex items-center justify-between gap-3">
        {onBack ? (
          <button
            onClick={onBack}
            className="p-2 rounded-xl transition-all text-[#4A90E2] active:bg-[#E8F1F8] shrink-0"
          >
            <ArrowLeft size={32} strokeWidth={2.5} />
          </button>
        ) : (
          <div className="w-12"></div>
        )}

        {title && (
          <h2 className="text-2xl text-[#1E293B] text-center flex-1">{title}</h2>
        )}

        {showHelp && (
          <button
            onClick={onHelp}
            className="p-3 rounded-full bg-[#FF6B6B] text-white shadow-lg active:scale-95 transition-all shrink-0"
          >
            <AlertCircle size={28} strokeWidth={2.5} />
          </button>
        )}
      </div>
    </div>
  );
}
