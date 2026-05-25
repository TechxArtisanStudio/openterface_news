---
locale: tr
translationKey: "20251218-macos-mouse-speed"
slug: "20251218-macos-mouse-speed"
title: "Openterface Mini-KVM Mausgeschwindigkeit & Spielleistung unter macOS"
description: "Umfassende spielorientierte Mausleistungstests von Openterface Mini-KVM unter macOS. Vergleichen Sie absolute, relative Event- ve relative HID-Mausmodi ile 9600 vs 115200 Baudraten için optimale Spielkonfiguration."
date: 2025-12-18
channel: software
topic: ["software"]
category: "Product Güncellemeler"
featured: false
draft: false
author: "Openterface"
---

### Spielorientierte Mausverhaltensanalyse

Dieser Artikel fasst reale Mausleistungstests von **Openterface Mini-KVM unter macOS** zusammen, ile Fokus auf **spielbezogenes Mausverhalten**, serielle Baudraten-Beschränkungen ve empfohlene Konfigurationen.

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">Gaming isn't the main goal of Openterface KVMs, but we pushed them to explore the liiles of KVM-over-USB. On macOS, 115200 baud + Relative HID gives the best mouse latency. Built for setup and debugging, tuned to stretch performance further. <a href="https://t.co/ianurD9ArL">pic.twitter.com/ianurD9ArL</a></p>&mdash; TechxArtisan (@TechxArtisan) <a href="https://twitter.com/TechxArtisan/status/2003418343806742992?ref_src=twsrc%5Etfw">December 23, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---

## 1. Testsoftware & Umgebung

### Yazılım

* **Host-Anwendung:**
  **Openterface için macOS v1.21** *(In Entwicklung)*

* **Mess-Tool auf Zielseite:**
  Eine **maßgeschneiderte interne Testanwendung**, entwickelt, um hochfrequente Mauseingaben ve Ereignisverarbeitungsraten auf dem Zielsystem genau zu messen.

> ⚠️ Da v1.21 noch aktiv entwickelt wird, können sich einige Verhaltensweisen ve Leistungseigenschaften in zukünftigen Versionen verbessern.

---

### Testbedingungen: Mausgeschwindigkeits-Drosselung

**Während keiner der Tests wurde eine Mausgeschwindigkeits-Drosselung veya künstliche Ratenbegrenzung angewendet**.

Mauseingaben wurden ile **nativem Gerätegeschwindigkeit** erfasst ve weitergeleitet, abhängig nur von:

* Maus-Donanım-Abfragerate
* Gewähltem Mausmodus (Absolut / Relatives Event / Relatives HID)
* Serieller Baudrate
* Mauseingabeverarbeitung des Ziel-Betriebssystems

---

## 2. Grvelagen des Mausdaten-Durchsatzes

Jedes hakkında Mini-KVM hakkındatragene Mausbewegungsereignis besteht aus:

```
11 Bytes = 88 Bits
```

### Theoretischer serieller Durchsatz

| Baudrate | Max. Ereignisse / Sekvee |
| --------- | ------------------- |
| 9600      | ~109 Ereignisse/s       |
| 115200    | ~1309 Ereignisse/s      |

⚠️ Diese Werte stellen **obere theoretische Grenzen** dar.
Die tatsächliche Leistung wird beeinflusst von:

* Host-Mausabfragerate
* Mausmodus (Absolut vs Relativ)
* macOS-Eingabeereignis-Planung
* Serielle Pufferung ve Firmware-Behandlung
* **Mausabfragerate des Ziel-Betriebssystems**, die die wahrgenommene Reaktionsfähigkeit erheblich beeinflussen kann (z. B. niedrige Standardabfrageraten bei einigen Linux-Distributionen)

---

## 3. Testergebnisse

---

### A. Absoluter Mausmodus (9600 & 115200 Baud)

