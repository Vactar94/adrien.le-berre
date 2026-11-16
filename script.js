const translations = {
  fr: {
    pageTitle: "Adrien Le Berre — Portfolio",
    pageDescription: "Portfolio d'Adrien Le Berre, étudiant ingénieur en informatique à l'EPITA.",
    skipLink: "Aller au contenu",
    navAbout: "À propos",
    navSkills: "Compétences",
    navProjects: "Projets",
    navExperience: "Expériences",
    navInterests: "Intérêts",
    navDocuments: "Documents",
    navContact: "Contact",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    mainNavigation: "Navigation principale",
    languageChoice: "Choix de la langue",
    availableLanguages: "Langues disponibles",
    heroEyebrow: "Étudiant ingénieur en informatique",
    heroHello: "Bonjour, je suis",
    heroIntro: "Étudiant à l'EPITA, je développe des projets mêlant programmation, interfaces, intelligence artificielle et travail d'équipe.",
    heroProjects: "Découvrir mes projets",
    heroDocuments: "Voir mes documents",
    heroLocation: "Paris, France",
    heroAvailability: "Ouvert aux stages et aux expériences internationales",
    quickInformation: "Informations rapides",
    portraitArea: "Portrait d'Adrien Le Berre",
    floatingCode: "Développement",
    floatingCreate: "Créativité",
    aboutEyebrow: "Qui je suis",
    aboutTitle: "À propos de moi",
    aboutLead: "Je suis Adrien Le Berre, étudiant en ingénierie informatique à l'EPITA à Paris.",
    aboutBody: "Curieux et polyvalent, je m'intéresse à plusieurs domaines de l'informatique. Mes projets m'ont permis de travailler sur des interfaces graphiques, des jeux, des applications, du traitement d'image et des algorithmes, tout en développant mon autonomie et ma capacité à collaborer.",
    aboutFactOneLabel: "Formation",
    aboutFactOneValue: "Ingénierie informatique — EPITA",
    aboutFactTwoLabel: "Approche",
    aboutFactTwoValue: "Créative et collaborative",
    aboutFactThreeLabel: "Objectif",
    aboutFactThreeValue: "Créer des solutions utiles",
    skillsEyebrow: "Ce que je maîtrise",
    skillsTitle: "Compétences & technologies",
    skillsIntro: "Des compétences techniques et humaines développées au fil de projets individuels et collectifs.",
    skillDevTitle: "Développement",
    skillDevText: "Programmation système, orientée objet, algorithmique, interfaces et développement web.",
    skillToolsTitle: "Outils & environnements",
    skillToolsText: "Des outils adaptés au développement, à la collaboration et à la conception de supports.",
    skillSoftTitle: "Compétences humaines",
    skillSoftText: "Communication, adaptation, organisation, transmission et travail en équipe.",
    tagTeam: "Équipe",
    tagLeadership: "Leadership",
    tagAdaptation: "Adaptation",
    tagCreativity: "Créativité",
    projectsEyebrow: "Ce que j'ai construit",
    projectsTitle: "Projets & réalisations",
    projectsIntro: "Six projets qui illustrent mon évolution, de Python au Rust, en passant par le jeu vidéo, le traitement d'image et le web.",
    projectTaskAlt: "Interface du projet Task-List",
    projectTaskType: "Application de bureau",
    inProgress: "En cours",
    projectTaskTitle: "Task-List — organisation intelligente",
    projectTaskText: "Application de gestion de tâches développée en Rust. Elle vise à faciliter l'organisation du quotidien grâce à des algorithmes de tri automatique. Le projet comprend également un site de présentation et de téléchargement.",
    tagAlgorithms: "Algorithmes",
    projectLink: "Voir le détail",
    projectWordAlt: "Interface du solveur de grille de mots",
    projectWordType: "Traitement d'image & IA",
    teamProject: "Projet d'équipe",
    projectWordTitle: "Word Puzzle Solver",
    projectWordText: "Projet associant un réseau neuronal à une interface graphique. J'ai pris en charge l'interface : rotation et passage en niveaux de gris de l'image, affichage de la grille et mise en évidence des mots détectés.",
    tagImageProcessing: "Traitement d'image",
    projectTribzAlt: "Capture du jeu Tribz",
    projectTribzType: "Jeu vidéo",
    projectTribzTitle: "Tribz — city-builder",
    projectTribzText: "Jeu de gestion développé en C# en équipe. Le joueur construit, organise et défend son village. J'étais responsable du développement des mécaniques de jeu dans un projet intégrant contraintes utilisateurs et organisation collective.",
    tagGameDesign: "Game design",
    tagTeamwork: "Travail d'équipe",
    projectDroneAlt: "Visuel du projet Automatik Drone",
    projectDroneType: "Prototype embarqué",
    projectDroneTitle: "Automatik Drone",
    projectDroneText: "Prototype en Python conçu pour assister les arbitres de volley-ball. Le projet exploite les entrées caméra et le pilotage d'un drone. J'ai développé la partie contrôle et travaillé sur plusieurs modes de commande.",
    tagCamera: "Caméra",
    tagControl: "Contrôle",
    projectEtriAlt: "Affiche du projet e-Tri",
    projectEtriType: "Application écoresponsable",
    projectEtriTitle: "e-Tri",
    projectEtriText: "Application créée pour aider les utilisateurs à trier leurs déchets. Développée en Python puis adaptée à Android, elle identifie la catégorie du déchet et indique les points de collecte. Le projet a concouru au Trophée NSI dans la catégorie écologie.",
    tagMap: "Cartographie",
    tagEcoDesign: "Écoconception",
    experienceEyebrow: "Mon parcours",
    experienceTitle: "Expériences",
    experienceIntro: "Des expériences professionnelles, internationales et associatives qui ont renforcé ma rigueur, mon adaptabilité et mon sens du collectif.",
    experienceDateChaumiere: "2021 · 1 semaine",
    experienceJobChaumiere: "Cuisinier — La Chaumière, Nouméa, Nouvelle-Calédonie",
    experienceBodyChaumiere: "Première expérience en cuisine professionnelle, dans une brasserie qui fait aussi traiteur : j'y ai appris à concilier service en salle et production traiteur.",
    experienceDateOne: "Stage de 3 mois + extras",
    experienceTypeOne: "Cuisine professionnelle",
    experienceJobOne: "Cuisinier — Présidence de l'Assemblée nationale (Hôtel de Lassay)",
    experienceBodyOne: "Participation à la préparation et au dressage de repas et de réceptions dans un environnement exigeant. Ces missions développent la rigueur, la précision, la gestion du temps et la coordination en brigade.",
    experienceAssemblyAlt: "Plats préparés à l'Assemblée nationale",
    experienceDateTwo: "2024 · 1 mois",
    experienceTypeTwo: "Expérience internationale",
    experienceJobTwo: "Cuisinier & serveur — La Brasserie, Bozeman USA",
    experienceBodyTwo: "Immersion professionnelle aux États-Unis dans un restaurant français, en cuisine comme en salle. Cette expérience m'a permis de travailler en anglais, de gagner en polyvalence et de m'adapter à une nouvelle équipe et à d'autres habitudes de travail.",
    experienceBozemanAlt: "Adrien en cuisine à La Brasserie à Bozeman",
    today: "Aujourd'hui",
    experienceTypeThree: "Animation",
    experienceJobThree: "Animateur BAFA — Maison de la Gendarmerie",
    experienceBodyThree: "Encadrement de séjours de vacances et d'auberges : conception d'activités, accompagnement de la vie quotidienne, sécurité des participants et création d'une dynamique de groupe.",
    experienceAnimationAlt: "Équipe d'animation en séjour",
    experienceDateFour: "Engagement bénévole",
    experienceTypeFour: "Engagement associatif",
    experienceJobFour: "Scouts et Guides de France",
    experienceBodyFour: "Participation à des projets éducatifs et collectifs fondés sur le bénévolat et la transmission. Cet engagement renforce mon leadership, mon organisation, ma capacité à communiquer et mon goût du travail en équipe.",
    experienceScoutsAlt: "Activité collective avec les Scouts et Guides de France",
    interestsEyebrow: "Au-delà du code",
    interestsTitle: "Centres d'intérêt",
    interestsIntro: "Deux passions qui développent la persévérance, la maîtrise de soi, l'autonomie et le goût de la transmission.",
    interestMuayAlt: "Adrien Le Berre lors d'une compétition de muay-thaï",
    interestOneKicker: "Depuis 2021 · Compétition",
    interestOneTitle: "Muay-thaï",
    interestOneText: "Je pratique le muay-thaï depuis 2021 et j'ai commencé la compétition après plusieurs périodes d'arrêt liées à des blessures. Je m'entraîne au MB Fight de l'Université Jussieu à Paris. Cette discipline m'apporte persévérance, maîtrise de soi et capacité à progresser dans la difficulté.",
    interestSailingAlt: "Adrien Le Berre naviguant sur un voilier",
    interestTwoKicker: "Depuis 2023 · Encadrement",
    interestTwoTitle: "Voile",
    interestTwoText: "J'ai découvert la voile en août 2023 lors d'une navigation de deux semaines en Bretagne sud. Je suis désormais qualifié pour encadrer des débutants et des enfants, titulaire du permis bateau et en préparation d'un nouveau diplôme. J'aime particulièrement associer navigation, animation et transmission.",
    documentsEyebrow: "Pour aller plus loin",
    documentsTitle: "Documents",
    documentsIntro: "Retrouvez une présentation détaillée de mon parcours et mon CV à jour.",
    portfolioDocumentType: "15 pages · PDF",
    portfolioDocumentTitle: "Portfolio détaillé",
    portfolioDocumentText: "Projets, expériences et centres d'intérêt en détail, avec un sommaire cliquable. Disponible dans la langue du site.",
    openPortfolio: "Ouvrir le portfolio",
    cvDocumentType: "1 page · PDF",
    cvDocumentTitle: "Curriculum vitæ",
    cvDocumentText: "Mon CV à jour, sur une page, dans la langue du site.",
    cvComingSoon: "Ouvrir le CV",
    contactEyebrow: "Échangeons",
    contactTitle: "Un projet en tête ?",
    contactText: "Je suis disponible pour échanger autour d'un projet, d'une opportunité ou d'une expérience internationale.",
    contactEmail: "M'écrire par e-mail",
    contactPhone: "M'appeler",
    projectPoolAlt: "Page d'accueil du site PoolNight",
    projectPoolType: "Site web associatif",
    projectPoolTitle: "PoolNight — le site du club de billard de l'EPITA",
    projectPoolText: "Site interactif pour PoolNight, l'association de billard et de jeux de bar de l'EPITA : tournois, défis et classements des joueurs. J'en suis le trésorier et le responsable marketing : je conçois le site et gère le compte Instagram.",
    projectSiteLink: "Voir le site",
    tagWeb: "Web",
    experienceChaumiereAlt: "Devanture du restaurant La Chaumière à Nouméa",
    backToTop: "Retour en haut ↑"
  },

  en: {
    pageTitle: "Adrien Le Berre — Portfolio",
    pageDescription: "Portfolio of Adrien Le Berre, a computer science engineering student at EPITA.",
    skipLink: "Skip to content",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navExperience: "Experience",
    navInterests: "Interests",
    navDocuments: "Documents",
    navContact: "Contact",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    mainNavigation: "Main navigation",
    languageChoice: "Language selection",
    availableLanguages: "Available languages",
    heroEyebrow: "Computer science engineering student",
    heroHello: "Hello, I am",
    heroIntro: "As an EPITA student, I develop projects combining programming, interfaces, artificial intelligence and teamwork.",
    heroProjects: "Discover my projects",
    heroDocuments: "View my documents",
    heroLocation: "Paris, France",
    heroAvailability: "Open to internships and international opportunities",
    quickInformation: "Quick information",
    portraitArea: "Portrait of Adrien Le Berre",
    floatingCode: "Development",
    floatingCreate: "Creativity",
    aboutEyebrow: "Who I am",
    aboutTitle: "About me",
    aboutLead: "I am Adrien Le Berre, a computer science engineering student at EPITA in Paris.",
    aboutBody: "Curious and versatile, I am interested in several areas of computer science. My projects have enabled me to work on graphical interfaces, games, applications, image processing and algorithms while developing my autonomy and ability to collaborate.",
    aboutFactOneLabel: "Education",
    aboutFactOneValue: "Computer science engineering — EPITA",
    aboutFactTwoLabel: "Approach",
    aboutFactTwoValue: "Creative and collaborative",
    aboutFactThreeLabel: "Goal",
    aboutFactThreeValue: "Build useful solutions",
    skillsEyebrow: "What I work with",
    skillsTitle: "Skills & technologies",
    skillsIntro: "Technical and interpersonal skills developed through individual and team projects.",
    skillDevTitle: "Development",
    skillDevText: "Systems and object-oriented programming, algorithms, interfaces and web development.",
    skillToolsTitle: "Tools & environments",
    skillToolsText: "Tools suited to development, collaboration and visual content creation.",
    skillSoftTitle: "Interpersonal skills",
    skillSoftText: "Communication, adaptability, organisation, knowledge sharing and teamwork.",
    tagTeam: "Teamwork",
    tagLeadership: "Leadership",
    tagAdaptation: "Adaptability",
    tagCreativity: "Creativity",
    projectsEyebrow: "What I have built",
    projectsTitle: "Projects & achievements",
    projectsIntro: "Six projects showing my progress from Python to Rust, through game development, image processing and the web.",
    projectTaskAlt: "Task-List project interface",
    projectTaskType: "Desktop application",
    inProgress: "In progress",
    projectTaskTitle: "Task-List — smart organisation",
    projectTaskText: "A task management application developed in Rust. It aims to simplify everyday organisation through automatic sorting algorithms. The project also includes a presentation and download website.",
    tagAlgorithms: "Algorithms",
    projectLink: "View details",
    projectWordAlt: "Word puzzle solver interface",
    projectWordType: "Image processing & AI",
    teamProject: "Team project",
    projectWordTitle: "Word Puzzle Solver",
    projectWordText: "A project combining a neural network with a graphical interface. I was responsible for the interface: rotating and converting images to greyscale, displaying the grid and highlighting the detected words.",
    tagImageProcessing: "Image processing",
    projectTribzAlt: "Screenshot of the Tribz game",
    projectTribzType: "Video game",
    projectTribzTitle: "Tribz — city builder",
    projectTribzText: "A management game developed in C# as a team. Players build, organise and defend their village. I was responsible for developing the game mechanics within a project involving user constraints and collective organisation.",
    tagGameDesign: "Game design",
    tagTeamwork: "Teamwork",
    projectDroneAlt: "Visual from the Automatik Drone project",
    projectDroneType: "Embedded prototype",
    projectDroneTitle: "Automatik Drone",
    projectDroneText: "A Python prototype designed to assist volleyball referees. The project uses camera input and drone control. I developed the control component and worked on several control modes.",
    tagCamera: "Camera",
    tagControl: "Control",
    projectEtriAlt: "e-Tri project poster",
    projectEtriType: "Eco-friendly application",
    projectEtriTitle: "e-Tri",
    projectEtriText: "An application created to help users sort waste. Developed in Python and then adapted for Android, it identifies the waste category and shows collection points. The project entered the Trophée NSI in the ecology category.",
    tagMap: "Mapping",
    tagEcoDesign: "Eco-design",
    experienceEyebrow: "My journey",
    experienceTitle: "Experience",
    experienceIntro: "Professional, international and voluntary experiences that strengthened my rigour, adaptability and team spirit.",
    experienceDateChaumiere: "2021 · 1 week",
    experienceJobChaumiere: "Cook — La Chaumière, Nouméa, New Caledonia",
    experienceBodyChaumiere: "My first professional kitchen experience, in a brasserie that also runs a catering business: I learned to balance restaurant service and catering production.",
    experienceDateOne: "3-month internship + extra shifts",
    experienceTypeOne: "Professional cooking",
    experienceJobOne: "Cook — Office of the President of the French National Assembly",
    experienceBodyOne: "Preparing and plating meals and receptions in a demanding environment. These assignments develop rigour, precision, time management and coordination within a kitchen team.",
    experienceAssemblyAlt: "Dishes prepared at the French National Assembly",
    experienceDateTwo: "2024 · 1 month",
    experienceTypeTwo: "International experience",
    experienceJobTwo: "Cook & waiter — La Brasserie, Bozeman USA",
    experienceBodyTwo: "A professional immersion in the United States at a French restaurant, both in the kitchen and front of house. This experience enabled me to work in English, become more versatile and adapt to a new team and different working habits.",
    experienceBozemanAlt: "Adrien working in the kitchen at La Brasserie in Bozeman",
    today: "Present",
    experienceTypeThree: "Youth work",
    experienceJobThree: "BAFA activity leader — Maison de la Gendarmerie",
    experienceBodyThree: "Supervising holiday camps and hostels: designing activities, supporting daily life, ensuring participant safety and building positive group dynamics.",
    experienceAnimationAlt: "Holiday camp activity team",
    experienceDateFour: "Volunteer commitment",
    experienceTypeFour: "Voluntary work",
    experienceJobFour: "Scouts et Guides de France",
    experienceBodyFour: "Contributing to educational and collective projects based on volunteering and knowledge sharing. This commitment strengthens my leadership, organisation, communication and teamwork skills.",
    experienceScoutsAlt: "Group activity with Scouts et Guides de France",
    interestsEyebrow: "Beyond code",
    interestsTitle: "Interests",
    interestsIntro: "Two passions that develop perseverance, self-control, autonomy and a desire to share knowledge.",
    interestMuayAlt: "Adrien Le Berre at a Muay Thai competition",
    interestOneKicker: "Since 2021 · Competition",
    interestOneTitle: "Muay Thai",
    interestOneText: "I have practised Muay Thai since 2021 and began competing after several breaks caused by injuries. I train at MB Fight at Jussieu University in Paris. This discipline teaches me perseverance, self-control and how to keep improving through difficulty.",
    interestSailingAlt: "Adrien Le Berre sailing on a yacht",
    interestTwoKicker: "Since 2023 · Instruction",
    interestTwoTitle: "Sailing",
    interestTwoText: "I discovered sailing in August 2023 during a two-week trip in southern Brittany. I am now qualified to supervise beginners and children, hold a boating licence and am preparing another qualification. I particularly enjoy combining sailing, youth work and knowledge sharing.",
    documentsEyebrow: "Learn more",
    documentsTitle: "Documents",
    documentsIntro: "Explore a detailed presentation of my background and my updated résumé.",
    portfolioDocumentType: "15 pages · PDF",
    portfolioDocumentTitle: "Detailed portfolio",
    portfolioDocumentText: "Projects, experience and interests in detail, with a clickable table of contents. Available in the site's language.",
    openPortfolio: "Open portfolio",
    cvDocumentType: "1 page · PDF",
    cvDocumentTitle: "Curriculum vitae",
    cvDocumentText: "My up-to-date one-page résumé, in the site's language.",
    cvComingSoon: "Open résumé",
    contactEyebrow: "Let's talk",
    contactTitle: "Have a project in mind?",
    contactText: "I am available to discuss a project, an opportunity or an international experience.",
    contactEmail: "Email me",
    contactPhone: "Call me",
    projectPoolAlt: "PoolNight website home page",
    projectPoolType: "Club website",
    projectPoolTitle: "PoolNight — EPITA's billiards club website",
    projectPoolText: "Interactive website for PoolNight, EPITA's billiards and bar-games club: tournaments, challenges and player rankings. As treasurer and marketing lead, I design the site and run the club's Instagram account.",
    projectSiteLink: "Visit the site",
    tagWeb: "Web",
    experienceChaumiereAlt: "Front of La Chaumière restaurant in Nouméa",
    backToTop: "Back to top ↑"
  },

  it: {
    pageTitle: "Adrien Le Berre — Portfolio",
    pageDescription: "Portfolio di Adrien Le Berre, studente di ingegneria informatica all'EPITA.",
    skipLink: "Vai al contenuto",
    navAbout: "Chi sono",
    navSkills: "Competenze",
    navProjects: "Progetti",
    navExperience: "Esperienze",
    navInterests: "Interessi",
    navDocuments: "Documenti",
    navContact: "Contatti",
    menuOpen: "Apri il menu",
    menuClose: "Chiudi il menu",
    mainNavigation: "Navigazione principale",
    languageChoice: "Scelta della lingua",
    availableLanguages: "Lingue disponibili",
    heroEyebrow: "Studente di ingegneria informatica",
    heroHello: "Ciao, sono",
    heroIntro: "Come studente dell'EPITA, sviluppo progetti che uniscono programmazione, interfacce, intelligenza artificiale e lavoro di squadra.",
    heroProjects: "Scopri i miei progetti",
    heroDocuments: "Vedi i miei documenti",
    heroLocation: "Parigi, Francia",
    heroAvailability: "Disponibile per tirocini ed esperienze internazionali",
    quickInformation: "Informazioni rapide",
    portraitArea: "Ritratto di Adrien Le Berre",
    floatingCode: "Sviluppo",
    floatingCreate: "Creatività",
    aboutEyebrow: "Chi sono",
    aboutTitle: "Su di me",
    aboutLead: "Sono Adrien Le Berre, studente di ingegneria informatica all'EPITA di Parigi.",
    aboutBody: "Curioso e versatile, mi interesso a diversi ambiti dell'informatica. I miei progetti mi hanno permesso di lavorare su interfacce grafiche, videogiochi, applicazioni, elaborazione delle immagini e algoritmi, sviluppando al contempo autonomia e capacità di collaborazione.",
    aboutFactOneLabel: "Formazione",
    aboutFactOneValue: "Ingegneria informatica — EPITA",
    aboutFactTwoLabel: "Approccio",
    aboutFactTwoValue: "Creativo e collaborativo",
    aboutFactThreeLabel: "Obiettivo",
    aboutFactThreeValue: "Creare soluzioni utili",
    skillsEyebrow: "Le mie competenze",
    skillsTitle: "Competenze e tecnologie",
    skillsIntro: "Competenze tecniche e relazionali sviluppate attraverso progetti individuali e di gruppo.",
    skillDevTitle: "Sviluppo",
    skillDevText: "Programmazione di sistema e orientata agli oggetti, algoritmi, interfacce e sviluppo web.",
    skillToolsTitle: "Strumenti e ambienti",
    skillToolsText: "Strumenti adatti allo sviluppo, alla collaborazione e alla creazione di contenuti visivi.",
    skillSoftTitle: "Competenze trasversali",
    skillSoftText: "Comunicazione, adattabilità, organizzazione, trasmissione delle conoscenze e lavoro di squadra.",
    tagTeam: "Squadra",
    tagLeadership: "Leadership",
    tagAdaptation: "Adattabilità",
    tagCreativity: "Creatività",
    projectsEyebrow: "Cosa ho realizzato",
    projectsTitle: "Progetti e risultati",
    projectsIntro: "Sei progetti che mostrano la mia evoluzione, da Python a Rust, passando per videogiochi, elaborazione delle immagini e web.",
    projectTaskAlt: "Interfaccia del progetto Task-List",
    projectTaskType: "Applicazione desktop",
    inProgress: "In corso",
    projectTaskTitle: "Task-List — organizzazione intelligente",
    projectTaskText: "Applicazione per la gestione delle attività sviluppata in Rust. Mira a semplificare l'organizzazione quotidiana grazie ad algoritmi di ordinamento automatico. Il progetto comprende anche un sito di presentazione e download.",
    tagAlgorithms: "Algoritmi",
    projectLink: "Vedi i dettagli",
    projectWordAlt: "Interfaccia del risolutore di griglie di parole",
    projectWordType: "Elaborazione immagini e IA",
    teamProject: "Progetto di gruppo",
    projectWordTitle: "Word Puzzle Solver",
    projectWordText: "Progetto che combina una rete neurale con un'interfaccia grafica. Mi sono occupato dell'interfaccia: rotazione e conversione in scala di grigi dell'immagine, visualizzazione della griglia ed evidenziazione delle parole rilevate.",
    tagImageProcessing: "Elaborazione immagini",
    projectTribzAlt: "Schermata del videogioco Tribz",
    projectTribzType: "Videogioco",
    projectTribzTitle: "Tribz — city builder",
    projectTribzText: "Gioco gestionale sviluppato in C# in squadra. Il giocatore costruisce, organizza e difende il proprio villaggio. Ero responsabile dello sviluppo delle meccaniche di gioco in un progetto con vincoli degli utenti e organizzazione collettiva.",
    tagGameDesign: "Game design",
    tagTeamwork: "Lavoro di squadra",
    projectDroneAlt: "Immagine del progetto Automatik Drone",
    projectDroneType: "Prototipo embedded",
    projectDroneTitle: "Automatik Drone",
    projectDroneText: "Prototipo Python ideato per assistere gli arbitri di pallavolo. Il progetto utilizza input video e controllo del drone. Ho sviluppato la parte di controllo e lavorato su diverse modalità di comando.",
    tagCamera: "Videocamera",
    tagControl: "Controllo",
    projectEtriAlt: "Locandina del progetto e-Tri",
    projectEtriType: "Applicazione ecosostenibile",
    projectEtriTitle: "e-Tri",
    projectEtriText: "Applicazione creata per aiutare gli utenti a differenziare i rifiuti. Sviluppata in Python e poi adattata ad Android, identifica la categoria del rifiuto e mostra i punti di raccolta. Il progetto ha partecipato al Trophée NSI nella categoria ecologia.",
    tagMap: "Cartografia",
    tagEcoDesign: "Eco-design",
    experienceEyebrow: "Il mio percorso",
    experienceTitle: "Esperienze",
    experienceIntro: "Esperienze professionali, internazionali e di volontariato che hanno rafforzato precisione, adattabilità e spirito di squadra.",
    experienceDateOne: "Tirocinio di 3 mesi + extra",
    experienceTypeOne: "Cucina professionale",
    experienceDateChaumiere: "2021 · 1 settimana",
    experienceJobChaumiere: "Cuoco — La Chaumière, Nouméa, Nuova Caledonia",
    experienceBodyChaumiere: "La mia prima esperienza in una cucina professionale, in una brasserie che fa anche catering: ho imparato a conciliare servizio in sala e produzione per il catering.",
    experienceJobOne: "Cuoco — Presidenza dell'Assemblea nazionale francese",
    experienceBodyOne: "Preparazione e impiattamento di pasti e ricevimenti in un ambiente esigente. Questi incarichi sviluppano precisione, rigore, gestione del tempo e coordinamento in brigata.",
    experienceAssemblyAlt: "Piatti preparati all'Assemblea nazionale francese",
    experienceDateTwo: "2024 · 1 mese",
    experienceTypeTwo: "Esperienza internazionale",
    experienceJobTwo: "Cuoco e cameriere — La Brasserie, Bozeman USA",
    experienceBodyTwo: "Immersione professionale negli Stati Uniti in un ristorante francese, sia in cucina sia in sala. Questa esperienza mi ha permesso di lavorare in inglese, diventare più versatile e adattarmi a una nuova squadra e a diverse abitudini di lavoro.",
    experienceBozemanAlt: "Adrien in cucina a La Brasserie di Bozeman",
    today: "Oggi",
    experienceTypeThree: "Animazione",
    experienceJobThree: "Animatore BAFA — Maison de la Gendarmerie",
    experienceBodyThree: "Supervisione di soggiorni e ostelli: ideazione di attività, gestione della vita quotidiana, sicurezza dei partecipanti e creazione di una buona dinamica di gruppo.",
    experienceAnimationAlt: "Squadra di animazione durante un soggiorno",
    experienceDateFour: "Impegno volontario",
    experienceTypeFour: "Volontariato associativo",
    experienceJobFour: "Scouts et Guides de France",
    experienceBodyFour: "Partecipazione a progetti educativi e collettivi basati sul volontariato e sulla trasmissione. Questo impegno rafforza leadership, organizzazione, comunicazione e lavoro di squadra.",
    experienceScoutsAlt: "Attività di gruppo con Scouts et Guides de France",
    interestsEyebrow: "Oltre il codice",
    interestsTitle: "Interessi",
    interestsIntro: "Due passioni che sviluppano perseveranza, autocontrollo, autonomia e desiderio di trasmettere.",
    interestMuayAlt: "Adrien Le Berre durante una gara di Muay Thai",
    interestOneKicker: "Dal 2021 · Competizione",
    interestOneTitle: "Muay Thai",
    interestOneText: "Pratico Muay Thai dal 2021 e ho iniziato a gareggiare dopo diverse pause dovute a infortuni. Mi alleno al MB Fight dell'Università Jussieu di Parigi. Questa disciplina mi insegna perseveranza, autocontrollo e capacità di progredire nelle difficoltà.",
    interestSailingAlt: "Adrien Le Berre in navigazione su una barca a vela",
    interestTwoKicker: "Dal 2023 · Istruzione",
    interestTwoTitle: "Vela",
    interestTwoText: "Ho scoperto la vela nell'agosto 2023 durante una navigazione di due settimane nella Bretagna meridionale. Ora sono qualificato per seguire principianti e bambini, possiedo la patente nautica e sto preparando un nuovo diploma. Mi piace unire vela, animazione e trasmissione.",
    documentsEyebrow: "Per approfondire",
    documentsTitle: "Documenti",
    documentsIntro: "Consulta una presentazione dettagliata del mio percorso e il mio CV aggiornato.",
    portfolioDocumentType: "15 pagine · PDF",
    portfolioDocumentTitle: "Portfolio dettagliato",
    portfolioDocumentText: "Progetti, esperienze e interessi in dettaglio, con indice cliccabile. Disponibile nella lingua del sito.",
    openPortfolio: "Apri il portfolio",
    cvDocumentType: "1 pagina · PDF",
    cvDocumentTitle: "Curriculum vitae",
    cvDocumentText: "Il mio CV aggiornato su una pagina, nella lingua del sito.",
    cvComingSoon: "Apri il CV",
    contactEyebrow: "Parliamone",
    contactTitle: "Hai un progetto in mente?",
    contactText: "Sono disponibile per parlare di un progetto, un'opportunità o un'esperienza internazionale.",
    contactEmail: "Scrivimi via e-mail",
    contactPhone: "Chiamami",
    projectPoolAlt: "Home page del sito PoolNight",
    projectPoolType: "Sito associativo",
    projectPoolTitle: "PoolNight — il sito del club di biliardo dell'EPITA",
    projectPoolText: "Sito interattivo per PoolNight, il club di biliardo e giochi da bar dell'EPITA: tornei, sfide e classifiche dei giocatori. Come tesoriere e responsabile marketing, progetto il sito e gestisco l'account Instagram del club.",
    projectSiteLink: "Visita il sito",
    tagWeb: "Web",
    experienceChaumiereAlt: "Ingresso del ristorante La Chaumière a Nouméa",
    backToTop: "Torna in alto ↑"
  },

  es: {
    pageTitle: "Adrien Le Berre — Portfolio",
    pageDescription: "Portfolio de Adrien Le Berre, estudiante de ingeniería informática en EPITA.",
    skipLink: "Ir al contenido",
    navAbout: "Sobre mí",
    navSkills: "Habilidades",
    navProjects: "Proyectos",
    navExperience: "Experiencias",
    navInterests: "Intereses",
    navDocuments: "Documentos",
    navContact: "Contacto",
    menuOpen: "Abrir el menú",
    menuClose: "Cerrar el menú",
    mainNavigation: "Navegación principal",
    languageChoice: "Selección de idioma",
    availableLanguages: "Idiomas disponibles",
    heroEyebrow: "Estudiante de ingeniería informática",
    heroHello: "Hola, soy",
    heroIntro: "Como estudiante de EPITA, desarrollo proyectos que combinan programación, interfaces, inteligencia artificial y trabajo en equipo.",
    heroProjects: "Descubrir mis proyectos",
    heroDocuments: "Ver mis documentos",
    heroLocation: "París, Francia",
    heroAvailability: "Disponible para prácticas y experiencias internacionales",
    quickInformation: "Información rápida",
    portraitArea: "Retrato de Adrien Le Berre",
    floatingCode: "Desarrollo",
    floatingCreate: "Creatividad",
    aboutEyebrow: "Quién soy",
    aboutTitle: "Sobre mí",
    aboutLead: "Soy Adrien Le Berre, estudiante de ingeniería informática en EPITA, París.",
    aboutBody: "Curioso y versátil, me interesan distintas áreas de la informática. Mis proyectos me han permitido trabajar con interfaces gráficas, videojuegos, aplicaciones, procesamiento de imágenes y algoritmos, desarrollando al mismo tiempo mi autonomía y mi capacidad de colaboración.",
    aboutFactOneLabel: "Formación",
    aboutFactOneValue: "Ingeniería informática — EPITA",
    aboutFactTwoLabel: "Enfoque",
    aboutFactTwoValue: "Creativo y colaborativo",
    aboutFactThreeLabel: "Objetivo",
    aboutFactThreeValue: "Crear soluciones útiles",
    skillsEyebrow: "Lo que domino",
    skillsTitle: "Habilidades y tecnologías",
    skillsIntro: "Habilidades técnicas y personales desarrolladas mediante proyectos individuales y colectivos.",
    skillDevTitle: "Desarrollo",
    skillDevText: "Programación de sistemas y orientada a objetos, algoritmos, interfaces y desarrollo web.",
    skillToolsTitle: "Herramientas y entornos",
    skillToolsText: "Herramientas adaptadas al desarrollo, la colaboración y la creación de contenidos visuales.",
    skillSoftTitle: "Habilidades personales",
    skillSoftText: "Comunicación, adaptación, organización, transmisión de conocimientos y trabajo en equipo.",
    tagTeam: "Equipo",
    tagLeadership: "Liderazgo",
    tagAdaptation: "Adaptación",
    tagCreativity: "Creatividad",
    projectsEyebrow: "Lo que he construido",
    projectsTitle: "Proyectos y logros",
    projectsIntro: "Seis proyectos que muestran mi evolución, de Python a Rust, pasando por los videojuegos, el procesamiento de imagen y la web.",
    projectTaskAlt: "Interfaz del proyecto Task-List",
    projectTaskType: "Aplicación de escritorio",
    inProgress: "En curso",
    projectTaskTitle: "Task-List — organización inteligente",
    projectTaskText: "Aplicación de gestión de tareas desarrollada en Rust. Busca facilitar la organización diaria mediante algoritmos de clasificación automática. El proyecto también incluye una web de presentación y descarga.",
    tagAlgorithms: "Algoritmos",
    projectLink: "Ver detalles",
    projectWordAlt: "Interfaz del solucionador de sopa de letras",
    projectWordType: "Procesamiento de imágenes e IA",
    teamProject: "Proyecto en equipo",
    projectWordTitle: "Word Puzzle Solver",
    projectWordText: "Proyecto que combina una red neuronal con una interfaz gráfica. Me encargué de la interfaz: rotación y conversión a escala de grises, visualización de la cuadrícula y resaltado de las palabras detectadas.",
    tagImageProcessing: "Procesamiento de imágenes",
    projectTribzAlt: "Captura del videojuego Tribz",
    projectTribzType: "Videojuego",
    projectTribzTitle: "Tribz — city builder",
    projectTribzText: "Juego de gestión desarrollado en C# en equipo. El jugador construye, organiza y defiende su aldea. Fui responsable del desarrollo de las mecánicas de juego en un proyecto con restricciones de usuarios y organización colectiva.",
    tagGameDesign: "Diseño de juego",
    tagTeamwork: "Trabajo en equipo",
    projectDroneAlt: "Imagen del proyecto Automatik Drone",
    projectDroneType: "Prototipo embebido",
    projectDroneTitle: "Automatik Drone",
    projectDroneText: "Prototipo en Python diseñado para ayudar a los árbitros de voleibol. El proyecto utiliza la entrada de cámara y el control de un dron. Desarrollé la parte de control y trabajé en varios modos de manejo.",
    tagCamera: "Cámara",
    tagControl: "Control",
    projectEtriAlt: "Cartel del proyecto e-Tri",
    projectEtriType: "Aplicación ecológica",
    projectEtriTitle: "e-Tri",
    projectEtriText: "Aplicación creada para ayudar a los usuarios a clasificar sus residuos. Desarrollada en Python y adaptada posteriormente a Android, identifica la categoría del residuo y muestra los puntos de recogida. El proyecto participó en el Trophée NSI en la categoría de ecología.",
    tagMap: "Cartografía",
    tagEcoDesign: "Ecodiseño",
    experienceEyebrow: "Mi trayectoria",
    experienceTitle: "Experiencias",
    experienceIntro: "Experiencias profesionales, internacionales y de voluntariado que reforzaron mi rigor, adaptabilidad y espíritu de equipo.",
    experienceDateOne: "Prácticas de 3 meses + extras",
    experienceTypeOne: "Cocina profesional",
    experienceDateChaumiere: "2021 · 1 semana",
    experienceJobChaumiere: "Cocinero — La Chaumière, Numea, Nueva Caledonia",
    experienceBodyChaumiere: "Mi primera experiencia en una cocina profesional, en una brasserie que también hace catering: aprendí a compaginar el servicio en sala y la producción de catering.",
    experienceJobOne: "Cocinero — Presidencia de la Asamblea Nacional francesa",
    experienceBodyOne: "Preparación y emplatado de comidas y recepciones en un entorno exigente. Estas misiones desarrollan el rigor, la precisión, la gestión del tiempo y la coordinación dentro del equipo de cocina.",
    experienceAssemblyAlt: "Platos preparados en la Asamblea Nacional francesa",
    experienceDateTwo: "2024 · 1 mes",
    experienceTypeTwo: "Experiencia internacional",
    experienceJobTwo: "Cocinero y camarero — La Brasserie, Bozeman USA",
    experienceBodyTwo: "Inmersión profesional en Estados Unidos en un restaurante francés, tanto en cocina como en sala. Esta experiencia me permitió trabajar en inglés, ganar versatilidad y adaptarme a un nuevo equipo y a otras formas de trabajo.",
    experienceBozemanAlt: "Adrien trabajando en la cocina de La Brasserie en Bozeman",
    today: "Actualidad",
    experienceTypeThree: "Animación",
    experienceJobThree: "Monitor BAFA — Maison de la Gendarmerie",
    experienceBodyThree: "Supervisión de campamentos y albergues: diseño de actividades, acompañamiento de la vida cotidiana, seguridad de los participantes y creación de una buena dinámica de grupo.",
    experienceAnimationAlt: "Equipo de animación durante un campamento",
    experienceDateFour: "Compromiso voluntario",
    experienceTypeFour: "Voluntariado asociativo",
    experienceJobFour: "Scouts et Guides de France",
    experienceBodyFour: "Participación en proyectos educativos y colectivos basados en el voluntariado y la transmisión. Este compromiso refuerza mi liderazgo, organización, comunicación y trabajo en equipo.",
    experienceScoutsAlt: "Actividad colectiva con Scouts et Guides de France",
    interestsEyebrow: "Más allá del código",
    interestsTitle: "Intereses",
    interestsIntro: "Dos pasiones que desarrollan perseverancia, autocontrol, autonomía y deseo de compartir conocimientos.",
    interestMuayAlt: "Adrien Le Berre durante una competición de Muay Thai",
    interestOneKicker: "Desde 2021 · Competición",
    interestOneTitle: "Muay Thai",
    interestOneText: "Practico Muay Thai desde 2021 y empecé a competir después de varias pausas por lesiones. Entreno en MB Fight, en la Universidad de Jussieu de París. Esta disciplina me aporta perseverancia, autocontrol y capacidad para seguir progresando ante las dificultades.",
    interestSailingAlt: "Adrien Le Berre navegando en un velero",
    interestTwoKicker: "Desde 2023 · Enseñanza",
    interestTwoTitle: "Vela",
    interestTwoText: "Descubrí la vela en agosto de 2023 durante una navegación de dos semanas por el sur de Bretaña. Actualmente estoy cualificado para supervisar a principiantes y niños, tengo licencia náutica y preparo una nueva titulación. Me gusta especialmente combinar navegación, animación y transmisión.",
    documentsEyebrow: "Para saber más",
    documentsTitle: "Documentos",
    documentsIntro: "Consulta una presentación detallada de mi trayectoria y, próximamente, mi CV actualizado.",
    portfolioDocumentType: "15 páginas · PDF",
    portfolioDocumentTitle: "Portfolio detallado",
    portfolioDocumentText: "Proyectos, experiencia e intereses en detalle, con índice interactivo. Disponible en el idioma de la web.",
    openPortfolio: "Abrir el portfolio",
    cvDocumentType: "1 página · PDF",
    cvDocumentTitle: "Currículum vítae",
    cvDocumentText: "Mi CV actualizado en una página, en el idioma de la web.",
    cvComingSoon: "Abrir el CV",
    contactEyebrow: "Hablemos",
    contactTitle: "¿Tienes un proyecto en mente?",
    contactText: "Estoy disponible para hablar de un proyecto, una oportunidad o una experiencia internacional.",
    contactEmail: "Escribirme por correo",
    contactPhone: "Llamarme",
    projectPoolAlt: "Página de inicio de la web de PoolNight",
    projectPoolType: "Web asociativa",
    projectPoolTitle: "PoolNight — la web del club de billar de EPITA",
    projectPoolText: "Web interactiva para PoolNight, el club de billar y juegos de bar de EPITA: torneos, retos y clasificaciones de jugadores. Como tesorero y responsable de marketing, diseño la web y gestiono la cuenta de Instagram del club.",
    projectSiteLink: "Visitar la web",
    tagWeb: "Web",
    experienceChaumiereAlt: "Fachada del restaurante La Chaumière en Numea",
    backToTop: "Volver arriba ↑"
  }
};

