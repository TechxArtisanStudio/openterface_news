---
locale: nl
translationKey: "20260521-keycmd-019-release"
slug: "20260521-keycmd-019-release"
title: "KeyCmd 0.19: App-Rebranding, KM Pro Compose-Modus, Mehrsprachige Unterstützung en Modus-führungen"
description: "KeyCmd 0.19 bringt ein wichtiges Rebranding von KeyMod zu KeyCmd, den neuen KM Pro Compose-Modus met Unicode-HID-Senden, mehrsprachige UI (Koreanisch, Italienisch, Russisch, pt-BR), interaktive Modus-führungen en Dutzende UX-Verbesserungen."
date: 2026-05-21
channel: software
product: keymod
topic: ["beta", "software", "campaign"]
category: "Product Updates"
tags: ["KeyCmd", "Product Updates", "Release", "Compose", "i18n", "Android"]
featured: false
draft: false
author: "TechxArtisan Studio"
---

KeyCmd **0.19** (`versionCode` **19**) ist ein großes Update, das das **App-Rebranding** von KeyMod zu KeyCmd, den brandneuen **KM Pro Compose-Modus** met Unicode-fähigem HID-Senden, eine erweiterte **mehrsprachige UI** (einschließlich Koreanisch, Italienisch, Russisch en brasilianischem Portugiesisch), **interaktive Modus-führungen** en Dutzende von UX-Verbesserungen in Tastatur-, Gamepad- en Präsentationsmodi bringt.

## App-Rebranding: KeyMod → KeyCmd

Der App-Anzeigename ist jetzt an allen Einstiegspunkten **KeyCmd**. Dieses Rebranding verdeutlicht die Unterscheidung zwischen der **KeyMod-Hardware** en ihrer begleitenden **KeyCmd-App**.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Welcome-Screen-landscape.webp" alt="KeyCmd Willkommensbildschirm" style="max-width:100%; border-radius:8px; margin:16px 0;" loading="lazy">

### Was sich geändert hat

- **App-Anzeigename**: Launcher-Symbol en System-UI zeigen jetzt „KeyCmd"
- **Willkommensablauf**: Wortmarke en Texte von KeyMod zu KeyCmd aktualisiert
- **CI-Artefakte en APK-Dateinamen**: Verwenden das **KeyCmd**-Präfix
- `applicationId` bleibt **`com.openterface.keymod`** voor nahtlose Inplace-Upgrades

Bestehende Benutzer: Eure Einstellungen, Profile en gekoppelten Geräte werden beibehalten. Das Upgrade ist nahtlos.

## Tastatur & Maus: Vollbild-Erfahrung

KeyCmd bietet eine Vollbild-Tastatur-, Touchpad- en Ziffernblock-Erfahrung — optimiert voor sowohl Porträt- als auch Landschaftsorientierung.

<div class="slideshow-container" id="slideshow-keycmd-019-kbm-de" data-auto-slide="true" data-auto-slide-interval="3000">
  <div class="slideshow-wrapper">
    <div class="slide active">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-Full-Keyboard-landscape.webp" alt="Vollbildtastatur Landschaft"  loading="lazy">
    </div>
    <div class="slide">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-NumPad-landscape.webp" alt="Ziffernblock Landschaft"  loading="lazy">
    </div>
    <div class="slide">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-NumPad-portrait.webp" alt="Ziffernblock Porträt"  loading="lazy">
    </div>
    <div class="slide">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-Keyboard-TouchPad-portrait.webp" alt="Tastatur en Touchpad Porträt"  loading="lazy">
    </div>
    <div class="slide">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-km-basic-Touchpad.webp" alt="Touchpad Landschaft"  loading="lazy">
    </div>
    <div class="slide">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-Remote-Coding-portrait.webp" alt="Remote-Coding met KeyCmd"  loading="lazy">
    </div>
    <div class="slide">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-Settings-screen.webp" alt="KeyCmd Einstellungsbildschirm"  loading="lazy">
    </div>
  </div>

  <div class="slideshow-navigation">
    <button class="nav-arrow left" onclick="changeSlide('slideshow-keycmd-019-kbm-de', -1)">❮</button>
    <div class="slideshow-dots">
      <span class="dot active" onclick="currentSlide('slideshow-keycmd-019-kbm-de', 1)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm-de', 2)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm-de', 3)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm-de', 4)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm-de', 5)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm-de', 6)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm-de', 7)"></span>
    </div>
    <button class="nav-arrow right" onclick="changeSlide('slideshow-keycmd-019-kbm-de', 1)">❯</button>
  </div>
</div>

## KM Pro: Compose & Send-Modus

