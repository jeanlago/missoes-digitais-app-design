import { useEffect, useState } from 'react';
import { HomePage } from './pages/HomePage';
import { DailyTaskPage } from './pages/DailyTaskPage';
import { TaskStepsPage } from './pages/TaskStepsPage';
import { TaskCompletePage } from './pages/TaskCompletePage';
import { GamesPage } from './pages/GamesPage';
import { QuizPage } from './pages/QuizPage';
import { MemoryGamePage } from './pages/MemoryGamePage';
import { WhereClickGamePage } from './pages/WhereClickGamePage';
import { StepsOrderGamePage } from './pages/StepsOrderGamePage';
import { ScamHuntGamePage } from './pages/ScamHuntGamePage';
import { ManualPage } from './pages/ManualPage';
import { HelpPage } from './pages/HelpPage';
import { LostPage } from './pages/LostPage';
import { MissionsPage } from './pages/MissionsPage';
import { BottomNav } from './components/BottomNav';
import { SwipeContainer } from './components/SwipeContainer';
import { ExplainScreen } from './components/ExplainScreen';
import { PageHeader } from './components/PageHeader';
import { CURRENT_MISSION_ID, TutorialId } from '../data/tutorials';

const HASH_TO_PAGE: Record<string, string> = {
  inicio: 'home',
  missoes: 'missions',
  jogos: 'games',
  manual: 'manual',
};

const PAGE_TO_HASH: Record<string, string> = {
  home: '#inicio',
  missions: '#missoes',
  games: '#jogos',
  manual: '#manual',
};

const getPageFromHash = () => {
  if (typeof window === 'undefined') return 'home';
  const hash = window.location.hash.replace('#', '').toLowerCase();
  return HASH_TO_PAGE[hash] ?? 'home';
};

const updateHashForPage = (page: string) => {
  if (typeof window === 'undefined') return;
  const nextHash = PAGE_TO_HASH[page];
  if (nextHash && window.location.hash !== nextHash) {
    window.location.hash = nextHash;
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => getPageFromHash());
  const [explainPage, setExplainPage] = useState<string | null>(null);
  const [returnPage, setReturnPage] = useState('home');
  const [activeTutorialId, setActiveTutorialId] = useState<TutorialId>(CURRENT_MISSION_ID);

  const isMissionFlow = ['daily-task', 'task-steps', 'task-complete'].includes(currentPage);
  const needsPageHeader = !['home', 'missions', 'games', 'manual', 'lost'].includes(currentPage);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (!('scrollRestoration' in window.history)) return;
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    const scrollToPageTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    scrollToPageTop();
    const frameId = requestAnimationFrame(scrollToPageTop);
    const timeoutId = window.setTimeout(scrollToPageTop, 80);

    return () => {
      cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
    };
  }, [currentPage, activeTutorialId]);

  const handleNavigate = (page: string, from?: string, tutorialId?: TutorialId) => {
    if (from) {
      setReturnPage(from);
    } else if (page === 'lost') {
      setReturnPage(currentPage);
    } else if (page === 'help' && currentPage !== 'lost') {
      setReturnPage(currentPage);
    }
    if (tutorialId) {
      setActiveTutorialId(tutorialId);
    }
    setCurrentPage(page);
    updateHashForPage(page);
  };

  const handleOpenLost = () => {
    setReturnPage(currentPage);
    setCurrentPage('lost');
  };

  const resolveBackPage = (page: string) => (page === 'lost' ? 'home' : page);

  const openExplanation = (page = currentPage) => {
    setExplainPage(resolveBackPage(page));
  };

  const handleBackFromHelp = () => {
    setCurrentPage(resolveBackPage(returnPage));
  };

  const handleCloseLost = () => {
    setCurrentPage(resolveBackPage(returnPage));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'daily-task':
        return <DailyTaskPage tutorialId={activeTutorialId} onNavigate={handleNavigate} />;
      case 'task-steps':
        return <TaskStepsPage tutorialId={activeTutorialId} onNavigate={handleNavigate} />;
      case 'task-complete':
        return <TaskCompletePage tutorialId={activeTutorialId} onNavigate={handleNavigate} />;
      case 'games':
        return <GamesPage onNavigate={handleNavigate} />;
      case 'quiz':
        return <QuizPage onNavigate={handleNavigate} />;
      case 'memory-game':
        return <MemoryGamePage onNavigate={handleNavigate} />;
      case 'click':
        return <WhereClickGamePage onNavigate={handleNavigate} />;
      case 'steps':
        return <StepsOrderGamePage onNavigate={handleNavigate} />;
      case 'scam':
        return <ScamHuntGamePage onNavigate={handleNavigate} />;
      case 'manual':
        return <ManualPage onNavigate={handleNavigate} />;
      case 'help':
        return <HelpPage onNavigate={handleNavigate} onBack={handleBackFromHelp} />;
      case 'lost':
        return (
          <LostPage
            onNavigate={handleNavigate}
            previousPage={returnPage}
            onExplain={() => {
              const pageToExplain = resolveBackPage(returnPage);
              setCurrentPage(pageToExplain);
              openExplanation(pageToExplain);
            }}
            onCancel={handleCloseLost}
          />
        );
      case 'missions':
        return <MissionsPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F7FF] to-[#E8F1F8]">
      {needsPageHeader && (
        <PageHeader
          onBack={() => {
            if (currentPage === 'daily-task') {
              setCurrentPage(returnPage);
            } else if (currentPage === 'help') {
              handleBackFromHelp();
            } else if (['quiz', 'memory-game', 'click', 'steps', 'scam'].includes(currentPage)) {
              setCurrentPage('games');
            } else if (currentPage === 'task-steps') {
              setCurrentPage('daily-task');
            } else if (currentPage === 'task-complete') {
              setCurrentPage('daily-task');
            } else {
              setCurrentPage('home');
            }
          }}
          onHelp={handleOpenLost}
          onExplain={() => openExplanation(currentPage)}
        />
      )}
      <SwipeContainer
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onHelp={handleOpenLost}
        onExplain={() => openExplanation(currentPage)}
      >
        {renderPage()}
      </SwipeContainer>
      {currentPage !== 'lost' && !isMissionFlow && (
        <BottomNav currentPage={currentPage} onNavigate={handleNavigate} />
      )}
      {explainPage && <ExplainScreen currentPage={explainPage} onClose={() => setExplainPage(null)} />}
    </div>
  );
}
