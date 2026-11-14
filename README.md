# Rtyně v Podkrkonoší – pracovní web (demo)

Funkční **neoficiální pracovní verze** responzivního webu vytvořená podle navrženého rozvržení. Je připravená pro **GitHub Pages**. Nepotřebuje Node.js, npm, databázi ani build.

## Jak web spustit

**Lokálně:** Otevřete `index.html` v prohlížeči. Pokud chcete web provozovat přes lokální server, spusťte ve složce projektu `python -m http.server 8000` a otevřete `http://localhost:8000`.

**Na GitHub Pages:**

1. Vytvořte nový repozitář na GitHubu, například `rtyne-web-pracovni`.
2. Rozbalte ZIP a nahrajte jeho **obsah** do kořene repozitáře. Soubor `index.html` musí být přímo v kořeni, ne v další podsložce.
3. Proveďte commit na větev `main`.
4. V repozitáři otevřete **Settings → Pages → Build and deployment**. Jako **Source** vyberte „Deploy from a branch“, potom **main** a **/(root)**, a uložte.
5. Stránka bude po zveřejnění dostupná na adrese podobné `https://UZIVATEL.github.io/rtyne-web-pracovni/`.

Protože jsou všechny interní odkazy relativní, stránky fungují také pod cestou GitHub Pages repozitáře.

## Co v demu funguje

- Domovská stránka a samostatné sekce **Pro občany**, **Pro návštěvníky**, **Kalendář akcí**, **Spolky**, **Pozvedni Rtyni** a **Úřad**.
- Responzivní zobrazení na mobilu, tabletu a počítači; otevírací mobilní menu.
- Vyhledávání napříč stránkami, místními spolky a ukázkovými událostmi. Diakritika není pro hledání povinná.
- Kalendář s filtrováním podle kategorie, hledáním, zobrazením detailu a stažením události jako souboru `.ics`.
- Odkazy na relevantní **oficiální stránky města**, včetně online plateb a formulářů.
- **Pozvedni Rtyni:** přidání testovacího příspěvku, filtrování, ocenění a odstranění vlastních příspěvků. Příspěvky se ukládají jen do `localStorage` daného prohlížeče.
- Možnost připravit e-mailový podnět městu v poštovním programu (žádné automatické odeslání).

## Co zatím nefunguje pro veřejný provoz

**Příspěvky nejsou sdílené mezi uživateli.** GitHub Pages poskytuje pouze statický hosting. Pro veřejné sdílení příspěvků bude nutné napojit databázi či externí službu, přihlášení nebo ochranu proti spamu, moderaci, řešení zneužití a zásady ochrany osobních údajů (GDPR). Stránka to návštěvníkům výslovně sděluje.

**Kalendář není automaticky aktualizovaný.** Údaje o akcích vycházejí z oznámení města k 14. 11. 2026 a jsou zde pouze jako testovací obsah. Databáze akcí se nesynchronizuje s webem města; starší události se automaticky skryjí v přehledu nadcházejících akcí.

**Texty a fotografie před zveřejněním ověřte.** Projekt je pracovní demonstrace, nikoli oficiální městský informační systém. Značka ve hlavičce není znak města.

## Kde se upravují informace

| Soubor | Co lze změnit |
| --- | --- |
| `assets/data.js` | Akce, fotografie, odkazy, kontakty, spolky a aktuality |
| `assets/app.js` | Sekce, navigace, vyhledávání, kalendář a příspěvky |
| `assets/styles.css` | Barvy, velikosti, rozložení a mobilní vzhled |
| `index.html` a ostatní `.html` | Titulky stránek, popisy a načítání skriptů |
| `FOTO-A-LICENCE.md` | Licence fotografií, autorství a odkazy |

Pro přidání akce doplňte do pole `events` v `assets/data.js` objekt ve stejném tvaru, jako mají ostatní akce (ID musí být jedinečné). Poté soubor uložte a proveďte commit. Stránka nový termín automaticky zahrne do kalendáře.

## Poznámky k bezpečnosti a přístupnosti

Příspěvky se při zobrazování HTML escapují (předchází se vložení HTML/skriptů). Formulář používá validaci vstupů a množství textu. Vývojová verze neodesílá žádné osobní údaje na server. Přidány jsou texty pro čtečky, kontrastní fokus a přepínání menu přes klávesnici. Před ostrým spuštěním je i tak vhodný audit přístupnosti, obsahu, licencí a ochrany dat.

## Použití fotografií

Fotografie se načítají z Wikimedia Commons za podmínek Creative Commons Attribution-ShareAlike. Viz [FOTO-A-LICENCE.md](FOTO-A-LICENCE.md). Web bez připojení k internetu načte vše kromě těchto externích fotografií a odkazů na oficiální portály.
