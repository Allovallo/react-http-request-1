import { ImSpinner } from 'react-icons/im';
import PockemonDataView from './PokemonDataView';
import pendingImage from './pending.png';

const styles = {
  spinner: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
};

export default function PockemonPendingView({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': { front_default: pendingImage },
      },
    },
    stats: [],
  };

  return (
    <div role="alert">
      <div style={styles.spinner}>
        <ImSpinner size="32" className="icon-spin" />
        Завантажуємо...
      </div>
      <PockemonDataView pokemon={pokemon} />
    </div>
  );
}
