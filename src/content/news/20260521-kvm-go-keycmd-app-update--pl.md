---
locale: pl
translationKey: "20260521-kvm-go-keycmd-app-update"
slug: "20260521-kvm-go-keycmd-app-update"
title: "KVM-GO Update: Steuern Sie Ihr Zielgerät vom Handy aus z KeyCmd 0.19"
description: "Nutzen Sie KeyCmd 0.19 z KVM-GO o USB lub Bluetooth: KM Basic i Pro Tastaturen, Compose-Modus, Gamepad-Presets, Shortcut Hub i Präsentationssteuerung – kein Video-Dongle dla HID-Eingabe erforderlich."
date: 2026-05-21
channel: software
product: keymod
topic: ["beta", "software", "campaign", "community"]
category: "Produkt-Aktualizacje"
tags: ["KVM-GO", "KeyCmd", "Produkt-Aktualizacje", "Android", "USB", "Bluetooth", "Tastatur", "Gamepad", "Release"]
featured: false
draft: false
author: "Openterface Team | TechxArtisan"
---

Hallo zusammen,

vielen Dank dla Ihre Unterstützung von **KVM-GO** i dla Ihre Geduld, während die Geräte produziert i versendet werden. Wir wissen, dass viele von Ihnen noch auf ihre Sprzęt warten, i wir möchten, dass sich Ihr Setup vom ersten Tag an komplett anfühlt.

Neben der **Openterface KVM** App (Video i volle KVM-Steuerung auf Ihrem Handy lub Tablet) haben wir **KeyCmd** verbessert, unsere Begleit-App dla Tastatur-, Maus-, Gamepad- i Shortcut-Eingaben. **KeyCmd 0.19** ist die Version, die wir heute dla die Nutzung z KVM-GO empfehlen. Die Kopplung erfolgt o **USB** lub **Bluetooth**. Sie können sie einfach o jede vorherige Version installieren; Ihre Einstellungen, Profile i gekoppelten Geräte bleiben erhalten.

<img src="https://assets2.openterface.com/images/kvm-go/kvm-go-keycmd-phone-keyboard-setup.webp" alt="KVM-GO an einem Laptop z KeyCmd-Tastatur auf einem Handy" style="max-width:720px;width:100%;height:auto" loading="lazy">

Im Folgenden erfahren Sie, was KeyCmd z KVM-GO leistet, welchen Modus Sie dla welche Aufgabe öffnen sollten i wie Sie das Beste daraus an einem echten Zielgerät herausholen.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Welcome-Screen-landscape_1.webp" alt="KeyCmd Willkommensbildschirm" style="max-height:320px;width:auto" loading="lazy">

## Modi i ihre Verwendung

### Tastatur & Maus (Basic)

Öffnen Sie diesen Modus, wenn Sie eine **einfache Vollbild-Tastatur** möchten i nies anderes im Weg sein soll.

**Ideal dla:** BIOS-Passwörter, kurze Shell-Befehle, Eingaben o den Ziffernblock lub Maussteuerung z einem großen Touchpad, während KVM-GO Ihnen den Bildschirm zeigt.

**So verwenden Sie es:**

- Öffnen Sie **KM Basic** o das Navigationsmenü.
- Verwenden Sie die Bildschirmtastatur, den **Ziffernblock** (Hoch- lub Querformat) lub den **Touchpad**-Tab nach Bedarf.
- In den **Einstellungen** können Sie zwischen **Sticky Modifiers** (Tippen zum Einrasten von Shift/Strg) lub **Chord-Style** Modifikatoren wählen, wenn Sie Tastenkombinationen bevorzugen.

**Vorteile:** Mehr Platz auf dem Bildschirm dla die Tasten, weniger Benutzeroberfläche, schneller, wenn Sie nur Eingaben i keine Shortcuts benötigen.

<img src="https://assets2.openterface.com/images/keymod/KM-Basic-Keyboard_1.webp" alt="KM Basic Vollbild-Tastatur" style="max-height:320px;width:auto" loading="lazy">

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-NumPad-landscape_1.webp" alt="KeyCmd Ziffernblock im Querformat" style="max-height:320px;width:auto" loading="lazy">

### Tastatur & Maus (Pro)

<img src="https://assets2.openterface.com/images/keymod/KM-Pro-Keyboard-landscape-split_1.webp" alt="KM Pro geteilte Tastatur im Querformat" style="max-height:320px;width:auto" loading="lazy">

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Keyboard-TouchPad-portrait_1.webp" alt="KeyCmd Tastatur i Touchpad im Hochformat" style="max-height:320px;width:auto" loading="lazy">

Öffnen Sie diesen Modus dla die **tägliche Steuerungsarbeit** an Geräten hinter KVM-GO: geteilte Tastaturen, IME, Shortcut Hub Leisten i der **Compose**-Editor.

