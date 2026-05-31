import { Card } from '../components/Card';
import { CheckCircle2, Circle, Lock, PlayCircle } from 'lucide-react';
import { TutorialId } from '../../data/tutorials';

interface MissionsPageProps {
  onNavigate: (page: string, from?: string, tutorialId?: TutorialId) => void;
}

interface Mission {
  id: number;
  title: string;
  status: 'completed' | 'current' | 'locked';
  category: string;
  tutorialId?: TutorialId;
}

export function MissionsPage({ onNavigate }: MissionsPageProps) {
  const missions: Mission[] = [
    { id: 1, title: 'Fazer uma ligação', status: 'completed', category: 'Chamadas' },
    {
      id: 2,
      title: 'Salvar um contato',
      status: 'completed',
      category: 'Contatos',
      tutorialId: 'contato',
    },
    {
      id: 3,
      title: 'Mandar mensagem no WhatsApp',
      status: 'completed',
      category: 'WhatsApp',
      tutorialId: 'mensagem',
    },
    {
      id: 4,
      title: 'Enviar uma imagem',
      status: 'current',
      category: 'WhatsApp',
      tutorialId: 'imagem',
    },
    {
      id: 5,
      title: 'Enviar um vídeo',
      status: 'locked',
      category: 'WhatsApp',
      tutorialId: 'video',
    },
    { id: 6, title: 'Fazer videochamada', status: 'locked', category: 'Chamadas' },
  ];

  const completedCount = missions.filter((m) => m.status === 'completed').length;

  const handleMissionClick = (mission: Mission) => {
    if (mission.status === 'locked' || !mission.tutorialId) return;
    onNavigate('daily-task', 'missions', mission.tutorialId);
  };

  return (
    <div className="p-6 pt-2 pb-36 max-w-[600px] mx-auto">
      <div className="mb-8">
        <Card className="bg-gradient-to-br from-[#4A90E2] to-[#357ABD] text-white py-8">
          <div className="text-center">
            <p className="text-2xl mb-3">Seu progresso</p>
            <p className="text-5xl mb-6">
              {completedCount} de {missions.length}
            </p>
            <div className="bg-white/30 h-5 rounded-full overflow-hidden">
              <div
                className="bg-white h-full transition-all duration-500"
                style={{ width: `${(completedCount / missions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-6">
        {missions.map((mission) => {
          const isCompleted = mission.status === 'completed';
          const isCurrent = mission.status === 'current';
          const isLocked = mission.status === 'locked';
          const hasTutorial = Boolean(mission.tutorialId);
          const isClickable = hasTutorial && !isLocked;

          return (
            <Card
              key={mission.id}
              onClick={isClickable ? () => handleMissionClick(mission) : undefined}
              className={`
                ${isCompleted ? 'bg-[#E8F8F0] border-2 border-[#51C878]' : ''}
                ${isCurrent ? 'bg-[#FFF9E6] border-4 border-[#FFD700]' : ''}
                ${isLocked ? 'opacity-60' : ''}
                ${isClickable ? 'cursor-pointer' : ''}
              `}
            >
              <div className="flex items-center gap-4">
                <div className={`shrink-0 ${isLocked ? 'text-[#CBD5E1]' : ''}`}>
                  {isCompleted && <CheckCircle2 size={48} className="text-[#51C878]" strokeWidth={2.5} />}
                  {isCurrent && <Circle size={48} className="text-[#FFD700]" strokeWidth={3} />}
                  {isLocked && <Lock size={48} className="text-[#CBD5E1]" strokeWidth={2} />}
                </div>
                <div className="flex-1">
                  <div className={`text-base mb-1 ${isLocked ? 'text-[#CBD5E1]' : 'text-[#6B7280]'}`}>
                    {mission.category}
                  </div>
                  <h3 className={`text-2xl ${isLocked ? 'text-[#94A3B8]' : ''}`}>{mission.title}</h3>
                  {hasTutorial && !isLocked && (
                    <p className="text-lg text-[#6B7280] mt-1">Toque para iniciar a missão</p>
                  )}
                </div>
                {hasTutorial && !isLocked && (
                  <PlayCircle
                    size={48}
                    className={`${isCurrent ? 'text-[#FFD700]' : 'text-[#4A90E2]'} shrink-0`}
                    strokeWidth={2}
                  />
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