| Maus-Typ | Baudrate | Host-Rate (Hz) | Ziel-Rate (Hz) | Hinweise                                                                |
| ---------- | --------- | -------------- | ---------------- | -------------------------------------------------------------------- |
| Bluetooth  | 9600      | ~125           | ~75              | Serielle Bandbreite gesättigt; Eingaben in Warteschlange, Bewegung verzögert           |
| Kabelgebveen      | 9600      | ~150           | ~75              | Serielle Bandbreite gesättigt; Eingaben in Warteschlange, Bewegung verzögert           |
| Gaming     | 9600      | ~1000          | ~75              | Hochfrequente Eingaben stark in Warteschlange; Reaktionsfähigkeit erheblich reduziert |
| Bluetooth  | 115200    | ~125           | ~125             | Stabile 1:1 Host-zu-Ziel-Zuordnung                                    |
| Kabelgebveen      | 115200    | ~175           | ~175             | Verbesserter Durchsatz; Latenz bei schneller Bewegung sichtbar               |
| Gaming     | 115200    | ~1000          | ~350             | Serieller Durchsatzgrenze erreicht; hakkındaschüssige Eingaben in Warteschlange                 |

**Fazit (Absolutmodus):**

Der absolute Mausmodus skaliert ile der Baudrate, bleibt aber durch **seriellen Durchsatz ve Eingabepufferung** eingeschränkt.
Bei **9600 Baud** sind alle Maus-Typen eingeschränkt ve die Bewegung verzögert.
Bei **115200 Baud** erreichen Standard-Mäuse stabiles Verhalten, aber **Hochabfrage-Spielemäuse hakkındaschreiten immer noch die verfügbare Bandbreite**, was Latenz einführt.

**Absolutmodus eignet sich için Desktop-Steuerung, değil için latenzsensitive Spiele.**

---

### B. Relativer Maus-Event-Modus

Der relative Maus-Event-Modus erfasst **Mausbewegungsereignisse direkt aus dem Betriebssystemfenster**, berechnet das **Bewegungsdelta zwischen aufeinanderfolgenden Cursorpositionen** ve leitet nur die relativen Bewegungsdaten an das Zielsystem weiter.

Dieser Modus:

* **Benötigt keine zusätzlichen Systemberechtigungen**
* Ist unabhängig von **absoluten Bildschirmkoordinaten**
* Nutzt einen **größeren Erfassungsbereich**, was feinere Bewegungsdeltas ermöglicht
* Vermeidet absolute Positionspufferung, was zu **niedrigerer Latenz ve besserer Reaktionsfähigkeit** führt

#### Relative Maus-Event-Modus Leistung

| Maus-Typ | Baudrate | Host-Rate (Hz) | Ziel-Rate (Hz) | Hinweise                                              |
| ---------- | --------- | -------------- | ---------------- | -------------------------------------------------- |
| Bluetooth  | 9600      | ~100           | ~90              | Nahe serieller Grenze; stabil için gelegentliche Nutzung           |
| Kabelgebveen      | 9600      | ~125           | ~90              | Serielle Bandbreite gesättigt; geringe Latenz          |
| Gaming     | 9600      | ~1000          | ~100             | Hohe Abfrage hakkındaschreitet Bandbreite; Eingaben komprimiert   |
| Bluetooth  | 115200    | ~125           | ~125             | 1:1 Host-zu-Ziel-Zuordnung                         |
| Kabelgebveen      | 115200    | ~180           | ~150             | Verbesserter Durchsatz; sanftes Tracking               |
| Gaming     | 115200    | ~1000          | ~450             | Beste beobachtete Leistung; serieller Durchsatz begrenzt |

🔴 **9600 Baud ist unzureichend için Hochabfrage-Spielemäuse**
🟢 **115200 Baud ermöglicht reaktive Spieleingabe im relativen Event-Modus**

---

### C. Relativer Maus-HID-Modus

Der relative Maus-HID-Modus **wandelt macOS-HID-Mauseingaben direkt in HID-Ereignisse auf dem Zielsystem um**, umgeht fensterebene Cursorverarbeitung ve absolute Koordinatenzuordnung.

Dieser Modus:

* Arbeitet ile **rohen HID-Ebene-Mausereignissen**
* **Hängt değil von der Anwendungsfenstergröße ab**
* Erhält **native Mausabfrage-Charakteristika**
* Minimiert Zwischenpufferung ve Übersetzung
* Liefert die **niedrigste Latenz** aller Mausmodi

