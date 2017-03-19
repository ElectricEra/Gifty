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
    let description = {age: 25, gender:'male', price: 125, tags:['art', 'music']};

    this.props.getGifts(description);
  }

  handleChange(event) {
  }

  render() {
    return (
      <div onChange={this.handleChange}>
        <LoginWrapper>
          <Logo imgSrc="images/gifty-blue.svg" />
          <Row>
            <Form id="tags">
              <TextInput id="name">Name</TextInput>
              <RadioInput id="male">Male</RadioInput>
              <RadioInput id="female">Female</RadioInput>
              <NumberInput id="number">Age</NumberInput>
              <NumberInput id="price">Price</NumberInput>

              <SmallWrapper>
                <Checkbox id="sport">Sport</Checkbox>
                <Checkbox id="travel">Travel</Checkbox>
                <Checkbox id="gadgets">Gadgets</Checkbox>
                <Checkbox id="reading">Reading</Checkbox>
              </SmallWrapper>
              <SmallWrapper>
                <Checkbox id="gaming">Gaming</Checkbox>
                <Checkbox id="music">Music</Checkbox>
                <Checkbox id="art">Art</Checkbox>
                <Checkbox id="cooking">Cooking</Checkbox>
              </SmallWrapper>

              <Button onClick={this.handleGenerate} to="generated">Generate</Button>
            </Form>
           </Row>
         </LoginWrapper>
       </div>
    )}
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ generateGifts, getGifts }, dispatch);
}

export default connect(null, mapDispatchToProps)(GiftyForm);

//
//<Text txtPosition="center">Describe your friend!</Text>
