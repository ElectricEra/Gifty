export const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less'
  }
  if (!values.age) {
    errors.age = 'Required'
  } 
  if (!values.price) {
    errors.price = 'Required'
  }
  return errors
}
