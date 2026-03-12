# Landing Page Psicólogos

Landing page em React para apresentar serviços de psicologia clínica (seções como hero, sobre, especialidades, como funciona, depoimentos, FAQ e contato), com botão de WhatsApp.

## Tecnologias

- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui
- Vitest (testes)

## Requisitos

- Node.js 18+
- npm (ou Bun)

## Rodando localmente

```sh
npm install
npm run dev
```

Alternativa com Bun:

```sh
bun install
bun run dev
```

## Scripts

- `npm run dev`: servidor de desenvolvimento
- `npm run build`: build de produção (gera `dist/`)
- `npm run preview`: serve o build localmente
- `npm run lint`: ESLint
- `npm run test`: Vitest (modo CI)


## Deploy

Gere o build com `npm run build` e publique a pasta `dist/` em qualquer hospedagem estática (ex.: Vercel, Netlify, GitHub Pages, S3/CloudFront).
