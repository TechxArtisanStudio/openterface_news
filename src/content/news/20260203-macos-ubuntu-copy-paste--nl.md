---
locale: nl
translationKey: "20260203-macos-ubuntu-copy-paste"
slug: "20260203-macos-ubuntu-copy-paste"
title: "Tip voor kopiëren/plakken van Ubuntu (macOS → Ubuntu)"
description: "Plaksnelkoppelingen repareren bij het besturen van Ubuntu vanuit macOS met Openterface. Gebruik de Windows-modus voor betrouwbaar plakken in Ctrl-stijl, of Bewerken → Plakken als tijdelijke oplossing in de Mac-modus."
date: 2026-02-03
channel: software
app: kvm
topic: ["software"]
category: "Product Updates"
featured: false
draft: false
author: "Openterface"
---
Bij het besturen van **Ubuntu** vanuit **macOS** met behulp van **Openterface**, werkt het plakken van snelkoppelingen mogelijk niet betrouwbaar in de **Mac-modus**. Deze handleiding toont de aanbevolen oplossing en een eenvoudige oplossing.

![setting](https://assets2.openterface.com/images/setting.webp)

---

## Snelle oplossing (aanbevolen voor Ubuntu/Linux)

1. Open **Openterface** op macOS.
2. Ga naar **Instellingen**.
3. Zoek **Toetsenbordindelingsmodus doelapparaat**.
4. Selecteer **Windows-modus**.

![win-mode](https://assets2.openterface.com/images/win-mode.webp)


✅ Resultaat: Plaksnelkoppelingen gedragen zich zoals verwacht op Ubuntu (Ctrl-stijlgedrag).

![win-ctrl+v](https://assets2.openterface.com/images/win-ctrl+v.webp)

---

## Oplossing (als u in de Mac-modus wilt blijven)

Als u de **Mac-modus** liever behoudt, kunt u nog steeds betrouwbaar plakken via het menu:

- **Bewerken → Plakken**

![edit-paste](https://assets2.openterface.com/images/edit-paste.webp)

✅ Resultaat: Plakken werkt zelfs als het plakken van snelkoppelingen inconsistent is in de Mac-modus.

![workaround](https://assets2.openterface.com/images/workaround.webp)

---

## Waarom dit gebeurt

De meeste Ubuntu-apps gebruiken **Ctrl-gebaseerde** sneltoetsen voor plakken. In sommige instellingen wordt het plakken in de **Mac-modus** mogelijk niet consistent geactiveerd, terwijl **Bewerken → Plakken** betrouwbaar werkt.

---

## Korte samenvatting

- **Beste ervaring op Ubuntu/Linux:** gebruik **Windows-modus**
- **Als u in de Mac-modus blijft:** gebruik **Bewerken → Plakken**

---

## Hulp nodig bij het identificeren van de juiste modus voor uw installatie?

Als u niet zeker weet welke modus u moet gebruiken, volgt hier een korte vuistregel:

- Als uw doelbesturingssysteem **Ubuntu/Linux** is, begin dan met de **Windows-modus** (het meest consistent voor algemene snelkoppelingen).
- Als u voornamelijk **macOS-doelen** beheert en snelkoppelingen in Mac-stijl wilt, gebruikt u de **Mac-modus**.

Als u vaak tussen verschillende doelbesturingssystemen schakelt, kunt u overwegen deze pagina als bladwijzer te bewaren. Het is meestal met één klik opgelost.

---

## Veelgestelde vragen

**Verandert de Windows-modus mijn Mac-snelkoppelingen?**  
Het verandert de manier waarop Openterface snelkoppelingen naar het **doelapparaat** verzendt, zodat Ubuntu het verwachte gedrag in **Ctrl-stijl** ontvangt.

**Kan ik menu plakken in elke modus gebruiken?**  
Ja — **Bewerken → Plakken** is een betrouwbare optie in beide modi.

**Heeft dit ook invloed op het Raspberry Pi OS?**  
Vaak minder last van, maar als u soortgelijk gedrag ziet, is dezelfde oplossing van toepassing.