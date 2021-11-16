export default function Textarea({ fieldName, legend, state }) {
  const [form, setForm] = state;

  return (
    <fieldset>
      <legend>
        <b>{legend}</b>
      </legend>
      <textarea
        defaultValue={form[fieldName]}
        onChange={(e) =>
          setForm({ ...form, ...{ [fieldName]: e.target.value } })
        }
      ></textarea>
    </fieldset>
  );
}
