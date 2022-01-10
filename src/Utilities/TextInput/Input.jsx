
import PropTypes from "prop-types";
import "./Input.scss";

function Input( { type, name, placeholder, htmlFor, ...props } ) {
  return (
    <label htmlFor={ htmlFor } className="label-wrapper">
      { placeholder }
      <input type={ type } name={ name } { ...props } className="input-wrapper" />
    </label>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default Input;
