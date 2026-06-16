/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Import static assets generated for the brand
import restauranteDroneIa from "./assets/images/hero/restaurante-drone-ia.png";
import restauranteDroneIa2 from "./assets/images/hero/restaurante-drone-ia-2.png";
import restaurante from "./assets/images/hero/restaurante.png";
import restauranteAmbiance from "./assets/images/restaurante/restaurante-1.png";
import premiumSeafood from "./assets/images/pratos/pratos-1.png";
import fogoDeChao from "./assets/images/pratos/pratos-6.png";
import drinks from "./assets/images/gallery/drinks/drinks.png";
import rodaGiganteCarne from "./assets/images/gallery/roda-gigante/roda-gigante-carne.png";
import rodaGigantePeixe from "./assets/images/gallery/roda-gigante/roda-gigante-peixe.png";
import rodaGigante2 from "./assets/images/gallery/roda-gigante/roda-gigante-2.png";

// New Gallery Image Imports
import galleryPratos1 from "./assets/images/gallery/pratos/pratos-1.png";
import galleryPratos2 from "./assets/images/gallery/pratos/pratos-2.png";
import galleryPratos3 from "./assets/images/gallery/pratos/pratos-3.png";
import galleryPratos4 from "./assets/images/gallery/pratos/pratos-4.png";
import galleryPratos5 from "./assets/images/gallery/pratos/pratos-5.png";
import galleryPetiscos7 from "./assets/images/gallery/petiscos/pratos-7.png";
import galleryPetiscos8 from "./assets/images/gallery/petiscos/pratos-8.png";
import galleryPlaca from "./assets/images/gallery/ambiente/placa-do-restaurante.png";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  highlight?: boolean;
  tag?: string;
  image: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  description: string;
  items: MenuItem[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  source: string;
  text: string;
  avatarLetter: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: "roda-gigante" | "peixes" | "pratos" | "petiscos" | "drinks" | "ambiente" | "praia" | "fogo" | "gastronomia";
}

export const RESTAURANT_INFO = {
  name: "Brisa do Mar",
  tagline: "Restaurante e Petiscaria",
  phone: "+55 (47) 99688-5074",
  phoneRaw: "5547996885074",
  instagram: "brisadomar_taquaras",
  instagramUrl: "https://www.instagram.com/brisadomar_taquaras/",
  address: "Av. Rodesindo Pavan, 700 - Taquaras, Balneário Camboriú - SC, Brasil",
  coordinates: { lat: -27.014285, lng: -48.577903 }, // Praia de Taquaras location
  googleMapsUrl: "https://maps.google.com",
  seoTargets: [
    "restaurante em taquaras",
    "onde comer em taquaras",
    "frutos do mar balneário camboriú",
    "restaurante praia taquaras",
    "fogo de chão balneário camboriú",
    "restaurante interpraias"
  ]
};

