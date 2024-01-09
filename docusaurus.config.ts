import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Otter Guides',
  tagline: 'Just otter guides',
  favicon: 'img/favicon.ico',

  url: 'https://proyectonutria.com/',
  baseUrl: '/otter-guides/',
  organizationName: 'proyecto-nutria',
  projectName: 'otter-guides',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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

  presets: [
    [
      'classic',
      {
        docs: {
          path: './docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/proyecto-nutria/otter-guides',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/proyecto-nutria/otter-guides',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Otter Guides',
      logo: {
        alt: 'Proyecto Nutria Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'interview/interviewee/about',
          label: 'Interviewee',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'interview/interviewer/about',
          label: 'Interviewer',
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
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  stylesheets: [
    "https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700",
  ],
};

export default config;
