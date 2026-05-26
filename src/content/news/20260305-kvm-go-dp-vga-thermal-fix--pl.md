---
locale: pl
translationKey: "20260305-kvm-go-dp-vga-thermal-fix"
slug: "20260305-kvm-go-dp-vga-thermal-fix"
title: "Poprawka termiczna KVM-Go DP/VGA – dziennik inżynieryjny"
description: "Głębokie omówienie problemu ogrzewania DP i VGA w KVM-Go, szczegółowe pomiary, zmiany PCB i poprawki mechaniczne, które rozwiązały przegrzanie bez dodawania wentylatora."
date: 2026-03-05
channel: product
product: kvm-go
topic: ["software", "event", "analysis"]
category: "Product Updates"
tags: ["KVM-Go", "Thermal", "Engineering Log", "Product Design"]
featured: false
draft: false
author: "TechxArtisan Studio"
---
## Wpis 1: Moment, w którym zdaliśmy sobie sprawę, że nie jest „normalnie ciepło”
W połowie prac nad KVM-GO zaobserwowaliśmy zachowanie termiczne, które nie odpowiadało typowym oczekiwaniom dotyczącym nagrzewania się małego urządzenia. Pojawił się tylko w dwóch wariantach, DisplayPort (DP) i VGA. Wariant HDMI pozostał zgodny z oczekiwaniami.

Początkowo objaw był prosty. Temperatura w obudowie stała się niekomfortowa wcześniej, niż oczekiwano. To, co nas niepokoiło, to nie komfort. Istniała możliwość, że temperatury wewnętrzne znacznie przekraczały tolerancję komponentów klasy konsumenckiej w miarę upływu czasu.


---

## Wpis 2: Dlaczego tylko DP i VGA
Po prześledzeniu projektu ścieżki wideo w różnych wersjach pojawił się pewien wzorzec.

- HDMI: pojedynczy stopień konwersji (wideo HDMI na USB) przy użyciu MS2130S
- DP: dwuukładowy łańcuch (IT6563 plus MS2130S) do konwersji wideo DP na USB
- VGA: dwuukładowy łańcuch (MS9288C plus MS2109S) do konwersji wideo VGA na USB

Dwa chipy nie tylko dodają części. Dodają rozpraszanie mocy i zlokalizowane gorące punkty. W produkcie o rozmiarach takich jak KVM-GO te gorące punkty mają bardzo mało miejsca na rozprzestrzenienie się.

Następnie natknęliśmy się na drugie ograniczenie, czyli pole powierzchni. KVM-GO zwiększa rozmiar do granic możliwości, co oznacza, że ​​powierzchnia PCB i efektywny obszar rozprowadzania ciepła są niewielkie.

Wreszcie istniało ograniczenie układu, które zamieniło się w prawdziwy kompromis inżynieryjny. Umieszczenie obu gorących chipów po tej samej stronie wydaje się idealne pod względem termicznym, ale wymagania dotyczące układu pinów i szybkiego routingu utrudniają takie podejście. Umieszczenie jednego chipa więcej „wewnątrz” uprościło routing i pomogło zapewnić integralność sygnału, ale spowodowało zatrzymanie ciepła we wnętrzu obudowy.

