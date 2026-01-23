const myProfilePic = "/me.jpeg";

export default defineAppConfig({
  global: {
    picture: {
      dark: myProfilePic,
      light: myProfilePic,
      alt: "My profile picture",
    },
    meetingLink: "https://eadigital.com.au/",
    available: true,
  },
  ui: {
    prose: {
      // custom styling for Nuxt MDC comp
      h2: {
        slots: {
          base: "text-xl sm:text-xl lg:text-2xl font-medium !mt-0 mb-4",
        },
      },
    },
    colors: {
      primary: "blue",
      neutral: "neutral",
    },
    pageHero: {
      slots: {
        container: "py-18 sm:py-24 lg:py-32",
        title: "mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl",
        description:
          "mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted",
      },
    },
  },
  footer: {
    credits: `Built on the lands of the Wurundjeri`,
    colorMode: false,
    links: [
      {
        icon: "i-mdi-linkedin",
        to: "https://www.linkedin.com/in/davidhack",
        target: "_blank",
        "aria-label": "My LinkedIn",
      },
      {
        icon: "i-simple-icons-github",
        to: "https://github.com/ddavisj",
        target: "_blank",
        "aria-label": "My GitHub",
      },
    ],
  },
});
