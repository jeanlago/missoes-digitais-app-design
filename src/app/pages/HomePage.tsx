import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Target, Gamepad2 } from "lucide-react";
import { CURRENT_MISSION_ID, getTutorialById, TutorialId } from "../../data/tutorials";

interface HomePageProps {
  onNavigate: (page: string, from?: string, tutorialId?: TutorialId) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const currentMission = getTutorialById(CURRENT_MISSION_ID);

  return (
    <div className="p-6 pt-2 pb-36 max-w-[600px] mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl mb-4">Olá, Helena!</h1>
        <div className="bg-[#E8F1F8] rounded-2xl p-5">
          <p className="text-2xl text-[#4A90E2]">3 de 6 missões concluídas</p>
          <div className="bg-[#4A90E2] h-4 rounded-full mt-3 overflow-hidden">
            <div
              className="bg-[#51C878] h-full transition-all duration-500"
              style={{ width: "50%" }}
            ></div>
          </div>
        </div>
      </div>

      <Card className="mb-6 bg-gradient-to-br from-[#4A90E2] to-[#357ABD] text-white">
        <div className="mb-4">
          <span className="text-xl opacity-90">Tarefa do dia</span>
          <h2 className="text-3xl mt-2">{currentMission?.title}</h2>
        </div>
        <Button
          variant="success"
          fullWidth
          onClick={() => onNavigate("daily-task", "home", CURRENT_MISSION_ID)}
        >
          Iniciar missão
        </Button>
      </Card>

      <div className="mb-8">
        <h3 className="text-2xl mb-6">O que você quer fazer?</h3>
        <div className="space-y-6">
          <Card onClick={() => onNavigate("missions")} className="text-center py-8">
            <Target size={64} className="mx-auto mb-4 text-[#4A90E2]" strokeWidth={2} />
            <p className="text-2xl">Ver minhas missões</p>
          </Card>
          <Card onClick={() => onNavigate("games")} className="text-center py-8">
            <Gamepad2 size={64} className="mx-auto mb-4 text-[#51C878]" strokeWidth={2} />
            <p className="text-2xl">Jogar um jogo</p>
          </Card>
        </div>
      </div>

      <Button variant="emergency" fullWidth onClick={() => onNavigate("lost")}>
        Estou perdida
      </Button>
    </div>
  );
}
