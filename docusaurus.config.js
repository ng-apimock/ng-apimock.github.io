module.exports = {
    title: 'ng-apimock',
    tagline: 'Scenario based api mocking',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    favicon: 'img/logo.svg',
    organizationName: 'ng-apimock',
    projectName: 'core',
    plugins: ['@docusaurus/plugin-google-analytics'],
    scripts: [
        {
            src:
                'https://buttons.github.io/buttons.js',
            async: true,
        }
    ],
    themeConfig: {
        disableDarkMode: true,
        googleAnalytics: {
            trackingID: 'UA-171656203-1'
        },
        navbar: {
            title: 'ng-apimock',
            logo: {
                alt: 'ng-apimock',
                src: 'img/logo.svg',
                srcDark: 'img/logo_dark.svg',
            },
            links: [
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                {
                    to: 'docs/plugins/plugin-introduction',
                    activeBasePath: 'docs/plugins/plugin-introduction',
                    label: 'Plugins',
                    position: 'left'
                },
                {
                    to: 'docs/api/select-scenario',
                    activeBasePath: 'docs/api/select-scenario',
                    label: 'API',
                    position: 'left'
                },
                {
                    href: 'https://github.com/ng-apimock',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Getting started',
                            to: 'docs/',
                        },
                        {
                            label: 'Plugins',
                            to: 'docs/plugins/plugin-introduction/',
                        },
                        {
                            label: 'API',
                            to: 'docs/api/select-scenario/',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Slack',
                            href: 'https://join.slack.com/t/apimock/shared_invite/zt-fip1fisk-5vRp3SZ1x4HryaQo9Lww4w'
                        },
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/search?q=ng-apimock',
                        }, {
                            label: 'GitHub',
                            href: 'https://github.com/ng-apimock',
                        }
                    ],
                },
                {
                    title: 'Special thanks to',
                    items: [
                        {
                            label: 'Icons by Icons8',
                            href: 'https://icons8.com/icon/64365/robot-2'
                        },
                        {
                            label: 'Built with Docusaurus',
                            href: 'https://v2.docusaurus.io/'
                        }
                    ],
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} ng-apimock`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    homePageId: 'installation',
                    sidebarPath: require.resolve('./sidebars.js'),
                    showLastUpdateAuthor: true,
                    editUrl:
                        'https://github.com/ng-apimock/ng-apimock.github.io/tree/develop/docs',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                }
            }
        ]
    ]
};
