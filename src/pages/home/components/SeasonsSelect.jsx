export default function SeasonsSelect({ seasons, onChange }) {
  // Properties
  const sortedSeasons = seasons.sort((a, b) => a.seasonNumber - b.seasonNumber);
  
  return (
    <select
      id="select"
      className="episodes-dropdown"
      onChange={(e) => onChange(parseInt(e.target.value))}
    >
      {sortedSeasons.map((item) => (
        <option key={item.seasonNumber} value={item.seasonNumber}>
          Season {item.seasonNumber}
        </option>
      ))}
    </select>
  );
}
