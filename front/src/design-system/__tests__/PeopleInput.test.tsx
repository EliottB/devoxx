import React from 'react';
import { render } from '../../renderTools';
import InputPeople from '../InputPeople';

describe('People Input Form', () => {
  it('Display the title when provided', () => {
    const { getByText } = render(
      <InputPeople
        onChange={() => undefined}
        people={{}}
        title="Form title :"
      />,
    );
    expect(getByText('Form title :')).toBeDefined();
  });
});
