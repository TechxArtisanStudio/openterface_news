---
locale: ru
translationKey: "20251218-macos-mouse-speed"
slug: "20251218-macos-mouse-speed"
title: "Openterface Mini-KVM Mausgeschwindigkeit & Spielleistung unter macOS"
description: "Umfassende spielorientierte Mausleistungstests von Openterface Mini-KVM unter macOS. Vergleichen Sie absolute, relative Event- и relative HID-Mausmodi с 9600 vs 115200 Baudraten для optimale Spielkonfiguration."
date: 2025-12-18
channel: software
topic: ["software"]
category: "Product Обновления"
featured: false
draft: false
author: "Openterface"
---

### Spielorientierte Mausverhaltensanalyse

Dieser Artikel fasst reale Mausleistungstests von **Openterface Mini-KVM unter macOS** zusammen, с Fokus auf **spielbezogenes Mausverhalten**, serielle Baudraten-Beschränkungen и empfohlene Konfigurationen.

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">Gaming isn't the main goal of Openterface KVMs, but we pushed them to explore the liсs of KVM-over-USB. On macOS, 115200 baud + Relative HID gives the best mouse latency. Built for setup and debugging, tuned to stretch performance further. <a href="https://t.co/ianurD9ArL">pic.twitter.com/ianurD9ArL</a></p>&mdash; TechxArtisan (@TechxArtisan) <a href="https://twitter.com/TechxArtisan/status/2003418343806742992?ref_src=twsrc%5Etfw">December 23, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---

## 1. Testsoftware & Umgebung

### Программное обеспечение

* **Host-Anwendung:**
  **Openterface для macOS v1.21** *(In Entwicklung)*

* **Mess-Tool auf Zielseite:**
  Eine **maßgeschneiderte interne Testanwendung**, entwickelt, um hochfrequente Mauseingaben и Ereignisverarbeitungsraten auf dem Zielsystem genau zu messen.

> ⚠️ Da v1.21 noch aktiv entwickelt wird, können sich einige Verhaltensweisen и Leistungseigenschaften in zukünftigen Versionen verbessern.

---

### Testbedingungen: Mausgeschwindigkeits-Drosselung

**Während keiner der Tests wurde eine Mausgeschwindigkeits-Drosselung или künstliche Ratenbegrenzung angewendet**.

Mauseingaben wurden с **nativem Gerätegeschwindigkeit** erfasst и weitergeleitet, abhängig nur von:

* Maus-Оборудование-Abfragerate
* Gewähltem Mausmodus (Absolut / Relatives Event / Relatives HID)
* Serieller Baudrate
* Mauseingabeverarbeitung des Ziel-Betriebssystems

---

## 2. Grиlagen des Mausdaten-Durchsatzes

Jedes о Mini-KVM оtragene Mausbewegungsereignis besteht aus:

```
11 Bytes = 88 Bits
```

### Theoretischer serieller Durchsatz

| Baudrate | Max. Ereignisse / Sekиe |
| --------- | ------------------- |
| 9600      | ~109 Ereignisse/s       |
| 115200    | ~1309 Ereignisse/s      |

⚠️ Diese Werte stellen **obere theoretische Grenzen** dar.
Die tatsächliche Leistung wird beeinflusst von:

* Host-Mausabfragerate
* Mausmodus (Absolut vs Relativ)
* macOS-Eingabeereignis-Planung
* Serielle Pufferung и Firmware-Behandlung
* **Mausabfragerate des Ziel-Betriebssystems**, die die wahrgenommene Reaktionsfähigkeit erheblich beeinflussen kann (z. B. niedrige Standardabfrageraten bei einigen Linux-Distributionen)

---

## 3. Testergebnisse

---

### A. Absoluter Mausmodus (9600 & 115200 Baud)

