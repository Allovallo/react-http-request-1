import React, { Component } from 'react';
import PockemonErrorView from './PokemonErrorView';
import PockemonDataView from './PokemonDataView';
import PockemonPendingView from './PokemonPendingView';
import pokemonAPI from '../services/pokemon-api';

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

      pokemonAPI
        .fetchPokemon(nextName)
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === 'idle') {
      return <div>Введіть ім`я покемона!</div>;
    }

    if (status === 'pending') {
      return <PockemonPendingView pokemonName={pokemonName} />;
    }

    if (status === 'rejected') {
      return <PockemonErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return <PockemonDataView pokemon={pokemon} />;
    }
  }
}
