---
title: "Cron Job ها"
icon: "faTasks"
sidebar_label: "Cron Job ها"
description: "در بعضی اوقات نیاز است که سرویس شما یک کار خاصی را به صورت دوره ای انجام دهد. معمولا برای این کار در "
---

# Cron Job ها
---

در بعضی اوقات نیاز است که سرویس شما یک کار خاصی را به صورت دوره ای انجام دهد. معمولا برای این کار در برنامه‌های تحت وب از `Cron Job` ها استفاده می‌شود. استفاده از `Cron Job` ها در سرویس‌های چابکان بسیار ساده می باشد. در این قسمت از مستندات چابکان آموزش استفاده از `Cron Job` ها را فرا خواهید گرفت.

برای استفاده از `Cron Job` ها کافیست یک فایل به نام `cron-jobs` در داخل ریشه اصلی برنامه تان ایجاد کنید و دستورات `Cron Job` خود را داخل آن قرار دهید. با این کار هربار که سرویس شما ری استارت شود `Cron Job` سرویس تغییرات شما را اعمال خواهد کرد.

## Cron Jobsها در سرویس‌های میزبانی آسان

برای استفاده از `Cron Job` در سرویس‌های میزبانی آسان می‌بایست فایل `cron-jobs` را در مسیر اصلی پروژه `/app` ایحاد کنید. مسیر کامل فایل به این شکل خواهد بود:

```shell
/app/cron-jobs
```
:::caution توجه

در سرویس‌های `php` و `laravel` مسیر اصلی پروژه برابر است با `/var/www/html`.

:::


نمونه فایل cron-jobs:

```shell
* * * * * cd /var/www/html && php artisan schedule:run >> /dev/null 2>&1
```

:::caution توجه

بعد از تنظیم فایل، برای شناسایی کرون جاب توسط برنامه، سرویس خود را ری‌استارت نمایید.

:::

## بازه‌های زمانی رایج

برای تعریف هر `Job`، ابتدا لازم است که زمان اجرای آن را تعریف کنید. در `Cron Job`، تعریف زمان نحوه‌ی نگارش خاصی دارد که در زیر چند نمونه‌ی پر استفاده را عنوان کرده‌ایم:

- \* \* \* \* \* [هر دقیقه](https://crontab.guru/every-1-minute)

- 0 \* \* \* \* [هر یک ساعت](https://crontab.guru/every-1-hour)

- 0 1 \* \* \* [هر روز ساعت یک بامداد](https://crontab.guru/every-day-at-1am)

- 0 0 \* \* 0 [هر هفته روز یکشنبه](https://crontab.guru/every-week)

با کمک وب‌سایت [crontab.guru](https://crontab.guru/) می‌توانید زمان دلخواه‌تان را بسازید.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="laravel" label="Laravel" default>
    ```shell
    * * * * * cd /var/www/html && php artisan schedule:run >> /dev/null 2>&1
    ```
با استفاده از کامند بالا، scheduler لاراول هر دقیقه اجرا می شود.
  </TabItem>
  <TabItem value="php" label="PHP">
    ```shell
    30 3 * * * cd /var/www/html && php cron_example.php >> /dev/null 2>&1
    ```
با استفاده از کامند بالا، فایل php ما در روت پروژه، راس ساعت ۳ و ۳۰ دقیقه صبح هر روز، اجرا خواهد شد.
  </TabItem>
  <TabItem value="django" label="Django">
    ```shell
    * * * * * cd /app && python manage.py my_scheduled_task >> /dev/null 2>&1
    ```
با استفاده از کامند بالا، scheduler جنگو هر دقیقه اجرا می شود.
  </TabItem>
</Tabs>


## Cron Jobها در سرویس داکر

ایجاد `Cron Job` در سرویس [Docker](https://docs.chabokan.net/simple-hosting/docker/) چابکان روش متفاوتی دارد که در ادامه به توضیح آن می‌پردازیم.

برای استفاده از `Cron Job` در سرویس‌ [Docker](https://docs.chabokan.net/simple-hosting/docker/) می‌بایست فایل `cron-jobs` را در مسیر دلخواه ایجاد کنید.

:::tip نکته

در سرویس‌ [Docker](https://docs.chabokan.net/simple-hosting/docker/) فایل `cron-job` را با هر نام و در هر مسیر دلخواهی می‌توانید ایجاد کنید.

:::

نمونه فایل `cron-jobs`
```shell
    * * * * * echo "The Docker cronjob ran at $(date)" >> /cron.log 2>&1
    
```

:::caution توجه

دقت کنید که در انتهای فایل `cron-jobs` باید یک خط خالی (`newline`) قرار داشته باشد.

:::

پس از ایجاد فایل `cron-jobs` می‌بایست `Dockerfile` سرویس را تغییر دهیم.

```Dockerfile
FROM ubuntu:24.04

# Install cron
RUN apt-get update && \
apt-get install -y cron && \
rm -rf /var/lib/apt/lists/*

# Copy crontab definition
COPY ./cron-jobs /cron-jobs


# Install crontab
RUN crontab /cron-jobs

# Start cron
CMD ["cron", "-f"]
```

در این `Dockerfile` ابتدا برنامه `cron` را نصب می‌کنیم و فایل `cron-jobs` را در آن کپی می‌کنیم. سپس با دستور `cron -f` فرایند `Cron Job` را فعال می‌کنیم.