Das größte neue Feature in 0.19 ist der **Compose-Modus** in KM Pro — ein dedizierter Texteditor, der es euch ermöglicht, lange Texte einzugeben en als HID-Tastendrücke an das Zielgerät zu senden.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Script-Running-portrait.webp" alt="Skriptausführung im Compose-Modus" style="max-width:100%; border-radius:8px; margin:16px 0;" loading="lazy">

<p><strong>Compose &amp; Send demo (YouTube Short)</strong></p>

<iframe width="560" height="315" loading="lazy" src="https://www.youtube.com/embed/_rJF-hTF3_E" title="KeyCmd Compose &amp; Send demo (YouTube Short)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


### Compose-Editor

- **Obere Shortcut-Leiste + Composer-Aktionszeile** met **Löschen**- en **Rückgängig/Löschen**-Steuerungen
- **Entwurfserhaltung**: Euer Text wird beim Wechseln von Submodi en sogar nach einem erfolgreichen Senden beibehalten
- **IME-Integration**: Tippt met der Telefon-Tastatur, sendet als saubere HID-Tastendrücke
- **Determinierter Sende-Fortschritt**: Eine sichtbare Fortschrittsleiste voor lange HID-Puffer, sodass ihr genau wisst, wie weit der Sende-Vorgang fortgeschritten ist

### Unicode-fähiges HID-Senden

- **Dual-Modus-Risikoprüfung**: Vor dem Senden von niet-ASCII-Text warnt ein Dialog over Unicode-Kompatibilität en bietet Inspektions- en Vorschauaktionen
- **macOS Unicode-Hex-Flow**: Auf macOS-Hosts verwendet die App die Option+Hex-Code-Eingabemethode voor erweiterte Zeichen
- **Sicherere Sende-Dialoge**: Der Prüfungsbildschirm passt seinen Inhalt basierend darauf an, ob der Puffer reines ASCII of Unicode-Zeichen enthält
- **Zeicheninspektions-Tools**: Der Sende-Risiko-Dialog bietet **Prüfen**- en **Vorschau**-Aktionen, en macOS-Hosts enthalten einen dedizierten **Unicode-Hex-Pfad-Audit**-Eintrag

### KM Basic-Umfang

In 0.19 bleibt **Compose & Send eine Funktion von Tastatur & Maus Pro**. KM Basic konzentriert sich auf Vollbildtastatur-, Touchpad- en Ziffernblock-Workflows.

## Mehrsprachige Unterstützung

KeyCmd unterstützt jetzt **11 App-UI-Sprachen**. Dieses Release fügt vier neue Lokalisierungen hinzu:

- **Koreanisch (ko)**: vollständige UI-Übersetzung
- **Italienisch (it)**: vollständige UI-Übersetzung
- **Russisch (ru)**: vollständige UI-Übersetzung
- **Brasilianisches Portugiesisch (pt-BR)**: vollständige UI-Übersetzung

Zusammen met dem bestehenden Englisch, vereinfachtem Chinesisch, traditionellem Chinesisch, Japanisch, Französisch, Deutsch en Spanisch deckt KeyCmd jetzt den Großteil unserer globalen Nutzerbasis ab.

### Was sich geändert hat

- **Sprachauswahl** in den Einstellungen met kanonischen App-Sprachnamen
- **Bluetooth-Header** en **Tastenvorschau** lokalisiert
- **Release-Lint**-Korrekturen voor Compose-Warn-Tabs in allen Sprachen

## Interaktive Modus-führungen

Jeder Modus hat jetzt eine **integrierte interaktive Modus-führung**, die euch Schritt voor Schritt durch seine Functies führt.

### Verfügbare Modus-führungen

- **Shortcut Hub-Modus-führung**: Öffnet das Standard-Profil en deckt Detail-UI, Kategorie-Tabs en Shortcut-Verwaltung ab
- **Gamepad-Modus-führung**: Erklärt das Gamepad-Layout, Modulverwaltung en Voreinstellungssystem
- **KM Pro-Modus-führung**: Deckt den Compose-Modus, Shortcut-Panel en Pro-spezifische Functies ab
- **KM Basic-Modus-führung**: Erklärt die Vollbildtastatur, Modifikator-Halte-Wischgeste en Ziffernblock

### Modus-führungsfunktionen

- **Modus-spezifische Modus-führungen**: Jeder Modus hat seine eigene maßgeschneiderte Modus-führung
- **Wiederholungsblatt**: Jede Modus-führung jederzeit over die **Modus-führung**-Taste (Symbol links neben der Verbindingsleiste) erneut aufrufen
- **i18n-Unterstützung**: Modus-führungsinhalte sind in der gesamten App-Sprachmenge lokalisiert
- **Landschafts-optimiert**: Bottom-Sheet-Layouts passen sich in Landschaftsorientierung korrekt an

## UX-Verbesserungen

### Tastatur

