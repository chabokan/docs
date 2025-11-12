---
title: "آموزش اتصال NodeJs به دیتابیس"
icon: "faDatabase"
sidebar_label: "اتصال به دیتابیس"
description: "در این بخش می خواهیم آموزش نحوه استقرار برنامه `NodeJs` را در هاست  نود جی اس NodeJS به شما آموزش دهیم."
---

# اتصال NodeJs به دیتابیس
---

در این بخش می خواهیم آموزش نحوه اتصال `NodeJs` به دیتابیس را در [هاست  نود جی اس NodeJS](https://chabokan.net/cloud-hosting/nodejs/) به شما آموزش دهیم.


## اتصال به دیتابیس اشتراکی

برای اتصال به دیتابیس اشتراکی در سرویس `NodeJS` کافیست ابتدا از طریق داشبور سرویس `NodeJs` خود یک دیتابیس ایجاد کنید و سپس با استفاده از دستورعمل زیر دیتابیس را به سرویس خود متصل کنید.


بعد از ایجاد دیتابیس در حساب کاربری خود، باید اطلاعات دیتابیس ایجاد شده را به `NodeJS` معرفی کنید. برای این کار کافیست هاست، نام کاربری، رمزعبور، پورت و نوع دیتابیس ایجاد شده را با استفاده از متغیر های چابکان که در قسمت تنظیمات سرویس قرار دارد به `NodeJS` معرفی کنید.

برای مثال متغیر های زیر برای اتصال به دیتابیس مورد استفاده می باشد.

```properties
# name : value

DB_HOST : Host-adress
DB_PORT : Port-number
DB_DATABASE : DB-name
DB_USERNAME : root
DB_PASSWORD : Password
```

بعد از وارد کردن متغیرهای بالا، این متغیر ها از داخل سرویس شما قابل دسترس هستند و شما با استفاده از کد زیر در سرویس `NodeJS` می توانید به آن ها دسترسی داشته باشید

```javascript
process.env.DB_HOST
```

حالا کافیست از این متغیر ها در قسمت هایی که نیاز به اتصال به دیتابیس دارند استفاده کنید.

## اتصال به دیتابیس Mysql

برای اتصال `MySQL` به `Node.js` ، ابتدا باید دیتابیس `Mysql` خود را ساخته ([نحوه نصب و راه اندازی Mysql](https://docs.chabokan.net/database/mysql/install/)) و سپس بسته `Mysql` را در سرویس `Node.js` خود نصب کنید. میتوانید از npm استفاده کنید. از طریق دستور زیر این بسته را برای پروژه‌ی خود نصب کنید:

```shell
npm install mysql
```

سپس می‌توانید اتصال `MySQL` را با استفاده از کد زیر برقرار کنید:

```javascript
const mysql = require('mysql');

// ساخت اتصال با MySQL
const connection = mysql.createConnection({
  host: 'localhost', // آدرس هاست MySQL
  port: port, // آدرس پورت
  user: 'username', // نام کاربری MySQL
  password: 'password', // رمز عبور MySQL
  database: 'database_name' // نام دیتابیس
});

// برقراری اتصال
connection.connect((error) => {
  if (error) {
    console.error('خطا در برقراری اتصال به MySQL: ' + error.stack);
    return;
  }
  console.log('اتصال به MySQL با موفقیت برقرار شد.');
});

// انجام کوئری
connection.query('SELECT * FROM table_name', (error, results) => {
  if (error) {
    console.error('خطا در اجرای کوئری: ' + error.stack);
    return;
  }
  console.log('نتایج کوئری:', results);
});

// قطع اتصال
connection.end((error) =>{
  if (error) {
    console.error('خطا در قطع اتصال از MySQL: ' + error.stack);
    return;
  }
  console.log('اتصال با MySQL قطع شد.');
});
```
در نهایت نیز با اجرای این کد، اتصال به دیتابیس `MySQL` برقرار می‌شود و میتوانید کوئری‌های مورد نیاز خود را اجرا کنید.



## اتصال به دیتابیس Mongodb

برای اتصال `mongodb` به Node.js ، ابتدا باید دیتابیس `mongodb` خود را ساخته ([نحوه نصب و راه اندازی mongodb](https://docs.chabokan.net/database/mongodb/install/)) و سپس بسته `mongodb` را در سرویس `nodejs` خود نصب کنید. میتوانید از `npm` استفاده کنید. از طریق دستور زیر این بسته را برای پروژه‌ی خود نصب کنید:

```shell
npm install mongodb
```

سپس در فایل `js` خود، `MongoClient` را به صورت زیر وارد کنید:


```javascript
const MongoClient = require('mongodb').MongoClient;
```
سپس یک اتصال جدید به `MongoDB` بسازید با استفاده از `MongoClient.connect()`، همچنین `URL` ، مشخص کننده مشخصات سرویس `Mongodb` شما میباشد و باید با توجه به مشخصات سرویس `Mongodb` خود اقدام به پر کردن `URL` نمایید:

```javascript
const url = 'mongodb://USERNASME:PASSWORD@MONGO_SERVER_URL:MONGO_PORT/?authSource=admin';

const dbName = 'mydatabase';

MongoClient.connect(url, function(err, client) {
  // مدیریت خطاها
  if(err) {
      console.log('خطا در اتصال به MongoDB:', err);
  } else {
      console.log('اتصال با موفقیت برقرار شد');

      const db = client.db(dbName);

      // در اینجا می توانید عملیات مربوط به دیتابیس را انجام دهید

      client.close();
  }
});
```

> [مستند **اتصال به دیتابیس Mysql** در سرویس **Nodejs**](https://www.npmjs.com/package/mysql)
>
> [مستند **اتصال به دیتابیس Mongodb** در سرویس **Nodejs**](https://www.npmjs.com/package/mongodb)

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/nodejs"
img="https://s1.chabokan.net/docs/images/nodejs-banner.png"
/>