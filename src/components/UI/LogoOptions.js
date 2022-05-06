import './LogoOptions.scss';
import Input from './Input';
import SectionWrapper from '../SectionWrapper';
import { useState } from 'react';

const LogoOptions = (props) => {

  const [logoHide, setLogoToggle] = useState('');

  const onLogoUploadHandler = (event) => {
    props.onLogoUpload(URL.createObjectURL(event.target.files[0]));
  }

  const onLogoToggleHandler = () => {
    props.onLogoToggle();
    if(logoHide!=='hide') {
      setLogoToggle('hide');
    } else {
      setLogoToggle('');
    }
  }

  return (
    <SectionWrapper title="Logo" classes="wrp">
      <div className="flex justify-evenly">
        <div className={`logo-options hl-opt ${logoHide}`}>
          <div className="hide-logo" onClick={onLogoToggleHandler}></div>
        </div>
        <div className="logo-options rl-opt">
          <Input type="file" id="img" accept=".png,.jpg,.svg,.jpeg" label="" onChange={onLogoUploadHandler} classes="replace-logo"/>
        </div>
      </div>
    </SectionWrapper>
  );

};

export default LogoOptions;