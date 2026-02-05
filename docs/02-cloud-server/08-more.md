---
title: "نکات آموزشی سرور ابری"
icon: "faLightbulb"
sidebar_label: "نکات تکمیلی"
description: "در این بخش می خواهیم نکات تکمیلی مربوط به سرور ابری را به شما آموزش دهیم"
---

# نکات تکمیلی سرور ابری
---

در این بخش می خواهیم نکات تکمیلی [سرور ابری](https://chabokan.net/products/cloudserver/) را به شما آموزش دهیم.

## اتصال دامنه

روش‌های مختلفی برای اتصال دامنه به سرور ابری وجود دارد که در این قسمت شما را راهنمایی می‌کنیم. ۳ روش مرسوم برای اتصال
دامنه به سرور ابری را بررسی‌می‌کنیم:

* اتصال از طریق A Record
* اتصال از طریق DNS اختصاصی
* اتصال از طریق CDN

:::tip
در چابکان می‌توانید به‌سادگی **دامنه‌ی جدید ثبت کنید**، دامنه‌ی خود را **تمدید یا خریداری** کنید و حتی دامنه‌تان را **به
چابکان منتقل** کنید.  
این امکانات به شما کمک می‌کند مدیریت مالکیت دامنه‌تان را در کنار سایر سرویس‌های چابکان یکپارچه کنید. برای راهنمایی بیشتر
به [این مستند](/domain) مراجعه کنید.
:::

### اتصال دامنه از طریق A Record

این روش، آسان‌ترین راه برای لینک کردن دامنه به سرور ابری محسوب می‌شود. برای اجرا، کافی است رکورد A مرتبط با دامنه را در
DNS Zone موجود به‌روزرسانی یا اصلاح کنید. با استفاده از این روش، تنظیمات و فایل‌های DNS Zone در ارائه‌دهنده فعلی بدون
تغییر باقی خواهند ماند. این شیوه برای کاربران تازه‌کار یا افرادی که قصد انتقال موقعیت DNS Zone را ندارند، مناسب و
کاربردی است.

| Name        | TTL   | Type | Address   |
|-------------|-------|------|-----------|
| example.com | 14400 | A    | server-ip |

### اتصال از طریق DNS اختصاصی

با استفاده از `ssh` به سرور ابری متصل شوید و ابزار `BIND` را نصب کنید:

```shell title="نصب ابزار BIND"
sudo apt install bind9 bind9utils bind9-doc
```

بعد از نصب `BIND` باید تنظیمات زیر را انجام دهیم:

با دستور زیر فایل `named.conf.options` را باز می‌کنیم:

```shell
sudo nano /etc/bind/named.conf.options
```

محتوای زیر را به فایل اضافه کنید:

```nginx
options {
    directory "/var/cache/bind";

    recursion no;
    allow-transfer { none; };

    dnssec-validation auto;

    listen-on { any; };
    listen-on-v6 { any; };
};
```

با فشار دادن کلیدهای `CTRL + S` و سپس `CTRL + X` فایل را ذخیره کرده و خارج شوید.

در ادامه فایل `Zone` را اضافه می‌کنیم.

با دستور زیر فایل `named.conf.local` را باز می‌کنیم:

```shell
sudo nano /etc/bind/named.conf.local
``` 

محتوای زیر را به فایل اضافه کنید:

```nginx
zone "example.com" {
    type master;
    file "/etc/bind/zones/db.example.com";
};
```

با فشار دادن کلیدهای `CTRL + S` و سپس `CTRL + X` فایل را ذخیره کرده و خارج شوید.

سپس دستورات زیر را برای ایجاد فایل `Zone` وارد می‌کنیم.

```shell
sudo mkdir /etc/bind/zones
sudo nano /etc/bind/zones/db.example.com
```

و سپس محتوای زیر را به فایل اضافه کنید:

```
$TTL 86400
@   IN SOA  ns1.example.com. admin.example.com. (
        2025010101 ; Serial
        3600       ; Refresh
        1800       ; Retry
        1209600    ; Expire
        86400 )    ; Negative Cache TTL

; Nameservers
@       IN NS      ns1.example.com.
@       IN NS      ns2.example.com.

; A records
@       IN A       <your-server-public-IP>
www     IN A       <your-server-public-IP>

; NS record host
ns1     IN A       <your-server-public-IP>

```

با فشار دادن کلیدهای `CTRL + S` و سپس `CTRL + X` فایل را ذخیره کرده و خارج شوید.

در نهایت برای اعمال تنظیماتی که انجام شد دستورات زیر را وارد کنید:

```shell
sudo named-checkconf
sudo named-checkzone example.com /etc/bind/zones/db.example.com
sudo systemctl restart bind9
sudo systemctl enable bind9
```

حال باید در پنل مدیریت دامنه مقدار کارگزار دامنه را به آدرس‌های `ns1.example.com` و `ns2.example.com` تغییر دهیم.

| No | Name            | IP        |
|----|-----------------|-----------|
| 1  | ns1.example.com | server-ip |
| 2  | ns2.example.com | server-ip |

:::caution توجه

اعمال تغییرات از سمت دامنه ممکن است بین ۱ تا ۲۴ ساعت طول بکشد.

:::

### اتصال از طریق CDN

برای اتصال دامنه به سرور ابری از طریق `CDN` می‌بایست به پنل مدیریت ارائه دهنده `CDN` مراجعه کنید. در این آموزش اتصال از
طریق Cloudflare را بررسی می‌کنیم.

ابتدا وارد پنل مدیریت DNS دامنه خود در Cloudflare شوید. سپس در قسمت Record روی دکمه **Add record** کلیک کنید و فرم را
مانند مثال پر کنید:

```properties
Type=A
Name=example.com
IPv4=server-ip
```

![اتصال دامنه از طریق Cloudflare](https://s1.chabokan.net/docs/images/cloud-server-dns-cloudflare.png)

:::info نکته

دقت کنید که برای اتصال دامنه از این روش باید حتما از قبل دامنه خود را به Cloudflare متصل کرده باشید. برای انجام این کار
می‌توانید به [مستندات رسمی Cloudflare](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/) مراجعه کنید.

:::

### میزبانی دامنه با استفاده از NGINX

زمانی که دامنه را به وسیله DNS به سرور متصل کردید لازم است تا به وسیله برنامه وب‌سرور درخواست‌های ورودی به سرور را
مدیریت کنید. در این قسمت طریقه تنظیم NGINX برای اینکار را به شما آموزش می‌دهیم.

ابتدا باید این ابزار را روی سرور با استفاده از دستور زیر نصب کنید:

```shell title="نصب NGINX"
sudo apt install nginx
```

سپس برای تنظیم پورت دستور زیر را وارد کنید (مقدار example.com را با آدرس دامنه خود جایگزین کنید):

```shell
sudo nano /etc/nginx/sites-available/example.com
```

پس از باز شدن ویرایشگر nano متن زیر را وارد کنید:

```nginx
server {
    listen 80;
    server_name example.com www.example.com;

    root /var/www/example;
    index index.html index.htm;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

در این تنظیم پورت ۸۰ که پورت پیشفرض `http` است را به اجرای فایل `index.html` در مسیر `/var/www/example` منصل کردیم.

سپس با دستور زیر تنظیمات انجام شده را روی NGINX اعمال می‌کنیم:

```shell
sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```

در نهایت برای فعال شدن این تنظیمات با استفاده از دستور زیر باید NGINX را یکبار Reload کنیم:

```shell
sudo nginx -t
sudo systemctl reload nginx
```

حالا سرور شما آماده پردازش درخواست‌های ارسالی به دامنه شماست.

## تغییر سرویس‌دهنده‌های DNS

به‌طور پیش‌فرض، سرورهای ابری چابکان از سرویس دهنده‌های DNS عمومی گوگل (8.8.8.8) استفاده می‌کنند. در صورت نیاز می‌توانید
این تنظیمات را تغییر دهید.

### مراحل تغییر DNS

1. **اتصال به سرور**: ابتدا از طریق `SSH` به سرور ابری خود متصل شوید.
2. **ویرایش فایل پیکربندی**: فایل resolved.conf را با یک ویرایشگر متن مانند nano باز کنید:
   ```shell
    sudo nano /etc/systemd/resolved.conf
    ```
3. **اعمال تنظیمات**: در فایل بازشده، خطوط مربوط به DNS و FallbackDNS را پیدا کنید. با حذف علامت # از ابتدای این خطوط،
   آن‌ها
   را از حالت توضیح خارج کرده (فعال کنید) و آدرس‌های IP سرویس دهنده‌های DNS مورد نظر خود را وارد نمایید.
   مثال:
    ```properties title="resolved.conf"
    DNS=217.218.127.127 217.218.155.155
    FallbackDNS=8.8.8.8
    ```
4. **ذخیره و خروج**: تغییرات را ذخیره و از ویرایشگر خارج شوید
   در `nano` ابتدا کلید‌های `CTRL + s` (برای ذخیره) و سپس `CTRL + x` (برای خروج) را فشار دهید
5. **اعمال تغییرات**: سرویس `systemd-resolved` را مجدداً راه‌اندازی کنید تا تنظیمات جدید اعمال شوند
   ```shell
    sudo systemctl restart systemd-resolved
    ```
6. **تأیید تغییرات**: پس از راه‌اندازی مجدد سرویس، می‌توانید با دستور زیر از اعمال صحیح تنظیمات اطمینان حاصل کنید:
   ```shell
    sudo systemctl status systemd-resolved
    ```

:::tip نکته
در زمان قطع اینترنت و سرویس‌دهی در شبکه ملی اطلاعات و یا برای کاهش زمان انتظار در ارتباط با سرویس‌های داخلی می‌توانید
از
سرویس `DNS` رایگان زیرساخت استفاده کنید:

```shell
217.218.127.127
217.218.155.155
```

:::
