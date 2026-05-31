import { Button } from './Button';

interface GameResultActionsProps {
  hasNext: boolean;
  nextLabel: string;
  onNext: () => void;
  onBackToGames: () => void;
}

export function GameResultActions({
  hasNext,
  nextLabel,
  onNext,
  onBackToGames,
}: GameResultActionsProps) {
  return (
    <div className="space-y-4">
      {hasNext && (
        <Button variant="primary" fullWidth onClick={onNext}>
          {nextLabel}
        </Button>
      )}
      <Button variant={hasNext ? 'secondary' : 'primary'} fullWidth onClick={onBackToGames}>
        Voltar aos jogos
      </Button>
    </div>
  );
}
