---
title: "آموزش افزودن ایمیل در Laravel"
icon: "faEnvelopeOpen"
sidebar_label: "تنظیمات ایمیل"
description: "در این بخش می خواهیم آموزش نحوه تنظیمات ایمیل را در هاست لاراول laravel به شما آموزش دهیم."
---

# تنظیمات ایمیل Laravel
---

در این بخش می خواهیم آموزش نحوه تنظیمات ایمیل را در [هاست لاراول laravel](https://chabokan.net/cloud-hosting/php/laravel/) به شما آموزش دهیم. ابتدا به سرویس خود مراجعه کنید و در بخش ایمیل ها بر روی افزودن ایمیل کلیک نمایید.([افزودن ایمیل](https://docs.chabokan.net/features/email/add-email/))

سپس مراحل زیر را به ترتیب طی کنید تا به راحتی بتوانید از برنامه خود ایمیل ارسال نمایید.

## تنظیمات متغییر های محیطی (env)

در مرحله بعد باید اطلاعات ایمیل را در متغییر های محیطی تنظیمات سرویس اضافه کنید.

```properties
# name : value

MAIL_DRIVER : smtp
MAIL_HOST : mail.chabokan.net
MAIL_PORT : 587
MAIL_ENCRYPTION : tls
MAIL_USERNAME : info@example.net
MAIL_PASSWORD : ********

```

## ساخت کلاس Mailable

حال به کنسول مراجعه کرده و در پروژه خود یک کلاس `Mailalbe` با استفاده از کامند زیر ایجاد میکنید. با اجرای این دستور، یک فایل `MailManage.php` در پوشه `app/Mail` ایجاد خواهد شد.

```shell
php artisan make:mail EmailClass
```

## ویرایش کلاس Mailable

سپس به قسمت `app/Mail` رفته و فایل `EmailClass.php` را ادیت کرده و کد زیر را در آن قرار میدهید.

```php
<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class EmailClass extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()

    {

        return $this->from('info@test.com') // آدرس ایمیل ارسال کننده
                    ->subject('mail subject') // سابجکت ایمیل
                    ->view('emails.mail'); // نام فایل ویو
    }
}
```

## ساخت view

سپس به فولدر `/resources/views/` رفته و یک فولدر به نام `emails` بسازید و در این فولدر یک فایل با نام `mail.blade.php` ساخته و کد زیر را در آن قرار دهید تا `view` ارسال ایمیل ساخته شود:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email template for Laravel</title>
</head>
<body>
    <p>this is a mail! </p>
</body>
</html>
```

## ساخت Controller

حالا کامند زیر را در کنسول وارد کنید تا کنترلر ایمیل ساخته شود.

```shell
php artisan make:controller EmailController
```

سپس به فولدر `/app/Http/Controllers` رفته و فایل `EmailController` را ادیت نموده و قطعه کد زیر را در این فایل قرار دهید:

```php
namespace App\Http\Controllers;

use App\Mail\EmailClass;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;

class EmailController extends Controller
{
    public function sendEmail(Request $request)
    {
        Mail::to('recipient@example.com')->send(new EmailClass()); // در این قسمت میبایست آدرس ایمیل دریافت کننده را وارد کنید.

        return "ایمیل فرستاده شد.";
    }
}
```

## تعریف Route

سپس به قسمت `/routes` رفته و کامند زیر را در فایل `web.php` قرار میدهید.

```php
use App\Http\Controllers\EmailController;

Route::get('/send-email', [EmailController::class, 'sendEmail']);
```

حالا هنگامی که https://your-url/send-email را در مرورگر فراخوانی کنید، متد `sendEmail` از کلاس `EmailController` فعال شده و ایمیل ارسال می‌گردد.

> [مستند رسمی **تنظیمات ایمیل** در سرویس **Laravel**](https://laravel.com/docs/mail#generating-mailables)

---
<a href="https://hub.chabokan.net/fa/services/create/laravel" ><img src="https://s1.chabokan.net/docs/images/laravel-banner.png" /></a>