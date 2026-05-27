---
locale: pl
translationKey: "20260521-keycmd-019-release"
slug: "20260521-keycmd-019-release"
title: "KeyCmd 0.19: Rebranding aplikacji, tryb tworzenia KM Pro, obsługa wielu języków i przewodniki po poszczególnych trybach"
description: "KeyCmd 0.19 wprowadza poważną zmianę marki z KeyMod na KeyCmd, nowy tryb KM Pro Compose z wysyłaniem Unicode HID, wielojęzyczny interfejs użytkownika (koreański, włoski, rosyjski, pt-BR), interaktywne wycieczki z przewodnikiem po poszczególnych trybach i dziesiątki udoskonaleń UX."
date: 2026-05-21
channel: software
app: keycmd
product: keymod
topic: ["shipping", "production", "beta", "software", "campaign", "community"]
category: "Product Updates"
tags: ["KeyCmd", "Product Updates", "Release", "Compose", "i18n", "Android"]
featured: false
draft: false
author: "TechxArtisan Studio"
---
KeyCmd **0.19** („versionCode` **19**) to ważna aktualizacja, która zapewnia **rebranding aplikacji** z KeyMod na KeyCmd, zupełnie nowy **tryb KM Pro Compose** z wysyłaniem HID obsługującym Unicode, rozszerzony **wielojęzyczny interfejs użytkownika** (w tym koreański, włoski, rosyjski i brazylijski portugalski), **interaktywne przewodniki po poszczególnych trybach** i dziesiątki udoskonaleń UX na klawiaturze, gamepad i tryby prezentacji.

## Rebranding aplikacji: KeyMod → KeyCmd

Nazwa wyświetlana aplikacji to teraz **KeyCmd** we wszystkich punktach wejścia. Ta rebranding wyjaśnia różnicę pomiędzy **sprzętem KeyMod** i towarzyszącą mu **aplikacją KeyCmd**.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Welcome-Screen-landscape.webp" alt="Ekran powitalny KeyCmd" style="max-width:100%; border-radius:8px; margines:16px 0;" ładowanie="leniwy">

### Co się zmieniło

- **Nazwa wyświetlana aplikacji**: Ikona programu uruchamiającego i interfejs systemu pokazują teraz „KeyCmd”
- **Przebieg powitalny**: Zaktualizowano znak słowny i kopię z KeyMod do KeyCmd
- **Artefakty CI i nazwy plików APK**: Użyj przedrostka **KeyCmd**
- `applicationId` pozostaje **`com.openterface.keymod`** w celu zapewnienia bezproblemowych aktualizacji w miejscu

Obecni użytkownicy: Twoje ustawienia, profile i sparowane urządzenia zostaną zachowane. Aktualizacja przebiega bezproblemowo.

## Klawiatura i mysz: tryb pełnoekranowy

KeyCmd zapewnia pełnoekranową klawiaturę, touchpad i klawiaturę numeryczną — wszystko zoptymalizowane zarówno pod kątem orientacji pionowej, jak i poziomej.

<div class="slideshow-container" id="slideshow-keycmd-019-kbm" data-auto-slide="true" data-auto-slide-interval="3000">
  <div class="slideshow-wrapper">
    <div class="slajd aktywny">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-Full-Keyboard-landscape.webp" alt="Pełny krajobraz klawiatury" loading="leniwy">
    </div>
    <div class="slide">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-NumPad-landscape.webp" alt="Klawiatura numeryczna" loading="leniwy">
    </div>
    <div class="slide">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-NumPad-portrait.webp" alt="Portret z klawiatury numerycznej" loading="leniwy">
    </div>
    <div class="slide">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-Keyboard-TouchPad-portrait.webp" alt="Klawiatura i touchpad portret" loading="leniwy">
    </div>
    <div class="slide">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-km-basic-Touchpad.webp" alt="Układ dotykowy" loading="leniwy">
    </div>
    <div class="slide">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-Remote-Coding-portrait.webp" alt="Zdalne kodowanie za pomocą KeyCmd" loading="leniwy">
    </div>
    <div class="slide">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-Settings-screen.webp" alt="Ekran ustawień KeyCmd" loading="leniwy">
    </div>
  </div>

  <div class="slideshow-navigation">
    <button class="nav-arrow left" onclick="changeSlide('slideshow-keycmd-019-kbm', -1)">❮</button>
    <div class="slideshow-dots">
      <span class="dot active" onclick="currentSlide('slideshow-keycmd-019-kbm', 1)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm', 2)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm', 3)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm', 4)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm', 5)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm', 6)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm', 7)"></span>
    </div>
    <button class="nav-arrow Right" onclick="changeSlide('slideshow-keycmd-019-kbm', 1)">❯</button>
  </div>
</div>

## KM Pro: tryb tworzenia i wysyłania

Największą nowością w wersji 0.19 jest **Tryb tworzenia** w KM Pro — dedykowany edytor tekstu, który umożliwia wpisywanie długich fragmentów i wysyłanie ich jako naciśnięcia klawiszy HID do maszyny docelowej.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Script-Running-portrait.webp" alt="Skrypt uruchomiony w trybie tworzenia" style="max-width:100%; border-radius:8px; margines:16px 0;" ładowanie="leniwy">

<p><strong>Utwórz i amp; Wyślij demo (krótki film YouTube)</strong></p>

<iframe szerokość="560" wysokość="315" loading="lazy" src="https://www.youtube.com/embed/_rJF-hTF3_E" title="KeyCmd Utwórz i wyślij demo (krótka wersja YouTube)" Frameborder="0" zezwolenie="akcelerometr; autoodtwarzanie; zapis w schowku; multimedia zaszyfrowane; żyroskop; obraz w obrazie; udostępnianie w sieci" referrerpolicy="strict-origin-when-cross-origin" zezwolenie na pełny ekran></iframe>


### Edytor kompozycji

- **Górny pasek skrótów + utwórz wiersz akcji** z elementami sterującymi **Wyczyść** i **Cofnij/Wyczyść**
- **Przechowywanie wersji roboczej**: Twój tekst jest zachowywany przy przełączaniu trybów podrzędnych, a nawet po pomyślnym wysłaniu
- **Integracja z IME**: pisz za pomocą klawiatury telefonu, wysyłaj czyste naciśnięcia klawiszy HID
- **Określ postęp wysyłania**: widoczny pasek postępu dla długich buforów HID, dzięki czemu wiesz dokładnie, jak daleko posunęło się wysyłanie

### Wysyłanie HID obsługującego Unicode

- **Przegląd ryzyka w trybie podwójnym**: przed wysłaniem tekstu innego niż ASCII pojawia się okno dialogowe ostrzegające o zgodności z Unicode i udostępniające czynności inspekcji/podglądu
- **przepływ szesnastkowy macOS Unicode**: na hostach z systemem macOS aplikacja używa metody wprowadzania kodu szesnastkowego Opcja+szesnastkowa dla znaków rozszerzonych
- **Bezpieczniejsze okna dialogowe wysyłania**: ekran Przeglądu dostosowuje swoją zawartość w zależności od tego, czy bufor jest czystym kodem ASCII, czy zawiera znaki Unicode
- **Narzędzia do inspekcji znaków**: okno dialogowe ryzyka wysyłania udostępnia akcje **Sprawdź** i **Podgląd**, a hosty macOS zawierają dedykowany wpis **Audyt ścieżki szesnastkowej Unicode**

### KM Zakres podstawowy

W wersji 0.19 **Tworzenie i wysyłanie pozostaje funkcją Pro klawiatury i myszy**. KM Basic koncentruje się na pełnoekranowej klawiaturze, touchpadzie i klawiaturze numerycznej.

## Obsługa wielu języków

KeyCmd obsługuje teraz **11 języków interfejsu aplikacji**. To wydanie dodaje cztery nowe lokalizacje:

- **Koreański (ko)**: pełne tłumaczenie interfejsu użytkownika
- **Włoski (it)**: pełne tłumaczenie interfejsu użytkownika
- **Rosyjski (ru)**: pełne tłumaczenie interfejsu użytkownika
- **Portugalski brazylijski (pt-BR)**: pełne tłumaczenie interfejsu użytkownika

W połączeniu z istniejącym językiem angielskim, chińskim uproszczonym, chińskim tradycyjnym, japońskim, francuskim, niemieckim i hiszpańskim, KeyCmd obejmuje obecnie zdecydowaną większość naszej globalnej bazy użytkowników.

### Co się zmieniło

- **Wybór języka** w Ustawieniach z kanonicznymi nazwami języków aplikacji
- **Nagłówki Bluetooth** i **podgląd naciśnięcia klawisza** zlokalizowane
- **Wydanie lint** poprawek dotyczących tworzenia zakładek z ostrzeżeniami we wszystkich językach

## Wycieczki z interaktywnym przewodnikiem

Każdy tryb ma teraz **wbudowany interaktywny przewodnik**, który krok po kroku przeprowadzi Cię przez jego funkcje.

### Dostępne wycieczki

- **Wycieczka po Hubie skrótów**: otwiera profil domyślny i omawia szczegółowy interfejs użytkownika, karty kategorii i zarządzanie skrótami
- **Wycieczka po gamepadzie**: objaśnia układ gamepada, zarządzanie modułami i wstępnie ustawiony system
- **Wycieczka po KM Pro**: obejmuje tryb tworzenia, panel skrótów i funkcje specyficzne dla wersji Pro
- **Podstawowa wycieczka po KM**: objaśnia klawiaturę pełnoekranową, przeciąganie modyfikatora i klawiaturę numeryczną

### Funkcje wycieczek

- **Przewodniki po trybach**: każdy tryb ma własną, dostosowaną do indywidualnych potrzeb wycieczkę
- **Arkusz powtórki**: możesz wrócić do dowolnej wycieczki w dowolnym momencie za pomocą przycisku **Przewodnik po trybach** (ikona po lewej stronie chromowanego połączenia)
- **Obsługa i18n**: zawartość wycieczki jest zlokalizowana w pełnym zestawie językowym aplikacji
- **Zoptymalizowany pod kątem krajobrazu**: układy dolnych arkuszy dostosowują się prawidłowo do orientacji poziomej

## Udoskonalenia UX

### Klawiatura

- **Podgląd naciśnięcia klawisza**: zobacz dokładnie, co zostanie wysłane przed dotknięciem. Włącz w Ustawieniach. Domyślnie włączone.
- **Naprawa HID szybkiego dotknięcia**: poprawiony czas zwolnienia klawiatury i połączone zdarzenia zwolnienia w celu szybszego pisania
- **Alternatywna obsługa dotyku**: długie naciśnięcie klawisza „a” pokazuje teraz alternatywy dla ¥ (w górę), £ (w lewo), € (w prawo) z ulepszonym wizualnym sprzężeniem zwrotnym
- **Przytrzymanie modyfikatora**: w wycieczkach KM Basic/Pro nowy krok uczy gestu przytrzymania przeciągnięcia w celu szybkiego dostępu do modyfikatora

### Pad do gier

- **Usunięto pasek sesji edycji**: czystszy chrom gamepada bez starego paska narzędzi sesji edycji
- **Chrome i wycieczka po gamepadzie**: nowa wersja wizualna i zintegrowana wycieczka z przewodnikiem
- **Ikona przewodnika po trybach**: umieszczona po lewej stronie chromowanego połączenia dla łatwego dostępu

### Prezentacja

- **Blokada pary portretów**: Tryb prezentacji jest ograniczony do orientacji pionowej i odwróconej, aby zapewnić stabilną kontrolę prezentera

### Interfejs użytkownika i motyw

- **Próbki akcentów**: zastąpiono pokrętło rodziny kolorów motywu wizualnymi próbkami akcentów w celu łatwiejszego wyboru kolorów
- **Wyrównanie akcentów interfejsu użytkownika**: wszystkie akcenty interfejsu użytkownika są teraz zgodne z rodziną kolorów motywu (a nie starszym kolorem podstawowym)
- **Prawy nagłówek**: ulepszone wymiary ikon połączeń zarówno w aplikacji głównej, jak i w KM Basic chrome
- **Utwórz styl przycisku wysyłania**: wyrównany wygląd przycisku wysyłania w formacie innym niż ASCII w trybie jasnym

### Ustawienia

- **Reorganizacja ustawień**: kanoniczne nazwy języków aplikacji; dla przejrzystości zmieniono nazwę skryptów instalacyjnych emulatora
- **Skrypty pomocnicze dewelopera**: zmieniono nazwę w celu wyraźniejszej identyfikacji urządzeń i nazewnictwa akcji
- **Dokumentacja FAQ**: zaktualizowano `docs/FAQ.md` o bieżące zachowanie aplikacji

## Rzeczywiste przypadki użycia

### Zdalne kodowanie

KeyCmd nie służy tylko do zarządzania serwerami. Programiści używają go do **zdalnych sesji kodowania** — kontrolowania bezgłowego urządzenia deweloperskiego z telefonu lub tabletu z pełną obsługą klawiatury, touchpada i klawiatury numerycznej.

## Co się nie zmieniło

**Klawiatura i mysz Pro** (tryb złożony z paskami skrótów, podzielonymi układami i bogatym zachowaniem edytora IME) pozostaje w pełni funkcjonalnym rozwiązaniem, jakim było wcześniej. Wszystkie istniejące profile, ustawienia wstępne i sparowane urządzenia zostaną zachowane.

## Pobierz aktualizację

**Ta wersja (0.19):** [KeyCmd-release-0.19.apk](https://assets2.openterface.com/data/KeyCmd-release-0.19.apk)

> **Powiadomienie o wersji beta:** Aplikacja KeyCmd na Androida jest wciąż w aktywnej wersji beta. Repozytorium źródłowe nie jest jeszcze publiczne — planujemy udostępnić je po udanej kampanii crowdfundingowej. Jeśli jesteś beta testerem i potrzebujesz najnowszego pakietu APK, skontaktuj się z nami na Discordzie, a my dostarczymy Ci wersję.

Aktualizacje istniejących instalacji na miejscu.

## Współpracuje z Mini-KVM i KVM-Go

Aplikacja KeyCmd nie ogranicza się do sprzętu KeyMod. Obecni użytkownicy Openterface również mogą to wypróbować:

- **KVM-Go**: połączenie przez **Bluetooth** lub **USB**
- **Mini-KVM**: połączenie przez **USB**

## Uwagi dotyczące aktualizacji

- **Rebranding**: nazwa aplikacji zmienia się z KeyMod na KeyCmd. Twoje dane zostaną zachowane.
- **Tryb tworzenia**: nowość w aplikacji Keyboard & Mouse Pro.
- **Wycieczki z przewodnikiem**: dotknij ikony przewodnika (na lewo od chromowanego połączenia) w dowolnym trybie, aby rozpocząć interaktywną wycieczkę.
- **Języki**: przejdź do Ustawień, aby zmienić język aplikacji. KeyCmd obsługuje teraz 11 języków interfejsu aplikacji.

Pozdrawiam,

Zespół Openinterface | TechxArtisan