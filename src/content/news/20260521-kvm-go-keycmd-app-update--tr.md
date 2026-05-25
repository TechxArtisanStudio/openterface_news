---
locale: tr
translationKey: "20260521-kvm-go-keycmd-app-update"
slug: "20260521-kvm-go-keycmd-app-update"
title: "KVM-GO Update: Steuern Sie Ihr Zielgerät vom Handy aus ile KeyCmd 0.19"
description: "Nutzen Sie KeyCmd 0.19 ile KVM-GO hakkında USB veya Bluetooth: KM Basic ve Pro Tastaturen, Compose-Modus, Gamepad-Presets, Shortcut Hub ve Präsentationssteuerung – kein Video-Dongle için HID-Eingabe erforderlich."
date: 2026-05-21
channel: software
product: keymod
topic: ["beta", "software", "campaign", "community"]
category: "Ürün-Güncellemeler"
tags: ["KVM-GO", "KeyCmd", "Ürün-Güncellemeler", "Android", "USB", "Bluetooth", "Tastatur", "Gamepad", "Release"]
featured: false
draft: false
author: "Openterface Team | TechxArtisan"
---

Hallo zusammen,

vielen Dank için Ihre Unterstützung von **KVM-GO** ve için Ihre Geduld, während die Geräte produziert ve versendet werden. Wir wissen, dass viele von Ihnen noch auf ihre Donanım warten, ve wir möchten, dass sich Ihr Setup vom ersten Tag an komplett anfühlt.

Neben der **Openterface KVM** App (Video ve volle KVM-Steuerung auf Ihrem Handy veya Tablet) haben wir **KeyCmd** verbessert, unsere Begleit-App için Tastatur-, Maus-, Gamepad- ve Shortcut-Eingaben. **KeyCmd 0.19** ist die Version, die wir heute için die Nutzung ile KVM-GO empfehlen. Die Kopplung erfolgt hakkında **USB** veya **Bluetooth**. Sie können sie einfach hakkında jede vorherige Version installieren; Ihre Einstellungen, Profile ve gekoppelten Geräte bleiben erhalten.

<img src="https://assets2.openterface.com/images/kvm-go/kvm-go-keycmd-phone-keyboard-setup.webp" alt="KVM-GO an einem Laptop ile KeyCmd-Tastatur auf einem Handy" style="max-width:720px;width:100%;height:auto" loading="lazy">

Im Folgenden erfahren Sie, was KeyCmd ile KVM-GO leistet, welchen Modus Sie için welche Aufgabe öffnen sollten ve wie Sie das Beste daraus an einem echten Zielgerät herausholen.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Welcome-Screen-landscape_1.webp" alt="KeyCmd Willkommensbildschirm" style="max-height:320px;width:auto" loading="lazy">

## Modi ve ihre Verwendung

### Tastatur & Maus (Basic)

Öffnen Sie diesen Modus, wenn Sie eine **einfache Vollbild-Tastatur** möchten ve değils anderes im Weg sein soll.

**Ideal için:** BIOS-Passwörter, kurze Shell-Befehle, Eingaben hakkında den Ziffernblock veya Maussteuerung ile einem großen Touchpad, während KVM-GO Ihnen den Bildschirm zeigt.

**So verwenden Sie es:**

- Öffnen Sie **KM Basic** hakkında das Navigationsmenü.
- Verwenden Sie die Bildschirmtastatur, den **Ziffernblock** (Hoch- veya Querformat) veya den **Touchpad**-Tab nach Bedarf.
- In den **Einstellungen** können Sie zwischen **Sticky Modifiers** (Tippen zum Einrasten von Shift/Strg) veya **Chord-Style** Modifikatoren wählen, wenn Sie Tastenkombinationen bevorzugen.

**Vorteile:** Mehr Platz auf dem Bildschirm için die Tasten, weniger Benutzeroberfläche, schneller, wenn Sie nur Eingaben ve keine Shortcuts benötigen.

<img src="https://assets2.openterface.com/images/keymod/KM-Basic-Keyboard_1.webp" alt="KM Basic Vollbild-Tastatur" style="max-height:320px;width:auto" loading="lazy">

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-NumPad-landscape_1.webp" alt="KeyCmd Ziffernblock im Querformat" style="max-height:320px;width:auto" loading="lazy">

### Tastatur & Maus (Pro)

<img src="https://assets2.openterface.com/images/keymod/KM-Pro-Keyboard-landscape-split_1.webp" alt="KM Pro geteilte Tastatur im Querformat" style="max-height:320px;width:auto" loading="lazy">

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Keyboard-TouchPad-portrait_1.webp" alt="KeyCmd Tastatur ve Touchpad im Hochformat" style="max-height:320px;width:auto" loading="lazy">

Öffnen Sie diesen Modus için die **tägliche Steuerungsarbeit** an Geräten hinter KVM-GO: geteilte Tastaturen, IME, Shortcut Hub Leisten ve der **Compose**-Editor.

