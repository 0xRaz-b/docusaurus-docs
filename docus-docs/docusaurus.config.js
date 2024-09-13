const { themes } = require("prism-react-renderer");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "TapiocaDocs",
  tagline: "Technical docs",
  favicon: "img/favicon.ico",

  // URL settings
  url: "https://docusaurus-2-tap.netlify.app", // Updated to match your last export
  baseUrl: "/", // Updated to match your last export

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  organizationName: "0xRaz",
  projectName: "Technical Docs",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
      mermaid: {
        theme: { light: "base", dark: "dark" },
      },
      navbar: {
        title: "",
        logo: {
          alt: "My Site Logo",
          src: "img/tapioca-logo.png",
          style: {
            width: "150px",
            height: "auto",
            transform: "translateY(-17px)",
          },
        },
        items: [
          { to: "/docs/intro", label: "Intro", position: "left" },
          { to: "/docs/category/user", label: "User", position: "left" },
          { to: "/docs/category/legal", label: "Legal", position: "left" },
          {
            to: "/docs/category/governance",
            label: "Governance",
            position: "left",
          },
          {
            to: "/docs/category/developers",
            label: "Developers",
            position: "left",
          },
          {
            href: "https://github.com/0xRaz/Technical-Docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/0xRaz/Technical-Docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};

module.exports = config;
