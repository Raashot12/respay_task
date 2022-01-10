export const validateLogin = values => {
  let errorStore = {}

  if ( !values.username ) {
    errorStore.username = "Email is required"
  } else if ( !/\S+@\S+\.\S+/.test( values.username ) ) {
    errorStore.username = "Email address is invalid"
  }
  if ( !values.password ) {
    errorStore.password = "Password is required"
  } else if ( values.password.length < 4 ) {
    errorStore.password = "Password need to be more than 6 characters'"
  }

  return errorStore
}
