import React from 'react';
import { render, fireEvent, cleanup } from '../../../renderTools';
import Informations from '../../create/informations';

const infos = {
  name: 'Crème de la crème',
  description:
    'ubdcdjkc hdmoihcmds cnds kjcnsdjkchds mcbdjkcn dskjcn mdjksckdsjncsdkj',
  organisation:
    'opjcnd ,cd c,dùkc, dùcm,dù lkv,fo vn ,dv klfù,v fkjvei zvdfk,v fdl,vdfùsvds',
  practices: ['react', 'node', 'go'],
  localisation: 'Paris 18eme',
};
describe('Register an experience ', () => {
  beforeEach(cleanup);
  it('Set a name', done => {
    const { getByText, getByPlaceholderText } = render(
      <Informations
        onChange={({ name }) => {
          expect(name).toBe(infos.name);
          done();
        }}
      />,
    );
    fireEvent.change(getByPlaceholderText('Name'), {
      target: { value: infos.name },
    });
    fireEvent.click(getByText('Next'));
  });
  it('Set a description', done => {
    const { getByText, getByPlaceholderText } = render(
      <Informations
        onChange={({ description }) => {
          expect(description).toBe(infos.description);
          done();
        }}
      />,
    );
    fireEvent.change(getByPlaceholderText('Description'), {
      target: { value: infos.description },
    });
    fireEvent.click(getByText('Next'));
  });

  it('Set an organisation', done => {
    const { getByText, getByPlaceholderText } = render(
      <Informations
        onChange={({ organisation }) => {
          expect(organisation).toBe(infos.organisation);
          done();
        }}
      />,
    );
    fireEvent.change(getByPlaceholderText('Organisation'), {
      target: { value: infos.organisation },
    });
    fireEvent.click(getByText('Next'));
  });
  it('Set a localisation', done => {
    const { getByText, getByPlaceholderText } = render(
      <Informations
        onChange={({ localisation }) => {
          expect(localisation).toBe(infos.localisation);
          done();
        }}
      />,
    );
    fireEvent.change(getByPlaceholderText('Localisation'), {
      target: { value: infos.localisation },
    });
    fireEvent.click(getByText('Next'));
  });

  it('Add practices on select', () => {
    const { getAllByTestId, getByLabelText } = render(
      <Informations onChange={() => undefined} />,
    );
    fireEvent.change(getByLabelText(/Practices/), {
      target: { value: 'React' },
    });
    fireEvent.change(getByLabelText(/Practices/), {
      target: { value: 'Php' },
    });
    expect(getAllByTestId('practices')).toHaveLength(2);
  });

  it('Deletes practice on click', () => {
    const { getAllByTestId, getByLabelText, getAllByText } = render(
      <Informations onChange={() => undefined} />,
    );
    fireEvent.change(getByLabelText(/Practices/), {
      target: { value: 'React' },
    });
    fireEvent.change(getByLabelText(/Practices/), {
      target: { value: 'Php' },
    });
    expect(getAllByTestId('practices')).toHaveLength(2);

    fireEvent.click(getAllByText(/delete/)[0]);
    expect(getAllByTestId('practices')).toHaveLength(1);
  });

  it('Set a list of practices', done => {
    const { getByText, getByLabelText } = render(
      <Informations
        onChange={({ practices }) => {
          expect(practices).toEqual(infos.practices);
          done();
        }}
      />,
    );
    fireEvent.change(getByLabelText(/Practices/), {
      target: { value: infos.practices[0] },
    });
    fireEvent.change(getByLabelText(/Practices/), {
      target: { value: infos.practices[1] },
    });
    fireEvent.change(getByLabelText(/Practices/), {
      target: { value: infos.practices[2] },
    });
    fireEvent.click(getByText('Next'));
  });
});
