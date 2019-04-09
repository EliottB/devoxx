import React from 'react';
import { Route } from 'react-router';
import Informations from './Informations';

import { Infos, Teams } from '../../model/experience';

interface State {
  informations: Infos;
  teams: Teams;
}

class CreateWizard extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      informations: { practices: [] },
      teams: { generalTeam: [], involvedTeam: [] },
    };
  }
  render() {
    return (
      <div>
        <h4>Register : </h4>
        <Route
          exact
          key="enterprises-create-informations"
          path="/experience/create/informations"
          component={() => (
            <Informations
              onChange={(informations: Infos) => {
                this.setState({ informations });
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default CreateWizard;
