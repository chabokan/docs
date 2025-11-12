---
title: "آموزش فعال سازی Replica در Mongodb"
icon: "faClone"
sidebar_label: "فعال سازی Replica"
description: "دیتابیس MongoDB قابلیت این را دارد که داده ها را در چندین سرور قرار دهد و از آن ها استفاده کند. اما در برخی وارد هم نیاز هست که این قابلیت به صورت تک سرور اجرا شود و از آن استفاده کرد."
---

# فعال سازی Replica در Mongodb
---


در ادامه میخواهیم آموزش نحوه فعال سازی Replica را در سرویس [دیتابیس مونگو دی بی](https://chabokan.net/services/mongodb/) به شما آموزش دهیم.

دیتابیس MongoDB قابلیت این را دارد که داده ها را در چندین سرور قرار دهد و از آن ها استفاده کند. اما در برخی وارد هم نیاز هست که این قابلیت به صورت تک سرور اجرا شود و از آن استفاده کرد. در هر صورت برای فعال کردن Replica در دیتابیس ابری Mongodb چابکان کافیست این قابلیت در ابتدا از طریق تنظیمات سرویس فعال کنید و تنظیمات را ذخیره کنید و بعد از ریست شدن سرویس از طریق کنسول Replica مورد نظر خود را تنظیم نمایید.

## مرحله اول: ایجاد key

در مرحله اول نیاز به ایجاد یک فایل key برای replica می باشد که با وارد کردن دستور زیر در کنسول سرویس خود می توانید یک key فایل با نام replica.key ایجاد بفرمایید. (دقت بفرمایید که این فایل باید با همین اسم و در مسیر /data/db قرار داشته باشد.)

```shell
openssl rand -base64 756 > /data/db/replica.key && chmod 600 /data/db/replica.key
```

## مرحله دوم: تنظیم Replica به صورت تک سرور

برای این کار کافیست دستورات زیر را از طریق کنسول سرویس خود وارد کنید:

ابتدا با استفاده از دستور زیر وارد mongo shell می شویم (بجای USERNAME و PASSWORD اطلاعات خود را وارد کنید):

```shell
mongo -u USERNAME -p PASSWORD
```

 در MongoDB ورژن 6 دستور mongo غیرفعال شده و می توانید از دستور زیر استفاده نمایید

```shell
mongosh -u USERNAME -p PASSWORD
```

و سپس دستور زیر را وارد می کنیم (بجای HOST و PORT اطلاعات خود را وارد کنید):

```javascript
rs.initiate({
  _id: 'mongo-set',
  protocolVersion: 1,
  members: [
  { _id: 0, host: 'HOST:PORT' }
  ]
});
```

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/mongodb"
img="https://s1.chabokan.net/docs/images/mongodb-banner.png"
/>