---
title: "آموزش استقرار Python"
icon: "faRocket"
sidebar_label: "استقرار اولیه"
description: "در این بخش می خواهیم آموزش نحوه استقرار اولیه `Python` را در هاست پایتون Python به شما آموزش دهیم."
---

# استقرار اولیه Python
---

در حال حاضر برنامه‌های [Django](/simple-hosting/django/) و [Flask](/simple-hosting/flask/) به‌صورت مستقیم در پلتفرم ابری چابکان پشتیبانی می‌شوند اما برای استقرار اسکریپت‌های خام Python بایستی مستندات زیر را دنبال کنید.
همانطور که در گیف زیر مشاهده میکنید، ابتدا سرویس `Python` را از طریق قسمت ساخت سرویس جدید > میزبانی آسان > `Python` می سازیم.

![نحوه استقرار Python در چابکان](https://s1.chabokan.net/docs/gifs/python-install.gif)

## روش های استقرار برنامه

در این بخش می خواهیم آموزش نحوه استقرار اولیه `Python` را در [هاست پایتون Python](https://chabokan.net/cloud-hosting/python/) به شما آموزش دهیم.

سرویس های میزبانی آسان چابکان به روش های مختلفی امکان استقرار را دارا هستند، این شما هستید که می توانید انتخاب کنید کدام روش برای شما مناسب تر می باشد، برای آشنایی با هر کدام از روش های استقرار می توانید از لیست زیر اقدام به مطالعه بیشتر بفرمایید:

> —  [استقرار از طریق CLI (پیشنهادی)](/deploy/cli)
>
> —  [استقرار از طریق FTP](/deploy/ftp/)
>
> —  [استقرار از طریق git](/deploy/git/)
>
> —  [استقرار از طریق فایل منیجر](/deploy/file-manager/)

اگر سرویس خود را از طریق CLI چابکان استقرار داده اید حتما صفحه [تنظیمات مسیر های دائمی](/features/permanent-path/) را نیز مطالعه بفرمایید که هم با فرآیند deploy از طریق cli بیشتر آشنا شوید و هم مشکلی برایتان ایجاد نشود.

## ورژن های python

سرویس `Python` در چابکان از ورژن های زیر پشتیبانی میکند و میتوانید با توجه به نیاز برنامه خود، ورژن مورد نظر را انتخاب نمایید. برای تغییر ورژن میتوانید به [این مستند](/simple-hosting/python/more/#تغییر-ورژن-python) مراجعه نمایید.

import Versions from './_versions.md';

<Versions />

import Features from '/docs/13-features/_features.md';

<Features />

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/python"
img="https://s1.chabokan.net/docs/images/python-banner.png"
/>