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
          const hasVideo = Boolean(tutorial.videoSrc);

          return (
            <Card
              key={tutorial.id}
              onClick={() => onNavigate('daily-task', 'manual', tutorial.id)}
              className="hover:shadow-xl transition-all p-0 overflow-hidden cursor-pointer"
            >
              {hasVideo && (
                <div className="relative bg-black">
                  <video
                    className="w-full aspect-video object-cover opacity-90"
                    muted
                    playsInline
                    preload="metadata"
                    src={tutorial.videoSrc}
                    aria-label={`Prévia do tutorial ${tutorial.title}`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <PlayCircle size={64} className="text-white drop-shadow-lg" strokeWidth={1.8} />
                  </div>
                </div>
              )}

              <div className="flex items-center gap-5 p-6">
                <div className={`${tutorial.bg} p-5 rounded-2xl shrink-0`}>
                  <Icon size={44} className={tutorial.color} strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl mb-1">{tutorial.title}</h3>
                  <p className="text-xl text-[#6B7280]">
                    {hasVideo ? 'Vídeo curto e passo a passo' : 'Passo a passo guiado'}
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
