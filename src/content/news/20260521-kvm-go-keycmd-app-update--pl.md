---
locale: pl
translationKey: "20260521-kvm-go-keycmd-app-update"
slug: "20260521-kvm-go-keycmd-app-update"
title: "Aktualizacja KVM-GO: kontroluj swój cel za pomocą telefonu za pomocą KeyCmd 0.19"
description: "Używaj KeyCmd 0.19 z KVM-GO przez USB lub Bluetooth: klawiatury KM Basic i Pro, tryb tworzenia, ustawienia wstępne gamepada, centrum skrótów i elementy sterujące prezentacją — do wejścia HID nie jest wymagany klucz sprzętowy wideo."
date: 2026-05-21
channel: software
app: keycmd
product: keymod
topic: ["shipping", "production", "beta", "software", "campaign", "community"]
category: "Product Updates"
tags: ["KVM-GO", "KeyCmd", "Product Updates", "Android", "USB", "Bluetooth", "Keyboard", "Gamepad", "Release"]
featured: false
draft: false
author: "Openterface Team | TechxArtisan"
---
Cześć wszystkim,

Dziękujemy za wsparcie **KVM-GO** i za cierpliwość w trakcie produkcji i wysyłki jednostek. Wiemy, że wielu z Was wciąż czeka na sprzęt i chcemy, aby Wasza konfiguracja była kompletna od pierwszego dnia.

Oprócz aplikacji **Openterface KVM** (wideo i pełna kontrola KVM na telefonie lub tablecie) udoskonalamy **KeyCmd**, naszą aplikację towarzyszącą do obsługi klawiatury, myszy, gamepada i wprowadzania skrótów. **KeyCmd 0.19** to kompilacja, którą dzisiaj polecamy, jeśli używasz KVM-GO. Sparuj przez **USB** lub **Bluetooth**, zainstaluj na dowolnej poprzedniej kompilacji, a ustawienia, profile i sparowane urządzenia zostaną przeniesione.

<img src="https://assets2.openterface.com/images/kvm-go/kvm-go-keycmd-phone-keyboard-setup.webp" alt="KVM-GO na laptopie z klawiaturą KeyCmd na telefonie" style="max-width:720px;width:100%;height:auto" loading="lazy">

Poniżej opisano, co KeyCmd robi z KVM-GO, jaki tryb otworzyć dla jakiego zadania i jak najlepiej go wykorzystać na prawdziwej maszynie docelowej.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Welcome-Screen-landscape_1.webp" alt="Ekran powitalny KeyCmd" style="max-height:320px;width:auto" loading="lazy">

## Tryby i sposób ich używania

### Klawiatura i mysz (podstawowa)

Otwórz to, jeśli chcesz mieć **prostą, pełnoekranową klawiaturę** i nic więcej nie będzie Ci przeszkadzać.

**Dobre do:** haseł do BIOS-u, krótkich poleceń powłoki, wprowadzania klawiatury numerycznej lub sterowania myszą za pomocą dużego touchpada, podczas gdy KVM-GO pokazuje ekran.

**Jak go używać:**

- Otwórz **KM Basic** z szuflady nawigacji.
- W razie potrzeby użyj klawiatury ekranowej, **klawiatury numerycznej** (pionowo lub poziomo) lub karty **touchpada**.
- W **Ustawieniach** wybierz **lepkie modyfikatory** (dotknij, aby zatrzasnąć Shift/Ctrl) lub **modyfikatory w stylu akordu**, jeśli wolisz kombinacje przytrzymaj i dotknij.

**Dlaczego to pomaga:** więcej miejsca na ekranie na klawisze, mniej chrome, szybciej, gdy potrzebujesz tylko wprowadzania danych, a nie skrótów.

<img src="https://assets2.openterface.com/images/keymod/KM-Basic-Keyboard_1.webp" alt="Klawiatura pełnoekranowa KM Basic" style="max-height:320px;width:auto" loading="lazy">

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-NumPad-landscape_1.webp" alt="KeyCmd klawiatura numeryczna w poziomie" style="max-height:320px;width:auto" loading="lazy">

### Klawiatura i mysz (Pro)

<img src="https://assets2.openterface.com/images/keymod/KM-Pro-Keyboard-landscape-split_1.webp" alt="Dzielona klawiatura KM Pro w orientacji poziomej" style="max-height:320px;width:auto" loading="lazy">

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Keyboard-TouchPad-portrait_1.webp" alt="Klawiatura i touchpad KeyCmd w orientacji pionowej" style="max-height:320px;width:auto" loading="lazy">

Otwórz to, aby **codziennie kontrolować** komputery obsługujące KVM-GO: podzielone klawiatury, edytor IME, paski skrótów Hub i edytor **Utwórz**.

