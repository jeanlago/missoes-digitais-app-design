import { ArrowLeft, CircleHelp, Info } from 'lucide-react';

interface PageHeaderProps {
  title?: string;
  onBack?: () => void;
  onHelp: () => void;
  onExplain?: () => void;
  showHelp?: boolean;
}

export function PageHeader({ title, onBack, onHelp, onExplain, showHelp = true }: PageHeaderProps) {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-b-2 border-[#E8F1F8] py-3 px-4 z-40">
      <div className="max-w-[600px] mx-auto flex items-center gap-3">
        {onBack ? (
          <button
            onClick={onBack}
            className="min-h-[48px] px-3 rounded-xl transition-all text-[#4A90E2] active:bg-[#E8F1F8] shrink-0 flex items-center gap-2"
            aria-label="Voltar para a tela anterior"
          >
            <ArrowLeft size={28} strokeWidth={2.5} />
            <span className="text-lg">Voltar</span>
          </button>
        ) : (
          <div className="w-24 shrink-0"></div>
        )}

        {title && (
          <h2 className="text-2xl text-[#1E293B] text-center flex-1 min-w-0">{title}</h2>
        )}

        <div className="ml-auto flex items-center gap-2">
          {onExplain && (
            <button
              onClick={onExplain}
              className="min-h-[48px] px-3 rounded-xl bg-[#F0F7FF] text-[#4A90E2] border-2 border-[#CFE4FA] active:bg-[#E8F1F8] transition-all flex items-center gap-2"
              aria-label="O que é esta tela?"
            >
              <Info size={24} strokeWidth={2.5} />
              <span className="hidden min-[430px]:inline text-base whitespace-nowrap">O que é esta tela?</span>
              <span className="min-[430px]:hidden text-base whitespace-nowrap">Tela?</span>
            </button>
          )}

          {showHelp && (
            <button
              onClick={onHelp}
              className="min-h-[48px] px-3 rounded-xl bg-[#FF6B6B] text-white active:bg-[#E85555] transition-all flex items-center gap-2"
              aria-label="Não sei o que fazer"
            >
              <CircleHelp size={24} strokeWidth={2.5} />
              <span className="text-base whitespace-nowrap">Não sei</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
