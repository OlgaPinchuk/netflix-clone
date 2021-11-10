export default function Textarea({ fieldName, legend, state }) {
  const [form, setForm] = state;

  return (
    <fieldset>
      <legend>
        <b>{legend}</b>
      </legend>
      <textarea
        onChange={(e) =>
          setForm({ ...form, ...{ [fieldName]: e.target.value } })
        }
      >
        {form[fieldName]}
      </textarea>
    </fieldset>
  );
}
