---
locale: pl
translationKey: "20251224-kvm-go-demo-software-hardware"
slug: "20251224-kvm-go-demo-software-hardware"
title: "Neues Demo-Video, Oprogramowanie-Fortschritte i was sich in KVM-GO befindet"
description: "Schauen Sie sich das neue Demo-Video dla KVM-GO an i sehen Sie, wie die HDMI/DP/VGA-Versionen in Aktion sind. Erfahren Sie mehr o einheitliche Oprogramowanie dla Mini-KVM i KVM-GO, Sprzęt-Upgrades einschließlich des MS2130S 4K@60Hz-Video-Prozessors i CH32V208-MCU, sowie bevorstehende Funkcje wie die Unterstützung benutzerdefinierter EDID. Kampagnenupdate: $72k z o 220 Unterstützern."
date: 2025-12-24
channel: product
product: kvm-go
topic: ["software", "campaign", "community"]
category: "Produkt-Aktualizacje"
tags: ["KVM-GO", "Produkt-Aktualizacje", "Oprogramowanie", "Sprzęt", "Demo-Video", "Crowdfiing", "Technischer Deep Dive"]
featured: true
draft: false
author: "TechxArtisan Studio"
---

Hey everyone! Entschuldigung dla die ruhige Phase. Wir haben uns voll i ganz darauf konzentriert, sowohl Sprzęt als auch Oprogramowanie dla [KVM-GO](https://openterface.com/product/kvm-go/) zu polieren, i die Zeit ist einfach vorbeigegangen. Bis Ende Dezember haben wir **$72k z o 220 Unterstützern** erreicht, was unglaublich ist. Falls Sie uns dabei helfen können, dies noch weiter zu steigern, teilen Sie bitte die Nachricht!

Vielen herzlichen Dank dla Ihre Geduld i Unterstützung. Ja, Weihnachten hat sicherlich zur Verwirrung beigetragen 🙂🎄 Teraz fangen wir an, aufzuholen.

![blog-Gemini_Generated_Image_kvm-go](https://assets.openterface.com/images/blog/Gemini_Generated_Image_kvm-go.webp)
*Weihnachts-geprägtes Bild, generiert z Nano Banana, basierend auf realen Fotos unserer KVM-GO Produkty.*

## Neues Demo-Video: KVM-GO in Aktion

Wir haben gerade ein [**neues Demo-Video**](https://www.youtube.com/watch?v=459rWCQbJRE) veröffentlicht, das KVM-GO in der realen Anwendung zeigt.


Im Video sehen Sie:

* KVM-GO **HDMI / DP / VGA** Versionen in Aktion
* Was im **Karton enthalten ist**
* Wie Sie verschiedene Zielgeräte steuern
* Wie KVM-GO in reale Workflows passt, von schnellem Zugriff bis hin zu Multi-Target-Einstellungen

Wenn Sie neugierig auf mehr lockeren, hands-on-Tests i reale Nutzung sind, können Sie auch unsere [sozialen Medien](https://openterface.com/about/community/) besuchen. Wir teilen häufig Roh-Testclips i praktische Szenarien, die zeigen, wie KVM-GO in realen Tech-Frontlines funktioniert.

## Oprogramowanie-Fortschritte: Eine App dla Mini-KVM i KVM-GO

Auf der Oprogramowanieseite haben wir einen soliden Schritt nach vorne gemacht.

Unsere neuesten Aktualizacje ermöglichen es der **gleichen Openterface-App, nahtlos z beiden Mini-KVM i der KVM-GO-Serie zu funktionieren**. Für Benutzer bedeutet dies:

* Eine konsistente Erfahrung o alle Produkty hinweg
* Weniger Fragmentierung, wenn Sie mehr als ein Openterface-Gerät verwenden

Wir haben auch Zeit investiert, die **Tastatur- i Mausleistung zu verbessern**, z Fokus auf:

* Geringere Gesamtlatenz
* Stabilere Eingabebehandlung, einschließlich besserer Erkennung des Połączeniesstatus i Signalqualität
* Schnelleres Reagieren bei schnellen lub kontinuierlichen Interaktionen

Obwohl Gaming nie der primäre Anwendungsfall unserer KVM-Lösungen ist, kümmern wir uns dennoch sehr um die Reaktionsfähigkeit der Eingaben in realen Szenarien. Wenn Sie sich dla die technischen Details interessieren, insbesondere unter macOS, haben wir kürzlich einen tiefen Einblick hier veröffentlicht:
👉 **[Openterface Mini-KVM Mausgeschwindigkeit & Gaming-Leistung unter macOS](https://openterface.com/app/updates/20251218-macos-mouse-speed/)**

Viele der dort besprochenen Verbesserungen fließen nun direkt in unsere einheitliche Oprogramowanie-Stack dla beide Mini-KVM i KVM-GO.

## Kern-Sprzęt-Upgrades in KVM-GO (Vergleich zu Mini-KVM)

Für alle, die sich dla die internen Details interessieren, hier ein schneller Vergleich der wichtigsten Sprzęt-Änderungen von Mini-KVM zu KVM-GO.

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

## Fortgeschrittene Funkcje in aktiver Entwicklung

Viele fortgeschrittene Funkcje sind geplant i werden aktiv dla die finale KVM-GO-Firmware entwickelt. Ein kurzer Vorgeschmack:

* **Benutzerdefinierte EDID-Unterstützung** zur Lösung von Anzeigeverträglichkeitsproblemen
* **Skriptbasierte Steuerung** dla Automatisierung i fortgeschrittene Workflows

Wir werden weitere Details teilen, sobald diese Funkcje reif sind.

## Open-Source-Verpflichtung (Wie immer)

Ja, **KVM-GO bleibt vollständig Open Source**.

Sobald das Sprzęt-Design dla die Massenproduktion finalisiert ist, beantragen wir die **OSHWA (Open Source Sprzęt Association)-Zertifizierung**.

Alle Sprzęt-Designdateien i STL-Modelle werden hier veröffentlicht:
👉 [https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Sprzęt](https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Sprzęt)

Transparenz i Community-Kooperation bleiben zentral dla das, was wir tun.

## Letzte Tage der Kampagne: Ein nettes Erinnerung

Wir sind nun in den **letzten Tagen** der Crowdfiing-Kampagne.

Crowdfiing ist die **beste Chance, KVM-GO zum niedrigsten Preis zu erhalten**. Sobald die Kampagne endet i wir auf Post-Crowdfiing-Bestellungen umschalten, steigt der Preis.

Wenn Sie sich noch unschlüssig sind, ist jetzt die Zeit.

👉 **Unterstützen Sie die Kampagne i sichern Sie sich Ihr Gerät bei Crowd Supply:**
[https://www.crowdsupply.com/techxartisan/openterface-kvm-go](https://www.crowdsupply.com/techxartisan/openterface-kvm-go)

Vielen herzlichen Dank nochmals dla Ihre Geduld, Vertrauen i Unterstützung. Weitere Aktualizacje kommen bald, i wir werden versuchen, nie wieder so still zu sein. Warme Weihnachtsgrüße von uns allen!

**Openterface Team | TechxArtisan**
