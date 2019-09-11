// eslint-disable-next-line import/order
const config = require('../bin/config');
const debug = require('debug')('Samvidhan:Server');
const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');

const COI = require('./COI.json');
const Query = require('./query');

const server = new ApolloServer({
  typeDefs: importSchema('./src/schema.graphql'),
  resolvers: {
    Query,
  },
  context: {
    COI,
  },
  tracing: true,
  introspection: true,
  playground: true,
  persistedQueries: {
    // better implementation of cache (redis)
    cache: true,
  },
  engine: {
    apiKey: config.apollo.engineAPIKey,
    // uncomment the below line to log status report from each request send to apollo graph engine
    // debugPrintReports: true,
    schemaTag: process.env.NODE_ENV,
  },
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  debug(`The server is running at: ${url}`);
});
