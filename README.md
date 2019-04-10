## Step 1 : Display the list of experiences (FunctionComponent & Props & ListOnKeys)

- You have to create a `Component` that takes a list of experiences : `Experience[]` as properties and display it.

  - Display the `name, descripion, organisation, localisation` of each experiences

* This component should display on the `/` route

  - Create your component in `src/experience/ExperienceList.tsx` name it `ExperienceList`
  - You can use an existing list of experiences here :

  ```js
  const experiences = require('./data/experiences.json');
  ```

  - For tests, at the same tag of the `key` attribute add

  ```html
  <div data-testid="elem-experience" />
  ```

* Styles tips :
  ```html
  <ListMainContainer>
    <ListContainer> [LIST HERE] -- <ExperienceCard /> </ListContainer>
  </ListMainContainer>
  <!-- -->
  <Name>Crème de la crème</Name>
  <!-- -->
  <Text> Lorem ipsum ...</Text>
  <!-- -->
  <Location>Paris</Location>
  ```

## Step 3 : fetch & LifeCycle & State(List)

- First open a new terminal go in _`back/`_ and run `yarn start`
- Now in `<App>` instead of require a json fecth _`localhost:3001/list/experience`_
- You may need to use a state component and lifeCycle like (_`compnentDidMount, componentWillMount`_)
- Make it works !

## Step 4 : HandlingEvents Input & State

- In `<App>` create and input that will filter the list using _`localhost:3001/list/experience/:filter`_

## Step 5 : HandlingEvents Click & ConditionalRendering (ternary)

- In `<List>` when the name is clicked hide the entire list and display the details usin `<Details>` from _`src/experience/details/tsx`_

## Step 6 : Select & Router & Controlled Inuput

- Use `<Link>` to navigate to _`src/experience/create/wizard.tsx`_

```tsx
<Link to="/experience/create/informations">
  <button>Add an experience</button>
</Link>
```

- `<CreateWizard>` is diplayed on _`/experience/create`_ route
- `<Informations>` is diplayed on _`/experience/create/informations`_ route
- In `<Informations>` , at the end of the form `add` a <select>

```html
<option value="react">react</option>
<option value="node">node</option>
<option value="go">go</option>
<option value="angular">angular</option>
<option value="mob progamming">mob progamming</option>
```

- on each `Onchange` of the select add the value to `this.state.pratices`
- Under the select display `this.state.pratices`
- On each pratices displayed add a delete button that removes the practice of the list

## Step 7 : Typescript & form Component

- First create a file `teams.tsx` in _`src/experience/create/`_ and export default `StepTeams`
- In `<Wizard>` make `<StepTeams>`display on route _`experience/create/teams`_
- In `teams.tsx` create also a component names `PeopleInput`
  - It provide two text inputs : `Name` and `Role`, and an add button
    - For tests use `Name` and `Role` as `placeholder`
  - It takes as parameter an `onChange` methode that return a `People` object
  ```ts
  interface People {
    name: string;
    role: string;
  }
  ```
- When add is clicked checked if the fields are filled

  - if it is return the `People` and empty the fields
  - if not do nothing

- In `<StepTeam>` store the `People` returned in a list and display it
