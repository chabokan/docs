import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`صفحه اصلی | ${siteConfig.title}`}
            description="">
            <HomepageHeader/>
            <main class="main-platforms">
                {/*<HomepageFeatures />*/}
                <h2>سرویس های محبوب</h2>

<a href="/simple-hosting/laravel/deploy/" class="platform-icon"><img src="https://s1.chabokan.net/docs/images/laravel-platform-1.jpeg" /><br /><span>Laravel</span></a>

<a href="/simple-hosting/django/deploy/" class="platform-icon"><img src="https://s1.chabokan.net/docs/images/django-platform.jpeg" /><br /><span>Django</span></a>

<a href="/simple-hosting/docker/deploy/" class="platform-icon"><img src="https://s1.chabokan.net/docs/images/registry-platform.jpeg" /><br /><span>Docker</span></a>

<a href="/simple-hosting/nodejs/deploy/" class="platform-icon"><img src="https://s1.chabokan.net/docs/images/node-platform.jpeg" /><br /><span>NodeJs</span></a>

<a href="/simple-hosting/php/deploy/" class="platform-icon"><img src="https://s1.chabokan.net/docs/images/php-logo-platform-1.jpg" /><br /><span>PHP</span></a>

<a href="/simple-hosting/python/deploy/" class="platform-icon"><img src="https://s1.chabokan.net/docs/images/python-platform.jpeg" /><br /><span>Python</span></a>

<a href="/ready-application/wordpress/install/" class="platform-icon"><img src="https://s1.chabokan.net/docs/images/wordpress-platform.jpeg" /><br /><span>Wordpress</span></a>

<a href="/storage/minio/install/" class="platform-icon"><img src="https://s1.chabokan.net/docs/images/minio-platform.jpeg" /><br /><span>Minio (S3)</span></a>

<a href="/storage/nextcloud/install/" class="platform-icon"><img src="https://s1.chabokan.net/docs/images/next-cloud-platform-logo-1.jpg" /><br /><span>NextCloud</span></a>

<a href="/database/mysql/install/" class="platform-icon"><img src="https://s1.chabokan.net/docs/images/mysql_kJwUntu-1.jpeg" /><br /><span>Mysql</span></a>

<a href="/database/postgresql/install/" class="platform-icon"><img src="https://s1.chabokan.net/docs/images/postgresql.jpeg" /><br /><span>PostgreSQL</span></a>

<a href="/database/redis/install/" class="platform-icon"><img src="https://s1.chabokan.net/docs/images/redis-platform.jpeg" /><br /><span>Redis</span></a>

<a href="/database/sql-server/install/" class="platform-icon"><img src="https://s1.chabokan.net/docs/images/mssql-platfrom.jpeg" /><br /><span>SQL Server</span></a>

<a href="/database/mariadb/install/" class="platform-icon"><img src="https://s1.chabokan.net/docs/images/mariadb.jpg" /><br /><span>MariaDB</span></a>

<a href="/database/mongodb/install/" class="platform-icon"><img src="https://s1.chabokan.net/docs/images/mongodb-platform.jpeg" /><br /><span>MongoDB</span></a>

<a href="/ready-application/odoo/" class="platform-icon"><img src="https://s1.chabokan.net/docs/images/odoo-platform.jpg" /><br /><span>Odoo</span></a>

<a href="/ready-application/matomo/" class="platform-icon"><img src="https://s1.chabokan.net/docs/images/matomo-platform.jpg" /><br /><span>Matomo</span></a>

<a href="/ready-application/gitlabrunner/" class="platform-icon"><img src="https://s1.chabokan.net/docs/images/gitlab-runner.jpg" /><br /><span>Gitlab Runner</span></a>

<a href="/simple-hosting/dotnetcore/deploy/" class="platform-icon"><img src="https://s1.chabokan.net/docs/images/dotnetcore-platform.jpeg" /><br /><span>ASP.Net Core</span></a>

<a href="/simple-hosting/nextjs/deploy/" class="platform-icon"><img src="https://s1.chabokan.net/docs/images/next-platform.jpeg" /><br /><span>NextJs</span></a>

<a href="/simple-hosting/nuxtjs/deploy/" class="platform-icon"><img src="https://s1.chabokan.net/docs/images/nuxt-platform.jpeg" /><br /><span>NuxtJs</span></a>

<a href="/simple-hosting/nest/deploy/" class="platform-icon"><img src="https://s1.chabokan.net/docs/images/nest-platform.jpg" /><br /><span>NestJs</span></a>

<a href="/simple-hosting/react/deploy/" class="platform-icon"><img src="https://s1.chabokan.net/docs/images/react-platform.jpeg" /><br /><span>React</span></a>

<a href="/simple-hosting/flask/deploy/" class="platform-icon"><img src="https://s1.chabokan.net/docs/images/flask-platform.jpeg" /><br /><span>Flask</span></a>

<a href="/simple-hosting/flutter/" class="platform-icon"><img src="https://s1.chabokan.net/docs/images/flutter-icon.jpg" /><br /><span>Flutter</span></a>



            </main>
        </Layout>
    );
}
