import './OverlayTemplate.scss'; 

const OverlayTemplate = (props) => {
  return (
    <li className={`wrp template-wrapper ${props.classList}`} onClick={props.selectTemplateHandler} data-template={props.id}>
      <div id={props.id} className="section-wrapper">
        <div className="image-wrapper">
          <img src={props.item.image} className="image"/>
        </div>
        <h1 className="title">{props.item.title}</h1>
        <p className="description">{props.item.description}</p>
      </div>
    </li>
  );
};

export default OverlayTemplate;