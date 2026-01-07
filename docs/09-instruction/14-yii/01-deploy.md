---
title: "استقرار اولیه"
icon: "faRocket"
description: "در این بخش می‌خواهیم آموزش نحوه استقرار اولیه هاست Yii را به شما آموزش دهیم"
---

# استقرار اولیه Yii
---

در این بخش می‌خواهیم آموزش نحوه استقرار اولیه **Yii** را به شما آموزش دهیم.
Yii یک فریم‌ورک قدرتمند و سبک مبتنی بر **PHP** است که برای توسعه وب‌اپلیکیشن‌ها، RESTful API و سرویس‌های backend مورد
استفاده قرار می‌گیرد. برای استقرار Yii در چابکان می‌توانید از
[سرویس PHP](https://chabokan.net/products/cloud-hosting/php/) استفاده کنید.

:::tip درباره هاست PHP بیشتر بدانید

برای آشنایی بیشتر با سرویس میزبانی آسان PHP چابکان می‌توانید
[این مستند](/simple-hosting/php/) را مطالعه بفرمائید.

:::

همان‌طور که قبل‌تر اشاره کردیم ابتدا باید سرویس `PHP` را ایجاد کنید. برای این کار ابتدا به پنل کاربری مراجعه کرده و به
قسمت **ساخت سرویس جدید > میزبانی آسان > PHP** بروید.

![استقرار Yii در چابکان](https://s1.chabokan.net/docs/images/php-docs-01.png)

پس از چند دقیقه، سرویس شما با موفقیت ساخته می‌شود. حال می‌توانید با آپلود سورس‌کد پروژه‌ی خود، **Yii** را روی
سرویس‌های میزبانی آسان PHP چابکان مستقر کنید.  
برای آپلود سورس کد برنامه می‌توانید از یکی از روش‌های موجود استفاده کنید:

import Deploy from '/docs/10-deploy/_deploy.md';

<Deploy />

:::caution توجه

در پروژه‌های Yii، مسیر اجرای برنامه باید روی پوشه `web` تنظیم شود. برای این کار می‌بایست در مسیر اصلی پروژه فایل
`.htaccess` را با محتوای زیر ایجاد کنید:

```htaccess title=".htaccess"
RewriteEngine On

RewriteCond %{REQUEST_URI} !^/web/
RewriteRule ^(.*)$ web/$1 [L]
```

همچنین باید در تنظیمات پروژه `Yii` در فایل `config/web.php` مقدار `baseUrl` و `urlManager` را تنظیم کنید:

```php title="config/web.php"
$config = [
    //other configs
    'components' => [
        'request' => [
            // highlight-next-line
            'baseUrl' => '',
            //other configs
        ],
        //other configs
        // highlight-start
        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules' => [
            ],
        ],
        // highlight-end
        //other configs
    ],
    //other configs
];
```

:::tip نکته

برای نصب پکیج های برنامه خود کافیست آنها را در `compose.json` قرار دهید تا به صورت خودکار در سرویس شناسایی و نصب شود،
برای اجرا برنامه نیز نیازی به اجرای دستور `composer` نیست و به صورت خودکار برنامه شما بعد از دیپلوی شدن در چابکان اجرا
می شود.

:::

همچنین میتوانید با توجه به نیاز برنامه خود، ورژن مورد نظر PHP را انتخاب نمایید.

import PhpVersions from '/docs/04-simple-hosting/05-php/_versions.md';

<PhpVersions />

import SharedServices from '/docs/_shared-services.mdx';

<SharedServices
platform="PHP"
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
buyLink="https://hub.chabokan.net/fa/services/create/php"
img="https://s1.chabokan.net/docs/images/php-banner.png"
/>
