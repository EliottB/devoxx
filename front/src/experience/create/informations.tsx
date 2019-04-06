import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../design-system/Input';
import { Infos } from '../../model/experience';
import styled from 'styled-components';

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
        Informations
        <label>
          Name :
          <Input
            value={this.state.name}
            placeholder="Name"
            onChange={name => {
              this.setState({ name });
            }}
          />
        </label>
        <label>
          Description :
          <Input
            value={this.state.description}
            placeholder="Description"
            onChange={description => {
              this.setState({ description });
            }}
          />
        </label>
        <label>
          Organisation :
          <Input
            value={this.state.organisation}
            placeholder="Organisation"
            onChange={organisation => {
              this.setState({ organisation });
            }}
          />
        </label>
        <label>
          Localisation :
          <Input
            value={this.state.localisation}
            placeholder="Localisation"
            onChange={localisation => {
              this.setState({ localisation });
            }}
          />
        </label>
        <div>
          <label>
            Practices :
            <select
              onChange={({ target: { value } }) => {
                this.setState({ practices: [...this.state.practices, value] });
              }}
            >
              <option value="react">react</option>
              <option value="node">node</option>
              <option value="go">go</option>
              <option value="angular">angular</option>
              <option value="mob progamming">mob progamming</option>
            </select>
          </label>
          {this.state.practices.map((practice, indexToFound) => (
            <div data-testid="practices" key={`${practice}-${indexToFound}`}>
              <span>{practice}</span>
              <span
                onClick={() => {
                  const practices = this.state.practices.reduce(
                    (acc: string[], practice, index) => {
                      return indexToFound !== index ? [...acc, practice] : acc;
                    },
                    [],
                  );
                  this.setState({ practices });
                }}
              >
                delete
              </span>
            </div>
          ))}
        </div>
        <Link to="/experience/create/teams">
          <button
            onClick={() => {
              this.props.onChange(this.state);
            }}
          >
            Next
          </button>
        </Link>
      </InformationContainer>
    );
  }
}

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  > label,
  > div {
    margin-top: 20px;
    padding: 10px;
  }

  > div {
    display: flex;
    flex-direction: column;
    > div {
      display: flex;
      align-items: center;
      border-radius: 4px;
      border: solid grey thin;
      margin-top: 10px;
      margin-right: 10px;
      justify-content: space-between;
      padding: 10px;
      span {
        &:nth-child(2) {
          cursor: pointer;
          color: grey;
          font-size: 13px;
        }
      }
    }
  }
`;
export default Informations;