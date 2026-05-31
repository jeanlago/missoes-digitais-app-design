# Missões Digitais

Aplicativo para ajudar pessoas a aprender tarefas do celular com missões, tutoriais em vídeo, jogos e manual de consulta.

## Prompt inicial (Figma)

Prompt utilizado para criar o design base do aplicativo no Figma:

---

Crie um design base para um aplicativo mobile chamado “Missões Digitais”, voltado para pessoas idosas que têm dificuldade, insegurança ou medo de errar ao usar o celular.

O aplicativo deve ser inspirado em modelos de aprendizado gamificado, como Duolingo, mas adaptado para idosos. O objetivo é ensinar tarefas simples do celular por meio de missões diárias, jogos, vídeos explicativos e suporte familiar.

**Público-alvo:**  
Pessoas idosas, principalmente acima de 65 anos, que usam o celular para WhatsApp, ligações, vídeos, receitas e redes sociais, mas sentem dificuldade em tarefas como salvar contatos, mandar mensagens longas, identificar golpes, usar banco, mexer em configurações ou voltar para a tela inicial quando se perdem.

**Estilo visual:**
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

**Telas:**

1. **Tela inicial / Home** — Saudação “Olá, Dona Helena!”, progresso “3 de 18 missões concluídas”, card “Tarefa do dia”, botão “Iniciar tarefa”, acesso a Missões, Jogos, Manual, Pedir ajuda, e botão “Estou perdida”.

2. **Tela de tarefa diária** — Ex.: “Aprender a mandar mensagem no WhatsApp”. Título, explicação simples, etapas em cards, botões “Começar”, “Pedir ajuda” e “Voltar ao início”.

3. **Tela de passo a passo** — Uma instrução por vez (ex.: “Passo 1 de 4 — Toque no aplicativo WhatsApp”). Ilustração/ícone grande, instrução curta, “Próximo”, “Voltar” e botão fixo “Estou perdida”.

4. **Tela de conclusão** — “Muito bem! Você concluiu a tarefa de hoje.”, recompensa visual (medalha/estrela), botões “Próxima tarefa”, “Voltar ao início” e “Repetir tarefa”.

5. **Tela de jogos** — Quiz de segurança, Jogo da memória, Onde eu clico?, Complete o passo a passo, Caça ao golpe. Cards grandes com ícone, nome e descrição.

6. **Tela de Quiz** — Pergunta simples com opções grandes e feedback claro (ex.: “Se alguém pedir sua senha pelo WhatsApp, o que você deve fazer?”).

7. **Tela de jogo da memória** — Cartas grandes com ícones: WhatsApp, Telefone, Câmera, Cadeado, Configurações, Carrinho de compra.

8. **Tela de Manual** — Videoaulas por categoria: ligar, mandar áudio, salvar contato, enviar foto, identificar golpe, voltar à tela inicial, pedir ajuda. Cards com ícone, título e “Assistir”.

9. **Tela de pedir ajuda** — Escolher pessoa de confiança (Filha, Neto, Cuidador, Tutor verificado). Botões “Ligar agora”, “Mandar mensagem”, “Compartilhar dúvida”, “Cancelar”.

10. **Tela “Estou perdida”** — “Tudo bem, vamos te ajudar.” Botões “Voltar ao início”, “Chamar minha filha”, “Explicar esta tela”, “Cancelar ação”. Visual calmo e acolhedor.

**Componentes importantes:**
- Barra inferior: Início, Missões, Jogos, Manual
- Botão flutuante ou sempre visível: “Ajuda”
- Cards grandes, ícones grandes, feedback visual claro
- Progresso por missões e recompensas respeitosas, sem infantilizar

Textos em português do Brasil, linguagem simples, direta e acolhedora. Protótipo realista mobile vertical (Android/iOS).

---

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
