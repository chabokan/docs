---
title: "نکات آموزشی Python"
icon: "faLightbulb"
sidebar_label: "نکات تکمیلی"
description: "در این بخش می خواهیم نکات تکمیلی را در هاست پایتون Python به شما آموزش دهیم."
---

# نکات تکمیلی Python
---

در این بخش می خواهیم نکات تکمیلی را در [هاست پایتون Python](https://chabokan.net/cloud-hosting/python/) به شما آموزش دهیم.

## کش کردن پکیج ها

برای فعال نمودن سیستم کشینگ پکیج های سرویس میتوانید متغیر زیر را در بخش تنظیمات سرویس، متغیر های محیطی پلتفرم ست نمایید. اینکار باعث سرعت بخشیدن به روند استارت و ری استارت سرویس می شود.

```properties
# name = value

CHBK_PYTHON_SAVE = true
```

![نکات آموزشی سرویس Python چابکان](https://s1.chabokan.net/docs/images/elk-env.jpg)


## تغییر ورژن Python

در صورتی که قصد دارید ورژن Python خود را تغییر دهید، می‌توانید در قسمت تنظیمات سرویس خود، ورژن Python سرویس خود را تغییر دهید. بعد از انتخاب ورژن بر روی ذخیره ی تغییرات کلیک نمایید.

import Versions from './_versions.md';

<Versions />

![تغییر ورژن سرویس Python چابکان](https://s1.chabokan.net/docs/images/python-version.png)

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/python"
img="https://s1.chabokan.net/docs/images/python-banner.png"
/>