---
title: "آموزش اتصال به فایل S3 در ASP.NET Core"
sidebar_label: "اتصال به فایل S3"
description: "در این بخش می خواهیم آموزش نحوه اتصال به فایل `S3` در `ASP.NET Core` را در هاست ASP.NET Core دات نت کور به شما آموزش دهیم."
---

# اتصال به فایل S3 در ASP.NET Core
---

در این بخش می خواهیم آموزش نحوه اتصال به فایل `S3` در `ASP.NET Core` را در [هاست ASP.NET Core دات نت کور](https://chabokan.net/cloud-hosting/aspnet-core/) به شما آموزش دهیم.

برای متصل کردن `ASP.NET Core` به سرویس فایل `S3` باید یکسری تغییرات در پروژه خود اعمال کنید که این تغییرات در این صفحه قدم به قدم خدمت شما شرح داده خواهد شد.

## نصب AWS SDK

برای استفاده از سرویس فایل `S3` باید ابتدا با استفاده از دستور زیر کتابخانه مربوط به این سرویس را در پروژه خود نصب کنید.

```powershell
Install-Package AWSSDK.S3
```

## تنظیم کلیدها

حالا که کتابخانه مربوط نصب شد، باید مشخصات سرویس فایل `S3` خود را با استفاده از `env` ها به `ASP.NET Core` معرفی کنید. که برای اینکار می توانید از فایل قسمت متغیر های محیطی چابکان استفاده کنید.

```bash
# name : value

ENDPOINT : <Bucket Endpoint>
BUCKET_NAME : <Bucket Name>
ACCESS_KEY : <Access Key>
SECRET_KEY : <Secret Key>
```

## نحوه‌ی استفاده

نمونه کد برای دریافت لیست باکت‌های ایجاد شده:

```csharp
using Amazon.S3;
using System;
using System.Threading.Tasks;
using Amazon;

class Program
{
  private const string accessKey = Environment.GetEnvironmentVariable("ACCESS_KEY");
  private const string secretKey = Environment.GetEnvironmentVariable("SECRET_KEY");

  static void Main(string[] args)
  {
    Task.Run(MainAsync).GetAwaiter().GetResult();
  }

  private static async Task MainAsync()
  {
    var config = new AmazonS3Config
    {
      RegionEndpoint = RegionEndpoint.USEast1,
      ServiceURL = Environment.GetEnvironmentVariable("ENDPOINT")
    };
    var amazonS3Client = new AmazonS3Client(
      accessKey,
      secretKey,
      config);

    amazonS3Client.ExceptionEvent += OnAmazonS3Exception;

    var listBucketResponse = await amazonS3Client.ListBucketsAsync();

    foreach (var bucket in listBucketResponse.Buckets)
    {
      // ...
    }
    if (listBucketResponse.Buckets.Count > 0)
    {
      var bucketName = listBucketResponse.Buckets[0].BucketName;
      var listObjectsResponse = await amazonS3Client.ListObjectsAsync(bucketName);
      foreach (var obj in listObjectsResponse.S3Objects)
      {
        // ...
      }
    }
  }
}
```

---
<a href="https://hub.chabokan.net/fa/services/create/dotnetcore" ><img src="https://s1.chabokan.net/docs/images/asp.net-banner.png" /></a>