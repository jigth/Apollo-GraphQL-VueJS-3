<template>
    <h1>Apollo Vue Graphql Mutation</h1>
    <p>See the console to watch the results</p>
    <p>Also select a valid id from a user of the API <a href="https://api.spacex.land/graphql/">https://api.spacex.land/graphql/</a> (and replace that id in the mutation code <strong>as the value of the "_eq" attribute</strong>) to delete that user</p>
</template>

<script lang="ts">
import gql from 'graphql-tag'

// Mutation using the Options API
export default {
    data() {
        return { }
    },

    apollo: {
        // Vue-Apollo options here
        users: gql`
        query {
            users {
                id
                name
            }
        }
        `,
    },

    async mounted() {
        // Call the query and print it
        const query = this.$apollo.queries.users
        console.log(query)

        // Call the mutation method (which log to the console itself)
        await this.mutate()
    },

    methods: {
        mutate() {
            const mutation = gql`
                    mutation {
                            delete_users(where: { 
                                id: {
                                    _eq: "7d7b0749-f9d0-4c6c-8999-b5bffc493238"
                                }
                            }) {
                                returning {
                                    id
                                    name
                                }
                            }
                    }
            `
            
            this.$apollo.mutate({
                mutation,
            }).then((data) => {
                // Result
                console.log(data)
            }).catch(error => {
                console.error(error)
            })

        }
    }
}
</script>
