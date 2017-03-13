import React from "react";
import {IndexLink, Link} from 'react-router';
import { connect } from 'react-redux';
import {Logo, Text} from '../materialize';
import {Button} from '../materialize';
import {Row, TextInput} from '../materialize';


export default class GiftyForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleGenerate = this.handleGenerate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleGenerate(event) {
    console.log(event.target.inneHTML);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  render() {
    return (
      <LoginWrapper>
        <Logo imgSrc="images/gifty-blue.svg" />
        <Text txtPosition="center">Describe a person, who will recieve a gift</Text>
        <Row>
          <TextInput inputId="name">Name</TextInput>
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
