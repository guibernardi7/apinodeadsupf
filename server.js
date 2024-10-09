import { fastify } from 'fastify'
import { DatabasePostgreSQL } from './database_postgres.js'

const server = fastify()
const database = new DatabasePostgreSQL()

server.get('/alunos', async() => {
    const alunos = database.list()
    return alunos
})

server.post('/alunos', async (request, reply) => {
    await database.create({
        name: request.body.name,
        email: request.body.email,
        age: request.body.age
    })
    return reply.status(201).send()
})

server.put('/alunos/:id', async(request, reply) => {
    const alunoId = request.params.id
    await database.update(alunoId, {
        name: request.body.name,
        email: request.body.email,
        age: request.body.age
    })
    return reply.status(204).send()
})

server.delete('/alunos/:id', async(request, reply) => {
    const alunoId = request.params.id
    await database.delete(alunoId)
    return reply.status(204).send()
})

server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333
})