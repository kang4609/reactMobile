import React, {Component} from 'react';
import {View, Text, Button, Alert} from 'react-native';

class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      year: 2016,
      name: 'Nader Debit',
      colors: ['blue'],
    };
  }

  updateYear() {
    this.setState({
      year: 2017,
      name: 'Nader Debit1',
      colors: ['yellow'],
    });
  }

  render() {
    return (
      <View>
        <Text>My name is {this.state.name}</Text>
        <Text>My year is {this.state.year}</Text>
        <Text>My colors is {this.state.colors[0]}</Text>
        <Button title="Press me" onPress={() => this.updateYear()} />
      </View>
    );
  }
}

export default MyComponent;
