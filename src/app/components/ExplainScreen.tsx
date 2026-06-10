import { Card } from './Card';
import { Button } from './Button';
import { Info } from 'lucide-react';

interface ExplainScreenProps {
  currentPage: string;
  onClose: () => void;
}

export function ExplainScreen({ currentPage, onClose }: ExplainScreenProps) {
  const explanations: { [key: string]: { title: string; text: string } } = {
    home: {
      title: 'Tela Inicial',
      text: 'Esta é a tela inicial. Aqui você pode ver seu progresso, iniciar a tarefa do dia, acessar suas missões ou jogar atividades de treino.'
    },
    missions: {
      title: 'Tela de Missões',
      text: 'Aqui ficam as atividades para aprender tarefas do celular. Complete cada missão para desbloquear a próxima e aprender mais.'
    },
    games: {
      title: 'Tela de Jogos',
      text: 'Aqui ficam jogos para treinar memória, segurança e uso do celular. Você pode jogar quando quiser para praticar o que aprendeu.'
    },
    manual: {
      title: 'Manual',
      text: 'Aqui ficam vídeos e tutoriais explicativos. Você pode assistir sempre que tiver dúvida sobre como fazer algo no celular.'
    },
    help: {
      title: 'Chamar uma pessoa',
      text: 'Aqui você pode chamar uma pessoa de confiança para te ajudar. Escolha quem você quer contatar e clique para ligar ou mandar mensagem.'
    },
    lost: {
      title: 'Não sei o que fazer',
      text: 'Esta tela te ajuda quando você não sabe o que fazer. Escolha voltar ao início, chamar uma pessoa ou entender a tela onde você estava.'
    },
    'daily-task': {
      title: 'Tarefa do Dia',
      text: 'Esta é a tarefa do dia. Siga os passos mostrados na tela para aprender uma nova habilidade no celular. Você pode pedir ajuda a qualquer momento.'
    },
    'task-steps': {
      title: 'Passo a Passo',
      text: 'Aqui você aprende fazendo. Siga cada passo com calma. Use os botões "Próximo" e "Voltar" para avançar ou revisar.'
    },
    'task-complete': {
      title: 'Parabéns',
      text: 'Você completou a tarefa! Aqui você vê o que conquistou e pode escolher repetir a tarefa ou voltar para a lista de missões.'
    },
    quiz: {
      title: 'Quiz',
      text: 'Este é um jogo de perguntas e respostas para testar o que você aprendeu. Escolha a resposta, confirme e use "Voltar aos jogos" para sair quando quiser.'
    },
    'memory-game': {
      title: 'Jogo da Memória',
      text: 'Encontre os pares de ícones iguais. Toque nos cards para virar e memorize onde cada ícone está. Use "Voltar aos jogos" para sair a qualquer momento.'
    },
    click: {
      title: 'Onde eu clico?',
      text: 'Teste se você sabe onde clicar para fazer diferentes ações no celular. Escolha o botão correto para cada pergunta. Depois de responder, avance ou toque em "Voltar aos jogos".'
    },
    steps: {
      title: 'Complete o passo a passo',
      text: 'Organize os passos na ordem correta para completar uma tarefa. Use as setas para mover os passos. Depois de verificar, avance ou toque em "Voltar aos jogos".'
    },
    scam: {
      title: 'Caça ao golpe',
      text: 'Aprenda a identificar mensagens de golpe. Analise cada mensagem e decida se é segura ou se é um golpe. Depois de responder, avance ou toque em "Voltar aos jogos".'
    },
    'tutorial-contato': {
      title: 'Tutorial: Salvar contato',
      text: 'Aprenda a guardar o nome e o telefone de alguém no celular. Siga o passo a passo e toque em Começar para praticar.',
    },
    'tutorial-mensagem': {
      title: 'Tutorial: Mensagem no WhatsApp',
      text: 'Assista ao vídeo e siga o passo a passo para aprender a mandar uma mensagem de texto no WhatsApp.'
    },
    'tutorial-imagem': {
      title: 'Tutorial: Enviar imagem',
      text: 'Assista ao vídeo e siga o passo a passo para aprender a enviar uma foto ou imagem no WhatsApp.'
    },
    'tutorial-video': {
      title: 'Tutorial: Enviar vídeo',
      text: 'Assista ao vídeo e siga o passo a passo para aprender a enviar um vídeo no WhatsApp.'
    }
  };

  const explanation = explanations[currentPage] || explanations.home;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6">
      <div className="max-w-[600px] w-full">
        <Card className="bg-white">
          <div className="text-center mb-6">
            <div className="bg-[#E8F1F8] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Info size={48} className="text-[#4A90E2]" strokeWidth={2} />
            </div>
            <h2 className="text-3xl mb-4 text-[#1E293B]">{explanation.title}</h2>
            <p className="text-2xl text-[#6B7280] leading-relaxed">
              {explanation.text}
            </p>
          </div>
          <Button
            variant="primary"
            fullWidth
            onClick={onClose}
            size="large"
          >
            Entendi
          </Button>
        </Card>
      </div>
    </div>
  );
}
