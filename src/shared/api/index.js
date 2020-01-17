import { Client } from '@8base/api-client';

// const httpLink = createHttpLink({ uri: process.env.REACT_APP_WORKSPACE_ENDPOINT });

//  const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache()
// })

const client = new Client(process.env.REACT_APP_WORKSPACE_ENDPOINT);

export default client;