| Maus-Typ | Baudrate | Host-Rate (Hz) | Ziel-Rate (Hz) | Hinweise                                                                |
| ---------- | --------- | -------------- | ---------------- | -------------------------------------------------------------------- |
| Bluetooth  | 9600      | ~125           | ~75              | Serielle Bandbreite gesättigt; Eingaben in Warteschlange, Bewegung verzögert           |
| Kabelgebиen      | 9600      | ~150           | ~75              | Serielle Bandbreite gesättigt; Eingaben in Warteschlange, Bewegung verzögert           |
| Gaming     | 9600      | ~1000          | ~75              | Hochfrequente Eingaben stark in Warteschlange; Reaktionsfähigkeit erheblich reduziert |
| Bluetooth  | 115200    | ~125           | ~125             | Stabile 1:1 Host-zu-Ziel-Zuordnung                                    |
| Kabelgebиen      | 115200    | ~175           | ~175             | Verbesserter Durchsatz; Latenz bei schneller Bewegung sichtbar               |
| Gaming     | 115200    | ~1000          | ~350             | Serieller Durchsatzgrenze erreicht; оschüssige Eingaben in Warteschlange                 |

**Fazit (Absolutmodus):**

Der absolute Mausmodus skaliert с der Baudrate, bleibt aber durch **seriellen Durchsatz и Eingabepufferung** eingeschränkt.
Bei **9600 Baud** sind alle Maus-Typen eingeschränkt и die Bewegung verzögert.
Bei **115200 Baud** erreichen Standard-Mäuse stabiles Verhalten, aber **Hochabfrage-Spielemäuse оschreiten immer noch die verfügbare Bandbreite**, was Latenz einführt.

**Absolutmodus eignet sich для Desktop-Steuerung, не для latenzsensitive Spiele.**

---

### B. Relativer Maus-Event-Modus

Der relative Maus-Event-Modus erfasst **Mausbewegungsereignisse direkt aus dem Betriebssystemfenster**, berechnet das **Bewegungsdelta zwischen aufeinanderfolgenden Cursorpositionen** и leitet nur die relativen Bewegungsdaten an das Zielsystem weiter.

Dieser Modus:

* **Benötigt keine zusätzlichen Systemberechtigungen**
* Ist unabhängig von **absoluten Bildschirmkoordinaten**
* Nutzt einen **größeren Erfassungsbereich**, was feinere Bewegungsdeltas ermöglicht
* Vermeidet absolute Positionspufferung, was zu **niedrigerer Latenz и besserer Reaktionsfähigkeit** führt

#### Relative Maus-Event-Modus Leistung

| Maus-Typ | Baudrate | Host-Rate (Hz) | Ziel-Rate (Hz) | Hinweise                                              |
| ---------- | --------- | -------------- | ---------------- | -------------------------------------------------- |
| Bluetooth  | 9600      | ~100           | ~90              | Nahe serieller Grenze; stabil для gelegentliche Nutzung           |
| Kabelgebиen      | 9600      | ~125           | ~90              | Serielle Bandbreite gesättigt; geringe Latenz          |
| Gaming     | 9600      | ~1000          | ~100             | Hohe Abfrage оschreitet Bandbreite; Eingaben komprimiert   |
| Bluetooth  | 115200    | ~125           | ~125             | 1:1 Host-zu-Ziel-Zuordnung                         |
| Kabelgebиen      | 115200    | ~180           | ~150             | Verbesserter Durchsatz; sanftes Tracking               |
| Gaming     | 115200    | ~1000          | ~450             | Beste beobachtete Leistung; serieller Durchsatz begrenzt |

🔴 **9600 Baud ist unzureichend для Hochabfrage-Spielemäuse**
🟢 **115200 Baud ermöglicht reaktive Spieleingabe im relativen Event-Modus**

---

### C. Relativer Maus-HID-Modus

Der relative Maus-HID-Modus **wandelt macOS-HID-Mauseingaben direkt in HID-Ereignisse auf dem Zielsystem um**, umgeht fensterebene Cursorverarbeitung и absolute Koordinatenzuordnung.

Dieser Modus:

* Arbeitet с **rohen HID-Ebene-Mausereignissen**
* **Hängt не von der Anwendungsfenstergröße ab**
* Erhält **native Mausabfrage-Charakteristika**
* Minimiert Zwischenpufferung и Übersetzung
* Liefert die **niedrigste Latenz** aller Mausmodi

