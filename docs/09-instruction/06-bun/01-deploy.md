---
title: "استقرار اولیه"
icon: "faRocket"
description: "در این بخش می خواهیم آموزش نحوه استقرار اولیه هاست Bun را به شما آموزش دهیم"
---

# استقرار اولیه Bun
---

در این بخش می خواهیم آموزش نحوه استقرار اولیه Bun را به شما آموزش دهیم. همانطور که در گیف زیر مشاهده میکنید، ابتدا
میبایست `Bun` را در سرویس داکر راه اندازی کنیم. برای اینکار ابتدا به پنل کاربری مراجعه کرده و به قسمت ساخت سرویس جدید >
میزبانی آسان > `Docker` میرویم.
![استقرار Bun در چابکان](https://s1.chabokan.net/docs/gifs/deno-docker-install.gif)

![استقرار Bun در چابکان](https://s1.chabokan.net/docs/images/docker-install.jpg)

سپس در مرحله بعد یعنی پیکربندی سرویس محتوای `Dockerfile` را قرار داده و مراحل بعد را تا ساخت سرویس پیش میبریم.

```dockerfile title="Dockerfile"
FROM oven/bun:latest
WORKDIR /app
COPY . .
RUN bun install
CMD ["bun", "index.ts"]

```

پس از چند دقیقه، سرویس شما با موفقیت ساخته می‌شود. حال می‌توانید به توسعه اپلیکیشن خود با `Bun` بپردازید.

:::tip نکته
دقت کنید که `Dockerfile` این سرویس در قسمت مدیریت فایل‌ها موجود است و در صورت نیاز می‌توانید آن را ویرایش کنید.
:::

در ادامه مثال Quickstart که در [مستندات رسمی Bun](https://bun.com/docs/quickstart) موجود هست را در پلتفرم ابری چابکان
بررسی می‌کنیم.

در ابتدا باید با دستور زیر پروژه Bun را ایجاد کنید:

```shell
bun init my-app
```

با اجرای این دستور و انجام دستورالعمل‌های این فرایند، در نهایت پروژه شما در دایرکتوری `my-app` ایجاد می‌شود. سپس باید
محتویات این دایرکتوری را در سرویس خود آپلود کنید. برای اینکار راه‌های مختلی وجود دارند که شما می‌توانید براساس نیاز و
ترجیح خود یکی را برگزینید.

import Deploy from '/docs/10-deploy/_deploy.md';

<Deploy />

همانند مثال Quickstart اگر بخواهید یک وب سرور با استفاده از `Bun` راه‌اندازی کنید، می‌توانید از کد زیر استفاده کنید. این
کد را جایگزین فایل `index.ts` کنید:

```typescript title="index.ts"
const server = Bun.serve({
    port: 3000,
    routes: {
        "/": () => new Response('Bun!'),
    }
});

console.log(`Listening on ${server.url}`);
```

در این مثال وب سرور را روی پورت `3000` فعال کردیم و باید آن را در قسمت پورت‌ها مشخص کنیم تا برنامه در دسترس قرار بگیرد.

![استقرار Bun در چابکان](https://s1.chabokan.net/docs/images/bun-port.png)

حال برنامه سرویس شما آماده استفاده است و می‌توانید با مراجعه به دامنه‌ی خود در داشبورد سرویس خروجی وب‌سرور را مشاهده
کنید و یا دامنه‌ی اختصاصی خود را بر روی سرویس تنظیم نمایید.([تنظیم دامنه](/features/domains/))

import Features from '/docs/13-features/_features.md';

<Features />

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/docker"
img="https://s1.chabokan.net/docs/images/docker-banner.png"
/>
