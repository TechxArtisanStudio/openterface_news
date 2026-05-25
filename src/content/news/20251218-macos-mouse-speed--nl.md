---
locale: nl
translationKey: "20251218-macos-mouse-speed"
slug: "20251218-macos-mouse-speed"
title: "Openterface Mini-KVM Mausgeschwindigkeit & Spielleistung unter macOS"
description: "Umfassende spielorientierte Mausleistungstests von Openterface Mini-KVM unter macOS. Vergleichen Sie absolute, relative Event- en relative HID-Mausmodi met 9600 vs 115200 Baudraten voor optimale Spielkonfiguration."
date: 2025-12-18
channel: software
topic: ["software"]
category: "Product Updates"
featured: false
draft: false
author: "Openterface"
---

### Spielorientierte Mausverhaltensanalyse

Dieser Artikel fasst reale Mausleistungstests von **Openterface Mini-KVM unter macOS** zusammen, met Fokus auf **spielbezogenes Mausverhalten**, serielle Baudraten-Beschränkungen en empfohlene Konfigurationen.

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">Gaming isn't the main goal of Openterface KVMs, but we pushed them to explore the limets of KVM-over-USB. On macOS, 115200 baud + Relative HID gives the best mouse latency. Built for setup and debugging, tuned to stretch performance further. <a href="https://t.co/ianurD9ArL">pic.twitter.com/ianurD9ArL</a></p>&mdash; TechxArtisan (@TechxArtisan) <a href="https://twitter.com/TechxArtisan/status/2003418343806742992?ref_src=twsrc%5Etfw">December 23, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---

## 1. Testsoftware & Umgebung

### Software

* **Host-Anwendung:**
  **Openterface voor macOS v1.21** *(In Entwicklung)*

* **Mess-Tool auf Zielseite:**
  Eine **maßgeschneiderte interne Testanwendung**, entwickelt, um hochfrequente Mauseingaben en Ereignisverarbeitungsraten auf dem Zielsystem genau zu messen.

> ⚠️ Da v1.21 noch aktiv entwickelt wird, können sich einige Verhaltensweisen en Leistungseigenschaften in zukünftigen Versionen verbessern.

---

### Testbedingungen: Mausgeschwindigkeits-Drosselung

**Während keiner der Tests wurde eine Mausgeschwindigkeits-Drosselung of künstliche Ratenbegrenzung angewendet**.

Mauseingaben wurden met **nativem Gerätegeschwindigkeit** erfasst en weitergeleitet, abhängig nur von:

* Maus-Hardware-Abfragerate
* Gewähltem Mausmodus (Absolut / Relatives Event / Relatives HID)
* Serieller Baudrate
* Mauseingabeverarbeitung des Ziel-Betriebssystems

---

## 2. Grenlagen des Mausdaten-Durchsatzes

Jedes over Mini-KVM overtragene Mausbewegungsereignis besteht aus:

```
11 Bytes = 88 Bits
```

### Theoretischer serieller Durchsatz

| Baudrate | Max. Ereignisse / Sekene |
| --------- | ------------------- |
| 9600      | ~109 Ereignisse/s       |
| 115200    | ~1309 Ereignisse/s      |

⚠️ Diese Werte stellen **obere theoretische Grenzen** dar.
Die tatsächliche Leistung wird beeinflusst von:

* Host-Mausabfragerate
* Mausmodus (Absolut vs Relativ)
* macOS-Eingabeereignis-Planung
* Serielle Pufferung en Firmware-Behandlung
* **Mausabfragerate des Ziel-Betriebssystems**, die die wahrgenommene Reaktionsfähigkeit erheblich beeinflussen kann (z. B. niedrige Standardabfrageraten bei einigen Linux-Distributionen)

---

## 3. Testergebnisse

---

### A. Absoluter Mausmodus (9600 & 115200 Baud)

