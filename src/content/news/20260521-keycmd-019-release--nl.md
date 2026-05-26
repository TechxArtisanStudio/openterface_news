---
locale: nl
translationKey: "20260521-keycmd-019-release"
slug: "20260521-keycmd-019-release"
title: "KeyCmd 0.19: app-rebranding, KM Pro Compose-modus, ondersteuning in meerdere talen en rondleidingen per modus"
description: "KeyCmd 0.19 brengt een grote rebranding van KeyMod naar KeyCmd, de nieuwe KM Pro Compose-modus met Unicode HID-verzending, meertalige gebruikersinterface (Koreaans, Italiaans, Russisch, pt-BR), interactieve rondleidingen per modus en tientallen UX-verfijningen."
date: 2026-05-21
channel: software
product: keymod
topic: ["shipping", "production", "beta", "software", "campaign", "community"]
category: "Product Updates"
tags: ["KeyCmd", "Product Updates", "Release", "Compose", "i18n", "Android"]
featured: false
draft: false
author: "TechxArtisan Studio"
---
KeyCmd **0.19** (`versionCode` **19**) is een belangrijke update die de **app-rebrand** levert van KeyMod naar KeyCmd, de gloednieuwe **KM Pro Compose-modus** met Unicode-bewuste HID-verzending, uitgebreide **meertalige gebruikersinterface** (inclusief Koreaans, Italiaans, Russisch en Braziliaans Portugees), **interactieve rondleidingen per modus** en tientallen UX-verfijningen voor toetsenbord-, gamepad- en presentatiemodi.

## Rebranding van apps: KeyMod → KeyCmd

De weergavenaam van de app is nu **KeyCmd** voor alle toegangspunten. Deze rebranding verduidelijkt het onderscheid tussen de **KeyMod-hardware** en de bijbehorende **KeyCmd-app**.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Welcome-Screen-landscape.webp" alt="KeyCmd welkomstscherm" style="max-width:100%; border-radius:8px; marge:16px 0;" laden = "lui">

### Wat is er veranderd

- **App-weergavenaam**: Launcher-pictogram en systeem-UI tonen nu "KeyCmd"
- **Welkomststroom**: woordmerk bijgewerkt en gekopieerd van KeyMod naar KeyCmd
- **CI-artefacten en APK-bestandsnamen**: gebruik het voorvoegsel **KeyCmd**
- `applicationId` blijft **`com.openterface.keymod`** voor naadloze in-place upgrades

Bestaande gebruikers: uw instellingen, profielen en gekoppelde apparaten blijven behouden. De upgrade verloopt naadloos.

## Toetsenbord en muis: ervaring op volledig scherm

KeyCmd biedt een toetsenbord-, touchpad- en numeriek toetsenbordervaring op volledig scherm, allemaal geoptimaliseerd voor zowel portret- als landschapsoriëntatie.

<div class="slideshow-container" id="slideshow-keycmd-019-kbm" data-auto-slide="true" data-auto-slide-interval="3000">
  <div class="slideshow-wrapper">
    <div class="dia actief">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-Full-Keyboard-landscape.webp" alt="Volledig toetsenbord liggend" laden="lui">
    </div>
    <div class="slide">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-NumPad-landscape.webp" alt="Numpad landschap" laden="lui">
    </div>
    <div class="slide">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-NumPad-portrait.webp" alt="Numpad portret" laden="lui">
    </div>
    <div class="slide">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-Keyboard-TouchPad-portrait.webp" alt="Toetsenbord en touchpad staand" loading="lui">
    </div>
    <div class="slide">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-km-basic-Touchpad.webp" alt="Touchpad liggend" laden="lui">
    </div>
    <div class="slide">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-Remote-Coding-portrait.webp" alt="Codering op afstand met KeyCmd" loading="lazy">
    </div>
    <div class="slide">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-Settings-screen.webp" alt="KeyCmd instellingenscherm" loading="lui">
    </div>
  </div>

  <div class="slideshow-navigatie">
    <button class="nav-arrow left" onclick="changeSlide('slideshow-keycmd-019-kbm', -1)">❮</button>
    <div class="slideshow-dots">
      <span class="dot active" onclick="currentSlide('slideshow-keycmd-019-kbm', 1)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm', 2)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm', 3)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm', 4)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm', 5)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm', 6)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm', 7)"></span>
    </div>
    <button class="nav-arrow right" onclick="changeSlide('slideshow-keycmd-019-kbm', 1)">❯</button>
  </div>
