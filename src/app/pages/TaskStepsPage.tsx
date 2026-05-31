import { useState } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getTutorialById, TutorialId } from '../../data/tutorials';

interface TaskStepsPageProps {
  tutorialId: TutorialId;
  onNavigate: (page: string, from?: string) => void;
}

export function TaskStepsPage({ tutorialId, onNavigate }: TaskStepsPageProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const tutorial = getTutorialById(tutorialId);

  if (!tutorial) {
    return null;
  }

  const steps = tutorial.taskSteps;
  const step = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      onNavigate('task-complete');
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      onNavigate('daily-task');
    }
  };

  return (
    <div className="p-6 pt-24 pb-36 max-w-[600px] mx-auto flex flex-col min-h-screen">
      <div className="mb-8">
        <div className="text-2xl text-[#6B7280] mb-4">
          Passo {currentStep + 1} de {steps.length}
        </div>
        <div className="bg-[#E8F1F8] h-3 rounded-full overflow-hidden">
          <div
            className="bg-[#4A90E2] h-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center mb-8">
        <Card className="text-center bg-gradient-to-br from-[#F0F7FF] to-white">
          <h1 className="text-4xl mb-6 text-[#1E293B]">{step.title}</h1>
          <p className="text-2xl text-[#6B7280] leading-relaxed">{step.description}</p>
        </Card>
      </div>

      <div className="space-y-4">
        <Button variant="primary" fullWidth icon={<ArrowRight />} onClick={handleNext}>
          {isLastStep ? 'Concluir' : 'Próximo'}
        </Button>

        <Button variant="secondary" fullWidth icon={<ArrowLeft />} onClick={handleBack}>
          Voltar
        </Button>
      </div>
    </div>
  );
}
