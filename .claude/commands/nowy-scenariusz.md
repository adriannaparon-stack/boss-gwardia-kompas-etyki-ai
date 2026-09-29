---
description: Dopisuje nowy scenariusz do Kompasu Etyki AI w stałym formacie
argument-hint: [temat scenariusza, np. "opinie klientów generowane przez AI"]
---

Dopisz nowy scenariusz do pliku `js/scenariusze.js` na temat: **$ARGUMENTS**

Postępuj w tej kolejności:

1. Przeczytaj `CLAUDE.md` oraz istniejące scenariusze w `js/scenariusze.js`, aby zachować styl, długość tekstów i poziom szczegółowości.
2. Zanim cokolwiek zapiszesz, pokaż mi **szkic scenariusza** do akceptacji:
   - tytuł, obszar, kontekst (fikcyjna organizacja), sytuacja, pytanie;
   - cztery opcje z oceną i punktacją na czterech osiach (−2 do +2);
   - uzasadnienie każdej opcji, perspektywa etyczna, podstawa prawna, wniosek.
3. Sprawdź reguły równowagi z `CLAUDE.md` (jedna opcja rekomendowana, napięcie między wynikiem a zasadami, inna pozycja opcji rekomendowanej niż w poprzednim scenariuszu).
4. Każde odwołanie prawne musi wskazywać istniejący akt i przepis. Jeśli nie masz pewności, oznacz je jako `// DO WERYFIKACJI` i powiedz mi o tym.
5. Po mojej akceptacji dopisz scenariusz **na końcu tablicy** `window.KOMPAS_SCENARIUSZE` (pamiętaj o przecinku po poprzednim obiekcie), z kolejnym `id` (`s04`, `s05` …).
6. Nie zmieniaj `app.js`, `profile.js` ani `index.html`.
7. Na koniec sprawdź, czy plik nie ma błędów składni (np. uruchom `node -e "require('./js/scenariusze.js')"` z obiektem `window` lub otwórz `index.html`), i zaproponuj commit: `Dodano scenariusz: <tytuł>`.
