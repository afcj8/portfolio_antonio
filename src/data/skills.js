const DEVICONS = 'https://raw.githubusercontent.com/devicons/devicon/master/icons'
const DEVICONS_REF = 'https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons'

export const skillCategories = [
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Python',  icon: `${DEVICONS}/python/python-original.svg` },
      { name: 'FastAPI', icon: `${DEVICONS_REF}/fastapi/fastapi-original.svg` },
      { name: 'Django',  icon: `${DEVICONS}/django/django-plain.svg` },
      { name: 'Java',    icon: `${DEVICONS}/java/java-original.svg` },
      { name: 'C#',      icon: `${DEVICONS}/csharp/csharp-original.svg` },
      { name: 'Node.js', icon: `${DEVICONS}/nodejs/nodejs-original.svg` },
    ]
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'Vue.js',      icon: `${DEVICONS_REF}/vuejs/vuejs-original.svg` },
      { name: 'JavaScript',  icon: `${DEVICONS}/javascript/javascript-original.svg` },
      { name: 'TypeScript',  icon: `${DEVICONS}/typescript/typescript-original.svg` },
      { name: 'Angular',     icon: `${DEVICONS}/angular/angular-original.svg` },
      { name: 'HTML5',       icon: `${DEVICONS}/html5/html5-original.svg` },
      { name: 'CSS3',        icon: `${DEVICONS}/css3/css3-original.svg` },
    ]
  },
  {
    id: 'database',
    label: 'Banco de Dados',
    skills: [
      { name: 'PostgreSQL', icon: `${DEVICONS}/postgresql/postgresql-original.svg` },
    ]
  },
  {
    id: 'devops',
    label: 'DevOps & Ferramentas',
    skills: [
      { name: 'Docker',  icon: `${DEVICONS}/docker/docker-original.svg` },
      { name: 'Git',     icon: `${DEVICONS}/git/git-original.svg` },
    ]
  }
]
