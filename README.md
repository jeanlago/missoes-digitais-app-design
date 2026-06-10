# Missões Digitais

Aplicativo educativo para ensinar pessoas idosas tarefas do celular através de **missões gamificadas**, tutoriais em vídeo, jogos interativos e manual de consulta. A interface foi projetada pensando em acessibilidade, com botões grandes, textos legíveis e um design acolhedor.

## Sobre o Projeto

O **Missões Digitais** é um aplicativo inspirado em plataformas de aprendizado como Duolingo, mas adaptado especificamente para idosos (65+) que desejam aprender a usar melhor seus smartphones Android/iOS.

### Funcionalidades Principais

- **Missões Diárias**: Tarefas simples e progressivas
- **Jogos Educativos**: Quiz, memória, identificação de golpes, "Onde eu clico"
- **Tutoriais em Vídeo**: Guias passo a passo para atividades comuns
- **Manual de Consulta**: Referência rápida e organizada
- **Suporte Familiar**: Conexão com contatos confiáveis para pedir ajuda

## Stack Tecnológico

- **React 18** com TypeScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização utilitária
- **shadcn/ui** - Componentes de interface reutilizáveis
- **pnpm** - Gerenciador de pacotes

## Estrutura do Projeto

```
├── src/
│   ├── app/
│   │   ├── components/          # Componentes reutilizáveis
│   │   │   ├── figma/          # Componentes customizados
│   │   │   └── ui/             # Componentes shadcn/ui
│   │   ├── pages/              # Páginas do aplicativo
│   │   └── App.tsx             # Componente raiz
│   ├── data/                    # Dados estáticos (contatos, tutoriais)
│   ├── styles/                  # Estilos globais e tema
│   ├── utils/                   # Funções auxiliares e helpers
│   └── main.tsx
├── public/
│   └── videos/                  # Vídeos dos tutoriais
├── vite.config.ts
├── tailwind.config.ts
└── package.json
```

## Como Rodar Localmente

### Pré-requisitos
- Node.js (v18+)
- pnpm (recomendado) ou npm

### Instalação e Execução

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm run dev
```

O app estará disponível em `http://localhost:5173`

## Build para Produção

```bash
# Build padrão
pnpm run build

# Build simulando GitHub Pages (com base URL)
VITE_BASE_URL=/missoes-digitais-app-design/ pnpm run build
```

Os arquivos compilados estarão na pasta `dist/`

## Deploy no GitHub Pages

O deploy é **automático** via GitHub Actions quando há push na branch `main`.

### URL de Produção
```
https://jeanlago.github.io/missoes-digitais-app-design/
```

### Configuração (já realizada)
- GitHub Settings → Pages
- Build and deployment: GitHub Actions

## Páginas Disponíveis

- **Home** - Tela inicial com saudação e tarefa do dia
- **Daily Task** - Detalhes da tarefa diária
- **Task Steps** - Passo a passo da execução
- **Task Complete** - Tela de conclusão com recompensas
- **Missions** - Lista de todas as missões
- **Games** - Hub de jogos educativos
- **Manual** - Tutoriais e referências
- **Help** - Pedir ajuda aos contatos confiáveis
- **Tutorial** - Onboarding inicial

### Jogos Disponíveis
- Quiz de Segurança
- Jogo da Memória
- Caça ao Golpe (ScamHunt)
- Onde Eu Clico
- Complete o Passo a Passo

## Design & UX

- **Interface Simples**: Poucos elementos por tela
- **Tipografia Grande**: Letras legíveis para idosos
- **Alto Contraste**: Cores que facilitam a leitura
- **Navegação Clara**: Barra inferior com 4 seções principais
- **Feedback Visual**: Confirmações visuais de ações
- **Botão de Emergência**: "Estou perdida" sempre acessível

## Licença

Consulte [ATTRIBUTIONS.md](ATTRIBUTIONS.md) para mais informações sobre dependências e atribuições.

## Desenvolvimento

Para adicionar novas funcionalidades:

1. Crie novos componentes em `src/app/components/`
2. Crie novas páginas em `src/app/pages/`
3. Adicione dados em `src/data/` conforme necessário
4. Atualize rotas em `src/app/App.tsx`

## Contato & Suporte

Este é um projeto de prototipagem e design. Para questões sobre o desenvolvimento, consulte o repositório.

---

**Última atualização**: Junho 2026
