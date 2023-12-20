# GET /api/v1/me  : Information Utilisateur

![Sequence Diagram.drawio.png](Sequence%20Diagram.drawio.png)

Cet endpoint permet la lecture des informations de l'utilisateur

## Données d'entrée

Aucune donnée nécessaire.

## Données de retour

Me

| Nom    | Type     | Obligatoire | Description                            |
|--------|----------|-------------|----------------------------------------|
| name   | String   | Oui         | Nom de l'utilisateur                   |
| scopes | String[] | Oui         | Liste des authorities de l'utilisateur |

## Règles

### Règle 1

La personne doit être authentifiée via saml.

* En cas d'accès non connecté, la personne est redirigé vers la connexion SAML via une 302
* En cas de succès, retourner une réponse avec code 200 avec en body les informations utilisateur

## Details retour

| Type retour | Données à retourner     | Informations                                    |
|-------------|-------------------------|-------------------------------------------------|
| 200         | Information Utilisateur |                                                 |
| 302         | Redirection connexion   | En cas d'appel avec un utilisateur non connecté |
