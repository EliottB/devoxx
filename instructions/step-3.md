## Etape 3 : Proposer une search box pour rechercher dans la liste d'expérience ([plus d'infos](./step-3.more-infos.md))

- React concepts utiles:

  - Handling Events (input.onChange)

- Ajouter un React input component en guise de Search Box. Pour le positionner et le styliser comme attendu, appuyez vous sur le fichier HTML [./front/html-css-integration/ExperienceList.searchBox.html](./front/html-css-integration/ExperienceList.searchBox.html).

- La recherche doit être assurée par le même endpoint REST qu'à l'étape 1. Pour cela, la fonction `fetchExperiences` prend en paramètre un filtre de type texte. Afficher le résultat renvoyée par le service.
