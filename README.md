# BOSS GWARDIA — Kompas Etyki AI

Interaktywny symulator decyzji etycznych i prawnych dotyczących sztucznej inteligencji w marketingu. Materiał dydaktyczny do przedmiotu *AI w marketingu* (Uniwersytet WSB Merito).

**Wersja 0.2:** komplet ośmiu scenariuszy.

## Jak uruchomić
Kliknij dwukrotnie plik `index.html`. Aplikacja nie wymaga instalacji, serwera ani internetu (poza czcionkami Google Fonts, bez których też działa).

## Ochrona danych
Brak logowania, kont, plików cookies, analityki i przesyłania danych. Odpowiedzi istnieją wyłącznie w pamięci otwartej karty przeglądarki.

## Jak dodać scenariusz
W Claude Code wpisz:
```
/nowy-scenariusz opinie klientów generowane przez AI
```
Albo ręcznie dopisz obiekt na końcu tablicy w `js/scenariusze.js` — liczba scenariuszy, pasek postępu i skala profilu przeliczą się same.

## Struktura
| Plik | Zawartość |
|------|-----------|
| `index.html` | ekrany: start, scenariusz, wynik; okno „O projekcie” |
| `css/styles.css` | wygląd, tryb jasny/ciemny, wersja mobilna |
| `js/scenariusze.js` | treść scenariuszy |
| `js/profile.js` | osie, profile i reguła ich przypisania |
| `js/app.js` | logika aplikacji |

## Zastrzeżenie
Materiał edukacyjny — nie stanowi porady prawnej. Wszystkie organizacje i osoby w scenariuszach są fikcyjne.
