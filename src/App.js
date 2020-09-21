import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
import "./index.css";


const Header = () => {
  return (
    <div>
      <h1> To-Do-App </h1>
      <p>The app provides a simple functionality if adding and removing tasks.</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      <h3>Karan Mittal</h3>
      <p>Data Scientist | Full Stack Web Developer | Writer | Technology Enthusiast</p>
    </div>
  )
}

class App extends Component {

  state = {
    characters: [
      {
        name: 'Task Title',
        job: 'Task Description',
      },
    ],
  };

  removeCharachter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    })
  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  render() {
    const { characters } = this.state

    return (
      <div className="container">
        <Header />
        <hr />
        <Table characterData={characters} removeCharachter={this.removeCharachter} />
        <hr/>
        <Form handleSubmit={this.handleSubmit} />
        <hr/>
        <Footer />
      </div>
    )
  }
}

export default App 