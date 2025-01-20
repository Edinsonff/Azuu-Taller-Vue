export interface Project {
  id: number;
  imgSrc?: string;
  altText: { [key: string]: string };
  title: { [key: string]: string };
  location: { [key: string]: string };
  images: string[];
  team?: { [key: string]: string };
  description: { [key: string]: string };
}

export const projects: Project[] = [
  {
    id: 0,
    imgSrc: require("@/assets/img/Cerramiento social palacé/IMG_1.png"),
    altText: {
      en: "Social Hall",
      es: "Salón Social",
    },
    title: {
      en: "Salón social",
      es: "Salón social",
    },
    location: {
      en: "Popayán, Cauca. Colombia (2021)",
      es: "Popayán, Cauca. Colombia (2021)",
    },
    images: [
      require("@/assets/img/Cerramiento social palacé/IMG_1.png"),
      require("@/assets/img/Cerramiento social palacé/IMG_2.png"),
      require("@/assets/img/Cerramiento social palacé/IMG_3.png"),
      require("@/assets/img/Cerramiento social palacé/IMG_4.png"),
      require("@/assets/img/Cerramiento social palacé/IMG_5.png"),
      require("@/assets/img/Cerramiento social palacé/IMG_6.png"),
      require("@/assets/img/Cerramiento social palacé/IMG_7.png"),
    ],
    team: {
      en: "Team: Comunidad palacé + Azuu ",
      es: "Equipo: Comunidad palacé + Azuu ",
    },
    description: {
      en: "A fabric that protects the child and reintroduces the language of signs and identity that has been lost in the new generations of the Alto Palacé community, as well as its connection to the Nasa Indigenous people. The geometric symbols made by the community represent elements of their natural and spiritual environment, enveloping the wearer and fostering a connection to the land. Ultimately, this fabric becomes a symbol of balance, protection, and life.",
      es: "Un tejido que resguarda al hijo y vuelve a mostrar el lenguaje de signos e identidad que se ha ido perdiendo en las nuevas generaciones de la comunidad Alto Palacé y su conexión con los indígenas Nasa. Símbolos geométricos hechos por la comunidad y que representan aspectos de su entorno natural y espiritual van dando la vuelva, protegiendo al portador, creando una conexión con la tierra para convertirse en un símbolo de equilibrio, protección y vida.",
    },
  },
  {
    id: 1,
    imgSrc: require("@/assets/img/Chalet francia/IMG_1.png"),
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
      require("@/assets/img/Chalet francia/IMG_1.png"),
      require("@/assets/img/Chalet francia/IMG_2.png"),
      require("@/assets/img/Chalet francia/IMG_3.png"),
      require("@/assets/img/Chalet francia/IMG_4.png"),
      require("@/assets/img/Chalet francia/IMG_5.png"),
      require("@/assets/img/Chalet francia/IMG_6.png"),
      require("@/assets/img/Chalet francia/IMG_7.png"),
      require("@/assets/img/Chalet francia/IMG_8.png"),
      require("@/assets/img/Chalet francia/IMG_9.png"),
      require("@/assets/img/Chalet francia/IMG_10.png"),
      require("@/assets/img/Chalet francia/IMG_11.png"),
      require("@/assets/img/Chalet francia/IMG_12.png"),
      require("@/assets/img/Chalet francia/IMG_13.png"),
      require("@/assets/img/Chalet francia/IMG_14.png"),
    ],
    team: {
      en: "Team: Miel de Azuu",
      es: "Equipo: Miel de Azuu",
    },
    description: {
      en: "At the foot of the Swiss Alps, an expansion of an existing chalet was envisioned. This addition arose from a couple's increased visits to the site, whereby they need more space to complement the current layout. The expansion maintains the same design language as the original chalet, focusing on details, while also characterizing the new spaces with elements like natural light and its impact on the interior.",
      es: "En las faldas de los Alpes suizos se pensó en la ampliación de un chalet existente. Esta ampliación surge del incremento en la recurrencia de una pareja hacia el sitio, con lo cual se necesitaba más espacio que complementara el programa actual. Así, se crea una ampliación que mantiene ese mismo lenguaje del chalet original desde los detalles, pero no deja de lado el poder caracterizar los nuevos espacios con recursos como la luz natural y su impacto en el interior.",
    },
  },
  {
    id: 2,
    imgSrc: require("@/assets/img/Pool house/IMG_1.png"),
    altText: {
      en: "Pool House",
      es: "Pool House",
    },
    title: {
      en: "Pool House",
      es: "Pool House",
    },
    location: {
      en: "Challex, France (2024)",
      es: "Challex, Francia (2024)",
    },
    images: [
      require("@/assets/img/Pool house/IMG_1.png"),
      require("@/assets/img/Pool house/IMG_2.png"),
      require("@/assets/img/Pool house/IMG_3.png"),
      require("@/assets/img/Pool house/IMG_4.png"),
      require("@/assets/img/Pool house/IMG_5.png"),
    ],
    team: {
      en: "Team: Miel de Azuu ",
      es: "Equipo: Miel de Azuu ",
    },
    description: {
      en: "Based on a couple's idea of creating a relaxation space that opens to the pool, the “pool house” takes shape, a compact area with a straight forward design that fulfills this vision. The first level features a concrete aesthetic with direct access from the pool, while the second level consists of a wooden volume that connects to the main house through changes in elevation and the management of the topography. ",
      es: "A partir una idea de una pareja de tener un espacio de descanso y que funcione hacia la alberca, surge el pool house, un espacio compacto y un programa sencillo que responde a esa idea y mantiene una estética de concreto en su primer nivel con acceso directo desde la piscina, y su segundo nivel es un volumen de madera que se conecta con la casa principal gracias al cambio de altura y manejo en la topografía.",
    },
  },
  {
    id: 3,
    imgSrc: require("@/assets/img/Casa concha/IMG_1.png"),
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
      require("@/assets/img/Casa concha/IMG_1.png"),
      require("@/assets/img/Casa concha/IMG_2.png"),
      require("@/assets/img/Casa concha/IMG_3.png"),
      require("@/assets/img/Casa concha/IMG_4.png"),
      require("@/assets/img/Casa concha/IMG_5.png"),
    ],
    description: {
      en: "A house that gazes outward, reaching for the sun on cold days and seeking shelter and shade on sunny days. It brings the landscape indoors, the Puracé volcano, the trees, and the clouds. It embodies freedom and the outdoors, moving between cubes that connect at their corners, allowing for a panoramic view. A livable artifact, almost eager to wander, it reflects a couple in search of their home outside the city while staying connected to it.",
      es: "Una casa que mira hacia afuera, que sale en busca del sol para los días fríos, y en busca de refugio y sombra para los días soleados. Atrae a su interior el paisaje, el volcán Puracé, los árboles y las nubes. Demuestra libertad, el afuera, moviéndose entre cubos que se unen por sus esquinas y lo ven todo. Un artefacto habitable, deseoso incluso de caminar, que es el reflejo de una pareja Payanesa que busca su hogar fuera de la ciudad sin desconectarse de ella. ",
    },
  },
  {
    id: 4,
    imgSrc: require("@/assets/img/Puertas de oro/IMG_1.png"),
    altText: {
      en: "Puertas de Oro",
      es: "Puertas de Oro",
    },
    title: {
      en: "Puertas de Oro",
      es: "Puertas de Oro",
    },
    location: {
      en: "Totoró, Cauca. Colombia (2022)",
      es: "Totoró, Cauca. Colombia (2022)",
    },
    images: [
      require("@/assets/img/Puertas de oro/IMG_1.png"),
      require("@/assets/img/Puertas de oro/IMG_2.png"),
      require("@/assets/img/Puertas de oro/IMG_3.png"),
      require("@/assets/img/Puertas de oro/IMG_4.png"),
      require("@/assets/img/Puertas de oro/IMG_5.png"),
      require("@/assets/img/Puertas de oro/IMG_6.png"),
    ],
    description: {
      en: "In the municipal seat of Totoró, an urban planning project emerges from the rugged terrain, contributing to the town's expansion. Designed to blend with the landscape and minimize alteration, a path unfolds that both connects and transforms; sometimes is a passage, and other times it becomes a space for permanence. This design invites visitors to appreciate the area's mountainous geography, the low-hanging clouds, and to feel the cold air cascading down from the “Páramo Gabriel López”.",
      es: "En la cabecera Municipal de Totoró, en un terreno quebrado surge un proyecto de urbanismo que suma a la expansión urbana del pueblo. Buscando la acomodación al terreno y minimizando su alteración, se extiende un camino que conecta y cambia; a veces es paso y otras veces es permanencia. Así, invita a observar la geografía montañosa del territorio, las nubes bajas y sentir el paso del frio aire que baja del Páramo Gabriel López.",
    },
  },
  {
    id: 5,
    imgSrc: require("@/assets/img/Spirala/IMG_1.png"),
    altText: {
      en: "Spirala",
      es: "Spirala",
    },
    title: {
      en: "Spirala",
      es: "Spirala",
    },
    location: {
      en: "Spirala, Portugal (2020)",
      es: "Spirala, Portugal (2020)",
    },
    images: [
      require("@/assets/img/Spirala/IMG_1.png"),
      require("@/assets/img/Spirala/IMG_2.png"),
      require("@/assets/img/Spirala/IMG_3.png"),
      require("@/assets/img/Spirala/IMG_4.png"),
      require("@/assets/img/Spirala/IMG_5.png"),
      require("@/assets/img/Spirala/IMG_6.png"),
      require("@/assets/img/Spirala/IMG_7.png"),
      require("@/assets/img/Spirala/IMG_8.png"),
    ],
    team: {
      en: "Team: Juanita Cuellar + Maria Luisa Barrero + Azuu",
      es: "Equipo: Juanita Cuellar + Maria Luisa Barrero + Azuu",
    },
    description: {
      en: "A design competition for a community hall was based on the spiral, a geometric form that has no beginning or end, serving as the central organizing principle of the proposal, both in shape and function. Complemented by the use of wood, sustainable water practices, and strategies for light efficiency, this approach creates an environmentally valuable, architectural solution that enhances the sense of place.",
      es: "Concurso de diseño de un salón comunitario que está basado a partir de la espiral. Esta forma geométrica, que no tiene principio ni fin, es el ordenador principal de la propuesta, tanto en forma como en funcionamiento. Con esto, y complementado con el uso de la madera, practicas sustentables de uso del agua, y tácticas de eficiencia lumínica generan una propuesta de valor ambiental, arquitectónico y de sentido del lugar.",
    },
  },
  {
    id: 6,
    imgSrc: require("@/assets/img/Refugio de los sueños/IMG_1.png"),
    altText: {
      en: "Refuge House",
      es: "Casa Refugio",
    },
    title: {
      en: "Refugio de los sueños",
      es: "Refugio de los sueños",
    },
    location: {
      en: "Popayán, Cauca. Colombia (2022)",
      es: "Popayán, Cauca. Colombia (2022)",
    },
    images: [
      require("@/assets/img/Refugio de los sueños/IMG_1.png"),
      require("@/assets/img/Refugio de los sueños/IMG_2.png"),
      require("@/assets/img/Refugio de los sueños/IMG_3.png"),
      require("@/assets/img/Refugio de los sueños/IMG_4.png"),
    ],
    description: {
      en: "A space for someone dedicated to research, separate from the house, looking inward and up at the sky in search of stars and constellations. A wooden refuge that nurtures and protects dreams, a place for reflection in the courtyard, where he can stay there and observe.",
      es: "Un espacio para una persona dedicada a la investigación. Un lugar separado de la casa que mira hacia su propio interior y hacia el cielo en busca de estrellas y constelaciones. Un refugio de madera que crea y resguarda los sueños. lugar para reflexionar en el patio, quedarse allí y observar.",
    },
  },
  {
    id: 7,
    imgSrc: require("@/assets/img/Quinta luna/IMG_1.png"),
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
      require("@/assets/img/Quinta luna/IMG_1.png"),
      require("@/assets/img/Quinta luna/IMG_2.png"),
      require("@/assets/img/Quinta luna/IMG_3.png"),
      require("@/assets/img/Quinta luna/IMG_4.png"),
      require("@/assets/img/Quinta luna/IMG_5.png"),
      require("@/assets/img/Quinta luna/IMG_6.png"),
    ],
    team: {
      en: "Team: Xiomara Parra + Jeisson Campos + Laura Estevez + Diana Manrique + Federico Durán + Desing lab + Azuu",
      es: "Equipo: Xiomara Parra + Jeisson Campos + Laura Estevez + Diana Manrique + Federico Durán + Desing lab + Azuu",
    },
    description: {
      en: "In the mountains of Tobia, a project emerges that aims to transform and blend music with relaxation. The challenge is to turn a design into a buildable structure using lightweight materials and dry construction methods. Thus, Quinta Luna becomes a unique hospitality offering for diverse users.",
      es: "En las montañas de Tobia nace un proyecto que busca la transformación y combinación entre música y descanso. El reto de convertir un diseño en un elemento construible en estructura liviana y trabajo en seco. Así, Quinta Luna se convierte en una apuesta de hotelería diferente para usuarios distintos.",
    },
  },
  {
    id: 8,
    imgSrc: require("@/assets/img/Monteclaro/IMG_1.png"),
    altText: {
      en: "Monteclaro",
      es: "Monteclaro",
    },
    title: {
      en: "Monteclaro",
      es: "Monteclaro",
    },
    location: {
      en: "Totoró, Cauca. Colombia (2024)",
      es: "Totoró, Cauca. Colombia (2024)",
    },
    images: [
      require("@/assets/img/Monteclaro/IMG_1.png"),
      require("@/assets/img/Monteclaro/IMG_2.png"),
      require("@/assets/img/Monteclaro/IMG_3.png"),
      require("@/assets/img/Monteclaro/IMG_4.png"),
      require("@/assets/img/Monteclaro/IMG_5.png"),
      require("@/assets/img/Monteclaro/IMG_6.png"),
      require("@/assets/img/Monteclaro/IMG_7.png"),
      require("@/assets/img/Monteclaro/IMG_8.png"),
      require("@/assets/img/Monteclaro/IMG_9.png"),
    ],
    description: {
      en: "Among the oaks, two wooden circles stand - one covered and the other open - positioned beside the trunks and nestled closer to the oak leaves. Without disturbing the ground, their roots grow, emerging to create these two spaces for interaction and life.",
      es: "En medio de robles, y como ellos, se levantan dos círculos de madera, uno cubierto y otro descubierto, que busca el espacio para estar al lado de los troncos y más cerca del follaje de los robles. Sin alterar el terreno, crecen sus raíces, salen de la tierra y forman estos dos espacios de interacción para la vida.  ",
    },
  },
  {
    id: 9,
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
      require("@/assets/img/Patio vivas/IMG_1.png"),
      require("@/assets/img/Patio vivas/IMG_2.png"),
      require("@/assets/img/Patio vivas/IMG_3.png"),
      require("@/assets/img/Patio vivas/IMG_4.png"),
      require("@/assets/img/Patio vivas/IMG_5.png"),
    ],
    description: {
      en: "A versatile artifact. Initially designed for the childhood of two children, it will transform as they grow into something for their parents. This wooden shell allows for changes to its interior, creating new spaces based on interests, needs, or seasons. Thus, the initial scenario within the shell revolves around toys, play areas, and the fast growth of a child and the memories they create along the way.",
      es: "Un artefacto versátil. Primero para la etapa de infancia de dos niños, y cuando ellos crezcan, este se transformará en algo para sus padres. Un cascarón en madera que permite cambiar su interior y crear nuevos espacios según el interés, la necesidad o la época. Así, el primer escenario en el cascaron es a través del juguete, la malla, el rápido crecimiento de un niño y en su camino los recuerdos que construye.",
    },
  },
  {
    id: 10,
    altText: {
      en: "Gran parque de la salud",
      es: "Gran parque de la salud",
    },
    title: {
      en: "Parque de la salud",
      es: "Parque de la salud",
    },
    location: {
      en: "Popayán, Cauca. Colombia (2022)",
      es: "Popayán, Cauca. Colombia (2022)",
    },
    images: [
      require("@/assets/img/Parque de la Salud/IMG_1.png"),
      require("@/assets/img/Parque de la Salud/IMG_2.png"),
      require("@/assets/img/Parque de la Salud/IMG_3.png"),
      require("@/assets/img/Parque de la Salud/IMG_4.png"),
      require("@/assets/img/Parque de la Salud/IMG_5.png"),
      require("@/assets/img/Parque de la Salud/IMG_6.png"),
    ],
    description: {
      en: "With the need to serve and improve the access to the right to health in a secondary city like Popayán, a general plan for occupancy and functionality has been developed for a second-level hospital in the city’s central area.",
      es: "Bajo la necesidad de atender y mejorar el acceso y derecho a la salud en una ciudad secundaria como Popayán, se crea un esquema general de ocupación y operabilidad para un Hospital de segundo nivel en una centralidad de la ciudad.",
    },
  },
  {
    id: 11,
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
      require("@/assets/img/Raccard/IMG_1.png"),
      require("@/assets/img/Raccard/IMG_2.png"),
      require("@/assets/img/Raccard/IMG_3.png"),
      require("@/assets/img/Raccard/IMG_4.png"),
    ],
    team: {
      en: "Equipo: Miel de Azuu",
      es: "Equipo: Miel de Azuu",
    },
    description: {
      en: "“Ayer”, a village dedicated to historical preservation and cultural heritage in the Swiss Alps became the site of a renovation of a chalet designed to welcome lovers of skiing, tranquility, and comfort. This project preserves the essence of traditional construction and the aesthetics of the original structure, resembling a grand shell that, within, showcases an intervention focused on materiality, experience, and attention to detail.",
      es: "Ayer, un pueblo de preservación histórica y patrimonio cultural al frente de los Alpes suizos. Es ahora el escenario de una remodelación de un chalet que espera albergar a los amantes del sky, de la tranquilidad y comodidad. Es un trabajo que preserva la esencia de la construcción tradicional y la estética de lo construido, como un gran cascaron, que en su interior demuestra la intervención desde la materialidad, la experiencia y enfoque en los detalles.",
    },
  },
  {
    id: 12,
    altText: {
      en: "Hilario",
      es: "Hilario",
    },
    title: {
      en: "Hilario",
      es: "Hilario",
    },
    location: {
      en: "Cauca, Colombia (2022)",
      es: "Cauca, Colombia (2022)",
    },
    images: [
      require("@/assets/img/Hilario/IMG_1.png"),
      require("@/assets/img/Hilario/IMG_2.png"),
      require("@/assets/img/Hilario/IMG_3.png"),
      require("@/assets/img/Hilario/IMG_4.png"),
      require("@/assets/img/Hilario/IMG_5.png"),
      require("@/assets/img/Hilario/IMG_6.png"),
      require("@/assets/img/Hilario/IMG_7.png"),
      require("@/assets/img/Hilario/IMG_8.png"),
      require("@/assets/img/Hilario/IMG_9.png"),
    ],
    description: {
      en: "It began as a vision to create a space for the artisanal craft of weaving by a rural couple in the municipality of Totoró, Cauca. From conversations about dreams, work, promises, and preferences, a small workshop emerged that embodies these discussions, translating them into a physical space that shapes the couple's needs and enriches their artisanal process through architecture and its possibilities.",
      es: "Inició como una visión de construir un espacio para el oficio artesanal de la tejeduría de una pareja campesina y artesana en el municipio de Totoró – cauca. A partir de las conversaciones acerca de los sueños, el trabajo, las promesas y los gustos. Surge un pequeño taller artesanal que cubre estas conversaciones, traduciéndolas a espacio y que moldean las necesidades de esta pareja en enriquecer su proceso artesanal a partir del espacio, la arquitectura y sus posibilidades.",
    },
  },
  {
    id: 13,
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
      require("@/assets/img/Pintuco/IMG_1.png"),
      require("@/assets/img/Pintuco/IMG_2.png"),
      require("@/assets/img/Pintuco/IMG_3.png"),
      require("@/assets/img/Pintuco/IMG_4.png"),
      require("@/assets/img/Pintuco/IMG_5.png"),
    ],
    description: {
      en: "A proposal for an interior design competition for a social housing project was developed around the concept of light and how to guide it through the space to reach every corner, despite a limited opening in the façade. This was achieved through reflections, the use of transparent and translucent materials, and color theory.",
      es: "Propuesta en un concurso de diseño interior para una vivienda de interés social cuyo desarrollo fue a partir de la luz, y como conducirla a través del espacio hasta todos los rincones teniendo una apertura en fachada reducida, esto se logró a partir de las reflexiones, materiales transparentes y traslucidos y la teoría del color. ",
    },
  },
  {
    id: 14,
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
      require("@/assets/img/Casa tertulia/IMG_1.png"),
      require("@/assets/img/Casa tertulia/IMG_2.png"),
      require("@/assets/img/Casa tertulia/IMG_3.png"),
    ],
    description: {
      en: "It started as a secondary house on a plot of land on the outskirts of Popayán. Ultimately, it became a process of conversations with “Don José”, who shared his story, preferences, and how he envisioned living his final years alongside his son in a modest home that wouldn’t represent a significant financial investment.",
      es: "Comienza como una casa secundaria en una parcela a las afueras de Popayán. Al final se convierte en un proceso de conversaciones con don José que nos cuenta su historia, sus gustos y la manera como quiere vivir su última temporada, al lado de su hijo, en una casa modesta que no represente una inversión económica tan grande.",
    },
  },
  {
    id: 15,
    altText: {
      en: "Man of Corn",
      es: "Hombre de Maíz",
    },
    title: {
      en: "Hombre de Maíz",
      es: "Hombre de Maíz",
    },
    location: {
      en: "Honda, Tolima. Colombia (2022)",
      es: "Honda, Tolima. Colombia (2022)",
    },
    images: [
      require("@/assets/img/Hombre de Maiz/IMG_1.png"),
      require("@/assets/img/Hombre de Maiz/IMG_2.png"),
      require("@/assets/img/Hombre de Maiz/IMG_3.png"),
      require("@/assets/img/Hombre de Maiz/IMG_4.png"),
      require("@/assets/img/Hombre de Maiz/IMG_5.png"),
    ],
    team: {
      en: "Equipo:  Felipe langebaek + Maria Ardila + Azuu",
      es: "Equipo:  Felipe langebaek + Maria Ardila + Azuu",
    },
    description: {
      en: "Imagine a mobile school that grows like plants, evolving through stages and teaching the essence of life through lessons from the land and 'fertile living'. This space views railway tracks as opportunities to transport education, with stations serving as potential places for learning. Just as plants grow from seeds sown in the ground, a ruin is transformed into a space for planting, nurturing, harvesting, and replanting. In the same way, the school is built with patience and strategy.",
      es: "Pensar en una escuela ambulante, que crece como las plantas, que tiene sus etapas y enseña la esencia de la vida a partir de aprendizajes del campo y la “vida fértil”. Un espacio que piensa en las vías del ferrocarril como una oportunidad de transportar la educación, y sus estaciones como potenciales lugares para la enseñanza. Así como crecen las plantas, desde colocar una semilla en el suelo, se utiliza una ruina como espacio para sembrarlas, esperar, abonarlas, esperar, recolectarlas, esperar y volver a sembrar. Así mismo se hace la escuela, con paciencia y estrategia.",
    },
  },
  {
    id: 16,
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
      require("@/assets/img/Tomatera/IMG_1.png"),
      require("@/assets/img/Tomatera/IMG_2.png"),
      require("@/assets/img/Tomatera/IMG_3.png"),
      require("@/assets/img/Tomatera/IMG_4.png"),
    ],
    team: {
      en: "Team: Manuela Silva + Azuu",
      es: "Equipo: Manuela Silva + Azuu",
    },
    description: {
      en: "This greenhouse arises from the need for the technological advancement of Colombian agriculture and the constant search for a design that responds to the local conditions. This project born from the land and from multiple interdisciplinary conversations, where science and beauty seek to merge, resulting in a concave tomato greenhouse set against the mountains of Caldas.",
      es: "Este invernadero nace de la necesidad de tecnificación del campo colombiano y de la búsqueda constante de una forma que responda a las condiciones del lugar. Este proyecto nace de la tierra y de múltiples conversaciones interdisciplinares en el que la ciencia y la belleza intentan maclarse para dar como resultado una tomatera cóncava sobre las montañas de Caldas.  ",
    },
  },
  {
    id: 17,
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
      require("@/assets/img/kurandza kanimambo/IMG_1.png"),
      require("@/assets/img/kurandza kanimambo/IMG_2.png"),
      require("@/assets/img/kurandza kanimambo/IMG_3.png"),
      require("@/assets/img/kurandza kanimambo/IMG_4.png"),
      require("@/assets/img/kurandza kanimambo/IMG_5.png"),
      require("@/assets/img/kurandza kanimambo/IMG_6.png"),
    ],
    team: {
      en: "Team: María Rojas + Paula Pinto + Azuu",
      es: "Equipo: María Rojas + Paula Pinto + Azuu",
    },
    description: {
      en: "For the girls who become women before the age of 18, for those who have dropped out of school, for the daughters of this new generation, and for every girl, teenager, and woman in the diverse society of Mozambique. Khanimambo - meaning 'thank you' - is built by and for them. Thanks to their hard work at home and their support for their families, it is time to say, 'you are welcome' by creating a safe space where they can study and become the next generation of women leaders in the region.",
      es: "Para las niñas que llegan a ser mujeres antes de los 18 años, para esas mujeres que abandonaron sus estudios, para las hijas de esta nueva generación, y para cada una de las niñas, adolescentes y mujeres de esta gran diversidad social en Mozambique. Khanimambo, que traduce “gracias”, es construido, por y para ellas. Gracias a ellas, por su trabajo en el hogar y su sustento para sus familias. ¡Es el momento de decir “ustedes son bienvenidas” construyendo un espacio seguro donde ellas puedan estudiar y llegar a convertirse en la nueva generación de líderes mujeres en la región!",
    },
  },
  {
    id: 18,
    altText: {
      en: "Red House",
      es: "Casa Roja",
    },
    title: {
      en: "Casa Roja",
      es: "Casa Roja",
    },
    location: {
      en: "Totoró, Cauca. Colombia (2021)",
      es: "Totoró, Cauca. Colombia (2021)",
    },
    images: [
      require("@/assets/img/Casa roja/IMG_1.png"),
      require("@/assets/img/Casa roja/IMG_2.png"),
    ],
    description: {
      en: "Proposed idea for a country house on the outskirts of Popayán.",
      es: "Visión de una propuesta para una casa campestre a las afueras de Popayán",
    },
  },
  {
    id: 19,
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
    images: [require("@/assets/img/Casa dorelo/IMG_1.png")],
    description: {
      en: "Proposed idea for a country house on the outskirts of Popayán.",
      es: "Visión de una propuesta para una casa campestre a las afueras de Popayán",
    },
  },
  {
    id: 20,
    altText: {
      en: "Centro de experiencias turísticas",
      es: "Centro de experiencias turísticas",
    },
    title: {
      en: "Centro de experiencias turísticas",
      es: "Centro de experiencias turísticas",
    },
    location: {
      en: "Popayán, Cauca. Colombia (2024)",
      es: "Popayán, Cauca. Colombia (2024)",
    },
    images: [
      require("@/assets/img/Centro de experiencias turisticas/IMG_1.png"),
      require("@/assets/img/Centro de experiencias turisticas/IMG_2.png"),
      require("@/assets/img/Centro de experiencias turisticas/IMG_3.png"),
      require("@/assets/img/Centro de experiencias turisticas/IMG_4.png"),
      require("@/assets/img/Centro de experiencias turisticas/IMG_5.png"),
      require("@/assets/img/Centro de experiencias turisticas/IMG_6.png"),
      require("@/assets/img/Centro de experiencias turisticas/IMG_7.png"),
      require("@/assets/img/Centro de experiencias turisticas/IMG_8.png"),
      require("@/assets/img/Centro de experiencias turisticas/IMG_9.png"),
      require("@/assets/img/Centro de experiencias turisticas/IMG_10.png"),
      require("@/assets/img/Centro de experiencias turisticas/IMG_11.png"),
      require("@/assets/img/Centro de experiencias turisticas/IMG_12.png"),
    ],
    team: {
      en: "Team: De la carrera cavanzo sanchez + Azuu",
      es: "Equipo: De la carrera cavanzo sanchez + Azuu",
    },
    description: {
      en: "An ethereal space that blends with the street and the surroundings. It opens its doors to the public and to wandering. An interior that is errant and silent, shaped by multiple dualities. A place that can be everything and at the same time nothing, because its interpretation is at the mercy of the destiny, ideas and dreams of its people. It is simply a possibility, the first step toward a dream.",
      es: "Un volumen etéreo que se funde con la calle y el espacio. Que abre sus puertas al publico y a la errancia. Un interior Errante y silencioso conformado por múltiples dualidades. Un lugar que lo puede ser todo y al mismo tiempo ser nada porque su interpretación esta a la merced del destino, las ideas y sueños de su gente. Es simplemente una posibilidad, el primer paso para algún sueño. ",
    },
  },
  {
    id: 21,
    altText: {
      en: "Light House",
      es: "Light House",
    },
    title: {
      en: "Light House",
      es: "Light House",
    },
    location: {
      en: "San Domino-Italy (2024)",
      es: "San Domino-Italia (2024)",
    },
    images: [
      require("@/assets/img/Light house/IMG_1.png"),
      require("@/assets/img/Light house/IMG_2.png"),
      require("@/assets/img/Light house/IMG_3.png"),
      require("@/assets/img/Light house/IMG_4.png"),
      require("@/assets/img/Light house/IMG_5.png"),
      require("@/assets/img/Light house/IMG_6.png"),
      require("@/assets/img/Light house/IMG_7.png"),
      require("@/assets/img/Light house/IMG_8.png"),
      require("@/assets/img/Light house/IMG_9.png"),
    ],
    team: {
      en: "Team: Miel de Azuu",
      es: "Equipo: Miel de Azuu",
    },
    description: {
      en: "How do we discern the ruins and revive the face of the past? Is it not necessary to open the chest and allow the soul of the place to express itself upon the rock? To zigzag freely and renewed, playing over the hills and kissing the sea? How can we sabotage the miracle of life? The essence of that solitary lighthouse must emerge and snake over the rock, piercing it to expand its roots, walking to the sea and kissing it. To be filled with youth after the shipwreck and open its doors to all wandering travelers who wish to feel the true rhythm of life.",
      es: "¿Cómo discernir la ruina y revivir el rostro del pasado? ¿No es acaso necesario abrir el cofre y permitir que el alma del lugar se exprese sobre la roca? ¿Zigzaguear libre y renovada, jugando sobre las colinas y besando el mar? ¿Cómo sabotear el milagro de la vida? La esencia de aquel faro solitario debe emerger y serpentear sobre la roca, perforarla para expandir raíces, caminar hasta el mar y besarlo. Llenarse de juventud después del naufragio y abrirle las puertas a todos los viajeros errantes que desean sentir el verdadero ritmo de la vida.",
    },
  },
];
