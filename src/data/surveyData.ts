// Survey data pre-processed from gharapuri_google_forms_responses.csv
// Names and Student IDs have been removed for privacy

export const surveyMeta = {
  totalResponses: 69,
  collectionDate: "September 27, 2026",
  description:
    "Survey conducted among 69 students to gauge awareness, interest, and preferences regarding the digital preservation of Elephanta Caves (Gharapuri) heritage.",
};

export const heardOfCaves: Record<string, number> = {
  Yes: 49,
  No: 10,
  "I'm not sure": 10,
};

export const visitedCaves: Record<string, number> = {
  Yes: 8,
  No: 61,
};

export const familiarityDistribution: Record<string, number> = {
  "1": 4,
  "2": 15,
  "3": 21,
  "4": 16,
  "5": 13,
};

export const interestAspects: Record<string, number> = {
  "Religious/cultural significance": 28,
  History: 27,
  Sculptures: 26,
  Architecture: 22,
  "Stories and traditions": 20,
  "Natural surroundings": 18,
};

export const shouldDigitallyDocument: Record<string, number> = {
  "Definitely yes": 39,
  "Probably yes": 17,
  "Not sure": 5,
  "Probably no": 4,
  "Definitely no": 2,
  // Note: 2 people skipped
};

export const digitalMethods: Record<string, number> = {
  "Virtual tours": 34,
  "Online archives": 30,
  "Audio recordings / oral histories": 27,
  "Videos/documentaries": 27,
  "Digital photographs": 24,
  "Digital maps": 26,
  "3D scanning / 3D models": 24,
};

export const wouldUseWebsite: Record<string, number> = {
  Definitely: 28,
  Probably: 21,
  Maybe: 13,
  "Probably not": 1,
  "Definitely not": 1,
  // Note: 5 skipped
};

export const threeDUsefulnessDistribution: Record<string, number> = {
  "1": 2,
  "2": 6,
  "3": 10,
  "4": 19,
  "5": 32,
};

export const preferredContent: Record<string, number> = {
  "3D cave exploration": 35,
  "Historical timeline": 30,
  "Conservation information": 28,
  "Sculpture information": 27,
  "Interactive site map": 21,
  "Photographic archive": 24,
  "Old documents / archival material": 23,
  "Oral histories": 18,
};

export const biggestChallenge: Record<string, number> = {
  "Lack of funding": 18,
  "Loss of traditional knowledge": 13,
  "Visitor damage": 12,
  "Natural deterioration": 9,
  "Lack of documentation": 7,
  "Lack of awareness": 7,
  // Note: 3 skipped
};

export const wouldContribute: Record<string, number> = {
  Yes: 32,
  Maybe: 19,
  No: 12,
  // Note: 6 skipped
};

export const topSuggestions: { text: string; count: number }[] = [
  { text: "More photographs and short videos would make the archive engaging.", count: 10 },
  { text: "An interactive map with information at each location would be helpful.", count: 9 },
  { text: "Include local stories and oral histories along with historical information.", count: 9 },
  { text: "A timeline and interactive map would make the site easier to explore.", count: 7 },
  { text: "Keep the interface simple and mobile friendly.", count: 6 },
  { text: "Use high-quality photographs with captions and source information.", count: 5 },
  { text: "The 3D exploration would be useful for students who cannot visit the caves.", count: 5 },
  { text: "Add detailed information about conservation and preservation.", count: 4 },
  { text: "Include an interactive 3D tour and clear information about the sculptures.", count: 3 },
];
