// NPM packages
import { useState } from "react";

// Project files
import InputFields from "components/InputFields";
import InputImage from "components/InputImage";
import Textarea from "components/Textarea";
import fields from "data/admin/fields-episode.json";
import { updateDocument, deleteDocumentField } from "scripts/fireStore";
import { useContent } from "state/ContentProvider";

export default function EpisodeForm({ episode, series, state }) {
  // Global state
  const { categories, setModifiedDate } = useContent();

  // Local state
  const [form, setForm] = useState({
    id: episode.id,
    name: episode.name,
    episodeNumber: episode.episodeNumber,
    season: episode.season,
    videoUrl: episode.videoUrl,
    description: episode.description,
    thumbUrl: episode.thumbUrl,
    seriesId: series.id,
  });
  const [errorMessage, setErrorMessage] = useState("");

  // Constants
  const filename = form.name.toLowerCase().split(" ").join("-");
  const [editModeState] = state;

  // Methods
  async function onPublish(event) {
    event.preventDefault();
    const seriesCategoryId = categories.find(
      (item) => item.name === "Series"
    ).id;
    const path = `categories/${seriesCategoryId}/items`;
    const editedEpisode = {
      id: String(Date.now()),
      name: form.name,
      videoUrl: form.videoUrl,
      season: form.season,
      description: form.description,
      thumbUrl: form.thumbUrl,
    };

    const isNewSeason = series.seasons[form.season] === undefined;

    const newSeasonData = {
      seasons: {
        ...series.seasons,
        [form.season]: {
          episodes: {
            [form.episodeNumber]: { ...editedEpisode },
          },
        },
      },
    };

    const newData = isNewSeason
      ? newSeasonData
      : {
          seasons: {
            ...series.seasons,
            [form.season]: {
              ...series.seasons[form.season],
              episodes: {
                ...series.seasons[form.season].episodes,
                [form.episodeNumber]: { ...editedEpisode },
              },
            },
          },
        };

    await updateDocument(path, series.id, newData);

    if (episode.season && episode.season !== editedEpisode.season) {
      const fieldToDelete = `seasons.${episode.season}.episodes.${episode.episodeNumber}`;
      await deleteDocumentField(path, series.id, fieldToDelete);
    }

    setModifiedDate(new Date());
    editModeState(false);
  }

  function cancelEdit() {
    if (
      window.confirm(
        "Do you really want to cancel the form? Your changes would be lost"
      )
    ) {
      editModeState(false);
    }
  }

  return (
    <form className="admin-form episode-form">
      <h2>{episode.name === "" ? "Create" : "Edit "} episode</h2>
      <InputFields
        fields={fields}
        legend="General info"
        state={[form, setForm]}
        errors={errorMessage}
      />
      <Textarea
        legend="Description"
        fieldName="description"
        state={[form, setForm]}
      />
      <InputImage
        label="Thumb"
        id="thumbImage"
        state={[form, setForm]}
        filename={`series/thumbImage/${filename}`}
      />
      <footer>
        <button
          type="submit"
          className="button save-button"
          onClick={onPublish}
        >
          Publish episode
        </button>
        <button className="cancel-button" onClick={cancelEdit}>
          Cancel
        </button>
      </footer>
    </form>
  );
}