</div>

## KM Pro: modus voor opstellen en verzenden

De grootste nieuwe functie in 0.19 is de **Opstelmodus** in KM Pro – een speciale teksteditor waarmee u lange passages kunt typen en deze als HID-toetsaanslagen naar de doelmachine kunt sturen.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Script-Running-portrait.webp" alt="Script wordt uitgevoerd in de modus Opstellen" style="max-width:100%; border-radius:8px; margin:16px 0;" laden = "lui">

<p><strong>Componeer &amp; Stuur demo (YouTube Short)</strong></p>

<iframe width="560" height="315" loading="lazy" src="https://www.youtube.com/embed/_rJF-hTF3_E" title="KeyCmd Compose &amp; Demo verzenden (YouTube Short)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; gecodeerde media; gyroscoop; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


### Componeer-editor

- **Bovenste snelkoppelingsstrook + actierij opstellen** met de bedieningselementen **Wissen** en **Ongedaan maken/Wissen**
- **Conceptbehoud**: uw tekst blijft behouden bij submodusschakelaars en zelfs na een succesvolle verzending
- **IME-integratie**: typ met het toetsenbord van uw telefoon, verzend als schone HID-toetsaanslagen
- **Bepaal de verzendvoortgang**: een zichtbare voortgangsbalk voor lange HID-buffers, zodat u precies weet hoe ver de verzending is gevorderd

### Unicode-bewuste HID-verzending

- **Dual-mode risicobeoordeling**: voordat niet-ASCII-tekst wordt verzonden, waarschuwt een dialoogvenster voor Unicode-compatibiliteit en biedt het inspectie-/voorbeeldacties
- **macOS Unicode hex flow**: op macOS-hosts gebruikt de app de Option+hex-code-invoermethode voor uitgebreide tekens
- **Veiliger verzenden van dialoogvensters**: het beoordelingsscherm past de inhoud aan op basis van het feit of de buffer puur ASCII is of Unicode-tekens bevat
- **Tools voor tekeninspectie**: het dialoogvenster voor verzendrisico's biedt de acties **Check** en **Preview**, en macOS-hosts bevatten een speciale **Unicode hex path audit**-invoer

### KM Basisbereik

In 0.19 blijft **Opstellen en verzenden een Keyboard & Mouse Pro-functie**. KM Basic richt zich op toetsenbord-, touchpad- en numerieke workflows op volledig scherm.

## Meertalige ondersteuning

KeyCmd ondersteunt nu **11 app-UI-talen**. Deze release voegt vier nieuwe lokalisaties toe:

- **Koreaans (ko)**: volledige UI-vertaling
- **Italiaans (it)**: volledige UI-vertaling
- **Russisch (ru)**: volledige UI-vertaling
- **Braziliaans Portugees (pt-BR)**: volledige UI-vertaling

Gecombineerd met het bestaande Engels, Vereenvoudigd Chinees, Traditioneel Chinees, Japans, Frans, Duits en Spaans, dekt KeyCmd nu de overgrote meerderheid van ons wereldwijde gebruikersbestand.

### Wat is er veranderd

- **Taalkiezer** in Instellingen met canonieke app-taalnamen
- **Bluetooth-headers** en **key tap preview** gelokaliseerd
- **Release lint**-oplossingen voor opstelwaarschuwingstabbladen in alle talen

## Interactieve rondleidingen

Elke modus heeft nu een **ingebouwde interactieve rondleiding** die u stap voor stap door de functies leidt.

### Beschikbare rondleidingen

- **Shortcut Hub-rondleiding**: opent het standaardprofiel en behandelt de gedetailleerde gebruikersinterface, categorietabbladen en snelkoppelingsbeheer
- **Gamepadrondleiding**: legt de lay-out van de gamepad, het modulebeheer en het vooraf ingestelde systeem uit
- **KM Pro-rondleiding**: behandelt de Compose-modus, het snelkoppelingspaneel en Pro-specifieke functies
- **KM Basisrondleiding**: legt het toetsenbord op volledig scherm, de modifier hold-swipe en het numpad uit

### Tourfuncties

- **Gidsen per modus**: elke modus heeft zijn eigen rondleiding op maat
- **Herhalingsblad**: bekijk elke tour op elk gewenst moment opnieuw via de knop **Modusgids** (pictogram links van verbindingschrome)
- **i18n-ondersteuning**: de inhoud van de tour is gelokaliseerd in de volledige app-taalset
- **Landschapsgeoptimaliseerd**: de lay-outs van het onderste blad passen zich correct aan in liggende richting

