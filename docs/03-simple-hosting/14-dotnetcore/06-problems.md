---
title: "مشکلات احتمالی"
icon: "faTriangleExclamation"
sidebar_label: "مشکلات احتمالی"
description: "در این قسمت مشکلات احتمالی که ممکن است با آن برخورد کنیم را بررسی کرده و راه حل آن را نیز مشاهده میکنیم."
---

# مشکلات احتمالی
---

در این قسمت مشکلات احتمالی که ممکن است با آن برخورد کنیم را بررسی کرده و راه حل آن را نیز مشاهده میکنیم.

## خطای CORS در دات نت

در صورت برخورد با ارور CORS No Allow Credentials و یا CORS Missing Allow Header میتوانید از راه حل زیر استفاده نمایید.

برای حل این مشکل میتوانید در کلاس `Startup` متود `ConfigureServices` را بررسی نمایید:

```bash
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

public void ConfigureServices(IServiceCollection services)
{
    services.AddCors(options =>
    {
        options.AddPolicy(name: MyAllowSpecificOrigins,
                          policy =>
                          {
                              policy.WithOrigins("http://example.com",
                                                  "http://www.contoso.com");
                          });
    });

    services.AddControllers();
}
```

سپس `CORS middleware` را در کلاس `Startup` متود `Configure` اضافه نمایید:

```bash
public void Configure(IApplicationBuilder app)
{
    app.UseCors(MyAllowSpecificOrigins);

    app.UseRouting();

    app.UseAuthorization();

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
    });
}
```

---
<a href="https://hub.chabokan.net/fa/services/create/dotnetcore" ><img src="https://s1.chabokan.net/docs/images/asp.net-banner.png" /></a>