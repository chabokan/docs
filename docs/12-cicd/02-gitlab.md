---
title: "راه‌اندازی CI/CD به وسیله Gitlab"
sidebar_label: "راه‌اندازی CI/CD به وسیله Gitlab"
description: "گیت لب برای راه اندازی CI/CD از Gitlab Piplines استفاده می کند که می توانید"
---

# راه‌اندازی CI/CD به وسیله Gitlab
---

گیت لب برای راه اندازی CI/CD از Gitlab Piplines استفاده می کند که می توانید مستندات آن را در اینجا مشاهده کنید و به صورت کامل با آن آشنا شوید. در این صفحه از مستندات با مراحل راه‌اندازی CI/CD به وسیله Gitlab برای سرویس های چابکان آشنا می شویم.

## مرحله اول

در ابتدا نیاز دارید که یک فایل با نام  زیر در مسیر اصلی پروژه‌ی خود ایجاد کنید:

```yaml
.gitlab-ci.yml
```

و سپس قطعه‌کد زیر را در این فایل قرار دهید:

```yaml
image: node:18-alpine

stages:
  - update-service

deploy:
  stage: update-service
  only:
    - main
  script:
    - npm install -g @chabokan.net/cli
    - export CHABOK_API_URL=https://apihub2.chabokan.net/fa/api/v1/
    - chabok login -t $CHABOKAN_TOKEN
    - chabok deploy -s my-service
```

با ایجاد فایل بالا شما به درستی فرآیند CI و CD را در گیت لب فعال کرده اید. همانطور که در کد بالا مشاهده میکنید، ابتدا CLI چابکان را نصب کرده ایم و سپس با استفاده از دستور chabok login وارد حساب خود شده ایم و در مرحله بعدی با استفاده از دستور chabok deploy کدهای پروژه را بر روی چابکان دیپلوی کردیم.

:::caution توجه

توجه کنید که بجای my-service باید نام سرویسی که در چابکان ایجاد کرده اید را بنویسید.

:::


## مرحله دوم

اگر به فایل .gitlab-ci.yml دقت کرده باشید یک secret به نام CHABOKAN\_TOKEN وجود دارد که مقدار آن api token شما در چابکان می باشد که باید آن را به گیت لب معرفی نمایید. برای به دست آوردن api token شخصی حساب کاربری خود باید وارد صفحه [کلید دسترسی به API](https://hub.chabokan.net/api-token/) شوید و کلید خود را دریافت کنید.

![](https://s1.chabokan.net/docs/images/API_Key.jpg)

## مرحله سوم

حالا که ما api token را به دست آوردیم باید آن را به گیت لب معرفی کنیم. برای این کار وارد تنظیمات CI/CD ریپازیتوری شوید و کمی به پایین اسکرول کنید. در بخش Variables بر روی گزینه‌ی Expand کلیک کنید تا گزینه‌ی Add Variable نمایش داده شود. حال برای تعریف یک Variable جدید، روی گزینه‌ی **Add Variable** کلیک کنید. نام (Key) این Variable را  **CHABOKAN\_TOKEN**  و مقدار آن را از صفحه‌ی [کلید دسترسی به API](https://hub.chabokan.net/api-token/) کپی کرده و در بخش Value قرار دهید. پس از انتخاب گزینه‌های **Mask variable**، بر روی گزینه‌ی **Add variable** کلیک کنید.

![](https://s1.chabokan.net/docs/images/gitlab_2.jpg)

## مرحله چهارم

اگر تمام مراحل بالا به درستی انجام داده باشید، فرآیند CI و CD شما با موفقت تنظیم شده است و با push کردن در برنچ Main  فرآیند CI و CD شما شروع می شود.
