---
title: "اضافه کردن به عنوان درایو ویندوز"
sidebar_label: "اضافه کردن به عنوان درایو ویندوز"
description: "Rclone  یک ابزار متن‌باز است که می‌توانید آن را از سایت رسمی یا از گیت‌هاب دانلود کنید. برای دانلود لینک‌های زیر در دسترس شماست"
---

# اضافه کردن به عنوان درایو ویندوز
---

Rclone  یک ابزار متن‌باز است که می‌توانید آن را از سایت رسمی یا از گیت‌هاب دانلود کنید. برای دانلود لینک‌های زیر در دسترس شماست:

```
https://rclone.org/downloads/
https://github.com/rclone/rclone/releases/tag/v1.51.0
```

rclone  برای سیستم عامل‌های macOS و لینوکس هم در دسترس است ولی در این راهنما برای استفاده از آن در ویندوز توضیح خواهیم داد و برای سیستم عامل‌های دیگر به مستندات آن در سایت اصلی و در گیت‌هاب مراجعه کنید.

در این راهنما از لینک دانلود اصلی مخصوص ویندوز نسخه 64بیت استفاده می‌کنیم. برای شروع باید پاورشل ویندوز خود را فراخوانی کنید. پاور شل ابزار واسط خط فرمان سیستم عامل ویندوز شماست. برای استفاده ساده تر از دستورها فقط کافی است دستورهای زیر را کپی کنید و در پاورشل وارد کرده و دکمه enter  را بزنید. ما همه‌ی مراحل را در پاورشل توضیح میدهیم

برای باز کردن ابزار Powershell  روی آیکن آن راست کلیک کرده و گزینه‌ی Run as Administrator  را کلیک کنید. بعد از باز شدن پاورشل باید به مسیر موردنظر رفته و یک دایرکتوری(پوشه) برای نصب و ذخیره شدن Rclone ایجاد کنید.

