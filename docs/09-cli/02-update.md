---
title: "بروزرسانی CLI"
sidebar_label: "بروزرسانی CLI"
---

اگر قبلا CLI چابکان را نصب کرده اید و در حال استفاده از آن می باشد، همواره پیشنهاد می شود که CLI خود را به آخرین نسخه منتشر شده بروزرسانی فرمایید تا از آخرین امکانات CLI به راحتی استفاده کنید. 


## به روز رسانی Node version

برای به روزرسانی ورژن Node سیستم خود ابتدا دستور n را از طریق کامند زیر نصب نمایید:

```shell
npm install n -g
```

سپس با استفاده از کامند زیر اقدام به آپدیت Node خود نمایید.

```shell
n stable
```

## به روز رسانی CLI

برای بروزرسانی CLI کافیست دستور زیر را در خط فرمان یا ترمینال سیستم عامل خود وارد کنید:


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="chabokan" label="چابکان" default>
    ```shell
    npm install -g @chabokan.net/cli
    ```
  </TabItem>
  <TabItem value="cloudiva" label="کلودیوا">
    ```shell
    npm install -g @cloudiva.net/cli
    ```
  </TabItem>
</Tabs>

با زدن دستور بالا CLI چابکان به آخرین ورژن منتشر شده بروزرسانی خواهد شد. برای مشاهده ورژن کنونی CLI نصب شده در سیستم عامل خود کافیست دستور زیر را در خط فرمان یا ترمینال سیستم عامل خود وارد کنید:

```shell
chabok -v
```

در آخر نیز میبایست سیستم خود را ری استارت نموده و برای چک کردن ورژن آخر Node میتوانید ورژن خود را با ورژن قرار گرفته در سایت زیر چک نمایید:

[Chabokan CLI](https://www.npmjs.com/package/@chabokan.net/cli)