// @ts-check

import { themes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "TapiocaDocs",
  tagline: "Technical docs",
  favicon: "img/favicon.ico",
  markdown: {
    mermaid: true,
  },

  // URL settings
  url: "https://github.com", // Change this to your actual site URL if different
  baseUrl: "/docus-docs/", // Adjust based on where your site is hosted. Use '/' if at root.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  organizationName: "0xRaz", // Your GitHub org/user name
  projectName: "Technical Docs", // Your repo name

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
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

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    mermaid: {
      theme: { light: "base", dark: "dark" },
    },
    navbar: {
      title: "Tapioca Docs",
      logo: {
        alt: "My Site Logo",
        src: "img/tapioca-logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        { to: "/blog", label: "Blog", position: "left" },
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
      theme: themes.github, // Adjusted import usage
      darkTheme: themes.dracula, // Adjusted import usage
    },
  },
};

export default config;
