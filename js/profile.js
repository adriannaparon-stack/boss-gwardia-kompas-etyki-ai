/*
 * BOSS GWARDIA — Kompas Etyki AI
 * Definicje osi i profili oraz reguła przypisania profilu.
 */

window.KOMPAS_KONFIG = {
  nazwa: "BOSS GWARDIA — Kompas Etyki AI",
  wersja: "0.2 · komplet ośmiu scenariuszy",
  planowanaLiczbaScenariuszy: 8,
  stanPrawny: "Stan prawny według poradnika do przedmiotu: 27 września 2026 r. Przed zajęciami należy zweryfikować aktualne brzmienie i terminy stosowania przepisów."
};

window.KOMPAS_OSIE = [
  { klucz: "prawo", nazwa: "Zgodność z prawem", krotko: "Prawo" },
  { klucz: "transparentnosc", nazwa: "Transparentność wobec odbiorcy", krotko: "Transparentność" },
  { klucz: "autonomia", nazwa: "Poszanowanie autonomii i danych", krotko: "Autonomia i dane" },
  { klucz: "biznes", nazwa: "Skuteczność biznesowa", krotko: "Biznes" }
];

window.KOMPAS_PROFILE = {
  nawigator: {
    nazwa: "Zrównoważony Nawigator",
    symbol: "✦",
    opis:
      "Twoje decyzje łączą zgodność z prawem, szacunek dla odbiorców i realizm biznesowy. Szukasz rozwiązań, które pozwalają osiągnąć cel bez przerzucania kosztów na klientów lub osoby trzecie.",
    mocnaStrona: "Umiejętność znajdowania trzeciej drogi między „wszystko wolno” a „nic nie róbmy”.",
    naCoUwazac: "Kompromis wymaga czasu. W sytuacjach presji terminów warto mieć gotowe procedury i szablony, aby nie wracać do starych nawyków."
  },
  straznik: {
    nazwa: "Strażnik Zgodności",
    symbol: "⚖",
    opis:
      "W Twoich decyzjach dominuje troska o zgodność z przepisami. Dobrze rozpoznajesz ryzyka prawne i nie pozwalasz, by presja wyniku przesłoniła obowiązki organizacji.",
    mocnaStrona: "Chronisz organizację przed sankcjami i roszczeniami.",
    naCoUwazac: "Prawo wyznacza minimum, a nie pełny standard. Zadaj sobie pytanie, czy decyzja jest również uczciwa wobec odbiorców — i czy nie rezygnujesz zbyt łatwo z bezpiecznych korzyści."
  },
  etyk: {
    nazwa: "Etyk Zasad",
    symbol: "◈",
    opis:
      "Kierujesz się przede wszystkim przejrzystością i szacunkiem dla autonomii odbiorców. Pytasz nie tylko „czy wolno?”, lecz także „czy warto?” i „jak odbiorą to ludzie, których to dotyczy?”.",
    mocnaStrona: "Budujesz długofalowe zaufanie do marki.",
    naCoUwazac: "Zasady etyczne warto przekładać na rozwiązania wykonalne w realiach budżetu i terminów — wtedy łatwiej przekonać do nich zespół i klienta."
  },
  pragmatyk: {
    nazwa: "Pragmatyk Rynkowy",
    symbol: "➶",
    opis:
      "Twoje decyzje są nastawione na wynik: czas, koszt i efekt kampanii. Co do zasady mieścisz się w granicach prawa, ale część wyborów przesuwa ciężar ryzyka na odbiorców.",
    mocnaStrona: "Myślisz o realnych ograniczeniach projektu i skuteczności działań.",
    naCoUwazac: "Zysk osiągnięty kosztem przejrzystości bywa krótkotrwały. Sprawdź swoje decyzje testem publiczności: czy spokojnie wyjaśnisz je klientowi i dziennikarzowi?"
  },
  ryzykant: {
    nazwa: "Ryzykant",
    symbol: "⚠",
    opis:
      "W Twoich decyzjach cel biznesowy wielokrotnie wygrywał z obowiązkami prawnymi. W realnym projekcie oznaczałoby to istotne ryzyko sankcji, roszczeń i kryzysu zaufania.",
    mocnaStrona: "Odwaga i nastawienie na działanie — cenne, gdy idą w parze z rozpoznaniem ryzyka.",
    naCoUwazac: "Przed każdą decyzją z użyciem AI zadaj trzy pytania: czy mamy podstawę prawną, czy odbiorca wie, że ma do czynienia z AI, i czy osoba, której dane lub wizerunek wykorzystujemy, się na to zgodziła."
  }
};

/*
 * Reguła przypisania profilu.
 * Wyniki osi są normalizowane do skali 0–100 względem minimalnej i maksymalnej
 * możliwej sumy punktów, dlatego reguła działa przy dowolnej liczbie scenariuszy.
 */
window.KOMPAS_WYZNACZ_PROFIL = function (wynikiProcentowe) {
  var w = wynikiProcentowe;
  if (w.prawo < 40) return "ryzykant";

  // Nawigator: wysoki poziom zgodności i etyki przy zachowaniu realizmu biznesowego.
  // Rozwiązania rekomendowane celowo „kosztują” (czas, budżet), dlatego próg dla osi biznesowej jest niższy.
  if (w.prawo >= 80 && Math.min(w.transparentnosc, w.autonomia) >= 75 && w.biznes >= 40) return "nawigator";

  var etyka = (w.transparentnosc + w.autonomia) / 2;
  if (w.biznes >= Math.max(w.prawo, etyka)) return "pragmatyk";
  if (etyka > w.prawo) return "etyk";
  return "straznik";
};
