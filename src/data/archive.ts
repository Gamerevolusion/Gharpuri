import type { ArchiveItem } from "./types";

export const archiveItems: ArchiveItem[] = [
  {
    id: "GH-001",
    title: "Trimurti Sculpture, Cave 1",
    category: "Sculpture",
    location: "Cave 1, Elephanta Island",
    description:
      "The iconic three-headed Shiva sculpture representing creation, preservation, and destruction. Carved in high relief within the main cave sanctuary.",
    date: "6th century CE",
    source: "ASI / UNESCO",
    image: "/images/trimurti.jpg",
    tags: ["Shiva", "Trimurti", "Cave 1", "Rock-cut", "Iconography"],
  },
  {
    id: "GH-002",
    title: "Nataraja Relief, Cave 1",
    category: "Sculpture",
    location: "Cave 1, Elephanta Island",
    description:
      "Shiva as Lord of Dance, depicted in a dynamic pose with multiple arms. A fine example of Chalukyan-period sculptural artistry.",
    date: "6th century CE",
    source: "ASI / UNESCO",
    image: "/images/nataraja.jpg",
    tags: ["Shiva", "Nataraja", "Dance", "Cave 1", "Iconography"],
  },
  {
    id: "GH-003",
    title: "Gangadhara Panel, Cave 1",
    category: "Sculpture",
    location: "Cave 1, Elephanta Island",
    description:
      "Shiva as Gangadhara, bearing the River Ganges on his matted hair. The panel demonstrates sophisticated narrative composition in stone.",
    date: "6th century CE",
    source: "ASI / UNESCO",
    image: "/images/gangadhara.jpg",
    tags: ["Shiva", "Gangadhara", "Ganges", "Cave 1", "Narrative"],
  },
  {
    id: "GH-004",
    title: "Ardhanarishvara Sculpture",
    category: "Sculpture",
    location: "Cave 1, Elephanta Island",
    description:
      "The composite form of Shiva and Shakti, representing the inseparable union of masculine and feminine principles.",
    date: "6th century CE",
    source: "ASI / UNESCO",
    image: "/images/ardhanarishvara.jpg",
    tags: ["Shiva", "Shakti", "Ardhanarishvara", "Cave 1", "Union"],
  },
  {
    id: "GH-005",
    title: "Yogishvara Panel, Cave 1",
    category: "Sculpture",
    location: "Cave 1, Elephanta Island",
    description:
      "Shiva in his aspect as Yogishvara, the Lord of Yoga, depicted in a meditative pose surrounded by attendant figures.",
    date: "6th century CE",
    source: "ASI / UNESCO",
    image: "/images/yogishvara.jpg",
    tags: ["Shiva", "Yogishvara", "Meditation", "Cave 1", "Ascetic"],
  },
  {
    id: "GH-006",
    title: "Mahishasuramardini Relief",
    category: "Sculpture",
    location: "Cave 1, Elephanta Island",
    description:
      "The goddess Durga in her form as Mahishasuramardini, slayer of the buffalo demon Mahishasura. A powerful depiction of divine victory.",
    date: "6th century CE",
    source: "ASI / UNESCO",
    image: "/images/mahishasuramardini.jpg",
    tags: ["Durga", "Mahishasuramardini", "Demon", "Cave 1", "Victory"],
  },
  {
    id: "GH-007",
    title: "Cave 1 Entrance Facade",
    category: "Architecture",
    location: "Cave 1, Elephanta Island",
    description:
      "The monumental entrance to the main cave, with carved door guardians and ornate pillars flanking the threshold.",
    date: "6th century CE",
    source: "ASI / UNESCO",
    image: "/images/cave1-entrance.jpg",
    tags: ["Architecture", "Entrance", "Facade", "Cave 1", "Pillars"],
  },
  {
    id: "GH-008",
    title: "Pillar Capitals, Cave 1",
    category: "Architecture",
    location: "Cave 1, Elephanta Island",
    description:
      "Ornately carved pillar capitals featuring decorative motifs characteristic of Western Indian rock-cut architecture.",
    date: "6th century CE",
    source: "ASI / UNESCO",
    image: "/images/cave1-pillars.jpg",
    tags: ["Architecture", "Pillars", "Capitals", "Cave 1", "Decoration"],
  },
  {
    id: "GH-009",
    title: "Cave 2 Interior",
    category: "Architecture",
    location: "Cave 2, Elephanta Island",
    description:
      "A smaller cave with a pillared veranda and shrine chamber. Less elaborately carved than Cave 1 but significant for its spatial organization.",
    date: "6th-7th century CE",
    source: "ASI / UNESCO",
    image: "/images/cave2.jpg",
    tags: ["Architecture", "Cave 2", "Veranda", "Shrine", "Smaller cave"],
  },
  {
    id: "GH-010",
    title: "Cave 3 and Cave 4",
    category: "Architecture",
    location: "Elephanta Island",
    description:
      "Additional rock-cut chambers on the island, partially excavated. Their incomplete state offers insight into the carving process.",
    date: "6th-7th century CE",
    source: "ASI / UNESCO",
    image: "/images/cave3.jpg",
    tags: ["Architecture", "Cave 3", "Cave 4", "Partial", "Process"],
  },
  {
    id: "GH-011",
    title: "Elephanta Island Coastline",
    category: "Island",
    location: "Elephanta Island, Mumbai Harbour",
    description:
      "The rugged coastline of Elephanta Island, approached by ferry from the Gateway of India. The island's topography influenced the placement of its cave complexes.",
    date: "",
    source: "Field Documentation Series",
    image: "/images/island-coast.jpg",
    tags: ["Island", "Coastline", "Geography", "Mumbai Harbour", "Approach"],
  },
  {
    id: "GH-012",
    title: "Ferry Approach to Elephanta",
    category: "Island",
    location: "Mumbai Harbour to Elephanta",
    description:
      "The traditional ferry route from the Gateway of India to Elephanta Island, a journey of approximately one hour that has connected visitors to the caves for over a century.",
    date: "",
    source: "Field Documentation Series",
    image: "/images/ferry.jpg",
    tags: ["Island", "Ferry", "Transport", "Gateway of India", "Journey"],
  },
];

export const archiveCategories = [
  "All",
  "Sculpture",
  "Architecture",
  "Island",
  "Stories",
  "Archive",
] as const;
