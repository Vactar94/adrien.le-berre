# Portfolio d’Adrien Le Berre

Site statique en HTML, CSS et JavaScript, disponible en français, anglais, italien et espagnol.

## Ouvrir le site

Ouvrez simplement `index.html` dans votre navigateur.

Pour un test plus proche d’un hébergement réel, lancez un serveur local dans ce dossier :

```bash
python -m http.server 8000
```

Puis ouvrez `http://localhost:8000`.

## Contenu déjà intégré

- 5 projets : Task-List, Word Puzzle Solver, Tribz, Automatik Drone et e-Tri ;
- 4 expériences : Assemblée nationale, La Brasserie à Bozeman, Maison de la Gendarmerie et Scouts et Guides de France ;
- 2 centres d’intérêt : muay-thaï et voile ;
- les photographies extraites du portfolio final ;
- le portfolio détaillé au format PDF ;
- les traductions françaises, anglaises, italiennes et espagnoles.

## Ajouter le CV

1. Placez le CV PDF dans :

```text
assets/documents/cv-adrien-le-berre.pdf
```

2. Dans `index.html`, cherchez le commentaire :

```html
<!-- Pour activer le CV ... -->
```

3. Remplacez la balise `<article class="document-card document-card--placeholder reveal">` par une balise lien :

```html
<a class="document-card reveal"
   href="assets/documents/cv-adrien-le-berre.pdf"
   target="_blank"
   rel="noopener">
```

4. Remplacez la fermeture `</article>` de cette carte par `</a>`.

Vous pouvez également remplacer le texte `CV à ajouter` par `Ouvrir le CV` dans les quatre langues du fichier `script.js`.

## Modifier les traductions

Toutes les traductions se trouvent au début de `script.js`, dans l’objet `translations` :

- `fr` : français ;
- `en` : anglais ;
- `it` : italien ;
- `es` : espagnol.

Les éléments HTML utilisent l’attribut `data-i18n`. La valeur de cet attribut correspond à la clé à modifier dans chaque langue.

## Modifier les images

Les images sont rangées dans :

```text
assets/images/
```

Conservez les mêmes noms de fichiers pour remplacer une image sans modifier le HTML.

## Liens des projets

Les boutons « Voir le détail » ouvrent directement la page correspondante du portfolio détaillé. Vous pouvez remplacer ces liens par une page de projet, une démonstration ou un dépôt GitHub dans `index.html`.