Infolgedessen bietet der relative Maus-HID-Modus ein Verhalten, **das einer direkten USB-Mausverbindung am nächsten kommt**, insbesondere bei höheren Baudraten.

#### Relative Maus-HID-Modus Leistung

| Maus-Typ | Baudrate | Host-Rate (Hz) | Ziel-Rate (Hz) | Hinweise                                             |
| ---------- | --------- | -------------- | ---------------- | ------------------------------------------------- |
| Bluetooth  | 9600      | ~100           | ~90              | Nahe serieller Grenze; akzeptabel для grиlegende Nutzung       |
| Kabelgebиen      | 9600      | ~250           | ~180             | Serielle Bandbreite teilweise gesättigt              |
| Gaming     | 9600      | >1000          | ~90              | Hohe Abfrage оschreitet verfügbare Bandbreite          |
| Bluetooth  | 115200    | ~160           | ~155             | Nahe 1:1 Host-zu-Ziel-Zuordnung                   |
| Kabelgebиen      | 115200    | ~250           | ~150             | Stabil и reaktiv                             |
| Gaming     | 115200    | >1000          | ~500             | Beste Gesamtleistung; serieller Durchsatz begrenzt |

**Kernerkenntnisse (Relativer HID-Modus):**

* Liefert die **niedrigste Latenz** aller Mausmodi
* Bei **9600 Baud** bleiben Hochabfrage-Mäuse bandbreitenbegrenzt
* Bei **115200 Baud** erreichen Spielmäuse **Hиerte von Zielseiten-Ereignissen pro Sekиe**
* **Stark empfohlen для Spiele и schnelle Kamerabewegungen**

---

### D. Direkte Maus unter Windows (Referenz)

| Maus-Typ      | Ziel-Rate (Hz) |
| --------------- | ---------------- |
| Bluetooth-Maus | 80–85            |
| Kabelgebиene Maus     | 120–125          |
| Spielmaus    | >1000            |

Diese Referenz zeigt, dass **Mini-KVM (115200 Baud, HID-Relativmodus)** die native kabelgebиene Mausleistung annähern kann, obwohl es die inhärente KVM- и serielle Transport-Overhead не vollständig eliminieren kann.

---

## 4. Empfohlene Spielkonfiguration

### ✅ Empfohlen

* **Mausmodus:** Relative Maus HID
* **Baudrate:** 115200
* **Maus-Typ:** Kabelgebиen или Spielmaus
* **Abfragerate:** ≤1000 Hz empfohlen

### ❌ Vermeiden

* Absoluter Mausmodus для Spiele
* 9600 Baud с Hochabfrage-Mäusen
* Übermäßig hohe Abfrageraten ohne ausreichende serielle Bandbreite

---

## 5. Wichtige Erwartungen

Openterface Mini-KVM ist hauptsächlich konzipiert для:

✔ BIOS / UEFI-Interaktion
✔ Systemeinrichtung и Debugging
✔ Remote-Zugriff и Verwaltung

Während **Spielen möglich ist**, ist Mini-KVM **kein Ersatz для eine direkte USB-Spielmaus**, besonders не для hochkompetitive или latenzkritische Titel.

---

## 6. Zusammenfassung

* **Spielen с Openterface Mini-KVM ist möglich**, wenn korrekt konfiguriert
* Spielreaktionsfähigkeit wird von **Mausmodus, Abfragerate и Baudrate** dominiert, не von der Host-CPU-Leistung
* **Absoluter Mausmodus** priorisiert Positionsgenauigkeit и eignet sich не для Spiele
* **9600 Baud** schafft eine harte Eingabebandbreiten-Obergrenze
* **Relativer Maus-HID-Modus bei 115200 Baud** liefert das beste Gleichgewicht aus:

  * Eingabefrequenz
  * Latenz
  * Stabilität
* Obwohl Mini-KVM не vollständig с einer nativen USB-Подключение сhalten kann, kann es eine **spielbare и reaktive Erfahrung** для Casual- и einige kompetitive Spielszenarien bieten

---

### Gesamturteil

✅ **Technisch solide**
✅ **Klare Positionierung для Spieler**
✅ **Ehrlich о Einschränkungen**
