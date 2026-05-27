# Portal de Viagens AllTurismo

Projeto desenvolvido com Next.js com foco em otimização de performance web, acessibilidade, SEO e boas práticas modernas de front-end.

O sistema apresenta destinos turísticos utilizando uma aplicação leve, responsiva e otimizada, aplicando técnicas reais de melhoria de performance analisadas através do Lighthouse do Google Chrome.

## Tecnologias Utilizadas
Next.js 15
React
TypeScript
CSS Modules
Next/Image
Lighthouse
AVIF Images

## Objetivo da Atividade
Aplicar técnicas de otimização de performance web utilizando:

Lighthouse
Chrome DevTools
Otimização de imagens
Lazy Loading
SEO
Minificação automática
Componentização
Acessibilidade

## Estrutura do Projeto
src/
 ├── app/
 │    ├── components/
 │    ├── destinos/
 │    ├── lib/
 │    ├── styles/
 │    ├── types/
 │    ├── layout.tsx
 │    └── page.tsx

## Como Instalar o Projeto:

1. Clonar o repositório
git clone https://github.com/JacquelineTavaresDev/Portal_Viagens_Allturismo.git

2. Entrar na pasta do projeto
cd nome-do-projeto

3. Instalar as dependências
npm install
ou
yarn install

4. Rodar o projeto em ambiente de desenvolvimento
npm run dev
ou
yarn dev

5. Abrir no navegador
http://localhost:3000

### Build de Produção
Para gerar a versão otimizada de produção:
npm run build

Para executar a build:
npm run start

## Análise de Performance
A análise foi realizada utilizando:

Lighthouse (Chrome DevTools)
Aba Performance do Chrome

Também foram realizados testes simulando conexões lentas para avaliar o comportamento da aplicação em diferentes cenários de rede.

## Gargalos Identificados
Durante a análise inicial foram encontrados alguns problemas comuns de performance:

Imagens não otimizadas
Necessidade de melhorar SEO
Possíveis melhorias de acessibilidade
Carregamento excessivo de recursos visuais
Falta de otimização de renderização

## Melhorias Aplicadas
- Otimização de Imagens
Conversão das imagens para formato .avif
Utilização do componente next/image
Configuração de sizes
Lazy loading automático do Next.js

- Performance
Estrutura leve sem bibliotecas desnecessárias
Componentização da interface
CSS modularizado
Minificação automática do Next.js
Organização otimizada dos componentes
Redução de renderizações desnecessárias

- SEO
Metadata global
Metadata dinâmica nas páginas
Estrutura semântica correta
Uso apropriado de headings
URLs amigáveis

- Acessibilidade
Uso de aria-label
Contraste adequado
Navegação semântica
Focus visible em links e botões
Textos alternativos em imagens

## Observação sobre “Práticas Recomendadas”
A pontuação reduzida na categoria “Práticas Recomendadas” ocorreu devido à execução local do projeto em ambiente HTTP (localhost), sem HTTPS configurado.

O Lighthouse considera requisitos avançados de segurança normalmente aplicados em ambientes de produção, como:

HTTPS
HSTS
CSP (Content Security Policy)
COOP
Proteções contra XSS e Clickjacking

Como o projeto foi executado localmente durante o desenvolvimento, esses recursos não estavam habilitados, impactando parcialmente a pontuação dessa categoria.

Apesar disso, o projeto apresentou excelente desempenho em performance, acessibilidade e SEO, além de não possuir erros no console, problemas de imagens ou falhas estruturais detectadas pelo Lighthouse.

## Relatórios
Os relatórios Lighthouse antes e depois da otimização estão disponíveis na pasta:

/relatorios

Arquivos incluídos:
antes.pdf
antes.png
depois.pdf
depois.png

## Responsividade
O projeto foi desenvolvido com foco em responsividade para:
Desktop
Tablet
Mobile

## Funcionalidades
Página inicial
Listagem de destinos
Página dinâmica de detalhes
Navegação otimizada
SEO dinâmico
Imagens otimizadas
Layout responsivo

## Desenvolvido por:
Francisca Jacqueline Ribeiro Tavares

Estudante de Desenvolvimento Web
