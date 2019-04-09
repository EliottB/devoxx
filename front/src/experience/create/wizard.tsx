import React from 'react';
import { Route } from 'react-router';
import Informations from './informations';
import { Infos } from '../../model/experience';
import { FullSizeContainer, TitleWizard } from '../../globalStyle';

interface Props {}

interface State {
  informations: Infos;
}

class CreateWizard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      informations: { practices: [] },
    };
  }
  render() {
    return (
      <FullSizeContainer>
        <TitleWizard>Create your experience </TitleWizard>
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
      </FullSizeContainer>
    );
  }
}

export default CreateWizard;
