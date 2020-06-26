import React, { Component } from 'react';
import DrawApp from './Draw/DrawApp';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <DrawApp />
    );
  }
}
