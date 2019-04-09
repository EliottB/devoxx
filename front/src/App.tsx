import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CreateWizard from './experience/create/Wizard';
import { MainContainer, Header } from './globalStyle';

export const App = () => {
  return (
    <BrowserRouter>
      <MainContainer>
        <Header>Experiences</Header>
        <Route
          path="/"
          exact
          component={() => (
            <div>
              TODO: STEP 1 - REPLACE THIS ARROW FUNCTION BY THE ExperienceList
              COMPONENT
            </div>
          )}
        />
        <Route path="/experience/create" component={CreateWizard} />
      </MainContainer>
    </BrowserRouter>
  );
};
