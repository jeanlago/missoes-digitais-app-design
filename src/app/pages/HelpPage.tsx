import { useEffect, useRef, useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { AlertTriangle, CheckCircle2, Phone, MessageSquare, Share2, User } from 'lucide-react';
import { trustedContacts, getContactLabel } from '../../data/trustedContacts';
import { callContact, messageContact, shareDoubt } from '../../utils/helpActions';

interface HelpPageProps {
  onNavigate: (page: string) => void;
  onBack: () => void;
}

export function HelpPage({ onNavigate, onBack }: HelpPageProps) {
  const [selectedContact, setSelectedContact] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isSharing, setIsSharing] = useState(false);
  const feedbackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!feedback) return;

    requestAnimationFrame(() => {
      feedbackRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }, [feedback]);

  const showFeedback = (type: 'success' | 'error', message: string) => {
    setFeedback({ type, message });
  };

  const handleCall = () => {
    if (!selectedContact) return;
    const result = callContact(selectedContact);
    showFeedback(result.ok ? 'success' : 'error', result.message);
  };

  const handleMessage = () => {
    if (!selectedContact) return;
    const result = messageContact(selectedContact);
    showFeedback(result.ok ? 'success' : 'error', result.message);
  };

  const handleShare = async () => {
    if (!selectedContact || isSharing) return;
    setIsSharing(true);
    const result = await shareDoubt(selectedContact);
    showFeedback(result.ok ? 'success' : 'error', result.message);
    setIsSharing(false);
  };

  return (
    <div className="p-6 pt-24 pb-36 max-w-[600px] mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl mb-3">Chamar uma pessoa</h1>
        <p className="text-2xl text-[#6B7280]">Escolha um contato de confiança</p>
      </div>

      {feedback && (
        <div ref={feedbackRef}>
          <Card
            className={`mb-6 ${
              feedback.type === 'success'
                ? 'bg-[#E8F8F0] border-4 border-[#51C878]'
                : 'bg-[#FFF0F0] border-4 border-[#FF6B6B]'
            }`}
          >
            <div className="flex items-start gap-4">
              {feedback.type === 'success' ? (
                <CheckCircle2 size={48} className="text-[#51C878] shrink-0" strokeWidth={2.5} />
              ) : (
                <AlertTriangle size={48} className="text-[#FF6B6B] shrink-0" strokeWidth={2.5} />
              )}
              <div className="flex-1">
                <h2 className="text-2xl mb-2">
                  {feedback.type === 'success' ? 'Ação registrada' : 'Atenção'}
                </h2>
                <p className="text-xl leading-relaxed mb-4">{feedback.message}</p>
                <Button
                  variant={feedback.type === 'success' ? 'success' : 'emergency'}
                  size="medium"
                  onClick={() => setFeedback(null)}
                >
                  Entendi
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      <div className="space-y-6 mb-8">
        {trustedContacts.map((contact) => (
          <Card
            key={contact.id}
            onClick={() => setSelectedContact(contact.id)}
            className={`
              ${selectedContact === contact.id ? 'border-4 border-[#4A90E2] bg-[#F0F7FF]' : ''}
            `}
          >
            <div className="flex items-center gap-4">
              <div className="bg-[#E8F1F8] p-4 rounded-full">
                <User size={40} className="text-[#4A90E2]" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl mb-1">{getContactLabel(contact)}</h3>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      contact.status === 'online' ? 'bg-[#51C878]' : 'bg-[#CBD5E1]'
                    }`}
                  />
                  <span className="text-xl text-[#6B7280]">
                    {contact.status === 'online' ? 'Disponível' : 'Indisponível'}
                  </span>
                </div>
              </div>
              {selectedContact === contact.id && (
                <div className="text-[#4A90E2]">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {selectedContact ? (
        <div className="space-y-4">
          <Button variant="primary" fullWidth icon={<Phone />} onClick={handleCall}>
            Ligar agora
          </Button>

          <Button variant="primary" fullWidth icon={<MessageSquare />} onClick={handleMessage}>
            Mandar mensagem
          </Button>

          <Button
            variant="secondary"
            fullWidth
            icon={<Share2 />}
            onClick={handleShare}
          >
            {isSharing ? 'Compartilhando...' : 'Compartilhar dúvida'}
          </Button>
        </div>
      ) : (
        <Card className="bg-[#F8FAFB] mb-4">
          <p className="text-xl text-[#6B7280] text-center leading-relaxed">
            Toque em uma pessoa acima para ver as opções de ligação e mensagem.
          </p>
        </Card>
      )}

      <Button variant="secondary" fullWidth onClick={onBack}>
        Voltar
      </Button>
    </div>
  );
}
