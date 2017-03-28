export const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less'
  }
  
  if (!values.age)  {
     errors.age =`Required`
  } else if (+(values.age) > 110) {
    errors.age = "Are you sure? It's too much"
  }

  if (!values.price) {
    errors.price = 'Required'
  } else if(+(values.price) === 0) {
    errors.price = "Enter a positive value, please"
  }
    
  if((!values.male)&&(!values.female)) {
    errors.female ="Check the gender, please"
  }
  return errors
}
