import { Card } from '../components/Card';
import { HelpCircle, Brain, MousePointerClick, ListChecks, ShieldAlert, PlayCircle } from 'lucide-react';

interface GamesPageProps {
  onNavigate: (page: string) => void;
}

export function GamesPage({ onNavigate }: GamesPageProps) {
  const games = [
    {
      id: 'quiz',
      title: 'Quiz de segurança',
      description: 'Aprenda a se proteger de golpes',
      icon: ShieldAlert,
      color: 'from-[#4A90E2] to-[#357ABD]'
    },
    {
      id: 'memory',
      title: 'Jogo da memória',
      description: 'Memorize os ícones do celular',
      icon: Brain,
      color: 'from-[#9B59B6] to-[#8E44AD]'
    },
    {
      id: 'click',
      title: 'Onde eu clico?',
      description: 'Encontre o botão correto',
      icon: MousePointerClick,
      color: 'from-[#51C878] to-[#40A060]'
    },
    {
      id: 'steps',
      title: 'Complete o passo a passo',
      description: 'Ordene as etapas corretamente',
      icon: ListChecks,
      color: 'from-[#4A90E2] to-[#357ABD]'
    },
    {
      id: 'scam',
      title: 'Caça ao golpe',
      description: 'Identifique mensagens falsas',
      icon: HelpCircle,
      color: 'from-[#FF9F40] to-[#FF8C00]'
    }
  ];

  return (
    <div className="p-6 pt-2 pb-36 max-w-[600px] mx-auto">
      <div className="mb-6">
        <p className="text-2xl text-[#6B7280]">Escolha um jogo para jogar</p>
      </div>

      <div className="space-y-5">
        {games.map((game) => {
          const Icon = game.icon;
          const pageMap: { [key: string]: string } = {
            quiz: 'quiz',
            memory: 'memory-game',
            click: 'click',
            steps: 'steps',
            scam: 'scam'
          };
          return (
            <Card
              key={game.id}
              onClick={() => onNavigate(pageMap[game.id] || 'games')}
              className={`bg-gradient-to-br ${game.color} text-white py-6`}
            >
              <div className="flex items-center gap-4">
                <Icon size={56} className="shrink-0" strokeWidth={2} />
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl mb-1">{game.title}</h3>
                  <p className="text-lg opacity-90">{game.description}</p>
                </div>
                <PlayCircle size={44} className="opacity-80 shrink-0" strokeWidth={2} />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
