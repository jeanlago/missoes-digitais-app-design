import { Home, Target, Gamepad2, BookOpen } from 'lucide-react';

interface BottomNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function BottomNav({ currentPage, onNavigate }: BottomNavProps) {
  const items = [
    { id: 'home', label: 'Início', icon: Home },
    { id: 'missions', label: 'Missões', icon: Target },
    { id: 'games', label: 'Jogos', icon: Gamepad2 },
    { id: 'manual', label: 'Manual', icon: BookOpen },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-[#E8F1F8] shadow-2xl z-40">
      <div className="flex justify-around items-center py-4 max-w-[600px] mx-auto">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`
                flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all
                ${isActive ? 'text-[#4A90E2] bg-[#E8F1F8]' : 'text-[#6B7280]'}
              `}
            >
              <Icon size={32} strokeWidth={2.5} />
              <span className="text-base whitespace-nowrap">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
