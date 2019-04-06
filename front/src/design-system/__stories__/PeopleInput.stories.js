import React from 'react';
import PeopleInput from '../InputPeople';
import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  name: undefined,
  role: undefined,
});

storiesOf('PeopleInput', module).add('from ', () => (
  <State store={store}>
    {state => (
      <PeopleInput
        onChange={({ name, role }) => {
          store.set({ name, role });
          console.log('people : ', { name, role });
        }}
        people={{ name: store.get('name'), role: store.get('role') }}
      />
    )}
  </State>
  // <p>Coucou </p>
));
