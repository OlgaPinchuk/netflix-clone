// Project files
import Placeholder from "assets/images/image-placeholder.png";
import { uploadImage } from "scripts/upload-image";

export default function InputImage({ label, id, state, filename }) {
  // Properties
  const [form, setForm] = state;

  // Properties
  const Image = form[id] === "" ? Placeholder : form[id];

  // Methods
  async function onEvent(event, file) {
    const imageURL = await uploadImage(event, file);
    setForm({ ...form, ...{ [id]: imageURL } });
  }

  return (
    <fieldset className="input-image">
      <legend>
        <b>{label}:</b>
      </legend>
      <label className="custom-file-chooser">
        <b>Upload image: </b>
        <input onChange={(event) => onEvent(event, filename)} type="file" />
        <img src={Image} alt="User generated content" />
      </label>
    </fieldset>
  );
}
