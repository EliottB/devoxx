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

- Lors d'un clic sur une `ExperienceCard` vous devez :
  - remplacer la `name`, `description`, `organisation`, `location` par le détail de l'expérience
  - Un second clic sur les détails fait retrouver son état d'origine à `ExperienceCard`
  - Une seule `ExperienceCard` à la fois affiche le détail d'une expérience
  - Pour afficher les détails vous devez vous servir du component `Details` se trouvant dans [./front/src/experience/ExperienceDetails.tsx](./front/src/experience/ExperienceDetails.tsx)

## Etape 5 : Permettre l'ajout et la suppression de `practices` dans le formulaire de création d'expérience

- React concepts utiles:

  - Controlled Component

- Lorsque vous cliquez sur `Créer une experience` vous êtes redirigé sur la route [http://localhost:3000/experience/create/informations](http://localhost:3001/experience/create/informations) qui affiche le component `Informations` de [./front/src/experience/create/Informations.tsx](./front/src/experience/create/Informations.tsx)
- Vous trouverez un exemple html ici :[./front/html-css-integration/Informations.tsx](./front/html-css-integration/Informations.tsx)

- Dans [Informations.tsx](./front/src/experience/create/Informations.tsx) :

  - Vous devrez ajouter un `<select>` après le label `Practices` (remplacez les commentaires)

    - Options du select :

    ```html
    <option value=""></option>
    <option value="react">react</option>
    <option value="node">node</option>
    <option value="go">go</option>
    <option value="angular">angular</option>
    <option value="mob progamming">mob progamming</option>
    ```

  - Sous le `<select>` remplacez les commentaires par une liste de `Practices`

    - cette liste est alimenté à chaque changement de valeurs du `<select>`
    - chaque éléments doivent pouvoir êtres retirer de la liste en un clic

  - Veillez à nettoyer la valeur du `<select>` apres chaque changement

## Etape 6 : Permettre l'ajout de personnes dans le formulaire de création d'experience

- React concepts utiles:

  - Hook
  - Form validation

- Depuis [la page Informations](http://localhost:3001/experience/create/informations) lorsque vous cliquez sur `Suivant` vous êtes redirigé sur la route [http://localhost:3000/experience/create/team](http://localhost:3001/experience/create/team) qui affiche le component `Team` de [./front/src/experience/create/Informations.tsx](./front/src/experience/create/Informations.tsx)

- Vous allez devoir créer un formulaire pour renseigner le nom et le role d'un membre et en suite afficher la liste des membres : [HTML final](./front/html-css-integration/Team.html)

- Le formulaire :

  - Créer un (StateLess)component respectant ces critères :
    - Un champ text pour le `name`
    - Un champ text pour le `role`
    - Un bouton `add`
    - prends en property une fonction `onChange` qui retourne un [People](./front/src/model/experience.ts)
    - Au clic sur le bouton le component retourne un `People` si le `name` et le `role` sont renseignés, sinon ne retourne rien
    - Une fois un `People` retourné vider les champs text

- La liste :
  - Afficher la liste des membres ajouté à l'équipe
  - Un membre doit pouvoir être supprimé en un clic
