import TemplateSelected from './TemplateSelected';
import './Preview.scss';
import SectionWrapper from '../SectionWrapper';

const Preview = (props) => {
  return (
    <SectionWrapper title="Preview" classes="preview-container wrp">
      <ul className="preview">
        <TemplateSelected item={props.item} logoHide = {props.logoHide} templateChosen={props.templateChosen} id={`${props.templateChosen}-preview`}/>
      </ul>
    </SectionWrapper>
  );
};

export default Preview;