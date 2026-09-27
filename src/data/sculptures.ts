import type { Sculpture } from "./types";

export const sculptures: Sculpture[] = [
  {
    id: "SC-001",
    name: "Sadashiva / Trimurti",
    location: "Cave 1, Rear Wall, Central Placement",
    description:
      "The defining sculpture of Elephanta. A massive, three-headed representation of Shiva as the cosmic being (Sadashiva). The central face is serene and meditative; the left face (Vamadeva) is feminine and creative; the right face (Aghora) is fierce and destructive. Together they represent the paradoxical unity of creation, preservation, and dissolution.",
    image: "/images/trimurti.jpg",
    tags: ["Shiva", "Trimurti", "Sadashiva", "Cosmic", "Central", "Canonical"],
    source: "ASI / UNESCO",
  },
  {
    id: "SC-002",
    name: "Nataraja",
    location: "Cave 1, Left Wing",
    description:
      "Shiva as Lord of the Dance, captured in a dynamic, multi-armed pose. This representation draws on a tradition that would reach its peak in later Chola bronzes, yet here it appears in stone with remarkable vitality. The sculpture embodies movement, rhythm, and the cosmic cycle of destruction and rebirth.",
    image: "/images/field-nataraja-niche.jpeg",
    tags: ["Shiva", "Nataraja", "Dance", "Movement", "Left wing", "On-Site Field Record"],
    source: "Field Documentation Series / ASI",
  },
  {
    id: "SC-003",
    name: "Yogishvara",
    location: "Cave 1, Right Wing",
    description:
      "Shiva as the Lord of Yoga, depicted seated in a meditative posture. The figure exudes stillness and interior power, contrasting with the dynamic Nataraja nearby. Attendant figures frame the central figure in a carefully balanced composition.",
    image: "/images/yogishvara.jpg",
    tags: ["Shiva", "Yogishvara", "Meditation", "Ascetic", "Right wing"],
    source: "ASI / UNESCO",
  },
  {
    id: "SC-004",
    name: "Gangadhara",
    location: "Cave 1, Left Wall",
    description:
      "Shiva as the bearer of the River Ganges, with the celestial river flowing from his matted hair. The panel is notable for its narrative complexity — Parvati stands beside Shiva, and multiple attendants populate the scene. The carving captures both the mythic moment and its emotional weight.",
    image: "/images/gangadhara.jpg",
    tags: ["Shiva", "Gangadhara", "Ganges", "Parvati", "Narrative", "Left wall"],
    source: "ASI / UNESCO",
  },
  {
    id: "SC-005",
    name: "Ardhanarishvara",
    location: "Cave 1, Right Wall",
    description:
      "The composite androgynous form uniting Shiva and Shakti — male and female, austere and abundant, static and dynamic. One half of the body is masculine Shiva; the other is feminine Parvati. The sculpture is a powerful visual argument for the inseparability of complementary principles.",
    image: "/images/ardhanarishvara.jpg",
    tags: ["Shiva", "Shakti", "Ardhanarishvara", "Androgynous", "Unity", "Right wall"],
    source: "ASI / UNESCO",
  },
  {
    id: "SC-006",
    name: "Mahishasuramardini",
    location: "Cave 1, Left Wing, Lower Register",
    description:
      "The goddess Durga in her fierce aspect as the slayer of the buffalo demon Mahishasura. Multiple arms hold weapons; the demon peers up from beneath her mount. The energy of the composition is intense — a visual rendering of divine power confronting chaos.",
    image: "/images/mahishasuramardini.jpg",
    tags: ["Durga", "Mahishasuramardini", "Demon", "Victory", "Fierce", "Lower register"],
    source: "ASI / UNESCO",
  },
  {
    id: "SC-007",
    name: "Kalyanasundara Murti (Shiva-Parvati Wedding)",
    location: "Cave 1, Southwest Niche",
    description:
      "A masterpiece high-relief panel portraying the divine wedding of Shiva and Parvati. Shiva reaches out to take Parvati's hand (panigrahana) while Parvati stands modestly to his right. Celestial vidyadharas hover in cloud formations above, Brahma tends the sacrificial fire below, and a monumental dvarapala guardian flanks the scene.",
    image: "/images/field-kalyanasundara.jpeg",
    tags: ["Shiva", "Parvati", "Kalyanasundara", "Marriage", "Dvarapala", "On-Site Field Record"],
    source: "Field Documentation Series / ASI",
  },
];

export const sculptureCategories = [
  "All Sculptures",
  "Shiva as Cosmic Being",
  "Shiva as Lord of Dance",
  "Shiva as Ascetic",
  "Shiva and Parvati",
  "The Goddess",
] as const;
