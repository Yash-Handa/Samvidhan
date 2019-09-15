// eslint-disable-next-line import/order
const config = require('../bin/config');
const debug = require('debug')('Samvidhan:Server');
const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');

const COI = require('./COI.json');
const Query = require('./query');
const { SubClause, SubClauseFeed } = require('./SubClauses/resolver');
const { Articles, Article } = require('./Articles/resolver');

const server = new ApolloServer({
  typeDefs: importSchema('./src/schema.graphql'),
  resolvers: {
    Query,
    SubClause,
    SubClauseFeed,
    Articles,
    Article,
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

server.listen({
  port: 1998,
  // Uncomment the below line to make the project available to local network
  // host: '192.168.43.171', // ip for SKH
}).then(({ url }) => {
  debug(`The server is running at: ${url}`);
});
