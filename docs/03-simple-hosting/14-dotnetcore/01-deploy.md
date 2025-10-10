---
title: "آموزش نصب ASP.NET Core"
sidebar_label: "استقرار اولیه"
description: "در این بخش می خواهیم آموزش نحوه استقرار اولیه  `ASP.NET Core` را در هاست ASP.NET Core دات نت کور به شما آموزش دهیم."
---

# استقرار اولیه ASP.NET Core
---

در این بخش می خواهیم آموزش نحوه استقرار اولیه  `ASP.NET Core` را در [هاست ASP.NET Core دات نت کور](https://chabokan.net/cloud-hosting/aspnet-core/) به شما آموزش دهیم.
همانطور که در گیف زیر مشاهده میکنید، ابتدا سرویس `ASP.NET Core` را از طریق قسمت ساخت سرویس جدید > میزبانی آسان > `ASP.NET Core` می سازیم.

![](https://s1.chabokan.net/docs/gifs/asp.net-core-install.gif)

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

## خطاهای رایج در فرایند استقرار

چابکان سعی می کند بهترین تنظیمات برنامه شما را تشخیص دهد و سرویس شما را به بهترین شکل استقرار دهد. اما با توجه به تنوع ساختار برنامه‌های `ASP.Net Core`، ممکن است که برخی از این تشخیصات خودکار با مشکل مواجه شوند و چابکان نتواند تنظیمات درست را شناسایی کند. در چنین زمانی شما باید یکسری از تنظیمات را از طریق متغیر های سرویس شخصا انجام دهید.

معرفی فایل `.dll` نهایی برنامه که بعد از بیلدکردن ساخته می‌شود. (بدون پسوند)

```bash
DOTNETCORE_FINALDLLNAME=filename
```

معرفی فایل `.csproj` اصلی برنامه. (به صورت نسبی وارد شود)

```bash
DOTNETCORE_CSPROJECTFILE=path/to/folder/my.csproj
```

هر یک از 2 متغیر `DOTNETCORE_FINALDLLNAME` و `DOTNETCORE_CSPROJECTFILE` می توانید از طریق تنظیمات سرویس و بخش متغیر ها ایجاد کنید و مقدار دلخواه خود را قرار دهید و تنظیمات را ذخیره کنید.

## استقرار بدون پابلیش

در پلتفرم `ASP.Net Core`، برنامه ها از طریق سورس کد به صورت خودکار `publish` می شوند. که این فرآیند ممکن است کمی زمان ببرد و یا گاهی با خطا های غیر منتظره ای مواجه شود. شما می توانید پروژه خود ابتدا در سیستم خود `publish` کنید و سپس دایرکتوری `publish` خود را دیپلوی کنید. اگر که دایرکتوری `publish` خود را دیپلوی کردید باید از طریق متغیر های زیر برنامه خود را تنظیم کنید.

غیرفعال کردن بیلد پروژه

```bash
DOTNETCORE_BUILD=false
```

معرفی مسیر دایرکتوری `publish` در چابکان

```bash
DOTNETCORE_PUBLISH_DIR=/app/
```

فایل `dll` نهایی برنامه شما

```bash
DOTNETCORE_FINALDLLNAME=myapp.server
```

توجه کنید که متغیر `DOTNETCORE_FINALDLLNAME` به فایل `dll` نهایی برنامه شما اشاره دارد.

## ورژن های ASP.NET Core

سرویس `ASP.NET Core` در چابکان از ورژن های زیر پشتیبانی میکند و میتوانید با توجه به نیاز برنامه خود، ورژن مورد نظر را انتخاب نمایید. برای تغییر ورژن میتوانید به [این مستند](https://docs.chabokan.net/simple-hosting/dotnetcore/more/#تغییر-ورژن-aspnet-core) مراجعه نمایید.

```php
ASP.NET Core versions:

- 2.1
- 3.1
- 5.0
- 6.0
- 7.0
- 8.0
```

## سرویس های اشتراکی

سرویس های اشتراکی قابل ایجاد در هاست ASP.NET Core به صورت زیر میباشند:(همینطور شما میتوانید تفاوت سرویس های اشتراکی و اختصاصی را در [این مستند](https://docs.chabokan.net/general-tips/share-db-vs-dedicated-db/) مشاهده بفرمایید)

- Mysql
- Mariadb

---
<a href="https://hub.chabokan.net/fa/services/create/dotnetcore" ><img src="https://s1.chabokan.net/docs/images/asp.net-banner.png" /></a>