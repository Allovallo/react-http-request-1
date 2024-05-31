import React, { Component } from 'react';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      console.log('Змінилося ім`я покемона!');

      this.setState({ loading: true });

      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(response => response.json())
        .then(pokemon => this.setState({ pokemon }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { pokemon, loading, error } = this.state;
    const { pokemonName } = this.props;

    return (
      <div>
        {error && <h1>Помилка! Поенмона з ім'ям {pokemonName} немає!</h1>}
        {loading && <div>Завантажуємо...</div>}
        {!pokemonName && <div>Введіть ім`я покемона!</div>}
        {pokemon && (
          <div>
            <p>{pokemon.name}</p>
            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
              width="240"
              alt="pokemon-name"
            />
          </div>
        )}
      </div>
    );
  }
}
