---
title: "آموزش اتصال Laravel به دیتابیس"
icon: "faDatabase"
sidebar_label: "اتصال به دیتابیس"
description: "در این بخش می خواهیم آموزش نحوه اتصال به دیتابیس را در هاست لاراول laravel به شما آموزش دهیم."
---

# اتصال Laravel به دیتابیس
---

در این بخش می خواهیم آموزش نحوه اتصال به دیتابیس را در [هاست لاراول laravel](https://chabokan.net/cloud-hosting/php/laravel/) به شما آموزش دهیم.

برای اتصال به دیتابیس در سرویس `Laravel` کافیست ابتدا از طریق حساب کاربری خود یک دیتابیس ایجاد کنید و سپس با استفاده از دستورعمل زیر دیتابیس را به سرویس خود متصل کنید.

## اتصال از طریق متغیر های چابکان

برای اتصال به دیتابیس در سرویس `Laravel` کافیست ابتدا از طریق حساب کاربری خود یک دیتابیس ایجاد کنید و سپس با استفاده از دستورعمل زیر دیتابیس را به سرویس خود متصل کنید.

بعد از ایجاد دیتابیس در حساب کاربری خود، باید اطلاعات دیتابیس ایجاد شده را به `Laravel` معرفی کنید. برای این کار ابتدا به قسمت تنظیمات سرویس `Laravel` خود مراجعه نمایید.

سپس کافیست هاست، نام کاربری، رمزعبور، پورت و نوع اتصال دیتابیس و نام دیتابیس ایجاد شده را در قسمت متغیر های محیطی پلتفرم مانند نمونه های زیر اضافه نمایید.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


### Mysql / Mariadb
```bash
# name : value

DB_CONNECTION : mysql
DB_HOST : Host-adress
DB_PORT : Port-number
DB_DATABASE : DB-name
DB_USERNAME : root
DB_PASSWORD : Password
```

![](https://s1.chabokan.net/docs/images/python-database-connect-1.jpg)

> [مستند رسمی **اتصال به دیتابیس** در سرویس **Laravel**](https://laravel.com/docs/database#configuration)

---
<a href="https://hub.chabokan.net/fa/services/create/laravel" ><img src="https://s1.chabokan.net/docs/images/laravel-banner.png" /></a>