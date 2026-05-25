---
locale: ar
translationKey: "20260521-keycmd-019-release"
slug: "20260521-keycmd-019-release"
title: "KeyCmd 0.19: App-Rebranding, KM Pro Compose-Modus, Mehrsprachige Unterstützung و Modus-führungen"
description: "KeyCmd 0.19 bringt ein wichtiges Rebranding von KeyMod zu KeyCmd, den neuen KM Pro Compose-Modus مع Unicode-HID-Senden, mehrsprachige UI (Koreanisch, Italienisch, Russisch, pt-BR), interaktive Modus-führungen و Dutzende UX-Verbesserungen."
date: 2026-05-21
channel: software
product: keymod
topic: ["beta", "software", "campaign"]
category: "Product التحديثات"
tags: ["KeyCmd", "Product التحديثات", "Release", "Compose", "i18n", "Android"]
featured: false
draft: false
author: "TechxArtisan Studio"
---

KeyCmd **0.19** (`versionCode` **19**) ist ein großes Update, das das **App-Rebranding** von KeyMod zu KeyCmd, den brandneuen **KM Pro Compose-Modus** مع Unicode-fähigem HID-Senden, eine erweiterte **mehrsprachige UI** (einschließlich Koreanisch, Italienisch, Russisch و brasilianischem Portugiesisch), **interaktive Modus-führungen** و Dutzende von UX-Verbesserungen in Tastatur-, Gamepad- و Präsentationsmodi bringt.

## App-Rebranding: KeyMod → KeyCmd

Der App-Anzeigename ist jetzt an allen Einstiegspunkten **KeyCmd**. Dieses Rebranding verdeutlicht die Unterscheidung zwischen der **KeyMod-الأجهزة** و ihrer begleitenden **KeyCmd-App**.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Welcome-Screen-landscape.webp" alt="KeyCmd Willkommensbildschirm" style="max-width:100%; border-radius:8px; margin:16px 0;" loading="lazy">

### Was sich geändert hat

- **App-Anzeigename**: Launcher-Symbol و System-UI zeigen jetzt „KeyCmd"
- **Willkommensablauf**: Wortmarke و Texte von KeyMod zu KeyCmd aktualisiert
- **CI-Artefakte و APK-Dateinamen**: Verwenden das **KeyCmd**-Präfix
- `applicationId` bleibt **`com.openterface.keymod`** لـ nahtlose Inplace-Upgrades

Bestehende Benutzer: Eure Einstellungen, Profile و gekoppelten Geräte werden beibehalten. Das Upgrade ist nahtlos.

## Tastatur & Maus: Vollbild-Erfahrung

KeyCmd bietet eine Vollbild-Tastatur-, Touchpad- و Ziffernblock-Erfahrung — optimiert لـ sowohl Porträt- als auch Landschaftsorientierung.

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
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-Keyboard-TouchPad-portrait.webp" alt="Tastatur و Touchpad Porträt"  loading="lazy">
    </div>
    <div class="slide">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-km-basic-Touchpad.webp" alt="Touchpad Landschaft"  loading="lazy">
    </div>
    <div class="slide">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-Remote-Coding-portrait.webp" alt="Remote-Coding مع KeyCmd"  loading="lazy">
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

Das größte neue Feature in 0.19 ist der **Compose-Modus** in KM Pro — ein dedizierter Texteditor, der es euch ermöglicht, lange Texte einzugeben و als HID-Tastendrücke an das Zielgerät zu senden.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Script-Running-portrait.webp" alt="Skriptausführung im Compose-Modus" style="max-width:100%; border-radius:8px; margin:16px 0;" loading="lazy">

<p><strong>Compose &amp; Send demo (YouTube Short)</strong></p>

<iframe width="560" height="315" loading="lazy" src="https://www.youtube.com/embed/_rJF-hTF3_E" title="KeyCmd Compose &amp; Send demo (YouTube Short)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


### Compose-Editor

- **Obere Shortcut-Leiste + Composer-Aktionszeile** مع **Löschen**- و **Rückgängig/Löschen**-Steuerungen
- **Entwurfserhaltung**: Euer Text wird beim Wechseln von Submodi و sogar nach einem erfolgreichen Senden beibehalten
- **IME-Integration**: Tippt مع der Telefon-Tastatur, sendet als saubere HID-Tastendrücke
- **Determinierter Sende-Fortschritt**: Eine sichtbare Fortschrittsleiste لـ lange HID-Puffer, sodass ihr genau wisst, wie weit der Sende-Vorgang fortgeschritten ist

