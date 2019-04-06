import * as React from 'react';
import { People } from '../model/experience';

interface Props {
  onChange: (people: Partial<People>) => void;
  people: Partial<People>;
  title?: string;
}

interface State {
  name?: string;
  role?: string;
}

class InputPeople extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.title && <p>{this.props.title}</p>}
        <label>
          Name :
          <input
            type="text"
            value={this.state.name || ''}
            onChange={({ target: { value } }) => {
              this.setState({
                name: value,
              });
            }}
          />
        </label>
        <label>
          Role :
          <input
            type="text"
            value={this.state.role || ''}
            onChange={({ target: { value } }) => {
              this.setState({
                role: value,
              });
            }}
          />
        </label>
        <button
          onClick={() => {
            this.props.onChange({
              name: this.state.name,
              role: this.state.role,
            });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default InputPeople;
