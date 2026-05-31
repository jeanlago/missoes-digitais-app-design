import { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Phone, MessageSquare, Share2, User } from 'lucide-react';

interface HelpPageProps {
  onNavigate: (page: string) => void;
}

export function HelpPage({ onNavigate }: HelpPageProps) {
  const [selectedContact, setSelectedContact] = useState<string | null>(null);

  const contacts = [
    {
      id: 'daughter',
      name: 'Filha - Maria',
      status: 'online'
    },
    {
      id: 'son',
      name: 'Filho - Pedro',
      status: 'online'
    },
    {
      id: 'grandson',
      name: 'Neto - João',
      status: 'offline'
    }
  ];

  return (
    <div className="p-6 pt-24 pb-36 max-w-[600px] mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl mb-3">Pedir ajuda</h1>
        <p className="text-2xl text-[#6B7280]">Escolha quem pode te ajudar</p>
      </div>

      <div className="space-y-6 mb-8">
        {contacts.map((contact) => (
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
                <h3 className="text-2xl mb-1">{contact.name}</h3>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${contact.status === 'online' ? 'bg-[#51C878]' : 'bg-[#CBD5E1]'}`}></div>
                  <span className="text-xl text-[#6B7280]">{contact.status === 'online' ? 'Disponível' : 'Indisponível'}</span>
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

      {selectedContact && (
        <div className="space-y-4">
          <Button
            variant="success"
            fullWidth
            icon={<Phone />}
          >
            Ligar agora
          </Button>

          <Button
            variant="primary"
            fullWidth
            icon={<MessageSquare />}
          >
            Mandar mensagem
          </Button>

          <Button
            variant="secondary"
            fullWidth
            icon={<Share2 />}
          >
            Compartilhar dúvida
          </Button>

          <Button
            variant="secondary"
            fullWidth
            onClick={() => setSelectedContact(null)}
          >
            Cancelar
          </Button>
        </div>
      )}
    </div>
  );
}
