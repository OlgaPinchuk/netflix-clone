export default function Select({ label, onChange, options, state }) {
  // Properties
  const [form, setForm] = state;

  // Methods
  function onChange(e) {
    const field = { [label]: e.target.value };
    setForm({ ...form, ...field });
  }

  return (
    <div className="select-wrap">
      <label htmlFor="select">{label}</label>
      <select id="select" onChange={onChange}>
        <option defaultValue>Choose one</option>
        {options.map((item) => (
          <option key={item.id} label={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
