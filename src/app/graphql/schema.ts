import { gql } from "../../../node_modules/apollo-server-micro/dist/index";


export const typeDefs = gql`
    type Quote {
        id: ID!
        tag: String!
        author: String!
        content: String!
    }

    type Query {
        quotes: [Quote!]!
        quoteById(id: ID): Quote!
    }
`