import { useState, useRef, ReactNode } from 'react';
import { ChevronLeft, ChevronRight, CircleHelp, Info } from 'lucide-react';

interface SwipeContainerProps {
  children: ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
  onHelp: () => void;
  onExplain: () => void;
}

export function SwipeContainer({ children, currentPage, onNavigate, onHelp, onExplain }: SwipeContainerProps) {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const pages = ['home', 'missions', 'games', 'manual'];
  const currentIndex = pages.indexOf(currentPage);

  const pageNames: { [key: string]: string } = {
    home: 'Início',
    missions: 'Missões',
    games: 'Jogos',
    manual: 'Manual'
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < pages.length - 1) {
      onNavigate(pages[currentIndex + 1]);
    }

    if (isRightSwipe && currentIndex > 0) {
      onNavigate(pages[currentIndex - 1]);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      onNavigate(pages[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    if (currentIndex < pages.length - 1) {
      onNavigate(pages[currentIndex + 1]);
    }
  };

  const showNavigation = pages.includes(currentPage);

  return (
    <div className="relative">
      {showNavigation && (
        <div className="fixed top-0 left-0 right-0 bg-white border-b-2 border-[#E8F1F8] py-4 px-6 z-40">
          <div className="max-w-[600px] mx-auto flex items-center justify-between gap-3">
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              aria-label="Ir para a seção anterior"
              className={`p-2 rounded-xl transition-all shrink-0 ${
                currentIndex === 0
                  ? 'opacity-0 pointer-events-none'
                  : 'text-[#4A90E2] active:bg-[#E8F1F8]'
              }`}
            >
              <ChevronLeft size={32} strokeWidth={2.5} />
            </button>

            <div className="flex-1 text-center min-w-0">
              <h2 className="text-2xl text-[#1E293B]">{pageNames[currentPage]}</h2>
              <div className="flex justify-center gap-2 mt-2" aria-label="Indicador de seção">
                {pages.map((page, index) => (
                  <div
                    key={page}
                    aria-hidden="true"
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 bg-[#4A90E2]'
                        : 'w-2 bg-[#CBD5E1]'
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={goToNext}
              disabled={currentIndex === pages.length - 1}
              aria-label="Ir para a próxima seção"
              className={`p-2 rounded-xl transition-all shrink-0 ${
                currentIndex === pages.length - 1
                  ? 'opacity-0 pointer-events-none'
                  : 'text-[#4A90E2] active:bg-[#E8F1F8]'
              }`}
            >
              <ChevronRight size={32} strokeWidth={2.5} />
            </button>
          </div>

          <div className="max-w-[600px] mx-auto grid grid-cols-2 gap-3 mt-3">
            <button
              onClick={onExplain}
              className="min-h-[52px] rounded-xl bg-[#F0F7FF] text-[#4A90E2] border-2 border-[#CFE4FA] active:bg-[#E8F1F8] transition-all flex items-center justify-center gap-2 px-3"
              aria-label="O que é esta tela?"
            >
              <Info size={24} strokeWidth={2.5} />
              <span className="text-base leading-tight">O que é esta tela?</span>
            </button>

            <button
              onClick={onHelp}
              className="min-h-[52px] rounded-xl bg-[#FF6B6B] text-white active:bg-[#E85555] transition-all flex items-center justify-center gap-2 px-3"
              aria-label="Não sei o que fazer"
            >
              <CircleHelp size={24} strokeWidth={2.5} />
              <span className="text-base leading-tight">Não sei o que fazer</span>
            </button>
          </div>
        </div>
      )}

      <div className={showNavigation ? 'pt-[152px]' : ''}>

        <div
          ref={containerRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="touch-pan-y"
        >
          {children}
        </div>
      </div>

    </div>
  );
}
