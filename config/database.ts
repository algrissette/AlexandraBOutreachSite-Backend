import path from 'path';

export default ({ env }) => ({
  connection: {
    client: 'mysql', // force MySQL
    connection: {
      host: env('MYSQLHOST', 'mysql.railway.internal'),
      port: env.int('MYSQLPORT', 3306),
      database: env('MYSQLDATABASE', 'railway'),
      user: env('MYSQLUSER', 'root'),
      password: env('MYSQLPASSWORD', 'YwYfVDRQxYbyvJXTRomjtMefslApGSUm'),
      ssl: { rejectUnauthorized: false }, // required for Railway internal connection
    },
    pool: { min: 2, max: 10 },
    acquireConnectionTimeout: 60000,
  },
});