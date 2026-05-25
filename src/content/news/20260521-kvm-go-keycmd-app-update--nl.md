---
locale: nl
translationKey: "20260521-kvm-go-keycmd-app-update"
slug: "20260521-kvm-go-keycmd-app-update"
title: "KVM-GO Update: Steuern Sie Ihr Zielgerät vom Handy aus met KeyCmd 0.19"
description: "Nutzen Sie KeyCmd 0.19 met KVM-GO over USB of Bluetooth: KM Basic en Pro Tastaturen, Compose-Modus, Gamepad-Presets, Shortcut Hub en Präsentationssteuerung – kein Video-Dongle voor HID-Eingabe erforderlich."
date: 2026-05-21
channel: software
product: keymod
topic: ["beta", "software", "campaign", "community"]
category: "Product-Updates"
tags: ["KVM-GO", "KeyCmd", "Product-Updates", "Android", "USB", "Bluetooth", "Tastatur", "Gamepad", "Release"]
featured: false
draft: false
author: "Openterface Team | TechxArtisan"
---

Hallo zusammen,

vielen Dank voor Ihre Unterstützung von **KVM-GO** en voor Ihre Geduld, während die Geräte produziert en versendet werden. Wir wissen, dass viele von Ihnen noch auf ihre Hardware warten, en wir möchten, dass sich Ihr Setup vom ersten Tag an komplett anfühlt.

Neben der **Openterface KVM** App (Video en volle KVM-Steuerung auf Ihrem Handy of Tablet) haben wir **KeyCmd** verbessert, unsere Begleit-App voor Tastatur-, Maus-, Gamepad- en Shortcut-Eingaben. **KeyCmd 0.19** ist die Version, die wir heute voor die Nutzung met KVM-GO empfehlen. Die Kopplung erfolgt over **USB** of **Bluetooth**. Sie können sie einfach over jede vorherige Version installieren; Ihre Einstellungen, Profile en gekoppelten Geräte bleiben erhalten.

<img src="https://assets2.openterface.com/images/kvm-go/kvm-go-keycmd-phone-keyboard-setup.webp" alt="KVM-GO an einem Laptop met KeyCmd-Tastatur auf einem Handy" style="max-width:720px;width:100%;height:auto" loading="lazy">

Im Folgenden erfahren Sie, was KeyCmd met KVM-GO leistet, welchen Modus Sie voor welche Aufgabe öffnen sollten en wie Sie das Beste daraus an einem echten Zielgerät herausholen.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Welcome-Screen-landscape_1.webp" alt="KeyCmd Willkommensbildschirm" style="max-height:320px;width:auto" loading="lazy">

## Modi en ihre Verwendung

### Tastatur & Maus (Basic)

Öffnen Sie diesen Modus, wenn Sie eine **einfache Vollbild-Tastatur** möchten en niets anderes im Weg sein soll.

**Ideal voor:** BIOS-Passwörter, kurze Shell-Befehle, Eingaben over den Ziffernblock of Maussteuerung met einem großen Touchpad, während KVM-GO Ihnen den Bildschirm zeigt.

**So verwenden Sie es:**

- Öffnen Sie **KM Basic** over das Navigationsmenü.
- Verwenden Sie die Bildschirmtastatur, den **Ziffernblock** (Hoch- of Querformat) of den **Touchpad**-Tab nach Bedarf.
- In den **Einstellungen** können Sie zwischen **Sticky Modifiers** (Tippen zum Einrasten von Shift/Strg) of **Chord-Style** Modifikatoren wählen, wenn Sie Tastenkombinationen bevorzugen.

**Vorteile:** Mehr Platz auf dem Bildschirm voor die Tasten, weniger Benutzeroberfläche, schneller, wenn Sie nur Eingaben en keine Shortcuts benötigen.

<img src="https://assets2.openterface.com/images/keymod/KM-Basic-Keyboard_1.webp" alt="KM Basic Vollbild-Tastatur" style="max-height:320px;width:auto" loading="lazy">

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-NumPad-landscape_1.webp" alt="KeyCmd Ziffernblock im Querformat" style="max-height:320px;width:auto" loading="lazy">

### Tastatur & Maus (Pro)

<img src="https://assets2.openterface.com/images/keymod/KM-Pro-Keyboard-landscape-split_1.webp" alt="KM Pro geteilte Tastatur im Querformat" style="max-height:320px;width:auto" loading="lazy">

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Keyboard-TouchPad-portrait_1.webp" alt="KeyCmd Tastatur en Touchpad im Hochformat" style="max-height:320px;width:auto" loading="lazy">

Öffnen Sie diesen Modus voor die **tägliche Steuerungsarbeit** an Geräten hinter KVM-GO: geteilte Tastaturen, IME, Shortcut Hub Leisten en der **Compose**-Editor.

