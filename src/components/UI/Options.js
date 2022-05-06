import SizeUI from './SizeUI';
import UploadImage from './UploadImage';
import LogoOptions from './LogoOptions';
import DownloadImage from './DownloadImage';
import './Options.scss';

const Options = (props) => {
  const selectImagesHandler = (size) => {
    props.changeImageSize(size);
  }

  const onLogoUpload = (value) => {
    props.updateLogo(value);
  }

  const onImageUpload = (value) => {
    props.updateImage(value);
  }

  const onLogoToggle = () => {
    props.onLogoSwitch();
  }
  
  return (
    <div className="options-container">
      <UploadImage defaultImage={props.item.image} onImageUpload={onImageUpload}/>
      <SizeUI defaultSize={props.item.size} selectImagesHandler={selectImagesHandler}/>
      { props.item.logo && <LogoOptions onLogoUpload={onLogoUpload} onLogoToggle={onLogoToggle} logo={props.item.logo}/>}
      <DownloadImage templateID={props.templateChosen}/>
    </div>
  );
};

export default Options;