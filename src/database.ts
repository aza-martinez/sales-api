import { createPool } from "mysql2/promise";

export async function connect() {
  const connection = await createPool({
    host: process.env.HOST_DATABASE,
    user:  process.env.USER_DATABASE,
    password:  process.env.PASSWORD_DATABASE,
    database: process.env.NAME_DATABASE,
    connectionLimit: 10,
  });

  return connection;
}
