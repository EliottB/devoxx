## Etape 1 : Afficher la liste des expériences depuis un fichier JSON

Cette étape consiste à afficher la liste des expériences depuis un fichier JSON.

- React concepts utiles:

  - Function Component

  - Lists and Keys

  - Props

- Implémenter le composant `ExperienceList` dans [./front/src/experience/ExperienceList.tsx](./front/src/experience/ExperienceList.tsx). Appuyez vous sur le fichier HTML [./front/html-css-integration/ExperienceList.html](./front/html-css-integration/ExperienceList.html) et sur le fichier CSS [./front/src/experience/ExperienceList.module.css](./front/src/experience/ExperienceList.module.css). La liste des expériences venant du fichier [./front/src/data/experiences.json](./front/src/data/experiences.json) peut être chargée avec le code suivant :

  ```typescript
  const experiences: Experience[] = require('../data/experiences.json');
  ```

- Refactorer le code en extrayant le code lié à une expérience dans un composant ExperienceCard. A titre d'exercice, utilisez une arrow function plutôt que le mot clé `function`. Faites l'exerice également d'utiliser la `nested destructuration`(cf slide #??) sur le paramètre du composant afin de pouvoir utiliser directement les noms des propriétés de l'objet Experience.

## Etape 2 : Afficher la liste des expériences depuis un service REST

Cette étape consiste à afficher la liste des expériences depuis un service REST.

- React concepts utiles:

  - Class Component

  - State

  - Lifecycle

- Le service REST renvoyant la liste des expériences est géré par un projet Node se trouvant dans le dossier `./back`. Pour le rendre disponible, exécuter `yarn start` depuis ce dossier. Le endpoint en question est accessible depuis [http://localhost:3001/list/experience](http://localhost:3001/list/experience).

- Charger les expériences depuis le endpoint REST. Vous pouvez vous appuyer sur la fonction suivante:

  ```typescript
  async function fetchExperiences(filter?: string): Promise<Experience[]> {
    const result = await fetch(
      `http://localhost:3001/list/experience/${filter || ''}`,
    );
    const { response } = await result.json();
    return response;
  }
  ```

## Etape 3 : Proposer une search box pour rechercher dans la liste d'expérience

- React concepts utiles:

  - Handling Events (input.onChange)

- Ajouter un React input component en guise de Search Box. Pour le positionner et le styliser comme attendu, appuyez vous sur le fichier HTML [./front/html-css-integration/ExperienceList.searchBox.html](./front/html-css-integration/ExperienceList.searchBox.html).

- La recherche doit être assurée par le même endpoint REST qu'à l'étape 1. Pour cela, la fonction `fetchExperiences` prend en paramètre un filtre de type texte. Afficher le résultat renvoyée par le service.

## Etape 4 : Afficher le détail d'une expérience

- React concepts utiles:

  - Handling Events (div.onClick)
  - Conditional Rendering
  - Lifting State Up

- Lors d'un clique sur une `ExperienceCard` vous devez :
  - remplacer la `name`, `description`, `organisation`, `location` par le détail de l'expérience
  - Un second clique sur les détails fait retrouver son état d'origine à `ExperienceCard`
  - Une seule `ExperienceCard` à la fois affiche le détail d'une expérience
  - Pour afficher les détails vous devez vous servir du component `Details` se trouvant dans [./front/src/experience/ExperienceDetails.tsx](./front/src/experience/ExperienceDetails.tsx)

## Etape 5 : Permettre l'ajout et la suppression de `practices` dans le formulaire de création d'expérience

- React concepts utiles:
  - Controlled Component

## Etape 6 : Permettre l'ajout de personnes dans le formulaire de création d'experience

- React concepts utiles:

  - Hook
  - Form validation

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
