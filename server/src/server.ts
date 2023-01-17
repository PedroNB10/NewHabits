import Fastify from 'fastify'
import cors from "@fastify/cors"
import {PrismaClient} from '@prisma/client'


const app = Fastify()
const prisma = new PrismaClient()
/*
GET: Buscar informação
POST: Fazer uma publicação de uma informação
PUT: Atualizar um recurso por completo
PATCH: Atualizar uma informação específica de um recurso
DELETE: Deletar

*/

app.register(cors)

app.get('/', async ()=> {
   const habits = await prisma.habit.findMany()
   
    return habits
})

app.listen({
    port:3333,
}).then(() => {
    console.log('HTTP Server running')
})

