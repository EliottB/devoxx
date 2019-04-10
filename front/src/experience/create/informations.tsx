import React from 'react';
import { Infos } from '../../model/experience';
import styled from 'styled-components';
import { Label, Input, Textarea } from '../../styles';

interface Props {
  onChange: (infos: State) => void;
}

interface State extends Infos {}

class Informations extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      practices: [],
    };
  }
  render() {
    return (
      <InformationContainer>
        <Label>Name :</Label>

        <Input
          value={this.state.name}
          placeholder='Name'
          onChange={({ target: { value: name } }) => {
            this.setState({ name });
          }}
        />
        <Label>Description :</Label>

        <Input
          value={this.state.description}
          placeholder='Description'
          onChange={({ target: { value: description } }) => {
            this.setState({ description });
          }}
        />
        <Label>Organisation :</Label>

        <Textarea
          value={this.state.organisation}
          placeholder='Organisation'
          onChange={({ target: { value: organisation } }) => {
            this.setState({ organisation });
          }}
        />
        <Label>Location :</Label>
        <Textarea
          value={this.state.location}
          placeholder='Location'
          onChange={({ target: { value: location } }) => {
            this.setState({ location });
          }}
        />
      </InformationContainer>
    );
  }
}

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  width: 80%;
`;

export default Informations;
