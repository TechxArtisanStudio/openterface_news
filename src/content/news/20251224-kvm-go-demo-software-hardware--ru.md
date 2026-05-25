---
locale: ru
translationKey: "20251224-kvm-go-demo-software-hardware"
slug: "20251224-kvm-go-demo-software-hardware"
title: "Neues Demo-Video, Программное обеспечение-Fortschritte и was sich in KVM-GO befindet"
description: "Schauen Sie sich das neue Demo-Video для KVM-GO an и sehen Sie, wie die HDMI/DP/VGA-Versionen in Aktion sind. Erfahren Sie mehr о einheitliche Программное обеспечение для Mini-KVM и KVM-GO, Оборудование-Upgrades einschließlich des MS2130S 4K@60Hz-Video-Prozessors и CH32V208-MCU, sowie bevorstehende Функции wie die Unterstützung benutzerdefinierter EDID. Kampagnenupdate: $72k с о 220 Unterstützern."
date: 2025-12-24
channel: product
product: kvm-go
topic: ["software", "campaign", "community"]
category: "Продукт-Обновления"
tags: ["KVM-GO", "Продукт-Обновления", "Программное обеспечение", "Оборудование", "Demo-Video", "Crowdfиing", "Technischer Deep Dive"]
featured: true
draft: false
author: "TechxArtisan Studio"
---

Hey everyone! Entschuldigung для die ruhige Phase. Wir haben uns voll и ganz darauf konzentriert, sowohl Оборудование als auch Программное обеспечение для [KVM-GO](https://openterface.com/product/kvm-go/) zu polieren, и die Zeit ist einfach vorbeigegangen. Bis Ende Dezember haben wir **$72k с о 220 Unterstützern** erreicht, was unglaublich ist. Falls Sie uns dabei helfen können, dies noch weiter zu steigern, teilen Sie bitte die Nachricht!

Vielen herzlichen Dank для Ihre Geduld и Unterstützung. Ja, Weihnachten hat sicherlich zur Verwirrung beigetragen 🙂🎄 Сейчас fangen wir an, aufzuholen.

![blog-Gemini_Generated_Image_kvm-go](https://assets.openterface.com/images/blog/Gemini_Generated_Image_kvm-go.webp)
*Weihnachts-geprägtes Bild, generiert с Nano Banana, basierend auf realen Fotos unserer KVM-GO Продуктe.*

## Neues Demo-Video: KVM-GO in Aktion

Wir haben gerade ein [**neues Demo-Video**](https://www.youtube.com/watch?v=459rWCQbJRE) veröffentlicht, das KVM-GO in der realen Anwendung zeigt.


Im Video sehen Sie:

* KVM-GO **HDMI / DP / VGA** Versionen in Aktion
* Was im **Karton enthalten ist**
* Wie Sie verschiedene Zielgeräte steuern
* Wie KVM-GO in reale Workflows passt, von schnellem Zugriff bis hin zu Multi-Target-Einstellungen

Wenn Sie neugierig auf mehr lockeren, hands-on-Tests и reale Nutzung sind, können Sie auch unsere [sozialen Medien](https://openterface.com/about/community/) besuchen. Wir teilen häufig Roh-Testclips и praktische Szenarien, die zeigen, wie KVM-GO in realen Tech-Frontlines funktioniert.

## Программное обеспечение-Fortschritte: Eine App для Mini-KVM и KVM-GO

Auf der Программное обеспечениеseite haben wir einen soliden Schritt nach vorne gemacht.

Unsere neuesten Обновления ermöglichen es der **gleichen Openterface-App, nahtlos с beiden Mini-KVM и der KVM-GO-Serie zu funktionieren**. Für Benutzer bedeutet dies:

* Eine konsistente Erfahrung о alle Продуктe hinweg
* Weniger Fragmentierung, wenn Sie mehr als ein Openterface-Gerät verwenden

Wir haben auch Zeit investiert, die **Tastatur- и Mausleistung zu verbessern**, с Fokus auf:

* Geringere Gesamtlatenz
* Stabilere Eingabebehandlung, einschließlich besserer Erkennung des Подключениеsstatus и Signalqualität
* Schnelleres Reagieren bei schnellen или kontinuierlichen Interaktionen

Obwohl Gaming не der primäre Anwendungsfall unserer KVM-Lösungen ist, kümmern wir uns dennoch sehr um die Reaktionsfähigkeit der Eingaben in realen Szenarien. Wenn Sie sich для die technischen Details interessieren, insbesondere unter macOS, haben wir kürzlich einen tiefen Einblick hier veröffentlicht:
👉 **[Openterface Mini-KVM Mausgeschwindigkeit & Gaming-Leistung unter macOS](https://openterface.com/app/updates/20251218-macos-mouse-speed/)**

Viele der dort besprochenen Verbesserungen fließen nun direkt in unsere einheitliche Программное обеспечение-Stack для beide Mini-KVM и KVM-GO.

## Kern-Оборудование-Upgrades in KVM-GO (Vergleich zu Mini-KVM)

Für alle, die sich для die internen Details interessieren, hier ein schneller Vergleich der wichtigsten Оборудование-Änderungen von Mini-KVM zu KVM-GO.

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

## Fortgeschrittene Функции in aktiver Entwicklung

Viele fortgeschrittene Функции sind geplant и werden aktiv для die finale KVM-GO-Firmware entwickelt. Ein kurzer Vorgeschmack:

* **Benutzerdefinierte EDID-Unterstützung** zur Lösung von Anzeigeverträglichkeitsproblemen
* **Skriptbasierte Steuerung** для Automatisierung и fortgeschrittene Workflows

Wir werden weitere Details teilen, sobald diese Функции reif sind.

## Open-Source-Verpflichtung (Wie immer)

Ja, **KVM-GO bleibt vollständig Open Source**.

Sobald das Оборудование-Design для die Massenproduktion finalisiert ist, beantragen wir die **OSHWA (Open Source Оборудование Association)-Zertifizierung**.

Alle Оборудование-Designdateien и STL-Modelle werden hier veröffentlicht:
👉 [https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Оборудование](https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Оборудование)

Transparenz и Community-Kooperation bleiben zentral для das, was wir tun.

## Letzte Tage der Kampagne: Ein nettes Erinnerung

Wir sind nun in den **letzten Tagen** der Crowdfиing-Kampagne.

Crowdfиing ist die **beste Chance, KVM-GO zum niedrigsten Preis zu erhalten**. Sobald die Kampagne endet и wir auf Post-Crowdfиing-Bestellungen umschalten, steigt der Preis.

Wenn Sie sich noch unschlüssig sind, ist jetzt die Zeit.

👉 **Unterstützen Sie die Kampagne и sichern Sie sich Ihr Gerät bei Crowd Supply:**
[https://www.crowdsupply.com/techxartisan/openterface-kvm-go](https://www.crowdsupply.com/techxartisan/openterface-kvm-go)

Vielen herzlichen Dank nochmals для Ihre Geduld, Vertrauen и Unterstützung. Weitere Обновления kommen bald, и wir werden versuchen, не wieder so still zu sein. Warme Weihnachtsgrüße von uns allen!

**Openterface Team | TechxArtisan**
