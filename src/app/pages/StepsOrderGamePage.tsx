import { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { GameResultActions } from '../components/GameResultActions';
import { GripVertical, CheckCircle2, XCircle } from 'lucide-react';

interface StepsOrderGamePageProps {
  onNavigate: (page: string) => void;
}

interface Step {
  id: number;
  text: string;
  correctOrder: number;
}

export function StepsOrderGamePage({ onNavigate }: StepsOrderGamePageProps) {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const challenges = [
    {
      title: 'Fazer uma ligação',
      steps: [
        { id: 1, text: 'Toque no ícone de telefone', correctOrder: 1 },
        { id: 2, text: 'Escolha o contato', correctOrder: 2 },
        { id: 3, text: 'Toque no botão ligar', correctOrder: 3 },
        { id: 4, text: 'Aguarde a chamada conectar', correctOrder: 4 }
      ]
    },
    {
      title: 'Tirar e enviar uma foto',
      steps: [
        { id: 1, text: 'Abra o aplicativo da câmera', correctOrder: 1 },
        { id: 2, text: 'Tire a foto', correctOrder: 2 },
        { id: 3, text: 'Abra o WhatsApp', correctOrder: 3 },
        { id: 4, text: 'Envie a foto para o contato', correctOrder: 4 }
      ]
    }
  ];

  const [orderedSteps, setOrderedSteps] = useState<Step[]>(
    [...challenges[currentChallenge].steps].sort(() => Math.random() - 0.5)
  );

  const currentCh = challenges[currentChallenge];
  const isLastChallenge = currentChallenge === challenges.length - 1;

  const moveStep = (index: number, direction: 'up' | 'down') => {
    const newSteps = [...orderedSteps];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;

    if (targetIndex < 0 || targetIndex >= newSteps.length) return;

    [newSteps[index], newSteps[targetIndex]] = [newSteps[targetIndex], newSteps[index]];
    setOrderedSteps(newSteps);
  };

  const handleCheck = () => {
    const isCorrect = orderedSteps.every((step, index) => step.correctOrder === index + 1);
    if (isCorrect) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    setShowResult(false);
    if (isLastChallenge) {
      onNavigate('games');
    } else {
      setCurrentChallenge(currentChallenge + 1);
      setOrderedSteps([...challenges[currentChallenge + 1].steps].sort(() => Math.random() - 0.5));
    }
  };

  const isCorrect = orderedSteps.every((step, index) => step.correctOrder === index + 1);

  return (
    <div className="p-6 pt-24 pb-36 max-w-[600px] mx-auto">
      <div className="mb-8">
        <div className="inline-block bg-[#4A90E2] text-white px-6 py-3 rounded-full mb-4 text-xl">
          Complete o passo a passo
        </div>
        <h2 className="text-3xl mb-4">{currentCh.title}</h2>
        <p className="text-2xl text-[#6B7280]">
          {showResult ? 'Veja o resultado' : 'Organize os passos na ordem correta'}
        </p>
      </div>

      {!showResult ? (
        <>
          <div className="space-y-4 mb-8">
            {orderedSteps.map((step, index) => (
              <Card key={step.id} className="bg-white">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => moveStep(index, 'up')}
                      disabled={index === 0}
                      className={`p-2 rounded-lg transition-all ${
                        index === 0
                          ? 'opacity-30 cursor-not-allowed'
                          : 'bg-[#E8F1F8] text-[#4A90E2] active:bg-[#4A90E2] active:text-white'
                      }`}
                    >
                      <GripVertical size={24} className="rotate-180" />
                    </button>
                    <button
                      onClick={() => moveStep(index, 'down')}
                      disabled={index === orderedSteps.length - 1}
                      className={`p-2 rounded-lg transition-all ${
                        index === orderedSteps.length - 1
                          ? 'opacity-30 cursor-not-allowed'
                          : 'bg-[#E8F1F8] text-[#4A90E2] active:bg-[#4A90E2] active:text-white'
                      }`}
                    >
                      <GripVertical size={24} />
                    </button>
                  </div>
                  <div className="flex-1 bg-[#F8FAFB] p-5 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#4A90E2] text-white flex items-center justify-center text-2xl shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-xl">{step.text}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Button variant="primary" fullWidth onClick={handleCheck}>
            Verificar ordem
          </Button>
        </>
      ) : (
        <>
          <Card className={`mb-8 ${isCorrect ? 'bg-[#E8F8F0] border-4 border-[#51C878]' : 'bg-[#FFF0F0] border-4 border-[#FF6B6B]'}`}>
            <div className="text-center mb-6">
              {isCorrect ? (
                <CheckCircle2 size={80} className="mx-auto mb-4 text-[#51C878]" strokeWidth={2} />
              ) : (
                <XCircle size={80} className="mx-auto mb-4 text-[#FF6B6B]" strokeWidth={2} />
              )}
              <h3 className="text-3xl mb-4">{isCorrect ? 'Parabéns!' : 'Não foi dessa vez!'}</h3>
              <p className="text-2xl text-[#6B7280] leading-relaxed">
                {isCorrect
                  ? 'Você organizou todos os passos na ordem correta!'
                  : 'Alguns passos estão fora de ordem. Tente novamente!'}
              </p>
            </div>

            {!isCorrect && (
              <div className="space-y-3">
                <p className="text-xl text-[#6B7280] mb-3">Ordem correta:</p>
                {challenges[currentChallenge].steps
                  .sort((a, b) => a.correctOrder - b.correctOrder)
                  .map((step, index) => (
                    <div key={step.id} className="flex items-center gap-4 p-4 bg-white rounded-xl">
                      <div className="w-10 h-10 rounded-full bg-[#51C878] text-white flex items-center justify-center text-xl shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-lg">{step.text}</p>
                    </div>
                  ))}
              </div>
            )}
          </Card>

          <Card className="mb-8 bg-[#E8F1F8]">
            <div className="text-center">
              <p className="text-2xl text-[#4A90E2]">Sua pontuação</p>
              <p className="text-5xl mt-2">{score} de {challenges.length}</p>
            </div>
          </Card>

          <GameResultActions
            hasNext={!isLastChallenge}
            nextLabel="Próximo desafio"
            onNext={handleNext}
            onBackToGames={() => onNavigate('games')}
          />
        </>
      )}
    </div>
  );
}
