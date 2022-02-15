const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Pumpkin一站式融合计算平台',
  tagline: '云启智城',
  url: 'https://pumpkin.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/pumpkin-doc-pic.svg',
  organizationName: 'Pumpkin', // Usually your GitHub org/user name.
  projectName: 'Pumpkin', // Usually your repo name.
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
      },
    ],
  ],
  i18n: {
    defaultLocale: 'zh',
    locales: ['en', 'zh'],
    localeConfigs: {
      zh: {
        label: '中文',
      },
      en: {
        label: 'English',
      },
    },
  },
  themeConfig: {
    navbar: {
      // style: 'dark',
      title: 'Pumpkin',
      logo: {
        alt: 'Pumpkin Logo',
        src: 'img/pumpkin_logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction/intro',
          label: '文档',
          position: 'left',
        },
        // {
        //   to: '/blog',
        //   label: '博客',
        //   position: 'left'
        // },
        
        // {
        //   type: 'docsVersionDropdown',
        //   position: 'right',
        // },
        {
          href: 'https://git.yunqiic.org.cn/Yunqiic/pumpkin',
          label: '托管平台',
          position: 'right',
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '学习',
          items: [
            {
              label: '平台介绍',
              to: '/docs/introduction/intro',
            },
            {
              label: '用户手册',
              to: '/docs/manual/intro',
            },
            {
              label: '管理员手册',
              to: '/docs/management/intro',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: '云启智城',
              href: 'https://www.yunqiic.org.cn/',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: '安装流程',
              href: '/docs/introduction/intro',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pumpkin build by 云启智城`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/palenight'),
      darkTheme: require('prism-react-renderer/themes/palenight'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
