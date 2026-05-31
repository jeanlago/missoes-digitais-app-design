# Missões Digitais

Aplicativo para ajudar pessoas a aprender tarefas do celular com missões, tutoriais em vídeo, jogos e manual de consulta.

## Prompt inicial (Figma)

Prompt utilizado para criar o design base do aplicativo no Figma:

```text
Crie um design base para um aplicativo mobile chamado “Missões Digitais”, voltado para pessoas idosas que têm dificuldade, insegurança ou medo de errar ao usar o celular.

O aplicativo deve ser inspirado em modelos de aprendizado gamificado, como Duolingo, mas adaptado para idosos. O objetivo é ensinar tarefas simples do celular por meio de missões diárias, jogos, vídeos explicativos e suporte familiar.

Público-alvo:
Pessoas idosas, principalmente acima de 65 anos, que usam o celular para WhatsApp, ligações, vídeos, receitas e redes sociais, mas sentem dificuldade em tarefas como salvar contatos, mandar mensagens longas, identificar golpes, usar banco, mexer em configurações ou voltar para a tela inicial quando se perdem.

Estilo visual:
- Interface simples, limpa e acolhedora.
- Visual moderno, mas não infantilizado.
- Botões grandes e bem espaçados.
- Letras grandes e legíveis.
- Alto contraste.
- Ícones simples e fáceis de reconhecer.
- Poucos elementos por tela.
- Cores amigáveis e tranquilas, como azul, verde, branco e tons suaves.
- Evitar telas poluídas ou excesso de informações.
- Design acessível para idosos com dificuldade visual.

Crie as seguintes telas:

1. Tela inicial / Home
Deve conter:
- Saudação: “Olá, Dona Helena!”
- Indicador de progresso: “3 de 18 missões concluídas”
- Card grande de “Tarefa do dia”
- Botão principal: “Iniciar tarefa”
- Acesso rápido para:
  - Missões
  - Jogos
  - Manual
  - Pedir ajuda
- Um botão visível chamado “Estou perdida”

2. Tela de tarefa diária
Exemplo de tarefa: “Aprender a mandar mensagem no WhatsApp”
Deve conter:
- Título da tarefa
- Breve explicação em linguagem simples
- Etapas da tarefa em cards grandes
- Botão “Começar”
- Botão “Pedir ajuda”
- Botão “Voltar ao início”

3. Tela de passo a passo da tarefa
Criar uma tela onde o usuário vê uma instrução por vez.
Exemplo:
“Passo 1 de 4”
“Toque no aplicativo WhatsApp”
Deve conter:
- Ilustração ou ícone grande
- Instrução curta
- Botão “Próximo”
- Botão “Voltar”
- Botão fixo “Estou perdida”

4. Tela de conclusão da tarefa
Deve conter:
- Mensagem de sucesso: “Muito bem! Você concluiu a tarefa de hoje.”
- Recompensa visual simples, como medalha ou estrela
- Botões:
  - “Próxima tarefa”
  - “Voltar ao início”
  - “Repetir tarefa”

5. Tela de jogos
Deve listar jogos simples:
- Quiz de segurança
- Jogo da memória
- Onde eu clico?
- Complete o passo a passo
- Caça ao golpe

Cada jogo deve aparecer como um card grande, com ícone, nome e pequena descrição.

6. Tela de Quiz
Exemplo de pergunta:
“Se alguém pedir sua senha pelo WhatsApp, o que você deve fazer?”
Opções grandes:
- Enviar a senha
- Clicar no link
- Pedir ajuda antes de responder
- Ignorar e continuar
Mostrar visual de pergunta simples, com botões grandes e feedback claro.

7. Tela de jogo da memória
Criar uma tela com cartas grandes contendo ícones de celular:
- WhatsApp
- Telefone
- Câmera
- Cadeado
- Configurações
- Carrinho de compra
A interface deve parecer simples, com cartas grandes e fáceis de tocar.

8. Tela de Manual
Deve conter videoaulas e tutoriais organizados por categoria:
- Como ligar para alguém
- Como mandar áudio
- Como salvar contato
- Como enviar foto
- Como identificar golpe
- Como voltar para tela inicial
- Como pedir ajuda

Cada item deve aparecer como card com ícone, título e botão “Assistir”.

9. Tela de pedir ajuda
Deve permitir escolher uma pessoa de confiança:
- Filha
- Neto
- Cuidador
- Tutor verificado

Deve conter botões:
- “Ligar agora”
- “Mandar mensagem”
- “Compartilhar dúvida”
- “Cancelar”

10. Tela “Estou perdida”
Tela de emergência digital para quando o idoso não sabe o que fazer.
Deve conter:
- Mensagem: “Tudo bem, vamos te ajudar.”
- Botões grandes:
  - “Voltar ao início”
  - “Chamar minha filha”
  - “Explicar esta tela”
  - “Cancelar ação”
- Visual calmo e acolhedor.

Componentes importantes:
- Barra inferior de navegação com 4 itens:
  - Início
  - Missões
  - Jogos
  - Manual
- Botão flutuante ou sempre visível: “Ajuda”
- Cards grandes
- Ícones grandes
- Feedback visual claro
- Progresso por missões
- Sistema de recompensas respeitoso, sem infantilizar o idoso

Textos devem ser em português do Brasil, com linguagem simples, direta e acolhedora.

O design deve parecer um protótipo realista de aplicativo mobile, em formato vertical, para smartphone Android/iOS.
```

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Publicação (GitHub Pages)

O deploy é automático ao enviar alterações para a branch `main`.

1. No GitHub, abra **Settings → Pages**
2. Em **Build and deployment**, escolha **GitHub Actions** (não use "Deploy from a branch")
3. Vá em **Actions** e confira se o workflow **Deploy GitHub Pages** terminou com sucesso
4. O app ficará em:

`https://jeanlago.github.io/missoes-digitais-app-design/`

## Build manual

```bash
npm run build
```

Para simular o caminho do GitHub Pages localmente:

```bash
VITE_BASE_URL=/missoes-digitais/ npm run build
```
