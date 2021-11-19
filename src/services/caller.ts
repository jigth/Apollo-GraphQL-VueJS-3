/**
 * Calls graphql Endpoints and return results of executed mutations and queries
 *
 */

import { gql } from '@apollo/client'
import { GraphQLClient } from '../utils/client'
import { v4 as uuid4 } from 'uuid'


export async function doSimpleQuery() {
    let result;

    const query = gql`
        query testQuery {
            capsules(limit: 10) {
                id
                landings
                original_launch
            }
        }
    `;


    GraphQLClient .query({ query }).then((res) => {
        console.log("Executing Query 'testQuery'")
        console.error({res})
        result = res
    });

    return result
}

export async function doSimpleMutation() {
    let result;

    const mutation = gql`
        mutation userInsert ($id: uuid) {
            insert_users(objects: {
                id: $id
                name: "John Smith"
            }) {
                returning {
                    id
                    name
                }
            }
        }
    `;

    GraphQLClient .mutate({
        mutation,
        variables: {
            id: uuid4()
        }
    }).then((res) => {
        console.log("Executing Mutation 'insert_users'")
        console.log({res})
        result = res
    }).catch((err) => {
        console.error({err})
    })

    return result
}
