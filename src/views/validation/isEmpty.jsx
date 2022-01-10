const validation = ( values ) => {
  let errors = {};
  if ( !values ) {
    errors.message = "Email is required or Phone number is required";
  } else if ( !/^(\+234)?[0-9]{10,11}$/.test( values ) || /^[a-zA-Z0-9]+@(gmail||hotmail||yahoo)\.(com)$/.test( values ) ) {
    errors.message = "Email is invalid or Phone number is invalid";
  }
  return errors;
};

export default validation;
