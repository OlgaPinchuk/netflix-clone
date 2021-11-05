// NPM packages
import { useRef } from "react";

export default function InputField({ onChange, options, state, isInvalid }) {
  const { key, label, placeholder, type, inputError, required } = options;

  // Properties
  const inputReference = useRef(null);

  return (
    <label>
      {/* {label}
      <br /> */}
      <input
        onChange={() => onChange(key, inputReference.current.value)}
        placeholder={placeholder}
        ref={inputReference}
        name={key}
        type={type}
        value={state}
        required={required}
      />
      <span className={`${state && "active"}`}> {label}</span>
      <br />
      {isInvalid && <small className="input-error">{inputError}</small>}
    </label>
  );
}
