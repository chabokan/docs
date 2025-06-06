---
title: "مدیریت بخش فایروال دامنه"
sidebar_label: "مدیریت بخش فایروال دامنه"
description: "ابتدا باید دامنه خود را به سرویس متصل نماییم و بعد از افزودن دامنه و اتصال آن، وارد تنظیمات دامنه می شویم."
---

# مدیریت بخش فایروال دامنه
---

:::caution توجه

برای استفاده از این قابلیت، ابتدا میبایست دامنه خود را به یکی از گیت های چابکان متصل نمایید.([راهنمای اتصال دامنه به گیت](https://docs.chabokan.net/features/gates/))

:::

ابتدا باید دامنه خود را به سرویس متصل نماییم و بعد از افزودن دامنه و اتصال آن، وارد تنظیمات دامنه می شویم.

![](https://s1.chabokan.net/docs/gifs/dashboard-domain/dashboard-domain-firewall-install.gif)

همانطور که در تصویر زیر مشاهده میفرمایید، در این بخش میتوان  مسیری را تعیین نمود و دسترسی به آنرا برای ip های مختلف مجاز و یا غیر مجاز کرد. برای اینکار کافیست تا آی پی مد نظر را در قسمت IP وارد نموده و قسمت عملیات را برای آیپی وارد شده انتخاب نمایید. از رنج آیپی مانند نمونه زیر نیز میتوانید استفاده بفرمایید.

```bash
10.0.0.0/8
```

:::tip نکته

مجاز: آیپی وارد شده میتواند به مسیر دسترسی داشته باشد.

غیر مجاز: آیپی وارد شده نمیتواند به مسیر دسترسی داشته باشد.

:::

![](https://s1.chabokan.net/docs/images/domain-firewall-1.jpg)
