const { gql, ApolloServer } = require("apollo-server");
const typeDefs = require("./typeDefs");
const PORT = process.env.PORT || 4001;
const axios = require("axios");

const mainUrl = "http://localhost:4000";

const typeDefs = gql`