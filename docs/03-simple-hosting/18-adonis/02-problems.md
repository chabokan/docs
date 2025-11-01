---
title: "مشکلات احتمالی"
icon: "faTriangleExclamation"
sidebar_label: "مشکلات احتمالی"
description: "در این قسمت مشکلات احتمالی که ممکن است با آن برخورد کنیم را بررسی کرده و راه حل آن را نیز مشاهده میکنیم."
---

# مشکلات احتمالی
---

در این قسمت مشکلات احتمالی که ممکن است با آن برخورد کنیم را بررسی کرده و راه حل آن را نیز مشاهده میکنیم.

## خطای CORS در جنگو

در صورتی مواجه با خطای [CORS](https://docs.adonisjs.com/guides/cors) در سرویس `adonis` به مسیر `/config` رفته و فایل `cors.ts` را چک نمایید. در این کانفیگ میبایست کامند های زیر قرار داده شده باشد تا `CORS` به درستی عمل کند:

```typescript
const config = {
    // other configs
    origin: '*',
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE']
};
```

---
<a href="https://hub.chabokan.net/fa/services/create/adonis" ><img src="https://s1.chabokan.net/docs/images/adonis-banner.png" /></a>