// Survey data pre-processed from gharapuri_google_forms_responses.csv
// Names and Student IDs have been removed for privacy

export const surveyMeta = {
  totalResponses: 127,
  collectionDate: "September 27, 2026",
  description:
    "Survey conducted among 127 students to gauge awareness, interest, and preferences regarding the digital preservation of Elephanta Caves (Gharapuri) heritage.",
};

export const heardOfCaves: Record<string, number> = {
  Yes: 92,
  No: 14,
  "I'm not sure": 21,
};

export const visitedCaves: Record<string, number> = {
  Yes: 12,
  No: 115,
};

export const familiarityDistribution: Record<string, number> = {
  "1": 7,
  "2": 28,
  "3": 36,
  "4": 30,
  "5": 26,
};

export const interestAspects: Record<string, number> = {
  "Sculptures": 56,
  "Stories and traditions": 54,
  "Religious/cultural significance": 54,
  "Natural surroundings": 49,
  "Architecture": 48,
  "History": 47,
};

export const shouldDigitallyDocument: Record<string, number> = {
  "Definitely yes": 68,
  "Probably yes": 34,
  "Not sure": 12,
  "Probably no": 11,
  "Definitely no": 2,
};

export const digitalMethods: Record<string, number> = {
  "Virtual tours": 60,
  "Online archives": 60,
  "Digital maps": 59,
  "Videos/documentaries": 57,
  "Audio recordings / oral histories": 54,
  "Digital photographs": 53,
  "3D scanning / 3D models": 38,
};

export const wouldUseWebsite: Record<string, number> = {
  "Definitely": 53,
  "Probably": 52,
  "Maybe": 20,
  "Probably not": 1,
  "Definitely not": 1,
};

export const threeDUsefulnessDistribution: Record<string, number> = {
  "1": 6,
  "2": 11,
  "3": 21,
  "4": 37,
  "5": 52,
};

export const preferredContent: Record<string, number> = {
  "Historical timeline": 56,
  "3D cave exploration": 52,
  "Sculpture information": 51,
  "Conservation information": 50,
  "Photographic archive": 49,
  "Old documents / archival material": 48,
  "Oral histories": 44,
  "Interactive site map": 42,
};

export const biggestChallenge: Record<string, number> = {
  "Lack of funding": 33,
  "Loss of traditional knowledge": 24,
  "Natural deterioration": 20,
  "Visitor damage": 19,
  "Lack of awareness": 16,
  "Lack of documentation": 15,
};

export const wouldContribute: Record<string, number> = {
  "Yes": 64,
  "Maybe": 45,
  "No": 18,
};

export const topSuggestions: { text: string; count: number }[] = [
  { text: "More photographs and short videos would make the archive engaging.", count: 15 },
  { text: "An interactive map with information at each location would be helpful.", count: 11 },
  { text: "A timeline and interactive map would make the site easier to explore.", count: 11 },
  { text: "The 3D exploration would be useful for students who cannot visit the caves.", count: 11 },
  { text: "Include local stories and oral histories along with historical information.", count: 10 },
  { text: "Keep the interface simple and mobile friendly.", count: 10 },
  { text: "Use high-quality photographs with captions and source information.", count: 8 },
  { text: "Add detailed information about conservation and preservation.", count: 7 },
  { text: "Add 360 degree panoramic view of the caves.", count: 6 },
  { text: "Audio commentary or audio guides in regional languages like Marathi and Hindi.", count: 4 },
  { text: "Include an interactive 3D tour and clear information about the sculptures.", count: 3 },
  { text: "Provide information on the ferry timings and visiting hours alongside history.", count: 2 },
];
