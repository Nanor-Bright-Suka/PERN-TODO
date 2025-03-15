import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
user: "postgres",
host: "localhost",
password: "b",
database: "perntodo",
port: 5432
});

export default pool;