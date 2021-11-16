export default function Card({ item }) {
  return (
    <button className="title-card">
      <img className="thumb" alt="Thumb" src={item.thumbUrl} />
    </button>
  );
}
