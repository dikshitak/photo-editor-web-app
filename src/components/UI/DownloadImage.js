import './DownloadImage.scss';
import * as htmlToImage from 'html-to-image';
import * as download from 'downloadjs';
import { toPng } from 'html-to-image';
import SectionWrapper from '../SectionWrapper';

const DownloadImage = (props) => {
  const generateImageHandler = (templateID) => {
    htmlToImage.toPng(document.getElementById(`${templateID}-preview`))
    .then(function (dataUrl) {
      download(dataUrl, `${templateID}.png`);
    });
  }

  return (
    <SectionWrapper title="Download Image" classes="wrp">
      <div className="download-button" onClick={generateImageHandler.bind(null,props.templateID)}>Download</div>
    </SectionWrapper>
  )
}

export default DownloadImage;