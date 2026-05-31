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
2. Em **Build and deployment**, escolha **GitHub Actions**
3. Após o workflow concluir, o app ficará em:

`https://SEU-USUARIO.github.io/missoes-digitais/`

## Build manual

```bash
npm run build
```

Para simular o caminho do GitHub Pages localmente:

```bash
VITE_BASE_URL=/missoes-digitais/ npm run build
```
