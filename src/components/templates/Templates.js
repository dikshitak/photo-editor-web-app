import SectionWrapper from '../SectionWrapper';
import BasicTemplate from './BasicTemplate';
import OverlayTemplate from './OverlayTemplate';
import ThumbnailTemplate from './ThumbnailTemplate';
import './Templates.css'; 

const Templates = (props) => {
  const selectTemplateHandler = (event) => {
    let currentTemplate = event.target.closest('.template-wrapper').getAttribute('data-template');
    props.changeChosenTemplate(currentTemplate);
  }

  return (
    <SectionWrapper title="Templates" classes="templates-container wrp">
      <ul>
        <BasicTemplate item={props.item['basic-template']} id="basic-template" selectTemplateHandler={selectTemplateHandler} classList={`basic-template ${props.templateChosen === 'basic-template' ? 'is-selected': ''}`}></BasicTemplate>
        <OverlayTemplate item={props.item['overlay-template']} id="overlay-template" selectTemplateHandler={selectTemplateHandler} classList={`overlay-template ${props.templateChosen === 'overlay-template' ? 'is-selected': ''}`}></OverlayTemplate>
        <ThumbnailTemplate item={props.item['thumbnail-template']} id="thumbnail-template" selectTemplateHandler={selectTemplateHandler} classList={`thumbnail-template ${props.templateChosen === 'thumbnail-template' ? 'is-selected': ''}`}></ThumbnailTemplate>
      </ul>
    </SectionWrapper>
  );
};

export default Templates;