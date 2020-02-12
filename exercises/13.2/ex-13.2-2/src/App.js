import React from 'react';
import './App.css';

const API_URL = "https://dog.ceo/api/breeds/image/random";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showDoguitchos: false
    };
  }

  clickDoguitcho = () => {
    let showDoguitchosCurrent = !this.state.showDoguitchos;
    this.setState({
      showDoguitchos: showDoguitchosCurrent
    });
  }

  render() {
    return (
      <div className="App">
      <button onClick={this.clickDoguitcho}>{this.state.showDoguitchos? "Fechar Doguitchos" : "Abrir Doguitchos"}</button>
        {this.state.showDoguitchos ? <Doguitchos/ > : <p>Nada sem Doguitchos por enquantos!</p>}
      </div>
    );
  }
}

class Doguitchos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      doguitchoName: "",
      doguitchoArray: []
    };
  }

  doguitchosLoad = () => {
    let doguitchoArray = this.state.doguitchoArray;
    console.log(doguitchoArray)
    fetch(API_URL, { headers: { Accept: "application/json" }})
    .then(response => response.json())
    .then(data => this.addItemToDoguitchosArray(data.message))
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState.doguitchoName);
    return !nextState.doguitchoName.includes("terrier");
  }

  addItemToDoguitchosArray = (message) => {
    this.setState(({ doguitchoArray, doguitchoName }) => {
      const newDoguitchoArray = doguitchoArray.length >= 10 ?  doguitchoArray.slice(1) : doguitchoArray;
      const newDoguitcho = { name: doguitchoName, url: message};

      return ({ doguitchoArray: [...newDoguitchoArray, newDoguitcho] })
    })
  }

  changeHandler = event => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  componentWillUnmount() {
    console.log("Componente Will Unmount");
    localStorage.setItem("doguitchosName", JSON.stringify(this.state.doguitchoName));
    localStorage.setItem("doguitchosArray", JSON.stringify(this.state.doguitchoArray));
  }

  componentDidMount() {
    this.setState({
      doguitchoName:  JSON.parse(localStorage.getItem("doguitchosName")) || "",
      doguitchoArray: JSON.parse(localStorage.getItem("doguitchosArray")) || []
    })
  }

  render() {
    console.log("componente rendered", this.state);
    return (
      <div className="container">
        <div className="container">
        Nome do Doguitchos
        <input
          name="doguitchoName"
          type="text"
          value={this.state.doguitchoName}
          onChange={this.changeHandler}
          maxLength="40"
        />
        </div>
        <div className="container">
          {this.state.doguitchoName !== "" ?
            <button onClick={this.doguitchosLoad}>Buscar doguitcho</button> :
            <p>Digite um nome para buscar o Doguitcho</p>
          }
        </div>
        <div className="container">
          <ul>
            {this.state.doguitchoArray.map((object) => {
              return <li key={object.url}>{object.name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;