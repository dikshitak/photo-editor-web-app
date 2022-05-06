import SectionWrapper from '../SectionWrapper';
import './SizeUI.scss';

const SizeUI = (props) => {
  const selectImagesHandler = (event) => {
    props.selectImagesHandler(event.target.id)
  };

  return (
    <SectionWrapper title="sizes" classes="wrp">
      <ul className="images-wrp sizes-wrapper">
        {['pinterest', 'instagram', 'facebook'].map(item => {
          return (<li key={item} className={`images ${item} ${item===props.defaultSize ? 'is-selected' : ''}`}
          id={item}
          onClick={selectImagesHandler}></li>);
        })}
      </ul>
    </SectionWrapper>
  );
};

export default SizeUI;