import propTypes from "prop-types";

const Button = ( { type, buttonText, ...props } ) => {
  return (
    <button type={ type } { ...props }>
      { buttonText }
    </button>
  );
};

// eslint-disable-next-line react/no-typos
Button.propTypes = {
  type: propTypes.string.isRequired,
  buttonText: propTypes.string.isRequired
}

export default Button;