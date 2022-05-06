import './Overlay.scss';

const Overlay = () => {
  document.body.style.overflow = "hidden";
  return(<div className="bulk-backdrop"></div>);
}

export default Overlay;