**Dobry do:** dłuższych sesji pisania, makr i skrótów, wysyłania bloków tekstu lub skryptów do hosta podczas oglądania wyników w widoku KVM.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Script-Running-portrait_1.webp" alt="Tryb tworzenia wysyłania skryptu" style="max-height:320px;width:auto" loading="lazy">

**Utwórz** warto wypróbować, jeśli często wklejasz polecenia lub skrypty: napisz na telefonie, przejrzyj, a następnie wyślij do hosta po naciśnięciu klawisza. [Short demo on YouTube](https://www.youtube.com/watch?v=_rJF-hTF3_E) pokazuje przepływ od końca do końca.

**Jak go używać:**

- Otwórz **KM Pro** z szuflady nawigacji.
- Używaj klawiatury i touchpada jak w wersji Basic, a także kategorii **Centrum skrótów** u góry, aby wykonywać czynności konfigurowane jednym dotknięciem w profilach.
- Otwórz **Utwórz**, aby napisać dłuższy tekst na telefonie, przejrzyj go, a następnie **wyślij** jako naciśnięcia klawiszy HID. Długie wysyłki pokazują pasek postępu. Jeśli Twój tekst zawiera znaki inne niż ASCII, aplikacja wyświetli ostrzeżenie przed wysłaniem, dzięki czemu będziesz mógł sprawdzić zgodność hosta (przydatne zwłaszcza w systemie macOS).

**Dlaczego to pomaga:** jedno miejsce do pisania, wskazywania, korzystania ze skrótów i wykonywania zadań przypominających wklejanie bez konieczności noszenia pełnej klawiatury do celu.

### Pad do gier

Otwórz to, jeśli chcesz mieć na ekranie układ **wirtualnego kontrolera**, dostosowany do gier lub dowolnej aplikacji na urządzeniu docelowym, która oczekuje gamepada.

**Dobre dla:** emulatorów, zwykłych gier lub kompaktowej powierzchni sterującej z drążkami i przyciskami, podczas gdy KVM-GO obsługuje wyświetlacz.

**Jak go używać:**

- Przełącz na tryb **Gamepad**.
- Stuknij **Preset** na pasku narzędzi, aby **przełączyć** zapisane układy. **Naciśnij długo Preset**, aby otworzyć pełną listę, **importuj/eksportuj** lub **dodaj moduły** (pałeczki, przyciski, touchpady).
- Zacznij od dołączonego zestawu wstępnego **emu-6** i stamtąd edytuj. Możesz dodać **wiele touchpadów** i dodatkowych modułów w jednym układzie.

**Dlaczego to pomaga:** nie jesteś skazany na jeden układ fabryki; zapisuj układy dla gry lub komputera i udostępniaj gotowe ustawienia innym.

<img src="https://assets2.openterface.com/images/keymod/Gamepad-perset-1_1.webp" alt="Wstępny układ gamepada" style="max-height:320px;width:auto" loading="lazy">

<img src="https://assets2.openterface.com/images/keymod/Gamepad-perset-minecraft_1.webp" alt="Ustawienie wstępne gamepada używane w Minecrafcie" style="max-height:320px;width:auto" loading="lazy">

*Dostosowane ustawienie wstępne dla gry Minecraft.*

### Centrum skrótów

To jest strona główna **profilów i skrótów** w KM Pro: kategorie, panele szczegółów i skróty przypisane do pasków.

**Dobre do:** powtarzalnych operacji na celu (otwieranie terminala, wklejanie łańcucha poleceń, przełączanie ustawień), podczas gdy KVM-GO pozostaje podłączony do wideo.

**Jak go używać:**

- W KM Pro pracuj w profilu **Domyślnym** (lub własnym).
- Użyj kart kategorii i szczegółowego interfejsu użytkownika do zarządzania skrótami.
- Uruchom **Wycieczkę z przewodnikiem po Centrum skrótów**, jeśli nie masz doświadczenia w organizacji profili.

### Prezentacja

Prostszy panel sterowania w **w stylu prezentera**, utrzymany w **portrecie**, dzięki czemu przyciski nie przeskakują podczas obracania telefonu.

**Dobre do:** przeglądania slajdów lub elementów sterujących prezenterem świetlnym na celu.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Presentation-Google-Slides.webp" alt="Tryb prezentacji sterujący Prezentacjami Google" style="max-height:320px;width:auto" loading="lazy">

---

## Języki

Interfejs aplikacji jest dostępny w **11 językach**. Ostatnio dodane: koreański, włoski, rosyjski i brazylijski portugalski.

Otwórz **Ustawienia** → **Język aplikacji**, aby przełączyć.

---

## Pobierz KeyCmd 0.19 i połącz się z KVM-GO

**Pobierz:** [KeyCmd-release-0.19.apk](https://assets2.openterface.com/data/KeyCmd-release-0.19.apk)

Zainstaluj na istniejącej aplikacji, jeśli już ją posiadasz. Nie ma potrzeby czyszczenia danych.

**Połącz z KVM-GO (port wideo może pozostać odłączony):**

W przypadku **wszystkich trzech wariantów KVM-GO** (HDMI, VGA i DP) nie ma potrzeby podłączania **złącza wideo klucza sprzętowego** do czegokolwiek, co umożliwia wejście KeyCmd. Port HDMI, VGA lub DP może pozostać pusty. Wybierz dowolną konfigurację poniżej.

**Opcja A — Bluetooth (docelowe moce KVM-GO)**

1. Podłącz **krótki czarny kabel USB** do portu **Docelowego** w KVM-GO i do sterowanej maszyny. Samo to połączenie **zasila** KVM-GO.
2. W telefonie otwórz **KeyCmd** i znajdź KVM-GO przez **Bluetooth**.

**Opcja B — USB do telefonu z systemem Android (port hosta)**

1. Podłącz **długi pomarańczowy kabel** z portu **Host** w KVM-GO do swojego telefonu z Androidem.
2. Otwórz **KeyCmd** i połącz się przez **USB** w aplikacji.

<img src="https://assets2.openterface.com/images/kvm-go/kvm-go-target-port-laptop-power.webp" alt="Port docelowy KVM-GO podłączony do laptopa za pomocą krótkiego czarnego kabla USB" style="max-height:360px;width:auto" loading="lazy">

W przypadku pełnoekranowego wideo i sygnału wejściowego użyj **Openterface KVM** dla wyświetlacza docelowego i **KeyCmd** dla klawiatury, myszy i skrótów. Sam KeyCmd wystarczy, gdy cel ma już własny wyświetlacz i potrzebujesz tylko danych wejściowych.

**Działa również z Mini-KVM** przez USB, jeśli używasz obu urządzeń.

> **Wciąż w wersji beta.** Ustawienia wstępne gamepada i wysyłanie wiadomości mogą działać inaczej w zależności od systemu operacyjnego hosta. Jeśli coś dziwnego stanie się z KVM-GO, skontaktuj się z nami na **Discord**, przesyłając zrzut ekranu, swój wariant KVM-GO (HDMI / DP / VGA) i to, czego się spodziewasz.

> **Kod źródłowy:** Jeszcze niepubliczny. Planujemy udostępnienie oprogramowania typu open source po osiągnięciu kamieni milowych w ramach finansowania społecznościowego w powiązanych projektach. Zapytaj na Discordzie, jeśli potrzebujesz pomocy w znalezieniu pliku APK.

---

## Informacje o KeyMod (opcjonalny, niezależny od KVM-GO)

Pracujemy także nad **[KeyMod](https://openterface.com/product/keymod/)**, dedykowanym kluczem sprzętowym USB i Bluetooth HID dla tej samej aplikacji KeyCmd. Osoby wspierające KVM-GO nie potrzebują KeyModa do powyższych przepływów pracy; KeyCmd przez KVM-GO to ścieżka, na której Cię teraz chcemy.

Jeśli interesuje Cię samodzielny klucz sprzętowy do konfiguracji innych niż KVM, możesz skorzystać z [KeyMod campaign on Crowd Supply](https://www.crowdsupply.com/techxartisan/openterface-keymod). To coś innego niż realizacja KVM-GO.

---

## Będziemy wdzięczni za Twoją opinię

Jeśli masz kilka minut, zainstaluj **KeyCmd 0.19**, podłącz go do KVM-GO (lub Mini-KVM) i powiedz nam, co nadal wydaje Ci się niezręczne. Raporty z przypadków użycia koszyka awaryjnego i laboratorium domowego trafiają bezpośrednio do naszych kolejnych wydań.

Praktyczne sposoby pomocy w projekcie KVM-GO:

- **Udostępnij to, co działa** na Discordzie lub w Twojej społeczności (wskazówki dotyczące BIOS-u, parowanie Bluetooth, ulubione tryby)
- **Powiedz koledze**, który używa sprzętu bezgłowego i mógłby używać kieszonkowego KVM
- **Nadal przesyłaj szczere opinie**, szczególnie dotyczące ostrych krawędzi. To kształtuje produkt bardziej niż cheerleaderek

Jeszcze raz dziękujemy za wsparcie KVM-GO i pomoc w ulepszaniu przenośnego KVM-over-USB dla wszystkich.

Pozdrawiam,

**Zespół Openface | TechxArtisan**