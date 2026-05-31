import { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Smartphone, Phone, Camera, Lock, Settings, ShoppingCart } from 'lucide-react';

interface MemoryGamePageProps {
  onNavigate: (page: string) => void;
}

interface CardType {
  id: number;
  icon: any;
  isFlipped: boolean;
  isMatched: boolean;
}

export function MemoryGamePage({ onNavigate }: MemoryGamePageProps) {
  const icons = [Smartphone, Phone, Camera, Lock, Settings, ShoppingCart];
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const duplicatedIcons = [...icons, ...icons];
    const shuffled = duplicatedIcons
      .sort(() => Math.random() - 0.5)
      .map((icon, index) => ({
        id: index,
        icon,
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

      if (cards[first].icon === cards[second].icon) {
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
          <p className="text-2xl text-[#6B7280]">Pares: {matchedCount / 2} de {icons.length}</p>
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
        <div className="grid grid-cols-3 gap-4 mb-8">
          {cards.map((card) => {
            const isFlipped = flippedCards.includes(card.id) || card.isMatched;
            const Icon = card.icon;

            return (
              <button
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`
                  aspect-square rounded-2xl flex items-center justify-center transition-all transform
                  ${isFlipped
                    ? 'bg-white shadow-lg'
                    : 'bg-gradient-to-br from-[#9B59B6] to-[#8E44AD] text-white shadow-md hover:scale-105'
                  }
                  ${card.isMatched ? 'opacity-50' : ''}
                `}
              >
                {isFlipped ? <Icon size={56} strokeWidth={2} /> : <span className="text-5xl">?</span>}
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