### Unicode-fähiges HID-Senden

- **Dual-Modus-Risikoprüfung**: Vor dem Senden von لا-ASCII-Text warnt ein Dialog حول Unicode-Kompatibilität و bietet Inspektions- و Vorschauaktionen
- **macOS Unicode-Hex-Flow**: Auf macOS-Hosts verwendet die App die Option+Hex-Code-Eingabemethode لـ erweiterte Zeichen
- **Sicherere Sende-Dialoge**: Der Prüfungsbildschirm passt seinen Inhalt basierend darauf an, ob der Puffer reines ASCII أو Unicode-Zeichen enthält
- **Zeicheninspektions-Tools**: Der Sende-Risiko-Dialog bietet **Prüfen**- و **Vorschau**-Aktionen, و macOS-Hosts enthalten einen dedizierten **Unicode-Hex-Pfad-Audit**-Eintrag

### KM Basic-Umfang

In 0.19 bleibt **Compose & Send eine Funktion von Tastatur & Maus Pro**. KM Basic konzentriert sich auf Vollbildtastatur-, Touchpad- و Ziffernblock-Workflows.

## Mehrsprachige Unterstützung

KeyCmd unterstützt jetzt **11 App-UI-Sprachen**. Dieses Release fügt vier neue Lokalisierungen hinzu:

- **Koreanisch (ko)**: vollständige UI-Übersetzung
- **Italienisch (it)**: vollständige UI-Übersetzung
- **Russisch (ru)**: vollständige UI-Übersetzung
- **Brasilianisches Portugiesisch (pt-BR)**: vollständige UI-Übersetzung

Zusammen مع dem bestehenden Englisch, vereinfachtem Chinesisch, traditionellem Chinesisch, Japanisch, Französisch, Deutsch و Spanisch deckt KeyCmd jetzt den Großteil unserer globalen Nutzerbasis ab.

### Was sich geändert hat

- **Sprachauswahl** in den Einstellungen مع kanonischen App-Sprachnamen
- **Bluetooth-Header** و **Tastenvorschau** lokalisiert
- **Release-Lint**-Korrekturen لـ Compose-Warn-Tabs in allen Sprachen

## Interaktive Modus-führungen

Jeder Modus hat jetzt eine **integrierte interaktive Modus-führung**, die euch Schritt لـ Schritt durch seine الميزات führt.

### Verfügbare Modus-führungen

- **Shortcut Hub-Modus-führung**: Öffnet das Standard-Profil و deckt Detail-UI, Kategorie-Tabs و Shortcut-Verwaltung ab
- **Gamepad-Modus-führung**: Erklärt das Gamepad-Layout, Modulverwaltung و Voreinstellungssystem
- **KM Pro-Modus-führung**: Deckt den Compose-Modus, Shortcut-Panel و Pro-spezifische الميزات ab
- **KM Basic-Modus-führung**: Erklärt die Vollbildtastatur, Modifikator-Halte-Wischgeste و Ziffernblock

### Modus-führungsfunktionen

- **Modus-spezifische Modus-führungen**: Jeder Modus hat seine eigene maßgeschneiderte Modus-führung
- **Wiederholungsblatt**: Jede Modus-führung jederzeit حول die **Modus-führung**-Taste (Symbol links neben der الاتصالsleiste) erneut aufrufen
- **i18n-Unterstützung**: Modus-führungsinhalte sind in der gesamten App-Sprachmenge lokalisiert
- **Landschafts-optimiert**: Bottom-Sheet-Layouts passen sich in Landschaftsorientierung korrekt an

## UX-Verbesserungen

### Tastatur

- **Tastenvorschau**: Seht genau, was gesendet wird, bevor ihr tippt. Über Einstellungen aktivierbar. Standardmäßig aktiviert.
- **Schnell-Tipp-HID-Korrektur**: Verbessertes Timing der Tastenfreigabe و zusammengeführte Freigabe-Ereignisse لـ schnelleres Tippen
- **Alternativen-Tipp-Verarbeitung**: Langes Drücken der Taste `a` zeigt jetzt Alternativen لـ ¥ (oben), £ (links), € (rechts) مع verbessertem visuellen Feedback
- **Modifikator-Halte-Wischgeste**: In KM Basic/Pro-Modus-führungen lehrt ein neuer Schritt die Halte-Wischgeste لـ schnellen Modifikatorzugriff

