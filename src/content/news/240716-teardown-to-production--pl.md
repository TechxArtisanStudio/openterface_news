---
locale: pl
translationKey: "240716-teardown-to-production"
slug: "240716-teardown-to-production"
title: "Od rozbiórki do produkcji: idziemy do przodu!"
description: "Aktualizacja produkcyjna Openterface Mini-KVM: udana prezentacja Teardown 2024, uzyskanie certyfikatu OSHWA, wydanie sprzętu w wersji 1.9 z hakowalnymi pinami i dostawa na wrzesień. Plus kompatybilność z Raspberry Pi i integracja z uConsole!"
date: 2024-07-16
channel: product
product: minikvm
topic: ["shipping", "production", "beta", "software", "campaign", "event", "community", "analysis"]
category: "Product Updates"
featured: false
draft: false
author: "Openterface Team"
---
Hej wszystkim,

Minęło trochę czasu od zakończenia naszej kampanii crowdfundingowej i mamy dla Ciebie fantastyczne aktualizacje. Jesteśmy podekscytowani możliwością rozpoczęcia fazy produkcyjnej naszego Openterface Mini-KVM i informowania Cię o naszych postępach.

## Porzucenie – najważniejsze wydarzenia w 2024 r

Po pierwsze, zeszłomiesięczny [Teardown 2024](https://x.com/TechxArtisan/status/1810619822948090092) prowadzony przez [**Crowd Supply**](https://www.crowdsupply.com/teardown/portland-2024) w Portland był po prostu niesamowity. Wspaniale było spotkać się osobiście przy naszym stole demonstracyjnym z tak wieloma naszymi przyjaciółmi i sponsorami z branży technologicznej! Wasze miłe słowa są dla nas wielką zachętą i motywacją. Oto kilka migawek z wydarzenia:

![openterface-billy-at-teardown2024-2](https://www.crowdsupply.com/img/f0a2/16c34150-c59a-40d0-ab77-7c5dada8f0a2/openterface-billy-at-teardown2024-2_jpg_gallery-lg.jpg)

Ogromne podziękowania dla firmy Electromaker za zaprezentowanie naszego produktu podczas wydarzenia! Obejrzyj naszą rozmowę w tym filmie:

<iframe szerokość="800" wysokość="450" src="https://www.youtube.com/embed/K0EuMSQEwKo" title="Odtwarzacz wideo YouTube" Frameborder="0" pozwalają="akcelerometr; autoodtwarzanie; zapis w schowku; multimedia zaszyfrowane; żyroskop; obraz w obrazie; udostępnianie w Internecie" zezwoleniefullscreen></iframe>

## Produkcja pełną parą

W tej chwili jesteśmy zajęci **zamawianiem części i chipów**, takich jak CH9329 i CH340, przygotowując się do produkcji. Przesyłamy również nasz Mini-KVM i kable do testów certyfikacyjnych CE, RoHS i UKCA. Jeśli wszystko pójdzie dobrze, wkrótce rozpoczniemy produkcję w fabrykach. Nasz zespół dba o to, aby każdy etap linii produkcyjnej przebiegał sprawnie, aby dostarczać najwyższej klasy produkt, który jest zarówno zabawny, jak i niezawodny! Oto kilka migawek raportów z testów dla RoHS i CE dla naszego pomarańczowego kabla typu C:

![openterface-test-report-typec](https://www.crowdsupply.com/img/8d57/cd1d5f8e-820b-40c2-b758-1f075e2e8d57/openterface-test-report-typec_jpg_gallery-lg.jpg)

Bądź na bieżąco, ponieważ będziemy mieli więcej podobnych raportów dla naszych Mini-KVM i innych kabli, aby upewnić się, że wszystkie spełniają wymagane standardy certyfikacyjne.

## Certyfikat OSHWA

Z radością ogłaszamy, że nasz Openterface Mini-KVM posiada teraz oficjalny certyfikat **OSHWA** jako w pełni open source! 🥳 Nasz certyfikat możesz sprawdzić tutaj: [OSHWA UID CN000015](https://certification.oshwa.org/cn000015.html). Zależy nam na tym, aby zarówno oprogramowanie, jak i sprzęt były typu open source, umożliwiając miłośnikom technologii odkrywanie potencjału USB KVM, przyczynianie się do jego rozwoju i wspólne budowanie tętniącej życiem społeczności.

![openterface-oshw-cn000015](https://www.crowdsupply.com/img/925a/fbf33f8d-0c0d-405e-bb34-6e0038c9925a/openterface-oshw-cn000015_jpg_md-xl.jpg)

## Aktualizacja sprzętu V1.9


Właśnie wypuściliśmy **sprzęt V1.9 z dodatkowymi pinami: VCC, GND, Target D+, Target D-, Host D+, Host D-** dla jeszcze większej zabawy z hackowaniem! Te piny danych są podłączone do koncentratora USB urządzenia docelowego i hosta. Teraz możesz samodzielnie dodawać rozszerzenia do Openterface — pomyśl o ATX, mostowaniu sieciowym, obejściu audio i nie tylko. Jakie masz kreatywne pomysły na zhakowanie naszego Mini-KVM za pomocą tych pinów? Dołącz do naszych [Reddit](/reddit) lub [Discord](/discord), podziel się swoimi przemyśleniami i baw się z nami kodowaniem!

![openterface-v1-9-hackable](https://www.crowdsupply.com/img/caf8/7b5bb696-2342-487a-b0e8-aa137e6dcaf8/openterface-v1-9-hackable_jpg_md-xl.jpg)

## Uruchom Openterface na Pi i połącz siły z uConsole

Udało nam się **uruchomić naszą aplikację hosta QT w środowisku Pi**! Jeszcze bardziej ekscytujące jest to, jak nasz Mini-KVM może współpracować z **uConsole** firmy Clockwork, aby przekształcić go w przenośne narzędzie KVM. Jest bardzo przydatny do podłączania i szybkiego rozwiązywania problemów z dowolnymi urządzeniami bezgłowymi w pobliżu.

<iframe szerokość="800" wysokość="450" src="https://www.youtube.com/embed/n7k_FwgM9kA" title="Odtwarzacz wideo YouTube" Frameborder="0" pozwalają="akcelerometr; autoodtwarzanie; zapis w schowku; multimedia zaszyfrowane; żyroskop; obraz w obrazie; udostępnianie w sieci" zezwoleniefullscreen></iframe>

## Rozwój i ostatnie poprawki

Nasz zespół programistów, kierowany przez Kevina, niestrudzenie pracuje nad testowaniem i udoskonalaniem kodu. Dołącz do naszego [Techxartisan's Discord](/discord), aby spędzać czas z naszym zespołem programistów i beta oraz być na bieżąco z naszymi postępami. W międzyczasie Billy zajmuje się całą dokumentacją i finalizuje projekt naszego produktu, opakowania i instrukcji produktu. 

Oto rzut oka na nasze zaktualizowane nadruki i etykiety na aluminiową obudowę, zaprezentowane w [Kazubu’s tweet](https://x.com/_kazubu/status/1803442407800971612), kiedy Billy udostępnił mu je w Tokio w Japonii:

![openterface-kazubu-tweet-new-look](https://www.crowdsupply.com/img/a680/71cdf2d7-27a3-4b93-8271-b3e82229a680/openterface-kazubu-tweet-new-look_jpg_md-xl.jpg)

## W planach na wrzesień

Obecnie działamy zgodnie z harmonogramem i ciężko pracujemy, aby dostarczyć nasze Mini-KVM do końca września.

Będziemy wdzięczni za pomoc w rozpowszechnianiu informacji o naszym Mini-KVM. Mamy nadzieję, że przyniesie korzyści większej liczbie entuzjastów technologii i ułatwi życie techniczne każdemu, kto zarządza urządzeniami bezgłowymi.

Dziękuję bardzo za całe wsparcie i entuzjazm. Nie udałoby nam się to bez Was!

Pozdrawiam,  
Billy'ego Wanga  
Zespół Openterface'a