import { Card } from '../components/Card';
import { PlayCircle } from 'lucide-react';
import { tutorials, TutorialId } from '../../data/tutorials';

interface ManualPageProps {
  onNavigate: (page: string, from?: string, tutorialId?: TutorialId) => void;
}

export function ManualPage({ onNavigate }: ManualPageProps) {
  return (
    <div className="p-6 pt-2 pb-36 max-w-[600px] mx-auto">
      <div className="mb-8">
        <p className="text-2xl text-[#6B7280]">Vídeos e tutoriais para você</p>
      </div>

      <div className="space-y-6">
        {tutorials.map((tutorial) => {
          const Icon = tutorial.icon;

          return (
            <Card
              key={tutorial.id}
              onClick={() => onNavigate('daily-task', 'manual', tutorial.id)}
              className="hover:shadow-xl transition-all py-6 cursor-pointer"
            >
              <div className="flex items-center gap-5">
                <div className={`${tutorial.bg} p-5 rounded-2xl shrink-0`}>
                  <Icon size={44} className={tutorial.color} strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl mb-1">{tutorial.title}</h3>
                  <p className="text-xl text-[#6B7280]">
                    {tutorial.videoSrc ? 'Vídeo e passo a passo' : 'Passo a passo'}
                  </p>
                </div>
                <PlayCircle size={48} className="text-[#4A90E2] shrink-0" strokeWidth={2} />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
