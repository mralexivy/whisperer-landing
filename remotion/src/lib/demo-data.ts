// One demo meeting, shared by every product visual so the story agrees across the site:
// the transcript, the AI notes, Ask AI and the MCP answer all describe the same call.

export type Speaker = { id: string; name: string; initials: string; color: string };

export const SPEAKERS: Record<string, Speaker> = {
  me: { id: "me", name: "Me", initials: "ME", color: "#5B6CF7" },
  maya: { id: "maya", name: "Maya Levin", initials: "ML", color: "#10B981" },
  dan: { id: "dan", name: "Dan Ortiz", initials: "DO", color: "#F59E0B" },
  priya: { id: "priya", name: "Priya Shah", initials: "PS", color: "#EC4899" },
};

export const MEETING = {
  title: "Mobile launch review",
  app: "zoom" as const,
  date: "Tue 11 Nov, 10:00",
  duration: "32:14",
  words: "4,812 words",
};

export type Segment = { speaker: keyof typeof SPEAKERS; t: string; text: string };

export const SEGMENTS: Segment[] = [
  { speaker: "maya", t: "02:14", text: "Beta feedback is in. Onboarding is the only thing people keep tripping on, the rest is solid." },
  { speaker: "dan", t: "02:20", text: "Then we fix onboarding first. If we cut the account step we can still ship on the 24th." },
  { speaker: "me", t: "02:26", text: "Agreed. Let's move launch to the 24th and keep the press embargo where it is." },
  { speaker: "priya", t: "02:31", text: "I'll rewrite the first three screens and have a build for Thursday." },
  { speaker: "maya", t: "02:35", text: "One open question: do we still need the waitlist page once the app is public?" },
];

export const OVERVIEW =
  "The team reviewed beta feedback for the mobile app. Onboarding was the main problem, so the account step will be removed and launch moves to 24 November. The press embargo stays unchanged.";

export const DECISIONS = [
  { text: "Launch moves to 24 November", t: "02:26" },
  { text: "Cut the account step from onboarding", t: "02:20" },
];

export const ACTION_ITEMS = [
  { owner: "priya", text: "Rewrite the first three onboarding screens", due: "Thu" },
  { owner: "dan", text: "Cut the account step from onboarding", due: "24 Nov" },
  { owner: "me", text: "Keep the press embargo where it is", due: "" },
] as const;

export const OPEN_QUESTION = "Do we still need the waitlist page after launch?";

export const ASK = {
  question: "When is launch now, and why did it move?",
  answer:
    "Launch moved to 24 November. Beta users kept getting stuck in onboarding, so the team is removing the account step first.",
  sources: ["02:20", "02:26"],
};

export const UPCOMING = [
  { time: "10:00", end: "10:30", title: "Mobile launch review", app: "zoom" as const, people: ["maya", "dan", "priya"], now: true },
  { time: "13:30", end: "14:00", title: "Design crit: onboarding v2", app: "google-meet" as const, people: ["priya", "maya"] },
  { time: "16:00", end: "16:45", title: "Weekly sync with Northwind", app: "teams" as const, people: ["dan"] },
];

export const MCP_CHAT = {
  question: "What did we decide in Tuesday's launch review? Make me a checklist.",
  calls: [
    { tool: "search_meetings", arg: "launch review" },
    { tool: "get_meeting", arg: "Mobile launch review" },
  ],
  answer: {
    lead: "From your Whisperer notes for Mobile launch review (Tue 11 Nov):",
    items: [
      "Launch moved to 24 November",
      "Account step comes out of onboarding",
      "Priya rewrites three onboarding screens by Thursday",
      "Dan cuts the account step from onboarding",
      "The press embargo stays where it is",
    ],
  },
};
