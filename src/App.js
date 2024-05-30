import { Component } from 'react';

export default class App extends Component {
  state = {
    pokemon: null,
  };

  componentDidMount() {
    fetch('http://pokeapi.co/api/v2/pokemon/ditto')
      .then(response => response.json())
      .then(pokemon => this.setState({ pokemon }));
  }

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        {this.state.pokemon && <div> Тут буде покемон після fitch'у та коли в state запишемо</div>}
      </div>
    );
  }
}