export const IMAGES = {
  hero: restauranteDroneIa2,
  droneIa: restauranteDroneIa,
  facade: restaurante,
  fogoDeChao: fogoDeChao,
  seafood: premiumSeafood,
  ambiance: restauranteAmbiance,
  coldDrink: drinks,
  rodaGiganteCarne: rodaGiganteCarne,
  rodaGigantePeixe: rodaGigantePeixe,
  rodaGigante2: rodaGigante2,
  // Handpicked, high-quality, non-broken, license-free image fallbacks for extra variety
  beachDrone: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop",
  grillEmbers: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
  shrimpPlate: "https://images.unsplash.com/photo-1559737607-3578909a52bc?q=80&w=1200&auto=format&fit=crop",
  sunsetTaquaras: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
  familyLunch: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "frutos_do_mar",
    title: "Frutos do Mar",
    description: "Sabor fresco que vem direto das águas de Taquaras, preparados com respeito ao ingrediente.",
    items: [
      {
        id: "m1",
        name: "Sequência Premium de Frutos do Mar",
        description: "Uma imersão completa: peixe grelhado, camarão ao bafo, camarão à milanesa, lula dore, casquinha de siri e guarnições tradicionais.",
        price: 249.90,
        highlight: true,
        tag: "Mais Vendido",
        image: IMAGES.seafood
      },
      {
        id: "m2",
        name: "Grelhado de Lagosta e Camarões",
        description: "Lagostas inteiras e camarões rosa selvagens grelhados na manteiga de ervas da Mata Atlântica.",
        price: 310.00,
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: "m3",
        name: "Moqueca Brisa do Mar",
        description: "Cozido perfumado de peixe nobre e camarões, azeite de dendê, leite de coco fresco, pirão de peixe e arroz aromático.",
        price: 189.90,
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "fogo_de_chao",
    title: "Fogo de Chão",
    description: "Grandes cortes preparados na lendária Roda Gigante Deretti, assados lentamente na lenha selecionada.",
    items: [
      {
        id: "m4",
        name: "Costela Assada na Roda Deretti",
        description: "Nossa famosa costela bovina, assada lentamente por mais de 6 horas, derretendo na boca com crosta crocante de sal grosso.",
        price: 145.00,
        highlight: true,
        tag: "Especialidade",
        image: IMAGES.fogoDeChao
      },
      {
        id: "m5",
        name: "Anchova Completa na Brasa",
        description: "Anchova inteira escalpada no fogo de chão com pirão de peixe de Taquaras e salada verde.",
        price: 119.00,
        image: IMAGES.grillEmbers
      },
      {
        id: "m6",
        name: "Prime Rib Angus",
        description: "Corte premium grelhado em chama alta com chimichurri artesanal e farofa de bacon crostada.",
        price: 165.00,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "petiscos",
    title: "Petiscos de Praia",
    description: "Porções perfeitas para acompanhar uma cerveja gelada com o pé na areia e vista pro mar.",
    items: [
      {
        id: "m7",
        name: "Camarão Brisa do Mar",
        description: "Camarões rosa salteados no azeite de oliva extra virgem com muito alho laminado e salsinha fresca.",
        price: 89.90,
        image: IMAGES.shrimpPlate
      },
      {
        id: "m8",
        name: "Lula à Dorê Crocante",
        description: "Anéis de lula tenros, empanados em farinha especial rústica, servidos com maionese artesanal de limão caipira.",
        price: 64.90,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: "m9",
        name: "Iscas de Mignon com Gorgonzola",
        description: "Filet mignon cortado na ponta da faca flambado, regado com molho cremoso de gorgonzola e torradas da casa.",
        price: 79.90,
        image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "drinks",
    title: "Coquetelaria e Bebidas",
    description: "Drinks autorais tropicais, caipirinhas rústicas e cerveja estupidamente gelada.",
    items: [
      {
        id: "m10",
        name: "Caipirinha Taquaras",
        description: "Nossa releitura com cachaça artesanal da região, limão taiti fresco, hortelã selvagem e rapadura líquida.",
        price: 28.00,
        image: IMAGES.coldDrink
      },
      {
        id: "m11",
        name: "Caju Amigo Premium",
        description: "Compota artesanal de caju, gin premium, água tônica artesanal e finalização com raspas de limão siciliano.",
        price: 34.00,
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: "m12",
        name: "Clericot do Atlântico",
        description: "Vinho branco leve gelado, mix de frutas da estação cortadas frescas, licor de cointreau e bastante gelo (jarra de 1L).",
        price: 95.00,
        image: "https://images.unsplash.com/photo-1455278491225-68744043011c?q=80&w=800&auto=format&fit=crop"
      }
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Felipe Silveira",
    rating: 5,
    date: "Maio de 2026",
    source: "Google Reviews",
    text: "Experiência sensacional na Praia de Taquaras! A costela de fogo de chão preparada na Roda Deretti é inexplicável de tão macia. Vale a pena cada centavo. Atendimento super familiar e acolhedor.",
    avatarLetter: "F"
  },
  {
    id: "r2",
    author: "Juliana Mendes",
    rating: 5,
    date: "Junho de 2026",
    source: "TripAdvisor",
    text: "Se você quer sossego em BC e comida de altíssima qualidade, o Brisa do Mar é o lugar. O visual é cinematográfico, você come olhando a areia e escutando o mar. A sequência de frutos do mar é divina e super farta.",
    avatarLetter: "J"
  },
  {
    id: "r3",
    author: "Roberto Albuquerque",
    rating: 5,
    date: "Abril de 2026",
    source: "Google Reviews",
    text: "Espaço muito massa! A combinação entre o espetáculo do fogo de chão das carnes e os frutos do mar fresquíssimos agrada todo mundo na família. Localização privilegiada no rústico da rodovia Interpraias.",
    avatarLetter: "R"
  },
  {
    id: "r4",
    author: "Letícia Krauser",
    rating: 5,
    date: "Março de 2026",
    source: "Google Reviews",
    text: "Lugar maravilhoso com um clima aconchegante demais. Os drinks são espetaculares, o camarão com alho e óleo é de comer rezando e o costelão no fogo é um espetáculo visual de se ver pescando a atenção.",
    avatarLetter: "L"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    url: IMAGES.hero,
    title: "Vista Aérea da Orla de Taquaras",
    category: "ambiente"
  },
  {
    id: "g2",
    url: IMAGES.fogoDeChao,
    title: "Delícias de Frutos do Mar e Batatas Grelhadas",
    category: "pratos"
  },
  {
    id: "g3",
    url: IMAGES.seafood,
    title: "Grelhados Nobres do Mar",
    category: "peixes"
  },
  {
    id: "g4",
    url: IMAGES.ambiance,
    title: "Deck Praia Principal do Restaurante",
    category: "ambiente"
  },
  {
    id: "g5",
    url: IMAGES.shrimpPlate,
    title: "Camarões Selecionados da Baía",
    category: "petiscos"
  },
  {
    id: "g6",
    url: IMAGES.grillEmbers,
    title: "Peixe Assado na Brasa e Brabeiro",
    category: "peixes"
  },
  {
    id: "g7",
    url: IMAGES.sunsetTaquaras,
    title: "Pôr do Sol Mágico em Taquaras",
    category: "ambiente"
  },
  {
    id: "g8",
    url: IMAGES.familyLunch,
    title: "Momentos entre Família e Tradição",
    category: "ambiente"
  },
  {
    id: "g9",
    url: galleryPratos1,
    title: "Carrossel de Frutos do Mar Nobres",
    category: "pratos"
  },
  {
    id: "g10",
    url: galleryPratos2,
    title: "Filé de Peixe Grelhado Premium",
    category: "pratos"
  },
  {
    id: "g11",
    url: galleryPratos3,
    title: "Costela Angus e Guarnições Únicas",
    category: "pratos"
  },
  {
    id: "g12",
    url: galleryPratos4,
    title: "Moqueca Tradicional de Barro Brisa do Mar",
    category: "pratos"
  },
  {
    id: "g13",
    url: galleryPratos5,
    title: "Risoto de Lagostins ao Toque do Chef",
    category: "pratos"
  },
  {
    id: "g14",
    url: galleryPetiscos7,
    title: "Porção de Bolinhos de Siri Catarinense",
    category: "petiscos"
  },
  {
    id: "g15",
    url: galleryPetiscos8,
    title: "Iscas de Linguado Crocante da Praia",
    category: "petiscos"
  },
  {
    id: "g16",
    url: drinks,
    title: "Coquetel Autoral Brisa do Mar Tropical",
    category: "drinks"
  },
  {
    id: "g17",
    url: galleryPlaca,
    title: "Entrada Oficial e Fachada Brisa do Mar",
    category: "ambiente"
  },
  {
    id: "g18",
    url: rodaGiganteCarne,
    title: "Cortes Nobres Devagar no Fogo de Chão",
    category: "roda-gigante"
  },
  {
    id: "g19",
    url: rodaGigantePeixe,
    title: "Peixe Inteiro Defumando Lentamente",
    category: "peixes"
  },
  {
    id: "g20",
    url: rodaGigante2,
    title: "A Famosa Roda Gigante Deretti em Detalhes",
    category: "roda-gigante"
  }
];
