export const projects = [
  {
    id: 'fastapi-template',
    title: 'FastAPI Template',
    category: 'backend',
    categoryLabel: 'Backend',
    description:
      'Template de produção para novas APIs FastAPI com estrutura modular, Docker Compose configurado e organização de pastas pronta para escalar. Ponto de partida para qualquer novo serviço.',
    tech: ['Python', 'FastAPI', 'Docker', 'Shell'],
    repoUrl: 'https://github.com/afcj8/fastapi_template',
    featured: true,
  },
  {
    id: 'auth-system',
    title: 'Autenticação & Autorização',
    category: 'backend',
    categoryLabel: 'Backend',
    description:
      'Sistema completo de autenticação com FastAPI: registro de usuários, login com JWT, refresh token, controle de grupos e permissões por recurso. Implementação pronta para produção.',
    tech: ['Python', 'FastAPI', 'SQLite', 'JWT'],
    repoUrl: 'https://github.com/afcj8/autenticacao_e_autorizacao',
    featured: true,
  },
  {
    id: 'fastapi-arch',
    title: 'Arquitetura FastAPI',
    category: 'backend',
    categoryLabel: 'Backend',
    description:
      'Proposta de arquitetura em camadas para aplicações FastAPI: routers, serviços, repositórios e schemas separados com responsabilidades bem definidas. Referência de organização para equipes.',
    tech: ['Python', 'FastAPI'],
    repoUrl: 'https://github.com/afcj8/arquitetura_fastapi',
    featured: false,
  },
  {
    id: 'gap',
    title: 'GAP — Gerenciador de Acervo',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    description:
      'Sistema web para organização de acervos pessoais com cadastro de itens, controle de empréstimos e devoluções. Interface web construída com Django e Bootstrap.',
    tech: ['Django', 'Python', 'Bootstrap', 'PostgreSQL'],
    repoUrl: 'https://github.com/afcj8/gap',
    featured: false,
  },
  {
    id: 'data-structures',
    title: 'Estrutura de Dados',
    category: 'fundamentals',
    categoryLabel: 'Fundamentos',
    description:
      'Implementações de estruturas de dados clássicas em Java: listas encadeadas, pilhas, filas, árvores binárias e grafos — com análise de complexidade e casos de uso documentados.',
    tech: ['Java'],
    repoUrl: 'https://github.com/afcj8/estrutura_de_dados',
    stars: 5,
    featured: false,
  },
]
