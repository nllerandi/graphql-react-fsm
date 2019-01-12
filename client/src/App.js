import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ApolloBoost, { gql } from 'apollo-boost'

import Nav from "./components/nav"

class App extends Component {
  componentDidMount() {
    const client = new ApolloBoost({
      uri: 'http://localhost:4000'
    })

    const getQuestions = gql`
      query {
        questions {
        id
        title
        answers
        tags
        asker {
          name
        }
      }
    }
    `
    const createState = async () => {
      let topQuestions = await client.query({
        query: getQuestions
      })
      this.setState({
        topQuestions: topQuestions.data.questions
      })
    }
    createState()
  }

  render() {
    if (this.state === null) return null
    return (
      <div className="App">
        <Nav/>
        <h1>Fullstack Musician</h1>
        <ul>
        {this.state.topQuestions.map(question => {
          return (
            <li key={question.id}>
              {question.title}
            </li>
          )
        })}
        </ul>
      </div>
    );
  }
}

export default App;
