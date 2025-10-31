// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'مستندات پلتفرم ابری چابکان',
    tagline: 'مرکز آموزش و راهنمایی سرویس های چابکان',
    favicon: 'img/favicon.ico',
    // Set the production url of your site here
    url: 'https://docs.chabokan.net',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'چابکان', // Usually your GitHub org/user name.
    projectName: 'مستندات چابکان', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    trailingSlash: true,

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'fa',
        locales: ['fa'],
        localeConfigs: {
            fa: {
                direction: 'rtl',
            },
        },
    },
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                googleTagManager: {
                    containerId: 'DOC_TAG_MANAGER_CODE',
                },
            }),
        ],
    ],
    themes: ['docusaurus-theme-search-typesense'],
    plugins: [
        require.resolve('docusaurus-plugin-image-zoom'),
        require.resolve('./src/plugins/chabokan-docusaurus-icon-plugin'),
        [
            '@docusaurus/plugin-client-redirects',
            {
                redirects: [
                    {
                        to: '/general-tips/base-commands/',
                        from: '/base-commands/',
                    },
                    {
                        to: '/instruction/spring/',
                        from: '/simple-hosting/spring/',
                    },
                    {
                        to: '/features/etc/hook/',
                        from: '/features/hook/',
                    },
                    {
                        to: '/features/etc/supervisor/',
                        from: '/features/supervisor/',
                    },
                    {
                        to: '/simple-hosting/php/more/',
                        from: '/features/php-settings/',
                    },
                    {
                        to: '/features/files/ftp/',
                        from: '/features/ftp/',
                    },
                    {
                        to: '/features/settings/zero-downtime/',
                        from: '/features/zero-downtime/',
                    },
                    {
                        to: '/features/settings/env/',
                        from: '/features/env/',
                    },
                    {
                        to: '/features/settings/duplicate/',
                        from: '/features/duplicate/',
                    },
                    {
                        to: '/features/etc/cron-job/',
                        from: '/features/cron-job/',
                    },
                    {
                        to: '/features/etc/timezone/',
                        from: '/features/timezone/',
                    },
                    {
                        to: '/domain/register-domain/',
                        from: '/features/domains/register-domain/',
                    },
                    {
                        to: '/domain/register-international-domain/',
                        from: '/features/domains/register-international-domain/',
                    },
                    {
                        to: '/domain/transfer-ir/',
                        from: '/features/domains/transfer-ir/',
                    },
                    {
                        to: '/domain/transfer-international/',
                        from: '/features/domains/transfer-international/',
                    },
                    {
                        to: '/domain/more/',
                        from: '/features/domains/more/',
                    },
                ],
                createRedirects(existingPath) {
                    if (existingPath.includes('/features/domains/')) {
                        return [existingPath.replace('/features/domains/', '/domains/')];
                    }
                    if (existingPath.includes('/features/email/')) {
                        return [existingPath.replace('/features/email/', '/email/')];
                    }

                    return undefined; //no redirect created
                },
            },
        ],
    ],
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            typesense: {
                // Replace this with the name of your index/collection.
                // It should match the "index_name" entry in the scraper's "config.json" file.
                typesenseCollectionName: 'chabokan-docs',

                typesenseServerConfig: {
                    nodes: [
                        {
                            host: 'typesense.chabokan.net',
                            port: 443,
                            protocol: 'https',
                        },
                    ],
                    apiKey: 'DOC_TYPESEARCH_TOKEN_LIMITED',
                },

                // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
                typesenseSearchParameters: {},

                // Optional
                contextualSearch: true,
            },
            zoom: {
                selector: '.theme-doc-markdown p > img',
                background: {
                    light: 'rgb(255, 255, 255, 0.7)',
                    dark: 'rgb(0, 0, 0, 0.7)'
                },
                config: {
                    // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
                }
            },
            colorMode: {
                defaultMode: 'light',
                disableSwitch: false,
                respectPrefersColorScheme: true,
            },
            // Replace with your project's social card
            image: 'img/chabokan-logo.jpg',
            navbar: {
                title: 'مستندات چابکان',
                logo: {
                    alt: 'مستندات  چابکان',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'آموزش اولیه',
                    },
                    {to: 'https://chabokan.net/', label: 'سایت اصلی', position: 'left'},
                    {to: 'https://hub.chabokan.net/', label: 'حساب کاربری', position: 'left'},
                    {
                        href: 'https://github.com/chabokan/',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'مستندات پرکاربرد',
                        items: [
                            {
                                label: 'آموزش اولیه چابکان',
                                to: '/intro/',
                            },
                            {
                                label: 'استقرار Django',
                                to: '/simple-hosting/django/deploy/',
                            },
                            {
                                label: 'استقرار Nodejs',
                                to: '/simple-hosting/nodejs/deploy/',
                            },
                            {
                                label: 'استقرار PHP',
                                to: '/simple-hosting/php/deploy/',
                            },
                            {
                                label: 'استقرار Docker',
                                to: '/simple-hosting/docker/deploy/',
                            },
                        ],
                    },
                    {
                        title: 'دیتابیس ها',
                        items: [
                            {
                                label: 'نصب و راه اندازی Mysql',
                                href: '/database/mysql/install/',
                            },
                            {
                                label: 'نصب و راه اندازی PostgreSQL',
                                href: '/database/postgresql/install/',
                            },
                            {
                                label: 'نصب و راه اندازی MongoDB',
                                href: '/database/mongodb/install/',
                            },
                            {
                                label: 'نصب و راه اندازی SQL Server',
                                href: '/database/sql-server/install/',
                            },
                        ],
                    },
                    {
                        title: 'ابزار ها',
                        items: [
                            {
                                label: 'گیت لب چابکان',
                                href: 'https://gitlab.chabokan.net/',
                            },
                            {
                                label: 'سرویس Sentry چابکان',
                                href: 'https://sentry.chabokan.net/',
                            },
                        ],
                    },
                    {
                        title: 'دسترسی سریع',
                        items: [
                            {
                                label: 'وب‌سایت چابکان',
                                href: 'https://chabokan.net/',
                            },
                            {
                                label: 'حساب کاربری',
                                href: 'https://hub.chabokan.net/',
                            },
                            {
                                label: 'سوالات متداول',
                                href: 'https://chabokan.net/faq/',
                            },
                            {
                                label: 'قوانین و مقررات',
                                href: 'https://chabokan.net/terms/',
                            },
                            {
                                label: 'وبلاگ',
                                href: 'https://chabokan.net/blog/',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Chabokan`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            docs: {
                sidebar: {
                    hideable: true,
                },
            }
        }),
};
module.exports = config;
