---
locale: nl
translationKey: "20260521-kvm-go-keycmd-app-update"
slug: "20260521-kvm-go-keycmd-app-update"
title: "KVM-GO-update: bedien uw doel vanaf uw telefoon met KeyCmd 0.19"
description: "Gebruik KeyCmd 0.19 met KVM-GO via USB of Bluetooth: KM Basic- en Pro-toetsenborden, Compose-modus, gamepad-presets, Shortcut Hub en presentatiebediening: geen videodongle vereist voor HID-invoer."
date: 2026-05-21
channel: software
product: keymod
topic: ["shipping", "production", "beta", "software", "campaign", "community"]
category: "Product Updates"
tags: ["KVM-GO", "KeyCmd", "Product Updates", "Android", "USB", "Bluetooth", "Keyboard", "Gamepad", "Release"]
featured: false
draft: false
author: "Openterface Team | TechxArtisan"
---
Hallo allemaal,

Bedankt voor uw steun aan **KVM-GO** en voor uw geduld terwijl de eenheden door de productie en verzending gaan. We weten dat velen van jullie nog steeds wachten op hardware, en we willen dat je installatie vanaf dag één compleet aanvoelt.

Naast de app **Openterface KVM** (video en volledige KVM-bediening op uw telefoon of tablet), hebben we **KeyCmd** verbeterd, onze begeleidende app voor toetsenbord, muis, gamepad en snelkoppelingen. **KeyCmd 0.19** is de build die we vandaag aanbevelen als u KVM-GO gebruikt. Koppel via **USB** of **Bluetooth**, installeer bovenop een eerdere build en uw instellingen, profielen en gekoppelde apparaten worden overgedragen.

<img src="https://assets2.openterface.com/images/kvm-go/kvm-go-keycmd-phone-keyboard-setup.webp" alt="KVM-GO op een laptop met KeyCmd-toetsenbord op een telefoon" style="max-width:720px;width:100%;height:auto" loading="lazy">

Hieronder ziet u wat KeyCmd doet met KVM-GO, welke modus u voor welke taak moet openen en hoe u er het maximale uit kunt halen op een echte doelmachine.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Welcome-Screen-landscape_1.webp" alt="KeyCmd welkomstscherm" style="max-height:320px;width:auto" loading="lui">

## Modi en hoe je ze kunt gebruiken

### Toetsenbord en muis (basis)

Open dit als u een **eenvoudig toetsenbord op volledig scherm** wilt en niets anders u in de weg staat.

**Goed voor:** BIOS-wachtwoorden, korte shell-opdrachten, numerieke invoer of muisbediening met een groot touchpad terwijl KVM-GO u het scherm laat zien.

**Hoe het te gebruiken:**

- Open **KM Basic** vanuit de navigatielade.
- Gebruik indien nodig het schermtoetsenbord, het **numpad** (staand of liggend) of het tabblad **touchpad**.
- Kies in **Instellingen** **sticky modifiers** (tik om Shift/Ctrl vast te houden) of **akkoordstijl** modifiers als je de voorkeur geeft aan combinaties van vasthouden en tikken.

**Waarom het helpt:** meer schermruimte voor toetsen, minder chroom, sneller als je alleen invoer nodig hebt en geen snelkoppelingen.

<img src="https://assets2.openterface.com/images/keymod/KM-Basic-Keyboard_1.webp" alt="KM Basic toetsenbord op volledig scherm" style="max-height:320px;width:auto" loading="lui">

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-NumPad-landscape_1.webp" alt="KeyCmd numpad in landschap" style="max-height:320px;width:auto" loading="lui">

### Toetsenbord en muis (Pro)

<img src="https://assets2.openterface.com/images/keymod/KM-Pro-Keyboard-landscape-split_1.webp" alt="KM Pro gesplitst toetsenbord in landschap" style="max-height:320px;width:auto" loading="lui">

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Keyboard-TouchPad-portrait_1.webp" alt="KeyCmd-toetsenbord en touchpad in portret" style="max-height:320px;width:auto" loading="lui">

Open dit voor **dagelijks controlewerk** op machines achter KVM-GO: gesplitste toetsenborden, IME, Shortcut Hub-strips en de **Compose**-editor.

