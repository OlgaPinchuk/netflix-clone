// NPM packages
import { useRef } from "react";

export default function InputField({ onChange, options, state }) {
  const { key, label, placeholder, type, required, min } = options;

  // Properties
  const inputReference = useRef(null);

  return (
    <label>
      <input
        onChange={() => onChange(key, inputReference.current.value)}
        placeholder={placeholder}
        ref={inputReference}
        name={key}
        type={type}
        value={state}
        required={required}
        min={min}
      />
      <span className={`${state && "active"}`}> {label}</span>
    </label>
  );
}
