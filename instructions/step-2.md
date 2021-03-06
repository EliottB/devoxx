## Etape 2 : Afficher la liste des expériences depuis un service REST ([plus d'infos](./step-2.more-infos.md))

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