## UX-verfijningen

### Toetsenbord

- **Toetstapvoorbeeld**: zie precies wat er wordt verzonden voordat u tikt. Schakel in via Instellingen. Standaard ingeschakeld.
- **Rapid-tap HID-oplossing**: verbeterde timing van het tikken op het toetsenbord en samengevoegde release-gebeurtenissen voor sneller typen
- **Alternatieve aanraakbediening**: lang indrukken van toets `a` toont nu alternatieven voor ¥ (omhoog), £ (links), € (rechts) met verbeterde visuele feedback
- **Modifier hold-swipe**: in KM Basic/Pro-tours leert een nieuwe stap het hold-swipe-gebaar voor snelle toegang tot modifiers

### Gamepad

- **Bewerkingssessiebalk verwijderd**: schoner gamepad-chroom zonder de oude bewerkingssessiewerkbalk
- **Gamepad-chroom en rondleiding**: nieuwe visuele verfijning en geïntegreerde rondleiding
- **Modusgidspictogram**: links van het verbindingschroom geplaatst voor gemakkelijke toegang

### Presentatie

- **Portretpaarvergrendeling**: de presentatiemodus is beperkt tot portret- en omgekeerd portret-oriëntaties voor stabiele presentatorbediening

### Gebruikersinterface en thema

- **Accentstalen**: de spinner van de themakleurfamilie vervangen door visuele accentstalen voor eenvoudigere kleurselectie
- **UI-accentuitlijning**: alle UI-accenten volgen nu de themakleurfamilie (niet de oude primaire kleur)
- **Kop rechts cluster**: verbeterde afmetingen voor verbindingspictogrammen in zowel de hoofdapp als KM Basic Chrome
- **Styling van de verzendknop samenstellen**: uitgelijnde niet-ASCII-verzendknopweergave in de lichte modus

### Instellingen

- **Reorganisatie van instellingen**: canonieke app-taalnamen; hernoemd naar emulator-installatiescripts voor de duidelijkheid
- **Dev helper-scripts**: hernoemd voor duidelijkere apparaatidentificatie en naamgeving van acties
- **FAQ-documenten**: `docs/FAQ.md` bijgewerkt met huidig app-gedrag

## Gebruiksscenario's uit de echte wereld

### Codering op afstand

KeyCmd is niet alleen voor serverbeheer. Ontwikkelaars gebruiken het voor **codeersessies op afstand**: het besturen van een headless dev box vanaf een telefoon of tablet, compleet met volledige ondersteuning voor toetsenbord, touchpad en numeriek toetsenblok.

## Wat is ongewijzigd

**Keyboard & Mouse Pro** (samengestelde modus met Shortcut Hub-strips, gesplitste lay-outs en rijk IME-gedrag) blijft de complete ervaring die het voorheen was. Alle bestaande profielen, voorinstellingen en gekoppelde apparaten blijven behouden.

## Download de update

**Deze versie (0.19):** [KeyCmd-release-0.19.apk](https://assets2.openterface.com/data/KeyCmd-release-0.19.apk)

> **Beta-opmerking:** De KeyCmd Android-app is nog steeds in actieve bèta. De bronrepository is nog niet openbaar; we zijn van plan deze open source te maken na een succesvolle crowdfundingcampagne. Als je een bètatester bent en de nieuwste APK nodig hebt, neem dan contact met ons op via Discord en wij bezorgen je de build.

Bestaande installaties worden geüpgraded.

## Werkt met Mini-KVM en KVM-Go

De KeyCmd-app is niet beperkt tot KeyMod-hardware. Bestaande Openterface-gebruikers kunnen het ook uitproberen:

- **KVM-Go**: verbinding maken via **Bluetooth** of **USB**
- **Mini-KVM**: aansluiten via **USB**

## Upgrade-opmerkingen

- **Rebrand**: de app-naam verandert van KeyMod in KeyCmd. Uw gegevens blijven behouden.
- **Opstelmodus**: nieuw bij Keyboard & Mouse Pro.
- **Rondleidingen**: tik in een willekeurige modus op het gidspictogram (links van het verbindingschromosoom) om de interactieve rondleiding te starten.
- **Talen**: ga naar Instellingen om de app-taal te wijzigen. KeyCmd ondersteunt nu 11 app-UI-talen.

Met vriendelijke groet,

Openterface-team | TechxArtisan