**Ideal voor:** längeres Tippen, Makros en Shortcuts, das Senden von Textblöcken of Skripten an den Host, während Sie das Ergebnis in der KVM-Ansicht beobachten.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Script-Running-portrait_1.webp" alt="Compose-Modus beim Senden eines Skripts" style="max-height:320px;width:auto" loading="lazy">

**Compose** ist einen Versuch wert, wenn Sie häufig Befehle of Skripte einfügen: Schreiben Sie auf Ihrem Handy, overprüfen Sie den Text en senden Sie ihn dann als Tastenanschläge an den Host. Eine [kurze Demo auf YouTube](https://www.youtube.com/watch?v=_rJF-hTF3_E) zeigt den Ablauf von Anfang bis Ende.

**So verwenden Sie es:**

- Öffnen Sie **KM Pro** over das Navigationsmenü.
- Verwenden Sie Tastatur en Touchpad wie in der Basic-Version, plus **Shortcut Hub** Kategorien am oberen Rand voor Ein-Klick-Aktionen, die Sie in Profilen eingerichtet haben.
- Öffnen Sie **Compose**, um längere Texte auf Ihrem Handy zu entwerfen, zu overprüfen en dann als HID-Tastenanschläge zu **senden**. Bei langen Sendevorgängen wird ein Fortschrittsbalken angezeigt. Wenn Ihr Text Nicht-ASCII-Zeichen enthält, warnt die App Sie vor dem Senden, damet Sie die Host-Kompatibilität prüfen können (besonders hilfreich unter macOS).

**Vorteile:** Ein Ort voor Texteingabe, Maussteuerung, Shortcuts en paste-ähnliche Workflows, ohne eine physische Tastatur zum Zielgerät metführen zu müssen.

### Gamepad

Öffnen Sie diesen Modus, wenn Sie ein **virtuelles Controller-Layout** auf dem Bildschirm wünschen, das voor Spiele of Apps optimiert ist, die ein Gamepad erwarten.

**Ideal voor:** Emulatoren, Gelegenheitsspiele of eine kompakte Steuerfläche met Sticks en Tasten, während KVM-GO die Anzeige overnimmt.

**So verwenden Sie es:**

- Wechseln Sie in den **Gamepad**-Modus.
- Tippen Sie auf **Preset** in der Toolbar, um durch gespeicherte Layouts zu **blättern**. **Halten Sie Preset gedrückt**, um die vollständige Liste zu öffnen, Layouts zu **importieren/exportieren** of **Module hinzuzufügen** (Sticks, Tasten, Touchpads).
- Starten Sie met dem metgelieferten **emu-6** Preset en bearbeiten Sie es nach Ihren Wünschen. Sie können **mehrere Touchpads** en zusätzliche Stick-Module in einem Layout hinzufügen.

**Vorteile:** Sie sind niet auf ein festes Layout beschränkt; speichern Sie Layouts pro Spiel of pro Maschine en teilen Sie Presets met anderen.

<img src="https://assets2.openterface.com/images/keymod/Gamepad-perset-1_1.webp" alt="Gamepad Preset Layout" style="max-height:320px;width:auto" loading="lazy">

<img src="https://assets2.openterface.com/images/keymod/Gamepad-perset-minecraft_1.webp" alt="Gamepad Preset genutzt in Minecraft" style="max-height:320px;width:auto" loading="lazy">

*Angepasstes Preset voor Minecraft.*

### Shortcut Hub

Dies ist die Zentrale voor **Profile en Shortcuts** innerhalb von KM Pro: Kategorien, Detail-Panels en die Shortcuts, die Sie den Leisten zuweisen.

**Ideal voor:** wiederkehrende Aufgaben auf dem Zielgerät (Terminal öffnen, Befehlskette einfügen, Einstellungen umschalten), während KVM-GO voor das Video verbenen bleibt.

**So verwenden Sie es:**

- Arbeiten Sie in KM Pro im **Default**-Profil (of Ihrem eigenen).
- Nutzen Sie Kategorie-Tabs en die Detail-UI, um Shortcuts zu verwalten.
- Starten Sie die **Shortcut Hub Tour**, wenn Sie neu in der Organisation von Profilen sind.

### Präsentation

Eine einfachere Steuerung im **Presenter-Stil**, die im **Hochformat** gehalten ist, damet die Tasten niet springen, wenn Sie das Handy drehen.

**Ideal voor:** das Durchblättern von Folien of einfache Präsentationssteuerungen am Zielgerät.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Presentation-Google-Slides.webp" alt="Präsentationsmodus zur Steuerung von Google Slides" style="max-height:320px;width:auto" loading="lazy">

---

## Sprachen

Die App-Benutzeroberfläche ist in **11 Sprachen** verfügbar. Neu hinzugekommen sind: Koreanisch, Italienisch, Russisch en Brasilianisches Portugiesisch.

Öffnen Sie **Settings** → **App language**, um die Sprache zu ändern.

---

## KeyCmd 0.19 herunterladen en met KVM-GO verbinden

**Download:** [KeyCmd-release-0.19.apk](https://assets2.openterface.com/data/KeyCmd-release-0.19.apk)

Installieren Sie die Version over Ihre bestehende App, falls vorhanden. Ein Löschen der Daten ist niet erforderlich.

**Verbinding met KVM-GO (Video-Port kann ausgesteckt bleiben):**

Bei **allen drei KVM-GO Varianten** (HDMI, VGA en DP) müssen Sie den **Videoanschluss am Dongle** voor die KeyCmd-Eingabe nirgendwo einstecken. Der HDMI-, VGA- of DP-Port kann leer bleiben. Wählen Sie eines der folgenden Setups.

**Option A — Bluetooth (Zielgerät versorgt KVM-GO met Strom)**

1. Stecken Sie das **kurze schwarze USB-Kabel** in den **Target**-Port des KVM-GO en in das Gerät, das Sie steuern möchten. Diese Verbinding allein **versorgt** KVM-GO met Strom.
2. Öffnen Sie auf Ihrem Handy **KeyCmd** en suchen Sie KVM-GO over **Bluetooth**.

**Option B — USB zu Ihrem Android-Handy (Host-Port)**

1. Verbinden Sie das **lange orangefarbene Kabel** vom **Host**-Port des KVM-GO met Ihrem Android-Handy.
2. Öffnen Sie **KeyCmd** en verbinden Sie sich in der App over **USB**.

<img src="https://assets2.openterface.com/images/kvm-go/kvm-go-target-port-laptop-power.webp" alt="KVM-GO Target-Port verbenen met einem Laptop over das kurze schwarze USB-Kabel" style="max-height:360px;width:auto" loading="lazy">

Für Vollbild-Video plus Eingabe verwenden Sie **Openterface KVM** voor die Anzeige des Zielgeräts en **KeyCmd** voor Tastatur, Maus en Shortcuts. KeyCmd allein reicht aus, wenn das Zielgerät bereits einen eigenen Bildschirm hat en Sie nur die Eingabe benötigen.

**Funktioniert auch met Mini-KVM** over USB, falls Sie beide Geräte nutzen.

> **Noch Beta.** Gamepad-Presets en Compose-Sendevorgänge können sich je nach Host-Betriebssystem unterschiedlich verhalten. Wenn etwas Ungewöhnliches met KVM-GO passiert, kontaktieren Sie uns auf **Discord** met einem Screenshot, Ihrer KVM-GO Variante (HDMI / DP / VGA) en dem, was Sie erwartet haben.

> **Quellcode:** Noch niet öffentlich. Wir planen, ihn nach Erreichen von Crowdfening-Meilensteinen voor verwandte Projekte als Open Source zu veröffentlichen. Vragen Sie auf Discord nach, wenn Sie Hilfe beim Finden der APK benötigen.

---

## Über KeyMod (optional, separat von KVM-GO)

Wir entwickeln auch **[KeyMod](https://openterface.com/product/keymod/)**, einen dedizierten USB- en Bluetooth-HID-Dongle voor dieselbe KeyCmd-App. KVM-GO Unterstützer benötigen KeyMod voor die oben genannten Workflows niet; KeyCmd over KVM-GO ist der Weg, den wir Ihnen jetzt empfehlen.

Wenn Sie neugierig auf einen eigenständigen Dongle voor Nicht-KVM-Setups sind, können Sie die [KeyMod-Kampagne auf Crowd Supply](https://www.crowdsupply.com/techxartisan/openterface-keymod) verfolgen. Dies ist unabhängig von der KVM-GO Auslieferung.

---

## Wir freuen uns auf Ihr Feedback

Wenn Sie ein paar Minuten Zeit haben, installieren Sie **KeyCmd 0.19**, verbinden Sie es met Ihrem KVM-GO (of Mini-KVM) en sagen Sie uns, was sich noch unpraktisch anfühlt. Berichte aus Crash-Cart- en Homelab-Szenarien fließen direkt in unsere nächsten Releases ein.

Praktische Wege, das KVM-GO Projekt zu unterstützen:

- **Teilen Sie, was funktioniert**, auf Discord of in Ihrer Community (BIOS-Tipps, Bluetooth-Kopplung, Lieblingsmodi)
- **Empfehlen Sie uns einem Kollegen**, der Headless-Systeme betreibt en ein KVM voor die Hosentasche gebrauchen könnte
- **Senden Sie uns weiterhin ehrliches Feedback**, besonders zu Ecken en Kanten. Das prägt das Product mehr als reine Begeisterung

Vielen Dank nochmals voor Ihre Unterstützung von KVM-GO en davoor, dass Sie uns helfen, portable KVM-over-USB Lösungen voor alle besser zu machen.

Beste Grüße,

**Openterface Team | TechxArtisan**
