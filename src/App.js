import React, { Component } from "react";

import { Button } from "./Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      throw: 0,
      target: 0,
      kills: 0,
      outs: 0,
      catches: 0,
      caught: 0
    };
  }

  handleCount(value) {
    this.setState((prevState) => ({ throw: prevState.throw + value }));
  }

  render() {
    return (
      <div>
        <Button
          sign="+"
          throw={this.state.throw}
          updateCount={this.handleCount.bind(this)}
        />
        <br />
        {this.state.throw}
        <br />
        <Button
          sign="+"
          throw={this.state.throw}
          updateCount={this.handleCount.bind(this)}
        />
        <Button
          sign="-"
          throw={this.state.throw}
          updateCount={this.handleCount.bind(this)}
        />
        <br />
        <Button
          sign="+"
          throw={this.state.throw}
          updateCount={this.handleCount.bind(this)}
        />
        <br />
        {this.state.throw}
        <br />
        <Button
          sign="+"
          throw={this.state.throw}
          updateCount={this.handleCount.bind(this)}
        />
        <Button
          sign="-"
          throw={this.state.throw}
          updateCount={this.handleCount.bind(this)}
        />
      </div>
    );
  }
}

export default App;
