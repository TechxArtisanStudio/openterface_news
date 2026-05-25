---
locale: ar
translationKey: "20260521-kvm-go-keycmd-app-update"
slug: "20260521-kvm-go-keycmd-app-update"
title: "KVM-GO Update: Steuern Sie Ihr Zielgerät vom Handy aus مع KeyCmd 0.19"
description: "Nutzen Sie KeyCmd 0.19 مع KVM-GO حول USB أو Bluetooth: KM Basic و Pro Tastaturen, Compose-Modus, Gamepad-Presets, Shortcut Hub و Präsentationssteuerung – kein Video-Dongle لـ HID-Eingabe erforderlich."
date: 2026-05-21
channel: software
product: keymod
topic: ["beta", "software", "campaign", "community"]
category: "منتج-التحديثات"
tags: ["KVM-GO", "KeyCmd", "منتج-التحديثات", "Android", "USB", "Bluetooth", "Tastatur", "Gamepad", "Release"]
featured: false
draft: false
author: "Openterface Team | TechxArtisan"
---

Hallo zusammen,

vielen Dank لـ Ihre Unterstützung von **KVM-GO** و لـ Ihre Geduld, während die Geräte produziert و versendet werden. Wir wissen, dass viele von Ihnen noch auf ihre الأجهزة warten, و wir möchten, dass sich Ihr Setup vom ersten Tag an komplett anfühlt.

Neben der **Openterface KVM** App (Video و volle KVM-Steuerung auf Ihrem Handy أو Tablet) haben wir **KeyCmd** verbessert, unsere Begleit-App لـ Tastatur-, Maus-, Gamepad- و Shortcut-Eingaben. **KeyCmd 0.19** ist die Version, die wir heute لـ die Nutzung مع KVM-GO empfehlen. Die Kopplung erfolgt حول **USB** أو **Bluetooth**. Sie können sie einfach حول jede vorherige Version installieren; Ihre Einstellungen, Profile و gekoppelten Geräte bleiben erhalten.

<img src="https://assets2.openterface.com/images/kvm-go/kvm-go-keycmd-phone-keyboard-setup.webp" alt="KVM-GO an einem Laptop مع KeyCmd-Tastatur auf einem Handy" style="max-width:720px;width:100%;height:auto" loading="lazy">

Im Folgenden erfahren Sie, was KeyCmd مع KVM-GO leistet, welchen Modus Sie لـ welche Aufgabe öffnen sollten و wie Sie das Beste daraus an einem echten Zielgerät herausholen.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Welcome-Screen-landscape_1.webp" alt="KeyCmd Willkommensbildschirm" style="max-height:320px;width:auto" loading="lazy">

## Modi و ihre Verwendung

### Tastatur & Maus (Basic)

Öffnen Sie diesen Modus, wenn Sie eine **einfache Vollbild-Tastatur** möchten و لاs anderes im Weg sein soll.

**Ideal لـ:** BIOS-Passwörter, kurze Shell-Befehle, Eingaben حول den Ziffernblock أو Maussteuerung مع einem großen Touchpad, während KVM-GO Ihnen den Bildschirm zeigt.

**So verwenden Sie es:**

- Öffnen Sie **KM Basic** حول das Navigationsmenü.
- Verwenden Sie die Bildschirmtastatur, den **Ziffernblock** (Hoch- أو Querformat) أو den **Touchpad**-Tab nach Bedarf.
- In den **Einstellungen** können Sie zwischen **Sticky Modifiers** (Tippen zum Einrasten von Shift/Strg) أو **Chord-Style** Modifikatoren wählen, wenn Sie Tastenkombinationen bevorzugen.

**Vorteile:** Mehr Platz auf dem Bildschirm لـ die Tasten, weniger Benutzeroberfläche, schneller, wenn Sie nur Eingaben و keine Shortcuts benötigen.

<img src="https://assets2.openterface.com/images/keymod/KM-Basic-Keyboard_1.webp" alt="KM Basic Vollbild-Tastatur" style="max-height:320px;width:auto" loading="lazy">

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-NumPad-landscape_1.webp" alt="KeyCmd Ziffernblock im Querformat" style="max-height:320px;width:auto" loading="lazy">

### Tastatur & Maus (Pro)

<img src="https://assets2.openterface.com/images/keymod/KM-Pro-Keyboard-landscape-split_1.webp" alt="KM Pro geteilte Tastatur im Querformat" style="max-height:320px;width:auto" loading="lazy">

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Keyboard-TouchPad-portrait_1.webp" alt="KeyCmd Tastatur و Touchpad im Hochformat" style="max-height:320px;width:auto" loading="lazy">

Öffnen Sie diesen Modus لـ die **tägliche Steuerungsarbeit** an Geräten hinter KVM-GO: geteilte Tastaturen, IME, Shortcut Hub Leisten و der **Compose**-Editor.

