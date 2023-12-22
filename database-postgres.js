import { randomUUID } from "node:crypto"
import sql from "./db.js"

export class DatabasePostgres {
    #aulas = new Map()

    async list(search) {
        let aulas

        if(search) {
            aulas = await sql`select * from aulas where title ilike ${'%' + search + '%'}`
        } else {
            aulas = await sql`select * from aulas`
        }

        return aulas
    }

    async create(aula) {
        const aulaId = randomUUID()
        const { title, description, duration } = aula

        await sql`insert into aulas (id, title, description, duration) VALUES (${aulaId}, ${title}, ${description}, ${duration})`
    }

    async update(id, aula) {
        const { title, description, duration } = aula  

        await sql`update aulas set title = ${title}, description = ${description}, duration = ${duration} WHERE id = ${id}`
    }

    async delete(id) {
        await sql`delete from aulas where id = ${id}`
    }
}