# Altima Echo Back End

![Echo.drawio.png](images%2FEcho.drawio.png)
## Endpoints

| Type   | Path                           | Description                              | Lien                                                                                                              |
|--------|--------------------------------|------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| GET    | /api/v1/me                        | Affiche les des données de l'utilisateur | [Readme.md](API%2Fget%20me%20-%20informations%20utilisateur%2FReadme.md)   |


## Pour tester

Une fois l'application démarré,

allez a l'url http://localhost:9089/swagger-ui/index.html

Vous acceder Ã  la page swagger (qui contient les endpoints exemple)
![swagger.png](images%2Fswagger.png)


## Dépendances installé

### Base H2

Base de données pour faciliter le démarrage et les tests de l'application

### swagger UI

Pour tester les Api

### Flyway

Flyway est un outil de migrations de base de données. Il  permet de gérer le contrôle de versions de votre base de données.

### Mockito

Mockito pour effectuer des tests bouchonnés



## Build a Jar

```
./gradlew build
```

Jar file is available in altima-echo/build/libs

## Base de données

L'outil utilise une base de données Postgresql.

L'outil Flyway gère automatiquement les migrations de structure de base de données.

### Exécuter des commandes Flyway

Il est possible d'exécuter les commandes Flyway avec gradle, par exemple la commande `repair` :

```
./gradlew flywayRepair \
    -Pflyway.user={{ JDBC_RUN_USER }} \
    -Pflyway.password='{{ JDBC_RUN_PASSWORD }}' \
    -Pflyway.url={{ JDBC_URL }}
```

Attention, si le mot de passe contient des caractères spéciaux dans le mot de passe, la commande risque de ne pas fonctionner.
Si c'est le cas, ajouter dans le build.gradle :
```
flyway {
    url = '{{ JDBC_RUN_USER }}'
    user = '{{JDBC_RUN_USER}}'
    password = '{{ JDBC_RUN_PASSWORD }}'}
```
Puis lancer la commande :
```
gradle:flywayrepair
```
