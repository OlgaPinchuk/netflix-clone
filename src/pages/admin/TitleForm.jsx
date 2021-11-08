// NPM packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

// Project files
import Select from "components/Select";
import InputFields from "components/InputFields";
import InputImage from "components/InputImage";
import fields from "data/admin/fields-create-title.json";
import titleTypes from "./titleTypes";
import { createDocument, updateDocument } from "scripts/fireStore";
import { useTitle } from "state/TitleProvider";

export default function TitleForm({ title, id }) {
  // Global state
  const history = useHistory();
  const { titleDispatch } = useTitle();

  // Local state
  const [form, setForm] = useState({
    id: title.id,
    type: title.type,
    name: title.name,
    thumbImage: title.thumbUrl,
    mainImage: title.mainImageUrl,
    description: title.description,
  });
  const [errorMessage, setErrorMessage] = useState("");

  // Constants
  const slug = form.name.toLowerCase().split(" ").join("-");
  //const pageHeader = title.name === "" ? "Create title" : "Edit title";

  // Methods
  async function onPublish(e) {
    e.preventDefault();
    const titleId = titleTypes.find((item) => item.name === form.type).id;
    const path = `titles/${titleId}/items`;
    const editedTitle = {
      type: form.type,
      name: form.name,
      thumbUrl: form.thumbImage,
      mainImageUrl: form.mainImage,
      description: form.description,
    };

    if (id !== "") await updateDocument(path, id, editedTitle);
    else await createDocument(path, editedTitle);

    titleDispatch({
      type: "UPDATE_TITLE",
      payload: { id: id, data: editedTitle },
    });
    history.goBack();
  }

  return (
    <form className="title-form">
      <fieldset>
        <legend>
          <b>General info</b>
        </legend>
        <Select label="type" options={titleTypes} state={[form, setForm]} />
        <InputFields
          fields={fields}
          state={[form, setForm]}
          errors={errorMessage}
        />
      </fieldset>
      <InputImage
        label="Thumb"
        id="thumbImage"
        state={[form, setForm]}
        filename={`${form.type}/thumbImage/${slug}`}
      />
      <InputImage
        label="Main image"
        id="mainImage"
        filename={`${form.type}/mainImage/${slug}`}
        state={[form, setForm]}
      />
      <fieldset>
        <legend>
          <b>Title Description</b>
        </legend>
        <textarea
          id="description"
          onChange={(e) =>
            setForm({ ...form, ...{ description: e.target.value } })
          }
        ></textarea>
      </fieldset>
      <button type="submit" className="button save-button" onClick={onPublish}>
        Publish title
      </button>
    </form>
  );
}
