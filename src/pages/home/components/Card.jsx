//Project files
import VideoModal from "./VideoModal";

export default function Card({ item, setModal }) {
  return (
    <button
      className="title-card"
      onClick={() => setModal(<VideoModal title={item} />)}
    >
      <img className="thumb" alt="Thumb" src={item.thumbUrl} />
    </button>
  );
}