**Ideal لـ:** längeres Tippen, Makros و Shortcuts, das Senden von Textblöcken أو Skripten an den Host, während Sie das Ergebnis in der KVM-Ansicht beobachten.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Script-Running-portrait_1.webp" alt="Compose-Modus beim Senden eines Skripts" style="max-height:320px;width:auto" loading="lazy">

**Compose** ist einen Versuch wert, wenn Sie häufig Befehle أو Skripte einfügen: Schreiben Sie auf Ihrem Handy, حولprüfen Sie den Text و senden Sie ihn dann als Tastenanschläge an den Host. Eine [kurze Demo auf YouTube](https://www.youtube.com/watch?v=_rJF-hTF3_E) zeigt den Ablauf von Anfang bis Ende.

**So verwenden Sie es:**

- Öffnen Sie **KM Pro** حول das Navigationsmenü.
- Verwenden Sie Tastatur و Touchpad wie in der Basic-Version, plus **Shortcut Hub** Kategorien am oberen Rand لـ Ein-Klick-Aktionen, die Sie in Profilen eingerichtet haben.
- Öffnen Sie **Compose**, um längere Texte auf Ihrem Handy zu entwerfen, zu حولprüfen و dann als HID-Tastenanschläge zu **senden**. Bei langen Sendevorgängen wird ein Fortschrittsbalken angezeigt. Wenn Ihr Text Nicht-ASCII-Zeichen enthält, warnt die App Sie vor dem Senden, daمع Sie die Host-Kompatibilität prüfen können (besonders hilfreich unter macOS).

**Vorteile:** Ein Ort لـ Texteingabe, Maussteuerung, Shortcuts و paste-ähnliche Workflows, ohne eine physische Tastatur zum Zielgerät معführen zu müssen.

### Gamepad

Öffnen Sie diesen Modus, wenn Sie ein **virtuelles Controller-Layout** auf dem Bildschirm wünschen, das لـ Spiele أو Apps optimiert ist, die ein Gamepad erwarten.

**Ideal لـ:** Emulatoren, Gelegenheitsspiele أو eine kompakte Steuerfläche مع Sticks و Tasten, während KVM-GO die Anzeige حولnimmt.

**So verwenden Sie es:**

- Wechseln Sie in den **Gamepad**-Modus.
- Tippen Sie auf **Preset** in der Toolbar, um durch gespeicherte Layouts zu **blättern**. **Halten Sie Preset gedrückt**, um die vollständige Liste zu öffnen, Layouts zu **importieren/exportieren** أو **Module hinzuzufügen** (Sticks, Tasten, Touchpads).
- Starten Sie مع dem معgelieferten **emu-6** Preset و bearbeiten Sie es nach Ihren Wünschen. Sie können **mehrere Touchpads** و zusätzliche Stick-Module in einem Layout hinzufügen.

**Vorteile:** Sie sind لا auf ein festes Layout beschränkt; speichern Sie Layouts pro Spiel أو pro Maschine و teilen Sie Presets مع anderen.

<img src="https://assets2.openterface.com/images/keymod/Gamepad-perset-1_1.webp" alt="Gamepad Preset Layout" style="max-height:320px;width:auto" loading="lazy">

<img src="https://assets2.openterface.com/images/keymod/Gamepad-perset-minecraft_1.webp" alt="Gamepad Preset genutzt in Minecraft" style="max-height:320px;width:auto" loading="lazy">

*Angepasstes Preset لـ Minecraft.*

### Shortcut Hub

Dies ist die Zentrale لـ **Profile و Shortcuts** innerhalb von KM Pro: Kategorien, Detail-Panels و die Shortcuts, die Sie den Leisten zuweisen.

**Ideal لـ:** wiederkehrende Aufgaben auf dem Zielgerät (Terminal öffnen, Befehlskette einfügen, Einstellungen umschalten), während KVM-GO لـ das Video verbوen bleibt.

**So verwenden Sie es:**

- Arbeiten Sie in KM Pro im **Default**-Profil (أو Ihrem eigenen).
- Nutzen Sie Kategorie-Tabs و die Detail-UI, um Shortcuts zu verwalten.
- Starten Sie die **Shortcut Hub Tour**, wenn Sie neu in der Organisation von Profilen sind.

### Präsentation

Eine einfachere Steuerung im **Presenter-Stil**, die im **Hochformat** gehalten ist, daمع die Tasten لا springen, wenn Sie das Handy drehen.

**Ideal لـ:** das Durchblättern von Folien أو einfache Präsentationssteuerungen am Zielgerät.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Presentation-Google-Slides.webp" alt="Präsentationsmodus zur Steuerung von Google Slides" style="max-height:320px;width:auto" loading="lazy">

---

## Sprachen

Die App-Benutzeroberfläche ist in **11 Sprachen** verfügbar. Neu hinzugekommen sind: Koreanisch, Italienisch, Russisch و Brasilianisches Portugiesisch.

Öffnen Sie **Settings** → **App language**, um die Sprache zu ändern.

---

## KeyCmd 0.19 herunterladen و مع KVM-GO verbinden

**تنزيل:** [KeyCmd-release-0.19.apk](https://assets2.openterface.com/data/KeyCmd-release-0.19.apk)

Installieren Sie die Version حول Ihre bestehende App, falls vorhanden. Ein Löschen der Daten ist لا erforderlich.

**الاتصال مع KVM-GO (Video-Port kann ausgesteckt bleiben):**

Bei **allen drei KVM-GO Varianten** (HDMI, VGA و DP) müssen Sie den **Videoanschluss am Dongle** لـ die KeyCmd-Eingabe nirgendwo einstecken. Der HDMI-, VGA- أو DP-Port kann leer bleiben. Wählen Sie eines der folgenden Setups.

**Option A — Bluetooth (Zielgerät versorgt KVM-GO مع Strom)**

1. Stecken Sie das **kurze schwarze USB-Kabel** in den **Target**-Port des KVM-GO و in das Gerät, das Sie steuern möchten. Diese الاتصال allein **versorgt** KVM-GO مع Strom.
2. Öffnen Sie auf Ihrem Handy **KeyCmd** و suchen Sie KVM-GO حول **Bluetooth**.

**Option B — USB zu Ihrem Android-Handy (Host-Port)**

1. Verbinden Sie das **lange orangefarbene Kabel** vom **Host**-Port des KVM-GO مع Ihrem Android-Handy.
2. Öffnen Sie **KeyCmd** و verbinden Sie sich in der App حول **USB**.

<img src="https://assets2.openterface.com/images/kvm-go/kvm-go-target-port-laptop-power.webp" alt="KVM-GO Target-Port verbوen مع einem Laptop حول das kurze schwarze USB-Kabel" style="max-height:360px;width:auto" loading="lazy">

Für Vollbild-Video plus Eingabe verwenden Sie **Openterface KVM** لـ die Anzeige des Zielgeräts و **KeyCmd** لـ Tastatur, Maus و Shortcuts. KeyCmd allein reicht aus, wenn das Zielgerät bereits einen eigenen Bildschirm hat و Sie nur die Eingabe benötigen.

**Funktioniert auch مع Mini-KVM** حول USB, falls Sie beide Geräte nutzen.

> **Noch Beta.** Gamepad-Presets و Compose-Sendevorgänge können sich je nach Host-Betriebssystem unterschiedlich verhalten. Wenn etwas Ungewöhnliches مع KVM-GO passiert, kontaktieren Sie uns auf **Discord** مع einem Screenshot, Ihrer KVM-GO Variante (HDMI / DP / VGA) و dem, was Sie erwartet haben.

> **Quellcode:** Noch لا öffentlich. Wir planen, ihn nach Erreichen von Crowdfوing-Meilensteinen لـ verwandte Projekte als Open Source zu veröffentlichen. أسئلة Sie auf Discord nach, wenn Sie Hilfe beim Finden der APK benötigen.

---

## Über KeyMod (optional, separat von KVM-GO)

Wir entwickeln auch **[KeyMod](https://openterface.com/product/keymod/)**, einen dedizierten USB- و Bluetooth-HID-Dongle لـ dieselbe KeyCmd-App. KVM-GO Unterstützer benötigen KeyMod لـ die oben genannten Workflows لا; KeyCmd حول KVM-GO ist der Weg, den wir Ihnen jetzt empfehlen.

Wenn Sie neugierig auf einen eigenständigen Dongle لـ Nicht-KVM-Setups sind, können Sie die [KeyMod-Kampagne auf Crowd Supply](https://www.crowdsupply.com/techxartisan/openterface-keymod) verfolgen. Dies ist unabhängig von der KVM-GO Auslieferung.

---

## Wir freuen uns auf Ihr Feedback

Wenn Sie ein paar Minuten Zeit haben, installieren Sie **KeyCmd 0.19**, verbinden Sie es مع Ihrem KVM-GO (أو Mini-KVM) و sagen Sie uns, was sich noch unpraktisch anfühlt. Berichte aus Crash-Cart- و Homelab-Szenarien fließen direkt in unsere nächsten Releases ein.

Praktische Wege, das KVM-GO Projekt zu unterstützen:

- **Teilen Sie, was funktioniert**, auf Discord أو in Ihrer Community (BIOS-Tipps, Bluetooth-Kopplung, Lieblingsmodi)
- **Empfehlen Sie uns einem Kollegen**, der Headless-Systeme betreibt و ein KVM لـ die Hosentasche gebrauchen könnte
- **Senden Sie uns weiterhin ehrliches Feedback**, besonders zu Ecken و Kanten. Das prägt das منتج mehr als reine Begeisterung

Vielen Dank nochmals لـ Ihre Unterstützung von KVM-GO و daلـ, dass Sie uns helfen, portable KVM-over-USB Lösungen لـ alle besser zu machen.

Beste Grüße,

**Openterface Team | TechxArtisan**
