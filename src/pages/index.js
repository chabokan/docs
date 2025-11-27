import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {config} from "@fortawesome/fontawesome-svg-core";
import styles from './index.module.css';
import ServiceLogo from "../components/ServiceLogo";

config.autoAddCss = false;

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <p className="hero__description">
                    در مستندات پلتفرم ابری چابکان، می‌توانید راهنمای کامل استفاده از سرویس‌ها، استقرار برنامه‌ها و
                    مدیریت زیرساخت ابری را مطالعه کنید.
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
                {popularServices.map(serviceId => <ServiceLogo key={serviceId} id={serviceId} linkMode={true}/>)}
            </main>
        </Layout>
    );
}

const popularServices = [
    "laravel",
    "django",
    "docker",
    "nodejs",
    "php",
    "python",
    "wordpress",
    "minio",
    "nextcloud",
    "mysql",
    "postgresql",
    "redis",
    "sqlserver",
    "mariadb",
    "mongodb",
    "odoo",
    "matomo",
    "gitlabrunner",
    "dotnetcore",
    "nextjs",
    "nuxtjs",
    "nest",
    "react",
    "flask",
    "flutter"
]
