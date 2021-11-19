import { ApolloClient, NormalizedCacheObject  } from '@apollo/client'
import { InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache();

export const GraphQLClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    uri: 'https://api.spacex.land/graphql/'
})
