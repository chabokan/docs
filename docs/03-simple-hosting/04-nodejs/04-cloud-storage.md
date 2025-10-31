---
title: "اتصال NodeJs به فایل S3"
icon: "faCloudArrowUp"
sidebar_label: "اتصال به سرویس فایل S3"
description: "در این بخش می خواهیم آموزش نحوه اتصال `NodeJs` به فایل `S3` را در هاست  نود جی اس NodeJS به شما آموزش دهیم."
---

# اتصال NodeJs به فایل S3
---

در این بخش می خواهیم آموزش نحوه اتصال `NodeJs` به فایل `S3` را در [هاست  نود جی اس NodeJS](https://chabokan.net/cloud-hosting/nodejs/) به شما آموزش دهیم.


برای متصل کردن `NodeJs` به سرویس فایل `S3` باید یکسری تغییرات در پروژه خود اعمال کنید که این تغییرات در این صفحه قدم به قدم خدمت شما شرح داده خواهد شد.

## نصب AWS SDK

برای استفاده از سرویس فایل `S3` ابتدا با استفاده از دستور زیر [کتابخانه aws-sdk](https://www.npmjs.com/package/aws-sdk) را در پروژه خود نصب نمایید.

```bash
npm i aws-sdk
```

## تنظیم کلیدها

حالا که کتابخانه مربوط نصب شد، باید مشخصات سرویس فایل `S3` خود را با استفاده از `env` ها به `Nodejs` معرفی کنید. که برای اینکار می توانید از فایل قسمت متغیر های محیطی چابکان استفاده کنید.

```bash
# name : value

ENDPOINT : <Bucket Endpoint>
BUCKET_NAME : <Bucket Name>
ACCESS_KEY : <Access Key>
SECRET_KEY : <Secret Key>
```

## نحوه‌ی استفاده  

در این بخش نمونه کد های نحوه استفاده از فضای ذخیره سازی در `Nodejs` توضیح داده شده است.


### لیست باکت ها

برای دریافت لیست باکت ها ایجاد شده میتوانید مانند نمونه کد زیر اقدام نمایید:

```javascript
const AWS = require('aws-sdk');

const config = {
    endpoint: process.env(ENDPOINT),
    accessKeyId: process.env(ACCESS_KEY),
    secretAccessKey: process.env(SECRET_KEY),
    region: "default",
}

const client = new AWS.S3(config);

client.listBuckets(
    (err, data) => {
        if (err) console.error(err, err.stack);
        else console.log(data);
    }
);
```

### آپلود فایل در باکت

برای آپلود فایل در باکت ایجاد شده میتوانید مانند نمونه کد زیر اقدام نمایید:

```bash
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
require("dotenv").config();

const client = new S3Client({
    region: "default",
	endpoint: process.env.ENDPOINT,
	credentials: {
		accessKeyId: process.env.ACCESS_KEY,
		secretAccessKey: process.env.SECRET_KEY
	},
});

const params = {
	Body: "<Binary String>",
	Bucket: process.env.BUCKET_NAME,
	Key: "objectkey",
};

try {
  await client.send(new PutObjectCommand(params));
} catch (error) {
	console.log(error);
}

client.send(new PutObjectCommand(params), (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
```

> [نمونه های بیشتر از نحوه **اتصال به S3** در سرویس **Nodejs**](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-creating-buckets.html#s3-example-creating-buckets-scenario)

---
<a href="https://hub.chabokan.net/fa/services/create/nodejs" ><img src="https://s1.chabokan.net/docs/images/nodejs-banner.png" /></a>