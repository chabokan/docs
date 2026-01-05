---
title: "تنظیمات NGINX"
icon: "faServer"
sidebar_label: "تنظیمات NGINX"
description: "در پلتفرم ابری چابکان شما می توانید به راحتی منطقه زمانی یا TimeZone سرویس خود را تغییر دهید و هر منطقه "
---

# تنظیمات NGINX
---

برخی سرویس‌ها در چابکان با وب‌سرور NGINX میزبانی می‌شوند که شما می‌توانید تنظیمات پیشفرض NGINX بر اساس نیاز
خود تغییر دهید. در این مستند به بررسی امکانات NGINX در سرویس‌های چابکان می‌پردازیم.

import ServiceLogo from '@site/src/components/ServiceLogo';

:::caution توجه
این تنظیمات تنها برای سرویس‌های زیر قابل استفاده هستند:
<ServiceLogo id="angular" linkMode="nginx"/>
<ServiceLogo id="django" linkMode="nginx"/>
<ServiceLogo id="react" linkMode="nginx"/>
<ServiceLogo id="static" linkMode="nginx"/>
<ServiceLogo id="vue" linkMode="nginx"/>
:::

import Nginx from './_nginx.md';

<Nginx />
