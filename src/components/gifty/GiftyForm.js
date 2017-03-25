import React, {PropTypes} from "react";
import {IndexLink, Link, browserHistory} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { generateGifts, addToHistory } from '../../actions/index'
import { getGifts,  firstEntrance} from '../../actions/index'
import { Field, reduxForm, getFormValues } from 'redux-form'
import { validate } from '../../utils/utils_gifty/index'

import {LoginWrapper, InputWrapper, Logo, Text} from '../materialize';
import {SmallWrapper, Form, Checkbox, Button} from '../materialize';
import {Row, TextInput, RadioInput, NumberInput, SubmitButton} from '../materialize';

class GiftyForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleGenerate = this.handleGenerate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleGenerate(event) {
    let description = processValues(this.props.values);
    this.props.getGifts(description);
    this.props.firstEntrance();
    this.props.addToHistory(description);
    console.log(description);
    console.log('Form submited');
    browserHistory.push('/generated');
  }

  handleChange(event) {

  }

  renderTextField ({ input, label, type, id, meta: { touched, error } }) {
    let Input = type === 'number' ? NumberInput : TextInput;
    return (
      <div>
        <Input {...input} id={id} type={type}>{label}</Input>
        {touched && error && <span className="field-error col s12">{error}</span>}
      </div>
    )
  }

  renderRadioField ({ input, label, id}) {
    return <RadioInput {...input} id={id} >{label}</RadioInput>
  }

  renderCheckbox ({ input, label, id }) {
    return <Checkbox {...input} id={id} >{label}</Checkbox>
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props

    return (
      <LoginWrapper>
        <Logo imgSrc="images/gift.png" />
        <Row>
          <Form onSubmit={handleSubmit(this.handleGenerate)}>
            <Field
              name="name"
              id="name"
              type="text"
              component={this.renderTextField}
              label="Name"/>
            
            <div className="center" >  
              <Field name="male" id="male" component={this.renderRadioField} label="Male"  />
            </div>
            <Field name="female" id="female" component={this.renderRadioField} label="Female" />
            
            <Field
              name="age"
              id="age"
              type="number"
              component={this.renderTextField}
              label="Age"/>

            <Field
              name="price"
              id="price"
              type="number"
              component={this.renderTextField}
              label="Price"/>

            <SmallWrapper>
              <Field name="sport" id="sport" component={this.renderCheckbox} label="Sport" />
              <Field name="travel" id="travel" component={this.renderCheckbox} label="Travel" />
              <Field name="gadgets" id="gadgets" component={this.renderCheckbox} label="Gadgets" />
              <Field name="reading" id="reading" component={this.renderCheckbox} label="Reading" />
            </SmallWrapper>
            <SmallWrapper>
              <Field name="gaming" id="gaming" component={this.renderCheckbox} label="Gaming" />
              <Field name="music" id="music" component={this.renderCheckbox} label="Music" />
              <Field name="art" id="art" component={this.renderCheckbox} label="Art" />
              <Field name="cooking" id="cooking" component={this.renderCheckbox} label="Cooking" />
            </SmallWrapper>

            <SubmitButton disabled={submitting}>Generate</SubmitButton>
          </Form>
         </Row>
       </LoginWrapper>
    )}
};

function processValues(values) {
  let description = {
    name: '',
    age: 0,
    gender:'',
    price: 0,
    tags:[]
  };

  for (let prop in values) {
    switch (prop) {
      case 'name':
        description.name = values[prop];
        break;
      case 'age':
        description.age = values[prop];
        break;
      case 'male':
        description.gender = prop
        break;
      case 'female':
        description.gender = prop
        break;
      case 'price':
        description.price = values[prop];
        break;
      case 'name':
        break;
      default:
        description.tags.push(prop)
    }
  }

  return description;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getGifts, firstEntrance, addToHistory }, dispatch);
}

function mapStateToProps(state) {
  return {
    values: getFormValues('GiftyReduxForm')(state)
  }
}

GiftyForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(GiftyForm)


export default reduxForm({
  form: 'GiftyReduxForm',
  validate
})(GiftyForm)


/*

// state => ({
//   values: getFormValues('GiftyReduxForm')(state),
// }),


// export default connect(null, mapDispatchToProps)(GiftyForm);

<TextInput name="name" id="name">Name</TextInput>

<NumberInput name="age" id="age">Age</NumberInput>
<NumberInput name="price" id="price">Price</NumberInput>


*/
