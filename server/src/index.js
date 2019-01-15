import { GraphQLServer } from 'graphql-yoga'
import { demoQuestions, demoUsers } from "../demoData"
import { ENGINE_METHOD_NONE } from 'constants';

const typeDefs = `
  type Query {
      questions(asker: String, query: String): [Question!]
      users(userId: String): [User!]
  }

  type Question {
      id: ID!
      title: String!
      asker: User!
      date: String!
      answers: Int!
      tags: [String!]
  }

  type User {
      userId: String!
      name: String!
      questions: [Question!]
  }
`

const resolvers = {
    Query: {
        questions(parent, args, ctx, info) {
            if (!args.asker && !args.query) {
                return demoQuestions
            } 
            
            if (!args.asker && args.query) {
                return demoQuestions.filter((demoQuestion) => {
                    return demoQuestion.title.toLowerCase().includes(args.query.toLowerCase())
                })
            } 
            
            if (args.asker && !args.query) {
                return demoQuestions.filter((demoQuestion) => {
                    return demoQuestion.asker.includes(args.asker)
                })
            } 

            if (args.asker && args.query) {
                return demoQuestions.filter((demoQuestion) => {
                    if (demoQuestion.asker === args.asker && demoQuestion.title.toLowerCase().includes(args.query.toLowerCase())) {
                        return demoQuestion
                    }
                })
            }
        },
        users(parent, args, ctx, info) {
            if (!args.userId) {
                return demoUsers
            }

            return demoUsers.filter((demoUser) => {
                return demoUser.userId.includes(args.userId)
            })
        }
    },
    Question: {
        asker(parent, args, ctx, info) {
            return demoUsers.find((user) => {
                return user.userId === parent.asker
            })
        }
    },
    User: {
        questions(parent, args, ctx, info) {
            return demoQuestions.filter((question) => {
                return question.asker === parent.userId
            })
        }
    }
}


const server = new GraphQLServer({
    typeDefs,
    resolvers
})
server.start(() => console.log('Server is running on localhost:4000'))