---
title: "آموزش افزودن ایمیل در PHP"
icon: "faEnvelopeOpen"
sidebar_label: "تنظیمات ایمیل"
description: "در این بخش می خواهیم آموزش نحوه تنظیمات ایمیل را در هاست php به شما آموزش دهیم."
---

# تنظیمات ایمیل در PHP
---

در این بخش می خواهیم آموزش نحوه تنظیمات ایمیل را در [هاست php](https://chabokan.net/cloud-hosting/php/) به شما آموزش دهیم. ابتدا به سرویس خود مراجعه کنید و در بخش ایمیل ها بر روی افزودن ایمیل کلیک نمایید.([افزودن ایمیل](/features/email/add-email/))

سپس مراحل زیر را به ترتیب طی کنید تا به راحتی بتوانید از برنامه خود ایمیل ارسال نمایید.

## نصب پکیج

برای ارسال ایمیل از `PHP` در ابتدا باید [پکیج PHPMailer](https://github.com/PHPMailer/PHPMailer)  را در برنامه خود نصب نمایید:

```shell
composer require phpmailer/phpmailer
```

## تنظیمات متغییر های محیطی (env)

در مرحله بعد باید اطلاعات ایمیل را در متغییر های محیطی تنظیمات سرویس اضافه کنید.

```properties
# name : value

MAIL_HOST : mail.chabokan.net
MAIL_PORT : 587
MAIL_SECURITY : tls
MAIL_USER : info@example.net
MAIL_PASSWORD : vfjbih34w9fr8
```

## تنظیمات در کد

در نهایت می‌توانید در پروژه‌ی خود مانند مثال زیر عمل کرده و با استفاده از دسترسی ایمیل سرویس چابکان به‌صورت امن اقدام به ارسال ایمیل‌های تراکنشی نمایید:

```php
<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once "vendor/autoload.php";

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = getenv('MAIL_SECURITY');
$mail->Port = getenv('MAIL_PORT');
$mail->Host = getenv('MAIL_HOST');
$mail->Username = getenv('MAIL_USER');
$mail->Password = getenv('MAIL_PASSWORD');

$mail->From = "from@example.com";
$mail->FromName = "MyName";

$mail->addAddress("destination@host.name", "destination name");

$mail->isHTML(false);

$mail->Subject = "Mailing with PHPMailer";
$mail->Body = "Congratulation";
$mail->AltBody = "Congratulation";

try {
    $mail->send();
    echo "Message has been sent successfully";
} catch (Exception $e) {
    error_log("Mailer Error: $mail->ErrorInfo", 0);
}
```

> [مستند **تنظیمات ایمیل** در سرویس **PHP**](https://github.com/PHPMailer/PHPMailer/blob/master/README.md)

---
<a href="https://hub.chabokan.net/fa/services/create/php" ><img src="https://s1.chabokan.net/docs/images/php-banner.png" /></a>