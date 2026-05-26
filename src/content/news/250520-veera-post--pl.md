---
locale: pl
translationKey: "250520-veera-post"
slug: "250520-Veera-post"
title: "Koncepcja mostka audio: inspirujący dwukierunkowy przepływ pracy z dźwiękiem i sztuczną inteligencją"
description: "Odkryj innowacyjną koncepcję mostu audio firmy Veera Pendyala dla Openterface Mini-KVM, umożliwiającą dwukierunkową komunikację audio i przepływ pracy AI. Ta wizja inżyniera NVIDIA łączy klucze USB audio, technologię Jetson Nano i KVM, aby stworzyć rozwiązanie niewymagające infrastruktury dla konwersacyjnej sztucznej inteligencji i automatyki domowej."
date: 2025-05-20
channel: events
eventType: contest
topic: ["software", "campaign", "event", "community"]
category: "Product Updates"
featured: false
draft: false
author: "Openterface Team"
---
Koncepcja „Audio Bridge” Veery Pendyali, sprawdzona w praktycznych eksperymentach, zaowocowała przyszłościowymi pomysłami na dwukierunkowy dźwięk i sztuczną inteligencję zasilaną przez Jetson w Mini-KVM. Jako starszy inżynier oprogramowania w firmie NVIDIA z ponad 15-letnim doświadczeniem w inżynierii oprogramowania, Veera zgłębiła swoją wizję: przeniesienie hosta ↔ docelowego dźwięku, konwersacyjnej sztucznej inteligencji i automatyzacji domu do USB KVM.

Veera Pendyala wniosła przyszłościowy pomysł do konkursu USB-KVM DIY Challenge 2024. Jego koncepcja umożliwienia dwukierunkowego dźwięku za pomocą Openterface Mini-KVM ma na celu ulepszenie zdalnego sterowania i aplikacji opartych na sztucznej inteligencji, szczególnie w przypadku komputerów jednopłytkowych, takich jak Jetson Nano. Eksperymenty Veery z kluczami sprzętowymi USB i jego wywiad wywołały inspirujące dyskusje na temat potencjału mostkowania audio w automatyce domowej i konwersacyjnych przepływach pracy AI.

![Veera discussing audio bridge ideas with Billy & Kevin](https://assets.openterface.com/images/blog/Veera-audio-bridge-chat-with-veera.webp)

## Wyzwanie

- **Dźwięk jednokierunkowy**
    HDMI ze strumieni Mini-KVM _target → host_ tylko audio, brak ścieżki dostępu mikrofonu hosta do urządzenia zdalnego

- **Cel zerowej infrastruktury**
    Każde rozwiązanie musi działać bez Internetu, zewnętrznego zasilania i nieporęcznych dodatków

- **Przypadki użycia sztucznej inteligencji i automatyzacji**
    Veera przewiduje mowę na żywo do urządzenia bezgłowego na potrzeby konwersacyjnej sztucznej inteligencji, zdalnej pomocy i monitorowania domu

## Proponowana architektura mostu

1. **Podwójne adaptery dźwiękowe USB**

    - **Klucz sprzętowy po stronie hosta** przechwytuje lokalny mikrofon/dźwięk
    - **Klucz sprzętowy po stronie docelowej** przesyła dźwięk do gniazda mikrofonu zdalnej maszyny

2. **Jetson Nano jako router audio**

    - Uruchamia ALSA/PulseAudio w celu mapowania pomiędzy dwoma kluczami sprzętowymi
    - Hostuje OpenterfaceQT do kontroli KVM i potencjalnego wnioskowania AI

3. **Mini-KVM do wideo i sterowania**
    - HDMI przenosi wideo i docelowy dźwięk z powrotem do hosta
    - Pojedyncze łącze USB obsługuje klawiaturę/mysz i (w przyszłości) kanały audio
4. **Mapowanie kanałów oprogramowania**
    - Proponuje rozszerzenie OpenterfaceQT w celu udostępnienia wielu interfejsów USB
    - Przełącznik interfejsu użytkownika umożliwiający włączenie mikrofonu hosta → routingu docelowego obok strumieni KVM

## Wpływ i społeczność

Eksperymenty Veery uwydatniają szeroki zakres przypadków użycia czekających na odblokowanie poprzez dodanie dźwięku do ekosystemu Mini-KVM. Jego koncepcje ściśle pokrywają się z naszym planem działania dotyczącym przepływów pracy opartych na sztucznej inteligencji, automatyzacji domu i bogatszych doświadczeń w zakresie zdalnego IT.

Specjalne podziękowania dla Veery Pendyala za podzielenie się swoją wizją i zainspirowanie naszej nowej generacji funkcji Mini-KVM. Dowiedz się więcej i zapoznaj się z innymi wpisami na stronie USB-KVM DIY Challenge 2024:

- [Crowd Supply Challenge](https://www.crowdsupply.com/techxartisan/usb-kvm-diy-challenge-2024)

Weź udział w naszej rozmowie strumieniowej na YouTube pt. Crowd Supply Teardown z Helen Leigh, Billym R.B. Wangiem i Kevinem Pengiem, aby dowiedzieć się więcej o Openterface Mini-KVM i genialnych pomysłach z konkursu:
[https://youtu.be/Tp4f_uxEo6E](https://youtu.be/Tp4f_uxEo6E)