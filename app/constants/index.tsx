export const navLinks = [
  { label: 'About the book', href: '#hero' },
  { label: 'Explore the characters', href: '#explore' },
  {/*{ label: 'Get Started', href: '#get-started' },
  { label: "What's New", href: '#whats-new' },*/
   label: 'AI World', href: '#world' },
  { label: 'Writing Insights', href: '#insights' },
  { label: 'Feedback', href: '#feedback' },
] as const;

export const exploreWorlds = [
  {
    id: "world-1",
    imgUrl: "/YanDarnNewYugaHQ.png",
    title: "Yan Darn - CTO of Agentic Solutions",
  },
  {
    id: "world-2",
    imgUrl: "/TejGuruCrystalUniverse700.png",
    title: "Tej - New Yuga 'AI Guru' (missing)",
  },
  {
    id: "world-3",
    imgUrl: "/Wizz_Projection_Room.png",
    title: "WIZZ - AI Showman",
  },
  {
    id: "world-4",
    imgUrl: "/AshFaradayCage.png",
    title: "Ash - Advanced Software Engineer",
  },
  {
    id: "world-5",
    imgUrl: "/Rei_Viewing_Shiva.png",
    title: "Rei - Philosopher, Symbol Decoder",
  },
];

export const startingFeatures = [
  "Find a world that suits you and you want to enter",
  "Enter the world by reading basmalah to be safe",
  "No need to beat around the bush, just stay on the gas and have fun",
];

export const newFeatures = [
  {
    imgUrl: "/vrpano.svg",
    title: "A new world",
    subtitle:
      "we have the latest update with new world for you to try never mind",
  },
  {
    imgUrl: "/headset.svg",
    title: "More realistic",
    subtitle:
      "In the latest update, your eyes are narrow, making the world more realistic than ever",
  },
];

export const insights = [
  {
    imgUrl: "/planet-06.png",
    title: "The launch of the Metaverse makes Elon musk ketar-ketir",
    subtitle:
      "Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.",
  },
  {
    imgUrl: "/planet-07.png",
    title: "7 tips to easily master the madness of the Metaverse",
    subtitle:
      "Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum",
  },
  {
    imgUrl: "/planet-08.png",
    title: "With one platform you can explore the whole world virtually",
    subtitle:
      "Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem",
  },
];

export const socials = [
  {
    name: "twitter",
    url: "/twitter.svg",
  },
  {
    name: "linkedin",
    url: "/linkedin.svg",
  },
  {
    name: "instagram",
    url: "/instagram.svg",
  },
  {
    name: "facebook",
    url: "/facebook.svg",
  },
];

export const blogPosts = [
  {
    slug: "character-development",
    imgUrl: "/planet-06.png",
    title: "Character Development",
    subtitle: "How to generate and develop human (and AI) characters",
    content: `
      # A template for character development
      
      Poorly defined characters can quickly develop issues, such as:

      - Continuity and consistency
      - Values and beliefs
      - Physical appearances and attributes
      - Motivations and goals
      - Relationships and interactions
      - Memory and history
      - Development as a character

      This the the character template I used for AGI:theBook

      identity:
        fullName:                         # Legal/formal name
        usedName:                         # Preferred name/nickname
        age:                              # Current age
        nationality:                      # Country of origin/citizenship
        location:                         # Current residence
        personalityType:                  # Intro/extrovert tendencies
        energyStyle:                      # Impact on team dynamics
        characterBrief: >
          A few short sentences describing the character
        archetype:                        # Story role/character type
      background:
        education:                        # Education history
        employment:                       # Employment history
          current:
          previous:
        skillset:
      voice: communication style, how do they sound when stressed, emotional etc
      beliefs:
      relationships:
      quirks: # These make the character!  For example...
        trigger: "Ethical corners being cut"
        obsession: "Code optimization"
        blindSpot: "Own achievements"
        habit: "Over-documents everything"
        stress_response: "Deep dives into technical docs"
      story:
        # add elements here relating to the character's story arc
      history:
        # add elements here relating to the character's history
    
      The easiest way to generate a character is to start writing about them, their personality, their backstory, their goals, their relationships, their quirks, their story, and their history.  Then just ask any friendly AI to create your characters using this template.
    `,
    date: "2025-01-20",
    author: "Brian Merritt"
  },  {
    slug: "writing-a-scene-with-prompts",
    imgUrl: "/planet-07.png",
    title: "Writing a scene with prompts",
    subtitle: "A step by step guide to writing a scene with the right level of detail for your next big scene.",
    content: `
      # The 'prompt' is the key to writing with AI, and the scene is your stepping stone to writing a novel.
      
      More content soon!
    `,
    date: "2025-01-20",
    author: "Brian Merritt"
  },  {
    slug: "world-building-101",
    imgUrl: "/planet-08.png",
    title: "World Building 101",
    subtitle: "How to generate and develop realisic places for your story",
    content: `
      # Generate realistic places for your story

      Content coming soon!
    `,
    date: "2025-01-20",
    author: "Brian Merritt"
  },
  // ... convert other insights to similar format
];
