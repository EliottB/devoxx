import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CreateWizard from './experience/create/wizard';


export const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={() => <div>TODO: STEP 1 - REPLACE THIS ARROW FUNCTION BY THE ExperienceList COMPONENT</div>} />
      <Route path="/experience/create" component={CreateWizard} />
    </BrowserRouter>
  );
};