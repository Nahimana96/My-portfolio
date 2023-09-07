// Crazee Burger
import LoginPage from "../assets/projects/CrazeeBurger/LoginPage.png";
import AdminMode from "../assets/projects/CrazeeBurger/mode admin.png";
import Basket from "../assets/projects/CrazeeBurger/Panier.png";
import ProductPage from "../assets/projects/CrazeeBurger/ProductPage.png";
import StockEmpty from "../assets/projects/CrazeeBurger/Stock epuisé.png";
// Sophie photographe
import Home from "../assets/projects/Sophie/Accueil.png";
import AddPhoto from "../assets/projects/Sophie/Ajouter.png";
import Modify from "../assets/projects/Sophie/Modifier.png";
import LoginPage1 from "../assets/projects/Sophie/Login.png";
// Kasa site de location immobilière
import Kasa from "../assets/projects/Kasa/kasa.png";
import Scroll from "../assets/projects/Kasa/Scroll.png";
import About from "../assets/projects/Kasa/Apropos.png";
import ProductPage1 from "../assets/projects/Kasa/FicheProduit.png";
// Booki
import Booki from "../assets/projects/Booki/Booki.png";
import Booki2 from "../assets/projects/Booki/Booki2.png";
//photo de couverture
import burger from "../assets/projects/CrazeeBurger/LoginPage.png";
import kasa from "../assets/projects/Kasa/kasa.png";
import sophie from "../assets/projects/Sophie/Accueil.png";
import booki from "../assets/projects/Booki/Booki.png";
export const projects = [
  {
    id: 1,
    title: "Crazee Burger",
    description: {
      title: "Crazee Burger",
      text: `Ce site web est une simulation d’un site de commande de nourriture, il a été développé avec React. 
  L’objectif de ce projet était de développer un site web comme dans les entreprises en appliquant un système de ticket par feature (méthodologie agile).
  `,
      tools: "Trello, Git, Vercel, React icons, Styled component",
    },
    images: [LoginPage, AdminMode, Basket, ProductPage, StockEmpty],
    cover: burger,
    githubLink: "https://github.com/Nahimana96/crazee-burger.git",
  },
  {
    id: 2,
    title: "Sophie",
    description: {
      title: "Portfolio d’une photographe",
      text: `Ce projet consiste à concevoir un site portfolio d’une photographe. Il s’agit de développer un interface utilisateur dynamique qui permet d’afficher, d’ajouter et de supprimer les photos dans la galerie. 
  Il a été développé en utilisant la méthodologie agile, car les tâches qui me sont attribuées étaient sur l’outils kanban. Sur ce dernier on pouvait voir les tâches à faire et celles qui ont déjà été terminées durant les sprints précédents.
 `,
      tools: "Vanilla Js, Css, Kanban, Swagger",
    },
    images: [Home, Modify, AddPhoto, LoginPage1],
    cover: sophie,
    githubLink:
      "https://github.com/Nahimana96/projet-3-creation-d-un-portfolio-dynamique.git",
  },
  {
    id: 3,
    title: "Kasa",
    description: {
      title: "Kasa",
      text: `Ce projet consiste à mettre à jour le site Kasa, qui est un site de location d’appartements entre particuliers basé en France. Le but est de passer à une stack complète en Javascript avec React pour le côté front-end et Node.Js pour le Backend.
  En tant que développeur front end je me suis occupé de la partie interface utilisateur en suivant les différentes maquettes que le designer a mis en place sur Figma mais aussi en prenant en compte des fonctionnalités attendues sur certaines parties du site.
  `,
      tools: "Create-react-app(CRA), React Router, Sass",
    },
    images: [Kasa, Scroll, ProductPage1, About],
    cover: kasa,
    githubLink:
      "https://github.com/Nahimana96/Creez-une-application-web-de-location-immobiliere-avec-React.git",
  },
  {
    id: 4,
    title: "Booki",
    description: {
      title: "Booki",
      text: "Il s’agissait de développer un site statique  qui permet aux usagers de trouver des hébergements et des activités dans la ville de leur choix. Le but était de se familiariser avec Html et Css tout en appliquant les bonnes pratiques telles que les balises sémantique, le layout (découpage de la maquette) et les validateurs du code. ",
      tools: "Html, Css, W3C",
    },
    images: [Booki, Booki2],
    cover: booki,
    githubLink:
      "https://github.com/Nahimana96/Projet-2-Creation-d-un-site-de-vacance.git",
  },
];
