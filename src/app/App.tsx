import { useState } from 'react';
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

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showExplain, setShowExplain] = useState(false);
  const [returnPage, setReturnPage] = useState('home');
  const [activeTutorialId, setActiveTutorialId] = useState<TutorialId>(CURRENT_MISSION_ID);

  const isMissionFlow = ['daily-task', 'task-steps', 'task-complete'].includes(currentPage);
  const needsPageHeader = !['home', 'missions', 'games', 'manual', 'lost'].includes(currentPage);

  const handleNavigate = (page: string, from?: string, tutorialId?: TutorialId) => {
    if (from) {
      setReturnPage(from);
    }
    if (tutorialId) {
      setActiveTutorialId(tutorialId);
    }
    setCurrentPage(page);
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
        return <HelpPage onNavigate={handleNavigate} />;
      case 'lost':
        return <LostPage onNavigate={handleNavigate} onExplain={() => setShowExplain(true)} />;
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
              setCurrentPage(returnPage === 'home' ? 'home' : returnPage);
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
          onHelp={() => setCurrentPage('lost')}
        />
      )}
      <SwipeContainer
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onHelp={() => setCurrentPage('lost')}
        onExplain={() => setShowExplain(true)}
      >
        {renderPage()}
      </SwipeContainer>
      {currentPage !== 'lost' && !isMissionFlow && (
        <BottomNav currentPage={currentPage} onNavigate={handleNavigate} />
      )}
      {showExplain && <ExplainScreen currentPage={currentPage} onClose={() => setShowExplain(false)} />}
    </div>
  );
}