![Original-PCB-layout](https://assets2.openterface.com/images/Original-PCB-layout.webp)

*Oryginalny układ PCB*

![original-Wiring](https://assets2.openterface.com/images/original-Wiring.webp)

*Oryginalne szybkie routing*

![KVM-Go-tructure](https://assets2.openterface.com/images/KVM-Go-tructure.webp)


*Wewnętrzny układ stosu KVM-GO*

---

## Wpis 3: Pomiar tego, co istotne, temperatury wewnętrznej i zewnętrznej
Postanowiliśmy przestać zgadywać i zmierzyć obie strony problemu. Zbudowaliśmy punkty pomiaru temperatury do monitorowania zewnętrznego i wewnętrznego, a następnie przeprowadziliśmy długotrwały test obciążenia.

Wynik był alarmujący, zwłaszcza na VGA.

Po około godzinie ciągłej pracy:
- powierzchnia zewnętrzna osiągnęła około 65°C
- temperatura wewnętrzna osiągnęła szczyt około 115°C

Maksymalne temperatury robocze wielu podzespołów konsumenckich wynoszą około 85°C, w zależności od konkretnej części i gatunku. Trzycyfrowe temperatury wewnętrzne oznaczały, że nie mieliśmy do czynienia tylko z „gorącym w dotyku”. Szukaliśmy czegoś, co mogłoby skrócić żywotność produktu lub spowodować nieprzewidywalne zachowanie w różnych środowiskach. 

![Original-emperature-test](https://assets2.openterface.com/images/Original-emperature-test.webp)

*Test temperatury bazowej (wewnętrzny i zewnętrzny)*

---

## Wpis 4: Szybka kontrola poprawności, wymuszony przepływ powietrza działa (ale to nie jest rozwiązanie produktowe)
Przed przeprojektowaniem czegokolwiek chcieliśmy szybkiej weryfikacji. Jeśli uda nam się szybciej usunąć ciepło, czy temperatura spadnie znacząco?

Wypróbowaliśmy prostą konfigurację z wymuszonym obiegiem powietrza za pomocą wentylatora DIY. Zrobił to, co mówi fizyka, że ​​powinien. Temperatury spadły zauważalnie, w naszym teście około 15°C. Potwierdziło to, że problemem było wąskie gardło termiczne, a nie artefakty pomiarowe lub zachowanie oprogramowania.

Potwierdziło to także coś jeszcze. Wentylator nie jest kompatybilny z produktem, który budujemy. KVM-GO musi pozostać kompaktowy, cichy i niezależny. Zatem wymuszony przepływ powietrza stał się narzędziem diagnostycznym, a nie ostateczną odpowiedzią.

![Fan-1png](https://assets2.openterface.com/images/Fan-1png.webp)

*Zrób to sam zestaw chłodzący z wentylatorem*

![Fan-2](https://assets2.openterface.com/images/Fan-2.webp)

*Chłodzenie wentylatorem DIY, widok alternatywny*

![Temperature-test-fan](https://assets2.openterface.com/images/Temperature-test-fan.webp)

*Test temperatury z chłodzeniem wentylatorem*

---

## Wpis 5: Napraw krok 1, przesuń źródła ciepła na zewnątrz (bez naruszania integralności sygnału)

Pierwszą prawdziwą poprawką była płytka PCB. Pchnęliśmy projekt tak daleko, jak tylko mogliśmy, w kierunku umieszczenia obu chipów wytwarzających ciepło bliżej strony zewnętrznej.

To nie było „tylko przesuwanie części”. W przypadku DP i VGA ograniczenia routingu są rygorystyczne. Utrzymanie czystości szybkich sygnałów, zwłaszcza par różnicowych, nie podlega negocjacjom. Umieszczenie obu układów na zewnątrz utrudniło routing i musieliśmy pracować ostrożnie, aby uniknąć pogorszenia integralności sygnału.

Porównaliśmy stary i nowy układ i routing, a następnie zbudowaliśmy sprzęt, aby zweryfikować zachowanie. 

![New-PCB-ayout](https://assets2.openterface.com/images/New-PCB-ayout.webp)

*Zmieniony układ PCB (chipy przesunięte na zewnątrz)*

![Wiring-layout-modification](https://assets2.openterface.com/images/Wiring-layout-modification.webp)

*Zmienione trasowanie (przebieg 1)*

![Wiring-layout-modification-2](https://assets2.openterface.com/images/Wiring-layout-modification-2.webp)

*Zmienione routing (obszar kluczowy)*

![PCB-ayout-modifications](https://assets2.openterface.com/images/PCB-ayout-modifications.webp)

*Zmieniona płytka drukowana, zbudowana w celu sprawdzenia*

### Co się zmieniło po kroku 1
Termika uległa poprawie, ale zauważyliśmy problem drugiego rzędu. Temperatura w dalszym ciągu nie przenikała skutecznie do obudowy. Niektóre obszary pozostawały gorętsze niż powinny, a obrazowanie termowizyjne sugerowało, że obudowa nie działa jak właściwy rozpraszacz ciepła.

Krok 1 zmniejszył szczytowe obciążenie cieplne, ale nie rozwiązał w pełni ścieżki cieplnej.  

![Modified-fever-symptoms](https://assets2.openterface.com/images/Modified-fever-symptoms.webp)

*Temperatura po zmianie układu (krok 1)*

![Casing-temperature-test](https://assets2.openterface.com/images/Casing-temperature-test.webp)

*Kontrola przenikania ciepła przez skorupę (po kroku 1)*

---

## Wpis 6: Napraw krok 2, zbuduj prawdziwą ścieżkę cieplną (bloki aluminiowe CNC plus interfejs termiczny)
W tym momencie obudowę potraktowaliśmy jako element układu termicznego, a nie tylko osłonę.

Dodaliśmy:
- Bloki aluminiowe CNC na górnym i dolnym stosie PCB
- materiał interfejsu termicznego (smar termiczny lub podkładka) służący do odprowadzania ciepła do aluminium, a następnie do aluminiowej obudowy

Cel był prosty. Zwiększ efektywny obszar rozprowadzania ciepła i utwórz stabilną ścieżkę o niskim oporze, aby ciepło mogło dotrzeć do obudowy, gdzie może zostać bezpiecznie rozproszone.

![cnc](https://assets2.openterface.com/images/cnc.webp)

*Blok termiczny CNC (krok 2)*

![cnc2](https://assets2.openterface.com/images/cnc2.webp)

*Szczegóły zainstalowanego bloku CNC*

### Wynik końcowy po kroku 2
Po dodaniu ścieżki przewodzenia:
- temperatura zewnętrzna ustabilizowała się w okolicach 65°C
- temperatura wewnętrzna spadła do około 55°C

Termowizja pokazała to, co chcieliśmy zobaczyć. Rozprowadzanie ciepła stało się bardziej równomierne, a obudowa w końcu wzięła udział w odprowadzaniu ciepła, zamiast pozwalać mu gromadzić się wewnętrznie. 

![Temperature-measurement-after-adding-CNC](https://assets2.openterface.com/images/Temperature-measurement-after-adding-CNC.webp)

*Temperatura po przewodzeniu CNC (krok 2)*

![CNC-machining](https://assets2.openterface.com/images/CNC-machining.webp)

*Temperatura powłoki po przewodzeniu CNC*

---

## Notatka końcowa
Wniosek z tego wydania nie był po prostu taki, że „DP i VGA nagrzewają się”. Konwersja wielostopniowa kosztuje więcej energii i tej części się oczekuje. Prawdziwą lekcją było to, że w tak małym urządzeniu miejsce odprowadzania ciepła ma równie duże znaczenie, jak ilość ciepła wytworzonego.

Krok 1 (układ) zmniejszył dotkliwość wewnętrznego gorącego punktu.  
Krok 2 (ścieżka przewodzenia mechanicznego) sprawił, że rozwiązanie było trwałe i dostosowane do produktu.

Żadnego wentylatora, żadnej specjalnej obsługi użytkownika, po prostu konstrukcja, która zachowuje się przewidywalnie.