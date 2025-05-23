---
title: "مسیرهای دائمی"
sidebar_label: "مسیرهای دائمی"
description: "با هربار استقرار از طریق CLI فایل های قبلی سرویس حذف می شوند و فایل های جدید جایگزین آن ها می شوند. بعضی "
---

# مسیرهای دائمی
---

با هربار استقرار از طریق `CLI` فایل های قبلی سرویس حذف می شوند و فایل های جدید جایگزین آن ها می شوند. بعضی اوقات سرویس های میزبانی آسان نیاز دارند که یکسری از فایل ها و پوشه به صورت دائمی در سرویس باقی بمانند.

برای این کار کافیست از طریق حساب کاربری خود وارد سرویس ها شوید و روی سرویس خود کلیک کنید، بعد از باز شدن داشبورد سرویس از طریق منو، روی مسیرهای دائمی کلیک کنید. در این بخش می توانید مسیر های دائمی خود را به چابکان معرفی کنید تا در `deploy` بعدی این فایل ها حفظ شوند و خطری آن ها را تهدید نکند.

برای مثال پوشه هایی که در آن فایل آپلود می شود می توانند به عنوان مسیر های دائمی معرفی شوند. (پوشه `storage` در لاراول و `media` در جنگو)

مثال دیگر فایل های `env` هستند که می توانند به عنوان مسیرهای دائمی نیز تعریف شوند.

:::caution توجه

قسمت مسیرهای دائمی به صورت پیشفرض غیرفعال می باشد و در منو سرویس قابل مشاهده نیست. شما می توانید با اولین deploy از طریق CLI این قسمت را فعال کنید.

:::
