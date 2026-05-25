---
locale: ar
translationKey: "20251218-macos-mouse-speed"
slug: "20251218-macos-mouse-speed"
title: "Openterface Mini-KVM Mausgeschwindigkeit & Spielleistung unter macOS"
description: "Umfassende spielorientierte Mausleistungstests von Openterface Mini-KVM unter macOS. Vergleichen Sie absolute, relative Event- و relative HID-Mausmodi مع 9600 vs 115200 Baudraten لـ optimale Spielkonfiguration."
date: 2025-12-18
channel: software
topic: ["software"]
category: "Product التحديثات"
featured: false
draft: false
author: "Openterface"
---

### Spielorientierte Mausverhaltensanalyse

Dieser Artikel fasst reale Mausleistungstests von **Openterface Mini-KVM unter macOS** zusammen, مع Fokus auf **spielbezogenes Mausverhalten**, serielle Baudraten-Beschränkungen و empfohlene Konfigurationen.

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">Gaming isn't the main goal of Openterface KVMs, but we pushed them to explore the liمعs of KVM-over-USB. On macOS, 115200 baud + Relative HID gives the best mouse latency. Built for setup and debugging, tuned to stretch performance further. <a href="https://t.co/ianurD9ArL">pic.twitter.com/ianurD9ArL</a></p>&mdash; TechxArtisan (@TechxArtisan) <a href="https://twitter.com/TechxArtisan/status/2003418343806742992?ref_src=twsrc%5Etfw">December 23, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---

## 1. Testsoftware & Umgebung

### البرمجيات

* **Host-Anwendung:**
  **Openterface لـ macOS v1.21** *(In Entwicklung)*

* **Mess-Tool auf Zielseite:**
  Eine **maßgeschneiderte interne Testanwendung**, entwickelt, um hochfrequente Mauseingaben و Ereignisverarbeitungsraten auf dem Zielsystem genau zu messen.

> ⚠️ Da v1.21 noch aktiv entwickelt wird, können sich einige Verhaltensweisen و Leistungseigenschaften in zukünftigen Versionen verbessern.

---

### Testbedingungen: Mausgeschwindigkeits-Drosselung

**Während keiner der Tests wurde eine Mausgeschwindigkeits-Drosselung أو künstliche Ratenbegrenzung angewendet**.

Mauseingaben wurden مع **nativem Gerätegeschwindigkeit** erfasst و weitergeleitet, abhängig nur von:

* Maus-الأجهزة-Abfragerate
* Gewähltem Mausmodus (Absolut / Relatives Event / Relatives HID)
* Serieller Baudrate
* Mauseingabeverarbeitung des Ziel-Betriebssystems

---

## 2. Grوlagen des Mausdaten-Durchsatzes

Jedes حول Mini-KVM حولtragene Mausbewegungsereignis besteht aus:

```
11 Bytes = 88 Bits
```

### Theoretischer serieller Durchsatz

| Baudrate | Max. Ereignisse / Sekوe |
| --------- | ------------------- |
| 9600      | ~109 Ereignisse/s       |
| 115200    | ~1309 Ereignisse/s      |

⚠️ Diese Werte stellen **obere theoretische Grenzen** dar.
Die tatsächliche Leistung wird beeinflusst von:

* Host-Mausabfragerate
* Mausmodus (Absolut vs Relativ)
* macOS-Eingabeereignis-Planung
* Serielle Pufferung و Firmware-Behandlung
* **Mausabfragerate des Ziel-Betriebssystems**, die die wahrgenommene Reaktionsfähigkeit erheblich beeinflussen kann (z. B. niedrige Standardabfrageraten bei einigen Linux-Distributionen)

---

## 3. Testergebnisse

---

### A. Absoluter Mausmodus (9600 & 115200 Baud)

