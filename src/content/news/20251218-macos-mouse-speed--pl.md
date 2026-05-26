---
locale: pl
translationKey: "20251218-macos-mouse-speed"
slug: "20251218-macos-mouse-speed"
title: "Szybkość myszy Openterface Mini-KVM i wydajność w grach w systemie macOS"
description: "Kompleksowe testowanie wydajności myszy Openterface Mini-KVM dla gier w systemie macOS. Porównaj tryby myszy bezwzględnej, względnej i względnej HID z szybkościami transmisji 9600 i 115200, aby uzyskać optymalną konfigurację do gier."
date: 2025-12-18
channel: software
topic: ["shipping", "production", "software", "analysis"]
category: "Product Updates"
featured: false
draft: false
author: "Openterface"
---
### Analiza zachowania myszy skupiona na grach

W tym artykule podsumowano testy wydajności myszy **Openterface Mini-KVM na macOS** w rzeczywistych warunkach, ze szczególnym uwzględnieniem **zachowania myszy w grach**, ograniczeń szybkości transmisji szeregowej i zalecanych konfiguracji.

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">Gry nie są głównym celem maszyn KVM Openterface, ale popchnęliśmy je do zbadania ograniczeń KVM-over-USB. W systemie macOS najlepsze opóźnienie myszy zapewnia prędkość 115200 bodów + względny HID. Stworzony do konfiguracji i debugowania, dostrojony tak, aby jeszcze bardziej zwiększyć wydajność. <a href="https://t.co/ianurD9ArL">pic.twitter.com/ianurD9ArL</a></p>&mdash; TechxArtisan (@TechxArtisan) <a href="https://twitter.com/TechxArtisan/status/2003418343806742992?ref_src=twsrc%5Etfw">23 grudnia 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---

## 1. Przetestuj oprogramowanie i środowisko

### Oprogramowanie

* **Aplikacja hosta:**
  **Openterface dla macOS v1.21** *(Praca w toku)*

* **Narzędzie pomiarowe po stronie docelowej:**
  **Niestandardowa, wewnętrzna aplikacja do testowania** opracowana w celu dokładnego pomiaru szybkości wprowadzania danych wejściowych myszy o wysokiej częstotliwości i szybkości przetwarzania zdarzeń w systemie docelowym.

> ⚠️ Ponieważ wersja 1.21 jest wciąż w fazie aktywnego rozwoju, niektóre zachowania i cechy wydajności mogą ulec poprawie w przyszłych wydaniach.

---

### Warunki testowania: Ograniczanie szybkości myszy

**Podczas żadnego z testów nie zastosowano żadnego ograniczania prędkości myszy ani sztucznego ograniczania szybkości.**

Dane wejściowe myszy zostały przechwycone i przekazane z **natywną szybkością urządzenia**, z zastrzeżeniem:

* Częstotliwość odpytywania sprzętu myszy
* Wybrany tryb myszy (zdarzenie bezwzględne / względne / względne HID)
* Szybkość transmisji szeregowej
* Obsługa danych wejściowych myszy w docelowym systemie operacyjnym

---

## 2. Podstawy przepustowości danych myszy

Każde zdarzenie ruchu myszy przesyłane przez Mini-KVM składa się z:

```
11 bajtów = 88 bitów
```

### Teoretyczna przepustowość szeregowa

| Szybkość transmisji | Maksymalna liczba wydarzeń / sekunda |
| --------- | ------------------- |
| 9600 | ~109 zdarzeń/s |
| 115200 | ~1309 zdarzeń/s |

⚠️ Wartości te reprezentują **górne limity teoretyczne**.
Na rzeczywistą wydajność mają wpływ:

* Częstotliwość odpytywania myszy hosta
* Tryb myszy (bezwzględny vs względny)
* Planowanie zdarzeń wejściowych w systemie macOS
* Buforowanie szeregowe i obsługa oprogramowania sprzętowego
* **Częstotliwość odpytywania myszy w docelowym systemie operacyjnym**, która może znacząco wpłynąć na postrzeganą responsywność (np. niska domyślna częstotliwość odpytywania w niektórych dystrybucjach Linuksa)

---

## 3. Wyniki testu

---

### A. Bezwzględny tryb myszy (9600 i 115200 bodów)

