---
locale: pl
translationKey: "250520-casey"
slug: "250520-Casey"
title: "iPad KVM: kreatywny pomost pomiędzy urządzeniami iOS i urządzeniami niskiego poziomu"
description: "Odkryj, jak Casey Howard stworzył innowacyjne rozwiązanie KVM dla iPada, wykorzystując Raspberry Pi jako mostek, umożliwiając bezpośrednie sterowanie urządzeniami na poziomie BIOS-u z poziomu iPada. Dowiedz się o tym projekcie DIY, który łączy tryb gadżetu Raspberry Pi, VNC i Openterface Mini-KVM do bezobsługowego zarządzania urządzeniami."
date: 2025-05-20
channel: events
eventType: contest
topic: ["shipping", "software", "campaign", "event", "community", "analysis"]
category: "Product Updates"
featured: false
draft: false
author: "Openterface Team"
---
Innowacyjny projekt Casey Howard „iPad KVM” demonstruje wyjątkowe rozwiązywanie problemów w działaniu. Jako studentka informatyki i matematyki na Uniwersytecie Kentucky, gdzie każdy student otrzymuje iPada, Casey stanęła przed wyzwaniem: uzyskiwaniem dostępu do urządzeń niskiego poziomu i zarządzaniem nimi bezpośrednio z iPada. Po odkryciu, że Openterface Mini-KVM nie ma natywnej łączności z systemem iOS, zbudowali własny most.

![Screenshot of YouTube chat interview with Casey on iPad KVM](https://assets.openterface.com/images/blog/Casey-iPad-KVM-chat.webp)

## Wyzwanie

- iOS blokuje USB, uniemożliwiając programowanie Arduino, kontrolę na poziomie BIOS-u i bezgłowy dostęp do serwera
- Casey potrzebowała sposobu na wykorzystanie iPada jako konsoli na poziomie BIOS-u do wszystkiego, od Arduino po serwery Ubuntu, bez Wi-Fi, zewnętrznego zasilania i nieporęcznych urządzeń peryferyjnych

## Rozwiązanie: Most Raspberry Pi

Podstawowa innowacja projektu wykorzystuje Raspberry Pi w „trybie gadżetu” jako mostek o podwójnym przeznaczeniu:

1. **czerpie moc**
    - Port USB-C Pi jest skonfigurowany do pobierania napięcia 5 V bezpośrednio z iPada
2. **Przenosi ruch IP**
    - Wewnętrzny most sieciowy przenosi pakiety IP tym samym kablem USB-C
3. **Obsługuje VNC**
    - Serwer VNC na Pi umożliwia bezpośredni zdalny pulpit na iPadzie, nie wymaga Wi-Fi
4. **Napędy KVM**
    - OpenterfaceQT na interfejsach Pi ze sprzętem Mini-KVM
    - Sesja VNC iPada przesyła strumieniowo wideo i wysyła zdarzenia klawiatury/myszy do dowolnego komputera docelowego

## Szczegóły implementacji

1. **Konfiguracja Raspberry Pi**

    - Włącz tryb gadżetu w _/boot/config.txt_ i _/etc/modules_
    - Skonfiguruj USB-C dla zasilania 5 V
    - Ustanów most sieciowy ze statycznym adresem IP (10.55.0.1)

2. **Konfiguracja pulpitu zdalnego**

    - Zainstaluj i skonfiguruj _x11vnc_ na Pi
    - Automatyczne uruchamianie serwera VNC na interfejsie mostu
    - Na iPadzie połącz się z klientem VNC (np. RNC Viewer) z `10.55.0.1` lub `pi.local`

3. **Integracja Mini-KVM**

    - Skompiluj OpenterfaceQT dla architektury ARM
    - Podłącz Mini-KVM do portów USB i HDMI Pi
    - Zasilaj Pi przez port USB-C

4. **Operacja**
    - Podłącz Pi do iPada za pomocą jednego kabla USB-C
    - Uruchom klienta VNC i uwierzytelnij
    - Otwórz interfejs Mini-KVM na Pi
    - Przesyłaj strumieniowo obraz wideo z urządzenia docelowego i kontroluj go w czasie rzeczywistym

## Architektura systemu

![Standalone KVM Setup](https://assets.openterface.com/images/blog/Casey-Setup-with-Pi-and-minikvm.webp)

### Komponenty

- **iPad (Host)**: klient VNC i źródło zasilania
- **Raspberry Pi 5**: gadżet USB, mostek sieciowy i host OpenterfaceQT
- **Openterface Mini-KVM**: Interfejs sprzętowy dla komputerów docelowych
- **Łączność**: Kable USB-C (zasilanie + sieć), HDMI i USB-A

## Wpływ i dostępność

Dzięki iPadowi, Pi i Mini-KVM Casey zamienił codzienne tablety w konsole z poziomu BIOS-u, bez konieczności stosowania dodatkowego sprzętu ani sieci. To rozwiązanie działa całkowicie na zasilaniu bateryjnym iPada, nie wymaga zewnętrznego zasilania ani Internetu i pozostaje wysoce przenośne do użytku w terenie. Szczegółowa dokumentacja Casey i skrypty kompilacji sprawiają, że to podejście jest dostępne dla każdego, kto ma Raspberry Pi i iPada.

Specjalne podziękowania dla Casey Howard, naszego zwycięzcy **Hardware Hero** w konkursie USB-KVM DIY Challenge 2024, za rozszerzenie możliwości Mini-KVM i zapewnienie eleganckiego obejścia do czasu udostępnienia natywnej obsługi systemu iOS. Dowiedz się więcej tutaj:

- [Contest on Crowd Supply](https://www.crowdsupply.com/techxartisan/usb-kvm-diy-challenge-2024)
- [GitHub: iPad-KVM](https://github.com/FireFreexe/iPad-KVM)