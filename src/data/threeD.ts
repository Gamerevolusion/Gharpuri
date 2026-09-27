import type { ThreeDExperience } from "./types";

export const threeDExperiences: ThreeDExperience[] = [
  {
    title: "Elephanta Main Cave — 3D Documentation",
    provider: "CyArk / Tapestry",
    url: "https://tapestry.cyark.org/content/elephanta",
    description:
      "A comprehensive 3D digital record of Elephanta's Main Cave, created through LiDAR scanning and photogrammetry conducted by CyArk and its partners in 2023. The experience allows exploration of the cave's spatial structure and sculptural surfaces in interactive three dimensions.",
    documentationMethod: "LiDAR + Photogrammetry",
    year: "2023",
    credit: "CyArk / Tapestry — Digital documentation of Elephanta, Main Cave (2023)",
    license: "CyArk content is made available under specific terms — see source for details.",
  },
];

export const secondary3DResources = [
  {
    title: "Google Arts & Culture — Elephanta Caves",
    provider: "Google Arts & Culture",
    url: "https://artsandculture.google.com/project/elephanta-caves",
    description:
      "A curated digital presentation of Elephanta's heritage through Google Arts & Culture, featuring high-resolution imagery and contextual information.",
    credit: "Google Arts & Culture",
    license: "Google Arts & Culture content — see individual item attributions.",
  },
  {
    title: "CyArk 3D Tour — Elephanta",
    provider: "CyArk",
    url: "https://www.cyark.org/projects/elephanta",
    description:
      "CyArk's project page for Elephanta, with background on the 2023 digital documentation campaign and access to processed data.",
    credit: "CyArk — Elephanta Project",
    license: "CyArk content — see source for terms.",
  },
  {
    title: "Community / Open 3D Model (Sketchfab)",
    provider: "Sketchfab Community",
    url: "https://sketchfab.com/models/b3152003546c44e49b7e0d5bcedd6193/embed",
    description:
      "A community-uploaded 3D model available on Sketchfab. Labeled as a community/open model and not affiliated with or produced by GHARAPURI. CC attribution retained per the model's listing.",
    embedUrl:
      "https://sketchfab.com/models/b3152003546c44e49b7e0d5bcedd6193/embed",
    credit: "Sketchfab community model — attribution per original uploader's CC license.",
    license: "Check the model's Sketchfab listing for specific CC license terms.",
  },
];

export const processSteps = [
  { step: "01", title: "Physical Site", description: "The original cave complex — stone, space, and sculpture in situ on Elephanta Island." },
  { step: "02", title: "Laser Scanning", description: "LiDAR (Light Detection and Ranging) captures precise geometric data of the cave's surfaces and spatial relationships." },
  { step: "03", title: "Photogrammetry", description: "High-resolution photographs from multiple angles are processed into detailed surface texture data." },
  { step: "04", title: "Point Cloud", description: "The scanning and photography data merge into a dense 'point cloud' — millions of measured points defining the cave's form." },
  { step: "05", title: "3D Model", description: "The point cloud is processed into a navigable 3D model, with textured surfaces and spatial accuracy." },
  { step: "06", title: "Digital Preservation", description: "The model is archived, versioned, and made accessible as a permanent digital record — independent of the physical site's future condition." },
  { step: "07", title: "Public Access", description: "Through platforms like Tapestry/CyArk, the 3D data reaches researchers, educators, and the public — extending access beyond those who can visit in person." },
];
