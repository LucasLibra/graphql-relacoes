import {
    GraphQLServer,
    PubSub
} from 'graphql-yoga'

import db from './db'
import Query from './resolvers/query'
import Mutation from './resolvers/mutation'
import Livro from './resolvers/Livro'
import Pessoa from './resolvers/Pessoa'
import Comentario from './resolvers/Comentario'
import Subscription from './resolvers/subscription'

const pubSub = new PubSub()

const resolvers = {
    Query,
    Mutation,
    Livro,
    Pessoa,
    Comentario,
    Subscription
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql', 
    resolvers,
    context: {
        db,
        pubSub
    }
})

server.start({
    port: 4200
}, () => console.log ('Servidor em execução'))