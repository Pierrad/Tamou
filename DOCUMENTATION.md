# Documentation FRONT

## Installation du projet

Pour lancer le projet, il faut ouvrir un terminal de commande dans le dossier du projet.

```
cp .env.example .env
npm install
cd ios && pod install && cd ..
npm run start
```

Ensuite, il faut ouvrir une seconde fenêtre de terminal dans le dossier du projet.

```
npm run ios 
npm run android
```

Si l'on a un appareil de connecté, l'application se lancera sur cet appareil. Sinon elle sera installée sur un émulateur.

### Problème lors de l'installation

Si vous avez des soucis avec la version iOS.
- Supprimer ios/Pods
- Supprimer ios/Podfile.lock
- Lancer ```cd ios && pod install```


Siu vous avez des alertes de cycles de dépendances  'React-Native-Fetch-Blob' 
- ```npm run fix-react-native-fetch-blob```

----

## Architecture du projet

Les technologies importantes du projet sont les suivantes : 
- React Native 
  - Permet un développement mobile hybride
- Styled-Components
  - Permet facilement de gérer des thèmes
  - Permet de faire du CSS in JS
  - Permet d'anonymiser le nom des classes
  - Permet de facilement faire varier le style en fonction des props de l'élément
- Redux-Saga
  - Permet de gérer un store (source de vérité unique)
  - Permet de facilement gérer les effets de bords des appels réseaux

Le projet a été codé en utilisant le moins de dépendance ```npm``` possible.

### ```ios```

Structure de base d'un projet iOS. Il ne faut quasiment jamais éditer le contenu de ce dossier.

### ```android```

Structure de base d'un projet android. Il ne faut quasiment jamais éditer le contenu de ce dossier.

### ```src```

Dossier de développement principal de notre application. 

### ```src/assets```

Dossier contenant les images et les polices de caractères du projets. Ces éléments seront stockés dans l'application, il ne faut donc pas surcharger le dossier d'images pour éviter d'avoir une application trop lourde à l'installation.

### ```src/components```

Dossier contenant les éléments réutilisables de notre application, par exemple les boutons, des inputs, des cartes...<br/><br/>
Chaque composant est formé d'un fichier ```index.js``` et d'un fichier ```styled.js```. Le fichier ```index.js``` correspond à la structure de notre composant. Un composant doit gérer le moins de logique possible. <br/><br/>
Le fichier ```styled.js``` contient le style des éléments du composant.

### ```src/helpers```

Dossier contenant les principales fonctions d'aides réutilisables du projet. Par exemple: fonction permettant de transformer un timestamp en date...

### ```src/hooks```

Dossier contenant les hooks du projet. Un hook est un concept venant de ```React```, c'est une fonction qui peut bénéficier du contexte d'un composant pour déterminer un rendu. <br/> <br/>Par exemple, on pourrait brancher un hook ```useWindowSize``` sur un composant pour avoir la taille actuelle de la fenêtre accessible dans le composant. 

### ```src/i18n```

Dossier contenant la logique d'intertionalisation du projet. L'```intertionalisation``` est le fait de produire une application disponible dans plusieurs langues. <br/> <br/>L'application est actuellement disponible en français et en anglais. Il y a donc un fichier JSON pour les traductions françaises et un autre fichier pour les traductions anglaises.

### ```src/models```

Dossier contenant les modèles d'objets du projet. <br/> <br/>Par exemple, dès lors que l'on reçoit les données d'un utilisateur via un appel réseau, on fait passer notre objet dans le modèle ```User```. Cela permet de s'assurer d'avoir un unique endroit où l'on peut éditer, transformer notre objet et qu'il soit uniforme dans toute le projet. 

### ```src/redux```

Dossier contenant tout ce qui concerne le store (source unique de vérité) et les appels réseaux du projet. <br/> <br/>
Il est structuré de la façon suivante : 
- ```actions```
  - Dossier contenant la liste des actions que l'on peut déclencher dans le projet. 
  - Une fois que l'on déclenche une action, elle peut être configurée pour déclencher
    - Soit un reducer
    - Soit une saga (qui passera par un reducer pour modifier le store si besoin)
- ```api```
  - Dossier contenant les fonctions appelant l'API avec ```fetch```.
- ```reducers```
  - Il existe plusieurs reducers car on peut avoir plusieurs types d'objets dans notre store (user, game...)
  - Chaque reducer contient donc la définition de ses données et une méthode ```reducer``` qui permet de modifier la valeur d'un objet par celle reçu en argument en fonction de l'action déclenchée. (Lorsque l'on déclenche une action, on peut donner une valeur en paramètre, cette valeur sera la nouvelle valeur de l'objet)
  - Le store ne peut être modifié que par les reducers.
- ```sagas```
  - Il existe plusieurs sagas car on peut gérer plusieurs types d'objets dans notre store (user, game...)
  - Une saga est composé de multiples écouteurs qui écoute le déclenchement d'une action pour déclencher une fonction correspondante. 
  - Une méthode dans une saga se charge d'appeler les fonctions du dossier ```api```. Une fois l'appel réseau terminé, la saga se charge de mettre à jour les objets du store en appelant les reducers correspondants.
- ```selectors```
  - Dossier contenant une liste de sélecteurs. Un sélecteurs permet de récupérer un objet de notre store facilement dans les méthodes sagas.

C'est une architecture un peu complexe à prendre en main, mais elle est très efficace pour gérer un store avec des appels réseaux qui peuvent causer des effets de bords.


### ```src/scenes```

Dossier contenant les pages de notre projet. Ce sont les éléments visuels de plus haut niveau. Une scène peut être composé de composants.

<br/> <br/>
La structure est la suivante : 
- ```Authentified```
  - Les pages disponibles lorsque l'on est authentifié.
- ```Game```
  - Les pages liées à la section ```Jeu en ligne``` du projet.
- ```Home```
  - Simple page permettant de faciliter les déplacements vers les différentes pages du projet lors du développement.
- ```Layout```
  - Simple page représentant le point d'entrée de notre application. Elle contient la définition des routes vers toutes les pages du projet. 
  - Toutes les pages ont comme racine ce Layout. Cela permet de faciliter la remontée des pop-up de validation ou d'erreurs. Par exemple, une fois que le store informe le Layout qu'une erreur est survenue, l'erreur est affiché directement avec le composant ```Error``` utilisé dans le Layout. Cela permet d'avoir une gestion des erreurs centralisée. (Pas besoin de gérer la logique de récupération des erreurs puis d'affichage dans toutes les pages.)
- ```Love```
  - Les pages liées à la section ```Rencontre```du projet.
- ```Unauthentified```
  - Les pages disponibles lorsque l'on est pas authentifié (login, register...)

Notre application est visuellement composée de la manière suivante : 
  - ```App```
    - ```ReduxProvider``` (Connexion au store)
      - ```Layout```
        - ```ThemeProvider``` (Connexion au theme)
          - ```NavigationContainer``` (Connexion des routes)
            - ```Error``` (Affichage des erreurs)
            - ```Validation``` (Affichage des validations)
            - ```Page``` (Affichage des pages selon la route actuelle)
              - ```Composants...```

### ```src/themes```

Dossier contenant les variables des différents thèmes du projet. (les couleurs...)

### ```Notes```

Afin de faciliter le développement et l'homogénéité du code entre les développeurs, nous avons installé ```ESLint``` & ```Prettier```. Ce sont des outils qui permettent d'avoir un format de code similaire entre les développeurs (règles de code...)