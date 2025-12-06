---
title: "استقرار اولیه"
icon: "faRocket"
description: "در این بخش می خواهیم آموزش نحوه استقرار اولیه هاست Deno را به شما آموزش دهیم"
---

# استقرار اولیه Deno
---

در این بخش می خواهیم آموزش نحوه استقرار اولیه Deno را به شما آموزش دهیم. همانطور که در گیف زیر مشاهده میکنید، ابتدا میبایست `Deno` را در سرویس داکر راه اندازی کنیم. برای اینکار ابتدا به پنل کاربری مراجعه کرده و به قسمت ساخت سرویس جدید > میزبانی آسان > `Docker` میرویم.
![استقرار Deno در چابکان](https://s1.chabokan.net/docs/gifs/deno-docker-install.gif)


![استقرار Deno در چابکان](https://s1.chabokan.net/docs/images/docker-install.jpg)

سپس در مرحله بعد یعنی پیکربندی سرویس محتوای `Dockerfile` را قرار داده و مراحل بعد را تا ساخت سرویس پیش میبریم.

```dockerfile
FROM denoland/deno:latest
WORKDIR /app
COPY . .
CMD ["deno", "run", "--allow-net", "app.ts"]
```

پس از چند دقیقه، سرویس شما با موفقیت ساخته می‌شود. حال می‌توانید به توسعه اپلیکیشن خود با `Deno` بپردازید.

:::tip نکته
دقت کنید که `Dockerfile` این سرویس در قسمت مدیریت فایل‌ها موجود است و در صورت نیاز می‌توانید آن را ویرایش کنید.
:::

در این مثال از دستور زیر برای اجرای برنامه استفاده کردیم:
```shell
deno run --allow-net app.ts
```

:::tip نکته
چون برنامه یک وب‌سرور راه‌اندازی می‌کند و نیاز به دسترسی شبکه دارد، باید فلگ `--allow-net` فعال باشد.
:::

حال برای تکمیل این مثال باید فایل `app.ts` را در مسیر اصلی سرویس قرار دهیم تا برنامه بتواند به درستی اجرا شود. برای اینکار ابتدا در داشبورد به قسمت **مدیریت فایل‌ها** بروید و یک فایل جدید به نام `app.ts` ایجاد کنید. سپس با گزینه `edit` محتوای فایل‌ها اضافه کنید:

```ts title="app.ts"
import { serve } from "https://deno.land/std/http/server.ts";

serve(() => new Response("Hello from Deno!"));
```

![استقرار Deno در چابکان](https://s1.chabokan.net/docs/gifs/deno-app-ts.gif)
 
وب سرور Deno به صورت پیشفرض روی پورت `8000` فعال می‌شود و باید آن را در قسمت پورت‌ها مشخص کنیم تا برنامه در دسترس قرار بگیرد.

![استقرار Deno در چابکان](https://s1.chabokan.net/docs/images/deno-docs-02.png)


import Deploy from '/docs/10-deploy/_deploy.md';

<Deploy />

import Features from '/docs/13-features/_features.md';

<Features />
