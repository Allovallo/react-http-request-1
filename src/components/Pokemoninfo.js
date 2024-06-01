import React, { Component } from 'react';
import PockemonErrorView from './PokemonErrorView';
import PockemonDataView from './PokemonDataView';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });

      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`Помилка! Покемону з ім'ям ${nextName} немає!`));
        })
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;

    if (status === 'idle') {
      return <div>Введіть ім`я покемона!</div>;
    }

    if (status === 'pending') {
      return <div>Завантажуємо...</div>;
    }

    if (status === 'rejected') {
      return <PockemonErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return <PockemonDataView pokemon={pokemon} />;
    }
  }
}
