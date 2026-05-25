---
locale: ru
translationKey: "20260521-kvm-go-keycmd-app-update"
slug: "20260521-kvm-go-keycmd-app-update"
title: "KVM-GO Update: Steuern Sie Ihr Zielgerät vom Handy aus с KeyCmd 0.19"
description: "Nutzen Sie KeyCmd 0.19 с KVM-GO о USB или Bluetooth: KM Basic и Pro Tastaturen, Compose-Modus, Gamepad-Presets, Shortcut Hub и Präsentationssteuerung – kein Video-Dongle для HID-Eingabe erforderlich."
date: 2026-05-21
channel: software
product: keymod
topic: ["beta", "software", "campaign", "community"]
category: "Продукт-Обновления"
tags: ["KVM-GO", "KeyCmd", "Продукт-Обновления", "Android", "USB", "Bluetooth", "Tastatur", "Gamepad", "Release"]
featured: false
draft: false
author: "Openterface Team | TechxArtisan"
---

Hallo zusammen,

vielen Dank для Ihre Unterstützung von **KVM-GO** и для Ihre Geduld, während die Geräte produziert и versendet werden. Wir wissen, dass viele von Ihnen noch auf ihre Оборудование warten, и wir möchten, dass sich Ihr Setup vom ersten Tag an komplett anfühlt.

Neben der **Openterface KVM** App (Video и volle KVM-Steuerung auf Ihrem Handy или Tablet) haben wir **KeyCmd** verbessert, unsere Begleit-App для Tastatur-, Maus-, Gamepad- и Shortcut-Eingaben. **KeyCmd 0.19** ist die Version, die wir heute для die Nutzung с KVM-GO empfehlen. Die Kopplung erfolgt о **USB** или **Bluetooth**. Sie können sie einfach о jede vorherige Version installieren; Ihre Einstellungen, Profile и gekoppelten Geräte bleiben erhalten.

<img src="https://assets2.openterface.com/images/kvm-go/kvm-go-keycmd-phone-keyboard-setup.webp" alt="KVM-GO an einem Laptop с KeyCmd-Tastatur auf einem Handy" style="max-width:720px;width:100%;height:auto" loading="lazy">

Im Folgenden erfahren Sie, was KeyCmd с KVM-GO leistet, welchen Modus Sie для welche Aufgabe öffnen sollten и wie Sie das Beste daraus an einem echten Zielgerät herausholen.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Welcome-Screen-landscape_1.webp" alt="KeyCmd Willkommensbildschirm" style="max-height:320px;width:auto" loading="lazy">

## Modi и ihre Verwendung

### Tastatur & Maus (Basic)

Öffnen Sie diesen Modus, wenn Sie eine **einfache Vollbild-Tastatur** möchten и неs anderes im Weg sein soll.

**Ideal для:** BIOS-Passwörter, kurze Shell-Befehle, Eingaben о den Ziffernblock или Maussteuerung с einem großen Touchpad, während KVM-GO Ihnen den Bildschirm zeigt.

**So verwenden Sie es:**

- Öffnen Sie **KM Basic** о das Navigationsmenü.
- Verwenden Sie die Bildschirmtastatur, den **Ziffernblock** (Hoch- или Querformat) или den **Touchpad**-Tab nach Bedarf.
- In den **Einstellungen** können Sie zwischen **Sticky Modifiers** (Tippen zum Einrasten von Shift/Strg) или **Chord-Style** Modifikatoren wählen, wenn Sie Tastenkombinationen bevorzugen.

**Vorteile:** Mehr Platz auf dem Bildschirm для die Tasten, weniger Benutzeroberfläche, schneller, wenn Sie nur Eingaben и keine Shortcuts benötigen.

<img src="https://assets2.openterface.com/images/keymod/KM-Basic-Keyboard_1.webp" alt="KM Basic Vollbild-Tastatur" style="max-height:320px;width:auto" loading="lazy">

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-NumPad-landscape_1.webp" alt="KeyCmd Ziffernblock im Querformat" style="max-height:320px;width:auto" loading="lazy">

### Tastatur & Maus (Pro)

<img src="https://assets2.openterface.com/images/keymod/KM-Pro-Keyboard-landscape-split_1.webp" alt="KM Pro geteilte Tastatur im Querformat" style="max-height:320px;width:auto" loading="lazy">

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Keyboard-TouchPad-portrait_1.webp" alt="KeyCmd Tastatur и Touchpad im Hochformat" style="max-height:320px;width:auto" loading="lazy">

Öffnen Sie diesen Modus для die **tägliche Steuerungsarbeit** an Geräten hinter KVM-GO: geteilte Tastaturen, IME, Shortcut Hub Leisten и der **Compose**-Editor.