![](https://s1.chabokan.net/docs/images/rclone-1.jpg)

برای استفاده ساده تر از دستورها فقط کافی است دستورهای زیر را کپی کنید و در پاورشل وارد کرده و دکمه enter  را بزنید.

دستور زیر ار برای ایجاد دایرکتوری rclone در درایو c  وارد کنید:

```powershell
mkdir c:\rclone
```

دستور زیر را واردکنید تا به دایرکتوری (پوشه ای) که ایجاد کرده‌اید بروید:

```powershell
cd c:\rclone
```

دستور زیر را وارد کنید تا ابزار rclone  از سایت رسمی دانلو کنید:

```powershell
Invoke-WebRequest -Uri “https://downloads.rclone.org/v1.51.0/rclone-v1.51.0-windows-amd64.zip” -OutFile “c:\rclone\rclone.zip”
```

دستور زیر را وارد کنید تا فایل زیپ دانلود شده اکسترکت شود.

```powershell
Expand-Archive -path ‘c:\rclone\rclone.zip’ -destinationpath ‘.\’
```

برای اینکه مطمئن شوید که فایل ها اکسترکت شده است دستور زیر را بزنید تا محتوای های داخل پوشه به شما نشان داده شود:

```powershell
dir
```

پس از خارج شدن از حالت فشرده یک پوشه با نام  C:\\rclone\\rclone-v1.51.0-windows-amd64 از در لیست فایلها می بینید. توجه داشته باشید که در ویندوز (.) نمیتواند در نام پوشه وجود داشته باشد برای این که نام پوشه را به rclone-v1-51-win64 تغییر دهید دستور زیر را وارد کنید:

```powershell
cp C:\rclone\rclone-v1.51.0-windows-amd64\*.* C:\rclone\
```

[  
](https://www.nakivo.com/blog/wp-content/uploads/2020/06/Rclone-is-extracted-in-Windows.png)می‌توانید مجدد دستور dir را بزنید تا لیست فایل‌ها نمایش داده شود حالا باید فایل rclone.exe را تنظیم کنیم برای این کار این دستور را وارد کنید:

```powershell
.\rclone.exe config
```

تنظیمات را قدم به قدم به صورت ویزارد و طبق دستورات زیر وارد می‌کنید.

حرف n را تایپ کنید یا یک ریموت جدید بسازید:

```powershell
n/s/q> n
```

در قدم بعدی نام باکت خود را وارد کنید. نام باکتی که ایجاد کرده اید را وارد کنید:

```powershell
name> minio
```

در مرحله بعدی باید نوع سرویس آبجکت استوریج خود رو از بین گزینه‌هایی که وجود دارد انتخاب کنید. برای سرویس ابری Minio عدد 4 را وارد کنید :

```powershell
Storage> 4
```

در مرحله بعدی نوع پروایدر خود را تعیین می‌کنید در سرویس ابری Minio پروایدر شما minio است پس عدد 7 را وارد کنید:

```powershell
provider> 7
```

در مورحله بعد env\_outh عدد 1 را وارد کنید :

```powershell
 env_outh> 1
```

در مرحله بعدی اول ACCESS\_KEY و سپس SECRET\_KEY را وارد کنید:

![](https://s1.chabokan.net/docs/images/rclone-2.jpg)

مرحله بعدی موقعیت جغرافیایی را خالی یا “” بگذارید:

```powershell
region> ""
```

در مرحله بعد ادرس دامنه سرویس Minio خود را وارد کنید(بدون https).

مرحله بعدی موقعیت مکانی را خالی یا “” وارد کنید :

```powershell
location_constraint> ""
```

در محله ی بعدی حق دسترسی را تعریف میکنید خالی یا “”را وارد کنید :

```powershell
acl> ""
```

در پایان بدون این که نیازی به تنظیمات پیشرفته داشته باشید دکمه enter را بزنید تا یک بار اطلاعات وارد شده‌ی خود را ببینید:

![](https://s1.chabokan.net/docs/images/rclone-3.jpg)

حرف y  را برای تایید تنظیمات وارد کنید. حالا Rclone روی پارتیشن شما تنظیم شده است. حرف q را وارد کنید تا از تنظیمات Rclone خارج شوید.

```powershell
e/n/d/r/c/s/q> q
```

دستور زیر را وارد کنید تا لیست باکت‌های موجود در سرویس ابری Minio را ببینید (به جای کلمه “backup” نامی که در ابتدا برای کانکشن خود تعریف کرده اید وارد کنید):

```powershell
.\rclone.exe lsd minio:
```

با نمایش لیست باکت ها مطمئن خواهید شد که تنظیمات Rclone درست است.

حالا دستور زیر را وارد کنید تا پکیج Chocolately نصب شود:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

پس از نصب پکیج دستور زیر را وارد کنید تا اپلیکیشن از پکیج نصب شود:

```powershell
choco install winfsp -y
```

[  
](https://www.nakivo.com/blog/wp-content/uploads/2020/06/Installing-WinFSP.png)پس از نصب پکیج دستور زیربه این صورت وارد کنید توجه داشته باشید  عبارت minio اولی همان نامی است که در ابتدای تنظیمات Rclone وارد کرده ایم و backup دومی به نام باکتی که برای ماونت شدن انتخاب کرده ایم اشتاره دارد ممکن است نام باکت یا نامی که در ابتدای تنظیمات واردکرده اید متفاوت باشد شما باید همان مقدار ها را در این دستور وارد کنید:

```powershell
.\rclone mount minio:backup/ S: --vfs-cache-mode full
```

![](https://s1.chabokan.net/docs/images/rclone-4.jpg)

[  
](https://www.nakivo.com/blog/wp-content/uploads/2020/06/Installing-WinFSP.png)پیام The service rclone has been started. نمایش داده میشود و در درایو های ویندوز من هم یک درایو backup اضافه شده است:

در درایوهای وییندوز خواهید دید که یک درایو S به عنوان Network Drive در لیست درایو های شما اضافه شده است و هر فایلی که در باکت مورد نظر تان (در این جا باکت من backup نام دارد) وجود دارد در درایو ویندوز شما هم هست.

نکته: اگر کلید‌های _Ctrl+C_ را در پاورشل کلیک کنید یا CMD یا پاورشل را ببندید، ارتباط درایو مانت شده در ویندوز با سرویس ابری Minio قطع خواهد شد.

![](https://s1.chabokan.net/docs/images/rclone-5.jpg)

فضای ابری یک پتابایت در درایو های ویندوز!

---
<a href="https://hub.chabokan.net/fa/services/create/minio" ><img src="https://s1.chabokan.net/docs/images/minio-banner.png" /></a>