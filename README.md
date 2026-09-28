# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Instructions
Créez un projet à l'aide de create-react-app.
Créez un fichier appelé players.js, qui contiendra un tableau d'objets JSON contenant les détails des joueurs (au moins quatre joueurs).
Faites preuve de créativité dans le choix de vos joueurs ; vous pouvez choisir qui vous voulez !

Les attributs de chaque joueur sont : nom, équipe, nationalité, numéro de maillot, âge et URL d’une image du joueur.

Créez un fichier appelé Player.js qui contient le composant lecteur.

Le composant Player doit afficher une carte react-bootstrap. Cette carte affichera tous les attributs de chaque joueur défini dans players.js.

• Déstructurer tous les attributs du composant Player.

· Créez un composant appelé PlayersList.js

Importez dans PlayerList.js le composant Player et les données des joueurs depuis players.js.

• Afficher tous les joueurs dans PlayerList.js, en parcourant tous les éléments du tableau de joueurs (voir la fonction .map).

· Lors du mappage des joueurs, transmettez les propriétés au composant Player (recherchez l'opérateur spread si vous souhaitez l'utiliser).

N'oubliez pas de définir des propriétés par défaut pour chaque attribut (vous pouvez définir n'importe quelles propriétés par défaut).

Utilisez un style en ligne pour le composant Player.

Importez le fichier PlayerList.js dans App.js (composant racine) et affichez la PlayerList.