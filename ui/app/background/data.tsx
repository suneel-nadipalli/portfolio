export const backgroundTree = [
  {
    id: 'intro',
    label: 'Introduction',
    icon: '👋',
    tiers: [
      [
        {
          id: 'gamer',
          icon: '🎮',
          title: 'Gamer Since 2000',
          content: 'Pixels shaped how I think. From NES to PS5.',
          parentIds: [],
        }
      ],
      [
        {
          id: 'builder',
          icon: '🧘',
          title: 'Builder Mentality',
          content: 'I build to understand, teach, and explore.',
          parentIds: ['gamer'],
        },
        {
          id: 'thinker',
          icon: '🧠',
          title: 'Pattern Thinker',
          content: 'Games taught me systems, logic, and flow.',
          parentIds: ['gamer'],
        }
      ],
      [
        {
          id: 'philosophy',
          icon: '🌱',
          title: 'Philosophy',
          content: 'Balance between creativity, challenge, and purpose.',
          parentIds: ['builder', 'thinker'],
        }
      ]
    ]
  },

  {
    id: 'education',
    label: 'Education',
    icon: '🏫',
    tiers: [
      [
        {
          id: 'cs-degree',
          icon: '📚',
          title: 'CS Degree',
          content: 'Formal foundations in algorithms, systems, and theory.',
          parentIds: [],
        }
      ],
      [
        {
          id: 'ai-focus',
          icon: '🤖',
          title: 'AI/ML Focus',
          content: 'Machine learning and model-driven learning.',
          parentIds: ['cs-degree'],
        },
        {
          id: 'xai',
          icon: '🧩',
          title: 'Explainable AI',
          content: 'Understanding what the model sees and why.',
          parentIds: ['cs-degree'],
        }
      ],
      [
        {
          id: 'capstone',
          icon: '📖',
          title: 'Thesis / Capstone',
          content: 'Research on interpretable models + system design.',
          parentIds: ['ai-focus', 'xai'],
        }
      ]
    ]
  },

  {
    id: 'work',
    label: 'Work',
    icon: '💼',
    tiers: [
      [
        {
          id: 'industry',
          icon: '🛠️',
          title: 'Industry Projects',
          content: 'Built, broke, and fixed software at scale.',
          parentIds: [],
        }
      ],
      [
        {
          id: 'webapps',
          icon: '🚀',
          title: 'Webapps & Repos',
          content: 'Side projects, packages, and experiments.',
          parentIds: ['industry'],
        },
        {
          id: 'papers',
          icon: '🧪',
          title: 'Research & Papers',
          content: 'Applied theory to practice, authored work.',
          parentIds: ['industry'],
        }
      ],
      [
        {
          id: 'identity',
          icon: '🗃️',
          title: 'Developer Identity',
          content: 'My toolkit, my preferences, my approach.',
          parentIds: ['webapps', 'papers'],
        }
      ]
    ]
  }
];
