import { Component } from "react";

// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Medhansh",
          id: "1234567",
        },
        {
          name: "Yash",
          id: "123456",
        },
        {
          name: "Hardik",
          id: "12345",
        },
        {
          name: "Chotu",
          id: "1234",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
