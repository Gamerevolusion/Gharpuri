import type { MediaCredit } from "./types";

export const sources = [
  {
    name: "UNESCO World Heritage Centre",
    url: "https://whc.unesco.org/en/list/244",
    description:
      "Official UNESCO listing for Elephanta Caves, including the 1987 inscription decision, criteria, and the site's Statement of Outstanding Universal Value.",
    access: "Public",
  },
  {
    name: "Archaeological Survey of India (ASI)",
    url: "https://asi.nic.in/",
    description:
      "India's premier archaeological institution, responsible for the conservation, documentation, and management of the Elephanta Caves and numerous other protected monuments.",
    access: "Public",
  },
  {
    name: "Ministry of Culture, Government of India",
    url: "https://culture.gov.in/",
    description:
      "The central government ministry overseeing cultural heritage policy, including support for ASI and cultural documentation initiatives.",
    access: "Public",
  },
  {
    name: "Maharashtra Tourism",
    url: "https://maharashtratourism.gov.in/",
    description:
      "The state tourism department responsible for visitor infrastructure and promotion of heritage destinations including Elephanta Island.",
    access: "Public",
  },
  {
    name: "CyArk",
    url: "https://www.cyark.org/projects/elephanta",
    description:
      "Non-profit organization dedicated to digital documentation of cultural heritage. Conducted comprehensive 3D scanning and photogrammetry of Elephanta's Main Cave in 2023.",
    access: "Public with terms",
  },
  {
    name: "Tapestry by CyArk",
    url: "https://tapestry.cyark.org/content/elephanta",
    description:
      "CyArk's public-facing platform for experiencing 3D heritage documentation data, including the Elephanta Main Cave digital record.",
    access: "Public with terms",
  },
  {
    name: "Google Arts & Culture — Elephanta Caves",
    url: "https://artsandculture.google.com/project/elephanta-caves",
    description:
      "A digital cultural presentation of Elephanta through Google's Arts & Culture platform.",
    access: "Public with terms",
  },
  {
    name: "Wikimedia Commons — Elephanta Caves imagery",
    url: "https://commons.wikimedia.org/wiki/Category:Elephanta_Caves",
    description:
      "A collection of freely licensed images of the Elephanta Caves contributed by various photographers under Creative Commons or public domain terms. Specific image credits are noted individually throughout this site.",
    access: "Public (CC/PD)",
  },
];

export const mediaCredits: MediaCredit[] = [
  {
    imageId: "GH-001",
    source: "Ingo Mehling — Wikimedia Commons, CC BY-SA 4.0",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Elephanta_-_Mahesh_Murti.jpg",
  },
  {
    imageId: "GH-002",
    source: "Vyacheslav Argenberg — Wikimedia Commons, CC BY 4.0",
    license: "CC BY 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Elephanta_Caves,_India,_Shiva_as_Nataraja,_King_of_Dance.jpg",
  },
  {
    imageId: "GH-003",
    source: "Ricardo Martins — Wikimedia Commons, CC BY 2.0",
    license: "CC BY 2.0",
    url: "https://commons.wikimedia.org/wiki/File:Elephanta_Caves_Gangadhara.jpg",
  },
  {
    imageId: "GH-004",
    source: "Isabell Schulz — Wikimedia Commons, CC BY-SA 2.0",
    license: "CC BY-SA 2.0",
    url: "https://commons.wikimedia.org/wiki/File:Ardhanarishvara_half_Shiva_half_Parvati,_Elephanta_Caves.jpg",
  },
  {
    imageId: "GH-005",
    source: "Sivaraj D — Wikimedia Commons, CC BY-SA 3.0",
    license: "CC BY-SA 3.0",
    url: "https://commons.wikimedia.org/wiki/File:Elephanta_Siva_Yogisvara.JPG",
  },
  {
    imageId: "GH-006",
    source: "Sailko — Wikimedia Commons, CC BY 3.0",
    license: "CC BY 3.0",
    url: "https://commons.wikimedia.org/wiki/File:Mahishasuramardini,_da_elephanta,_maharashtra,_550_dc_ca.jpg",
  },
  {
    imageId: "GH-007",
    source: "Saankav — Wikimedia Commons, CC BY-SA 4.0",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Main_Entrance_of_Cave_1_of_Elephanta_Caves.jpg",
  },
  {
    imageId: "GH-008",
    source: "Saankav — Wikimedia Commons, CC BY-SA 4.0",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Main_mandapa_and_pillars_in_Cave_1_of_Elephanta_Caves.jpg",
  },
  {
    imageId: "GH-009",
    source: "Saankav — Wikimedia Commons, CC BY-SA 4.0",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Cave_2_of_Elephanta_Caves.jpg",
  },
  {
    imageId: "GH-010",
    source: "Saankav — Wikimedia Commons, CC BY-SA 4.0",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Cave_3_of_Elephanta_Caves.jpg",
  },
  {
    imageId: "GH-011",
    source: "A. Savin — Wikimedia Commons, FAL (Free Art License)",
    license: "FAL",
    url: "https://commons.wikimedia.org/wiki/File:Thane_Creek_and_Elephanta_Island_03-2016_-_img19_Elephanta_Caves.jpg",
  },
  {
    imageId: "GH-012",
    source: "Rangan Datta Wiki — Wikimedia Commons, CC BY-SA 4.0",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Elephanta_Ferry_34.jpg",
  },
];
