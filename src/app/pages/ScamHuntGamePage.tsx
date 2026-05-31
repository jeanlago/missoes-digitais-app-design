import { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { GameResultActions } from '../components/GameResultActions';
import { ShieldAlert, ShieldCheck, AlertTriangle } from 'lucide-react';

interface ScamHuntGamePageProps {
  onNavigate: (page: string) => void;
}

export function ScamHuntGamePage({ onNavigate }: ScamHuntGamePageProps) {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswer, setUserAnswer] = useState<'safe' | 'scam' | null>(null);

  const messages = [
    {
      sender: 'Banco do Brasil',
      text: 'Sua conta foi bloqueada! Clique no link para desbloquear: banco-seguro.com.br/desbloquear',
      isScam: true,
      explanation: 'Bancos nunca pedem para você clicar em links por mensagem. Sempre entre no aplicativo do banco diretamente.'
    },
    {
      sender: 'Filha Maria',
      text: 'Oi mãe! Vou chegar às 18h hoje. Beijo!',
      isScam: false,
      explanation: 'Esta é uma mensagem normal de um familiar conhecido.'
    },
    {
      sender: 'WhatsApp',
      text: 'Seu WhatsApp vai expirar! Envie este código para manter ativo: 482910',
      isScam: true,
      explanation: 'WhatsApp nunca pede códigos por mensagem. Nunca compartilhe códigos de verificação com ninguém!'
    },
    {
      sender: 'Supermercado Extra',
      text: 'Você ganhou um vale-compras de R$ 500! Clique aqui e retire agora: extra-premios.xyz',
      isScam: true,
      explanation: 'Desconfie de prêmios que você não participou. Sites com endereços estranhos (.xyz) são suspeitos.'
    },
    {
      sender: 'Dr. Carlos - Dentista',
      text: 'Bom dia! Confirmo sua consulta amanhã às 14h. Qualquer dúvida, me ligue.',
      isScam: false,
      explanation: 'Esta é uma confirmação de consulta de um profissional conhecido.'
    }
  ];

  const currentMsg = messages[currentMessage];
  const isLastMessage = currentMessage === messages.length - 1;

  const handleAnswer = (answer: 'safe' | 'scam') => {
    setUserAnswer(answer);
    const isCorrect = (answer === 'scam' && currentMsg.isScam) || (answer === 'safe' && !currentMsg.isScam);
    if (isCorrect) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    setShowResult(false);
    setUserAnswer(null);
    if (isLastMessage) {
      onNavigate('games');
    } else {
      setCurrentMessage(currentMessage + 1);
    }
  };

  const isCorrect = (userAnswer === 'scam' && currentMsg.isScam) || (userAnswer === 'safe' && !currentMsg.isScam);

  return (
    <div className="p-6 pt-24 pb-36 max-w-[600px] mx-auto">
      <div className="mb-8">
        <div className="inline-block bg-[#FF9F40] text-white px-6 py-3 rounded-full mb-4 text-xl">
          Caça ao golpe
        </div>
        <div className="text-2xl text-[#6B7280] mb-4">Mensagem {currentMessage + 1} de {messages.length}</div>
        <div className="bg-[#E8F1F8] h-3 rounded-full overflow-hidden">
          <div
            className="bg-[#FF9F40] h-full transition-all duration-300"
            style={{ width: `${((currentMessage + 1) / messages.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {!showResult ? (
        <>
          <Card className="mb-8">
            <div className="mb-4">
              <div className="inline-block bg-[#F0F7FF] text-[#4A90E2] px-4 py-2 rounded-full text-lg mb-3">
                {currentMsg.sender}
              </div>
            </div>
            <div className="bg-[#F8FAFB] p-6 rounded-2xl mb-6">
              <p className="text-2xl leading-relaxed">{currentMsg.text}</p>
            </div>
            <h3 className="text-2xl mb-4 text-center">Esta mensagem é segura ou golpe?</h3>
          </Card>

          <div className="space-y-4">
            <Button
              variant="success"
              fullWidth
              icon={<ShieldCheck />}
              onClick={() => handleAnswer('safe')}
              size="large"
            >
              É segura
            </Button>

            <Button
              variant="emergency"
              fullWidth
              icon={<ShieldAlert />}
              onClick={() => handleAnswer('scam')}
              size="large"
            >
              É golpe
            </Button>
          </div>
        </>
      ) : (
        <>
          <Card className={`mb-8 ${isCorrect ? 'bg-[#E8F8F0] border-4 border-[#51C878]' : 'bg-[#FFF0F0] border-4 border-[#FF6B6B]'}`}>
            <div className="text-center">
              {isCorrect ? (
                <ShieldCheck size={80} className="mx-auto mb-4 text-[#51C878]" strokeWidth={2} />
              ) : (
                <AlertTriangle size={80} className="mx-auto mb-4 text-[#FF6B6B]" strokeWidth={2} />
              )}
              <h3 className="text-3xl mb-4">{isCorrect ? 'Muito bem!' : 'Atenção!'}</h3>
              <p className="text-2xl text-[#6B7280] leading-relaxed mb-4">
                {isCorrect
                  ? 'Você identificou corretamente!'
                  : `Esta mensagem ${currentMsg.isScam ? 'é um golpe' : 'é segura'}.`}
              </p>
            </div>
          </Card>

          <Card className="mb-8 bg-[#FFF9E6] border-2 border-[#FFD700]">
            <div className="flex gap-4">
              <div className="text-4xl shrink-0">💡</div>
              <div>
                <h4 className="text-xl mb-2 text-[#8B7500]">Dica importante:</h4>
                <p className="text-xl text-[#6B7280] leading-relaxed">
                  {currentMsg.explanation}
                </p>
              </div>
            </div>
          </Card>

          <Card className="mb-8 bg-[#E8F1F8]">
            <div className="text-center">
              <p className="text-2xl text-[#4A90E2]">Sua pontuação</p>
              <p className="text-5xl mt-2">{score} de {messages.length}</p>
            </div>
          </Card>

          <GameResultActions
            hasNext={!isLastMessage}
            nextLabel="Próxima mensagem"
            onNext={handleNext}
            onBackToGames={() => onNavigate('games')}
          />
        </>
      )}
    </div>
  );
}