| Maus-Typ | Baudrate | Host-Rate (Hz) | Ziel-Rate (Hz) | Hinweise                                                                |
| ---------- | --------- | -------------- | ---------------- | -------------------------------------------------------------------- |
| Bluetooth  | 9600      | ~125           | ~75              | Serielle Bandbreite gesättigt; Eingaben in Warteschlange, Bewegung verzögert           |
| Kabelgebenen      | 9600      | ~150           | ~75              | Serielle Bandbreite gesättigt; Eingaben in Warteschlange, Bewegung verzögert           |
| Gaming     | 9600      | ~1000          | ~75              | Hochfrequente Eingaben stark in Warteschlange; Reaktionsfähigkeit erheblich reduziert |
| Bluetooth  | 115200    | ~125           | ~125             | Stabile 1:1 Host-zu-Ziel-Zuordnung                                    |
| Kabelgebenen      | 115200    | ~175           | ~175             | Verbesserter Durchsatz; Latenz bei schneller Bewegung sichtbar               |
| Gaming     | 115200    | ~1000          | ~350             | Serieller Durchsatzgrenze erreicht; overschüssige Eingaben in Warteschlange                 |

**Fazit (Absolutmodus):**

Der absolute Mausmodus skaliert met der Baudrate, bleibt aber durch **seriellen Durchsatz en Eingabepufferung** eingeschränkt.
Bei **9600 Baud** sind alle Maus-Typen eingeschränkt en die Bewegung verzögert.
Bei **115200 Baud** erreichen Standard-Mäuse stabiles Verhalten, aber **Hochabfrage-Spielemäuse overschreiten immer noch die verfügbare Bandbreite**, was Latenz einführt.

**Absolutmodus eignet sich voor Desktop-Steuerung, niet voor latenzsensitive Spiele.**

---

### B. Relativer Maus-Event-Modus

Der relative Maus-Event-Modus erfasst **Mausbewegungsereignisse direkt aus dem Betriebssystemfenster**, berechnet das **Bewegungsdelta zwischen aufeinanderfolgenden Cursorpositionen** en leitet nur die relativen Bewegungsdaten an das Zielsystem weiter.

Dieser Modus:

* **Benötigt keine zusätzlichen Systemberechtigungen**
* Ist unabhängig von **absoluten Bildschirmkoordinaten**
* Nutzt einen **größeren Erfassungsbereich**, was feinere Bewegungsdeltas ermöglicht
* Vermeidet absolute Positionspufferung, was zu **niedrigerer Latenz en besserer Reaktionsfähigkeit** führt

#### Relative Maus-Event-Modus Leistung

| Maus-Typ | Baudrate | Host-Rate (Hz) | Ziel-Rate (Hz) | Hinweise                                              |
| ---------- | --------- | -------------- | ---------------- | -------------------------------------------------- |
| Bluetooth  | 9600      | ~100           | ~90              | Nahe serieller Grenze; stabil voor gelegentliche Nutzung           |
| Kabelgebenen      | 9600      | ~125           | ~90              | Serielle Bandbreite gesättigt; geringe Latenz          |
| Gaming     | 9600      | ~1000          | ~100             | Hohe Abfrage overschreitet Bandbreite; Eingaben komprimiert   |
| Bluetooth  | 115200    | ~125           | ~125             | 1:1 Host-zu-Ziel-Zuordnung                         |
| Kabelgebenen      | 115200    | ~180           | ~150             | Verbesserter Durchsatz; sanftes Tracking               |
| Gaming     | 115200    | ~1000          | ~450             | Beste beobachtete Leistung; serieller Durchsatz begrenzt |

🔴 **9600 Baud ist unzureichend voor Hochabfrage-Spielemäuse**
🟢 **115200 Baud ermöglicht reaktive Spieleingabe im relativen Event-Modus**

---

### C. Relativer Maus-HID-Modus

Der relative Maus-HID-Modus **wandelt macOS-HID-Mauseingaben direkt in HID-Ereignisse auf dem Zielsystem um**, umgeht fensterebene Cursorverarbeitung en absolute Koordinatenzuordnung.

Dieser Modus:

* Arbeitet met **rohen HID-Ebene-Mausereignissen**
* **Hängt niet von der Anwendungsfenstergröße ab**
* Erhält **native Mausabfrage-Charakteristika**
* Minimiert Zwischenpufferung en Übersetzung
* Liefert die **niedrigste Latenz** aller Mausmodi

