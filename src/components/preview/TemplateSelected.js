import BasicTemplate from '../templates/BasicTemplate';
import OverlayTemplate from '../templates/OverlayTemplate';
import ThumbnailTemplate from '../templates/ThumbnailTemplate';

const TemplateSelected = (props) => {
  return(
    (() => {
      switch(props.templateChosen) {
        case 'basic-template':
          return <BasicTemplate item={props.item} id={props.id} logoHide={props.logoHide} classList={`${props.templateChosen} ${props.item.size} `}/>
        case 'overlay-template':
          return <OverlayTemplate item={props.item} id={props.id} logoHide={props.logoHide} classList={`${props.templateChosen} ${props.item.size} `}/>
        case 'thumbnail-template':
          return <ThumbnailTemplate item={props.item} id={props.id} logoHide={props.logoHide} classList={`${props.templateChosen} ${props.item.size} `}/>
        default:
          return <div>Error</div>
      }
    })()
  );
}

export default TemplateSelected;