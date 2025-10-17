---
title: "مشکلات احتمالی"
sidebar_label: "مشکلات احتمالی"
description: "در این قسمت مشکلات احتمالی که ممکن است با آن برخورد کنیم را بررسی کرده و راه حل آن را نیز مشاهده میکنیم."
---

# مشکلات احتمالی
---

در این قسمت مشکلات احتمالی که ممکن است با آن برخورد کنیم را بررسی کرده و راه حل آن را نیز مشاهده میکنیم.

## Nginx Error

![](https://s1.chabokan.net/docs/images/react-error-1.PNG)

در صورت مواجه شدن با این ارور 404 `nginx` در برنامه `React` خود میتوانید به مستند زیر مراجعه نموده و بعد از تعریف قطعه کد `nginx` سرویس خود را ری استارت نموده تا تغییرات برای شما ذخیره شود

[تنظیمات NGINX در React](https://docs.chabokan.net/simple-hosting/react/nginx-config/)

## اجرا دستور npm

برای تغییر دستور `npm` در سرویس خود میتوانید به قسمت تنظیمات سرویس مراجعه نموده و در بخش متغیر های محیطی مانند نمونه زیر میتوانید دستور نصب دلخواه را وارد نمایید.

```properties
# name : value

NPM_INSTALL_COMMAND : "npm install --legacy-peer-deps"
```

---
<a href="https://hub.chabokan.net/fa/services/create/react" ><img src="https://s1.chabokan.net/docs/images/react-banner.png" /></a>