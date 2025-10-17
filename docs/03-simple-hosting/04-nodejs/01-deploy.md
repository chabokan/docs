---
title: "آموزش استقرار NodeJs"
sidebar_label: "استقرار اولیه"
description: "در این بخش می خواهیم آموزش نحوه استقرار برنامه NodeJs را در هاست  نود جی اس NodeJS به شما آموزش دهیم."
---

# استقرار اولیه NodeJs
---

در این بخش می خواهیم آموزش نحوه استقرار برنامه `NodeJs` را در [هاست  نود جی اس NodeJS](https://chabokan.net/cloud-hosting/nodejs/) به شما آموزش دهیم.
همانطور که در گیف زیر مشاهده میکنید، ابتدا سرویس `NodeJs` را از طریق قسمت ساخت سرویس جدید > میزبانی آسان > `NodeJs` می سازیم.

![](https://s1.chabokan.net/docs/gifs/nodejs-inatall.gif)

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

پلتفرم NodeJs چابکان به صورت پیشفرض برنامه شما را با دستور npm start اجرا می کند که این دستور باید در فایل package.json برنامه شما معرفی شده باشد. اما شما می توانید دستور اجرا برنامه خود را با دستور دلخواه تغییر دهید. برای این کار شما باید دستور اجرا پروژه تان را از طریق تنظیمات سرویس قسمت متغیر ها به چابکان معرفی کنید.

```properties
# name : value

START_COMMAND="pm2 start"
```

## ورژن های NodeJs

سرویس `NodeJs` در چابکان از ورژن های زیر پشتیبانی میکند و میتوانید با توجه به نیاز برنامه خود، ورژن مورد نظر را انتخاب نمایید. برای تغییر ورژن میتوانید به [این مستند](https://docs.chabokan.net/simple-hosting/nodejs/more/#تغییر-ورژن-nodejs) مراجعه نمایید.

```text
node versions:

- 22
- 20
- 18
- 16
- 14
```

## سرویس های اشتراکی

سرویس های اشتراکی قابل ایجاد در هاست NodeJs به صورت زیر میباشند:(همینطور شما میتوانید تفاوت سرویس های اشتراکی و اختصاصی را در [این مستند](https://docs.chabokan.net/general-tips/share-db-vs-dedicated-db/) مشاهده بفرمایید)

- Mysql
- Mariadb

---
<a href="https://hub.chabokan.net/fa/services/create/nodejs" ><img src="https://s1.chabokan.net/docs/images/nodejs-banner.png" /></a>