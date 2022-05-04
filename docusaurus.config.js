/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'otter-guides',
  tagline: 'otter-guides',
  url: 'https://proyecto-nutria.io',
  baseUrl: '/otter-guides/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'proyecto-nutria',
  projectName: 'otter-guides',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      es: {
        label: 'Español',
      },
    },
  },
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'otter-guides',
      logo: {
        alt: 'Proyecto Nutria Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'interview/about',
          label: 'Interview',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'yaos/about',
          label: 'YAOS',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/proyecto-nutria/otter-guides',
          position: 'right',
          className: 'header-github-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Proyecto Nutria Logo',
        src: 'img/icon-70x70.png',
        href: 'https://proyectonutria.com/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Proyecto Nutria. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: './docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/proyecto-nutria/otter-guides',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/proyecto-nutria/otter-guides',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    "https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700",
  ],
};
