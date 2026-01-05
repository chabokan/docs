---
title: "آموزش استقرار Java"
icon: "faRocket"
sidebar_label: "استقرار اولیه"
description: "در این بخش می خواهیم آموزش نحوه استقرار اولیه هاست Java را به شما آموزش دهیم"
---

# استقرار اولیه Java
---

در این بخش می خواهیم آموزش نحوه استقرار اولیه Java را به شما آموزش دهیم. همانطور که در گیف زیر مشاهده میکنید، ابتدا
میبایست `Java` را در سرویس داکر راه اندازی کنیم. برای اینکار ابتدا به پنل کاربری مراجعه کرده و به قسمت ساخت سرویس جدید >
میزبانی آسان > `Docker` میرویم.

![استقرار Java در چابکان](https://s1.chabokan.net/docs/images/docker-install.jpg)

## استقرار Java

با توجه به اینکه برنامه‌های Java باید ابتدا کامپایل و سپس اجرا شوند، ۲ روش برای اسقرار Java داریم:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="کامپایل و اجرا">
در این روش نیاز به ارسال سورس کد برنامه به سرویس را داریم و فرایند کامپایل در هنگام اجرای سرویس انجام می‌شود. در این روش
ساختار `Dockerfile` به این صورت می‌تواند باشد:

```dockerfile
# Compile
FROM maven:3.9.11-eclipse-temurin-25 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Run
FROM eclipse-temurin:25
WORKDIR /app
COPY --from=build /app/target/my-application.jar .
CMD ["java", "-jar", "my-application.jar"]
```

</TabItem>
<TabItem value="صرفا اجرا">
در این روش نیازی به ارسال سورس کد برنامه به سرویس نیست، بلکه فایل کامپایل شده را صرفا به سرویس ارسال می‌کنیم. یکی از
فرمت‌های رایج کامپایل‌شده `jar` می‌باشد که در این مثال از آن استفاده کردیم.

```dockerfile
# Run
FROM eclipse-temurin:25
WORKDIR /app
COPY my-application.jar .
CMD ["java", "-jar", "my-application.jar"]
```

</TabItem>
</Tabs>

:::info نکته
در هر کدام از روش‌های توضیح داده شده می‌بایست فایل‌های مورد نیاز پروژه در سرویس وجود داشته باشند. برای قرار دادن این
فایل‌ها می‌توانید از روش‌های استقرار موجود در سرویس‌های چابکان استفاده کنید.
:::

import Deploy from '/docs/10-deploy/_deploy.md';

<Deploy />

import Versions from './_versions.md';

<Versions />

import Features from '/docs/13-features/_features.md';

<Features />

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/docker"
img="https://s1.chabokan.net/docs/images/docker-banner.png"
/>
