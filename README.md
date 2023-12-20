<!-- Readme Template: See: https://github.com/othneildrew/Best-README-Template -->
<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
*** for badge : https://ileriayo.github.io/markdown-badges/
-->

[![Jfrog Artifactory][Jfrog Artifactory]][Jfrog Artifactory-url]
[![Jenkins][Jenkins]][Jenkins-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/altima-assurances/altima-echo">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Echo</h3>

  <p align="center">
    Cet outil a pour but de voir les flux entrant et sortant de chaque api Altima
    <br />
    <a href="/docs"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://echo-dev.altima-assurances.fr">View Demo</a>
    ·
    <a href="https://github.com/altima-assurances/altima-echo/issues">Report Bug</a>
    ·
    <a href="https://github.com/altima-assurances/altima-echo/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Sommaire</summary>
  <ol>
    <li>
      <a href="#a-propos-du-projet">A propos du projet</a>
      <ul>
        <li><a href="#construit-avec">Construit avec</a></li>
      </ul>
    </li>
    <li>
      <a href="#pour-bien-démarrer">Pour bien démarrer</a>
      <ul>
        <li><a href="#prérequis">Prérequis</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#utilisation">Utilisation</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contribution">Contribution</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


## A propos du projet

[![Product Name Screen Shot][product-screenshot]](https://echo-dev.altima-assurances.fr/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Construit avec


#### Back
* [![Kotlin][Kotlin]][Kotlin-url]
* [![Spring][Spring]][Spring-url]
* [![Apache-Kafka][Apache-Kafka]][Apache-Kafka-url]
#### Front
* [![React][React.js]][React-url]
* [![Vite][Vite.js]][Vite-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![MUI][MUI]][MUI-url]
* [![React Query][React Query]][React Query-url]
* [![React Router][React Router]][React Router-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Pour bien démarrer

### Prérequis

* Java 17 - Télécharger JDK 17 Témurin via IntelliJ IDEA ( Project Structures > Project > SDK > Add SDK > Download SDK > Version 17 > Vendor Eclipse Temurin (AdoptOpenJDK HotSpot) )
* Git - [Télécharger et installer Git](https://git-scm.com/downloads). Les machines OSX et Linux l'ont déjà d'installé.
* Node.js - [Télécharcher et installer Node.js](https://nodejs.org/en/download/) et le package manager npm. Si vous rencontrer des soucis vous pouver utiliser ce [GitHub Gist](https://gist.github.com/isaacs/579814) pour installer Node.js.
* Yarn - (Optionnel) [Télécharger et installer Yarn](https://yarnpkg.com/migration/guide) si vous avez déjà utiliser yarn v1

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Cloner le repo
   ```sh
   git clone https://github.com/altima-assurances/altima-echo.git
   ```
2. Installer les dépendances du client
   Placer vous dans le dossier du client
   ```sh
   cd ./client
   ```
   Et lancer l'installation des dépendances
   ```sh
   npm install
   ```
   ou
   ```sh
   yarn install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Utilisation

Pour lancer l'application, assurez-vous que le parametre server:port renseigné dans le fichier [application-local.yml](config/application-local.yml) ne correspond pas à une autre application lancer sur votre machine.

### Cas en Hot Module Reload

Vérifier que la propriété application:client:hot-reload est bien valorisé à true dans le fichier [application-local.yml](config/application-local.yml)

Démarrer votre client via la commande suivante dans le dossier client
   ```sh
   cd ./client
   ```

   ```sh
   npm run dev
   ```
ou
   ```sh
   yarn run dev
   ```

### Cas sans Hot Module Reload
Lancer la commande gradle suivante :
   ```sh
   ./gradlew copyClientBuild
   ```
Cette commande aura pour effet de build le client et de copier les fichiers générer dans le dossier "build/resources/main/static"

### Lancer l'application
Depuis la racine du projet lancer la commande gradle suivante
   ```sh
   ./gradlew bootRun --args='spring.profiles.active=local'
   ```
ou Depuis IntelliJ, creer une nouvelle configuration projet Gradle avec les paramètres suivant :
* Run : bootRun
* Variable d'environnement : SPRING_PROFILES_ACTIVE=local

Rendez-vous sur le lien : [http://localhost:9080](http://localhost:9080)

### Authentification

L'application est protéger par une authentification gérée par PingFederate.
Seuls les utilisateurs autorisés peuvent accéder à l'outil.

### Rôles

La catégorisation des utilisateurs avec les rôles se fait dans le LDAP Altima, et en fonction de cette dernière le périmètre d'action dans l'outil est défini.


_Pour plus d'informations sur son usage, merci de vous référer à la [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
  - [ ] Nested Feature

Voir [open issues](https://github.com/altima-assurances/altima-echo/issues) pour une liste complete des feature ( et des issues connues)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Contribution

Si vous avez une suggestion pour améliorer les choses, veuillez créer une branche sur le dépôt et créer une pull request. Vous pouvez aussi simplement ouvrir un ticket avec la balise "enhancement".
N'oubliez pas de donner une étoile au projet ! Merci encore!

1. Creer votre Feature Branch (`git checkout -b feature/AmazingFeature`)
2. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
3. Push votre Branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Contact

Team IngeSI - team-ingenierie-SI@altima-assurances.fr

Lien projet: [https://github.com/altima-assurances/altima-echo](https://github.com/altima-assurances/altima-echo)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p style='text-align: right;'>(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/altima-assurances/altima-echo.svg?style=for-the-badge
[contributors-url]: https://github.com/altima-assurances/altima-echo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/altima-assurances/altima-echo.svg?style=for-the-badge
[forks-url]: https://github.com/altima-assurances/altima-echo/network/members
[stars-shield]: https://img.shields.io/github/stars/altima-assurances/altima-echo.svg?style=for-the-badge
[stars-url]: https://github.com/altima-assurances/altima-echo/stargazers
[issues-shield]: https://img.shields.io/github/issues/altima-assurances/altima-echo.svg?style=for-the-badge
[issues-url]: https://github.com/altima-assurances/altima-echo/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[product-screenshot]: images/screenshot.png
[Spring]: https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white
[Spring-url]: https://spring.io/
[Vite.js]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Kotlin]: https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white
[Kotlin-url]: https://kotlinlang.org/
[TypeScript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Apache-Kafka]: https://img.shields.io/badge/Apache%20Kafka-000?style=for-the-badge&logo=apachekafka
[Apache-Kafka-url]: https://kafka.apache.org/
[Jenkins]: https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white
[Jenkins-url]: https://jenkins.altima-assurances.fr/job/altima-echo/
[MUI]: https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white
[MUI-url]: https://mui.com/
[React Router]:https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[React Router-url]: https://reactrouter.com/en/main
[React Query]: https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white
[React Query-url]: https://tanstack.com/query/v3/
[Jfrog Artifactory]: https://img.shields.io/badge/JFrog%20Artifactory-40BE46.svg?style=for-the-badge&logo=JFrog&logoColor=white
[Jfrog Artifactory-url]: https://artifactory.altima-assurances.fr/artifactory/webapp/#/artifacts/browse/tree/General/gradle-dev-local/altima/echo
