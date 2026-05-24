---
locale: de
translationKey: "20251224-kvm-go-demo-software-hardware"
slug: "20251224-kvm-go-demo-software-hardware"
title: "Neues Demo-Video, Software-Fortschritte und was sich in KVM-GO befindet"
description: "Schauen Sie sich das neue Demo-Video für KVM-GO an und sehen Sie, wie die HDMI/DP/VGA-Versionen in Aktion sind. Erfahren Sie mehr über einheitliche Software für Mini-KVM und KVM-GO, Hardware-Upgrades einschließlich des MS2130S 4K@60Hz-Video-Prozessors und CH32V208-MCU, sowie bevorstehende Funktionen wie die Unterstützung benutzerdefinierter EDID. Kampagnenupdate: $72k mit über 220 Unterstützern."
date: 2025-12-24
channel: product
product: kvm-go
topic: ["software", "campaign", "community"]
category: "Produkt-Updates"
tags: ["KVM-GO", "Produkt-Updates", "Software", "Hardware", "Demo-Video", "Crowdfunding", "Technischer Deep Dive"]
featured: true
draft: false
author: "TechxArtisan Studio"
---

Hey everyone! Entschuldigung für die ruhige Phase. Wir haben uns voll und ganz darauf konzentriert, sowohl Hardware als auch Software für [KVM-GO](https://openterface.com/product/kvm-go/) zu polieren, und die Zeit ist einfach vorbeigegangen. Bis Ende Dezember haben wir **$72k mit über 220 Unterstützern** erreicht, was unglaublich ist. Falls Sie uns dabei helfen können, dies noch weiter zu steigern, teilen Sie bitte die Nachricht!

Vielen herzlichen Dank für Ihre Geduld und Unterstützung. Ja, Weihnachten hat sicherlich zur Verwirrung beigetragen 🙂🎄 Jetzt fangen wir an, aufzuholen.

![blog-Gemini_Generated_Image_kvm-go](https://assets.openterface.com/images/blog/Gemini_Generated_Image_kvm-go.webp)
*Weihnachts-geprägtes Bild, generiert mit Nano Banana, basierend auf realen Fotos unserer KVM-GO Produkte.*

## Neues Demo-Video: KVM-GO in Aktion

Wir haben gerade ein [**neues Demo-Video**](https://www.youtube.com/watch?v=459rWCQbJRE) veröffentlicht, das KVM-GO in der realen Anwendung zeigt.


Im Video sehen Sie:

* KVM-GO **HDMI / DP / VGA** Versionen in Aktion
* Was im **Karton enthalten ist**
* Wie Sie verschiedene Zielgeräte steuern
* Wie KVM-GO in reale Workflows passt, von schnellem Zugriff bis hin zu Multi-Target-Einstellungen

Wenn Sie neugierig auf mehr lockeren, hands-on-Tests und reale Nutzung sind, können Sie auch unsere [sozialen Medien](https://openterface.com/about/community/) besuchen. Wir teilen häufig Roh-Testclips und praktische Szenarien, die zeigen, wie KVM-GO in realen Tech-Frontlines funktioniert.

## Software-Fortschritte: Eine App für Mini-KVM und KVM-GO

Auf der Softwareseite haben wir einen soliden Schritt nach vorne gemacht.

Unsere neuesten Updates ermöglichen es der **gleichen Openterface-App, nahtlos mit beiden Mini-KVM und der KVM-GO-Serie zu funktionieren**. Für Benutzer bedeutet dies:

* Eine konsistente Erfahrung über alle Produkte hinweg
* Weniger Fragmentierung, wenn Sie mehr als ein Openterface-Gerät verwenden

Wir haben auch Zeit investiert, die **Tastatur- und Mausleistung zu verbessern**, mit Fokus auf:

* Geringere Gesamtlatenz
* Stabilere Eingabebehandlung, einschließlich besserer Erkennung des Verbindungsstatus und Signalqualität
* Schnelleres Reagieren bei schnellen oder kontinuierlichen Interaktionen

Obwohl Gaming nicht der primäre Anwendungsfall unserer KVM-Lösungen ist, kümmern wir uns dennoch sehr um die Reaktionsfähigkeit der Eingaben in realen Szenarien. Wenn Sie sich für die technischen Details interessieren, insbesondere unter macOS, haben wir kürzlich einen tiefen Einblick hier veröffentlicht:
👉 **[Openterface Mini-KVM Mausgeschwindigkeit & Gaming-Leistung unter macOS](https://openterface.com/app/updates/20251218-macos-mouse-speed/)**

Viele der dort besprochenen Verbesserungen fließen nun direkt in unsere einheitliche Software-Stack für beide Mini-KVM und KVM-GO.

## Kern-Hardware-Upgrades in KVM-GO (Vergleich zu Mini-KVM)

Für alle, die sich für die internen Details interessieren, hier ein schneller Vergleich der wichtigsten Hardware-Änderungen von Mini-KVM zu KVM-GO.

### Video-Pipeline-Upgrades

| Aspekt           | **MS2109 (Mini-KVM)**    | **MS2130S (KVM-GO)** | Verbesserung           |
| ---------------- | ------------------------ | -------------------- | --------------------- |
| HDMI-Eingabe     | 4K @ 30Hz                | 4K @ 60Hz            | 2× Eingabebandbreite    |
| USB-Videowiedergabe | 1080p @ 30Hz             | 4K @ 60Hz            | 4× Pixeldurchsatz   |
| Interne Skalierung | 4K → 1080p               | Native 4K            | Keine erzwungene Downskalierung |
| Bildlatenz       | Höher (Scaler + Puffer)  | Niedriger (Direkter Pfad) | Verringerte Latenz       |

### USB-Tastatur- & Maus-Emulation-Upgrades

| Aspekt             | **CH340 + CH9329 (Mini-KVM)** | **CH32V208 (KVM-GO)** | Verbesserung     |
| ------------------ | ----------------------------- | --------------------- | --------------- |
| Chipanzahl         | 2 Chips                       | Ein MCU               | Einfacheres System |
| USB-Verarbeitung   | USB–Serial Bridge             | Native USB-Gerät      | Geringere Latenz |
| HID-Erzeugung      | Festfunktion                  | Firmware-definiert    | Vollständige Kontrolle |
| Datenpfad          | USB → UART → HID              | USB → HID             | Ein Hopf entfernt |
| BIOS-Kompatibilität | Gemischt                      | Ausgezeichnet         | Zuverlässiger     |

## Fortgeschrittene Funktionen in aktiver Entwicklung

Viele fortgeschrittene Funktionen sind geplant und werden aktiv für die finale KVM-GO-Firmware entwickelt. Ein kurzer Vorgeschmack:

* **Benutzerdefinierte EDID-Unterstützung** zur Lösung von Anzeigeverträglichkeitsproblemen
* **Skriptbasierte Steuerung** für Automatisierung und fortgeschrittene Workflows

Wir werden weitere Details teilen, sobald diese Funktionen reif sind.

## Open-Source-Verpflichtung (Wie immer)

Ja, **KVM-GO bleibt vollständig Open Source**.

Sobald das Hardware-Design für die Massenproduktion finalisiert ist, beantragen wir die **OSHWA (Open Source Hardware Association)-Zertifizierung**.

Alle Hardware-Designdateien und STL-Modelle werden hier veröffentlicht:
👉 [https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware](https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware)

Transparenz und Community-Kooperation bleiben zentral für das, was wir tun.

## Letzte Tage der Kampagne: Ein nettes Erinnerung

Wir sind nun in den **letzten Tagen** der Crowdfunding-Kampagne.

Crowdfunding ist die **beste Chance, KVM-GO zum niedrigsten Preis zu erhalten**. Sobald die Kampagne endet und wir auf Post-Crowdfunding-Bestellungen umschalten, steigt der Preis.

Wenn Sie sich noch unschlüssig sind, ist jetzt die Zeit.

👉 **Unterstützen Sie die Kampagne und sichern Sie sich Ihr Gerät bei Crowd Supply:**
[https://www.crowdsupply.com/techxartisan/openterface-kvm-go](https://www.crowdsupply.com/techxartisan/openterface-kvm-go)

Vielen herzlichen Dank nochmals für Ihre Geduld, Vertrauen und Unterstützung. Weitere Updates kommen bald, und wir werden versuchen, nicht wieder so still zu sein. Warme Weihnachtsgrüße von uns allen!

**Openterface Team | TechxArtisan**
