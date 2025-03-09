---
title: "آموزش اجرا خودکار Python"
sidebar_label: "اجرا خودکار"
description: "در این بخش می خواهیم آموزش نحوه اجرا خودکار را در هاست پایتون Python به شما آموزش دهیم."
---

# اجرا خودکار در Python
---

در این بخش می خواهیم آموزش نحوه اجرا خودکار را در [هاست پایتون Python](https://chabokan.net/cloud-hosting/python/) به شما آموزش دهیم.

در بسیاری از موارد نیاز است تا یکسری از کار ها در زمان روشن شدن سرویس اجرا شوند. این کار ها می توانند انواع مختلفی داشته باشند به عنوان مثال از پاک کردن کش تا اجرا فایل اصلی اسکریپت `Python` برنامه شما. برای این کار در سرویس ابری پایتون می توانید اسم فایل اصلی را به `main.py` تغییر دهید و یا باید یک فایل با نام start.sh در ریشه اصلی برنامه خود ایجاد کنید و طبق دستورالعمل زیر دستورات خود را که نیاز دارید در زمان اجرا سرویس به صورت خودکار اجرا شوند را در این فایل قرار دهید:

```bash
#!/bin/bash

python app.py
```
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution توجه
<Tabs>
  <TabItem value="شماره ۱" label="شماره ۱">پکیج های لازم برای برنامه شما همگی باید در فایل requirements.txt قرار داده شده باشند. بدون فایل requirements.txt برنامه شما قابل اجرا نخواهد بود.</TabItem>

  <TabItem value="شماره ۲" label="شماره ۲">پکیج هایی که در فایل requirements.txt قرار داده شده اند، به صورت خودکار با روشن شدن و یا ریستارت شدن سرویس نصب خواهند شد.</TabItem>
</Tabs>
:::

---
<a href="https://hub.chabokan.net/fa/services/create/python" ><img src="https://s1.chabokan.net/docs/images/python-banner.png" /></a>