const { gql, ApolloServer } = require("apollo-server");
const PORT = process.env.PORT || 4001;
const axios = require("axios");

const mainUrl = "http://localhost:4000";

const typeDefs = gql`
    type Article {
    _id: ID
    title: String
    content: String
    images: String
    author: String
    } 

    type Comment {
    _id: ID
    artcleId: String
    name: String
    content: String
    }

    type Response {
        message: [String]
    }

    type Query {
        articles: [Article]
        articleById(_id: ID): Article
        comments: [Comment]
    }

    type Mutation{
        createArticle(title: String, content: String, images: String, author: String): Response
    }



`

const resolvers = {
    Query: {
        articles: async () => {
            try {
                const response = await axios.get(`${mainUrl}/articles`);
                return response.data;
            } catch (error) {
                return error
            }
        },

        articleById: async (_, args) => {
            try {
                const response = await axios.get(`${mainUrl}/articles/${args._id}`);
                return response.data;
            } catch (error) {
                return error
            }
        },
    },

    Mutation: {
        createArticle: async (_, args) => {
            console.log(args);
            try {
                const { data } = await axios.post(`${mainUrl}/articles`, args);
                console.log(data);
                return { message: [data.message] };
            } catch (error) {
                return error
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true,
});

server.listen(PORT).then(({ url }) => {
    console.log(`running => ${url}`);
});
