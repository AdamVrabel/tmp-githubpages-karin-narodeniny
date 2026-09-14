# QR kartičky – dynamický obsah

Statická stránka pre GitHub Pages. Každá z 5 kartičiek má **trvalý odkaz**
(`/card/1/`, `/card/2/`, ... `/card/5/`), na ktorý natlačíš QR kód. Obsah
(foto / gif / video) za daným odkazom vieš kedykoľvek zmeniť bez toho, aby sa
zmenil samotný link – takže QR kódy raz vytlačíš a viac sa ich netýkaš.

## 1. Vytvorenie repozitára

1. Na GitHube vytvor **nový repozitár** (napr. `moje-kartičky`) – pokojne aj
   verejný, netreba nič platiť.
2. Nahraj doň všetok obsah tohto priečinka (celý `qr-media-site/`, ale obsah
   priečinka, nie priečinok samotný – teda `index.html`, `card/`, `data/`,
   `media/`, `assets/`, `.nojekyll` idú priamo do koreňa repozitára).

   Cez web rozhranie: „Add file → Upload files" a pretiahni všetko dnu.
   Alebo cez terminál:
   ```bash
   cd qr-media-site
   git init
   git add .
   git commit -m "init"
   git branch -M main
   git remote add origin https://github.com/TVOJ_USERNAME/NAZOV_REPA.git
   git push -u origin main
   ```

## 2. Zapnutie GitHub Pages

1. V repozitári choď do **Settings → Pages**.
2. Pri "Build and deployment" vyber **Deploy from a branch**.
3. Branch: `main`, priečinok: `/ (root)`.
4. Ulož. O cca 30–60 sekúnd bude stránka bežať na:
   ```
   https://TVOJ_USERNAME.github.io/NAZOV_REPA/
   ```

## 3. Finálne odkazy na QR kódy

Toto sú tvoje 5 trvalých adries (nemenia sa, aj keď zmeníš obsah):

```
https://TVOJ_USERNAME.github.io/NAZOV_REPA/card/1/
https://TVOJ_USERNAME.github.io/NAZOV_REPA/card/2/
https://TVOJ_USERNAME.github.io/NAZOV_REPA/card/3/
https://TVOJ_USERNAME.github.io/NAZOV_REPA/card/4/
https://TVOJ_USERNAME.github.io/NAZOV_REPA/card/5/
```

Z týchto 5 URL adries si vygeneruješ QR kódy (napr. cez qr-code-generator.com,
alebo mi pošli finálne linky a ja ti vygenerujem PNG súbory rovno tu).

## 4. Pridanie / zmena obsahu (fotka, gif, video)

Pre kartičku číslo `N`:

1. Nahraj súbor s médiom do priečinka `media/`, napr. `media/1.jpg`,
   `media/2.gif`, `media/3.mp4`.
2. Otvor `data/N.json` a nastav:
   ```json
   {
     "type": "image",
     "file": "1.jpg",
     "caption": "Voliteľný popisok"
   }
   ```
   - `type` môže byť `"image"` (aj pre .jpg/.png/.gif) alebo `"video"` (pre
     .mp4/.webm).
   - `file` je presný názov súboru v priečinku `media/`.
   - `caption` je nepovinný text pod médiom.
3. Ulož zmeny (commit + push, alebo cez web rozhranie "Edit" priamo na
   GitHube).
4. O chvíľu (do minúty) sa zmena prejaví na tom istom odkaze – žiadny nový
   QR kód netreba.

### Zmena média nabudúce
Stačí zopakovať kroky 1–3 vyššie – buď nahradíš rovnaký súbor novým
obsahom (rovnaký názov), alebo nahráš nový súbor a v `data/N.json` upravíš
pole `file` na nový názov.

## Poznámky
- Video sa prehráva potichu a automaticky (kvôli obmedzeniam mobilných
  prehliadačov), s možnosťou ovládania.
- Ak `data/N.json` má prázdne `file`, stránka zobrazí len text
  "Obsah čoskoro pribudne ✨" – takže môžeš QR kódy vytlačiť skôr, než máš
  hotové fotky/videá.
- Repozitár môže byť pokojne aj súkromný len ak máš GitHub Pro/Team/Enterprise –
  na bezplatný GitHub Pages musí byť repozitár **verejný**.
