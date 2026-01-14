const translations = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      kicker: 'Portfolio 2024',
      greeting: 'Hello, I am',
      lede:
        'Software & web developer crafting playful experiences, performant systems, and products that feel modern, intentional, and alive.',
      ctaExplore: 'Explore my work',
      ctaDownload: 'Download CV',
    },
    highlights: [
      { label: 'Focus', value: 'Systems & Web' },
      { label: 'Projects', value: '+12 shipped' },
      { label: 'Mindset', value: 'Product thinking' },
      { label: 'Location', value: 'Lyon, France' },
    ],
    projects: {
      cards: [
        {
          slug: 'corewar',
          title: 'Corewar Arena',
          description:
            'A low-level virtual machine where champions battle inside my handcrafted assembler.',
          stack: ['C', 'Assembler', 'SDL'],
          badge: 'System design',
        },
        {
          slug: 'my_rpg',
          title: 'My RPG',
          description: '2D RPG engine with quests, inventory, and particle effects built in pure C.',
          stack: ['C', 'CSFML', 'Game design'],
          badge: 'Gameplay',
        },
        {
          slug: 'organized',
          title: 'Organized',
          description:
            'Custom C sorting engine experimenting with linked-list nodes and tailor-made heuristics.',
          stack: ['C', 'Algorithms', 'Linked lists'],
          badge: 'Algorithms',
        },
      ],
      kicker: 'Selected work',
      title: 'Projects with soul & systems.',
      body: 'Hover each card to peek inside the build, then dive in for the full case study and code.',
      link: 'View case study →',
    },
    about: {
      kicker: 'About me',
      title: 'I mix engineering rigor with playful ideas.',
      body:
        "Hello! My name is Axel and I'm starting my 3rd year at Epitech Lyon. Obsessed with refined experiences, I craft web apps, games, and system tools that put collaboration and performance at the center. I'm available for collaborations, internships, and freelance missions.",
    },
    stats: [
      { value: '3rd', label: 'year at Epitech' },
      { value: 'Low-level', label: 'C / ASM focus' },
      { value: 'Community', label: 'Hackathons & meetups' },
    ],
    skills: {
      kicker: 'Toolbox',
      title: "Stacks I'm fluent in",
    },
    contact: {
      kicker: "Let's build",
      title: 'Available for internships, freelance missions, and ambitious collabs.',
      body:
        'Tell me about your product idea, team needs, or hackathon plans. I love turning rough concepts into polished, scalable experiences.',
      links: [
        { label: 'Email', value: 'axel.deliaud@epitech.eu', href: 'mailto:axel.deliaud@epitech.eu' },
        { label: 'GitHub', value: '@axeldld', href: 'https://github.com/axeldld' },
        {
          label: 'LinkedIn',
          value: 'Axel Deliaud',
          href: 'https://www.linkedin.com/in/axel-deliaud-69858a2a1',
        },
      ],
    },
    footer: 'Crafted with curiosity.',
    pages: {
      common: {
        kicker: 'Case study',
      },
      corewar: {
        title: 'Corewar Project',
        lede:
          'A virtual arena where assembly-level champions battle for survival, built with a custom VM and assembler.',
        tags: ['C', 'Assembler', 'Virtual machine'],
        sections: [
          {
            title: 'Overview',
            body: [
              'Corewar is a thrilling project that builds a virtual arena where programs fight with no mercy.',
              'The goal is to design the program that survives the longest inside the arena.',
            ],
          },
          {
            title: 'Engineering focus',
            body: [
              'Participants write champions in Redcode, a simplified assembly language.',
              'These programs are then loaded into the arena to execute and clash with one another.',
              'Corewar challenges participants to prove their understanding of computer architecture, low-level programming, and algorithmic optimization.',
            ],
          },
        ],
        media: {
          heroAlt: 'Corewar arena interface',
          secondaryAlt: 'Corewar visualization',
        },
        return: 'Home',
      },
      myRpg: {
        title: 'My RPG Project',
        lede: 'A 2D role-playing game with exploration, combat, and custom-built maps.',
        tags: ['C', 'CSFML', 'Game design'],
        sections: [
          {
            title: 'Overview',
            body: [
              'My RPG is a video game project made in C with the CSFML library.',
              'The goal is to create a role-playing game where the player can move on a map, interact with objects and NPCs, and fight monsters.',
              'In my case, it is a 2D side-view game where the player can jump, attack, and upgrade their skills.',
            ],
          },
          {
            title: 'What I built',
            body: [
              'This project helped me grow my programming skills, as well as my graphics and game design abilities.',
              'Every map in the game was created by me.',
            ],
          },
        ],
        media: {
          heroAlt: 'Scrollable RPG map',
          secondaryAlt: 'RPG menu screen',
        },
        return: 'Home',
      },
      organized: {
        title: 'Organized Project',
        lede: 'A sorting engine for hardware components, focused on data structures and performance.',
        tags: ['C', 'Algorithms', 'Optimization'],
        sections: [
          {
            title: 'Overview',
            body: [
              "Epitech's Organized project is a fascinating experience that consists of building a sorting algorithm for hardware components.",
              'Participants must demonstrate their understanding of data structures, sorting algorithms, and performance optimization.',
            ],
          },
          {
            title: 'Core goals',
            body: [
              'Students write a program that efficiently sorts a list of hardware components using different techniques to achieve the fastest result possible.',
              'The project pushes participants to demonstrate their understanding of low-level programming and algorithmic optimization.',
            ],
          },
        ],
        media: {
          heroAlt: 'Organized project illustration',
          secondaryAlt: 'Sorting flow illustration',
        },
        return: 'Home',
      },
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      projects: 'Projets',
      about: 'À propos',
      contact: 'Contact',
    },
    hero: {
      kicker: 'Portfolio 2024',
      greeting: 'Bonjour, je suis',
      lede:
        'Développeur logiciel & web, je conçois des expériences ludiques, des systèmes performants et des produits modernes, intentionnels et vivants.',
      ctaExplore: 'Voir mes projets',
      ctaDownload: 'Télécharger le CV',
    },
    highlights: [
      { label: 'Focus', value: 'Systèmes & Web' },
      { label: 'Projets', value: '+12 livrés' },
      { label: 'Mindset', value: 'Esprit produit' },
      { label: 'Lieu', value: 'Lyon, France' },
    ],
    projects: {
      cards: [
        {
          slug: 'corewar',
          title: 'Corewar Arena',
          description:
            "Une machine virtuelle bas niveau où des champions s'affrontent dans mon assembleur.",
          stack: ['C', 'Assembleur', 'SDL'],
          badge: 'System design',
        },
        {
          slug: 'my_rpg',
          title: 'My RPG',
          description: 'Moteur RPG 2D avec quêtes, inventaire et particules, conçu en C.',
          stack: ['C', 'CSFML', 'Game design'],
          badge: 'Gameplay',
        },
        {
          slug: 'organized',
          title: 'Organized',
          description:
            'Moteur de tri en C avec listes chaînées et heuristiques sur-mesure.',
          stack: ['C', 'Algorithmes', 'Listes chaînées'],
          badge: 'Algorithmes',
        },
      ],
      kicker: 'Projets sélectionnés',
      title: 'Des projets avec âme et systèmes.',
      body:
        'Survolez chaque carte pour un aperçu, puis plongez dans le dossier complet et le code.',
      link: 'Voir le projet →',
    },
    about: {
      kicker: 'À propos',
      title: "Je mélange rigueur d'ingénierie et idées ludiques.",
      body:
        "Bonjour ! Je m'appelle Axel et j'entame ma 3e année à Epitech Lyon. Obsédé par les expériences raffinées, je conçois des apps web, des jeux et des outils système qui placent collaboration et performance au centre. Je suis disponible pour des collaborations, stages et missions freelances.",
    },
    stats: [
      { value: '3e', label: 'année à Epitech' },
      { value: 'Low-level', label: 'focus C / ASM' },
      { value: 'Communauté', label: 'Hackathons & meetups' },
    ],
    skills: {
      kicker: 'Boîte à outils',
      title: 'Technos que je maîtrise',
    },
    contact: {
      kicker: 'Construisons',
      title: 'Disponible pour des stages, missions freelances et collabs ambitieuses.',
      body:
        "Parlons produit, équipe ou hackathons. J'aime transformer des concepts bruts en expériences soignées et scalables.",
      links: [
        { label: 'Email', value: 'axel.deliaud@epitech.eu', href: 'mailto:axel.deliaud@epitech.eu' },
        { label: 'GitHub', value: '@axeldld', href: 'https://github.com/axeldld' },
        {
          label: 'LinkedIn',
          value: 'Axel Deliaud',
          href: 'https://www.linkedin.com/in/axel-deliaud-69858a2a1',
        },
      ],
    },
    footer: 'Conçu avec curiosité.',
    pages: {
      common: {
        kicker: 'Etude de cas',
      },
      corewar: {
        title: 'Projet Corewar',
        lede:
          "Une arene virtuelle ou des champions bas niveau s'affrontent, avec une VM et un assembleur sur-mesure.",
        tags: ['C', 'Assembleur', 'Machine virtuelle'],
        sections: [
          {
            title: "Vue d'ensemble",
            body: [
              "Corewar est un projet passionnant qui consiste a creer une arene virtuelle ou des programmes s'affrontent dans un combat sans merci.",
              "L'objectif est de concevoir un programme qui sera le dernier survivant dans l'arene.",
            ],
          },
          {
            title: "Focus d'ingenierie",
            body: [
              "Les participants ecrivent des programmes en Redcode, un langage d'assemblage simplifie.",
              "Ces programmes sont ensuite charges dans l'arene virtuelle pour se confronter.",
              "Le projet Corewar pousse les participants a demontrer leur comprehension de l'architecture des ordinateurs, de la programmation bas niveau et de l'optimisation algorithmique.",
            ],
          },
        ],
        media: {
          heroAlt: "Interface de l'arene Corewar",
          secondaryAlt: 'Visualisation Corewar',
        },
        return: 'Accueil',
      },
      myRpg: {
        title: 'Projet My RPG',
        lede: 'Un jeu de role 2D avec exploration, combat et maps creees a la main.',
        tags: ['C', 'CSFML', 'Game design'],
        sections: [
          {
            title: "Vue d'ensemble",
            body: [
              'My RPG est un projet de jeu video realise en C avec la librairie CSFML.',
              "Le but est de creer un jeu de role dans lequel le joueur peut se deplacer sur une carte, interagir avec des objets et des PNJ, et combattre des monstres.",
              "Dans mon cas, c'est un jeu 2D en vue de cote : le joueur peut sauter, attaquer et ameliorer ses competences.",
            ],
          },
          {
            title: "Ce que j'ai construit",
            body: [
              "Ce projet m'a permis de developper mes competences en programmation, mais aussi en graphisme et en game design.",
              'Toutes les maps du jeu ont ete creees par moi-meme.',
            ],
          },
        ],
        media: {
          heroAlt: 'Carte RPG defilante',
          secondaryAlt: 'Ecran de menu RPG',
        },
        return: 'Accueil',
      },
      organized: {
        title: 'Projet Organized',
        lede: "Un moteur de tri pour des composants materiels, axe sur les structures de donnees et les performances.",
        tags: ['C', 'Algorithmes', 'Optimisation'],
        sections: [
          {
            title: "Vue d'ensemble",
            body: [
              "Le projet Organized d'Epitech est une experience fascinante qui consiste a creer un algorithme de tri pour des composants materiels.",
              "Les participants sont amenes a demontrer leur comprehension des structures de donnees, des algorithmes de tri et de l'optimisation des performances.",
            ],
          },
          {
            title: 'Objectifs cles',
            body: [
              'Les etudiants ecrivent un programme qui trie efficacement une liste de composants en utilisant differentes techniques pour obtenir le meilleur temps possible.',
              "Le projet pousse les participants a demontrer leur comprehension de la programmation bas niveau et de l'optimisation algorithmique.",
            ],
          },
        ],
        media: {
          heroAlt: 'Illustration du projet Organized',
          secondaryAlt: 'Illustration du flux de tri',
        },
        return: 'Accueil',
      },
    },
  },
};

export default translations;
