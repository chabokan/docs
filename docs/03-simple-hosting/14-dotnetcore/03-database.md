---
title: "آموزش اتصال ASP.NET به دیتابیس"
icon: "faDatabase"
sidebar_label: "اتصال به دیتابیس"
description: "در این بخش می خواهیم آموزش نحوه اتصال `ASP.NET` به دیتابیس را در هاست ASP.NET Core دات نت کور به شما آموزش دهیم."
---
# اتصال ASP.NET به دیتابیس
---

در این بخش می خواهیم آموزش نحوه اتصال `ASP.NET` به دیتابیس را در [هاست ASP.NET Core دات نت کور](https://chabokan.net/cloud-hosting/aspnet-core/) به شما آموزش دهیم.


## اتصال به دیتابیس SQL Server

برای اتصال به دیتابیس `SQL Server` در سرویس `ASP.Net Core` کافیست ابتدا از طریق حساب کاربری خود یک [دیتابیس SQL Server](https://docs.chabokan.net/database/sql-server/install/) ایجاد کنید و سپس با استفاده از دستورعمل زیر دیتابیس را به سرویس خود متصل کنید.

بعد از ایجاد دیتابیس در حساب کاربری خود، باید اطلاعات دیتابیس ایجاد شده را به `ASP.Net Core` معرفی کنید. برای این کار کافیست هاست، نام کاربری، رمزعبور، پورت ایجاد شده را به صورت زیر به `ASP.Net Core` معرفی کنید.

```sql
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=هاست, پورت;Database=نام دیتابیس;User Id=نام کاربری;Password=رمز عبور;"
  }
}
```

سپس، در کد برنامه خود، رشته اتصال را از فایل `appsettings.json` بخوانید و از آن برای اتصال به پایگاه داده استفاده کنید. نمونه کد زیر را بررسی کنید:

```sql
using System;
using System.Data.SqlClient;

class Program
{
    static void Main()
    {
        // خواندن رشته اتصال از فایل appsettings.json
        string connectionString = Configuration.GetConnectionString("DefaultConnection");

        using (SqlConnection connection = new SqlConnection(connectionString))
        {
            connection.Open();
            
            // استفاده از اتصال
            
            connection.Close();
        }
    }
}
```

## اتصال به دیتابیس Mysql

برای اتصال به دیتابیس `Mysql` در سرویس `ASP.Net Core` کافیست ابتدا از طریق حساب کاربری خود [یک دیتابیس Mysql](https://docs.chabokan.net/database/mysql/install/) ایجاد کنید و سپس با استفاده از دستورعمل زیر دیتابیس را به سرویس خود متصل کنید.

بعد از ایجاد دیتابیس در حساب کاربری خود، مراحل زیر را به ترتیب طی نمایید تا دیتابیس به سرویس متصل شود.

ابتدا، از پکیج `MySql.Data.EntityFrameworkCore` در پروژه‌ی خود استفاده کنید. بهتر است این کار را از طریق پکیج منیجر `NuGet` انجام دهید.

در کلاس `Startup.cs`، درون سرویس‌ها `(Services)`، اضافه کردن `(Service)` مربوط به اتصال به دیتابیس MySQL را انجام دهید. این کار را با استفاده از رشته اتصال و سرویس `AddDbContext` انجام دهید:

```sql
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MySql.Data.EntityFrameworkCore.Extensions;

public class Startup
{
    private readonly IConfiguration _configuration;

    public Startup(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public void ConfigureServices(IServiceCollection services)
    {
        string connString = _configuration.GetConnectionString("DefaultConnection");

        services.AddDbContext<YourDbContext>(options =>
            options.UseMySQL(connString)
        );

        // سایر تنظیمات و سرویس های دیگر
    }

    // سایر متدها
}
```

حالا باید اطلاعات مربوط به رشته اتصال را در فایل `appsettings.json` تنظیم کنید:

```sql
{
  "ConnectionStrings": {
    "DefaultConnection": "server=HOST,PORT;database=NAME;user=USERNAME;password=PASS"
  },
  "Logging": {
    // تنظیمات لاگ
  },
  // سایر تنظیمات
}
```

در صورتی که با ارور `unable to connect` برخوردید میتوانید به جای کامند `DefaultConnection` بالا از کامند زیر استفاده نمایید:

```bash
"DefaultConnection": "server=HOST,PORT;database=NAME;user=USERNAME;password=PASS;SslMode=none"
```

در این مثال، `DefaultConnection` مبربوط به تنظیمات اتصال به دیتابیس است که از آن در کد استفاده می‌کنیم. شما باید `HOST،` `PORT،` `NAME،` `USERNAME` و `PASS` را با مقادیر سرویس دیتابیس ساخته شده در چابکان جایگزین کنید.

حالا می‌توانید در کلاس‌های `DbContext` خود، به راحتی از اتصال به دیتابیس `MySQL` استفاده کنید. برای مثال، این‌جا `YourDbContext` یک کلاس `DbContext` است که از آن در کد استفاده می‌کنیم:

```sql
using Microsoft.EntityFrameworkCore;

public class YourDbContext : DbContext
{
    public YourDbContext(DbContextOptions<YourDbContext> options) : base(options)
    {
    }

    // تعریف دی بی ست ها و سایر تنظیمات مربوط به مدل دیتابیس
}
```

شما می‌توانید `DbSet` ها را بر اساس مدل دیتابیس خود تعریف کنید و اقدامات مورد نیاز خود را بر روی این `DbSet` ها انجام دهید.

---
<a href="https://hub.chabokan.net/fa/services/create/dotnetcore" ><img src="https://s1.chabokan.net/docs/images/asp.net-banner.png" /></a>