**Ideal için:** längeres Tippen, Makros ve Shortcuts, das Senden von Textblöcken veya Skripten an den Host, während Sie das Ergebnis in der KVM-Ansicht beobachten.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Script-Running-portrait_1.webp" alt="Compose-Modus beim Senden eines Skripts" style="max-height:320px;width:auto" loading="lazy">

**Compose** ist einen Versuch wert, wenn Sie häufig Befehle veya Skripte einfügen: Schreiben Sie auf Ihrem Handy, hakkındaprüfen Sie den Text ve senden Sie ihn dann als Tastenanschläge an den Host. Eine [kurze Demo auf YouTube](https://www.youtube.com/watch?v=_rJF-hTF3_E) zeigt den Ablauf von Anfang bis Ende.

**So verwenden Sie es:**

- Öffnen Sie **KM Pro** hakkında das Navigationsmenü.
- Verwenden Sie Tastatur ve Touchpad wie in der Basic-Version, plus **Shortcut Hub** Kategorien am oberen Rand için Ein-Klick-Aktionen, die Sie in Profilen eingerichtet haben.
- Öffnen Sie **Compose**, um längere Texte auf Ihrem Handy zu entwerfen, zu hakkındaprüfen ve dann als HID-Tastenanschläge zu **senden**. Bei langen Sendevorgängen wird ein Fortschrittsbalken angezeigt. Wenn Ihr Text Nicht-ASCII-Zeichen enthält, warnt die App Sie vor dem Senden, daile Sie die Host-Kompatibilität prüfen können (besonders hilfreich unter macOS).

**Vorteile:** Ein Ort için Texteingabe, Maussteuerung, Shortcuts ve paste-ähnliche Workflows, ohne eine physische Tastatur zum Zielgerät ileführen zu müssen.

### Gamepad

Öffnen Sie diesen Modus, wenn Sie ein **virtuelles Controller-Layout** auf dem Bildschirm wünschen, das için Spiele veya Apps optimiert ist, die ein Gamepad erwarten.

**Ideal için:** Emulatoren, Gelegenheitsspiele veya eine kompakte Steuerfläche ile Sticks ve Tasten, während KVM-GO die Anzeige hakkındanimmt.

**So verwenden Sie es:**

- Wechseln Sie in den **Gamepad**-Modus.
- Tippen Sie auf **Preset** in der Toolbar, um durch gespeicherte Layouts zu **blättern**. **Halten Sie Preset gedrückt**, um die vollständige Liste zu öffnen, Layouts zu **importieren/exportieren** veya **Module hinzuzufügen** (Sticks, Tasten, Touchpads).
- Starten Sie ile dem ilegelieferten **emu-6** Preset ve bearbeiten Sie es nach Ihren Wünschen. Sie können **mehrere Touchpads** ve zusätzliche Stick-Module in einem Layout hinzufügen.

**Vorteile:** Sie sind değil auf ein festes Layout beschränkt; speichern Sie Layouts pro Spiel veya pro Maschine ve teilen Sie Presets ile anderen.

<img src="https://assets2.openterface.com/images/keymod/Gamepad-perset-1_1.webp" alt="Gamepad Preset Layout" style="max-height:320px;width:auto" loading="lazy">

<img src="https://assets2.openterface.com/images/keymod/Gamepad-perset-minecraft_1.webp" alt="Gamepad Preset genutzt in Minecraft" style="max-height:320px;width:auto" loading="lazy">

*Angepasstes Preset için Minecraft.*

### Shortcut Hub

Dies ist die Zentrale için **Profile ve Shortcuts** innerhalb von KM Pro: Kategorien, Detail-Panels ve die Shortcuts, die Sie den Leisten zuweisen.

**Ideal için:** wiederkehrende Aufgaben auf dem Zielgerät (Terminal öffnen, Befehlskette einfügen, Einstellungen umschalten), während KVM-GO için das Video verbveen bleibt.

**So verwenden Sie es:**

- Arbeiten Sie in KM Pro im **Default**-Profil (veya Ihrem eigenen).
- Nutzen Sie Kategorie-Tabs ve die Detail-UI, um Shortcuts zu verwalten.
- Starten Sie die **Shortcut Hub Tour**, wenn Sie neu in der Organisation von Profilen sind.

### Präsentation

Eine einfachere Steuerung im **Presenter-Stil**, die im **Hochformat** gehalten ist, daile die Tasten değil springen, wenn Sie das Handy drehen.

**Ideal için:** das Durchblättern von Folien veya einfache Präsentationssteuerungen am Zielgerät.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Presentation-Google-Slides.webp" alt="Präsentationsmodus zur Steuerung von Google Slides" style="max-height:320px;width:auto" loading="lazy">

---

## Sprachen

Die App-Benutzeroberfläche ist in **11 Sprachen** verfügbar. Neu hinzugekommen sind: Koreanisch, Italienisch, Russisch ve Brasilianisches Portugiesisch.

Öffnen Sie **Settings** → **App language**, um die Sprache zu ändern.

---

## KeyCmd 0.19 herunterladen ve ile KVM-GO verbinden

**İndir:** [KeyCmd-release-0.19.apk](https://assets2.openterface.com/data/KeyCmd-release-0.19.apk)

Installieren Sie die Version hakkında Ihre bestehende App, falls vorhanden. Ein Löschen der Daten ist değil erforderlich.

**Bağlantı ile KVM-GO (Video-Port kann ausgesteckt bleiben):**

Bei **allen drei KVM-GO Varianten** (HDMI, VGA ve DP) müssen Sie den **Videoanschluss am Dongle** için die KeyCmd-Eingabe nirgendwo einstecken. Der HDMI-, VGA- veya DP-Port kann leer bleiben. Wählen Sie eines der folgenden Setups.

**Option A — Bluetooth (Zielgerät versorgt KVM-GO ile Strom)**

1. Stecken Sie das **kurze schwarze USB-Kabel** in den **Target**-Port des KVM-GO ve in das Gerät, das Sie steuern möchten. Diese Bağlantı allein **versorgt** KVM-GO ile Strom.
2. Öffnen Sie auf Ihrem Handy **KeyCmd** ve suchen Sie KVM-GO hakkında **Bluetooth**.

**Option B — USB zu Ihrem Android-Handy (Host-Port)**

1. Verbinden Sie das **lange orangefarbene Kabel** vom **Host**-Port des KVM-GO ile Ihrem Android-Handy.
2. Öffnen Sie **KeyCmd** ve verbinden Sie sich in der App hakkında **USB**.

<img src="https://assets2.openterface.com/images/kvm-go/kvm-go-target-port-laptop-power.webp" alt="KVM-GO Target-Port verbveen ile einem Laptop hakkında das kurze schwarze USB-Kabel" style="max-height:360px;width:auto" loading="lazy">

Für Vollbild-Video plus Eingabe verwenden Sie **Openterface KVM** için die Anzeige des Zielgeräts ve **KeyCmd** için Tastatur, Maus ve Shortcuts. KeyCmd allein reicht aus, wenn das Zielgerät bereits einen eigenen Bildschirm hat ve Sie nur die Eingabe benötigen.

**Funktioniert auch ile Mini-KVM** hakkında USB, falls Sie beide Geräte nutzen.

> **Noch Beta.** Gamepad-Presets ve Compose-Sendevorgänge können sich je nach Host-Betriebssystem unterschiedlich verhalten. Wenn etwas Ungewöhnliches ile KVM-GO passiert, kontaktieren Sie uns auf **Discord** ile einem Screenshot, Ihrer KVM-GO Variante (HDMI / DP / VGA) ve dem, was Sie erwartet haben.

> **Quellcode:** Noch değil öffentlich. Wir planen, ihn nach Erreichen von Crowdfveing-Meilensteinen için verwandte Projekte als Open Source zu veröffentlichen. Sorular Sie auf Discord nach, wenn Sie Hilfe beim Finden der APK benötigen.

---

## Über KeyMod (optional, separat von KVM-GO)

Wir entwickeln auch **[KeyMod](https://openterface.com/product/keymod/)**, einen dedizierten USB- ve Bluetooth-HID-Dongle için dieselbe KeyCmd-App. KVM-GO Unterstützer benötigen KeyMod için die oben genannten Workflows değil; KeyCmd hakkında KVM-GO ist der Weg, den wir Ihnen jetzt empfehlen.

Wenn Sie neugierig auf einen eigenständigen Dongle için Nicht-KVM-Setups sind, können Sie die [KeyMod-Kampagne auf Crowd Supply](https://www.crowdsupply.com/techxartisan/openterface-keymod) verfolgen. Dies ist unabhängig von der KVM-GO Auslieferung.

---

## Wir freuen uns auf Ihr Feedback

Wenn Sie ein paar Minuten Zeit haben, installieren Sie **KeyCmd 0.19**, verbinden Sie es ile Ihrem KVM-GO (veya Mini-KVM) ve sagen Sie uns, was sich noch unpraktisch anfühlt. Berichte aus Crash-Cart- ve Homelab-Szenarien fließen direkt in unsere nächsten Releases ein.

Praktische Wege, das KVM-GO Projekt zu unterstützen:

- **Teilen Sie, was funktioniert**, auf Discord veya in Ihrer Community (BIOS-Tipps, Bluetooth-Kopplung, Lieblingsmodi)
- **Empfehlen Sie uns einem Kollegen**, der Headless-Systeme betreibt ve ein KVM için die Hosentasche gebrauchen könnte
- **Senden Sie uns weiterhin ehrliches Feedback**, besonders zu Ecken ve Kanten. Das prägt das Ürün mehr als reine Begeisterung

Vielen Dank nochmals için Ihre Unterstützung von KVM-GO ve daiçin, dass Sie uns helfen, portable KVM-over-USB Lösungen için alle besser zu machen.

Beste Grüße,

**Openterface Team | TechxArtisan**
