
// Project files
import InputField from "components/InputField";

export default function InputFields({ fields, legend, state }) {
  const [form, setForm] = state;

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  // Components
  const InputFields = fields.map((item) => (
    <InputField
      key={item.key}
      options={item}
      state={form[item.key]}
      onChange={onChange}
    />
  ));

  return (
    <fieldset>
      <legend>
        <b>{legend}</b>
      </legend>
      {InputFields}
    </fieldset>
  );
}
