const { ApolloServer } = require('apollo-server');
const { schema } = require('./schema');
const { createContext } = require('./context');

new ApolloServer({
  schema,
  context: createContext
}).listen(
  { port: 4000 },
  () => console.log('Server ready at: http://localhost:4000')
);
