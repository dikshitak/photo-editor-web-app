import React from 'react';
import Templates from './templates/Templates';
import Preview from './preview/Preview';
import Options from './UI/Options';
import defaultImg from '../images/Ryan-Gosling.jpg';
import basicImg from '../images/Holidays.jpg';

const DEFINED_TEMPLATES = {
  'basic-template': {
    title: "Edit your Title here",
    description:"Edit your Description here",
    image: basicImg,
    size: 'facebook',
    logo: 'default'
  },
  'overlay-template': {
    title: "Ryan Gosling",
    description:"hello world",
    image: defaultImg,
    size: 'instagram',
    logo: ''
  }
};
class SocialImageGenerator extends React.Component {
  constructor(){
    super();
    this.state={
      templateChosen: 'basic-template',
      templates: JSON.parse(JSON.stringify(DEFINED_TEMPLATES)),
      logoHide: false
    }
    this.templateData = JSON.parse(JSON.stringify(DEFINED_TEMPLATES));
  }

  changeChosenTemplate = (templateSelected) => {
    this.setState({templateChosen:templateSelected});
    this.setState({templates:JSON.parse(JSON.stringify(DEFINED_TEMPLATES))});
  }

  changeImageSize = (imageSize) => {
    let selectedTemplate = JSON.parse(JSON.stringify(this.state.templates));
    selectedTemplate[this.state.templateChosen].size = imageSize;
    this.setState({templates:selectedTemplate});
  }

  updateImage = (updatedImage) => {
    let selectedTemplate = JSON.parse(JSON.stringify(this.state.templates));
    selectedTemplate[this.state.templateChosen].image = updatedImage;
    this.setState({templates:selectedTemplate});
  }

  updateLogo = (updatedLogo) => {
    let selectedTemplate = JSON.parse(JSON.stringify(this.state.templates));
    selectedTemplate[this.state.templateChosen].logo = updatedLogo;
    this.setState({templates:selectedTemplate});
  }

  onLogoSwitch = () => {
    this.setState((prevState) => ({logoHide:!prevState.logoHide}));
  }

  render() {
    return(
      <React.Fragment>
        <section className="container flex">
          <Templates item={this.templateData} templateChosen = {this.state.templateChosen} changeChosenTemplate={this.changeChosenTemplate}/>
          <Preview item={this.state.templates[this.state.templateChosen]} templateChosen = {this.state.templateChosen} logoHide={this.state.logoHide}/>
          <Options item = {this.state.templates[this.state.templateChosen]} templateChosen = {this.state.templateChosen} changeImageSize={this.changeImageSize} updateImage={this.updateImage} updateLogo={this.updateLogo} onLogoSwitch={this.onLogoSwitch}/>
        </section>
      </React.Fragment>
    );
  }
}

export default SocialImageGenerator;