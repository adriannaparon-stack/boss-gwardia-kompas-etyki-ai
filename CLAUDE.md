# BOSS GWARDIA — Kompas Etyki AI

## Czym jest projekt
Interaktywny symulator decyzji etycznych i prawnych dotyczących AI w marketingu, przeznaczony dla studentów przedmiotu *AI w marketingu* (kierunki Media w biznesie oraz Zarządzanie, Uniwersytet WSB Merito). Student przechodzi przez scenariusze, wybiera decyzję, otrzymuje uzasadnienie z odwołaniem do AI Act i RODO, a na końcu kartę profilu swoich decyzji.

Projekt finałowy (Boss Fight) w programie Gwardia AI.

## Stan projektu
- **Wersja 0.2 — komplet ośmiu scenariuszy.** Gotowe są scenariusze 1–8, liczenie profilu i karta wyniku (etapy 1–3 planu).
- Następne etapy planu: 4) warstwa merytoryczna (słowniczek, odnośniki do EUR-Lex), 5) wygląd i dostępność, 6) pobieranie karty profilu i tryb zajęć, 7) testy i deploy.
- Pozycja opcji rekomendowanej w scenariuszach 1–8: C, B, D, A, C, D, B, A — przy nowych scenariuszach zachowaj zróżnicowanie.

## Zasady, których zawsze przestrzegasz
1. **Język polski, rejestr akademicki**, ale zrozumiały dla studenta pierwszego stopnia.
2. **Żadnych danych osobowych.** Nie dodawaj logowania, kont, formularzy, plików cookies, `localStorage`, analityki ani wysyłania danych na serwer. Cały stan istnieje w pamięci karty przeglądarki.
3. **Prosta technologia:** czysty HTML, CSS i JavaScript, bez frameworków i bez procesu budowania. Aplikacja musi działać po dwukrotnym kliknięciu `index.html` (dlatego scenariusze są w pliku `.js`, a nie `.json`).
4. **Treść oddzielona od kodu.** Scenariusze dopisujesz wyłącznie w `js/scenariusze.js`. Nie wpisuj treści scenariuszy do `app.js` ani `index.html`.
5. **Nie zmyślaj przepisów ani źródeł.** Każde odwołanie prawne musi wskazywać istniejący akt i jednostkę redakcyjną. W razie wątpliwości oznacz miejsce komentarzem `// DO WERYFIKACJI` i zapytaj autorkę. Źródła naukowe w stylu APA 7.
6. **Wszystkie organizacje i osoby w scenariuszach są fikcyjne** — nie używaj nazw realnych marek ani osób.
7. Po każdym działającym etapie zaproponuj commit.

## Struktura plików
```
index.html            – struktura trzech ekranów (start, scenariusz, wynik) i okno „O projekcie”
css/styles.css        – wygląd, tryb jasny i ciemny, wersja mobilna
js/scenariusze.js     – TREŚĆ scenariuszy (tu dopisujemy nowe)
js/profile.js         – konfiguracja, osie, opisy profili i reguła przypisania profilu
js/app.js             – logika aplikacji
.claude/commands/nowy-scenariusz.md – komenda /nowy-scenariusz
```

## Model scenariusza
Każdy scenariusz ma pola: `id`, `tytul`, `obszar`, `kontekst`, `sytuacja`, `pytanie`, `opcje` (4 opcje), `etyka`, `podstawaPrawna` (lista `{akt, przepis, opis}`), `wniosek`.

Każda opcja ma: `id`, `tresc`, `ocena` (`rekomendowana` | `dopuszczalna` | `ryzykowna` | `niezgodna`), `punkty` (osie `prawo`, `transparentnosc`, `autonomia`, `biznes`, skala od −2 do +2), `uzasadnienie`.

Reguły równowagi scenariusza:
- dokładnie jedna opcja `rekomendowana`;
- co najmniej jedna opcja `niezgodna` albo `ryzykowna`;
- opcja „najbardziej opłacalna” nie może być rekomendowana — scenariusz ma zawierać napięcie między wynikiem a zasadami;
- kolejność opcji różna w kolejnych scenariuszach (rekomendowana nie zawsze pod tą samą literą).

## Scenariusze w aplikacji
| Nr | Tytuł | Główne odniesienie |
|----|-------|--------------------|
| 1 | Twarz kampanii, której już nie ma | AI Act art. 50 ust. 4; pr. aut. art. 81; KC art. 23–24 |
| 2 | „Anna” z działu obsługi | AI Act art. 50 ust. 1 i 5 |
| 3 | Baza CRM w darmowym czacie | RODO art. 28, 5, 33 |
| 4 | Algorytm, który wie za dużo | RODO art. 9; TSUE C-184/20 |
| 5 | Klient „niskiej wartości” | RODO art. 22; TSUE C-634/21; AI Act zał. III |
| 6 | Kampania „ostatnia szansa” | AI Act art. 5; upnpr art. 8 |
| 7 | Czterdzieści zachwyconych klientek | upnpr art. 7 pkt 23a–23b |
| 8 | Licencje kupione, zasad brak | AI Act art. 4; RODO art. 24, 28, 32 |

Do weryfikacji przez autorkę przed zajęciami: aktualne brzmienie art. 4 AI Act po nowelizacji z 2026 r. oraz numeracja art. 7 pkt 23a–23b ustawy o przeciwdziałaniu nieuczciwym praktykom rynkowym.

Źródło merytoryczne: poradnik „Wolno czy warto? Etyka i prawo sztucznej inteligencji w marketingu” (folder `boss8`).

## Stan prawny
Według poradnika: 27 września 2026 r. Terminy stosowania przepisów AI Act zmieniały się — przed publikacją każdej wersji zweryfikuj je w Dzienniku Urzędowym UE.
