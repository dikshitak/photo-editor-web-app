import './BasicTemplate.scss';
import CustomTextEditor from '../CustomTextEditor';
import parse from 'html-react-parser';
import Logo from '../SVG/Logo';

const BasicTemplate = (props) => {
  console.log(props);
  return (
    <li className={`wrp template-wrapper ${props.classList}`} onClick={props.selectTemplateHandler} data-template={props.id}>
      <div id={props.id} className="section-wrapper">
        <div className="image-wrapper">
          <img src={props.item.image} className="image"/>
        </div>
        {!props.logoHide && props.item.logo ==='default' && <div className="default-logo"><Logo/></div> }
        {!props.logoHide && props.item.logo!=='default' && <div className="user-logo"><img src={props.item.logo}/></div> }
        <div className="content-wrapper">
          <h1 className="title">
            {!props.id.includes('-preview') && parse(`<strong>${props.item.title}</strong>`)}
            {props.id.includes('-preview') && <CustomTextEditor placeholder={`<strong>${props.item.title}</strong>`}/>}
          </h1>
          <div className="description">
            {!props.id.includes('-preview') && props.item.description}
            {props.id.includes('-preview') && <CustomTextEditor placeholder={props.item.description}/>}
          </div>
        </div>
      </div>
    </li>
  );
};

export default BasicTemplate;