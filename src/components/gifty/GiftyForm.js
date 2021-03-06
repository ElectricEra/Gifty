import React, {PropTypes} from "react";
import {IndexLink, Link, browserHistory} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { generateGifts, addToHistory } from '../../actions/index'
import { getGifts, firstEntrance, giftProcess } from '../../actions/index'
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
    this.props.giftProcess(true);
    this.props.getGifts(description);
    this.props.firstEntrance();
    this.props.addToHistory(description);
    //console.log(description);
    //console.log('Form submited');
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

  renderRadioField ({ input, label, id, checked, meta: { touched, error }}) {
    return (
    <span>
    <RadioInput {...input} id={id} >{label}</RadioInput>
    {touched && error && <span className="field-error col s12 radio-error">{error}</span>}
    </span>
    )
  }

  renderCheckbox ({ input, label, id }) {
    return <Checkbox {...input} id={id} >{label}</Checkbox>
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props

    return (
      <LoginWrapper>
        <Logo imgSrc="images/gift.png" />
        <p className="center"><b>For who you are trying to find a gift?</b></p>
        <p className="center"><b>Describe a person so we can help you!</b></p>
        <Row>
          <Form onSubmit={handleSubmit(this.handleGenerate)}>
            <div className="row">
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
                label="How much are you ready to spend? (in $)"/>

            </div>
            <div className="row">
              <p className="center"><b>What this person likes?</b></p>
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
            </div>

          </Form>
         </Row>
       </LoginWrapper>
    )}
};


function processValues(values) {
  const Cats = ['./images/cat-1.jpg', './images/Small-cat-shaurma.jpg'];
  let date = new Date()
  let description = {
    name: '',
    age: 0,
    gender:'',
    price: 0,
    tags:[],
    picture: Cats[Math.floor(Math.random()*Cats.length)],
    date: {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear()
    }
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
  return bindActionCreators({ getGifts, firstEntrance, addToHistory, giftProcess }, dispatch);
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
