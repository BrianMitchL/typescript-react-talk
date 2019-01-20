import React, { ChangeEventHandler, Component } from 'react';
import { display } from './simple-helpers';

interface SimpleHelpersState {
  text: string;
  num: number;
}

export class SimpleHelpers extends Component<{}, SimpleHelpersState> {
  state = {
    text: 'Hello JavaScriptMN',
    num: 1
  };

  handleNumberChange: ChangeEventHandler<HTMLInputElement> = e => {
    this.setState({ num: Number(e.currentTarget.value) });
  };

  handleTextChange: ChangeEventHandler<HTMLInputElement> = e => {
    this.setState({ text: e.currentTarget.value });
  };

  render() {
    return (
      <div className="Pure">
        <h1>Simple Helpers</h1>
        <fieldset className="uk-fieldset">
          <legend className="uk-legend">
            Let's make some enthusiastic text
          </legend>

          <div>
            <label htmlFor="text">Text</label>
            <input
              type="text"
              id="text"
              className="uk-input"
              autoComplete={'off'}
              value={this.state.text}
              onChange={this.handleTextChange}
            />
          </div>

          <div>
            <label htmlFor="number">Enthusiasms</label>
            <input
              type="number"
              id="number"
              className="uk-input"
              min={0}
              step={1}
              autoComplete={'off'}
              value={this.state.num}
              onChange={this.handleNumberChange}
            />
          </div>
        </fieldset>

        <p>
          <strong>{display(this.state.text, this.state.num)}</strong>
        </p>
      </div>
    );
  }
}
