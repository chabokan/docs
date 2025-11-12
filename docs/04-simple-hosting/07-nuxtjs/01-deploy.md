---
title: "آموزش استقرار NuxtJs"
icon: "faRocket"
sidebar_label: "استقرار اولیه"
description: "در این بخش می خواهیم آموزش نحوه استقرار اولیه `NuxtJs`  را در هاست ناکست جی اس Next به شما آموزش دهیم."
---

# استقرار اولیه NuxtJs
---

در این بخش می خواهیم آموزش نحوه استقرار اولیه `NuxtJs` را در [هاست ناکست جی اس NuxtJs](https://chabokan.net/cloud-hosting/nodejs/nuxt/) به شما آموزش دهیم.
همانطور که در گیف زیر مشاهده میکنید، ابتدا سرویس `NuxtJs` را از طریق قسمت ساخت سرویس جدید > میزبانی آسان > `NuxtJs` می سازیم.

![نحوه استقرار NuxtJS در چابکان](https://s1.chabokan.net/docs/gifs/nuxtjs-inatall.gif)

## روش های استقرار برنامه

سرویس های میزبانی آسان چابکان به روش های مختلفی امکان استقرار را دارا هستند، این شما هستید که می توانید انتخاب کنید کدام روش برای شما مناسب تر می باشد، برای آشنایی با هر کدام از روش های استقرار می توانید از لیست زیر اقدام به مطالعه بیشتر بفرمایید:

> —  [استقرار از طریق CLI (پیشنهادی)](https://docs.chabokan.net/deploy/cli)
>
> —  [استقرار از طریق FTP](https://docs.chabokan.net/deploy/ftp/)
>
> —  [استقرار از طریق git](https://docs.chabokan.net/deploy/git/)
>
> —  [استقرار از طریق فایل منیجر](https://docs.chabokan.net/deploy/file-manager/)

اگر سرویس خود را از طریق `CLI` چابکان استقرار داده اید حتما صفحه [تنظیمات مسیر های دائمی](https://docs.chabokan.net/features/permanent-path/) را نیز مطالعه بفرمایید که هم با فرآیند `deploy` از طریق `CLI` بیشتر آشنا شوید و هم مشکلی برایتان ایجاد نشود.

## ورژن های NuxtJs

سرویس `NuxtJs` در چابکان از ورژن های زیر پشتیبانی میکند و میتوانید با توجه به نیاز برنامه خود، ورژن مورد نظر را انتخاب نمایید. برای تغییر ورژن میتوانید به [این مستند](https://docs.chabokan.net/simple-hosting/nuxtjs/more/#تغییر-ورژن-nuxtjs) مراجعه نمایید.

```text
node versions:

- 22
- 20
- 18
- 16
- 14
```
import Features from '/docs/13-features/_features.md';

<Features />

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/nuxt"
img="https://s1.chabokan.net/docs/images/nuxt-banner.png"
/>