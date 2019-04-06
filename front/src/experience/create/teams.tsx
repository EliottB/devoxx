import React from 'react';
import InputPeople from '../../design-system/InputPeople';
import { People, Teams } from '../../model/experience';

interface Props {
  onChange: (teams: Teams) => void;
}

interface State extends Teams {}

class StepTeams extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      generalTeam: [],
      involvedTeam: [],
    };
  }
  render() {
    return (
      <div>
        <h3>Teams :</h3>
        <div>
          <InputPeople
            title="General :"
            onChange={people => {
              this.setState({
                generalTeam: [...this.state.generalTeam, people],
              });
            }}
            people={{}}
          />
          {this.state.generalTeam.map(({ name, role }, indexToFound) => (
            <div
              data-testid="general-team"
              key={`${name}+${indexToFound}+${role}`}
            >
              <span>
                {name} : {role}
              </span>
              <span
                onClick={() => {
                  const generalTeam = this.state.generalTeam.reduce(
                    (acc: Array<Partial<People>>, people, index) => {
                      return indexToFound !== index ? [...acc, people] : acc;
                    },
                    [],
                  );
                  this.setState({ generalTeam });
                }}
              >
                delete
              </span>
            </div>
          ))}
        </div>
        <div>
          <InputPeople
            title="Involved :"
            onChange={people => {
              this.setState({
                involvedTeam: [...this.state.involvedTeam, people],
              });
            }}
            people={{}}
          />
          {this.state.involvedTeam.map(({ name, role }, indexToFound) => (
            <div
              data-testid="involved-team"
              key={`${name}+${indexToFound}+${role}`}
            >
              <span>
                {name} : {role}
              </span>
              <span
                onClick={() => {
                  const involvedTeam = this.state.involvedTeam.reduce(
                    (acc: Array<Partial<People>>, people, index) => {
                      return indexToFound !== index ? [...acc, people] : acc;
                    },
                    [],
                  );
                  this.setState({ involvedTeam });
                }}
              >
                delete
              </span>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            this.props.onChange(this.state);
          }}
        >
          Create
        </button>
      </div>
    );
  }
}

export default StepTeams;
