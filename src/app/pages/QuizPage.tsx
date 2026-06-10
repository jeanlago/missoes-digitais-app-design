import { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { GameResultActions } from '../components/GameResultActions';

interface QuizPageProps {
  onNavigate: (page: string) => void;
}

export function QuizPage({ onNavigate }: QuizPageProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const question = {
    text: 'Se alguém pedir sua senha pelo WhatsApp, o que você deve fazer?',
    options: [
      'Enviar a senha',
      'Clicar no link',
      'Pedir ajuda antes de responder',
      'Ignorar e continuar'
    ],
    correctAnswer: 2
  };

  const handleSelectAnswer = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleConfirm = () => {
    if (selectedAnswer === null) return;
    setShowResult(true);
  };

  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="p-6 pt-24 pb-36 max-w-[600px] mx-auto">
      <div className="mb-8">
        <div className="inline-block bg-[#4A90E2] text-white px-6 py-3 rounded-full mb-4 text-xl">
          Quiz de segurança
        </div>
        <div className="text-2xl text-[#6B7280] mb-4">Pergunta 1 de 1</div>
        <div className="bg-[#E8F1F8] h-3 rounded-full overflow-hidden">
          <div className="bg-[#4A90E2] h-full" style={{ width: '100%' }}></div>
        </div>
      </div>

      <Card className="mb-8 bg-gradient-to-br from-[#F0F7FF] to-white">
        <h2 className="text-3xl text-center leading-relaxed">{question.text}</h2>
      </Card>

      {!showResult ? (
        <>
          <div className="space-y-4 mb-8">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                className={`
                  w-full p-6 rounded-2xl text-2xl text-left transition-all border-4
                  ${selectedAnswer === index
                    ? 'bg-[#4A90E2] text-white border-[#357ABD] shadow-lg'
                    : 'bg-white text-[#1E293B] border-[#E8F1F8] hover:border-[#4A90E2]'
                  }
                `}
              >
                <div className="flex items-center gap-4">
                  <div className={`
                    w-10 h-10 rounded-full border-4 flex items-center justify-center shrink-0
                    ${selectedAnswer === index ? 'border-white bg-white text-[#4A90E2]' : 'border-[#CBD5E1]'}
                  `}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>

          <Button
            variant="primary"
            fullWidth
            onClick={handleConfirm}
            size="large"
            disabled={selectedAnswer === null}
          >
            Confirmar resposta
          </Button>

          {selectedAnswer === null && (
            <p className="text-xl text-[#6B7280] text-center mt-4">
              Escolha uma resposta para continuar.
            </p>
          )}
        </>
      ) : (
        <>
          <Card className={`mb-8 ${isCorrect ? 'bg-[#E8F8F0] border-4 border-[#51C878]' : 'bg-[#FFF0F0] border-4 border-[#FF6B6B]'}`}>
            <div className="text-center">
              <h3 className="text-3xl mb-4">{isCorrect ? 'Parabéns!' : 'Quase lá!'}</h3>
              <p className="text-2xl text-[#6B7280] leading-relaxed">
                {isCorrect
                  ? 'Você acertou! Nunca compartilhe sua senha com ninguém.'
                  : 'A resposta correta é: "Pedir ajuda antes de responder". Nunca compartilhe senhas!'}
              </p>
            </div>
          </Card>

          <GameResultActions
            hasNext={false}
            nextLabel="Próxima pergunta"
            onNext={() => {}}
            onBackToGames={() => onNavigate('games')}
          />
        </>
      )}
    </div>
  );
}
