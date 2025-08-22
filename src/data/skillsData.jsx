import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaProjectDiagram, FaRocket } from "react-icons/fa";
import { MdBugReport, MdPublic } from "react-icons/md";

export const skillsData = [
  {
    id: 1,
    title: "Intégration web avec HTML & CSS",
    icon: <FaHtml5 />,
    details: [
      "Intégrer du contenu conformément à une maquette avec HTML et CSS",
      "Implémenter une interface responsive avec HTML et CSS",
      "Respecter les normes d’accessibilité avec les balises HTML sémantiques",
    ],
  },
  {
    id: 2,
    title: "Gestion de projet et outils de développeurs",
    icon: <FaProjectDiagram />,
    details: [
      "Suivre le déroulement du projet grâce à un outil de gestion de projet",
      "Rédiger les spécifications techniques d’un projet web à partir de besoins fonctionnels",
      "Découper une fonctionnalité en tâches pour préparer le développement",
      "Présenter la solution technique",
      "Mettre en place une méthode de veille technologique",
      "Versionner son projet avec Git et GitHub",
      "Installer un environnement de développement front-end",
    ],
  },
  {
    id: 3,
    title: "Optimisation et debug",
    icon: <MdBugReport />,
    details: [
      "Optimiser les performances d’un site web",
      "Débugger un site web grâce à Chrome DevTools",
      "Rédiger un cahier de recette pour tester un site",
    ],
  },
  {
    id: 4,
    title: "Développement web avec JavaScript",
    icon: <FaJs />,
    details: [
      "Récupérer les données utilisateurs via des formulaires",
      "Manipuler les éléments du DOM avec JavaScript",
      "Gérer les événements utilisateurs avec JavaScript",
    ],
  },
  {
    id: 5,
    title: "React",
    icon: <FaReact />,
    details: [
      "Configurer la navigation entre les pages avec React Router",
      "Initialiser une application React avec Create React App ou Vite",
      "Créer des composants React dynamiques et réutilisables",
    ],
  },
  {
    id: 6,
    title: "Développement back-end avec NodeJS",
    icon: <FaNodeJs />,
    details: [
      "Implémenter un modèle logique de données conformément à la réglementation",
      "Mettre en œuvre des opérations CRUD",
      "Stocker des données de manière sécurisée",
    ],
  },
  {
    id: 7,
    title: "Publication d'un site web",
    icon: <MdPublic />,
    details: [
      "Déployer un site statique en ligne ",
    ],
  },
];
