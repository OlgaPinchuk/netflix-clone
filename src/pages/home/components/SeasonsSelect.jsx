export default function SeasonsSelect({ data, onChange }) {

  return (
     <select id="select" className="episodes-dropdown" onChange={(e) => onChange(e.target.value)}>
      {Object.keys(data).map((item) => (
        <option key={item} value={item}>
          Season {item}
        </option>
      ))}
    </select>
  );
}
