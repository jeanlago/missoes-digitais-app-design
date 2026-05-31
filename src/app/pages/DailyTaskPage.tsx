import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { HelpCircle } from 'lucide-react';
import { getTutorialById, TutorialId } from '../../data/tutorials';

interface DailyTaskPageProps {
  tutorialId: TutorialId;
  onNavigate: (page: string, from?: string) => void;
}

export function DailyTaskPage({ tutorialId, onNavigate }: DailyTaskPageProps) {
  const tutorial = getTutorialById(tutorialId);

  if (!tutorial) {
    return null;
  }

  return (
    <div className="p-6 pt-24 pb-36 max-w-[600px] mx-auto">
      <div className="mb-6">
        <div className={`inline-block ${tutorial.bg} ${tutorial.color} px-6 py-3 rounded-full mb-4 text-xl`}>
          {tutorial.category}
        </div>
        <h1 className="text-4xl mb-4">{tutorial.title}</h1>
        <p className="text-2xl text-[#6B7280] leading-relaxed">{tutorial.description}</p>
      </div>

      {tutorial.videoSrc && (
        <Card className="mb-6 overflow-hidden p-0">
          <video
            className="w-full aspect-video bg-black"
            controls
            playsInline
            preload="metadata"
            src={tutorial.videoSrc}
          >
            Seu navegador não suporta a reprodução de vídeo.
          </video>
          <div className="p-5">
            <p className="text-xl text-[#6B7280]">
              Assista ao vídeo com calma. Depois toque em Começar para fazer a tarefa passo a passo.
            </p>
          </div>
        </Card>
      )}

      {!tutorial.videoSrc && (
        <Card className="mb-6 bg-[#F8FAFB]">
          <p className="text-xl text-[#6B7280] leading-relaxed">
            Siga os passos abaixo com calma. Quando estiver pronta, toque em Começar para praticar no seu celular.
          </p>
        </Card>
      )}

      <Card className="mb-6">
        <h3 className="text-2xl mb-4 text-[#4A90E2]">Você vai aprender:</h3>
        <div className="space-y-3">
          {tutorial.steps.map((step, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-[#F8FAFB] rounded-xl">
              <div className="w-12 h-12 rounded-full bg-[#4A90E2] text-white flex items-center justify-center text-xl shrink-0">
                {index + 1}
              </div>
              <p className="text-xl">{step}</p>
            </div>
          ))}
        </div>
      </Card>

      <div className="space-y-4">
        <Button variant="primary" fullWidth onClick={() => onNavigate('task-steps')}>
          Começar
        </Button>

        <Button
          variant="secondary"
          fullWidth
          icon={<HelpCircle />}
          onClick={() => onNavigate('help', 'daily-task')}
        >
          Pedir ajuda
        </Button>

        <Button variant="secondary" fullWidth onClick={() => onNavigate('home')}>
          Voltar ao início
        </Button>
      </div>
    </div>
  );
}
