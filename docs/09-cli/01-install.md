---
title: "نصب CLI"
sidebar_label: "نصب CLI"
---

`CLI` چابکان با استفاده از `Node.js` ساخته شده است و برای نصب `CLI` ابتدا باید `node.js` و `npm` را در سیستم عامل خود نصب کنید.

<video controls width="300">
  <source src="https://s1.chabokan.net/docs/videos/install-cli.mp4" />
</video>

مراحل نصب در سیستم عامل ها متفاوت است و شما باید با توجه به سیستم عامل خود `node.js` و `npm` را در نصب بفرمایید.

[نصب node.js و npm در سیستم عامل های مختلف](https://nodejs.org/en/download/package-manager/)

بعد از نصب کامل `node.js` و `npm` در سیستم عامل خود کافیست دستور زیر را در خط فرمان یا ترمینال سیستم عامل خود وارد کنید تا `CLI` چابکان نصب شود.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="chabokan" label="چابکان" default>
    ```bash
    npm install -g @chabokan.net/cli
    ```
  </TabItem>
  <TabItem value="cloudiva" label="کلودیوا">
    ```bash
    npm install -g @cloudiva.net/cli
    ```
  </TabItem>
</Tabs>

بعد از وارد کردن دستور بالا روند نصب انجام خواهد شد و `CLI` به صورت `global` در سیستم عامل شما نصب خواهد شد. برای مطمئن شدن از نصب کامل `CLI` می توانید دستور زیر را در محیط خط فرمان یا ترمینال وارد کنید:

```bash
chabok -v
```

با زدن دستور بالا باید ورژن `CLI` چابکان به شما نمایش داده شود در غیر این صورت مشکلی در روند نصب `CLI` وجود داشته است.

## مشکل در استفاده از CLI

اگر در استفاده از `CLI` با مشکل پیدا نشدن `Command` مواجه شدید. می توانید از دستورات `CLI` به صورت زیر استفاده کنید:

```bash
npx chabok -v
```

یا

```bash
npx @chabokan.net/chabok -v
```

## خطاهای رایج

در نصب پکیج `CLI` چابکان ممکن هست با خطا هایی روبرو شوید که در این بخش راهنمایی برای رفع مشکلات در اختیار شما قرار گرفته شده است.

### خطای The splatting operator ‘@’ cannot be used

این خطا زمانی رخ می دهد که شما دستور نصب `CLI` چابکان را در محیطی غیر از کنسول (ترمینال) پیشفرض سیستم عامل مثل کنسول `VS Code` وارد می نمایید. برای رفع این مشکل دستور نصب را در کنسول (ترمینال) پیشفرض سیستم عامل مثل `CMD` وارد نمایید.

### خطای 401

در صورت برخورد با خطای `AxiosError: Request failed with status code 401` ابتدا کامند زیر را وارد نموده تا کاربر را از cli حذف نمایید:

```bash
chabok account remove
```

سپس دوباره با استفاده از `chabok login` وارد خساب خود شده و `cli` را فعال نمایید. خطای `401` به خطای دسترسی است که با این راه حل رفع خواهد شد.

### خطای fetch failed

در صورت برخورد با خطا Type error: fetch failed میبایست ورژن node خود را آپدیت نمایید. برای مشاهده نحوه آپدیت میتوانید به [این مستند](https://docs.chabokan.net/cli/update/#%D8%A8%D9%87-%D8%B1%D9%88%D8%B2-%D8%B1%D8%B3%D8%A7%D9%86%DB%8C-node-version) مراجعه نماید.


