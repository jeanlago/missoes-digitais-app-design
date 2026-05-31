# Missões Digitais

Aplicativo para ajudar pessoas a aprender tarefas do celular com missões, tutoriais em vídeo, jogos e manual de consulta.

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
