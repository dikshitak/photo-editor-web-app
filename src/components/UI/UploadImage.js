import './UploadImage.scss';
import Input from './Input';
import SectionWrapper from '../SectionWrapper';

const UploadImage = (props) => {

  const onImageUploadHandler = (event) => {
    props.onImageUpload(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <SectionWrapper title="Upload Image" classes="wrp">
      <Input type="file" id="img" accept=".png,.jpg,.svg,.jpeg" label="Upload Image" onChange={onImageUploadHandler} classes="upload-image"/>
    </SectionWrapper>
  );
};

export default UploadImage;