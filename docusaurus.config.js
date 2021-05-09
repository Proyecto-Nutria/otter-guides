/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "otter-guides",
  tagline: "otter-guides",
  url: "https://proyecto-nutria.io",
  baseUrl: "/otter-guides/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "proyecto-nutria", // Usually your GitHub org/user name.
  projectName: "otter-guides", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },
    navbar: {
      title: "otter-guides",
      items: [
        {
          type: "doc",
          position: "left",
          docId: "interviewer/clone",
          label: "Interviewer",
        },
        {
          type: "doc",
          position: "left",
          docId: "interviewee/about",
          label: "Interviewee",
        },
        {
          href: "https://github.com/proyecto-nutria/otter-guides",
          position: "right",
          className: "header-github-link",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Proyecto Nutria. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/proyecto-nutria/otter-guides",
        },
        interviewer: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/proyecto-nutria/otter-guides",
        },
        interviewee: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/proyecto-nutria/otter-guides",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/proyecto-nutria/otter-guides",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
