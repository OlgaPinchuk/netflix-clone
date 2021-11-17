// NPM Packages
import ReactDom from "react-dom";

export default function Modal({ state }) {
  const [child, setChild] = state;


  // safeguard
  if (child === null) return null;

  return ReactDom.createPortal(
    <>
    <div className="portal-wrapper">
      <div className="modal-background" />
      <div className="modal-window">
        <button className="close-button" onClick={() => setChild(null)}>X</button>
        {child}
      </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}