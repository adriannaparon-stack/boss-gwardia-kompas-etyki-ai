/*
 * BOSS GWARDIA — Kompas Etyki AI
 * Plik z treścią scenariuszy.
 *
 * Aby dodać scenariusz: dopisz kolejny obiekt na końcu tablicy
 * (najlepiej komendą /nowy-scenariusz w Claude Code).
 * Aplikacja sama policzy liczbę scenariuszy i skalę profilu.
 *
 * Osie profilu (klucze w polu "punkty"), skala od -2 do +2:
 *   prawo           – zgodność z prawem
 *   transparentnosc – transparentność wobec odbiorcy
 *   autonomia       – poszanowanie autonomii osób i ich danych
 *   biznes          – skuteczność biznesowa (koszt, czas, wynik)
 *
 * Oceny opcji: "rekomendowana" | "dopuszczalna" | "ryzykowna" | "niezgodna"
 *
 * Wszystkie organizacje i osoby w scenariuszach są fikcyjne.
 */

window.KOMPAS_SCENARIUSZE = [
  {
    id: "s01",
    tytul: "Twarz kampanii, której już nie ma",
    obszar: "AI Act · art. 50 | wizerunek i głos",
    kontekst:
      "Pracujesz w agencji obsługującej markę kosmetyczną „Lumina Naturals” (fikcyjną). Umowa z dotychczasową ambasadorką marki wygasła pół roku temu. Budżet kampanii jesiennej jest niewielki, a termin publikacji przypada za tydzień.",
    sytuacja:
      "Grafik proponuje, aby zamiast nowej sesji wygenerować w narzędziu AI wideo, w którym ambasadorka — odtworzona na podstawie archiwalnych materiałów — prezentuje nowy produkt własnym, sklonowanym głosem. Próbka wygląda bardzo realistycznie.",
    pytanie: "Jaką decyzję rekomendujesz klientowi?",
    opcje: [
      {
        id: "a",
        tresc:
          "Publikujemy. Wizerunek ambasadorki był już wykorzystywany w naszych kampaniach, a jakość materiału jest znakomita.",
        ocena: "niezgodna",
        punkty: { prawo: -2, transparentnosc: -2, autonomia: -2, biznes: 1 },
        uzasadnienie:
          "Wcześniejsza współpraca nie daje prawa do dalszego wykorzystywania wizerunku. Rozpowszechnianie wizerunku wymaga zezwolenia osoby na nim przedstawionej — dotyczy to także wizerunku odtworzonego syntetycznie. Głos jest chroniony jako dobro osobiste, a jego klonowanie wymaga zgody. Materiał stanowi ponadto deepfake, którego sztuczne pochodzenie należy ujawnić. Krótkoterminowa oszczędność niesie ryzyko roszczeń i kryzysu wizerunkowego."
      },
      {
        id: "b",
        tresc:
          "Publikujemy, ale z wyraźnym dopiskiem „Wideo wygenerowane przez AI”.",
        ocena: "ryzykowna",
        punkty: { prawo: -1, transparentnosc: 1, autonomia: -2, biznes: 1 },
        uzasadnienie:
          "Oznaczenie realizuje obowiązek przejrzystości wobec odbiorców, ale nie zastępuje zgody osoby, której wizerunek i głos wykorzystano. To dwa odrębne obowiązki: jeden chroni odbiorcę przed wprowadzeniem w błąd, drugi — osobę przedstawioną przed utratą kontroli nad własnym wizerunkiem."
      },
      {
        id: "c",
        tresc:
          "Kontaktujemy się z ambasadorką i proponujemy nową umowę obejmującą zgodę na syntetyczny wizerunek i głos, z określeniem zakresu, pól eksploatacji i czasu. Gotowy materiał oznaczamy jako wygenerowany przez AI.",
        ocena: "rekomendowana",
        punkty: { prawo: 2, transparentnosc: 2, autonomia: 2, biznes: 0 },
        uzasadnienie:
          "Rozwiązanie łączy zgodę osoby przedstawionej z przejrzystością wobec odbiorców. Wymaga dodatkowego czasu i kosztu negocjacji, lecz tworzy trwałą podstawę prawną i buduje zaufanie — zarówno ambasadorki, jak i klientów marki."
      },
      {
        id: "d",
        tresc:
          "Rezygnujemy z wizerunku ambasadorki i tworzymy od podstaw fikcyjną postać AI, niepodobną do żadnej realnej osoby, wyraźnie oznaczoną jako wirtualna.",
        ocena: "dopuszczalna",
        punkty: { prawo: 1, transparentnosc: 2, autonomia: 1, biznes: 1 },
        uzasadnienie:
          "To zgodna z prawem alternatywa, o ile postać nie przypomina istniejącej osoby, licencja narzędzia dopuszcza użytek komercyjny, a odbiorcy wiedzą, że mają do czynienia z postacią wirtualną. Należy jednak uwzględnić, że wirtualna twarz marki inaczej buduje wiarygodność niż rzeczywista ambasadorka."
      }
    ],
    etyka:
      "Z perspektywy etycznej kluczowa jest autonomia osoby przedstawionej: wizerunek i głos są elementami tożsamości, a nie zasobem marki. Test publiczności pomaga ocenić sytuację — czy potrafilibyśmy spokojnie wyjaśnić tę decyzję samej ambasadorce i dziennikarzowi?",
    podstawaPrawna: [
      {
        akt: "Rozporządzenie (UE) 2024/1689 (AI Act)",
        przepis: "art. 50 ust. 4",
        opis: "Obowiązek ujawnienia, że treść stanowiąca deepfake została wygenerowana lub zmanipulowana przez AI."
      },
      {
        akt: "Ustawa o prawie autorskim i prawach pokrewnych",
        przepis: "art. 81 ust. 1",
        opis: "Rozpowszechnianie wizerunku wymaga zezwolenia osoby na nim przedstawionej."
      },
      {
        akt: "Kodeks cywilny",
        przepis: "art. 23–24",
        opis: "Ochrona dóbr osobistych, w tym głosu, i roszczenia z tytułu ich naruszenia."
      }
    ],
    wniosek:
      "Oznaczenie treści i zgoda osoby przedstawionej to dwa niezależne obowiązki. Spełnienie jednego nie zwalnia z drugiego."
  },

  {
    id: "s02",
    tytul: "„Anna” z działu obsługi",
    obszar: "AI Act · art. 50 | chatboty",
    kontekst:
      "Sklep internetowy z elektroniką „VoltPunkt” (fikcyjny) wdraża chatbota obsługi klienta. Odpowiadasz za komunikację marki.",
    sytuacja:
      "Dział sprzedaży chce, aby chatbot przedstawiał się jako „Anna z działu obsługi” i miał zdjęcie profilowe realnie wyglądającej kobiety. Wewnętrzny test pokazał, że klienci, którzy sądzą, że piszą z człowiekiem, częściej finalizują zakup.",
    pytanie: "Jak skonfigurujesz sposób przedstawiania się chatbota?",
    opcje: [
      {
        id: "a",
        tresc:
          "Wdrażamy „Annę” bez informacji, że jest AI. Wyniki testu są jednoznaczne, a klienci i tak otrzymują rzetelną pomoc.",
        ocena: "niezgodna",
        punkty: { prawo: -2, transparentnosc: -2, autonomia: -1, biznes: 2 },
        uzasadnienie:
          "Systemy przeznaczone do interakcji z ludźmi muszą być projektowane tak, aby użytkownik wiedział, że komunikuje się z AI — chyba że jest to oczywiste z kontekstu. Tu jest wręcz przeciwnie: celem konfiguracji jest wywołanie przekonania, że rozmówcą jest człowiek. Wzrost konwersji osiągnięty przez wprowadzenie w błąd grozi utratą zaufania, gdy klienci odkryją prawdę."
      },
      {
        id: "b",
        tresc:
          "Persona „Anna” zostaje, ale już w pierwszej wiadomości przedstawia się jako wirtualna asystentka AI i informuje, że w każdej chwili można przejść do rozmowy z konsultantem.",
        ocena: "rekomendowana",
        punkty: { prawo: 2, transparentnosc: 2, autonomia: 2, biznes: 1 },
        uzasadnienie:
          "Persona marki jest dopuszczalna, jeśli nie służy podszywaniu się pod człowieka. Informacja przekazana najpóźniej przy pierwszej interakcji, w jasny i wyraźny sposób, spełnia wymóg przejrzystości, a możliwość przejścia do konsultanta chroni autonomię klienta. Zachowujemy przy tym przyjazny styl komunikacji."
      },
      {
        id: "c",
        tresc:
          "„Anna” nie mówi, że jest AI, ale informację o chatbocie umieszczamy w regulaminie sklepu.",
        ocena: "ryzykowna",
        punkty: { prawo: -1, transparentnosc: -1, autonomia: -1, biznes: 2 },
        uzasadnienie:
          "Informacja ukryta w regulaminie nie jest przekazana w sposób jasny i wyraźny w momencie pierwszej interakcji. Formalnie „gdzieś jest”, ale w praktyce nie dociera do odbiorcy, więc nie realizuje ani celu przepisu, ani zasady transparentności."
      },
      {
        id: "d",
        tresc:
          "Rezygnujemy z chatbota. Nie chcemy ryzykować sporu o przejrzystość.",
        ocena: "dopuszczalna",
        punkty: { prawo: 1, transparentnosc: 0, autonomia: 0, biznes: -2 },
        uzasadnienie:
          "Decyzja jest bezpieczna, lecz nadmiernie zachowawcza. Prawo nie zakazuje chatbotów — wymaga przejrzystości. Rezygnacja z narzędzia oznacza utratę korzyści (dostępność obsługi przez całą dobę), których można było bezpiecznie osiągnąć."
      }
    ],
    etyka:
      "W teście etycznej perswazji TARES kryterium autentyczności wymaga, by nadawca nie ukrywał swojej tożsamości i intencji. Chatbot udający człowieka narusza to kryterium niezależnie od jakości udzielanych odpowiedzi.",
    podstawaPrawna: [
      {
        akt: "Rozporządzenie (UE) 2024/1689 (AI Act)",
        przepis: "art. 50 ust. 1",
        opis: "Systemy AI przeznaczone do interakcji z osobami fizycznymi projektuje się tak, aby osoby te były informowane o interakcji z AI, chyba że jest to oczywiste."
      },
      {
        akt: "Rozporządzenie (UE) 2024/1689 (AI Act)",
        przepis: "art. 50 ust. 5",
        opis: "Informację przekazuje się w jasny i wyraźny sposób, najpóźniej w momencie pierwszej interakcji."
      },
      {
        akt: "Ustawa o przeciwdziałaniu nieuczciwym praktykom rynkowym",
        przepis: "art. 4–5",
        opis: "Zakaz praktyk wprowadzających konsumenta w błąd."
      }
    ],
    wniosek:
      "Persona marki — tak. Podszywanie się pod człowieka — nie. O przejrzystości decyduje pierwsza wiadomość, a nie regulamin."
  },

  {
    id: "s03",
    tytul: "Baza CRM w darmowym czacie",
    obszar: "RODO | powierzenie danych",
    kontekst:
      "Agencja „Kreatywna Fala” (fikcyjna) prowadzi kampanię e-mailową dla biura podróży. Koordynujesz projekt. Biuro podróży jest administratorem danych swoich klientów, a agencja — podmiotem przetwarzającym na podstawie umowy powierzenia.",
    sytuacja:
      "Specjalistka z zespołu chce szybko podzielić bazę 4000 klientów (imiona, e-maile, historia wyjazdów) na segmenty. Zamierza wkleić cały plik do bezpłatnego, prywatnego konta w popularnym czacie AI. Wynik jest potrzebny na jutro.",
    pytanie: "Jak reagujesz?",
    opcje: [
      {
        id: "a",
        tresc:
          "Pozwalamy. Narzędzie jest powszechnie używane, a termin nie pozwala na inne rozwiązanie.",
        ocena: "niezgodna",
        punkty: { prawo: -2, transparentnosc: -1, autonomia: -2, biznes: 2 },
        uzasadnienie:
          "Dostawca czatu staje się dalszym podmiotem przetwarzającym, a to wymaga zgody administratora na podpowierzenie i umowy powierzenia (DPA). Konta konsumenckie zazwyczaj jej nie obejmują, a o wykorzystaniu treści do trenowania modeli decydują ustawienia użytkownika. Brak jednego ogniwa oznacza brak podstawy dla całego przepływu danych. Jeżeli plik został już przesłany, należy potraktować to jako możliwe naruszenie i bez zbędnej zwłoki poinformować administratora."
      },
      {
        id: "b",
        tresc:
          "Najpierw prosimy czat o zanonimizowanie pliku, a dopiero potem o segmentację.",
        ocena: "ryzykowna",
        punkty: { prawo: -2, transparentnosc: 0, autonomia: -1, biznes: 1 },
        uzasadnienie:
          "Prośba o anonimizację skierowana do modelu oznacza, że oryginalny plik z danymi osobowymi został już przesłany. Anonimizację wykonuje się przed wysłaniem, nie po nim."
      },
      {
        id: "c",
        tresc:
          "Usuwamy imiona i e-maile, a miasto, wiek i historię wyjazdów wklejamy do prywatnego konta.",
        ocena: "ryzykowna",
        punkty: { prawo: -1, transparentnosc: 0, autonomia: 0, biznes: 1 },
        uzasadnienie:
          "To krok we właściwą stronę, ale niewystarczający. Kombinacja pozornie neutralnych cech (miasto, wiek, konkretne wyjazdy) w bazie klientów może pozwolić na identyfikację osoby, więc dane mogą nadal być danymi osobowymi. Problem braku umowy powierzenia z dostawcą narzędzia pozostaje nierozwiązany."
      },
      {
        id: "d",
        tresc:
          "Wstrzymujemy działanie. Model otrzymuje wyłącznie strukturę danych (nagłówki i jeden fikcyjny wiersz) i na tej podstawie pomaga przygotować regułę segmentacji. Samą segmentację wykonujemy lokalnie albo na koncie firmowym z umową powierzenia, za zgodą administratora.",
        ocena: "rekomendowana",
        punkty: { prawo: 2, transparentnosc: 1, autonomia: 2, biznes: 1 },
        uzasadnienie:
          "Zasada robocza: model dostaje strukturę, nie dane. Pozwala to wykorzystać AI do zaprojektowania segmentacji bez przekazywania danych osobowych poza łańcuch powierzenia. Termin pozostaje realny, a organizacja zachowuje rozliczalność."
      }
    ],
    etyka:
      "Koncepcja integralności kontekstowej H. Nissenbaum wskazuje, że przepływ informacji jest właściwy, gdy odpowiada normom kontekstu, w którym dane powierzono. Klient biura podróży podał swoje dane, aby zorganizować wyjazd — nie po to, by trafiły do prywatnego konta pracownicy agencji w zewnętrznym narzędziu.",
    podstawaPrawna: [
      {
        akt: "Rozporządzenie (UE) 2016/679 (RODO)",
        przepis: "art. 28 ust. 2 i 3",
        opis: "Podpowierzenie wymaga uprzedniej zgody administratora, a przetwarzanie — umowy określającej obowiązki podmiotu przetwarzającego."
      },
      {
        akt: "Rozporządzenie (UE) 2016/679 (RODO)",
        przepis: "art. 5 ust. 1 lit. b i c",
        opis: "Zasady ograniczenia celu i minimalizacji danych."
      },
      {
        akt: "Rozporządzenie (UE) 2016/679 (RODO)",
        przepis: "art. 33 ust. 2",
        opis: "Podmiot przetwarzający bez zbędnej zwłoki zgłasza administratorowi stwierdzone naruszenie ochrony danych."
      }
    ],
    wniosek:
      "Model dostaje strukturę, nie dane. Anonimizację wykonuje się przed wysłaniem — nigdy przez to samo narzędzie, któremu chcemy dane chronić."
  },

  {
    id: "s04",
    tytul: "Algorytm, który wie za dużo",
    obszar: "RODO · art. 9 | dane o zdrowiu",
    kontekst:
      "Drogeria internetowa „Zielony Koszyk” (fikcyjna) rozwija personalizację oferty. Jesteś odpowiedzialny/odpowiedzialna za kampanie e-mailowe.",
    sytuacja:
      "Zespół analityczny chwali się nowym modelem AI: na podstawie historii zakupów (np. witaminy prenatalne, testy, produkty bezglutenowe) z dużym prawdopodobieństwem rozpoznaje ciążę, cukrzycę lub celiakię klientek i klientów. Proponuje automatyczne segmenty i spersonalizowane mailingi, np. „Gratulujemy! Przygotowaliśmy ofertę dla przyszłej mamy”.",
    pytanie: "Jak wykorzystasz możliwości modelu?",
    opcje: [
      {
        id: "a",
        tresc:
          "Nie wnioskujemy o zdrowiu z zakupów. Tworzymy centrum preferencji, w którym klienci sami wybierają interesujące ich kategorie (np. „mama i dziecko”, „dieta bezglutenowa”) i wyrażają wyraźną zgodę na dopasowanie oferty; zgodę można w każdej chwili wycofać.",
        ocena: "rekomendowana",
        punkty: { prawo: 2, transparentnosc: 2, autonomia: 2, biznes: 1 },
        uzasadnienie:
          "Klient sam decyduje, jakie informacje o sobie ujawnia i w jakim celu. Wyraźna zgoda jest podstawą, która pozwala przetwarzać dane szczególnej kategorii w celach marketingowych. Personalizacja pozostaje możliwa, a relacja z klientem opiera się na zaufaniu, a nie na zaskoczeniu."
      },
      {
        id: "b",
        tresc:
          "Uruchamiamy automatyczne segmenty „prawdopodobna ciąża”, „prawdopodobna cukrzyca” itd. i wysyłamy spersonalizowane oferty. Dane o zakupach i tak mamy.",
        ocena: "niezgodna",
        punkty: { prawo: -2, transparentnosc: -2, autonomia: -2, biznes: 2 },
        uzasadnienie:
          "Wnioskowanie o stanie zdrowia na podstawie zakupów oznacza tworzenie danych dotyczących zdrowia — szczególnej kategorii danych, której przetwarzanie jest co do zasady zakazane, chyba że zachodzi jeden z wyjątków (w marketingu praktycznie tylko wyraźna zgoda). Trybunał Sprawiedliwości UE uznał, że ochrona szczególnych kategorii obejmuje także dane, które ujawniają takie informacje pośrednio. Mailing „Gratulujemy!” może ponadto ujawnić ciążę innym domownikom korzystającym z tej samej skrzynki."
      },
      {
        id: "c",
        tresc:
          "Segmenty tworzymy, ale w komunikacji nie wspominamy o ciąży ani chorobie — produkty dopasowane do segmentu „wtapiamy” między inne, żeby klient nie zauważył personalizacji.",
        ocena: "ryzykowna",
        punkty: { prawo: -2, transparentnosc: -2, autonomia: -1, biznes: 1 },
        uzasadnienie:
          "Ukrycie personalizacji nie zmienia faktu, że dane o zdrowiu są przetwarzane bez podstawy prawnej — zmienia jedynie to, że klient się o tym nie dowie. Rozwiązanie łączy naruszenie RODO z celowym ograniczeniem przejrzystości, co przy ujawnieniu praktyki grozi poważnym kryzysem zaufania."
      },
      {
        id: "d",
        tresc:
          "Rezygnujemy z modelu. Personalizujemy wyłącznie na podstawie kategorii kupowanych produktów (np. „kosmetyki dla dzieci”), bez wnioskowania o zdrowiu, na podstawie prawnie uzasadnionego interesu i z łatwym prawem sprzeciwu.",
        ocena: "dopuszczalna",
        punkty: { prawo: 1, transparentnosc: 1, autonomia: 1, biznes: 0 },
        uzasadnienie:
          "Rozwiązanie jest znacznie bezpieczniejsze, lecz wymaga ostrożności: także proste kategorie produktowe mogą pośrednio ujawniać informacje o zdrowiu. Konieczny jest test równowagi, jasna informacja o profilowaniu i realne prawo sprzeciwu wobec marketingu bezpośredniego."
      }
    ],
    etyka:
      "To, że organizacja może się czegoś dowiedzieć o kliencie, nie oznacza, że klient godzi się na to, by o tym wiedziała. Z perspektywy integralności kontekstowej zakup w drogerii nie jest zgodą na diagnozę. Warto zadać pytanie: jak poczuje się klientka, która o swojej ciąży dowie się z reklamy, zanim powie o niej bliskim?",
    podstawaPrawna: [
      {
        akt: "Rozporządzenie (UE) 2016/679 (RODO)",
        przepis: "art. 4 pkt 15 oraz art. 9 ust. 1 i ust. 2 lit. a",
        opis: "Dane dotyczące zdrowia jako szczególna kategoria danych; zakaz przetwarzania z wyjątkiem m.in. wyraźnej zgody."
      },
      {
        akt: "Rozporządzenie (UE) 2016/679 (RODO)",
        przepis: "art. 21 ust. 2–3",
        opis: "Prawo sprzeciwu wobec przetwarzania, w tym profilowania, na potrzeby marketingu bezpośredniego."
      },
      {
        akt: "Wyrok TSUE z 1 sierpnia 2022 r.",
        przepis: "C-184/20, OT, EU:C:2022:601",
        opis: "Dane mogące pośrednio ujawniać informacje szczególnej kategorii podlegają ochronie przewidzianej w art. 9 RODO."
      }
    ],
    wniosek:
      "Wnioskowanie o zdrowiu to tworzenie danych o zdrowiu. Najlepsza personalizacja to taka, o którą klient sam poprosił."
  },

  {
    id: "s05",
    tytul: "Klient „niskiej wartości”",
    obszar: "RODO · art. 22 | profilowanie i decyzje automatyczne",
    kontekst:
      "Sklep modowy „ModaNova” (fikcyjny) wraz z partnerem finansowym oferuje płatność odroczoną „kup teraz, zapłać za 30 dni”. Koordynujesz wdrożenie nowego modelu AI w dziale e-commerce.",
    sytuacja:
      "Model ocenia każdego klienta na podstawie historii zakupów, zwrotów, urządzenia i lokalizacji. Klientom z niską oceną automatycznie wyłącza płatność odroczoną i nie wyświetla kodów rabatowych. Zarząd chce wdrożyć rozwiązanie od razu, bo ogranicza straty.",
    pytanie: "Jak ma działać system?",
    opcje: [
      {
        id: "a",
        tresc:
          "Wdrażamy w pełni automatycznie i bez komunikatu. Klient po prostu nie zobaczy opcji płatności odroczonej ani rabatu.",
        ocena: "niezgodna",
        punkty: { prawo: -2, transparentnosc: -2, autonomia: -2, biznes: 2 },
        uzasadnienie:
          "Odmowa płatności odroczonej, czyli formy kredytowania, podjęta wyłącznie automatycznie istotnie wpływa na sytuację klienta. Taka decyzja wymaga szczególnej podstawy i gwarancji: prawa do interwencji człowieka, do wyrażenia stanowiska i do zakwestionowania decyzji. Klient musi też otrzymać istotne informacje o logice przetwarzania. Ukryta odmowa uniemożliwia skorzystanie z tych praw. Dodatkowo cechy takie jak lokalizacja czy typ urządzenia mogą pośrednio dyskryminować określone grupy."
      },
      {
        id: "b",
        tresc:
          "Rezygnujemy z modelu. Wszyscy klienci mają te same warunki, a ryzyko ograniczamy jednolitym limitem kwoty płatności odroczonej.",
        ocena: "dopuszczalna",
        punkty: { prawo: 2, transparentnosc: 1, autonomia: 1, biznes: -1 },
        uzasadnienie:
          "Rozwiązanie jest proste, przejrzyste i równe dla wszystkich, ale rezygnuje z narzędzia, które przy odpowiednich gwarancjach mogłoby legalnie ograniczać straty. To bezpieczny wybór, lecz nie jedyny zgodny z prawem."
      },
      {
        id: "c",
        tresc:
          "Model tylko rekomenduje. Każdą odmowę płatności odroczonej weryfikuje pracownik partnera finansowego; klient otrzymuje zrozumiałą informację o tym, że stosujemy ocenę, jakie czynniki bierze pod uwagę, i może poprosić o ponowne rozpatrzenie. Rabaty pozostają takie same dla wszystkich, a model przechodzi test na obecność uprzedzeń.",
        ocena: "rekomendowana",
        punkty: { prawo: 2, transparentnosc: 2, autonomia: 2, biznes: 1 },
        uzasadnienie:
          "Udział człowieka w decyzji, przejrzysta informacja i możliwość odwołania realizują gwarancje z RODO. Oddzielenie oceny ryzyka kredytowego od polityki rabatowej ogranicza nieuzasadnione różnicowanie klientów. Warto pamiętać, że systemy AI do oceny zdolności kredytowej osób fizycznych są w AI Act zaliczane do systemów wysokiego ryzyka."
      },
      {
        id: "d",
        tresc:
          "Decyzje zostają automatyczne, ale dodajemy formularz „Odwołaj się”, na który odpowiada ten sam system.",
        ocena: "ryzykowna",
        punkty: { prawo: -1, transparentnosc: 0, autonomia: -1, biznes: 2 },
        uzasadnienie:
          "Formularz stwarza pozór procedury odwoławczej, ale odwołanie rozpatrywane przez ten sam algorytm nie jest interwencją człowieka. Gwarancja pozostaje fikcyjna, a klient może dodatkowo poczuć się wprowadzony w błąd."
      }
    ],
    etyka:
      "Etyczna ocena profilowania wymaga pytania o sprawiedliwość: czy model nie karze klientów za cechy, na które nie mają wpływu (miejsce zamieszkania, starszy telefon)? W teście TARES kryterium równości oznacza, że komunikacja i warunki nie powinny wykorzystywać nierówności informacyjnej między firmą a klientem.",
    podstawaPrawna: [
      {
        akt: "Rozporządzenie (UE) 2016/679 (RODO)",
        przepis: "art. 22 ust. 1 i 3",
        opis: "Prawo do niepodlegania decyzji opartej wyłącznie na zautomatyzowanym przetwarzaniu, w tym profilowaniu; prawo do interwencji ludzkiej, wyrażenia stanowiska i zakwestionowania decyzji."
      },
      {
        akt: "Rozporządzenie (UE) 2016/679 (RODO)",
        przepis: "art. 13 ust. 2 lit. f",
        opis: "Informacja o zautomatyzowanym podejmowaniu decyzji, istotne informacje o zasadach ich podejmowania i przewidywanych konsekwencjach."
      },
      {
        akt: "Wyrok TSUE z 7 grudnia 2023 r.",
        przepis: "C-634/21, SCHUFA Holding (Scoring), EU:C:2023:957",
        opis: "Automatyczne ustalenie wskaźnika punktowego może stanowić decyzję w rozumieniu art. 22 RODO, jeśli w decydującym stopniu przesądza o udzieleniu kredytu."
      },
      {
        akt: "Rozporządzenie (UE) 2024/1689 (AI Act)",
        przepis: "załącznik III pkt 5 lit. b",
        opis: "Systemy AI do oceny zdolności kredytowej osób fizycznych jako systemy wysokiego ryzyka (obowiązki stosowane w późniejszym terminie)."
      }
    ],
    wniosek:
      "Algorytm może doradzać, ale o istotnych sprawach klienta powinien decydować człowiek — a klient ma prawo wiedzieć, że był oceniany, i zakwestionować wynik."
  },

  {
    id: "s06",
    tytul: "Kampania „ostatnia szansa”",
    obszar: "AI Act · art. 5 | praktyki zakazane",
    kontekst:
      "Firma „Vitalis Plus” (fikcyjna) sprzedaje abonamenty na suplementy diety. Agencja, w której pracujesz, przygotowuje dla niej kampanię z wykorzystaniem narzędzia AI.",
    sytuacja:
      "Narzędzie wskazuje, że najwyższą skuteczność dają komunikaty kierowane do osób po 70. roku życia, mieszkających samotnie, wysyłane późnym wieczorem. AI generuje personalizowane treści odwołujące się do lęku o zdrowie („Twoi rówieśnicy już chorują”) i presji czasu („oferta wygasa za 2 godziny”). Rezygnacja z abonamentu wymaga telefonu na płatną infolinię.",
    pytanie: "Co rekomendujesz klientowi?",
    opcje: [
      {
        id: "a",
        tresc:
          "Uruchamiamy kampanię zgodnie z rekomendacją narzędzia. Dane pokazują, że działa, a decyzja zakupowa należy do klienta.",
        ocena: "niezgodna",
        punkty: { prawo: -2, transparentnosc: -2, autonomia: -2, biznes: 2 },
        uzasadnienie:
          "Kampania celowo wykorzystuje słabości wynikające z wieku i sytuacji życiowej odbiorców, aby istotnie zniekształcić ich decyzje w sposób, który może wyrządzić im szkodę. AI Act zakazuje takich praktyk. Sztuczna presja czasu, straszenie chorobą i utrudniona rezygnacja mogą stanowić także agresywną praktykę rynkową. Argument „decyzja należy do klienta” nie działa, gdy cały system zaprojektowano, by tę decyzję zniekształcić."
      },
      {
        id: "b",
        tresc:
          "Rezygnujemy z targetowania na osoby samotne i z wysyłki nocnej, ale komunikaty o lęku i presji czasu zostają — to standard w sprzedaży.",
        ocena: "ryzykowna",
        punkty: { prawo: -1, transparentnosc: -1, autonomia: -1, biznes: 1 },
        uzasadnienie:
          "Ograniczenie targetowania zmniejsza ryzyko, ale nie usuwa mechanizmu manipulacji. Fałszywa presja czasu i straszenie zdrowiem nadal mogą stanowić nieuczciwą praktykę, zwłaszcza wobec odbiorców szczególnie podatnych."
      },
      {
        id: "c",
        tresc:
          "Całkowicie wyłączamy osoby po 70. roku życia z kampanii, żeby uniknąć ryzyka.",
        ocena: "dopuszczalna",
        punkty: { prawo: 1, transparentnosc: 0, autonomia: 0, biznes: -1 },
        uzasadnienie:
          "Rozwiązanie usuwa ryzyko prawne, ale rodzi pytanie o sprawiedliwość: seniorzy są pełnoprawnymi konsumentami i mają prawo do rzetelnej oferty. Problemem nie jest wiek odbiorców, lecz sposób, w jaki się do nich zwracamy."
      },
      {
        id: "d",
        tresc:
          "Kampania może obejmować seniorów, ale bez wykorzystywania ich słabości: komunikat informacyjny, jasna cena i warunki, brak sztucznej presji czasu, rezygnacja tak łatwa jak zakup. Przed publikacją treści przechodzą test TARES i akceptację człowieka.",
        ocena: "rekomendowana",
        punkty: { prawo: 2, transparentnosc: 2, autonomia: 2, biznes: 0 },
        uzasadnienie:
          "Kampania traktuje odbiorców z szacunkiem, dostarcza im informacji potrzebnych do świadomej decyzji i nie zamyka ich w abonamencie. Skuteczność krótkoterminowa może być niższa, ale spada ryzyko skarg, zwrotów i sankcji, a rośnie zaufanie do marki."
      }
    ],
    etyka:
      "Granica między perswazją a manipulacją przebiega tam, gdzie komunikat przestaje odwoływać się do racjonalnych powodów, a zaczyna wykorzystywać lęk, samotność lub brak czasu na namysł. Kryterium szacunku w teście TARES wymaga traktowania odbiorcy jako osoby zdolnej do świadomej decyzji, a nie jako celu do „skonwertowania”.",
    podstawaPrawna: [
      {
        akt: "Rozporządzenie (UE) 2024/1689 (AI Act)",
        przepis: "art. 5 ust. 1 lit. a i b",
        opis: "Zakaz stosowania systemów AI wykorzystujących techniki manipulacyjne lub słabości osób wynikające m.in. z wieku albo szczególnej sytuacji społecznej lub ekonomicznej, w celu lub ze skutkiem istotnego zniekształcenia zachowania, które powoduje lub może powodować poważną szkodę."
      },
      {
        akt: "Ustawa o przeciwdziałaniu nieuczciwym praktykom rynkowym",
        przepis: "art. 8",
        opis: "Agresywne praktyki rynkowe, w tym wywieranie niedopuszczalnego nacisku ograniczającego swobodę wyboru konsumenta."
      }
    ],
    wniosek:
      "AI potrafi znaleźć najsłabszy punkt odbiorcy. Odpowiedzialny marketing nie celuje w słabości, lecz w potrzeby."
  },

  {
    id: "s07",
    tytul: "Czterdzieści zachwyconych klientek",
    obszar: "Prawo konsumenckie | opinie i rekomendacje",
    kontekst:
      "Sklep internetowy „Aroma Dom” (fikcyjny) wprowadza nowy ekspres do kawy. Karta produktu nie ma jeszcze żadnych opinii, a konkurencyjne modele mają ich setki. Prowadzisz marketing sklepu.",
    sytuacja:
      "Specjalista od treści proponuje, by AI wygenerowało 40 zróżnicowanych, realistycznych opinii, podpisanych np. „Klientka z Krakowa” czy „Marek, 34 lata”. Zapewnia, że opisują one wyłącznie prawdziwe cechy ekspresu.",
    pytanie: "Jak budujesz wiarygodność nowego produktu?",
    opcje: [
      {
        id: "a",
        tresc:
          "Publikujemy wygenerowane opinie jako opinie klientów. Skoro opisują prawdziwe cechy produktu, nikt nie jest wprowadzony w błąd.",
        ocena: "niezgodna",
        punkty: { prawo: -2, transparentnosc: -2, autonomia: -1, biznes: 2 },
        uzasadnienie:
          "Zamieszczanie fałszywych opinii konsumentów lub zlecanie ich zamieszczania jest praktyką rynkową uznawaną za nieuczciwą w każdych okolicznościach. Opinie wygenerowane przez AI i przedstawione jako pochodzące od klientów wprowadzają w błąd co do źródła opinii — niezależnie od tego, czy opisane cechy są prawdziwe."
      },
      {
        id: "b",
        tresc:
          "Uruchamiamy program testerski: przekazujemy ekspres grupie klientów, publikujemy ich prawdziwe opinie z informacją, że otrzymali produkt bezpłatnie, i informujemy, w jaki sposób weryfikujemy opinie. AI może najwyżej przygotować oznaczone streszczenie zebranych recenzji.",
        ocena: "rekomendowana",
        punkty: { prawo: 2, transparentnosc: 2, autonomia: 2, biznes: 1 },
        uzasadnienie:
          "Opinie pochodzą od rzeczywistych użytkowników, a odbiorca wie, na jakich warunkach powstały. AI wspiera pracę z prawdziwymi danymi zamiast je zastępować. Wymaga to czasu i kosztu produktów testowych, ale buduje wiarygodność, której nie da się podważyć."
      },
      {
        id: "c",
        tresc:
          "Publikujemy wygenerowane teksty w sekcji opinii, ale każdy oznaczamy dopiskiem „Opinia wygenerowana przez AI”.",
        ocena: "ryzykowna",
        punkty: { prawo: -1, transparentnosc: 1, autonomia: 0, biznes: 1 },
        uzasadnienie:
          "Oznaczenie zmniejsza ryzyko wprowadzenia w błąd, ale sama forma „opinii”, podpisanych fikcyjnymi osobami i umieszczonych w miejscu przeznaczonym na recenzje klientów, nadal sugeruje doświadczenie użytkowników, którego nie było. Taka sekcja nie niesie wartości informacyjnej i może zostać uznana za wprowadzającą w błąd."
      },
      {
        id: "d",
        tresc:
          "Nie publikujemy żadnych opinii, dopóki nie pojawią się prawdziwe. AI pomaga natomiast przygotować rzetelny opis produktu, porównanie z innymi modelami i FAQ, oznaczone jako treści sklepu.",
        ocena: "dopuszczalna",
        punkty: { prawo: 2, transparentnosc: 2, autonomia: 1, biznes: -1 },
        uzasadnienie:
          "Rozwiązanie jest uczciwe: treści sklepu są przedstawione jako treści sklepu. Nie rozwiązuje jednak problemu braku społecznego dowodu słuszności, dlatego warto połączyć je z aktywnym zbieraniem opinii po pierwszych zakupach."
      }
    ],
    etyka:
      "Opinie innych klientów są jednym z najsilniejszych sygnałów zaufania w handlu internetowym — właśnie dlatego ich fałszowanie narusza kryterium prawdziwości i autentyczności w teście TARES. Każda fałszywa opinia osłabia wartość wszystkich prawdziwych.",
    podstawaPrawna: [
      {
        akt: "Ustawa o przeciwdziałaniu nieuczciwym praktykom rynkowym",
        przepis: "art. 7 pkt 23a–23b",
        opis: "Praktyki uznawane za nieuczciwe w każdych okolicznościach: przypisywanie opiniom pochodzenia od konsumentów bez rozsądnej weryfikacji oraz zamieszczanie fałszywych opinii lub rekomendacji konsumentów albo zlecanie ich zamieszczania."
      },
      {
        akt: "Ustawa o przeciwdziałaniu nieuczciwym praktykom rynkowym",
        przepis: "art. 5",
        opis: "Wprowadzające w błąd działanie rynkowe."
      }
    ],
    wniosek:
      "AI może pomóc opowiedzieć o produkcie, ale nie może udawać klientów, którzy go kupili. Opinia jest wiarygodna tylko wtedy, gdy ma prawdziwego autora."
  },

  {
    id: "s08",
    tytul: "Licencje kupione, zasad brak",
    obszar: "AI Act · art. 4 | kompetencje i organizacja",
    kontekst:
      "Producent mebli „Nordis” (fikcyjny) zatrudnia 15-osobowy zespół marketingu, którym kierujesz. Zarząd właśnie wykupił dla całego zespołu dostęp do narzędzia generatywnej AI.",
    sytuacja:
      "Prezes pisze: „Od jutra wszyscy używają AI, chcę widzieć wzrost wydajności w tym kwartale”. Część zespołu nigdy nie korzystała z takich narzędzi, inni od miesięcy używają prywatnych kont, także do pracy z danymi klientów i materiałami od agencji.",
    pytanie: "Jak organizujesz wdrożenie?",
    opcje: [
      {
        id: "a",
        tresc:
          "Wdrażamy etapowo: krótkie szkolenie startowe dla wszystkich, jednostronicowa polityka AI (zatwierdzone narzędzia, klasy danych, oznaczanie treści, weryfikacja przed publikacją), rejestr zastosowań AI i osoba odpowiedzialna za wdrożenie. Prywatne konta do pracy są od razu wyłączone.",
        ocena: "rekomendowana",
        punkty: { prawo: 2, transparentnosc: 2, autonomia: 2, biznes: 1 },
        uzasadnienie:
          "Zespół zaczyna korzystać z narzędzia szybko, ale w ramach jasnych zasad. Szkolenie i polityka realizują obowiązek dbania o kompetencje personelu w zakresie AI, a rejestr zastosowań i przypisana odpowiedzialność — zasadę rozliczalności. Wzrost wydajności jest realny, a ryzyko kontrolowane."
      },
      {
        id: "b",
        tresc:
          "Wstrzymujemy korzystanie z AI do czasu, aż cały zespół ukończy certyfikowany kurs — około trzech miesięcy.",
        ocena: "dopuszczalna",
        punkty: { prawo: 2, transparentnosc: 1, autonomia: 1, biznes: -2 },
        uzasadnienie:
          "Decyzja jest bezpieczna, ale nieproporcjonalna. Przepisy nie wymagają certyfikatów przed rozpoczęciem pracy z AI, lecz działań dostosowanych do wiedzy personelu i kontekstu użycia. W praktyce zakaz często prowadzi do tego, że pracownicy i tak korzystają z prywatnych kont — poza jakąkolwiek kontrolą."
      },
      {
        id: "c",
        tresc:
          "Wprowadzamy jedną zasadę: „nie wklejamy danych klientów”. Resztę zostawiamy zdrowemu rozsądkowi pracowników.",
        ocena: "ryzykowna",
        punkty: { prawo: -1, transparentnosc: -1, autonomia: 0, biznes: 1 },
        uzasadnienie:
          "Zasada jest słuszna, ale niewystarczająca. Nie obejmuje oznaczania treści syntetycznych, weryfikacji faktów, praw do materiałów wejściowych ani odpowiedzialności za publikację. Bez szkolenia pracownicy nie zawsze rozpoznają, co jest daną osobową lub poufną."
      },
      {
        id: "d",
        tresc:
          "Od jutra każdy uczy się sam. Kto woli, może dalej korzystać z prywatnego konta, bo liczy się tempo.",
        ocena: "niezgodna",
        punkty: { prawo: -2, transparentnosc: -1, autonomia: -2, biznes: 2 },
        uzasadnienie:
          "Praca na prywatnych kontach z danymi klientów i materiałami partnerów oznacza przetwarzanie danych bez umowy powierzenia i bez kontroli organizacji — to naruszenie obowiązku wdrożenia odpowiednich środków technicznych i organizacyjnych. Brak jakichkolwiek działań na rzecz kompetencji personelu jest sprzeczny z wymaganiami AI Act, a odpowiedzialność za skutki i tak spada na organizację."
      }
    ],
    etyka:
      "Zasada rozliczalności oznacza, że za każdą publikację odpowiada imiennie człowiek, a nie „model”. Organizacja, która oczekuje wyników, ale nie daje ludziom wiedzy i zasad, przerzuca na nich ryzyko, za które sama powinna odpowiadać.",
    podstawaPrawna: [
      {
        akt: "Rozporządzenie (UE) 2024/1689 (AI Act)",
        przepis: "art. 4",
        opis: "Obowiązek podejmowania przez dostawców i podmioty stosujące środków na rzecz kompetencji personelu w zakresie AI, z uwzględnieniem jego wiedzy i kontekstu użycia (brzmienie zmienione nowelizacją z 2026 r. — zweryfikować aktualną treść)."
      },
      {
        akt: "Rozporządzenie (UE) 2016/679 (RODO)",
        przepis: "art. 5 ust. 2 oraz art. 24 i 32",
        opis: "Zasada rozliczalności; obowiązek wdrożenia odpowiednich środków technicznych i organizacyjnych oraz zapewnienia bezpieczeństwa przetwarzania."
      },
      {
        akt: "Rozporządzenie (UE) 2016/679 (RODO)",
        przepis: "art. 28",
        opis: "Przetwarzanie danych przez dostawcę narzędzia wymaga umowy powierzenia."
      }
    ],
    wniosek:
      "Kupno licencji to nie wdrożenie. O odpowiedzialnym użyciu AI decydują ludzie, zasady i przypisana odpowiedzialność — a nie samo narzędzie."
  }

  /*
   * ── MIEJSCE NA KOLEJNE SCENARIUSZE (opcjonalnie: 9 i dalsze) ──
   * Dopisz przecinek po ostatnim nawiasie klamrowym powyżej,
   * a następnie wklej nowy obiekt scenariusza (komenda /nowy-scenariusz).
   */
];
