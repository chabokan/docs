---
title: "آموزش اتصال PHP به دیتابیس"
icon: "faDatabase"
sidebar_label: "اتصال به دیتابیس"
description: "در این بخش می خواهیم آموزش نحوه اتصال `PHP` به دیتابیس  را در هاست php به شما آموزش دهیم."
---

# اتصال PHP به دیتابیس
---

در این بخش می خواهیم آموزش نحوه اتصال `PHP` به دیتابیس  را در [هاست php](https://chabokan.net/cloud-hosting/php/) به شما آموزش دهیم.


برای اتصال به دیتابیس در سرویس `PHP` کافیست ابتدا از طریق حساب کاربری خود یک دیتابیس ایجاد کنید و سپس با استفاده از دستورعمل زیر دیتابیس را به سرویس خود متصل کنید.

## اتصال از طریق متغیر های چابکان

بعد از ایجاد دیتابیس در حساب کاربری خود، باید اطلاعات دیتابیس ایجاد شده را به `php` معرفی کنید. برای این کار کافیست هاست، نام کاربری، رمزعبور، پورت و نوع دیتابیس ایجاد شده را با استفاده از متغیر های چابکان که در قسمت تنظیمات سرویس قرار دارد به `php` معرفی کنید.

برای مثال در صورتی که از کتابخانه [Medoo](https://github.com/catfan/Medoo) استفاده کنیم، ابتدا متغیر های زیر را برای اتصال به دیتابیس مورد نظر استفاده می کنیم.

```bash
# name : value

DB_HOST : Host-adress
DB_PORT : Port-number
DB_DATABASE : DB-name
DB_USERNAME : root
DB_PASSWORD : Password
```

حال در برنامه میتوانید با توجه به نوع دیتابیس ساخته شده، اطلاعات را به صورت زیر وارد نمایید تا به دیتابیس متصل شوید:


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="mysql" label="Mysql" default>
        ```php
        <?php
        require 'vendor/autoload.php';
        use Medoo\Medoo;

        $database = new Medoo([
                'database_type' => 'mysql',
                'server' => getenv('DB_HOST'),
                'port' => getenv('DB_PORT'),
                'database_name' => getenv('DB_DATABASE'),
                'username' => getenv('DB_USERNAME'),
                'password' => getenv('DB_PASSWORD'),
                'charset' => 'utf8'
        ]); 
        ```
  </TabItem>
  <TabItem value="mariadb" label="Mariadb">
        ```php
        <?php
        require 'vendor/autoload.php';
        use Medoo\Medoo;

        $database = new Medoo([
                'database_type' => 'mariadb',
                'server' => getenv('DB_HOST'),
                'port' => getenv('DB_PORT'),
                'database_name' => getenv('DB_DATABASE'),
                'username' => getenv('DB_USERNAME'),
                'password' => getenv('DB_PASSWORD'),
                'charset' => 'utf8'
        ]); 
        ```
  </TabItem>
</Tabs>


---
<a href="https://hub.chabokan.net/fa/services/create/php" ><img src="https://s1.chabokan.net/docs/images/php-banner.png" /></a>