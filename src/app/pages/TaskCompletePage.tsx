import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Trophy, ArrowRight, Home, RotateCcw } from 'lucide-react';
import { getTutorialById, TutorialId } from '../../data/tutorials';

interface TaskCompletePageProps {
  tutorialId: TutorialId;
  onNavigate: (page: string, from?: string) => void;
}

export function TaskCompletePage({ tutorialId, onNavigate }: TaskCompletePageProps) {
  const tutorial = getTutorialById(tutorialId);

  if (!tutorial) {
    return null;
  }

  return (
    <div className="p-6 pt-24 pb-36 max-w-[600px] mx-auto flex flex-col min-h-screen justify-center">
      <Card className="text-center bg-gradient-to-br from-[#51C878] to-[#40A060] text-white mb-8">
        <Trophy size={120} className="mx-auto mb-6" strokeWidth={1.5} />
        <h1 className="text-5xl mb-4">Muito bem!</h1>
        <p className="text-3xl leading-relaxed">Você concluiu a tarefa de hoje.</p>
      </Card>

      <Card className="mb-8 bg-[#FFF9E6] border-4 border-[#FFD700]">
        <div className="flex items-center gap-4">
          <Trophy size={64} className="text-[#D4A017]" strokeWidth={2} />
          <div>
            <h3 className="text-2xl text-[#D4A017] mb-1">Medalha conquistada!</h3>
            <p className="text-xl text-[#8B7500]">{tutorial.medalTitle}</p>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        <Button variant="success" fullWidth icon={<ArrowRight />} onClick={() => onNavigate('missions')}>
          Próxima tarefa
        </Button>

        <Button variant="secondary" fullWidth icon={<Home />} onClick={() => onNavigate('home')}>
          Voltar ao início
        </Button>

        <Button variant="secondary" fullWidth icon={<RotateCcw />} onClick={() => onNavigate('daily-task')}>
          Repetir tarefa
        </Button>
      </div>
    </div>
  );
}