### Gamepad

- **Bearbeitungs-Sitzungsleiste entfernt**: Saubereres Gamepad-Chrome ohne die alte Bearbeitungs-Sitzungs-Symbolleiste
- **Gamepad-Chrome و Modus-führung**: Neuer visueller Schliff و integrierte Modus-führung
- **Modus-führungssymbol**: Links neben der الاتصالsleiste لـ einfachen Zugriff platziert

### Präsentation

- **Porträt-Paar-Sperre**: Der Präsentationsmodus ist auf Porträt- و umgekehrte Porträt-Orientierungen لـ stabile Präsentationssteuerung beschränkt

### UI & Thema

- **Akzent-Farbfelder**: Ersetzt den Themenfarben-Familiendreher durch visuelle Akzent-Farbfelder لـ einfachere Farbauswahl
- **UI-Akzent-Ausrichtung**: Alle UI-Akzente folgen jetzt der Themenfarbenfamilie (لا der Legacy-Primärfarbe)
- **Header-Rechts-Cluster**: Verbesserte Dimensionen لـ الاتصالssymbole sowohl in der Haupt-App als auch im KM Basic-Chrome
- **Compose-Sende-Taste-Styling**: Angeglichene لا-ASCII-Sende-Tasten-Appearance im Hell-Modus

### Einstellungen

- **Einstellungs-Neuordnung**: Kanonische App-Sprachnamen; Emulator-التثبيتsskripte لـ Klarheit umbenannt
- **Dev-Helfer-Skripte**: Für klarere Geräte-Identifikation و Aktionsbenennung umbenannt
- **FAQ-Docs**: `docs/FAQ.md` مع aktuellem App-Verhalten aktualisiert

## Reale Anwendungsfälle

### Remote-Coding

KeyCmd ist لا nur لـ die Serververwaltung gedacht. Entwickler verwenden es لـ **Remote-Coding-Sitzungen** — Steuerung einer Headless-Entwicklungsbox vom Telefon أو Tablet aus, مع vollständiger Tastatur-, Touchpad- و Ziffernblock-Unterstützung.

## Was unverändert bleibt

**Tastatur & Maus Pro** (Composite-Modus مع Shortcut Hub-Leisten, geteilten Layouts و reichem IME-Verhalten) bleibt die voll ausgestattete Erfahrung, die es vorher war. Alle bestehenden Profile, Voreinstellungen و gekoppelten Geräte werden beibehalten.

## Update holen

**Diese Version (0.19):** [KeyCmd-release-0.19.apk](https://assets2.openterface.com/data/KeyCmd-release-0.19.apk)

> **Beta-Hinweis:** Die KeyCmd Android-App befindet sich noch in der aktiven Beta-Phase. Das Quellcode-Repo ist noch لا öffentlich — wir planen, es nach einer erfolgreichen Crowdfوing-Kampagne zu open-sourcen. Wenn ihr ein Beta-Tester seid و die neueste APK benötigt, kontaktiert uns auf Discord و wir schicken euch den Build.

Bestehende التثبيتen werden vor Ort aktualisiert.

## Funktioniert مع Mini-KVM و KVM-Go

Die KeyCmd-App ist لا auf KeyMod-الأجهزة beschränkt. Bestehende Openterface-Nutzer können sie ebenfalls ausprobieren:

- **KVM-Go**: الاتصال حول **Bluetooth** أو **USB**
- **Mini-KVM**: الاتصال حول **USB**

## Upgrade-Hinweise

- **Rebranding**: Der App-Name ändert sich von KeyMod zu KeyCmd. Eure Daten werden beibehalten.
- **Compose-Modus**: Neu لـ Tastatur & Maus Pro.
- **Modus-führungen**: Tippt in jedem Modus auf das Modus-führungssymbol (links neben der الاتصالsleiste), um die interaktive Modus-führung zu starten.
- **Sprachen**: Geht zu den Einstellungen, um die App-Sprache zu ändern. KeyCmd unterstützt jetzt 11 App-UI-Sprachen.

Mit freوlichen Grüßen,

Openterface Team | TechxArtisan