- **Tastenvorschau**: Seht genau, was gesendet wird, bevor ihr tippt. Über Einstellungen aktivierbar. Standardmäßig aktiviert.
- **Schnell-Tipp-HID-Korrektur**: Verbessertes Timing der Tastenfreigabe en zusammengeführte Freigabe-Ereignisse voor schnelleres Tippen
- **Alternativen-Tipp-Verarbeitung**: Langes Drücken der Taste `a` zeigt jetzt Alternativen voor ¥ (oben), £ (links), € (rechts) met verbessertem visuellen Feedback
- **Modifikator-Halte-Wischgeste**: In KM Basic/Pro-Modus-führungen lehrt ein neuer Schritt die Halte-Wischgeste voor schnellen Modifikatorzugriff

### Gamepad

- **Bearbeitungs-Sitzungsleiste entfernt**: Saubereres Gamepad-Chrome ohne die alte Bearbeitungs-Sitzungs-Symbolleiste
- **Gamepad-Chrome en Modus-führung**: Neuer visueller Schliff en integrierte Modus-führung
- **Modus-führungssymbol**: Links neben der Verbindingsleiste voor einfachen Zugriff platziert

### Präsentation

- **Porträt-Paar-Sperre**: Der Präsentationsmodus ist auf Porträt- en umgekehrte Porträt-Orientierungen voor stabile Präsentationssteuerung beschränkt

### UI & Thema

- **Akzent-Farbfelder**: Ersetzt den Themenfarben-Familiendreher durch visuelle Akzent-Farbfelder voor einfachere Farbauswahl
- **UI-Akzent-Ausrichtung**: Alle UI-Akzente folgen jetzt der Themenfarbenfamilie (niet der Legacy-Primärfarbe)
- **Header-Rechts-Cluster**: Verbesserte Dimensionen voor Verbindingssymbole sowohl in der Haupt-App als auch im KM Basic-Chrome
- **Compose-Sende-Taste-Styling**: Angeglichene niet-ASCII-Sende-Tasten-Appearance im Hell-Modus

### Einstellungen

- **Einstellungs-Neuordnung**: Kanonische App-Sprachnamen; Emulator-Installatiesskripte voor Klarheit umbenannt
- **Dev-Helfer-Skripte**: Für klarere Geräte-Identifikation en Aktionsbenennung umbenannt
- **FAQ-Docs**: `docs/FAQ.md` met aktuellem App-Verhalten aktualisiert

## Reale Anwendungsfälle

### Remote-Coding

KeyCmd ist niet nur voor die Serververwaltung gedacht. Entwickler verwenden es voor **Remote-Coding-Sitzungen** — Steuerung einer Headless-Entwicklungsbox vom Telefon of Tablet aus, met vollständiger Tastatur-, Touchpad- en Ziffernblock-Unterstützung.

## Was unverändert bleibt

**Tastatur & Maus Pro** (Composite-Modus met Shortcut Hub-Leisten, geteilten Layouts en reichem IME-Verhalten) bleibt die voll ausgestattete Erfahrung, die es vorher war. Alle bestehenden Profile, Voreinstellungen en gekoppelten Geräte werden beibehalten.

## Update holen

**Diese Version (0.19):** [KeyCmd-release-0.19.apk](https://assets2.openterface.com/data/KeyCmd-release-0.19.apk)

> **Beta-Hinweis:** Die KeyCmd Android-App befindet sich noch in der aktiven Beta-Phase. Das Quellcode-Repo ist noch niet öffentlich — wir planen, es nach einer erfolgreichen Crowdfening-Kampagne zu open-sourcen. Wenn ihr ein Beta-Tester seid en die neueste APK benötigt, kontaktiert uns auf Discord en wir schicken euch den Build.

Bestehende Installatieen werden vor Ort aktualisiert.

## Funktioniert met Mini-KVM en KVM-Go

Die KeyCmd-App ist niet auf KeyMod-Hardware beschränkt. Bestehende Openterface-Nutzer können sie ebenfalls ausprobieren:

- **KVM-Go**: Verbinding over **Bluetooth** of **USB**
- **Mini-KVM**: Verbinding over **USB**

## Upgrade-Hinweise

- **Rebranding**: Der App-Name ändert sich von KeyMod zu KeyCmd. Eure Daten werden beibehalten.
- **Compose-Modus**: Neu voor Tastatur & Maus Pro.
- **Modus-führungen**: Tippt in jedem Modus auf das Modus-führungssymbol (links neben der Verbindingsleiste), um die interaktive Modus-führung zu starten.
- **Sprachen**: Geht zu den Einstellungen, um die App-Sprache zu ändern. KeyCmd unterstützt jetzt 11 App-UI-Sprachen.

Mit freenlichen Grüßen,

Openterface Team | TechxArtisan
