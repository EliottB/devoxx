import React from 'react';
import { Experience } from '../model/experience';
import styled from 'styled-components';
import { backendPath } from './../config';
import { Link } from 'react-router-dom';

interface Props {
  enterpriseParams: string;
}

interface State {
  enterprise?: Experience;
}

class Details extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    const enterprise = await fetchEnterpriseByName(this.props.enterpriseParams);
    this.setState({ enterprise });
  }
  public render() {
    return (
      <DetailsPage>
        <DetailsContainer>
          <BackContainer>
            <Link to="/">{'< List'}</Link>{' '}
          </BackContainer>
          {!!this.state.enterprise ? (
            <>
              <Name>{this.state.enterprise.name}</Name>
              <Text>{this.state.enterprise.description}</Text>
              <Text>{this.state.enterprise.organisation}</Text>
              <Label>Main team : </Label>
              <PeopleContaner data-testid="general-team-container">
                {this.state.enterprise.teamGeneral.map((people, index) => (
                  <People key={index}>
                    <PeopleName>{people.name}</PeopleName>
                    <PeopleRole> {people.role}</PeopleRole>
                  </People>
                ))}
              </PeopleContaner>

              <Label>Practices : </Label>
              <PracticesContainer data-testid="practices-container">
                {this.state.enterprise.practices.map((practice, index) => (
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
  const result = await fetch(`${backendPath}/enterprise/${name}`);
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
  padding-top: 10px;
  a {
    text-decoration: none;
    color: black;
    font-size: 13px;
    color: #e39774;
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
    border: 1px solid #5c9ead;
    white-space: nowrap;
    color: #326273;
  }
`;

const Name = styled.h2`
  color: #326273;
  margin: 0;
  padding: 10px 0;
`;

const Text = styled.p`
  color: #5c9ead;
  margin: 0;
  padding: 5px 0;
`;

const Label = styled.p`
  margin: 0;
  padding: 10px 0;
  color: #326273;
`;

const People = styled.div`
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #e39774;
  font-size: 14px;
`;
const PeopleContaner = styled.div`
  display: flex;
  flex: 1;
`;
const PeopleName = styled.span`
  color: #326273;
`;
const PeopleRole = styled.span`
  color: #5c9ead;
`;

export default Details;
