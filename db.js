import 'dotenv/config'
import postgres from "postgres";

const { DATABASE, DATABASE_PORT, HOST, USER, PASSWORD } = process.env

const sql = postgres({
    database: DATABASE,
    port: DATABASE_PORT,
    host: HOST,
    user: USER,
    password: PASSWORD

})

export default sql;