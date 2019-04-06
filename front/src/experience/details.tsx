import React from 'react';
import { Experience } from '../model/experience';
import styled from 'styled-components';
import { backendPath } from './../config';
import { Link } from 'react-router-dom';

interface Props {
  enterpriseParams: string;
}

interface State {
  experience?: Experience;
}

class Details extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    const experience = await fetchEnterpriseByName(this.props.enterpriseParams);
    this.setState({ experience });
  }
  public render() {
    return (
      <DetailsPage>
        <DetailsContainer>
          <BackContainer>
            <Link to="/">{'< List'}</Link>{' '}
          </BackContainer>
          {!!this.state.experience ? (
            <>
              <h2>{this.state.experience.name}</h2>
              <p>{this.state.experience.description}</p>
              <p>{this.state.experience.organisation}</p>
              <h4>Main team : </h4>
              <div data-testid="general-team-container">
                {this.state.experience.teamGeneral.map((people, index) => (
                  <div key={index}>
                    <span>{people.name}</span>
                    <span> {people.role}</span>
                  </div>
                ))}
              </div>
              <h4>Involved team : </h4>
              <div data-testid="involved-team-container">
                {this.state.experience.teamInvolved.map((people, index) => (
                  <div key={index}>
                    <span>{people.name}</span>
                    <span> {people.role}</span>
                  </div>
                ))}
              </div>
              <h4>Practices : </h4>
              <PracticesContainer data-testid="practices-container">
                {this.state.experience.practices.map((practice, index) => (
                  <div key={index}>{practice}</div>
                ))}
              </PracticesContainer>
            </>
          ) : (
            <div>
              <p>
                Experience: <b>{`${this.props.enterpriseParams}`}</b> Not Found
                !
              </p>
            </div>
          )}
        </DetailsContainer>
      </DetailsPage>
    );
  }
}

async function fetchEnterpriseByName(name: string): Promise<Experience> {
  const result = await fetch(`${backendPath}/experience/${name}`);
  const { response } = await result.json();

  return response;
}

const DetailsPage = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
const DetailsContainer = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
`;
const BackContainer = styled.div`
  a {
    text-decoration: none;
    color: black;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
  }
`;

const PracticesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div {
    margin: 0 10px 10px 0;
    padding: 3px 10px;
    border-radius: 4px;
    border: 1px solid #e5e9f2;
    white-space: nowrap;
  }
`;

export default Details;
