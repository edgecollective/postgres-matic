const { Pool, Client } = require('pg')
        const client = new Client({
            user: 'postgres',
            host: 'localhost',
            password: 'i8buddha',
            port: 5432
        })

var dbname = "bell5";

var measuresTableSQL =
      `CREATE TABLE measurements(
    id SERIAL PRIMARY KEY,
    sensor_id INT,
    celcius ,,
    humidity ,,
    created TIMESTAMP DEFAULT NOW(),
    CONSTRAINT sensor
      FOREIGN KEY(sensor_id)
        REFERENCES sensors(sensor_id)
  );`

async function asyncCall() {
await client.connect();
await client.query(`DROP DATABASE IF EXISTS ${dbname};`);
await client.query(`CREATE DATABASE ${dbname};`);
await client.query(measuresTableSQL);
await client.end();
}

asyncCall();
