const SectionWrapper = (props) => {
  return (
    <div className={props.classes}>
      <h3 className="section-title">{props.title}</h3>
      {props.children}
    </div>
  )
}

export default SectionWrapper;

