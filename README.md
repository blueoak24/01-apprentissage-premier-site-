# 01 - Apprentissage

Un petit site web statique réalisé dans le cadre d'un apprentissage, affichant une page d'accueil "Bonjour le monde" avec un sous-titre et un fond bleu clair.

## Ce que fait le site

Le site affiche une unique page contenant :
- Un titre "Bonjour le monde"
- Un sous-titre "Mon premier site avec Claude Code"
- Un fond de couleur bleu clair, avec le contenu centré au milieu de l'écran

## Technologies utilisées

- **HTML5** pour la structure de la page
- **CSS** (intégré directement dans `index.html`) pour la mise en forme

Aucune dépendance, framework ou outil de build n'est nécessaire : il s'agit d'un simple fichier HTML autonome.

## Lancer le site en local

Aucune installation n'est requise. Deux options :

1. **Ouvrir directement le fichier**
   Double-cliquez sur `index.html`, ou ouvrez-le depuis votre navigateur (`Fichier > Ouvrir`).

2. **Utiliser un petit serveur local** (optionnel, utile pour simuler un vrai déploiement)
   ```bash
   # Avec Python 3
   python -m http.server 8000
   ```
   Puis ouvrez [http://localhost:8000](http://localhost:8000) dans votre navigateur.
