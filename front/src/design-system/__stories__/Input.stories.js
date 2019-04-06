import React from 'react';

import { storiesOf } from '@storybook/react';
import { Input } from '../Input';

storiesOf('Input', module).add('Uncontrolled', () => (
  <Input
    onChange={value => {
      console.log(value);
    }}
  />
));
