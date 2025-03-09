---
title: "آموزش افزودن ایمیل در Nodejs"
sidebar_label: "تنظیمات ایمیل"
description: "در این بخش می خواهیم آموزش نحوه تنظیمات ایمیل `Nodejs` را در هاست  نود جی اس NodeJS به شما آموزش دهیم."
---

# تنظیمات ایمیل Nodejs
---

در این بخش می خواهیم آموزش نحوه تنظیمات ایمیل `Nodejs` را در [هاست  نود جی اس NodeJS](https://chabokan.net/cloud-hosting/nodejs/) به شما آموزش دهیم.

ابتدا به سرویس خود مراجعه کنید و در بخش ایمیل ها بر روی افزودن ایمیل کلیک نمایید.([افزودن ایمیل](https://docs.chabokan.net/email/add-email/))

برای استفاده از ایمیل سرویس چابکان در `Nodejs` می توانید مراحل زیر را به ترتیب طی کنید تا به راحتی بتوانید از برنامه خود ایمیل ارسال نمایید.

## نصب پکیج

برای ارسال ایمیل از `nodejs` در ابتدا باید پکیج زیر را در برنامه خود نصب نمایید:

```bash
npm install nodemailer
```

## تنظیمات متغییر های محیطی (env)

در مرحله بعد باید اطلاعات ایمیل را در متغییر های محیطی تنظیمات سرویس اضافه کنید.

```bash
# name : value

MAIL_HOST : mail.chabokan.net
MAIL_PORT : 587
MAIL_USER : info@example.net
MAIL_PASSWORD : vfjbih34w9fr8
```

## تنظیمات در کد

در نهایت می‌توانید در پروژه‌ی خود مانند مثال زیر عمل کرده و با استفاده از دسترسی ایمیل سرویس چابکان به‌صورت امن اقدام به ارسال ایمیل‌های تراکنشی نمایید:

```javascript
const nodemailer = require("nodemailer");
const MAIL_HOST = process.env.MAIL_HOST;
const MAIL_PORT = process.env.MAIL_PORT;
const MAIL_USER = process.env.MAIL_USER;
const MAIL_PASSWORD = process.env.MAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  tls: true,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASSWORD,
  }
});

transporter.sendMail({
  from: 'MyName <from@example.com>',
  to: 'to@example.com',
  subject: 'Test Email Subject',
  html: '<h1>Example HTML Message Body</h1>'
})
  .then(() => console.log('OK, Email has been sent.'))
  .catch(console.error);
```

> [مستند رسمی **تنظیمات ایمیل** در سرویس **Nodejs**](https://nodemailer.com/smtp/)

---
<a href="https://hub.chabokan.net/fa/services/create/nodejs" ><img src="https://s1.chabokan.net/docs/images/nodejs-banner.png" /></a>