import Fastify from 'fastify'
import cors from "@fastify/cors"
import { appRoutes } from './lib/routes'

const app = Fastify()

/*
GET: Buscar informação
POST: Fazer uma publicação de uma informação
PUT: Atualizar um recurso por completo
PATCH: Atualizar uma informação específica de um recurso
DELETE: Deletar

*/

app.register(cors)
app.register(appRoutes)


app.listen({
    port:3333,
}).then(() => {
    console.log('HTTP Server running')
})

