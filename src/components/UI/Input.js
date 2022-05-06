const Input = (props) => {
  return (
    <div className={props.classes}>
      <label>{props.label}</label>
      <input {...props}></input>
    </div>
  );
};

export default Input;