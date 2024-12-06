export const welcomeData: WelcomeDataTypes = {
  image: "/me.jpeg",
  actualWork: "GM2Dev",
  workPage: "https://gm2dev.com",
  title: "Hey, I am Tomás Korzusehec",
  subtitle:
    "Full-Stack Developer from Argentina 🇦🇷 with experience in React, Astro, NodeJS, SQLite and other tecnologies",
};

type WelcomeDataTypes = {
  image: string;
  actualWork?: string;
  workPage?: string;
  title: string;
  subtitle: string;
};
