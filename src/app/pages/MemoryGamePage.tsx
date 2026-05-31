import { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Smartphone, Phone, Camera, Lock, Settings, ShoppingCart, LucideIcon } from 'lucide-react';

interface MemoryGamePageProps {
  onNavigate: (page: string) => void;
}

interface MemoryItem {
  key: string;
  icon: LucideIcon;
  label: string;
}

interface CardType {
  id: number;
  itemKey: string;
  icon: LucideIcon;
  label: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const memoryItems: MemoryItem[] = [
  { key: 'smartphone', icon: Smartphone, label: 'Celular' },
  { key: 'phone', icon: Phone, label: 'Chamadas' },
  { key: 'camera', icon: Camera, label: 'Câmera' },
  { key: 'lock', icon: Lock, label: 'Cadeado' },
  { key: 'settings', icon: Settings, label: 'Configurações' },
  { key: 'shopping', icon: ShoppingCart, label: 'Compras' },
];

export function MemoryGamePage({ onNavigate }: MemoryGamePageProps) {
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const duplicatedItems = [...memoryItems, ...memoryItems];
    const shuffled = duplicatedItems
      .sort(() => Math.random() - 0.5)
      .map((item, index) => ({
        id: index,
        itemKey: item.key,
        icon: item.icon,
        label: item.label,
        isFlipped: false,
        isMatched: false
      }));
    setCards(shuffled);
    setFlippedCards([]);
    setMoves(0);
  };

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2) return;
    if (flippedCards.includes(id)) return;
    if (cards[id].isMatched) return;

    const newFlipped = [...flippedCards, id];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(moves + 1);
      const [first, second] = newFlipped;

      if (cards[first].itemKey === cards[second].itemKey) {
        setCards(prev => prev.map(card =>
          card.id === first || card.id === second
            ? { ...card, isMatched: true }
            : card
        ));
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const matchedCount = cards.filter(card => card.isMatched).length;
  const isComplete = matchedCount === cards.length;

  return (
    <div className="p-6 pt-24 pb-36 max-w-[600px] mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl mb-4">Jogo da memória</h1>
        <div className="flex justify-between items-center">
          <p className="text-2xl text-[#6B7280]">Movimentos: {moves}</p>
          <p className="text-2xl text-[#6B7280]">Pares: {matchedCount / 2} de {memoryItems.length}</p>
        </div>
      </div>

      {isComplete ? (
        <Card className="mb-8 text-center bg-gradient-to-br from-[#51C878] to-[#40A060] text-white">
          <h2 className="text-4xl mb-4">Parabéns!</h2>
          <p className="text-2xl mb-6">Você completou o jogo em {moves} movimentos!</p>
          <div className="space-y-4">
            <Button variant="secondary" fullWidth onClick={initializeGame}>
              Jogar novamente
            </Button>
            <Button variant="secondary" fullWidth onClick={() => onNavigate('games')}>
              Voltar aos jogos
            </Button>
          </div>
        </Card>
      ) : (
        <>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {cards.map((card) => {
            const isFlipped = flippedCards.includes(card.id) || card.isMatched;
            const Icon = card.icon;

            return (
              <button
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`
                  min-h-[140px] rounded-2xl flex items-center justify-center transition-all transform p-3
                  ${isFlipped
                    ? 'bg-white shadow-lg text-[#4A90E2]'
                    : 'bg-gradient-to-br from-[#9B59B6] to-[#8E44AD] text-white shadow-md hover:scale-105'
                  }
                  ${card.isMatched ? 'opacity-50' : ''}
                `}
              >
                {isFlipped ? (
                  <div className="flex flex-col items-center justify-center gap-3">
                    <Icon size={48} strokeWidth={2} />
                    <span className="text-lg font-medium text-[#1E293B] text-center leading-tight">
                      {card.label}
                    </span>
                  </div>
                ) : (
                  <span className="text-5xl">?</span>
                )}
              </button>
            );
          })}
        </div>
        <Button variant="secondary" fullWidth onClick={() => onNavigate('games')}>
          Voltar aos jogos
        </Button>
        </>
      )}
    </div>
  );
}
