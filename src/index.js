// eslint-disable-next-line import/order
const config = require('../bin/config');
const debug = require('debug')('Samvidhan:Server');
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    # this is a comment
    """This is doctype/ detail for hello"""
    hello: String
    bye: String
    author: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello from the Author',
    bye: () => 'Bye Bye from the Author',
    author: () => 'Yash Handa',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: true,
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
