export default function Checkbox({ label, checked, onChange }) {
  return (
    <label className="custom-checkbox">
      <input onChange={onChange} type="checkbox" checked={checked} />
      <span className={`icon-checkmark ${checked ? "checked" : ""}`}>{label}</span>
    </label>
  );
}
