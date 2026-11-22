<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Orientações do projeto Meu Crochê

## Objetivo

Desenvolver o **Meu Crochê**, um sistema web para organizar projetos e materiais de crochê. A aplicação deve oferecer um ambiente simples, organizado e agradável, funcionando como um espaço digital de organização pessoal para pessoas que praticam crochê.

## Tecnologias

- Next.js com JavaScript.
- React.
- Supabase para banco de dados e autenticação.
- CSS Modules e CSS global, conforme a organização existente do projeto.

## Regras de desenvolvimento

- Utilizar JavaScript, não TypeScript.
- Manter o código simples, organizado e legível.
- Utilizar componentes reutilizáveis quando necessário.
- Priorizar nomes de variáveis, funções e componentes em português.
- Evitar bibliotecas desnecessárias.
- Não criar funcionalidades que não foram solicitadas.
- Não modificar arquivos sem explicar o motivo.
- Consultar a documentação da versão instalada do Next.js antes de implementar funcionalidades.
- Respeitar a estrutura de pastas e os padrões já utilizados no projeto.
- Evitar duplicação de código.
- Garantir que as páginas funcionem em diferentes tamanhos de tela.

## Identidade visual

O sistema deve manter a mesma identidade visual da página inicial já desenvolvida.

### Conceito visual

- Estética de ateliê artesanal com inspiração vintage.
- Referências visuais a linhas, novelos, agulhas, botões, tecidos e peças de crochê.
- Aparência acolhedora, organizada e elegante.
- Combinar elementos artesanais e vintage com a organização de uma aplicação web moderna.
- Evitar aparência infantil, excesso de elementos decorativos ou visual genérico de painel administrativo.
- Não utilizar emojis como substitutos de ícones ou elementos visuais da interface.

### Paleta de cores

Utilizar preferencialmente as seguintes cores:

- Creme: `#F5F2ED`
- Branco: `#FFFFFF`
- Vinho: `#713B3D`
- Marrom: `#512C20`
- Terracota: `#A94F24`
- Rosa antigo: `#E9DDD8`
- Verde oliva: `#626044`

As cores devem ser combinadas de maneira equilibrada, mantendo boa legibilidade e contraste.

### Tipografia e elementos

- Utilizar fontes serifadas nos títulos, mantendo a identidade editorial e vintage.
- Utilizar fontes sem serifa nos textos e elementos funcionais para facilitar a leitura.
- Priorizar cartões claros, bordas discretas e sombras suaves.
- Utilizar imagens relacionadas ao crochê quando fizerem sentido para a interface.
- Manter espaçamentos consistentes e uma hierarquia visual clara.
- Reutilizar os estilos e componentes existentes sempre que possível.

## Organização da aplicação

A aplicação possui uma área pública e uma área privada.

### Área pública

- `/`: página inicial que apresenta o Meu Crochê e suas funcionalidades.
- `/login`: página de acesso à conta.
- `/cadastro`: página de criação de conta.

A página inicial deve continuar sendo uma apresentação pública do sistema, e não deve ser substituída pelo painel privado.

### Área privada

- `/inicio`: página principal do usuário após entrar na conta.
- O usuário deve visualizar e organizar seus próprios projetos e materiais.
- As páginas privadas devem exigir autenticação.
- As funcionalidades devem ser implementadas gradualmente.

### Tipos de usuário

**Usuário comum:**
- Visualizar e gerenciar seus próprios projetos.
- Cadastrar, editar e excluir seus próprios materiais.
- Acessar as funcionalidades disponíveis para sua conta.

**Administrador:**
- Visualizar informações gerais do sistema.
- Gerenciar usuários.
- Visualizar e administrar projetos conforme as permissões definidas.

O cadastro público não deve permitir que uma pessoa escolha se tornar administradora.

## Segurança

- Nunca expor chaves secretas ou informações sensíveis.
- Utilizar variáveis de ambiente para informações privadas.
- Proteger páginas e funcionalidades que exigem autenticação.
- Garantir que cada usuário só possa visualizar e modificar seus próprios projetos e materiais.
- Implementar verificações de autorização no servidor.
- Utilizar as políticas de segurança do Supabase (RLS) para proteger os dados.
- Não confiar apenas na ocultação de botões ou elementos da interface para controlar permissões.

## Forma de trabalho

- Implementar uma funcionalidade por vez.
- Antes de modificar arquivos, analisar a estrutura existente e os códigos relacionados.
- Explicar as alterações realizadas e o motivo de cada uma.
- Informar quais arquivos foram criados e modificados.
- Não apagar ou substituir códigos existentes sem explicar a necessidade.
- Não avançar para outra funcionalidade sem autorização.
- Não instalar dependências sem necessidade justificada.
- Ao finalizar uma implementação, verificar se não foram introduzidos erros de compilação ou execução.
- Preservar as funcionalidades que já estão funcionando.

## Escopo e planejamento

O desenvolvimento deve ocorrer gradualmente, priorizando primeiro as funcionalidades essenciais:

1. Estrutura e identidade visual das páginas.
2. Configuração do Supabase.
3. Cadastro, login e autenticação.
4. Organização dos projetos de crochê.
5. Organização dos materiais.
6. Controle de acesso de usuários e administradores.
7. Funcionalidades complementares, como calculadoras e biblioteca.

Não implementar etapas futuras antes da autorização.

## Documentação do Next.js

A versão instalada do Next.js pode apresentar diferenças em relação a versões anteriores.

Antes de escrever ou modificar código relacionado ao Next.js, consultar os guias disponíveis em `node_modules/next/dist/docs/`, considerando a versão instalada e as orientações do bloco automático abaixo.