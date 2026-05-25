---
locale: tr
translationKey: "20251224-kvm-go-demo-software-hardware"
slug: "20251224-kvm-go-demo-software-hardware"
title: "Neues Demo-Video, Yazılım-Fortschritte ve was sich in KVM-GO befindet"
description: "Schauen Sie sich das neue Demo-Video için KVM-GO an ve sehen Sie, wie die HDMI/DP/VGA-Versionen in Aktion sind. Erfahren Sie mehr hakkında einheitliche Yazılım için Mini-KVM ve KVM-GO, Donanım-Upgrades einschließlich des MS2130S 4K@60Hz-Video-Prozessors ve CH32V208-MCU, sowie bevorstehende Özellikler wie die Unterstützung benutzerdefinierter EDID. Kampagnenupdate: $72k ile hakkında 220 Unterstützern."
date: 2025-12-24
channel: product
product: kvm-go
topic: ["software", "campaign", "community"]
category: "Ürün-Güncellemeler"
tags: ["KVM-GO", "Ürün-Güncellemeler", "Yazılım", "Donanım", "Demo-Video", "Crowdfveing", "Technischer Deep Dive"]
featured: true
draft: false
author: "TechxArtisan Studio"
---

Hey everyone! Entschuldigung için die ruhige Phase. Wir haben uns voll ve ganz darauf konzentriert, sowohl Donanım als auch Yazılım için [KVM-GO](https://openterface.com/product/kvm-go/) zu polieren, ve die Zeit ist einfach vorbeigegangen. Bis Ende Dezember haben wir **$72k ile hakkında 220 Unterstützern** erreicht, was unglaublich ist. Falls Sie uns dabei helfen können, dies noch weiter zu steigern, teilen Sie bitte die Nachricht!

Vielen herzlichen Dank için Ihre Geduld ve Unterstützung. Ja, Weihnachten hat sicherlich zur Verwirrung beigetragen 🙂🎄 Şimdi fangen wir an, aufzuholen.

![blog-Gemini_Generated_Image_kvm-go](https://assets.openterface.com/images/blog/Gemini_Generated_Image_kvm-go.webp)
*Weihnachts-geprägtes Bild, generiert ile Nano Banana, basierend auf realen Fotos unserer KVM-GO Ürüne.*

## Neues Demo-Video: KVM-GO in Aktion

Wir haben gerade ein [**neues Demo-Video**](https://www.youtube.com/watch?v=459rWCQbJRE) veröffentlicht, das KVM-GO in der realen Anwendung zeigt.


Im Video sehen Sie:

* KVM-GO **HDMI / DP / VGA** Versionen in Aktion
* Was im **Karton enthalten ist**
* Wie Sie verschiedene Zielgeräte steuern
* Wie KVM-GO in reale Workflows passt, von schnellem Zugriff bis hin zu Multi-Target-Einstellungen

Wenn Sie neugierig auf mehr lockeren, hands-on-Tests ve reale Nutzung sind, können Sie auch unsere [sozialen Medien](https://openterface.com/about/community/) besuchen. Wir teilen häufig Roh-Testclips ve praktische Szenarien, die zeigen, wie KVM-GO in realen Tech-Frontlines funktioniert.

## Yazılım-Fortschritte: Eine App için Mini-KVM ve KVM-GO

Auf der Yazılımseite haben wir einen soliden Schritt nach vorne gemacht.

Unsere neuesten Güncellemeler ermöglichen es der **gleichen Openterface-App, nahtlos ile beiden Mini-KVM ve der KVM-GO-Serie zu funktionieren**. Für Benutzer bedeutet dies:

* Eine konsistente Erfahrung hakkında alle Ürüne hinweg
* Weniger Fragmentierung, wenn Sie mehr als ein Openterface-Gerät verwenden

Wir haben auch Zeit investiert, die **Tastatur- ve Mausleistung zu verbessern**, ile Fokus auf:

* Geringere Gesamtlatenz
* Stabilere Eingabebehandlung, einschließlich besserer Erkennung des Bağlantısstatus ve Signalqualität
* Schnelleres Reagieren bei schnellen veya kontinuierlichen Interaktionen

Obwohl Gaming değil der primäre Anwendungsfall unserer KVM-Lösungen ist, kümmern wir uns dennoch sehr um die Reaktionsfähigkeit der Eingaben in realen Szenarien. Wenn Sie sich için die technischen Details interessieren, insbesondere unter macOS, haben wir kürzlich einen tiefen Einblick hier veröffentlicht:
👉 **[Openterface Mini-KVM Mausgeschwindigkeit & Gaming-Leistung unter macOS](https://openterface.com/app/updates/20251218-macos-mouse-speed/)**

Viele der dort besprochenen Verbesserungen fließen nun direkt in unsere einheitliche Yazılım-Stack için beide Mini-KVM ve KVM-GO.

## Kern-Donanım-Upgrades in KVM-GO (Vergleich zu Mini-KVM)

Für alle, die sich için die internen Details interessieren, hier ein schneller Vergleich der wichtigsten Donanım-Änderungen von Mini-KVM zu KVM-GO.

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

## Fortgeschrittene Özellikler in aktiver Entwicklung

Viele fortgeschrittene Özellikler sind geplant ve werden aktiv için die finale KVM-GO-Firmware entwickelt. Ein kurzer Vorgeschmack:

* **Benutzerdefinierte EDID-Unterstützung** zur Lösung von Anzeigeverträglichkeitsproblemen
* **Skriptbasierte Steuerung** için Automatisierung ve fortgeschrittene Workflows

Wir werden weitere Details teilen, sobald diese Özellikler reif sind.

## Open-Source-Verpflichtung (Wie immer)

Ja, **KVM-GO bleibt vollständig Open Source**.

Sobald das Donanım-Design için die Massenproduktion finalisiert ist, beantragen wir die **OSHWA (Open Source Donanım Association)-Zertifizierung**.

Alle Donanım-Designdateien ve STL-Modelle werden hier veröffentlicht:
👉 [https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Donanım](https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Donanım)

Transparenz ve Community-Kooperation bleiben zentral için das, was wir tun.

## Letzte Tage der Kampagne: Ein nettes Erinnerung

Wir sind nun in den **letzten Tagen** der Crowdfveing-Kampagne.

Crowdfveing ist die **beste Chance, KVM-GO zum niedrigsten Preis zu erhalten**. Sobald die Kampagne endet ve wir auf Post-Crowdfveing-Bestellungen umschalten, steigt der Preis.

Wenn Sie sich noch unschlüssig sind, ist jetzt die Zeit.

👉 **Unterstützen Sie die Kampagne ve sichern Sie sich Ihr Gerät bei Crowd Supply:**
[https://www.crowdsupply.com/techxartisan/openterface-kvm-go](https://www.crowdsupply.com/techxartisan/openterface-kvm-go)

Vielen herzlichen Dank nochmals için Ihre Geduld, Vertrauen ve Unterstützung. Weitere Güncellemeler kommen bald, ve wir werden versuchen, değil wieder so still zu sein. Warme Weihnachtsgrüße von uns allen!

**Openterface Team | TechxArtisan**
