/*
 * BOSS GWARDIA — Kompas Etyki AI
 * Logika aplikacji. Aplikacja nie zapisuje ani nie wysyła żadnych danych:
 * cały stan istnieje wyłącznie w pamięci karty przeglądarki.
 */
(function () {
  "use strict";

  var SCEN = window.KOMPAS_SCENARIUSZE;
  var OSIE = window.KOMPAS_OSIE;
  var PROFILE = window.KOMPAS_PROFILE;
  var KONF = window.KOMPAS_KONFIG;

  var ETYKIETY_OCEN = {
    rekomendowana: "Decyzja rekomendowana",
    dopuszczalna: "Decyzja dopuszczalna",
    ryzykowna: "Decyzja ryzykowna",
    niezgodna: "Decyzja niezgodna z prawem"
  };

  var stan = { indeks: 0, wybory: [] };

  var $ = function (sel) { return document.querySelector(sel); };
  var ekrany = { start: $("#ekran-start"), scenariusz: $("#ekran-scenariusz"), wynik: $("#ekran-wynik") };

  function el(tag, klasa, tekst) {
    var e = document.createElement(tag);
    if (klasa) e.className = klasa;
    if (tekst !== undefined) e.textContent = tekst;
    return e;
  }

  function pokaz(nazwa) {
    Object.keys(ekrany).forEach(function (k) { ekrany[k].hidden = k !== nazwa; });
    window.scrollTo({ top: 0, behavior: "smooth" });
    var naglowek = ekrany[nazwa].querySelector("h1, h2");
    if (naglowek) { naglowek.setAttribute("tabindex", "-1"); naglowek.focus({ preventScroll: true }); }
  }

  /* ── Ekran startowy ─────────────────────────────── */
  function przygotujStart() {
    var n = SCEN.length;
    $("#start-liczba").textContent = n;
    $("#start-liczba-opis").textContent =
      n === 1 ? "scenariusz" : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14)) ? "scenariusze" : "scenariuszy";
    $("#start-czas").textContent = Math.max(5, Math.round(n * 2.5));
    $("#stopka-wersja").textContent = KONF.wersja + " · scenariusze: " + SCEN.length + " z " + KONF.planowanaLiczbaScenariuszy;
    $("#stopka-stan").textContent = KONF.stanPrawny;
    $("#przycisk-start").addEventListener("click", function () {
      stan = { indeks: 0, wybory: [] };
      renderujScenariusz();
      pokaz("scenariusz");
    });
  }

  /* ── Scenariusz ─────────────────────────────────── */
  function renderujScenariusz() {
    var s = SCEN[stan.indeks];
    var nr = stan.indeks + 1;

    $("#postep-tekst").textContent = "Scenariusz " + nr + " z " + SCEN.length;
    var pasek = $("#postep-pasek");
    pasek.style.width = ((nr - 1) / SCEN.length) * 100 + "%";
    $("#postep").setAttribute("aria-valuenow", String(nr));
    $("#postep").setAttribute("aria-valuemax", String(SCEN.length));

    $("#sc-obszar").textContent = s.obszar;
    $("#sc-tytul").textContent = s.tytul;
    $("#sc-kontekst").textContent = s.kontekst;
    $("#sc-sytuacja").textContent = s.sytuacja;
    $("#sc-pytanie").textContent = s.pytanie;

    var lista = $("#sc-opcje");
    lista.innerHTML = "";
    s.opcje.forEach(function (o, i) {
      var li = el("li");
      var btn = el("button", "opcja");
      btn.type = "button";
      btn.dataset.id = o.id;
      var litera = el("span", "opcja-litera", String.fromCharCode(65 + i));
      litera.setAttribute("aria-hidden", "true");
      btn.appendChild(litera);
      btn.appendChild(el("span", "opcja-tresc", o.tresc));
      btn.addEventListener("click", function () { wybierz(o); });
      li.appendChild(btn);
      lista.appendChild(li);
    });

    $("#sc-feedback").hidden = true;
    $("#sc-feedback").innerHTML = "";
  }

  function wybierz(opcja) {
    var s = SCEN[stan.indeks];
    stan.wybory[stan.indeks] = { scenariusz: s, opcja: opcja };

    document.querySelectorAll("#sc-opcje .opcja").forEach(function (b) {
      b.disabled = true;
      var o = s.opcje.filter(function (x) { return x.id === b.dataset.id; })[0];
      if (b.dataset.id === opcja.id) b.classList.add("wybrana", "ocena-" + o.ocena);
      else if (o.ocena === "rekomendowana") b.classList.add("wzorcowa");
    });

    var fb = $("#sc-feedback");
    fb.innerHTML = "";

    var odznaka = el("p", "odznaka ocena-" + opcja.ocena, ETYKIETY_OCEN[opcja.ocena]);
    fb.appendChild(odznaka);
    fb.appendChild(el("p", "fb-uzasadnienie", opcja.uzasadnienie));

    if (opcja.ocena !== "rekomendowana") {
      var rek = s.opcje.filter(function (x) { return x.ocena === "rekomendowana"; })[0];
      if (rek) {
        var box = el("div", "fb-rekomendacja");
        box.appendChild(el("h3", null, "Rozwiązanie rekomendowane"));
        box.appendChild(el("p", null, rek.tresc));
        fb.appendChild(box);
      }
    }

    var etyka = el("div", "fb-blok");
    etyka.appendChild(el("h3", null, "Perspektywa etyczna"));
    etyka.appendChild(el("p", null, s.etyka));
    fb.appendChild(etyka);

    var prawo = el("div", "fb-blok");
    prawo.appendChild(el("h3", null, "Podstawa prawna"));
    var ul = el("ul", "fb-przepisy");
    s.podstawaPrawna.forEach(function (p) {
      var li = el("li");
      li.appendChild(el("strong", null, p.akt + ", " + p.przepis));
      li.appendChild(el("span", null, " — " + p.opis));
      ul.appendChild(li);
    });
    prawo.appendChild(ul);
    fb.appendChild(prawo);

    var wn = el("blockquote", "fb-wniosek", s.wniosek);
    fb.appendChild(wn);

    var ostatni = stan.indeks === SCEN.length - 1;
    var dalej = el("button", "przycisk przycisk-glowny", ostatni ? "Zobacz swój profil" : "Następny scenariusz");
    dalej.type = "button";
    dalej.addEventListener("click", function () {
      if (ostatni) { renderujWynik(); pokaz("wynik"); }
      else { stan.indeks++; renderujScenariusz(); pokaz("scenariusz"); }
    });
    fb.appendChild(dalej);

    fb.hidden = false;
    $("#postep-pasek").style.width = ((stan.indeks + 1) / SCEN.length) * 100 + "%";
    odznaka.setAttribute("tabindex", "-1");
    odznaka.focus({ preventScroll: true });
    fb.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ── Wynik ──────────────────────────────────────── */
  function policzWyniki() {
    var wyniki = {};
    OSIE.forEach(function (os) {
      var suma = 0, min = 0, max = 0;
      SCEN.forEach(function (s, i) {
        var pkt = s.opcje.map(function (o) { return o.punkty[os.klucz] || 0; });
        min += Math.min.apply(null, pkt);
        max += Math.max.apply(null, pkt);
        suma += stan.wybory[i].opcja.punkty[os.klucz] || 0;
      });
      wyniki[os.klucz] = max === min ? 50 : Math.round(((suma - min) / (max - min)) * 100);
    });
    return wyniki;
  }

  function renderujWynik() {
    var w = policzWyniki();
    var kluczProfilu = window.KOMPAS_WYZNACZ_PROFIL(w);
    var p = PROFILE[kluczProfilu];

    $("#wynik-symbol").textContent = p.symbol;
    $("#wynik-nazwa").textContent = p.nazwa;
    $("#wynik-opis").textContent = p.opis;
    $("#wynik-mocna").textContent = p.mocnaStrona;
    $("#wynik-uwaga").textContent = p.naCoUwazac;
    $("#karta-profil").className = "karta-profil profil-" + kluczProfilu;

    var osie = $("#wynik-osie");
    osie.innerHTML = "";
    OSIE.forEach(function (os) {
      var wiersz = el("div", "os");
      var etyk = el("div", "os-etykieta");
      etyk.appendChild(el("span", null, os.nazwa));
      etyk.appendChild(el("span", "os-wartosc", w[os.klucz] + "%"));
      var tor = el("div", "os-tor");
      tor.setAttribute("role", "img");
      tor.setAttribute("aria-label", os.nazwa + ": " + w[os.klucz] + " na 100");
      var wyp = el("div", "os-wypelnienie os-" + os.klucz);
      tor.appendChild(wyp);
      wiersz.appendChild(etyk);
      wiersz.appendChild(tor);
      osie.appendChild(wiersz);
      requestAnimationFrame(function () { requestAnimationFrame(function () { wyp.style.width = w[os.klucz] + "%"; }); });
    });

    var lista = $("#wynik-decyzje");
    lista.innerHTML = "";
    stan.wybory.forEach(function (wyb, i) {
      var li = el("li", "decyzja");
      var gora = el("div", "decyzja-gora");
      gora.appendChild(el("span", "decyzja-nr", String(i + 1)));
      gora.appendChild(el("span", "decyzja-tytul", wyb.scenariusz.tytul));
      gora.appendChild(el("span", "odznaka odznaka-mala ocena-" + wyb.opcja.ocena, wyb.opcja.ocena));
      li.appendChild(gora);
      li.appendChild(el("p", "decyzja-wniosek", wyb.scenariusz.wniosek));
      lista.appendChild(li);
    });

    var zlicz = { rekomendowana: 0, dopuszczalna: 0, ryzykowna: 0, niezgodna: 0 };
    stan.wybory.forEach(function (x) { zlicz[x.opcja.ocena]++; });
    $("#wynik-podsumowanie").textContent =
      "Decyzje rekomendowane: " + zlicz.rekomendowana +
      " · dopuszczalne: " + zlicz.dopuszczalna +
      " · ryzykowne: " + zlicz.ryzykowna +
      " · niezgodne z prawem: " + zlicz.niezgodna;
  }

  $("#przycisk-od-nowa").addEventListener("click", function () {
    stan = { indeks: 0, wybory: [] };
    pokaz("start");
  });

  /* ── Okno „O projekcie” ─────────────────────────── */
  var okno = $("#okno-o-projekcie");
  document.querySelectorAll("[data-otworz-o-projekcie]").forEach(function (b) {
    b.addEventListener("click", function () {
      if (typeof okno.showModal === "function") okno.showModal(); else okno.setAttribute("open", "");
    });
  });
  $("#zamknij-o-projekcie").addEventListener("click", function () { okno.close ? okno.close() : okno.removeAttribute("open"); });
  okno.addEventListener("click", function (e) { if (e.target === okno) okno.close(); });

  przygotujStart();
})();
