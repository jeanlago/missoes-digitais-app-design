import { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { GameResultActions } from '../components/GameResultActions';
import { Phone, Camera, Settings, MessageSquare, Video, Mail } from 'lucide-react';

interface WhereClickGamePageProps {
  onNavigate: (page: string) => void;
}

export function WhereClickGamePage({ onNavigate }: WhereClickGamePageProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const questions = [
    {
      question: 'Onde você clica para fazer uma ligação?',
      buttons: [
        { id: 0, icon: Phone, label: 'Telefone', correct: true },
        { id: 1, icon: MessageSquare, label: 'Mensagens', correct: false },
        { id: 2, icon: Camera, label: 'Câmera', correct: false },
        { id: 3, icon: Settings, label: 'Configurações', correct: false }
      ]
    },
    {
      question: 'Onde você clica para tirar uma foto?',
      buttons: [
        { id: 0, icon: Video, label: 'Vídeo', correct: false },
        { id: 1, icon: Camera, label: 'Câmera', correct: true },
        { id: 2, icon: Mail, label: 'E-mail', correct: false },
        { id: 3, icon: Phone, label: 'Telefone', correct: false }
      ]
    },
    {
      question: 'Onde você clica para ver as configurações do celular?',
      buttons: [
        { id: 0, icon: MessageSquare, label: 'Mensagens', correct: false },
        { id: 1, icon: Phone, label: 'Telefone', correct: false },
        { id: 2, icon: Settings, label: 'Configurações', correct: true },
        { id: 3, icon: Camera, label: 'Câmera', correct: false }
      ]
    }
  ];

  const currentQ = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  const handleButtonClick = (buttonId: number) => {
    setSelectedButton(buttonId);
  };

  const handleConfirm = () => {
    if (selectedButton === null) return;

    const selectedBtn = currentQ.buttons.find(b => b.id === selectedButton);
    if (selectedBtn?.correct) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    setShowResult(false);
    setSelectedButton(null);
    if (isLastQuestion) {
      onNavigate('games');
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const selectedBtn = currentQ.buttons.find(b => b.id === selectedButton);
  const isCorrect = selectedBtn?.correct || false;

  return (
    <div className="p-6 pt-24 pb-36 max-w-[600px] mx-auto">
      <div className="mb-8">
        <div className="inline-block bg-[#51C878] text-white px-6 py-3 rounded-full mb-4 text-xl">
          Onde eu clico?
        </div>
        <div className="text-2xl text-[#6B7280] mb-4">Pergunta {currentQuestion + 1} de {questions.length}</div>
        <div className="bg-[#E8F1F8] h-3 rounded-full overflow-hidden">
          <div
            className="bg-[#51C878] h-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {!showResult ? (
        <>
          <Card className="mb-8 bg-gradient-to-br from-[#F0F7FF] to-white">
            <h2 className="text-3xl text-center leading-relaxed mb-6">{currentQ.question}</h2>
            <div className="grid grid-cols-2 gap-4">
              {currentQ.buttons.map((button) => {
                const Icon = button.icon;
                const isSelected = selectedButton === button.id;

                return (
                  <button
                    key={button.id}
                    onClick={() => handleButtonClick(button.id)}
                    className={`
                      p-6 rounded-2xl border-4 transition-all flex flex-col items-center gap-3
                      ${isSelected
                        ? 'bg-[#4A90E2] border-[#357ABD] text-white shadow-lg scale-105'
                        : 'bg-white border-[#E8F1F8] text-[#1E293B] hover:border-[#4A90E2]'
                      }
                    `}
                  >
                    <Icon size={56} strokeWidth={2} />
                    <span className="text-xl">{button.label}</span>
                  </button>
                );
              })}
            </div>
          </Card>

          <Button
            variant="primary"
            fullWidth
            onClick={handleConfirm}
            disabled={selectedButton === null}
          >
            Confirmar
          </Button>
        </>
      ) : (
        <>
          <Card className={`mb-8 ${isCorrect ? 'bg-[#E8F8F0] border-4 border-[#51C878]' : 'bg-[#FFF0F0] border-4 border-[#FF6B6B]'}`}>
            <div className="text-center">
              <h3 className="text-3xl mb-4">{isCorrect ? 'Muito bem!' : 'Ops!'}</h3>
              <p className="text-2xl text-[#6B7280] leading-relaxed">
                {isCorrect
                  ? 'Você acertou! Este é o botão correto.'
                  : `O botão correto é o de ${currentQ.buttons.find(b => b.correct)?.label}.`}
              </p>
            </div>
          </Card>

          <Card className="mb-8 bg-[#E8F1F8]">
            <div className="text-center">
              <p className="text-2xl text-[#4A90E2]">Sua pontuação</p>
              <p className="text-5xl mt-2">{score} de {questions.length}</p>
            </div>
          </Card>

          <GameResultActions
            hasNext={!isLastQuestion}
            nextLabel="Próxima pergunta"
            onNext={handleNext}
            onBackToGames={() => onNavigate('games')}
          />
        </>
      )}
    </div>
  );
}
