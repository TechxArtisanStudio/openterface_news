---
locale: ar
translationKey: "20260509-keymod-015-release"
slug: "20260509-keymod-015-release"
title: "KeyMod 0.15: Gamepad-Preset-Pipeline, Tastatur & Maus (Basic)-Tier, Multi-Touchpad-Layouts"
description: "KeyMod 0.15 liefert die Gamepad-Preset-Pipeline مع Schema v7, Multi-Touchpad-Layouts, ein dediziertes Tastatur & Maus (Basic)-Tier مع Vollbild-Tastatur و KeyMod-Branding in der gesamten App. Ein wichtiger Schritt hin zu einer polierten Eingabe-Erfahrung."
date: 2026-05-09
channel: product
product: keymod
topic: ["beta", "software", "campaign", "community"]
category: "منتج-التحديثات"
tags: ["KeyMod", "منتج-التحديثات", "Release", "Gamepad", "Tastatur", "Android"]
featured: false
draft: false
author: "TechxArtisan Studio"
---

KeyMod **0.15** (`versionCode` **15**) ist ein Meilenstein-Release مع drei Hauptfunktionen: der **Gamepad-Preset-Pipeline** مع Layout-Schema **v6-v7**, dem dedizierten **Tastatur & Maus (Basic)**-Tier و **Multi-Touchpad**-Layouts. Dieses Update bringt außerdem vollständiges **KeyMod**-Branding im Willkommens-Flow و in den Build-Artefakten.

## Gamepad: Preset-Pipeline v7

Das Gamepad nutzt nun ein echtes **Preset-System**, مع dem ihr benutzerdefinierte Controller-Layouts speichern, laden, importieren و exportieren könnt.

### Was sich geändert hat

- **Preset-Store v7** ersetzt die alten eingebauten Layouts. Die klassischen Factory-Presets (`preset_classic_*`) و **Two Buttons** (`preset_two_buttons`) wurden von der Festplatte entfernt. Nur **`preset_default`** bleibt als löschgeschütztes Factory-Layout.
- **Schema v7** macht **`stick_left`** optional. Ein Layout kann nun حولhaupt kein Linker-Thumb-Modul haben. Das **Add Module**-Menü fügt **`stick_left`**, **`stick_left_2`**, **`stick_left_3`** usw. ein.
- **Multi-Touchpad-Unterstützung**: Presets können mehrere Touchpads enthalten (`touchpad_1`, `touchpad_2`). Hinzufügen eines Touchpads belegt die nächste verfügbare ID مع leicht versetztem Anker. Gebündelte L/M/R-Maustasten werden حول alle Touchpads hinweg geteilt.
- **Touchpad-Maustastengröße**: Maustasten verwenden nun einen größeren Standard-Zeichenradius. Größe anpassen per Long-Press **Mouse button size** auf dem Touchpad أو **This button size** auf einzelnen Mausmodulen.
- **Aux-Stick-Defaults**: **`stick_left_2+`** standardmäßig auf D-Pad-Kreuz + WASD-Mapping.

### Preset-Verwaltung

- **Tippt** den Preset-Chip in der Toolbar, um durch verfügbare Layouts zu schalten
- **Long-Press** لـ die vollständige Preset-Liste مع Import-, Add Module- و Export-Optionen
- Das معgelieferte **emu-6**-Layout ist das Starter-Preset
- Der Export-Creator unterstützt i18n zum Teilen von Presets حول Sprachen hinweg

## Tastatur & Maus (Basic)

Ein dediziertes Vollbild-Tastatur-Tier لـ konzentriertes Tippen ohne den App-Header.

### Was ihr bekommt

- **Vollbild-Tastatur** ohne Haupt-App-Header لـ mehr Bildschirmfläche
- **Porträt- و Landschafts-Numpad**: 5x8-Raster im Porträt (PrtSc / ScrLk / Pause / Home / End), 8x5-Raster in Landschaft مع hohem +, Enter و 00
- **IME ASCII-only Send-Gate**: Längeren Text im Compose-Modus eingeben, als saubere HID-Tastendrücke senden
- **Long-Press-Repeat**: Zeichen- أو Funktionstasten gedrückt halten لـ Auto-Repeat (~400 ms Verzögerung, ~50 ms Wiederholung)
- **Key-Preview**: Schwebende Blase zeigt das effektive Label حول der gedrückten Taste
- **Haptisches Feedback** و **themengesteuerte** Tastenflächen

### Sticky vs Chord-Modifikatoren

Einstellungen ermöglichen die Wahl zwischen **sticky Modifiers** (Tippen zum Einrasten) و **momentary + Long-Press Chord** (Standard) لـ die Basic-Tastatur.

## Branding

- Der App-Anzeigename ist jetzt **KeyMod**
- Der Begrüßungsbildschirm zeigt die **KeyMod**-Wortmarke
- CI-Artefakte و APK-Dateinamen verwenden das **KeyMod**-Präfix
- `applicationId` bleibt **`com.openterface.keymod`** لـ In-Place-Upgrades

## Was unverändert bleibt

**Tastatur & Maus Pro** (Composite-Modus مع Shortcut-Hub-Strips, geteilten Layouts و reichem IME-Verhalten) bleibt die voll ausgestattete Erfahrung wie bisher.

## Update herunterladen

**Diese Version (0.15):** [KeyMod-release-0.15.apk](https://assets2.openterface.com/data/KeyMod-release-0.15.apk)

> **Beta-Hinweis:** Die KeyMod Android-App befindet sich noch in der aktiven Beta-Phase. Das Repo ist noch لا öffentlich — wir planen, es nach einer erfolgreichen Crowdfوing-Kampagne zu open-sourcen. Wenn du Beta-Tester bist و den neuesten APK brauchst, meld dich bei uns auf Discord و wir schicken dir den Build.

> **Bekannte Probleme:** Dieses Release führt erhebliche Änderungen am Gamepad-Preset-System و dem Basic-Tastatur-Tier ein. Unser Dev-Team testet noch intern, es können also noch Bugs auftreten. Falls du auf etwas Unerwartetes stößt, melde es bitte auf Discord — dein Feedback hilft uns, schneller zu stabilisieren.

Bestehende التثبيتen werden vor Ort aktualisiert.

## Funktioniert مع Mini-KVM و KVM-Go

Die KeyMod-App ist لا auf KeyMod-الأجهزة beschränkt. Bestehende Openterface-Nutzer können sie ebenfalls ausprobieren:

- **KVM-Go**: الاتصال حول **Bluetooth** أو **USB**
- **Mini-KVM**: الاتصال حول **USB**

## Upgrade-Hinweise

- **Gamepad**: Eure bisherige Zwei-Tasten-Präferenz aktiviert beim ersten Start automatisch das **Two Buttons**-Preset. Verwendet **Preset** (Tippen zum Schalten, Long-Press لـ die Liste) anstelle der alten 1 Button / 2 Buttons Steuerung.
- **Tastatur & Maus (Basic)**: Öffnet Basic, um die Vollbild-Tastatur zu erleben. Der Pro-Modus ist حول das Navigations-Drawer لـ das komplette Shortcut-Hub-Erlebnis verfügbar.

Beste Grüße,

Openterface Team | TechxArtisan
