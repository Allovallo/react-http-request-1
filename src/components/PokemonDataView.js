export default function PockemonDataView({ pokemon: { sprites, name, stats } }) {
  return (
    <div>
      <img src={sprites.other['official-artwork'].front_default} width="240" alt="pokemon-name" />

      <h2>{name}</h2>

      <ul>
        {stats.map(entry => (
          <li key={entry.stat.name}>
            {entry.stat.name}: {entry.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