**Goed voor:** langere typesessies, macro's en snelkoppelingen, het verzenden van tekstblokken of scripts naar de host terwijl u het resultaat bekijkt in de KVM-weergave.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Script-Running-portrait_1.webp" alt="Opstelmodus verzendt een script" style="max-height:320px;width:auto" loading="lazy">

**Opstellen** is het proberen waard als u vaak opdrachten of scripts plakt: schrijf op uw telefoon, bekijk ze en verzend ze vervolgens als toetsaanslagen naar de host. [Short demo on YouTube](https://www.youtube.com/watch?v=_rJF-hTF3_E) toont de stroom van begin tot eind.

**Hoe het te gebruiken:**

- Open **KM Pro** vanuit de navigatielade.
- Gebruik het toetsenbord en de touchpad zoals in Basic, plus de categorieën **Shortcut Hub** bovenaan voor acties met één tik die u in profielen instelt.
- Open **Opstellen** om langere tekst op uw telefoon op te stellen, bekijk deze en **verzend** vervolgens met HID-toetsaanslagen. Bij lange verzendingen wordt een voortgangsbalk weergegeven. Als uw tekst niet-ASCII-tekens bevat, waarschuwt de app u voordat deze wordt verzonden, zodat u de hostcompatibiliteit kunt controleren (vooral handig op macOS).

**Waarom het helpt:** één plek voor typen, aanwijzen, snelkoppelingen en plakachtige workflows zonder een volledig toetsenbord naar het doel te hoeven dragen.

### Gamepad

Open dit als je een **virtuele controller**-indeling op het scherm wilt, afgestemd op games of een app op het doel die een gamepad verwacht.

**Goed voor:** emulators, casual games of een compact bedieningsoppervlak met sticks en knoppen terwijl KVM-GO het display verzorgt.

**Hoe het te gebruiken:**

- Schakel over naar de **Gamepad**-modus.
- Tik op **Voorinstelling** in de werkbalk om opgeslagen lay-outs te **draaien**. **Druk lang op Preset** om de volledige lijst te openen, **importeer/exporteer** of **voeg modules toe** (sticks, knoppen, touchpads).
- Begin met de gebundelde **emu-6**-voorinstelling en bewerk vanaf daar. U kunt **meerdere touchpads** en extra stickmodules in één lay-out toevoegen.

**Waarom het helpt:** je zit niet vast aan één fabrieksindeling; sla lay-outs op per game of per machine en deel presets met anderen.

<img src="https://assets2.openterface.com/images/keymod/Gamepad-perset-1_1.webp" alt="Vooraf ingestelde lay-out van gamepad" style="max-height:320px;width:auto" loading="lui">

<img src="https://assets2.openterface.com/images/keymod/Gamepad-perset-minecraft_1.webp" alt="Gamepad-voorinstelling gebruikt in Minecraft" style="max-height:320px;width:auto" loading="lazy">

*Aangepaste voorinstelling voor Minecraft.*

### Snelkoppelingshub

Dit is het **profiel en de snelkoppeling** in KM Pro: categorieën, detailpanelen en de snelkoppelingen die u aan strips toewijst.

**Goed voor:** herhaalbare bewerkingen op het doel (terminal openen, een commandoketen plakken, instellingen wijzigen) terwijl KVM-GO verbonden blijft voor video.

**Hoe het te gebruiken:**

- Werk vanuit KM Pro in het **Standaard** profiel (of uw eigen profiel).
- Gebruik categorietabbladen en de gedetailleerde gebruikersinterface om snelkoppelingen te beheren.
- Voer de **Shortcut Hub-rondleiding** uit als u nog niet weet hoe profielen zijn georganiseerd.

### Presentatie

Een eenvoudiger bedieningsoppervlak in **presentatorstijl**, **staand** zodat de knoppen niet verspringen wanneer u de telefoon draait.

**Goed voor:** door dia's stappen of lichte presentatorbedieningen op het doel.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Presentation-Google-Slides.webp" alt="Presentatiemodus die Google Presentaties bestuurt" style="max-height:320px;width:auto" loading="lazy">

---

## Talen

De app-gebruikersinterface is beschikbaar in **11 talen**. Recente toevoegingen: Koreaans, Italiaans, Russisch en Braziliaans Portugees.

Open **Instellingen** → **App-taal** om te wisselen.

---

## Download KeyCmd 0.19 en maak verbinding met KVM-GO

**Downloaden:** [KeyCmd-release-0.19.apk](https://assets2.openterface.com/data/KeyCmd-release-0.19.apk)

Installeer via uw bestaande app als u er al een heeft. Gegevens wissen is niet nodig.

**Verbinden met KVM-GO (videopoort kan losgekoppeld blijven):**

Voor **alle drie de KVM-GO-varianten** (HDMI, VGA en DP) hoeft u de **videoconnector op de dongle** nergens op aan te sluiten voor KeyCmd-invoer. De HDMI-, VGA- of DP-poort kan leeg blijven. Kies een van de onderstaande instellingen.

**Optie A — Bluetooth (doelvermogen KVM-GO)**

1. Sluit de **korte zwarte USB-kabel** aan op de **Doel**-poort op KVM-GO en op de machine die u bestuurt. Alleen al die verbinding is de kracht van KVM-GO.
2. Open **KeyCmd** op uw telefoon en zoek KVM-GO via **Bluetooth**.

**Optie B — USB naar uw Android-telefoon (hostpoort)**

1. Sluit de **lange oranje kabel** van de **Host**-poort op KVM-GO aan op uw Android-telefoon.
2. Open **KeyCmd** en maak verbinding via **USB** in de app.

<img src="https://assets2.openterface.com/images/kvm-go/kvm-go-target-port-laptop-power.webp" alt="KVM-GO Doelpoort aangesloten op een laptop via de korte zwarte USB-kabel" style="max-height:360px;width:auto" loading="lazy">

Voor video op volledig scherm plus invoer gebruikt u **Openterface KVM** voor de doelweergave en **KeyCmd** voor toetsenbord, muis en snelkoppelingen. KeyCmd alleen is voldoende als het doel al een eigen display heeft en u alleen invoer nodig heeft.

**Werkt ook met Mini-KVM** via USB als u beide apparaten gebruikt.

> **Nog steeds in bèta.** Gamepad-presets en Compose-verzendingen kunnen zich anders gedragen, afhankelijk van het host-besturingssysteem. Als er iets vreemds gebeurt met KVM-GO, neem dan contact met ons op via **Discord** met een screenshot, uw KVM-GO-variant (HDMI / DP / VGA) en wat u ervan verwachtte.

> **Broncode:** Nog niet openbaar. We zijn van plan om na crowdfunding-mijlpalen voor gerelateerde projecten open source te gebruiken. Vraag op Discord of je hulp nodig hebt bij het vinden van de APK.

---

## Over KeyMod (optioneel, los van KVM-GO)

We ontwikkelen ook **[KeyMod](https://openterface.com/product/keymod/)**, een speciale USB- en Bluetooth HID-dongle voor dezelfde KeyCmd-app. KVM-GO-ondersteuners hebben KeyMod niet nodig voor de bovenstaande workflows; KeyCmd via KVM-GO is het pad waarop we u nu willen hebben.

Als je nieuwsgierig bent naar een standalone dongle voor niet-KVM-opstellingen, kun je de [KeyMod campaign on Crowd Supply](https://www.crowdsupply.com/techxartisan/openterface-keymod) volgen. Dat staat los van de KVM-GO-fulfilment.

---

## Wij zouden graag uw feedback ontvangen

Als u een paar minuten de tijd heeft, installeer dan **KeyCmd 0.19**, sluit deze aan op uw KVM-GO (of Mini-KVM) en vertel ons wat nog steeds ongemakkelijk voelt. Rapporten van crash-cart- en homelab-gebruiksscenario's gaan rechtstreeks naar onze volgende releases.

Praktische manieren om het KVM-GO project te helpen:

- **Deel wat werkt** in Discord of uw community (BIOS-tips, Bluetooth-koppeling, favoriete modi)
- **Vertel het aan een collega** die headless apparatuur gebruikt en een pocket KVM kan gebruiken
- **Blijf eerlijke feedback sturen**, vooral de ruwe kantjes. Dat vormt het product meer dan cheerleading

Nogmaals bedankt voor uw steun aan KVM-GO en voor uw hulp om draagbare KVM-over-USB voor iedereen beter te maken.

Met vriendelijke groet,

**Openterface-team | TechxArtisaan**