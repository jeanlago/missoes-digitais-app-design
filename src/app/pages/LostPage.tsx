import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ArrowLeft, Home, Phone, Info } from 'lucide-react';

interface LostPageProps {
  onNavigate: (page: string, from?: string) => void;
  previousPage: string;
  onExplain: () => void;
  onCancel: () => void;
}

export function LostPage({ onNavigate, previousPage, onExplain, onCancel }: LostPageProps) {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#FFE8E8] to-[#FFF5F5] z-50 flex items-center justify-center p-6">
      <div className="max-w-[600px] w-full">
        <Card className="mb-8 text-center bg-white">
          <h1 className="text-5xl mb-6 text-[#1E293B]">Tudo bem!</h1>
          <p className="text-3xl text-[#6B7280] leading-relaxed mb-4">
            Vamos te ajudar a voltar para onde você quer.
          </p>
          <p className="text-2xl text-[#6B7280] leading-relaxed">
            Escolha uma opção abaixo:
          </p>
        </Card>

        <div className="space-y-6">
          <Button
            variant="secondary"
            fullWidth
            icon={<Home />}
            onClick={() => onNavigate('home')}
            size="large"
          >
            Voltar ao início
          </Button>

          <Button
            variant="primary"
            fullWidth
            icon={<Phone />}
            onClick={() => onNavigate('help', previousPage)}
            size="large"
          >
            Chamar uma pessoa
          </Button>

          <Button
            variant="secondary"
            fullWidth
            icon={<Info />}
            onClick={onExplain}
            size="large"
          >
            O que é esta tela?
          </Button>

          <Button
            variant="secondary"
            fullWidth
            icon={<ArrowLeft />}
            onClick={onCancel}
            size="large"
          >
            Continuar onde eu estava
          </Button>
        </div>
      </div>
    </div>
  );
}
