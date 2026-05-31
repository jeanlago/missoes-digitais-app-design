import { MessageSquare, Image, Video, UserPlus, LucideIcon } from 'lucide-react';

export type TutorialId = 'mensagem' | 'imagem' | 'video' | 'contato';

export interface Tutorial {
  id: TutorialId;
  title: string;
  description: string;
  videoSrc?: string;
  category: string;
  steps: string[];
  taskSteps: { title: string; description: string }[];
  medalTitle: string;
  icon: LucideIcon;
  color: string;
  bg: string;
}

export const tutorials: Tutorial[] = [
  {
    id: 'contato',
    title: 'Salvar um contato',
    description:
      'Aprenda a guardar o nome e o telefone de alguém no celular para ligar ou mandar mensagem depois com facilidade.',
    videoSrc: '/videos/salvar-contato.mp4',
    category: 'Contatos',
    steps: [
      'Abrir o aplicativo Contatos ou Telefone',
      'Toque em Novo contato ou no botão +',
      'Escreva o nome da pessoa',
      'Digite o número de telefone',
      'Toque em Salvar',
    ],
    taskSteps: [
      {
        title: 'Abra o aplicativo Contatos ou Telefone',
        description:
          'Procure o ícone de telefone ou de uma pessoa na tela inicial do celular',
      },
      {
        title: 'Toque em Novo contato',
        description: 'Procure o botão + ou a opção "Novo contato" ou "Adicionar contato"',
      },
      {
        title: 'Escreva o nome da pessoa',
        description: 'Toque no campo Nome e digite como você quer guardar essa pessoa',
      },
      {
        title: 'Digite o número de telefone',
        description: 'Toque no campo Telefone e escreva o número com DDD, por exemplo: 11 98765-4321',
      },
      {
        title: 'Toque em Salvar',
        description: 'Procure o botão Salvar ou o ícone de + no canto superior',
      },
    ],
    medalTitle: 'Primeiro contato salvo',
    icon: UserPlus,
    color: 'text-[#7C3AED]',
    bg: 'bg-[#F3E8FF]',
  },
  {
    id: 'mensagem',
    title: 'Mandar mensagem no WhatsApp',
    description:
      'Aprenda a abrir o WhatsApp, escolher um contato, escrever e enviar uma mensagem de texto.',
    videoSrc: '/videos/whatsapp-mensagem.mp4',
    category: 'WhatsApp',
    steps: [
      'Abrir o WhatsApp',
      'Escolher um contato',
      'Escrever a mensagem',
      'Enviar a mensagem',
    ],
    taskSteps: [
      {
        title: 'Toque no aplicativo WhatsApp',
        description: 'Procure o ícone verde com um telefone branco na sua tela inicial',
      },
      {
        title: 'Escolha um contato',
        description: 'Toque em uma conversa existente ou no botão de mensagem nova',
      },
      {
        title: 'Escreva sua mensagem',
        description: 'Toque na caixa branca na parte de baixo e comece a digitar',
      },
      {
        title: 'Envie a mensagem',
        description: 'Toque no botão verde com a setinha para enviar',
      },
    ],
    medalTitle: 'Primeira mensagem no WhatsApp',
    icon: MessageSquare,
    color: 'text-[#4A90E2]',
    bg: 'bg-[#E8F1F8]',
  },
  {
    id: 'imagem',
    title: 'Enviar uma imagem',
    description:
      'Veja como escolher uma foto da galeria e enviar para alguém no WhatsApp.',
    videoSrc: '/videos/whatsapp-imagem.mp4',
    category: 'WhatsApp',
    steps: [
      'Abrir uma conversa no WhatsApp',
      'Toque no ícone de anexo (clipe)',
      'Escolha Galeria ou Fotos',
      'Selecione a imagem e envie',
    ],
    taskSteps: [
      {
        title: 'Abra uma conversa no WhatsApp',
        description: 'Toque no WhatsApp e escolha a pessoa para quem você quer enviar a foto',
      },
      {
        title: 'Toque no ícone de anexo',
        description: 'Procure o ícone de clipe ou "+" ao lado da caixa de mensagem',
      },
      {
        title: 'Escolha Galeria ou Fotos',
        description: 'Toque em Galeria para ver as fotos salvas no seu celular',
      },
      {
        title: 'Selecione a imagem e envie',
        description: 'Toque na foto desejada e depois no botão de enviar',
      },
    ],
    medalTitle: 'Primeira imagem enviada no WhatsApp',
    icon: Image,
    color: 'text-[#FF9F40]',
    bg: 'bg-[#FFF4E6]',
  },
  {
    id: 'video',
    title: 'Enviar um vídeo',
    description:
      'Aprenda a selecionar um vídeo do celular e enviar para um contato no WhatsApp.',
    videoSrc: '/videos/whatsapp-video.mp4',
    category: 'WhatsApp',
    steps: [
      'Abrir uma conversa no WhatsApp',
      'Toque no ícone de anexo (clipe)',
      'Escolha Galeria ou Vídeos',
      'Selecione o vídeo e envie',
    ],
    taskSteps: [
      {
        title: 'Abra uma conversa no WhatsApp',
        description: 'Toque no WhatsApp e escolha a pessoa para quem você quer enviar o vídeo',
      },
      {
        title: 'Toque no ícone de anexo',
        description: 'Procure o ícone de clipe ou "+" ao lado da caixa de mensagem',
      },
      {
        title: 'Escolha Galeria ou Vídeos',
        description: 'Toque em Galeria para ver os vídeos salvos no seu celular',
      },
      {
        title: 'Selecione o vídeo e envie',
        description: 'Toque no vídeo desejado e depois no botão de enviar',
      },
    ],
    medalTitle: 'Primeiro vídeo enviado no WhatsApp',
    icon: Video,
    color: 'text-[#51C878]',
    bg: 'bg-[#E8F8F0]',
  },
];

export const CURRENT_MISSION_ID: TutorialId = 'imagem';

export function getTutorialById(id: string): Tutorial | undefined {
  return tutorials.find((tutorial) => tutorial.id === id);
}

export function getTutorialPageId(id: TutorialId): string {
  return `tutorial-${id}`;
}

export function parseTutorialPageId(page: string): TutorialId | null {
  if (!page.startsWith('tutorial-')) return null;
  const id = page.replace('tutorial-', '') as TutorialId;
  return getTutorialById(id) ? id : null;
}
