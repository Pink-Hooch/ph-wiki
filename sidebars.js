// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'getting-started',

    {
      type: 'category',
      label: 'Commands',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Survival SMP',
          collapsed: false,
          items: [
            'commands/survival/index',

            {
              type: 'category',
              label: 'Guilds',
              collapsed: false,
              items: [
                'commands/survival/guilds/index',
                'commands/survival/guilds/creating-a-guild',
                'commands/survival/guilds/joining-and-leaving',
                'commands/survival/guilds/managing-members',
                'commands/survival/guilds/guild-settings',
                'commands/survival/guilds/guild-homes-and-claims',
                'commands/survival/guilds/allies-and-chat',
              ],
            },

            'commands/survival/friends',
          ],
        },
      ],
    },

    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        'guides/how-to-claim-land',
        'guides/how-to-make-money',
        'guides/how-to-play-with-friends',
      ],
    },

    'rules',
    'faq',
  ],
};

export default sidebars;
