# Portfolio d’Adrien Le Berre

Site statique en HTML, CSS et JavaScript, disponible en français, anglais, italien et espagnol.
En ligne : https://vactar94.github.io/adrien.le-berre/

## Contenu

- 6 projets : PoolNight, Task-List, Word Puzzle Solver, Tribz, Automatik Drone et e-Tri ;
- 5 expériences : La Chaumière (Nouméa), Présidence de l’Assemblée nationale, La Brasserie (Bozeman, USA), Maison de la Gendarmerie, Scouts et Guides de France ;
- 2 centres d’intérêt : muay-thaï et voile ;
- le CV et le portfolio détaillé en PDF, dans les 4 langues du site.

## Documents PDF

| Langue | CV | Portfolio |
|---|---|---|
| FR | [CV](assets/documents/cv/CV-Adrien-Le-Berre-FR.pdf) | [Portfolio](assets/documents/portfolio/Portfolio-Adrien-Le-Berre-FR.pdf) |
| EN | [CV](assets/documents/cv/CV-Adrien-Le-Berre-EN.pdf) | [Portfolio](assets/documents/portfolio/Portfolio-Adrien-Le-Berre-EN.pdf) |
| IT | [CV](assets/documents/cv/CV-Adrien-Le-Berre-IT.pdf) | [Portfolio](assets/documents/portfolio/Portfolio-Adrien-Le-Berre-IT.pdf) |
| ES | [CV](assets/documents/cv/CV-Adrien-Le-Berre-ES.pdf) | [Portfolio](assets/documents/portfolio/Portfolio-Adrien-Le-Berre-ES.pdf) |

Le site choisit automatiquement le PDF de la langue affichée (attribut `data-doc` dans `index.html`,
géré par `setLanguage()` dans `script.js`). Les liens « Voir le détail » ouvrent la page du projet
dans le portfolio (`data-page`).

## Modifier le CV ou le portfolio

Les PDF sont générés à partir d’une source unique : `tools/documents/content.py` (tous les textes, 4 langues)
et `tools/documents/build.py` (mise en page HTML → PDF avec Chrome).

```bash
pip install playwright && playwright install chromium
python tools/documents/build.py          # régénère les 8 PDF dans assets/documents/
```

Le sommaire du portfolio est cliquable, et chaque page renvoie au sommaire. Si vous ajoutez une page,
mettez à jour `data-page` dans `index.html`.