Infolgedessen bietet der relative Maus-HID-Modus ein Verhalten, **das einer direkten USB-Mausverbindung am nächsten kommt**, insbesondere bei höheren Baudraten.

#### Relative Maus-HID-Modus Leistung

| Maus-Typ | Baudrate | Host-Rate (Hz) | Ziel-Rate (Hz) | Hinweise                                             |
| ---------- | --------- | -------------- | ---------------- | ------------------------------------------------- |
| Bluetooth  | 9600      | ~100           | ~90              | Nahe serieller Grenze; akzeptabel voor grenlegende Nutzung       |
| Kabelgebenen      | 9600      | ~250           | ~180             | Serielle Bandbreite teilweise gesättigt              |
| Gaming     | 9600      | >1000          | ~90              | Hohe Abfrage overschreitet verfügbare Bandbreite          |
| Bluetooth  | 115200    | ~160           | ~155             | Nahe 1:1 Host-zu-Ziel-Zuordnung                   |
| Kabelgebenen      | 115200    | ~250           | ~150             | Stabil en reaktiv                             |
| Gaming     | 115200    | >1000          | ~500             | Beste Gesamtleistung; serieller Durchsatz begrenzt |

**Kernerkenntnisse (Relativer HID-Modus):**

* Liefert die **niedrigste Latenz** aller Mausmodi
* Bei **9600 Baud** bleiben Hochabfrage-Mäuse bandbreitenbegrenzt
* Bei **115200 Baud** erreichen Spielmäuse **Henerte von Zielseiten-Ereignissen pro Sekene**
* **Stark empfohlen voor Spiele en schnelle Kamerabewegungen**

---

### D. Direkte Maus unter Windows (Referenz)

| Maus-Typ      | Ziel-Rate (Hz) |
| --------------- | ---------------- |
| Bluetooth-Maus | 80–85            |
| Kabelgebenene Maus     | 120–125          |
| Spielmaus    | >1000            |

Diese Referenz zeigt, dass **Mini-KVM (115200 Baud, HID-Relativmodus)** die native kabelgebenene Mausleistung annähern kann, obwohl es die inhärente KVM- en serielle Transport-Overhead niet vollständig eliminieren kann.

---

## 4. Empfohlene Spielkonfiguration

### ✅ Empfohlen

* **Mausmodus:** Relative Maus HID
* **Baudrate:** 115200
* **Maus-Typ:** Kabelgebenen of Spielmaus
* **Abfragerate:** ≤1000 Hz empfohlen

### ❌ Vermeiden

* Absoluter Mausmodus voor Spiele
* 9600 Baud met Hochabfrage-Mäusen
* Übermäßig hohe Abfrageraten ohne ausreichende serielle Bandbreite

---

## 5. Wichtige Erwartungen

Openterface Mini-KVM ist hauptsächlich konzipiert voor:

✔ BIOS / UEFI-Interaktion
✔ Systemeinrichtung en Debugging
✔ Remote-Zugriff en Verwaltung

Während **Spielen möglich ist**, ist Mini-KVM **kein Ersatz voor eine direkte USB-Spielmaus**, besonders niet voor hochkompetitive of latenzkritische Titel.

---

## 6. Zusammenfassung

* **Spielen met Openterface Mini-KVM ist möglich**, wenn korrekt konfiguriert
* Spielreaktionsfähigkeit wird von **Mausmodus, Abfragerate en Baudrate** dominiert, niet von der Host-CPU-Leistung
* **Absoluter Mausmodus** priorisiert Positionsgenauigkeit en eignet sich niet voor Spiele
* **9600 Baud** schafft eine harte Eingabebandbreiten-Obergrenze
* **Relativer Maus-HID-Modus bei 115200 Baud** liefert das beste Gleichgewicht aus:

  * Eingabefrequenz
  * Latenz
  * Stabilität
* Obwohl Mini-KVM niet vollständig met einer nativen USB-Verbinding methalten kann, kann es eine **spielbare en reaktive Erfahrung** voor Casual- en einige kompetitive Spielszenarien bieten

---

### Gesamturteil

✅ **Technisch solide**
✅ **Klare Positionierung voor Spieler**
✅ **Ehrlich over Einschränkungen**