const languageLabels = { fr: "FR", en: "EN", it: "IT", es: "ES" };
const languageSwitcher = document.querySelector(".language-switcher");
const languageButton = document.querySelector(".language-current");
const languageCode = document.querySelector(".language-code");
const languageOptions = document.querySelectorAll("[data-lang]");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");
let currentLanguage = "fr";

function safeStorageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch (_) {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (_) {
    // The site still works when localStorage is blocked or when opened locally.
  }
}

function updateMenuLabel() {
  const isOpen = mainNav.classList.contains("open");
  const dictionary = translations[currentLanguage] || translations.fr;
  menuToggle.setAttribute("aria-label", isOpen ? dictionary.menuClose : dictionary.menuOpen);
}

function setLanguage(language) {
  const selected = translations[language] ? language : "fr";
  const dictionary = translations[selected];
  currentLanguage = selected;

  document.documentElement.lang = selected;
  document.title = dictionary.pageTitle;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", dictionary.pageDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key] !== undefined) element.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (dictionary[key] !== undefined) element.setAttribute("alt", dictionary[key]);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (dictionary[key] !== undefined) element.setAttribute("aria-label", dictionary[key]);
  });

  // Language-specific PDFs: data-doc="cv" or "portfolio", optional data-page for a portfolio section.
  document.querySelectorAll("[data-doc]").forEach((link) => {
    const code = selected.toUpperCase();
    const file = link.dataset.doc === "cv"
      ? `assets/documents/cv/CV-Adrien-Le-Berre-${code}.pdf`
      : `assets/documents/portfolio/Portfolio-Adrien-Le-Berre-${code}.pdf`;
    link.setAttribute("href", link.dataset.page ? `${file}#page=${link.dataset.page}` : file);
  });

  languageCode.textContent = languageLabels[selected];
  languageOptions.forEach((option) => {
    option.setAttribute("aria-selected", String(option.dataset.lang === selected));
  });

  updateMenuLabel();
  safeStorageSet("portfolio-language", selected);
}

languageButton.addEventListener("click", () => {
  const isOpen = languageSwitcher.classList.toggle("open");
  languageButton.setAttribute("aria-expanded", String(isOpen));
});

languageOptions.forEach((option) => {
  option.addEventListener("click", () => {
    setLanguage(option.dataset.lang);
    languageSwitcher.classList.remove("open");
    languageButton.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (event) => {
  if (!languageSwitcher.contains(event.target)) {
    languageSwitcher.classList.remove("open");
    languageButton.setAttribute("aria-expanded", "false");
  }
});

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
  updateMenuLabel();
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
    updateMenuLabel();
  });
});

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

const sections = document.querySelectorAll("main section[id]");
if ("IntersectionObserver" in window) {
  const navigationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px" });

  sections.forEach((section) => navigationObserver.observe(section));
}

const yearElement = document.getElementById("current-year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

setLanguage(safeStorageGet("portfolio-language") || "fr");
