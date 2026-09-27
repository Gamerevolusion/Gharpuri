import type { SiteMapMarker } from "./types";

export const siteMapMarkers: SiteMapMarker[] = [
  {
    id: "SM-01",
    name: "Cave 1 (Main Cave)",
    x: 50,
    y: 45,
    description:
      "The primary rock-cut cave on Elephanta Island, containing the monumental Trimurti sculpture and numerous other Shaiva panels. The cave follows a mandapa-style layout with a central sanctuary and surrounding subsidiary shrines.",
    image: "/images/trimurti.jpg",
    archiveRefs: ["GH-001", "GH-002", "GH-003", "GH-004", "GH-005", "GH-006", "GH-007", "GH-008"],
  },
  {
    id: "SM-02",
    name: "Cave 2",
    x: 35,
    y: 60,
    description:
      "A smaller rock-cut cave with a pillared veranda and shrine chamber. Less elaborately decorated than Cave 1, but significant for its spatial organization and as an example of the range of cave typologies on the island.",
    image: "/images/cave2.jpg",
    archiveRefs: ["GH-009"],
  },
  {
    id: "SM-03",
    name: "Cave 3",
    x: 60,
    y: 65,
    description:
      "A partially excavated cave complex. Its incomplete state provides insight into the progression of rock-cut excavation techniques.",
    image: "/images/cave3.jpg",
    archiveRefs: ["GH-010"],
  },
  {
    id: "SM-04",
    name: "Cave 4",
    x: 20,
    y: 70,
    description:
      "Another partially excavated chamber on the eastern side of the island. Together with Cave 3, it illustrates the scope of intended work that may have exceeded what was completed.",
    image: "",
    archiveRefs: ["GH-010"],
  },
  {
    id: "SM-05",
    name: "Elephanta Island Jetty",
    x: 50,
    y: 85,
    description:
      "The primary landing point for visitors arriving by ferry from the Gateway of India. The jetty connects the island to Mumbai's harbour and is the starting point for the pedestrian ascent to the caves.",
    image: "/images/ferry.jpg",
    archiveRefs: ["GH-012"],
  },
  {
    id: "SM-06",
    name: "Stone Elephant Site",
    x: 70,
    y: 55,
    description:
      "The original location of the large stone elephant that gave the island its Portuguese name 'Elephanta'. The elephant was moved to Mumbai in the 19th century and is now housed at the Bhau Daji Lad Museum.",
    image: "",
    archiveRefs: [],
  },
  {
    id: "SM-07",
    name: "Buddhist Stupa Remains",
    x: 30,
    y: 40,
    description:
      "Remains of a Buddhist stupa on the island, indicating that religious activity at Elephanta predates or coexists with the later Shaiva cave complex. The presence of Buddhist remains adds complexity to the island's religious history.",
    image: "",
    archiveRefs: [],
  },
];

export const siteMapNote =
  "Interpretive schematic — not to scale. Positions are approximate and diagrammatic. Use this map to orient yourself to the principal locations on Elephanta Island; for precise navigation, refer to onsite signage and ASI guidance.";
