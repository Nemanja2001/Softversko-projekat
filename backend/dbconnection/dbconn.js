const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "KudaDalje_db",
<<<<<<< HEAD
  password: "220701",
=======
  password: "danilo",
>>>>>>> 6a985c1929cbbdc1f3e0062a3d539d87af4ee5c7
  port: "5432",
});

module.exports = pool;
