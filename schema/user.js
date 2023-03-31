const schema = `
    type User {
        id: ID
        username: String
        age: Int
    }
    input UserInput {
        id: ID
        username: String!
        age: Int!
    }
    input UserUpdateInput {
        username: String!
        age: Int!
    }
    type Query {
        getAllUsers: [User]
        getUser(id: ID): User
    }
    type Mutation {
        createUser(input: UserInput): User
        updateUser(input: UserUpdateInput, id: ID): User
        deleteUser(id: ID): User
    }
`;

export default schema;
