import { useState } from 'react';
import SectionWrapper from '../SectionWrapper';
import BasicTemplate from './BasicTemplate';
import OverlayTemplate from './OverlayTemplate';
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
      </ul>
    </SectionWrapper>
  );
};

export default Templates;