| Maus-Typ | Baudrate | Host-Rate (Hz) | Ziel-Rate (Hz) | Hinweise                                                                |
| ---------- | --------- | -------------- | ---------------- | -------------------------------------------------------------------- |
| Bluetooth  | 9600      | ~125           | ~75              | Serielle Bandbreite gesättigt; Eingaben in Warteschlange, Bewegung verzögert           |
| Kabelgebوen      | 9600      | ~150           | ~75              | Serielle Bandbreite gesättigt; Eingaben in Warteschlange, Bewegung verzögert           |
| Gaming     | 9600      | ~1000          | ~75              | Hochfrequente Eingaben stark in Warteschlange; Reaktionsfähigkeit erheblich reduziert |
| Bluetooth  | 115200    | ~125           | ~125             | Stabile 1:1 Host-zu-Ziel-Zuordnung                                    |
| Kabelgebوen      | 115200    | ~175           | ~175             | Verbesserter Durchsatz; Latenz bei schneller Bewegung sichtbar               |
| Gaming     | 115200    | ~1000          | ~350             | Serieller Durchsatzgrenze erreicht; حولschüssige Eingaben in Warteschlange                 |

**Fazit (Absolutmodus):**

Der absolute Mausmodus skaliert مع der Baudrate, bleibt aber durch **seriellen Durchsatz و Eingabepufferung** eingeschränkt.
Bei **9600 Baud** sind alle Maus-Typen eingeschränkt و die Bewegung verzögert.
Bei **115200 Baud** erreichen Standard-Mäuse stabiles Verhalten, aber **Hochabfrage-Spielemäuse حولschreiten immer noch die verfügbare Bandbreite**, was Latenz einführt.

**Absolutmodus eignet sich لـ Desktop-Steuerung, لا لـ latenzsensitive Spiele.**

---

### B. Relativer Maus-Event-Modus

Der relative Maus-Event-Modus erfasst **Mausbewegungsereignisse direkt aus dem Betriebssystemfenster**, berechnet das **Bewegungsdelta zwischen aufeinanderfolgenden Cursorpositionen** و leitet nur die relativen Bewegungsdaten an das Zielsystem weiter.

Dieser Modus:

* **Benötigt keine zusätzlichen Systemberechtigungen**
* Ist unabhängig von **absoluten Bildschirmkoordinaten**
* Nutzt einen **größeren Erfassungsbereich**, was feinere Bewegungsdeltas ermöglicht
* Vermeidet absolute Positionspufferung, was zu **niedrigerer Latenz و besserer Reaktionsfähigkeit** führt

#### Relative Maus-Event-Modus Leistung

| Maus-Typ | Baudrate | Host-Rate (Hz) | Ziel-Rate (Hz) | Hinweise                                              |
| ---------- | --------- | -------------- | ---------------- | -------------------------------------------------- |
| Bluetooth  | 9600      | ~100           | ~90              | Nahe serieller Grenze; stabil لـ gelegentliche Nutzung           |
| Kabelgebوen      | 9600      | ~125           | ~90              | Serielle Bandbreite gesättigt; geringe Latenz          |
| Gaming     | 9600      | ~1000          | ~100             | Hohe Abfrage حولschreitet Bandbreite; Eingaben komprimiert   |
| Bluetooth  | 115200    | ~125           | ~125             | 1:1 Host-zu-Ziel-Zuordnung                         |
| Kabelgebوen      | 115200    | ~180           | ~150             | Verbesserter Durchsatz; sanftes Tracking               |
| Gaming     | 115200    | ~1000          | ~450             | Beste beobachtete Leistung; serieller Durchsatz begrenzt |

🔴 **9600 Baud ist unzureichend لـ Hochabfrage-Spielemäuse**
🟢 **115200 Baud ermöglicht reaktive Spieleingabe im relativen Event-Modus**

---

### C. Relativer Maus-HID-Modus

Der relative Maus-HID-Modus **wandelt macOS-HID-Mauseingaben direkt in HID-Ereignisse auf dem Zielsystem um**, umgeht fensterebene Cursorverarbeitung و absolute Koordinatenzuordnung.

Dieser Modus:

* Arbeitet مع **rohen HID-Ebene-Mausereignissen**
* **Hängt لا von der Anwendungsfenstergröße ab**
* Erhält **native Mausabfrage-Charakteristika**
* Minimiert Zwischenpufferung و Übersetzung
* Liefert die **niedrigste Latenz** aller Mausmodi

Infolgedessen bietet der relative Maus-HID-Modus ein Verhalten, **das einer direkten USB-Mausverbindung am nächsten kommt**, insbesondere bei höheren Baudraten.

