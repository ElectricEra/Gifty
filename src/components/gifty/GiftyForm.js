import React from "react";
import {IndexLink, Link} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { generateGifts } from '../../actions/index'
import { getGifts } from '../../actions/index'

import {LoginWrapper, InputWrapper, Logo, Text} from '../materialize';
import {SmallWrapper, Form, Checkbox, Button} from '../materialize';
import {Row, TextInput, RadioInput, NumberInput} from '../materialize';

class GiftyForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleGenerate = this.handleGenerate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleGenerate(event) {
    this.props.getGifts();
  }

  handleChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <LoginWrapper>
        <Logo imgSrc="images/gifty-blue.svg" />
        <Text txtPosition="center">Describe your friend!</Text>
        <Row>
          <TextInput inputId="name" onChange={this.handleChange}>Name</TextInput>
          <RadioInput inputId="male">Male</RadioInput>
          <RadioInput inputId="female">Female</RadioInput>
          <NumberInput inputId="number">Age</NumberInput>
          <NumberInput inputId="price">Price</NumberInput>
          <Form inputId="tags">
            <SmallWrapper>
              <Checkbox inputId="sport">Sport</Checkbox>
              <Checkbox inputId="travel">Travel</Checkbox>
              <Checkbox inputId="gadgets">Gadgets</Checkbox>
              <Checkbox inputId="reading">Reading</Checkbox>
            </SmallWrapper>
            <SmallWrapper>
              <Checkbox inputId="gaming">Gaming</Checkbox>
              <Checkbox inputId="music">Music</Checkbox>
              <Checkbox inputId="art">Art</Checkbox>
              <Checkbox inputId="cooking">Cooking</Checkbox>
            </SmallWrapper>
          </Form>
          <Button onClick={this.handleGenerate} to="generated">Generate</Button>
         </Row>
       </LoginWrapper>
    )}
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ generateGifts, getGifts }, dispatch);
}

export default connect(null, mapDispatchToProps)(GiftyForm);
