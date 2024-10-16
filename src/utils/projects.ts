export interface Project {
  id: number;
  imgSrc: string;
  altText: { [key: string]: string };
  title: { [key: string]: string };
  location: { [key: string]: string };
  images: string[];
  description: { [key: string]: string };
}

export const projects: Project[] = [
  {
    id: 0,
    imgSrc: require("@/assets/img/Chumbe.png"),
    altText: {
      en: "Social Hall",
      es: "Salón Social",
    },
    title: {
      en: "Social Hall",
      es: "Salón social",
    },
    location: {
      en: "Popayán, Cauca. Colombia (2021)",
      es: "Popayán, Cauca. Colombia (2021)",
    },
    images: [
      require("@/assets/img/Chumbe.png"),
      require("@/assets/img/Chumbe.png"),
      require("@/assets/img/Chumbe.png"),
      require("@/assets/img/Chumbe.png"),
      require("@/assets/img/Chumbe.png"),
    ],
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      es: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
  },
  {
    id: 1,
    imgSrc: require("@/assets/img/casa concha.png"),
    altText: {
      en: "Casa Concha",
      es: "Casa Concha",
    },
    title: {
      en: "Casa Concha",
      es: "Casa Concha",
    },
    location: {
      en: "Popayán, Cauca. Colombia (2020)",
      es: "Popayán, Cauca. Colombia (2020)",
    },
    images: [
      require("@/assets/img/casa concha.png"),
      require("@/assets/img/casa concha.png"),
      require("@/assets/img/casa concha.png"),
      require("@/assets/img/casa concha.png"),
      require("@/assets/img/casa concha.png"),
    ],
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      es: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
  },
  {
    id: 2,
    imgSrc: require("@/assets/img/Patio vivas.png"),
    altText: {
      en: "Patio Vivas",
      es: "Patio Vivas",
    },
    title: {
      en: "Patio Vivas",
      es: "Patio Vivas",
    },
    location: {
      en: "Popayán, Cauca. Colombia (2022)",
      es: "Popayán, Cauca. Colombia (2022)",
    },
    images: [
      require("@/assets/img/Patio vivas.png"),
      require("@/assets/img/Patio vivas.png"),
      require("@/assets/img/Patio vivas.png"),
      require("@/assets/img/Patio vivas.png"),
      require("@/assets/img/Patio vivas.png"),
    ],
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      es: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
  },
  {
    id: 3,
    imgSrc: require("@/assets/img/puertas de oro.png"),
    altText: {
      en: "Golden Doors",
      es: "Puertas de Oro",
    },
    title: {
      en: "Golden Doors",
      es: "Puertas de Oro",
    },
    location: {
      en: "Totoró, Cauca. Colombia (2022)",
      es: "Totoró, Cauca. Colombia (2022)",
    },
    images: [
      require("@/assets/img/puertas de oro.png"),
      require("@/assets/img/Patio vivas.png"),
      require("@/assets/img/El refugio de los sueños.png"),
      require("@/assets/img/puertas de oro.png"),
      require("@/assets/img/puertas de oro.png"),
    ],
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      es: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
  },
  {
    id: 4,
    imgSrc: require("@/assets/img/El refugio de los sueños.png"),
    altText: {
      en: "Refuge House",
      es: "Casa Refugio",
    },
    title: {
      en: "Refuge House",
      es: "Casa Refugio",
    },
    location: {
      en: "Popayán, Cauca. Colombia (2022)",
      es: "Popayán, Cauca. Colombia (2022)",
    },
    images: [
      require("@/assets/img/El refugio de los sueños.png"),
      require("@/assets/img/El refugio de los sueños.png"),
      require("@/assets/img/El refugio de los sueños.png"),
      require("@/assets/img/El refugio de los sueños.png"),
      require("@/assets/img/El refugio de los sueños.png"),
    ],
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      es: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
  },
  {
    id: 5,
    imgSrc: require("@/assets/img/Monteclaro.png"),
    altText: {
      en: "Monteclaro",
      es: "Monteclaro",
    },
    title: {
      en: "Monteclaro",
      es: "Monteclaro",
    },
    location: {
      en: "Totoró, Cauca. Colombia (2020)",
      es: "Totoró, Cauca. Colombia (2020)",
    },
    images: [
      require("@/assets/img/Monteclaro.png"),
      require("@/assets/img/Monteclaro.png"),
      require("@/assets/img/Monteclaro.png"),
      require("@/assets/img/Monteclaro.png"),
      require("@/assets/img/Monteclaro.png"),
    ],
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      es: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
  },
  {
    id: 6,
    imgSrc: require("@/assets/img/Parque de la salud.png"),
    altText: {
      en: "Health Park",
      es: "Gran parque de la salud",
    },
    title: {
      en: "Health Park",
      es: "Gran parque de la salud",
    },
    location: {
      en: "Popayán, Cauca. Colombia (2022)",
      es: "Popayán, Cauca. Colombia (2022)",
    },
    images: [
      require("@/assets/img/Parque de la salud.png"),
      require("@/assets/img/Parque de la salud.png"),
      require("@/assets/img/Parque de la salud.png"),
      require("@/assets/img/Parque de la salud.png"),
      require("@/assets/img/Parque de la salud.png"),
    ],
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      es: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
  },
  {
    id: 7,
    imgSrc: require("@/assets/img/Quinta Luna.png"),
    altText: {
      en: "Quinta Luna",
      es: "Quinta Luna",
    },
    title: {
      en: "Quinta Luna",
      es: "Quinta Luna",
    },
    location: {
      en: "Tobia, Cundinamarca. Colombia (2024)",
      es: "Tobia, Cundinamarca. Colombia (2024)",
    },
    images: [
      require("@/assets/img/Quinta Luna.png"),
      require("@/assets/img/Quinta Luna.png"),
      require("@/assets/img/Quinta Luna.png"),
      require("@/assets/img/Quinta Luna.png"),
      require("@/assets/img/Quinta Luna.png"),
    ],
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      es: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
  },
  {
    id: 8,
    imgSrc: require("@/assets/img/pool house.png"),
    altText: {
      en: "Pool House",
      es: "Casa de piscina",
    },
    title: {
      en: "Pool House",
      es: "Casa de piscina",
    },
    location: {
      en: "Challex, France (2024)",
      es: "Challex, Francia (2024)",
    },
    images: [
      require("@/assets/img/pool house.png"),
      require("@/assets/img/pool house.png"),
      require("@/assets/img/pool house.png"),
      require("@/assets/img/pool house.png"),
      require("@/assets/img/pool house.png"),
    ],
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      es: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
  },
  {
    id: 9,
    imgSrc: require("@/assets/img/chalet frances.png"),
    altText: {
      en: "Chalet",
      es: "Chalet",
    },
    title: {
      en: "Chalet",
      es: "Chalet",
    },
    location: {
      en: "Challex, France (2020)",
      es: "Challex, Francia (2020)",
    },
    images: [
      require("@/assets/img/chalet frances.png"),
      require("@/assets/img/chalet frances.png"),
      require("@/assets/img/chalet frances.png"),
      require("@/assets/img/chalet frances.png"),
      require("@/assets/img/chalet frances.png"),
    ],
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      es: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
  },
  {
    id: 10,
    imgSrc: require("@/assets/img/Raccard.png"),
    altText: {
      en: "Raccard",
      es: "Raccard",
    },
    title: {
      en: "Raccard",
      es: "Raccard",
    },
    location: {
      en: "Ayer, Switzerland (2024)",
      es: "Ayer, Suiza (2024)",
    },
    images: [
      require("@/assets/img/Raccard.png"),
      require("@/assets/img/Raccard.png"),
      require("@/assets/img/Raccard.png"),
      require("@/assets/img/Raccard.png"),
      require("@/assets/img/Raccard.png"),
    ],
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      es: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
  },
  {
    id: 11,
    imgSrc: require("@/assets/img/Hilario.png"),
    altText: {
      en: "Hilario",
      es: "Hilario",
    },
    title: {
      en: "Hilario",
      es: "Hilario",
    },
    location: {
      en: "Colombia (2022)",
      es: "Colombia (2022)",
    },
    images: [
      require("@/assets/img/Hilario.png"),
      require("@/assets/img/Hilario.png"),
      require("@/assets/img/Hilario.png"),
      require("@/assets/img/Hilario.png"),
      require("@/assets/img/Hilario.png"),
    ],
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      es: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
  },
  {
    id: 12,
    imgSrc: require("@/assets/img/apto pintuco.png"),
    altText: {
      en: "Pintuco",
      es: "Pintuco",
    },
    title: {
      en: "Pintuco",
      es: "Pintuco",
    },
    location: {
      en: "Colombia (2022)",
      es: "Colombia (2022)",
    },
    images: [
      require("@/assets/img/apto pintuco.png"),
      require("@/assets/img/apto pintuco.png"),
      require("@/assets/img/apto pintuco.png"),
      require("@/assets/img/apto pintuco.png"),
      require("@/assets/img/apto pintuco.png"),
    ],
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      es: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
  },
  {
    id: 13,
    imgSrc: require("@/assets/img/Casa tertulia.png"),
    altText: {
      en: "Casa Tertulia",
      es: "Casa Tertulia",
    },
    title: {
      en: "Casa Tertulia",
      es: "Casa Tertulia",
    },
    location: {
      en: "Popayán, Cauca. Colombia (2021)",
      es: "Popayán, Cauca. Colombia (2021)",
    },
    images: [
      require("@/assets/img/Casa tertulia.png"),
      require("@/assets/img/Casa tertulia.png"),
      require("@/assets/img/Casa tertulia.png"),
      require("@/assets/img/Casa tertulia.png"),
      require("@/assets/img/Casa tertulia.png"),
    ],
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      es: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
  },
  {
    id: 14,
    imgSrc: require("@/assets/img/spirala.png"),
    altText: {
      en: "Spirala",
      es: "Spirala",
    },
    title: {
      en: "Spirala",
      es: "Spirala",
    },
    location: {
      en: "Portugal (2020)",
      es: "Portugal (2020)",
    },
    images: [
      require("@/assets/img/spirala.png"),
      require("@/assets/img/spirala.png"),
      require("@/assets/img/spirala.png"),
      require("@/assets/img/spirala.png"),
      require("@/assets/img/spirala.png"),
    ],
    description: {
      en: "Team: Juanita Cuellar, María Barrero + Azuu",
      es: "Equipo: Juanita Cuellar, María Barrero + Azuu",
    },
  },
  {
    id: 15,
    imgSrc: require("@/assets/img/El hombre de maiz.png"),
    altText: {
      en: "Man of Corn",
      es: "Hombre de Maíz",
    },
    title: {
      en: "Man of Corn",
      es: "Hombre de Maíz",
    },
    location: {
      en: "Honda, Tolima. Colombia (2022)",
      es: "Honda, Tolima. Colombia (2022)",
    },
    images: [
      require("@/assets/img/El hombre de maiz.png"),
      require("@/assets/img/El hombre de maiz.png"),
      require("@/assets/img/El hombre de maiz.png"),
      require("@/assets/img/El hombre de maiz.png"),
      require("@/assets/img/El hombre de maiz.png"),
    ],
    description: {
      en: "Team: Maria Ardila, Felipe Langebaek + Azuu",
      es: "Equipo: Maria Ardila, Felipe Langebaek + Azuu",
    },
  },
  {
    id: 16,
    imgSrc: require("@/assets/img/Tomatera.png"),
    altText: {
      en: "Tomatera",
      es: "Tomatera",
    },
    title: {
      en: "Tomatera",
      es: "Tomatera",
    },
    location: {
      en: "Victoria, Caldas. Colombia (2023)",
      es: "Victoria, Caldas. Colombia (2023)",
    },
    images: [
      require("@/assets/img/Tomatera.png"),
      require("@/assets/img/Tomatera.png"),
      require("@/assets/img/Tomatera.png"),
      require("@/assets/img/Tomatera.png"),
      require("@/assets/img/Tomatera.png"),
    ],
    description: {
      en: "Team: Maria Ardila, Felipe Langebaek + Azuu",
      es: "Equipo: Maria Ardila, Felipe Langebaek + Azuu",
    },
  },
  {
    id: 17,
    imgSrc: require("@/assets/img/kurandza khanimambo.png"),
    altText: {
      en: "Kurandza Khanimambo",
      es: "Kurandza Khanimambo",
    },
    title: {
      en: "Kurandza Khanimambo",
      es: "Kurandza Khanimambo",
    },
    location: {
      en: "Mulungo, Mozambique (2022)",
      es: "Mulungo, Mozambique (2022)",
    },
    images: [
      require("@/assets/img/kurandza khanimambo.png"),
      require("@/assets/img/kurandza khanimambo.png"),
      require("@/assets/img/kurandza khanimambo.png"),
      require("@/assets/img/kurandza khanimambo.png"),
      require("@/assets/img/kurandza khanimambo.png"),
    ],
    description: {
      en: "Team: María Rojas, Paula Pinto + Azuu",
      es: "Equipo: María Rojas, Paula Pinto + Azuu",
    },
  },
  {
    id: 18,
    imgSrc: require("@/assets/img/casa roja.png"),
    altText: {
      en: "Red House",
      es: "Casa Roja",
    },
    title: {
      en: "Red House",
      es: "Casa Roja",
    },
    location: {
      en: "Totoró, Cauca. Colombia (2021)",
      es: "Totoró, Cauca. Colombia (2021)",
    },
    images: [
      require("@/assets/img/casa roja.png"),
      require("@/assets/img/casa roja.png"),
      require("@/assets/img/casa roja.png"),
      require("@/assets/img/casa roja.png"),
      require("@/assets/img/casa roja.png"),
    ],
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      es: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
  },
  {
    id: 19,
    imgSrc: require("@/assets/img/Casa dorelo.png"),
    altText: {
      en: "Dorelo House",
      es: "Casa Dorelo",
    },
    title: {
      en: "Dorelo House",
      es: "Casa Dorelo",
    },
    location: {
      en: "Totoró, Cauca. Colombia (2021)",
      es: "Totoró, Cauca. Colombia (2021)",
    },
    images: [
      require("@/assets/img/Casa dorelo.png"),
      require("@/assets/img/Casa dorelo.png"),
      require("@/assets/img/Casa dorelo.png"),
      require("@/assets/img/Casa dorelo.png"),
      require("@/assets/img/Casa dorelo.png"),
    ],
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      es: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
  },
];
