import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Home, Phone } from 'lucide-react';

interface LostPageProps {
  onNavigate: (page: string) => void;
  onExplain: () => void;
}

export function LostPage({ onNavigate, onExplain }: LostPageProps) {
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
            variant="success"
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
            onClick={() => onNavigate('help')}
            size="large"
          >
            Chamar ajuda
          </Button>
        </div>
      </div>
    </div>
  );
}