| Typ myszy | Szybkość transmisji | Częstotliwość hosta (Hz) | Częstotliwość docelowa (Hz) | Notatki |
| ---------- | --------- | -------------- | ---------------- | ---------------------------------------------------------------------------------- |
| Bluetooth | 9600 | ~125 | ~75 | Przepustowość szeregowa nasycona; wejście w kolejce, ruch opóźniony |
| Przewodowy | 9600 | ~150 | ~75 | Przepustowość szeregowa nasycona; wejście w kolejce, ruch opóźniony |
| Gry | 9600 | ~1000 | ~75 | Wejście wysokiej częstotliwości w dużej kolejce; responsywność znacznie zmniejszona |
| Bluetooth | 115200 | ~125 | ~125 | Stabilne mapowanie hosta do celu 1:1 |
| Przewodowy | 115200 | ~175 | ~175 | Poprawiona przepustowość; w przypadku przyspieszonego ruchu pojawia się opóźnienie |
| Gry | 115200 | ~1000 | ~350 | Osiągnięto limit przepustowości szeregowej; nadmiar danych wejściowych w kolejce |

**Wniosek (tryb absolutny):**

Bezwzględny tryb myszy skaluje się wraz z szybkością transmisji, ale pozostaje ograniczony przez **przepustowość szeregową i buforowanie wejścia**.
Przy **9600 bodów** wszystkie typy myszy mają wąskie gardło i ruch jest opóźniony.
Przy **115200 bodów** standardowe myszy osiągają stabilne zachowanie, ale **myszy do gier o wysokim odpytywaniu nadal przekraczają dostępną przepustowość**, wprowadzając opóźnienia.

**Tryb absolutny nadaje się do sterowania komputerem stacjonarnym, a nie do gier wrażliwych na opóźnienia.**

---

### B. Względny tryb zdarzenia myszy

Tryb względnych zdarzeń myszy przechwytuje **zdarzenia ruchu myszy bezpośrednio z okna systemu operacyjnego**, oblicza **deltę ruchu pomiędzy kolejnymi pozycjami kursora** i przekazuje tylko dane dotyczące ruchu względnego do systemu docelowego.

Ten tryb:

* Czy **nie wymaga dodatkowych uprawnień systemowych**
* Jest niezależny od **bezwzględnych współrzędnych ekranu**
* Korzyści z **większego okna przechwytywania**, umożliwiającego dokładniejsze delty ruchu
* Unika buforowania pozycji bezwzględnej, co skutkuje **mniejszymi opóźnieniami i lepszą responsywności**

#### Względna wydajność trybu zdarzenia myszy

| Typ myszy | Szybkość transmisji | Częstotliwość hosta (Hz) | Częstotliwość docelowa (Hz) | Notatki |
| ---------- | --------- | -------------- | ---------------- | -------------------------------------------------- |
| Bluetooth | 9600 | ~100 | ~90 | Blisko limitu seryjnego; stabilny do codziennego użytku |
| Przewodowy | 9600 | ~125 | ~90 | Przepustowość szeregowa nasycona; drobne opóźnienie |
| Gry | 9600 | ~1000 | ~100 | Wysokie odpytywanie przekracza przepustowość; wejście skompresowane |
| Bluetooth | 115200 | ~125 | ~125 | Mapowanie hosta do celu 1:1 |
| Przewodowy | 115200 | ~180 | ~150 | Poprawiona przepustowość; płynne śledzenie |
| Gry | 115200 | ~1000 | ~450 | Najlepiej zaobserwowane wyniki; ograniczona przepustowość szeregowa |

🔴 **9600 bodów jest niewystarczające dla myszy do gier o wysokim poziomie odpytywania**
🟢 **115200 bodów umożliwia czułe wejście klasy gamingowej w trybie zdarzenia względnego**
---

### C. Względny tryb HID myszy

Tryb względnego myszy HID **bezpośrednio konwertuje dane wejściowe myszy macOS HID na zdarzenia HID w systemie docelowym**, omijając przetwarzanie kursora na poziomie okna i bezwzględne mapowanie współrzędnych.

Ten tryb:

* Działa na **surowych zdarzeniach myszy na poziomie HID**
* Czy **nie zależy od rozmiaru okna aplikacji**
* Zachowuje **natywną charakterystykę odpytywania myszy**
* Minimalizuje pośrednie buforowanie i translację
* Zapewnia **najniższe opóźnienie** spośród wszystkich trybów myszy

