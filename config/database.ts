export default ({ env }) => {
  const dbUrl = new URL(env("MYSQL_PUBLIC_URL"));

  return {
    connection: {
      client: "mysql",
      connection: {
        host: dbUrl.hostname,
        port: dbUrl.port,
        database: dbUrl.pathname.replace("/", ""),
        user: dbUrl.username,
        password: dbUrl.password,
        ssl: { rejectUnauthorized: false },
      },
      pool: { min: 2, max: 10 },
      acquireConnectionTimeout: 60000,
    },
  };
};