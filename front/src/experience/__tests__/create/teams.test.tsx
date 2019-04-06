import React from 'react';
import StepTeams from '../../create/teams';
import { render, fireEvent, cleanup } from '../../../renderTools';

const A_PEOPLE = {
  name: 'Jean Paul',
  role: 'Art Director',
};

describe('Teams forms :', () => {
  beforeEach(cleanup);
  it('display the teams form page', () => {
    const { getByText } = render(<StepTeams onChange={() => undefined} />);
    expect(getByText('Teams :')).toBeDefined();
  });

  it('display the general team form', () => {
    const { getByText } = render(<StepTeams onChange={() => undefined} />);
    expect(getByText('General :')).toBeDefined();
  });

  it('display the involved team form', () => {
    const { getByText } = render(<StepTeams onChange={() => undefined} />);
    expect(getByText('Involved :')).toBeDefined();
  });

  it('add a people to general list when "add" button is clicked', () => {
    const { getAllByTestId, getAllByLabelText, getAllByText } = render(
      <StepTeams onChange={() => undefined} />,
    );
    fireEvent.change(getAllByLabelText('Name :')[0], {
      target: { value: A_PEOPLE.name },
    });
    fireEvent.change(getAllByLabelText('Role :')[0], {
      target: { value: A_PEOPLE.role },
    });
    fireEvent.click(getAllByText('Add')[0]);
    expect(getAllByTestId('general-team')).toHaveLength(1);
  });

  it('add a people to involved list when "add" button is clicked', () => {
    const { getAllByTestId, getAllByLabelText, getAllByText } = render(
      <StepTeams onChange={() => undefined} />,
    );
    fireEvent.change(getAllByLabelText('Name :')[1], {
      target: { value: A_PEOPLE.name },
    });
    fireEvent.change(getAllByLabelText('Role :')[1], {
      target: { value: A_PEOPLE.role },
    });
    fireEvent.click(getAllByText('Add')[1]);
    expect(getAllByTestId('involved-team')).toHaveLength(1);
  });

  it('removes a people from general list when delete is clicked', () => {
    const {
      getAllByTestId,
      getAllByLabelText,
      getAllByText,
      queryAllByTestId,
    } = render(<StepTeams onChange={() => undefined} />);
    fireEvent.change(getAllByLabelText('Name :')[0], {
      target: { value: A_PEOPLE.name },
    });
    fireEvent.change(getAllByLabelText('Role :')[0], {
      target: { value: A_PEOPLE.role },
    });
    fireEvent.click(getAllByText('Add')[0]);
    expect(getAllByTestId('general-team')).toHaveLength(1);
    fireEvent.click(getAllByText(/delete/)[0]);
    expect(queryAllByTestId('general-team')).toHaveLength(0);
  });

  it('removes a people from involved list when delete is clicked', () => {
    const {
      getAllByTestId,
      getAllByLabelText,
      getAllByText,
      queryAllByTestId,
    } = render(<StepTeams onChange={() => undefined} />);
    fireEvent.change(getAllByLabelText('Name :')[1], {
      target: { value: A_PEOPLE.name },
    });
    fireEvent.change(getAllByLabelText('Role :')[1], {
      target: { value: A_PEOPLE.role },
    });
    fireEvent.click(getAllByText('Add')[1]);
    expect(getAllByTestId('involved-team')).toHaveLength(1);

    fireEvent.click(getAllByText(/delete/)[0]);
    expect(queryAllByTestId('involved-team')).toHaveLength(0);
  });

  it('Return a list of the general team', done => {
    const {
      getAllByTestId,
      getAllByLabelText,
      getAllByText,
      getByText,
    } = render(
      <StepTeams
        onChange={({ generalTeam }) => {
          expect(generalTeam).toEqual([
            { name: A_PEOPLE.name, role: A_PEOPLE.role },
          ]);
          done();
        }}
      />,
    );
    fireEvent.change(getAllByLabelText('Name :')[0], {
      target: { value: A_PEOPLE.name },
    });
    fireEvent.change(getAllByLabelText('Role :')[0], {
      target: { value: A_PEOPLE.role },
    });
    fireEvent.click(getAllByText('Add')[0]);
    expect(getAllByTestId('general-team')).toHaveLength(1);
    fireEvent.click(getByText('Create'));
  });
});
