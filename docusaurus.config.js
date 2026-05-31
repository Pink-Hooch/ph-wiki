// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pink Hooch Wiki',
  tagline: 'Commands, guides, rules, and help for Pink Hooch',
  favicon: 'img/server-icon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://wiki.pink-hooch.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      es: {
        label: 'Español',
      },
      fr: {
        label: 'Français',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/server-icon.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Pink Hooch Wiki',
        logo: {
          alt: 'Pink Hooch Logo',
          src: 'img/server-icon.png',
        },
        items: [
          {
            to: '/docs/getting-started',
            position: 'left',
            label: 'Getting Started',
          },
          {
            to: '/docs/commands/survival',
            position: 'left',
            label: 'Commands',
          },
          {
            to: '/docs/rules',
            position: 'left',
            label: 'Rules',
          },
          {
            href: 'https://pink-hooch.net',
            position: 'right',
            label: 'Main Website',
          },
          {
            href: 'https://discord.gg/3vfDwwjshq',
            position: 'right',
            label: 'Discord',
          },
          {
            href: 'https://github.com/Pink-Hooch',
            label: 'GitHub',
            position: 'right',
          },
          { type: 'localeDropdown', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Server',
            items: [
              {
                label: 'Main Website',
                href: 'https://pink-hooch.net',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/3vfDwwjshq',
              },
            ],
          },
          {
            title: 'Wiki',
            items: [
              {
                label: 'Getting Started',
                href: '/docs/getting-started',
              },
              {
                label: 'Commands',
                href: '/docs/commands/general',
              },
              {
                label: 'Rules',
                href: '/docs/rules',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pink Hooch Network. Not affiliated with Mojang or Microsoft. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
