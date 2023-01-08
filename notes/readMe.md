# Note de projet.
 
## quelques d‚finitions:
 
 >systeme complŠxe: => ensemble de composants qui communiques entre elles!
 
 > un module n'est charg‚ qu'une seule fois en memoire.
 
## Hooks personnalis‚
 
> Encapsulation de la logique autour useState et useEffect dans un hookCustom.
 
-  Simplification du code
-  meilleure Composition
- r‚utlisation
 
## Archetecture applicative
 
- Anticiper les pattern utiles
- allŠger l'apprentissage
- R‚duire le couplage du code
 
# Web Vitals outils
 
- https://web.dev/vitals/
- budget en milliseconne pour rendre une image sur un navigateur.
- Cr‚er un arbre de coposant suffissament detaill‚!
 
## metric
 
- 5K de domNode dans l'outil performance: =>c'est une page faible
- 17k  => moyen
- 25k => page beaucoup voir lourd!
 
## generate-react cli
 
- generation des composant via un outils de formatage.
 
## scenariser le chargement.
 
###  Lazy loading: 
 
- Utiliser react.lazy, react.suspense et les import dynamiques sur les composants lourds.
- faire de p‚tits composants.
- miniser l'usage des useState
- refactoriser la structure (selon la vision du projet)  
- privilŠger les useCallback dans les fonction des evennements du renderer.
 
### React portal
 
API permettant la fragmentation des composants dans l'application react.  
Utiliser pour faire des composants modals << boite de dialogue >>

 
### Identification des fichers lourds et les charger avec du lazy loading.
 
charger des fichiers lourds css relentie le temps d'accŠs.  
il faut donc les identifiers, les fragmenter et ne pas les charger en cas de  necessit‚ absolue.
 
### les awesome react pour cr‚er repondre au problematique autour de react.
 
-  Exmple https://react-hook-form.com/form-builder
- Cette liste est la bible de toute personne qui est confront‚ aux problematiques de pattern de paradigm et de code en react.  
