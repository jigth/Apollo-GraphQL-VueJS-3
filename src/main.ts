import { createApp } from 'vue'
import App from './App.vue'


// Apollo Client
import { ApolloClient, InMemoryCache } from '@apollo/client/core'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: 'https://api.spacex.land/graphql/',
})


// Apollo Provider
import { createApolloProvider } from '@vue/apollo-option'

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})


// Add the components (vue apollo)
import VueApolloComponents from '@vue/apollo-components'



const app = createApp(App)

app.use(apolloProvider)
app.use(VueApolloComponents)

app.mount('#app')