Infolgedessen bietet der relative Maus-HID-Modus ein Verhalten, **das einer direkten USB-Mausverbindung am nächsten kommt**, insbesondere bei höheren Baudraten.

#### Relative Maus-HID-Modus Leistung

| Maus-Typ | Baudrate | Host-Rate (Hz) | Ziel-Rate (Hz) | Hinweise                                             |
| ---------- | --------- | -------------- | ---------------- | ------------------------------------------------- |
| Bluetooth  | 9600      | ~100           | ~90              | Nahe serieller Grenze; akzeptabel için grvelegende Nutzung       |
| Kabelgebveen      | 9600      | ~250           | ~180             | Serielle Bandbreite teilweise gesättigt              |
| Gaming     | 9600      | >1000          | ~90              | Hohe Abfrage hakkındaschreitet verfügbare Bandbreite          |
| Bluetooth  | 115200    | ~160           | ~155             | Nahe 1:1 Host-zu-Ziel-Zuordnung                   |
| Kabelgebveen      | 115200    | ~250           | ~150             | Stabil ve reaktiv                             |
| Gaming     | 115200    | >1000          | ~500             | Beste Gesamtleistung; serieller Durchsatz begrenzt |

**Kernerkenntnisse (Relativer HID-Modus):**

* Liefert die **niedrigste Latenz** aller Mausmodi
* Bei **9600 Baud** bleiben Hochabfrage-Mäuse bandbreitenbegrenzt
* Bei **115200 Baud** erreichen Spielmäuse **Hveerte von Zielseiten-Ereignissen pro Sekvee**
* **Stark empfohlen için Spiele ve schnelle Kamerabewegungen**

---

### D. Direkte Maus unter Windows (Referenz)

| Maus-Typ      | Ziel-Rate (Hz) |
| --------------- | ---------------- |
| Bluetooth-Maus | 80–85            |
| Kabelgebveene Maus     | 120–125          |
| Spielmaus    | >1000            |

Diese Referenz zeigt, dass **Mini-KVM (115200 Baud, HID-Relativmodus)** die native kabelgebveene Mausleistung annähern kann, obwohl es die inhärente KVM- ve serielle Transport-Overhead değil vollständig eliminieren kann.

---

## 4. Empfohlene Spielkonfiguration

### ✅ Empfohlen

* **Mausmodus:** Relative Maus HID
* **Baudrate:** 115200
* **Maus-Typ:** Kabelgebveen veya Spielmaus
* **Abfragerate:** ≤1000 Hz empfohlen

### ❌ Vermeiden

* Absoluter Mausmodus için Spiele
* 9600 Baud ile Hochabfrage-Mäusen
* Übermäßig hohe Abfrageraten ohne ausreichende serielle Bandbreite

---

## 5. Wichtige Erwartungen

Openterface Mini-KVM ist hauptsächlich konzipiert için:

✔ BIOS / UEFI-Interaktion
✔ Systemeinrichtung ve Debugging
✔ Remote-Zugriff ve Verwaltung

Während **Spielen möglich ist**, ist Mini-KVM **kein Ersatz için eine direkte USB-Spielmaus**, besonders değil için hochkompetitive veya latenzkritische Titel.

---

## 6. Zusammenfassung

* **Spielen ile Openterface Mini-KVM ist möglich**, wenn korrekt konfiguriert
* Spielreaktionsfähigkeit wird von **Mausmodus, Abfragerate ve Baudrate** dominiert, değil von der Host-CPU-Leistung
* **Absoluter Mausmodus** priorisiert Positionsgenauigkeit ve eignet sich değil için Spiele
* **9600 Baud** schafft eine harte Eingabebandbreiten-Obergrenze
* **Relativer Maus-HID-Modus bei 115200 Baud** liefert das beste Gleichgewicht aus:

  * Eingabefrequenz
  * Latenz
  * Stabilität
* Obwohl Mini-KVM değil vollständig ile einer nativen USB-Bağlantı ilehalten kann, kann es eine **spielbare ve reaktive Erfahrung** için Casual- ve einige kompetitive Spielszenarien bieten

---

### Gesamturteil

✅ **Technisch solide**
✅ **Klare Positionierung için Spieler**
✅ **Ehrlich hakkında Einschränkungen**
