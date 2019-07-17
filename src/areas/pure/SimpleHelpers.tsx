import React, { ChangeEventHandler, FC, useState } from 'react';
import { display } from './simple-helpers';

export const SimpleHelpers: FC = () => {
  const [text, setText] = useState('Hello TypeScript');
  const [num, setNum] = useState(1);

  const handleNumberChange: ChangeEventHandler<HTMLInputElement> = e => {
    setNum(Number(e.currentTarget.value));
  };

  const handleTextChange: ChangeEventHandler<HTMLInputElement> = e => {
    setText(e.currentTarget.value);
  };

  return (
    <>
      <h1>Simple Helpers</h1>
      <fieldset className="uk-fieldset">
        <legend className="uk-legend">Let's make some enthusiastic text</legend>

        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            className="uk-input"
            autoComplete="off"
            value={text}
            onChange={handleTextChange}
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
            autoComplete="off"
            value={num}
            onChange={handleNumberChange}
          />
        </div>
      </fieldset>

      <p>
        <strong>{display(text, num)}</strong>
      </p>
    </>
  );
};
