import BasicTemplate from '../templates/BasicTemplate';
import OverlayTemplate from '../templates/OverlayTemplate';

const TemplateSelected = (props) => {
  console.log(props.item.size);
  return(
    (() => {
      switch(props.templateChosen) {
        case 'basic-template':
          return <BasicTemplate item={props.item} id={props.id} logoHide={props.logoHide} classList={`${props.templateChosen} ${props.item.size} `}/>
        case 'overlay-template':
          return <OverlayTemplate item={props.item} id={props.id} logoHide={props.logoHide} classList={`${props.templateChosen} ${props.item.size} `}/>
      }
    })()
  );
}

export default TemplateSelected;