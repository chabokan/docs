---
title: "آموزش نصب ASP.NET Core"
icon: "faRocket"
sidebar_label: "استقرار اولیه"
description: "در این بخش می خواهیم آموزش نحوه استقرار اولیه  `ASP.NET Core` را در هاست ASP.NET Core دات نت کور به شما آموزش دهیم."
---

# استقرار اولیه ASP.NET Core
---

در این بخش می خواهیم آموزش نحوه استقرار اولیه  `ASP.NET Core` را در [هاست ASP.NET Core دات نت کور](https://chabokan.net/cloud-hosting/aspnet-core/) به شما آموزش دهیم.
همانطور که در گیف زیر مشاهده میکنید، ابتدا سرویس `ASP.NET Core` را از طریق قسمت ساخت سرویس جدید > میزبانی آسان > `ASP.NET Core` می سازیم.

![نحوه استقرار ASP.NET Core در چابکان](https://s1.chabokan.net/docs/gifs/asp.net-core-install.gif)

import Deploy from '/docs/10-deploy/_deploy.md';

<Deploy />

## خطاهای رایج در فرایند استقرار

چابکان سعی می کند بهترین تنظیمات برنامه شما را تشخیص دهد و سرویس شما را به بهترین شکل استقرار دهد. اما با توجه به تنوع ساختار برنامه‌های `ASP.Net Core`، ممکن است که برخی از این تشخیصات خودکار با مشکل مواجه شوند و چابکان نتواند تنظیمات درست را شناسایی کند. در چنین زمانی شما باید یکسری از تنظیمات را از طریق متغیر های سرویس شخصا انجام دهید.

معرفی فایل `.dll` نهایی برنامه که بعد از بیلدکردن ساخته می‌شود. (بدون پسوند)

```properties
DOTNETCORE_FINALDLLNAME=filename
```

معرفی فایل `.csproj` اصلی برنامه. (به صورت نسبی وارد شود)

```shell
DOTNETCORE_CSPROJECTFILE=path/to/folder/my.csproj
```

هر یک از 2 متغیر `DOTNETCORE_FINALDLLNAME` و `DOTNETCORE_CSPROJECTFILE` می توانید از طریق تنظیمات سرویس و بخش متغیر ها ایجاد کنید و مقدار دلخواه خود را قرار دهید و تنظیمات را ذخیره کنید.

## استقرار بدون پابلیش

در پلتفرم `ASP.Net Core`، برنامه ها از طریق سورس کد به صورت خودکار `publish` می شوند. که این فرآیند ممکن است کمی زمان ببرد و یا گاهی با خطا های غیر منتظره ای مواجه شود. شما می توانید پروژه خود ابتدا در سیستم خود `publish` کنید و سپس دایرکتوری `publish` خود را دیپلوی کنید. اگر که دایرکتوری `publish` خود را دیپلوی کردید باید از طریق متغیر های زیر برنامه خود را تنظیم کنید.

غیرفعال کردن بیلد پروژه

```properties
DOTNETCORE_BUILD=false
```

معرفی مسیر دایرکتوری `publish` در چابکان

```properties
DOTNETCORE_PUBLISH_DIR=/app/
```

فایل `dll` نهایی برنامه شما

```properties
DOTNETCORE_FINALDLLNAME=myapp.server
```

توجه کنید که متغیر `DOTNETCORE_FINALDLLNAME` به فایل `dll` نهایی برنامه شما اشاره دارد.

## ورژن های ASP.NET Core

سرویس `ASP.NET Core` در چابکان از ورژن های زیر پشتیبانی میکند و میتوانید با توجه به نیاز برنامه خود، ورژن مورد نظر را انتخاب نمایید. برای تغییر ورژن میتوانید به [این مستند](/simple-hosting/dotnetcore/more/#تغییر-ورژن-aspnet-core) مراجعه نمایید.

import Versions from './_versions.md';

<Versions />

import SharedServices from '/docs/_shared-services.mdx';

<SharedServices
platform="ASP.NET Core"
services={[
"mysql",
"mariadb"
]}
/>

import Features from '/docs/13-features/_features.md';

<Features />

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/dotnetcore"
img="https://s1.chabokan.net/docs/images/asp.net-banner.png"
/>