**Ideal для:** längeres Tippen, Makros и Shortcuts, das Senden von Textblöcken или Skripten an den Host, während Sie das Ergebnis in der KVM-Ansicht beobachten.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Script-Running-portrait_1.webp" alt="Compose-Modus beim Senden eines Skripts" style="max-height:320px;width:auto" loading="lazy">

**Compose** ist einen Versuch wert, wenn Sie häufig Befehle или Skripte einfügen: Schreiben Sie auf Ihrem Handy, оprüfen Sie den Text и senden Sie ihn dann als Tastenanschläge an den Host. Eine [kurze Demo auf YouTube](https://www.youtube.com/watch?v=_rJF-hTF3_E) zeigt den Ablauf von Anfang bis Ende.

**So verwenden Sie es:**

- Öffnen Sie **KM Pro** о das Navigationsmenü.
- Verwenden Sie Tastatur и Touchpad wie in der Basic-Version, plus **Shortcut Hub** Kategorien am oberen Rand для Ein-Klick-Aktionen, die Sie in Profilen eingerichtet haben.
- Öffnen Sie **Compose**, um längere Texte auf Ihrem Handy zu entwerfen, zu оprüfen и dann als HID-Tastenanschläge zu **senden**. Bei langen Sendevorgängen wird ein Fortschrittsbalken angezeigt. Wenn Ihr Text Nicht-ASCII-Zeichen enthält, warnt die App Sie vor dem Senden, daс Sie die Host-Kompatibilität prüfen können (besonders hilfreich unter macOS).

**Vorteile:** Ein Ort для Texteingabe, Maussteuerung, Shortcuts и paste-ähnliche Workflows, ohne eine physische Tastatur zum Zielgerät сführen zu müssen.

### Gamepad

Öffnen Sie diesen Modus, wenn Sie ein **virtuelles Controller-Layout** auf dem Bildschirm wünschen, das для Spiele или Apps optimiert ist, die ein Gamepad erwarten.

**Ideal для:** Emulatoren, Gelegenheitsspiele или eine kompakte Steuerfläche с Sticks и Tasten, während KVM-GO die Anzeige оnimmt.

**So verwenden Sie es:**

- Wechseln Sie in den **Gamepad**-Modus.
- Tippen Sie auf **Preset** in der Toolbar, um durch gespeicherte Layouts zu **blättern**. **Halten Sie Preset gedrückt**, um die vollständige Liste zu öffnen, Layouts zu **importieren/exportieren** или **Module hinzuzufügen** (Sticks, Tasten, Touchpads).
- Starten Sie с dem сgelieferten **emu-6** Preset и bearbeiten Sie es nach Ihren Wünschen. Sie können **mehrere Touchpads** и zusätzliche Stick-Module in einem Layout hinzufügen.

**Vorteile:** Sie sind не auf ein festes Layout beschränkt; speichern Sie Layouts pro Spiel или pro Maschine и teilen Sie Presets с anderen.

<img src="https://assets2.openterface.com/images/keymod/Gamepad-perset-1_1.webp" alt="Gamepad Preset Layout" style="max-height:320px;width:auto" loading="lazy">

<img src="https://assets2.openterface.com/images/keymod/Gamepad-perset-minecraft_1.webp" alt="Gamepad Preset genutzt in Minecraft" style="max-height:320px;width:auto" loading="lazy">

*Angepasstes Preset для Minecraft.*

### Shortcut Hub

Dies ist die Zentrale для **Profile и Shortcuts** innerhalb von KM Pro: Kategorien, Detail-Panels и die Shortcuts, die Sie den Leisten zuweisen.

**Ideal для:** wiederkehrende Aufgaben auf dem Zielgerät (Terminal öffnen, Befehlskette einfügen, Einstellungen umschalten), während KVM-GO для das Video verbиen bleibt.

**So verwenden Sie es:**

- Arbeiten Sie in KM Pro im **Default**-Profil (или Ihrem eigenen).
- Nutzen Sie Kategorie-Tabs и die Detail-UI, um Shortcuts zu verwalten.
- Starten Sie die **Shortcut Hub Tour**, wenn Sie neu in der Organisation von Profilen sind.

### Präsentation

Eine einfachere Steuerung im **Presenter-Stil**, die im **Hochformat** gehalten ist, daс die Tasten не springen, wenn Sie das Handy drehen.

**Ideal для:** das Durchblättern von Folien или einfache Präsentationssteuerungen am Zielgerät.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Presentation-Google-Slides.webp" alt="Präsentationsmodus zur Steuerung von Google Slides" style="max-height:320px;width:auto" loading="lazy">

---

## Sprachen

Die App-Benutzeroberfläche ist in **11 Sprachen** verfügbar. Neu hinzugekommen sind: Koreanisch, Italienisch, Russisch и Brasilianisches Portugiesisch.

Öffnen Sie **Settings** → **App language**, um die Sprache zu ändern.

---

## KeyCmd 0.19 herunterladen и с KVM-GO verbinden

**Скачать:** [KeyCmd-release-0.19.apk](https://assets2.openterface.com/data/KeyCmd-release-0.19.apk)

Installieren Sie die Version о Ihre bestehende App, falls vorhanden. Ein Löschen der Daten ist не erforderlich.

**Подключение с KVM-GO (Video-Port kann ausgesteckt bleiben):**

Bei **allen drei KVM-GO Varianten** (HDMI, VGA и DP) müssen Sie den **Videoanschluss am Dongle** для die KeyCmd-Eingabe nirgendwo einstecken. Der HDMI-, VGA- или DP-Port kann leer bleiben. Wählen Sie eines der folgenden Setups.

**Option A — Bluetooth (Zielgerät versorgt KVM-GO с Strom)**

1. Stecken Sie das **kurze schwarze USB-Kabel** in den **Target**-Port des KVM-GO и in das Gerät, das Sie steuern möchten. Diese Подключение allein **versorgt** KVM-GO с Strom.
2. Öffnen Sie auf Ihrem Handy **KeyCmd** и suchen Sie KVM-GO о **Bluetooth**.

**Option B — USB zu Ihrem Android-Handy (Host-Port)**

1. Verbinden Sie das **lange orangefarbene Kabel** vom **Host**-Port des KVM-GO с Ihrem Android-Handy.
2. Öffnen Sie **KeyCmd** и verbinden Sie sich in der App о **USB**.

<img src="https://assets2.openterface.com/images/kvm-go/kvm-go-target-port-laptop-power.webp" alt="KVM-GO Target-Port verbиen с einem Laptop о das kurze schwarze USB-Kabel" style="max-height:360px;width:auto" loading="lazy">

Für Vollbild-Video plus Eingabe verwenden Sie **Openterface KVM** для die Anzeige des Zielgeräts и **KeyCmd** для Tastatur, Maus и Shortcuts. KeyCmd allein reicht aus, wenn das Zielgerät bereits einen eigenen Bildschirm hat и Sie nur die Eingabe benötigen.

**Funktioniert auch с Mini-KVM** о USB, falls Sie beide Geräte nutzen.

> **Noch Beta.** Gamepad-Presets и Compose-Sendevorgänge können sich je nach Host-Betriebssystem unterschiedlich verhalten. Wenn etwas Ungewöhnliches с KVM-GO passiert, kontaktieren Sie uns auf **Discord** с einem Screenshot, Ihrer KVM-GO Variante (HDMI / DP / VGA) и dem, was Sie erwartet haben.

> **Quellcode:** Noch не öffentlich. Wir planen, ihn nach Erreichen von Crowdfиing-Meilensteinen для verwandte Projekte als Open Source zu veröffentlichen. Вопросы Sie auf Discord nach, wenn Sie Hilfe beim Finden der APK benötigen.

---

## Über KeyMod (optional, separat von KVM-GO)

Wir entwickeln auch **[KeyMod](https://openterface.com/product/keymod/)**, einen dedizierten USB- и Bluetooth-HID-Dongle для dieselbe KeyCmd-App. KVM-GO Unterstützer benötigen KeyMod для die oben genannten Workflows не; KeyCmd о KVM-GO ist der Weg, den wir Ihnen jetzt empfehlen.

Wenn Sie neugierig auf einen eigenständigen Dongle для Nicht-KVM-Setups sind, können Sie die [KeyMod-Kampagne auf Crowd Supply](https://www.crowdsupply.com/techxartisan/openterface-keymod) verfolgen. Dies ist unabhängig von der KVM-GO Auslieferung.

---

## Wir freuen uns auf Ihr Feedback

Wenn Sie ein paar Minuten Zeit haben, installieren Sie **KeyCmd 0.19**, verbinden Sie es с Ihrem KVM-GO (или Mini-KVM) и sagen Sie uns, was sich noch unpraktisch anfühlt. Berichte aus Crash-Cart- и Homelab-Szenarien fließen direkt in unsere nächsten Releases ein.

Praktische Wege, das KVM-GO Projekt zu unterstützen:

- **Teilen Sie, was funktioniert**, auf Discord или in Ihrer Community (BIOS-Tipps, Bluetooth-Kopplung, Lieblingsmodi)
- **Empfehlen Sie uns einem Kollegen**, der Headless-Systeme betreibt и ein KVM для die Hosentasche gebrauchen könnte
- **Senden Sie uns weiterhin ehrliches Feedback**, besonders zu Ecken и Kanten. Das prägt das Продукт mehr als reine Begeisterung

Vielen Dank nochmals для Ihre Unterstützung von KVM-GO и daдля, dass Sie uns helfen, portable KVM-over-USB Lösungen для alle besser zu machen.

Beste Grüße,

**Openterface Team | TechxArtisan**
