---
title: "راه‌اندازی CI/CD به وسیله GitHub"
sidebar_label: "راه‌اندازی CI/CD به وسیله GitHub"
description: "گیت هاب برای راه اندازی CI/CD از GitHub Actions استفاده می کند که می توانید مستندات آن را در اینجا مشاهده کنید "
---

# راه‌اندازی CI/CD به وسیله GitHub
---

گیت هاب برای راه اندازی CI/CD از GitHub Actions استفاده می کند که می توانید مستندات آن را در اینجا مشاهده کنید و به صورت کامل با آن آشنا شوید. در این صفحه از مستندات با مراحل راه‌اندازی CI/CD به وسیله GitHub برای سرویس های چابکان آشنا می شویم.

ریپازیتوری **[github.com/chabokan/ci-cd-example](https://github.com/chabokan/ci-cd-example)** شامل یک نمونه برنامه‌ی کامل است که می‌تواند از طریق CI/CD در چابکان مستقر شود.

## مرحله اول

در ابتدا نیاز دارید که در ریشه برنامه‌خود دایرکتوری github. و پوشه workflows را داخل آن ایجاد کنید .github/workflows/. شما در این دایرکتوری تمام Action های خود را تعریف می‌کنید. برای مثال فرض می‌کنیم فایلی به نام deploy.yaml را برای استقرار در چابکان در نظر گرفته اید، در اینجا شما میتوانید در قسمت branches نام branch خود را وارد نمایید.


<Tabs>
  <TabItem value="chabokan" label="چابکان" default>
    ```yaml
    name: deploy-chabokan
    on:
      push:
        branches: [main]
    jobs:
      deploy:
        runs-on: ubuntu-latest

        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v1
            with:
              node-version: "18"
          - name: update-chabokan
            env:
              CHABOKAN_TOKEN: ${{ secrets.CHABOKAN_TOKEN }}
            run: |
              npm install -g @chabokan.net/cli
              chabok login -t $CHABOKAN_TOKEN
              chabok deploy -s my-service
    ```

  </TabItem>
  <TabItem value="cloudiva" label="کلودیوا">
    ```yaml
    name: deploy-cloudiva
    on:
      push:
        branches: [main]
    jobs:
      deploy:
        runs-on: ubuntu-latest

        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v1
            with:
              node-version: "18"
          - name: update-cloudiva
            env:
              CHABOKAN_TOKEN: ${{ secrets.CHABOKAN_TOKEN }}
            run: |
              npm install -g @cloudiva.net/cli
              diva login -t $CHABOKAN_TOKEN
              diva deploy -s my-service
    ```
  </TabItem>
</Tabs>


با ایجاد فایل بالا شما به درستی فرآیند CI و CD را در گیت هاب را فعال کرده اید. همانطور که مشاهده ابتدا CLI چابکان را نصب کردیم و سپس با استفاده از دستور chabok login وارد شدیم و در مرحله بعدی با استفاده از دستور chabok deploy کدهای پروژه را بر روی چابکان دیپلوی کردیم.

:::caution توجه

توجه کنید که بجای my-service باید نام سرویسی که در چابکان ایجاد کرده اید را بنویسید.

:::

## CI/CD به ازای هر Branch

در صورتی که میخواهید به صورت همزمان بر روی چند محیط، برنامه خود را تست و بررسی نموده و نیاز به CI/CD به ازای branch های مختلف در گیت هاب دارید میتوانید مانند نمونه زیر، اقدام به کانفیگ فایل deploy.yaml نمایید.

```bash
name: deploy-chabokan
on:
  push:
    branches:
      - main
      - dev
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: "18"
      - name: update-chabokan
        env:
          CHABOKAN_TOKEN: ${{ secrets.CHABOKAN_TOKEN }}
        run: |
          if [ ${{ github.ref }} == 'refs/heads/master' ]; then
            npm install -g @chabokan.net/cli
            chabok login -t $CHABOKAN_TOKEN
            chabok deploy -s my-service
          elif [ ${{ github.ref }} == 'refs/heads/dev' ]; then
            npm install -g @chabokan.net/cli
            chabok login -t $CHABOKAN_TOKEN
            chabok deploy -s my-service
          fi
```

## مرحله دوم

اگر به فایل deploy.yaml دقت کرده باشید یک secret به نام CHABOKAN\_TOKEN وجود دارد که مقدار آن api token شما در چابکان می باشد که باید آن را به گیت هاب معرفی نمایید. برای به دست آوردن api token شخصی حساب کاربری خود باید وارد صفحه [کلید دسترسی به API](https://hub.chabokan.net/api-token/) شوید و کلید خود را دریافت کنید.

![](https://s1.chabokan.net/docs/images/API_Key.jpg)

## مرحله سوم

حالا که ما api token را به دست آوردیم باید آن را به گیت هاب معرفی کنیم. برای این کار وارد ریپازیتوری پروژه خود شوید و از منوی بالا روی settings کلیک کنید و در صفحه جدید از منوی سمت چپ روی secrets and variables کلیک کنید. حالا باید با استفاده از دکمه New repository secret بالا سمت راست یک secrets با نام CHABOKAN\_TOKEN ایجاد کنید و مقدار آن را به api token به دست آمده تغییر دهید.

![](https://s1.chabokan.net/docs/images/github_1.jpg)

## مرحله چهارم

اگر تمام مراحل بالا به درستی انجام داده باشید، فرآیند CI و CD شما با موفقت تنظیم شده است و با push کردن در برنچ Master  فرآیند CI و CD شما شروع می شود. برای مشاهده این فرآیند می توانید از منوی بالا ریپازیتوری روی Actions کلیک کنید.




## نکات تکمیلی

### رفع ارور github actions is not allowed to be used

برای رفع این ارور باید از منوی بالای ریپازیتوری روی settings کلیک کنید و از منوی سمت راست روی Actions کلیک کنید و Actions permissions را روی Allow all actions قرار دهید و تنظیمات را ذخیره کنید.
