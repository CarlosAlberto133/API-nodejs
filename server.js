import { fastify } from "fastify";
//import { DatabaseMemory } from "./database-memory.js";
import { DatabasePostgres } from "./database-postgres.js";

const server = fastify()

//const database = new DatabaseMemory()
const database = new DatabasePostgres()

server.post('/aulas', async (request, reply) => {
    const { title, description, duration } = request.body

    await database.create({
        title,
        description,
        duration
    })

    return reply.status(201).send()
})

server.get('/aulas', async (request) => {
    const search = request.query.search

    const aulas = await database.list(search)

    return aulas
})

server.put('/aulas/:id', async (request, reply) => {
    const aulaId = request.params.id
    const { title, description, duration } = request.body

    await database.update(aulaId, {
        title,
        description,
        duration
    })

    return reply.status(204).send()
})

server.delete('/aulas/:id', async (request, reply) => {
    const aulaId = request.params.id

    await database.delete(aulaId)

    return reply.status(204).send()
})

server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333
})