W rezultacie tryb Relative Mouse HID zapewnia zachowanie **najbliższe bezpośredniemu połączeniu myszy USB**, szczególnie przy wyższych szybkościach transmisji.

#### Względna wydajność trybu HID myszy

| Typ myszy | Szybkość transmisji | Częstotliwość hosta (Hz) | Częstotliwość docelowa (Hz) | Notatki |
| ---------- | --------- | -------------- | ---------------- | -------------------------------------------------- |
| Bluetooth | 9600 | ~100 | ~90 | Blisko limitu seryjnego; dopuszczalne do podstawowego użytku |
| Przewodowy | 9600 | ~250 | ~180 | Pasmo szeregowe częściowo nasycone |
| Gry | 9600 | >1000 | ~90 | Wysokie odpytywanie przekracza dostępną przepustowość |
| Bluetooth | 115200 | ~160 | ~155 | Prawie 1:1 mapowanie hosta do celu |
| Przewodowy | 115200 | ~250 | ~150 | Stabilny i responsywny |
| Gry | 115200 | >1000 | ~500 | Najlepsza ogólna wydajność; ograniczona przepustowość szeregowa |

**Kluczowe wnioski (względny tryb HID):**

* Zapewnia **najniższe opóźnienie** ze wszystkich trybów myszy
* Przy **9600 bodów** myszy o wysokim poziomie odpytywania mają ograniczoną przepustowość
* Przy **115200 bodach** myszy do gier osiągają **setki zdarzeń po stronie docelowej na sekundę**
* **Zdecydowanie zalecany do gier i szybkiego ruchu kamery**

---

### D. Bezpośrednia mysz w systemie Windows (odniesienie)

| Typ myszy | Częstotliwość docelowa (Hz) |
| --------------- | ---------------- |
| Mysz Bluetooth | 80–85 |
| Mysz przewodowa | 120–125 |
| Mysz do gier | >1000 |

To odniesienie pokazuje, że **Mini-KVM (115200 bodów, tryb względny HID)** może zbliżyć się do wydajności natywnej myszy przewodowej, chociaż nie może w pełni wyeliminować nieodłącznego obciążenia KVM i transportu szeregowego.

---

## 4. Zalecana konfiguracja gier

### ✅Polecane

* **Tryb myszy:** Względny HID myszy
* **Szybkość transmisji:** 115200
* **Typ myszy:** Mysz przewodowa lub do gier
* **Częstotliwość odpytywania:** zalecana ≤1000 Hz

### ❌ Unikaj

* Absolutny tryb myszy do gier
* 9600 bodów w przypadku myszy o wysokim poziomie odpytywania
* Zbyt wysokie współczynniki odpytywania bez wystarczającej przepustowości szeregowej

---

## 5. Ważne oczekiwania

Openterface Mini-KVM jest przeznaczony przede wszystkim do:

✔ Interakcja BIOS/UEFI
✔ Konfiguracja systemu i debugowanie
✔ Zdalny dostęp i zarządzanie

Chociaż **gra jest możliwa**, Mini-KVM **nie zastępuje bezpośredniej myszy do gier USB**, szczególnie w przypadku tytułów o dużej konkurencji lub wymagających krytycznych opóźnień.

---

## 6. Podsumowanie końcowe

* **Gra za pomocą Openterface Mini-KVM jest możliwa** przy prawidłowej konfiguracji
* Responsywność w grach jest zdominowana przez **tryb myszy, szybkość odpytywania i szybkość transmisji**, a nie wydajność procesora hosta
* **Tryb myszy bezwzględnej** priorytetem jest dokładność pozycjonowania i nie nadaje się do gier
* **9600 bodów** tworzy sztywny pułap przepustowości wejściowej
* **Tryb względnej myszy HID przy 115200 bodach** zapewnia najlepszą równowagę:

  * Częstotliwość wejściowa
  * Opóźnienie
  * Stabilność
* Chociaż Mini-KVM nie może w pełni dorównać natywnemu połączeniu USB, może zapewnić **grywalne i responsywne wrażenia** w przypadku zwykłych i niektórych scenariuszy gier rywalizacyjnych

---

### Ogólny werdykt

✅ **Sprawny technicznie**
✅ **Przejrzyste pozycjonowanie dla graczy**
✅ **Szczerze mówiąc o ograniczeniach**