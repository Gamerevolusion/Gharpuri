export interface FieldPhotoItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Architecture" | "Sculpture" | "Preservation" | "Courtyard";
  location: string;
  date: string;
  time: string;
  coordinates: {
    lat: string;
    lng: string;
    elevation: string;
  };
  image: string;
  originalFilename: string;
  shortDescription: string;
  detailedAnalysis: string;
  architecturalFeatures: string[];
  historicalContext: string;
  conservationNotes: string;
  tags: string[];
}

export const fieldPhotos: FieldPhotoItem[] = [
  {
    id: "FLD-001",
    title: "Cave 1 Hypostyle Mandapa & Fluted Cushion Capitals",
    subtitle: "Monumental Interior Pillar Hall & Deccan Basalt Carving",
    category: "Architecture",
    location: "Elephanta Caves Main Temple (Cave 1), Mumbai Harbour, India",
    date: "27/09/2026",
    time: "11:15 AM GMT+05:30",
    coordinates: {
      lat: "18°57'45.4\" N",
      lng: "72°55'58.2\" E",
      elevation: "70 m",
    },
    image: "/images/field-cave1-mandapa.jpeg",
    originalFilename: "WhatsApp Image 2026-09-27 at 8.21.57 PM.jpeg",
    shortDescription:
      "Wide interior perspective of Cave 1's hypostyle hall showcasing the characteristic fluted columns, cushion capitals (amalaka), and monolithic ceiling beams hewn directly from solid volcanic basalt.",
    detailedAnalysis:
      "This on-site field photograph documents the monumental hypostyle interior (Mandapa) of Cave 1, executed through top-down subtractive excavation into the Deccan Traps basalt plateau during the mid-6th century CE. The columns illustrate the canonical Elephanta architectural order: massive square pedestals that transition into octagonal and sixteen-fluted shafts, crowned by compressed ribbed cushion capitals (amalaka) and decorative bracket imposts. The rock ceiling preserves visible chisel gouges and rough-hewn tooling marks, demonstrating ancient stone-cutting techniques. Between the colonnades, ambient sunlight entering from the courtyard generates dramatic chiaroscuro illumination across the sacred chambers.",
    architecturalFeatures: [
      "Fluted shaft columns with square base plinths",
      "Ribbed cushion capitals (amalaka / compressed melon motif)",
      "Top-down monolithic basalt rock subtraction",
      "Chiaroscuro ambient light distribution across hypostyle hall",
      "Rock-hewn simulated ceiling beam structural grid",
    ],
    historicalContext:
      "Excavated circa 550–575 CE, likely commissioned under Kalachuri royal patronage (King Krishnaraja) or Konkan Mauryan rulers, embodying an architectural synthesis of cosmic Shaiva theology with monumental rock craftsmanship.",
    conservationNotes:
      "Displays surface patina and minor salt efflorescence caused by marine air humidity from Mumbai Harbour. Protected by modern stone plinths and low visitor barrier railings managed by the Archaeological Survey of India (ASI).",
    tags: ["Cave 1", "Mandapa", "Pillars", "Cushion Capital", "Basalt", "Architecture", "Field Photo"],
  },
  {
    id: "FLD-002",
    title: "Shiva Nataraja (Natesha) Relief Panel",
    subtitle: "The Cosmic Dance of Creation and Dissolution in High Relief",
    category: "Sculpture",
    location: "Elephanta Caves Main Temple Complex, Cave 1 Niche, Mumbai Harbour",
    date: "27/09/2026",
    time: "11:15 AM GMT+05:30",
    coordinates: {
      lat: "18°57'45.4\" N",
      lng: "72°55'58.2\" E",
      elevation: "70 m",
    },
    image: "/images/field-nataraja-niche.jpeg",
    originalFilename: "WhatsApp Image 2026-09-27 at 8.21.58 PM.jpeg",
    shortDescription:
      "High-relief sculpture of Shiva Nataraja performing the cosmic dance within a recessed niche of Cave 1, framed alongside an ornate fluted pillar with cushion capital.",
    detailedAnalysis:
      "This field photograph captures the renowned Nataraja (Lord of Dance / Natesha) panel located in the recessed niche immediately adjacent to the northern entrance of Cave 1. Shiva is carved in the dynamic Lalita / Ananda Tandava mode, displaying an energetic hip twist (tribhanga) that imbues the rigid basalt rock with rhythmic vitality. The deity wears a towering jaṭāmukuṭa (matted hair crown) and was sculpted with multiple radiating arms (originally eight) representing simultaneous phases of cosmic creation, preservation, and dissolution. Surrounding the divine dancer, celestial vidyadharas and attendants float gracefully in cloud registers, witnessing the cosmic performance.",
    architecturalFeatures: [
      "Dynamic tribhanga (tri-bent) dance stance in basalt high-relief",
      "Intricately carved jaṭāmukuṭa ascetic hair crown",
      "Recessed niche composition framed by an ornate fluted pillar",
      "Upper cloud registers populated by soaring celestial vidyadharas",
      "Sculptural relief depth exceeding 45 centimeters into the mountain wall",
    ],
    historicalContext:
      "This 6th-century rock sculpture predates famous South Indian Chola bronze Natarajas by nearly five centuries, illustrating the mature Western Indian visual vocabulary of Shiva's cosmic dance.",
    conservationNotes:
      "Extremities and several forearms suffered historic fractures during colonial centuries (including Portuguese target practice in the 16th century); the surviving central torso and facial contours remain remarkably intact and are monitored for moisture microclimate stability.",
    tags: ["Cave 1", "Nataraja", "Shiva", "Dance", "High Relief", "Sculpture", "Field Photo"],
  },
  {
    id: "FLD-003",
    title: "Hillside Cave Facade & Active Conservation Scaffolding",
    subtitle: "Rock-Cut Portico Entrance Amidst Lush Monsoon Hillside",
    category: "Preservation",
    location: "Elephanta Caves, Mumbai Harbour, India",
    date: "27/09/2026",
    time: "07:54 AM GMT+05:30",
    coordinates: {
      lat: "18°57'45\" N",
      lng: "72°55'58\" E",
      elevation: "65 m",
    },
    image: "/images/field-cave-facade.jpeg",
    originalFilename: "WhatsApp Image 2026-09-27 at 8.21.58 PM (1).jpeg",
    shortDescription:
      "Exterior cliff face and rock-cut entrance portico carved into the lush green basalt hill, showing modern ASI conservation scaffolding actively stabilizing the stone facade.",
    detailedAnalysis:
      "Captured in the early morning at 07:54 AM, this field image showcases the dramatic natural geological setting of the Elephanta cave complex. The dark, stratified basalt cliff of Gharapuri's western hill forms a protective natural overhang above the cave's rock-cut entrance portico, covered with verdant post-monsoon vegetation. Square rock-cut pillars support the veranda architrave. Crucially, the photograph documents active conservation scaffolding and temporary steel shoring on the right facade, providing firsthand photographic evidence of ongoing heritage preservation work conducted by the Archaeological Survey of India (ASI) to manage geological fissures and water runoff.",
    architecturalFeatures: [
      "Stratified volcanic basalt cliff overhang (Deccan Traps)",
      "Square rock-hewn portico entrance pillars",
      "Active tubular steel conservation scaffolding framework",
      "Monsoon drainage catch-line and natural rock drip-ledge",
      "Lush seasonal tropical vegetation blanketing the hill summit",
    ],
    historicalContext:
      "The ancient excavators selected this elevated cliff site because the hard basalt layers provided natural resistance against weathering while offering panoramic surveillance over the strategic sea lanes of Mumbai Harbour.",
    conservationNotes:
      "Documents ongoing structural conservation: sealing rock joints against water seepage, removing invasive root systems that cause biological wedging, and securing the cliff facade from monsoon stone spalling.",
    tags: ["Cave Facade", "Conservation", "Scaffolding", "ASI", "Basalt Hill", "Preservation", "Field Photo"],
  },
  {
    id: "FLD-004",
    title: "Excavated Sunken Courtyard & Monumental Dual Porticoes",
    subtitle: "Panoramic Subterranean Plaza and Cliffside Scale",
    category: "Courtyard",
    location: "Elephanta Caves Main Temple (Cave 1), Mumbai Harbour, India",
    date: "27/09/2026",
    time: "10:30 AM GMT+05:30",
    coordinates: {
      lat: "18°57'45.4\" N",
      lng: "72°55'58.2\" E",
      elevation: "68 m",
    },
    image: "/images/field-cave1-courtyard.jpeg",
    originalFilename: "WhatsApp Image 2026-09-27 at 8.21.58 PM (2).jpeg",
    shortDescription:
      "Wide-angle view of Cave 1's monumental excavated sunken courtyard, showing vertical cliff walls, stone entrance steps, visiting public, and the dual portico colonnades.",
    detailedAnalysis:
      "A grand panoramic field photograph capturing the deep open-air sunken courtyard of Cave 1. Ancient stonecutters subtracted tens of thousands of cubic tons of basalt bedrock to carve out this vast sunken court, leaving sheer 15-meter vertical cliff walls that embrace the monument. The photo clearly displays the orthogonal dual-entrance design: the main northern portico on the left and the eastern lateral portico on the right, each fronted by rows of massive cushion-capital pillars. The presence of visitors in the courtyard provides an unmistakable human scale, illustrating the sheer monumentality of the UNESCO World Heritage excavation.",
    architecturalFeatures: [
      "Monumental sunken open-air courtyard quarried from basalt",
      "Dual orthogonal colonnaded porticoes (North and East axes)",
      "Overhanging vertical cliff walls exceeding 15 meters in height",
      "Stepped rock-hewn access plinth leading into mandapa chambers",
      "Natural stratified volcanic flow bedding planes visible on cliff face",
    ],
    historicalContext:
      "Cave 1 is renowned for its unique cruciform dual-axis layout: one axis connects the northern entrance to the colossal south-wall Trimurti relief, while the perpendicular east-west axis leads to the linga sanctum.",
    conservationNotes:
      "Open-air exposure leaves the courtyard floor vulnerable to torrential monsoon water pooling; drainage gullies cut into the courtyard floor channel stormwater safely away toward island ravines.",
    tags: ["Courtyard", "Cave 1", "Panoramic", "Dual Porticoes", "Scale", "Architecture", "Field Photo"],
  },
  {
    id: "FLD-005",
    title: "Kalyanasundara Murti (The Divine Marriage of Shiva & Parvati)",
    subtitle: "High-Relief Masterpiece of Panigrahana and Divine Nuptials",
    category: "Sculpture",
    location: "Elephanta Caves Main Temple (Cave 1), Mumbai Harbour, India",
    date: "27/09/2026",
    time: "11:15 AM GMT+05:30",
    coordinates: {
      lat: "18°57'45.4\" N",
      lng: "72°55'58.2\" E",
      elevation: "70 m",
    },
    image: "/images/field-kalyanasundara.jpeg",
    originalFilename: "WhatsApp Image 2026-09-27 at 8.21.59 PM.jpeg",
    shortDescription:
      "Celebrated high-relief panel of the wedding of Shiva and Parvati (Kalyanasundaramurti), showing the panigrahana ritual, celestial witnesses, and a monumental dvarapala guardian.",
    detailedAnalysis:
      "This high-resolution field photograph analyzes the iconic Kalyanasundara Murti (also known as Panigrahana or Vaivahika-murti) in Cave 1. The panel depicts the sacred wedding of Lord Shiva and Goddess Parvati. Shiva is portrayed with serene poise, extending his right hand to receive Parvati's right hand in the traditional wedding gesture. Parvati stands modestly to Shiva's right (the traditional placement of an unmarried bride prior to concluding the rites), carved with downcast eyes expressing bashful modesty (lajja) and elegant feminine grace. Above them, celestial vidyadharas and gandharvas hover in clouds to shower flowers upon the divine union. On the far left, a monumental dwarapala (door guardian) with an ornate crown and royal jewelry stands vigilant.",
    architecturalFeatures: [
      "Canonical Panigrahana hand-clasping marriage gesture in stone",
      "Delicate bodily contours contrasting Shiva's ascetic majesty with Parvati's grace",
      "Multi-tiered celestial cloud register with hovering vidyadhara couples",
      "Officiating ritual presence including Brahma tending the sacred fire",
      "Monumental left-flank dvarapala guardian figure with royal mukuta",
    ],
    historicalContext:
      "This composition is widely considered one of the emotional emotional pinnacles of early medieval Indian sculpture, harmonizing Shiva's austere renunciation with the joy of householder life and cosmic fertility.",
    conservationNotes:
      "The basalt relief exhibits minor weathering and fractured arms on attendant figures; preserved under controlled indirect lighting and protected from direct physical contact by perimeter railings.",
    tags: ["Cave 1", "Kalyanasundara", "Shiva", "Parvati", "Marriage", "Sculpture", "Field Photo"],
  },
];