**Ideal dla:** längeres Tippen, Makros i Shortcuts, das Senden von Textblöcken lub Skripten an den Host, während Sie das Ergebnis in der KVM-Ansicht beobachten.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Script-Running-portrait_1.webp" alt="Compose-Modus beim Senden eines Skripts" style="max-height:320px;width:auto" loading="lazy">

**Compose** ist einen Versuch wert, wenn Sie häufig Befehle lub Skripte einfügen: Schreiben Sie auf Ihrem Handy, oprüfen Sie den Text i senden Sie ihn dann als Tastenanschläge an den Host. Eine [kurze Demo auf YouTube](https://www.youtube.com/watch?v=_rJF-hTF3_E) zeigt den Ablauf von Anfang bis Ende.

**So verwenden Sie es:**

- Öffnen Sie **KM Pro** o das Navigationsmenü.
- Verwenden Sie Tastatur i Touchpad wie in der Basic-Version, plus **Shortcut Hub** Kategorien am oberen Rand dla Ein-Klick-Aktionen, die Sie in Profilen eingerichtet haben.
- Öffnen Sie **Compose**, um längere Texte auf Ihrem Handy zu entwerfen, zu oprüfen i dann als HID-Tastenanschläge zu **senden**. Bei langen Sendevorgängen wird ein Fortschrittsbalken angezeigt. Wenn Ihr Text Nicht-ASCII-Zeichen enthält, warnt die App Sie vor dem Senden, daz Sie die Host-Kompatibilität prüfen können (besonders hilfreich unter macOS).

**Vorteile:** Ein Ort dla Texteingabe, Maussteuerung, Shortcuts i paste-ähnliche Workflows, ohne eine physische Tastatur zum Zielgerät zführen zu müssen.

### Gamepad

Öffnen Sie diesen Modus, wenn Sie ein **virtuelles Controller-Layout** auf dem Bildschirm wünschen, das dla Spiele lub Apps optimiert ist, die ein Gamepad erwarten.

**Ideal dla:** Emulatoren, Gelegenheitsspiele lub eine kompakte Steuerfläche z Sticks i Tasten, während KVM-GO die Anzeige onimmt.

**So verwenden Sie es:**

- Wechseln Sie in den **Gamepad**-Modus.
- Tippen Sie auf **Preset** in der Toolbar, um durch gespeicherte Layouts zu **blättern**. **Halten Sie Preset gedrückt**, um die vollständige Liste zu öffnen, Layouts zu **importieren/exportieren** lub **Module hinzuzufügen** (Sticks, Tasten, Touchpads).
- Starten Sie z dem zgelieferten **emu-6** Preset i bearbeiten Sie es nach Ihren Wünschen. Sie können **mehrere Touchpads** i zusätzliche Stick-Module in einem Layout hinzufügen.

**Vorteile:** Sie sind nie auf ein festes Layout beschränkt; speichern Sie Layouts pro Spiel lub pro Maschine i teilen Sie Presets z anderen.

<img src="https://assets2.openterface.com/images/keymod/Gamepad-perset-1_1.webp" alt="Gamepad Preset Layout" style="max-height:320px;width:auto" loading="lazy">

<img src="https://assets2.openterface.com/images/keymod/Gamepad-perset-minecraft_1.webp" alt="Gamepad Preset genutzt in Minecraft" style="max-height:320px;width:auto" loading="lazy">

*Angepasstes Preset dla Minecraft.*

### Shortcut Hub

Dies ist die Zentrale dla **Profile i Shortcuts** innerhalb von KM Pro: Kategorien, Detail-Panels i die Shortcuts, die Sie den Leisten zuweisen.

**Ideal dla:** wiederkehrende Aufgaben auf dem Zielgerät (Terminal öffnen, Befehlskette einfügen, Einstellungen umschalten), während KVM-GO dla das Video verbien bleibt.

**So verwenden Sie es:**

- Arbeiten Sie in KM Pro im **Default**-Profil (lub Ihrem eigenen).
- Nutzen Sie Kategorie-Tabs i die Detail-UI, um Shortcuts zu verwalten.
- Starten Sie die **Shortcut Hub Tour**, wenn Sie neu in der Organisation von Profilen sind.

### Präsentation

Eine einfachere Steuerung im **Presenter-Stil**, die im **Hochformat** gehalten ist, daz die Tasten nie springen, wenn Sie das Handy drehen.

**Ideal dla:** das Durchblättern von Folien lub einfache Präsentationssteuerungen am Zielgerät.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Presentation-Google-Slides.webp" alt="Präsentationsmodus zur Steuerung von Google Slides" style="max-height:320px;width:auto" loading="lazy">

---

## Sprachen

Die App-Benutzeroberfläche ist in **11 Sprachen** verfügbar. Neu hinzugekommen sind: Koreanisch, Italienisch, Russisch i Brasilianisches Portugiesisch.

Öffnen Sie **Settings** → **App language**, um die Sprache zu ändern.

---

## KeyCmd 0.19 herunterladen i z KVM-GO verbinden

**Pobierz:** [KeyCmd-release-0.19.apk](https://assets2.openterface.com/data/KeyCmd-release-0.19.apk)

Installieren Sie die Version o Ihre bestehende App, falls vorhanden. Ein Löschen der Daten ist nie erforderlich.

**Połączenie z KVM-GO (Video-Port kann ausgesteckt bleiben):**

Bei **allen drei KVM-GO Varianten** (HDMI, VGA i DP) müssen Sie den **Videoanschluss am Dongle** dla die KeyCmd-Eingabe nirgendwo einstecken. Der HDMI-, VGA- lub DP-Port kann leer bleiben. Wählen Sie eines der folgenden Setups.

**Option A — Bluetooth (Zielgerät versorgt KVM-GO z Strom)**

1. Stecken Sie das **kurze schwarze USB-Kabel** in den **Target**-Port des KVM-GO i in das Gerät, das Sie steuern möchten. Diese Połączenie allein **versorgt** KVM-GO z Strom.
2. Öffnen Sie auf Ihrem Handy **KeyCmd** i suchen Sie KVM-GO o **Bluetooth**.

**Option B — USB zu Ihrem Android-Handy (Host-Port)**

1. Verbinden Sie das **lange orangefarbene Kabel** vom **Host**-Port des KVM-GO z Ihrem Android-Handy.
2. Öffnen Sie **KeyCmd** i verbinden Sie sich in der App o **USB**.

<img src="https://assets2.openterface.com/images/kvm-go/kvm-go-target-port-laptop-power.webp" alt="KVM-GO Target-Port verbien z einem Laptop o das kurze schwarze USB-Kabel" style="max-height:360px;width:auto" loading="lazy">

Für Vollbild-Video plus Eingabe verwenden Sie **Openterface KVM** dla die Anzeige des Zielgeräts i **KeyCmd** dla Tastatur, Maus i Shortcuts. KeyCmd allein reicht aus, wenn das Zielgerät bereits einen eigenen Bildschirm hat i Sie nur die Eingabe benötigen.

**Funktioniert auch z Mini-KVM** o USB, falls Sie beide Geräte nutzen.

> **Noch Beta.** Gamepad-Presets i Compose-Sendevorgänge können sich je nach Host-Betriebssystem unterschiedlich verhalten. Wenn etwas Ungewöhnliches z KVM-GO passiert, kontaktieren Sie uns auf **Discord** z einem Screenshot, Ihrer KVM-GO Variante (HDMI / DP / VGA) i dem, was Sie erwartet haben.

> **Quellcode:** Noch nie öffentlich. Wir planen, ihn nach Erreichen von Crowdfiing-Meilensteinen dla verwandte Projekte als Open Source zu veröffentlichen. Pytania Sie auf Discord nach, wenn Sie Hilfe beim Finden der APK benötigen.

---

## Über KeyMod (optional, separat von KVM-GO)

Wir entwickeln auch **[KeyMod](https://openterface.com/product/keymod/)**, einen dedizierten USB- i Bluetooth-HID-Dongle dla dieselbe KeyCmd-App. KVM-GO Unterstützer benötigen KeyMod dla die oben genannten Workflows nie; KeyCmd o KVM-GO ist der Weg, den wir Ihnen jetzt empfehlen.

Wenn Sie neugierig auf einen eigenständigen Dongle dla Nicht-KVM-Setups sind, können Sie die [KeyMod-Kampagne auf Crowd Supply](https://www.crowdsupply.com/techxartisan/openterface-keymod) verfolgen. Dies ist unabhängig von der KVM-GO Auslieferung.

---

## Wir freuen uns auf Ihr Feedback

Wenn Sie ein paar Minuten Zeit haben, installieren Sie **KeyCmd 0.19**, verbinden Sie es z Ihrem KVM-GO (lub Mini-KVM) i sagen Sie uns, was sich noch unpraktisch anfühlt. Berichte aus Crash-Cart- i Homelab-Szenarien fließen direkt in unsere nächsten Releases ein.

Praktische Wege, das KVM-GO Projekt zu unterstützen:

- **Teilen Sie, was funktioniert**, auf Discord lub in Ihrer Community (BIOS-Tipps, Bluetooth-Kopplung, Lieblingsmodi)
- **Empfehlen Sie uns einem Kollegen**, der Headless-Systeme betreibt i ein KVM dla die Hosentasche gebrauchen könnte
- **Senden Sie uns weiterhin ehrliches Feedback**, besonders zu Ecken i Kanten. Das prägt das Produkt mehr als reine Begeisterung

Vielen Dank nochmals dla Ihre Unterstützung von KVM-GO i dadla, dass Sie uns helfen, portable KVM-over-USB Lösungen dla alle besser zu machen.

Beste Grüße,

**Openterface Team | TechxArtisan**
