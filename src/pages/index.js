import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <p className="hero__description">
                    در مستندات پلتفرم ابری چابکان، می‌توانید راهنمای کامل استفاده از سرویس‌ها، استقرار برنامه‌ها و مدیریت زیرساخت ابری را مطالعه کنید.
                </p>
            </div>
        </header>
    );
}

export default function Home() {
    return (
        <Layout
            title="صفحه اصلی">

            <HomepageHeader/>
            <main className="main-platforms">
                {/*<HomepageFeatures />*/}
                <h2>سرویس های محبوب</h2>

                <Service name="Laravel" href="/simple-hosting/laravel/deploy/" imgSrc="https://s1.chabokan.net/docs/images/laravel-platform-1.jpeg"/>

                <Service name="Django" href="/simple-hosting/django/deploy/" imgSrc="https://s1.chabokan.net/docs/images/django-platform.jpeg"/>

                <Service name="Docker" href="/simple-hosting/docker/deploy/" imgSrc="https://s1.chabokan.net/docs/images/registry-platform.jpeg"/>

                <Service name="NodeJs" href="/simple-hosting/nodejs/deploy/" imgSrc="https://s1.chabokan.net/docs/images/node-platform.jpeg"/>

                <Service name="PHP" href="/simple-hosting/php/deploy/" imgSrc="https://s1.chabokan.net/docs/images/php-logo-platform-1.jpg"/>

                <Service name="Python" href="/simple-hosting/python/deploy/" imgSrc="https://s1.chabokan.net/docs/images/python-platform.jpeg"/>

                <Service name="Wordpress" href="/ready-application/wordpress/install/" imgSrc="https://s1.chabokan.net/docs/images/wordpress-platform.jpeg"/>

                <Service name="Minio (S3)" href="/storage/minio/install/" imgSrc="https://s1.chabokan.net/docs/images/minio-platform.jpeg"/>

                <Service name="NextCloud" href="/storage/nextcloud/install/" imgSrc="https://s1.chabokan.net/docs/images/next-cloud-platform-logo-1.jpg"/>

                <Service name="Mysql" href="/database/mysql/install/" imgSrc="https://s1.chabokan.net/docs/images/mysql_kJwUntu-1.jpeg"/>

                <Service name="PostgreSQL" href="/database/postgresql/install/" imgSrc="https://s1.chabokan.net/docs/images/postgresql.jpeg"/>

                <Service name="Redis" href="/database/redis/install/" imgSrc="https://s1.chabokan.net/docs/images/redis-platform.jpeg"/>

                <Service name="SQL Server" href="/database/sql-server/install/" imgSrc="https://s1.chabokan.net/docs/images/mssql-platfrom.jpeg"/>

                <Service name="MariaDB" href="/database/mariadb/install/" imgSrc="https://s1.chabokan.net/docs/images/mariadb.jpg"/>

                <Service name="MongoDB" href="/database/mongodb/install/" imgSrc="https://s1.chabokan.net/docs/images/mongodb-platform.jpeg"/>

                <Service name="Odoo" href="/ready-application/odoo/" imgSrc="https://s1.chabokan.net/docs/images/odoo-platform.jpg"/>

                <Service name="Matomo" href="/ready-application/matomo/" imgSrc="https://s1.chabokan.net/docs/images/matomo-platform.jpg"/>

                <Service name="Gitlab Runner" href="/ready-application/gitlabrunner/" imgSrc="https://s1.chabokan.net/docs/images/gitlab-runner.jpg"/>

                <Service name="ASP.Net Core" href="/simple-hosting/dotnetcore/deploy/" imgSrc="https://s1.chabokan.net/docs/images/dotnetcore-platform.jpeg"/>

                <Service name="NextJs" href="/simple-hosting/nextjs/deploy/" imgSrc="https://s1.chabokan.net/docs/images/next-platform.jpeg"/>

                <Service name="NuxtJs" href="/simple-hosting/nuxtjs/deploy/" imgSrc="https://s1.chabokan.net/docs/images/nuxt-platform.jpeg"/>

                <Service name="NestJs" href="/simple-hosting/nest/deploy/" imgSrc="https://s1.chabokan.net/docs/images/nest-platform.jpg"/>

                <Service name="React" href="/simple-hosting/react/deploy/" imgSrc="https://s1.chabokan.net/docs/images/react-platform.jpeg"/>

                <Service name="Flask" href="/simple-hosting/flask/deploy/" imgSrc="https://s1.chabokan.net/docs/images/flask-platform.jpeg"/>

                <Service name="Flutter" href="/simple-hosting/flutter/" imgSrc="https://s1.chabokan.net/docs/images/flutter-icon.jpg"/>
            </main>
        </Layout>
    );
}

function Service({name,href,imgSrc}){
    return (
        <a href={href} className="platform-icon" title={name}>
            <img
                src={imgSrc}
                alt={`استقرار و راه‌اندازی ${name} روی چابکان — پلتفرم ابری ایرانی`}
                loading="lazy"
            />
            <br/><span>{name}</span>
        </a>
    );
}
