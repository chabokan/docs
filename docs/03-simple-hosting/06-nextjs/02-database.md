---
title: "آموزش اتصال NodeJs به دیتابیس"
sidebar_label: "اتصال به دیتابیس"
description: "در این بخش می خواهیم آموزش نحوه استقرار برنامه `Nextjs` را در هاست  نود جی اس Nextjs به شما آموزش دهیم."
---

# اتصال Nextjs به دیتابیس
---

در این بخش می خواهیم آموزش نحوه اتصال `Nextjs` به دیتابیس را در [هاست  نکست جی اس Nextjs](https://chabokan.net/cloud-hosting/nextjs/) به شما آموزش دهیم.

برای اتصال دیتابیس به سرویس Nextjs خود، در صورتی که از Pages router استفاده مینمایید، ابتدا در مسیر زیر میبایست فایل db.js را ایجاد نموده و سپس با توجه به نوع دیتابیس خود، فایل ایجاد شده را کانفیگ نمایید.

```bash
/app/pages/api/
```

## اتصال به دیتابیس Mysql

برای اتصال دیتابیس Mysql به سرویس Nextjs، ابتدا میبایست پکیج mysql2 را نصب نمایید:

```bash
npm install mysql2
```

سپس فایل db.js را در مسیر /app/pages/api/ مانند نمونه زیر تکمیل نمایید:

```bash
import mysql from 'mysql2/promise';

const dbConfig = {
  uri: 'mysql://USER:PASS@HOST:PORT/DB-NAME', // طبق مشخصات دیتابیس خود تکمیل شود.
};

let connection;
async function connectToDatabase() {
  try {
    if (connection) {
      return connection;
    }
    connection = await mysql.createConnection(dbConfig.uri);
    console.log('Connected.');
    return connection;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
export default connectToDatabase;

```

حال میتوانید با استفاده از کد زیر در برنامه خود، اتصال دیتابیس به برنامه را بررسی نمایید:


```bash
import connectToDatabase from './api/db.js';

export default function Home({ isConnectedToDB }) {
  return (
    <div>
      <h1>DB connection</h1>
      <p>Connected to MySQL: {isConnectedToDB ? 'Yes' : 'No'}</p>
    </div>
  );
}

export async function getStaticProps() {
  let isConnectedToDB = false;

  try {
    await connectToDatabase();
    isConnectedToDB = true;
  } catch (error) {
    isConnectedToDB = false;
  }

  return {
    props: {
      isConnectedToDB,
    },
  };
}
```

## اتصال به دیتابیس Mariadb

برای اتصال دیتابیس Mariadb به سرویس Nextjs، ابتدا میبایست پکیج mariadb را نصب نمایید:

```bash
npm install mariadb
```

سپس فایل db.js را در مسیر /app/pages/api/ مانند نمونه زیر تکمیل نمایید:

```bash
import mariadb from 'mariadb';

const pool = mariadb.createPool({
  host: 'HOST',
  port: PORT,
  user: 'USER',
  password: 'PASS',
  database: 'DB-NAME', 
});

async function connectToDatabase() {
  let connection;

  try {
    connection = await pool.getConnection();
    console.log('Connected.');
    return connection;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    if (connection) connection.release(); 
  }
}

export default connectToDatabase;
```

حال میتوانید با استفاده از کد زیر در مسیر /app/pages/index.js اتصال دیتابیس به برنامه را بررسی نمایید:


```bash
import connectToDatabase from './api/db.js';
export default function Home({ isConnectedToDB }) {
  return (
    <div>
      <h1>DB connection</h1>
      <p>Connected to MariaDB: {isConnectedToDB ? 'Yes' : 'No'}</p>
    </div>
  );
}

export async function getStaticProps() {
  let isConnectedToDB = false;

  try {
    const connection = await connectToDatabase();
    isConnectedToDB = true;
  } catch (error) {
    isConnectedToDB = false;
  }

  return {
    props: {
      isConnectedToDB,
    },
  };
}
```


## اتصال به دیتابیس PostgreSQL

برای اتصال دیتابیس PostgreSQL به سرویس Nextjs، ابتدا میبایست پکیج pg را نصب نمایید:

```bash
npm install pg
```

سپس فایل db.js را در مسیر /app/pages/api/ مانند نمونه زیر تکمیل نمایید:

```bash
import { Pool } from 'pg';

const pool = new Pool({
  host: 'HOST',
  port: PORT,
  user: 'USER',
  password: 'PASS',
  database: 'DB-NAME',
});

async function connectToDatabase() {
  let client;

  try {
    client = await pool.connect();
    console.log('Connected.');
    return client;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    if (client) client.release();
  }
}

export default connectToDatabase;
```

حال میتوانید با استفاده از کد زیر در مسیر /app/pages/index.js اتصال دیتابیس به برنامه را بررسی نمایید:


```bash
mport connectToDatabase from './api/db.js';

export default function Home({ isConnectedToDB }) {
  return (
    <div>
      <h1>DB connection</h1>
      <p>Connected to PostgreSQL: {isConnectedToDB ? 'Yes' : 'No'}</p>
    </div>
  );
}

export async function getStaticProps() {
  let isConnectedToDB = false;

  try {
    const connection = await connectToDatabase();
    isConnectedToDB = true;
  } catch (error) {
    isConnectedToDB = false;
  }

  return {
    props: {
      isConnectedToDB,
    },
  };
}
```

## اتصال به دیتابیس SQL Server

برای اتصال دیتابیس SQL Server به سرویس Nextjs، ابتدا میبایست پکیج mssql را نصب نمایید:

```bash
npm install mssql
```

سپس فایل db.js را در مسیر /app/pages/api/ مانند نمونه زیر تکمیل نمایید:

```bash
import { ConnectionPool } from 'mssql';

const config = {
  user: 'sa',
  password: 'PASS',
  server: 'HOST',
  database: 'DB-NAME',
  port: PORT,
  options: {
    encrypt: false,
    trustServerCertificate: false,
  },
};

const pool = new ConnectionPool(config);

async function connectToDatabase() {
  try {
    await pool.connect();
    console.log('Connected.');
    return pool;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export default connectToDatabase;
```

حال میتوانید با استفاده از کد زیر در مسیر /app/pages/index.js اتصال دیتابیس به برنامه را بررسی نمایید:


```bash
import connectToDatabase from './api/db.js';

export default function Home({ isConnectedToDB }) {
  return (
    <div>
      <h1>DB connection</h1>
      <p>Connected to SQL Server: {isConnectedToDB ? 'Yes' : 'No'}</p>
    </div>
  );
}

export async function getStaticProps() {
  let isConnectedToDB = false;

  try {
    const connection = await connectToDatabase();
    isConnectedToDB = true;
  } catch (error) {
    isConnectedToDB = false;
  }

  return {
    props: {
      isConnectedToDB,
    },
  };
}
```

## اتصال به دیتابیس MongoDB

برای اتصال دیتابیس MongoDB به سرویس Nextjs، ابتدا میبایست پکیج mongodb را نصب نمایید:

```bash
npm install mongodb
```

سپس فایل db.js را در مسیر /app/pages/api/ مانند نمونه زیر تکمیل نمایید:

```bash
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI environment variable is not set');
}

let client;

async function connectToDatabase() {
  try {
    if (!client) {
      client = new MongoClient(MONGODB_URI, {});
      await client.connect();
      console.log('Connected to MongoDB');
    }
    return client.db();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

async function closeDatabaseConnection() {
  if (client) {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

export { connectToDatabase, closeDatabaseConnection };
```
حال میبایست در قسمت تنظیمات سرویس، بخش متغیر های محیطی پلتفرم، connection string دیتابیس mongodb خود را معرفی نمایید:

```bash
# name : value

MONGODB_URI : mongodb://USERNASME:PASSWORD@MONGO_SERVER_URL:MONGO_PORT/?authSource=admin
```

حال میتوانید با استفاده از کد زیر در مسیر /app/pages/index.js اتصال دیتابیس به برنامه را بررسی نمایید:


```bash
import connectToDatabase from './api/db.js';

export default function Home({ isConnectedToDB }) {
  return (
    <div>
      <h1>DB connection</h1>
      <p>Connected to MongoDB: {isConnectedToDB ? 'Yes' : 'No'}</p>
    </div>
  );
}

export async function getStaticProps() {
  let isConnectedToDB = false;

  try {
    const db = await connectToDatabase();
    isConnectedToDB = db ? true : false;
  } catch (error) {
    isConnectedToDB = false;
  }

  return {
    props: {
      isConnectedToDB,
    },
  };
}
```

## اتصال به دیتابیس Redis

برای اتصال دیتابیس Redis به سرویس Nextjs، ابتدا میبایست پکیج ioredis را نصب نمایید:

```bash
npm install ioredis
```

سپس فایل db.js را در مسیر /app/pages/api/ مانند نمونه زیر تکمیل نمایید:

```bash
import Redis from 'ioredis';

const redisConfig = {
  host: 'HOST',
  port: PORT, 
  password: 'PASS',
};

const redisClient = new Redis(redisConfig);

async function connectToDatabase() {
  try {
    if (!redisClient.status || redisClient.status === 'closed') {
        await redisClient.connect();
        console.log('Connected.');
      } else {
        console.log('Already connected to Redis!');
      }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export default connectToDatabase;
```

حال میتوانید با استفاده از کد زیر در مسیر /app/pages/index.js اتصال دیتابیس به برنامه را بررسی نمایید:


```bash
import connectToDatabase from './api/db';

export default function Home({ isConnectedToDB }) {
  return (
    <div>
      <h1>DB connection</h1>
      <p>Connected to Redis: {isConnectedToDB ? 'Yes' : 'No'}</p>
    </div>
  );
}

export async function getStaticProps() {
  let isConnectedToDB = false;

  try {
    const connection = await connectToDatabase();
    isConnectedToDB = true;
  } catch (error) {
    isConnectedToDB = false;
  }

  return {
    props: {
      isConnectedToDB,
    },
  };
}
```

---
<a href="https://hub.chabokan.net/fa/services/create/nodejs" ><img src="https://s1.chabokan.net/docs/images/nodejs-banner.png" /></a>