#### Relative Maus-HID-Modus Leistung

| Maus-Typ | Baudrate | Host-Rate (Hz) | Ziel-Rate (Hz) | Hinweise                                             |
| ---------- | --------- | -------------- | ---------------- | ------------------------------------------------- |
| Bluetooth  | 9600      | ~100           | ~90              | Nahe serieller Grenze; akzeptabel لـ grوlegende Nutzung       |
| Kabelgebوen      | 9600      | ~250           | ~180             | Serielle Bandbreite teilweise gesättigt              |
| Gaming     | 9600      | >1000          | ~90              | Hohe Abfrage حولschreitet verfügbare Bandbreite          |
| Bluetooth  | 115200    | ~160           | ~155             | Nahe 1:1 Host-zu-Ziel-Zuordnung                   |
| Kabelgebوen      | 115200    | ~250           | ~150             | Stabil و reaktiv                             |
| Gaming     | 115200    | >1000          | ~500             | Beste Gesamtleistung; serieller Durchsatz begrenzt |

**Kernerkenntnisse (Relativer HID-Modus):**

* Liefert die **niedrigste Latenz** aller Mausmodi
* Bei **9600 Baud** bleiben Hochabfrage-Mäuse bandbreitenbegrenzt
* Bei **115200 Baud** erreichen Spielmäuse **Hوerte von Zielseiten-Ereignissen pro Sekوe**
* **Stark empfohlen لـ Spiele و schnelle Kamerabewegungen**

---

### D. Direkte Maus unter Windows (Referenz)

| Maus-Typ      | Ziel-Rate (Hz) |
| --------------- | ---------------- |
| Bluetooth-Maus | 80–85            |
| Kabelgebوene Maus     | 120–125          |
| Spielmaus    | >1000            |

Diese Referenz zeigt, dass **Mini-KVM (115200 Baud, HID-Relativmodus)** die native kabelgebوene Mausleistung annähern kann, obwohl es die inhärente KVM- و serielle Transport-Overhead لا vollständig eliminieren kann.

---

## 4. Empfohlene Spielkonfiguration

### ✅ Empfohlen

* **Mausmodus:** Relative Maus HID
* **Baudrate:** 115200
* **Maus-Typ:** Kabelgebوen أو Spielmaus
* **Abfragerate:** ≤1000 Hz empfohlen

### ❌ Vermeiden

* Absoluter Mausmodus لـ Spiele
* 9600 Baud مع Hochabfrage-Mäusen
* Übermäßig hohe Abfrageraten ohne ausreichende serielle Bandbreite

---

## 5. Wichtige Erwartungen

Openterface Mini-KVM ist hauptsächlich konzipiert لـ:

✔ BIOS / UEFI-Interaktion
✔ Systemeinrichtung و Debugging
✔ Remote-Zugriff و Verwaltung

Während **Spielen möglich ist**, ist Mini-KVM **kein Ersatz لـ eine direkte USB-Spielmaus**, besonders لا لـ hochkompetitive أو latenzkritische Titel.

---

## 6. Zusammenfassung

* **Spielen مع Openterface Mini-KVM ist möglich**, wenn korrekt konfiguriert
* Spielreaktionsfähigkeit wird von **Mausmodus, Abfragerate و Baudrate** dominiert, لا von der Host-CPU-Leistung
* **Absoluter Mausmodus** priorisiert Positionsgenauigkeit و eignet sich لا لـ Spiele
* **9600 Baud** schafft eine harte Eingabebandbreiten-Obergrenze
* **Relativer Maus-HID-Modus bei 115200 Baud** liefert das beste Gleichgewicht aus:

  * Eingabefrequenz
  * Latenz
  * Stabilität
* Obwohl Mini-KVM لا vollständig مع einer nativen USB-الاتصال معhalten kann, kann es eine **spielbare و reaktive Erfahrung** لـ Casual- و einige kompetitive Spielszenarien bieten

---

### Gesamturteil

✅ **Technisch solide**
✅ **Klare Positionierung لـ Spieler**
✅ **Ehrlich حول Einschränkungen**
