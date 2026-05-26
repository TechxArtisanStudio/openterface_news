---
locale: nl
translationKey: "20251224-kvm-go-demo-software-hardware"
slug: "20251224-kvm-go-demo-software-hardware"
title: "Nieuwe demovideo, softwarevoortgang en wat er in KVM-GO zit"
description: "Bekijk de nieuwe KVM-GO-demovideo waarin HDMI/DP/VGA-versies in actie worden getoond. Leer meer over uniforme software voor Mini-KVM en KVM-GO, hardware-upgrades waaronder MS2130S 4K@60Hz videoprocessor en CH32V208 MCU, plus aankomende functies zoals aangepaste EDID-ondersteuning. Campagne-update: $72k met meer dan 220 donateurs."
date: 2025-12-24
channel: product
product: kvm-go
topic: ["production", "software", "campaign", "community", "analysis"]
category: "Product Updates"
tags: ["KVM-GO", "Product Updates", "Software", "Hardware", "Demo Video", "Crowdfunding", "Technical Deep Dive"]
featured: true
draft: false
author: "TechxArtisan Studio"
---
Hallo allemaal! Sorry voor de rustige periode. We zijn druk bezig geweest met het oppoetsen van zowel de hardware als de software voor [KVM-GO](https://openterface.com/product/kvm-go/), en de tijd vloog voorbij. Eind december hebben we **$72.000 bereikt met meer dan 220 donateurs**, wat geweldig is. Als u ons kunt helpen dit verder te brengen, **verspreid het dan**!

Hartelijk dank voor uw geduld en steun. En ja, Kerstmis heeft zeker bijgedragen aan de chaos 🙂🎄 Laten we nu even bijpraten.

![blog-Gemini_Generated_Image_kvm-go](https://assets.openterface.com/images/blog/Gemini_Generated_Image_kvm-go.webp)
*Afbeelding met vakantiethema gegenereerd met Nano Banana, gebaseerd op echte foto's van onze KVM-GO-producten.*

## Nieuwe demovideo: KVM-GO in actie

We hebben zojuist een [**new demo video**](https://www.youtube.com/watch?v=459rWCQbJRE) gepubliceerd waarin KVM-GO in de praktijk wordt gebruikt.

<iframe width="560" height="315" src="https://www.youtube.com/embed/459rWCQbJRE?si=6IbiJwkcpuZurepz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; klembord-schrijven; gecodeerde media; gyroscoop; beeld-in-beeld; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

In de video zie je:

* KVM-GO **HDMI / DP / VGA**-versies in actie
* Wat zit er **in de doos**
* Hoe verschillende doelapparaten te bedienen
* Hoe KVM-GO past in echte workflows, van snelle toegang tot opstellingen met meerdere doelen

Als je nieuwsgierig bent naar meer informeel, praktijkgericht testen en echt gebruik, bekijk dan ook gerust onze [social media](https://openterface.com/about/community/). We delen vaak onbewerkte testclips en praktische scenario's die laten zien hoe KVM-GO zich gedraagt ​​op echte technische frontlijnen.

## Softwarevooruitgang: één app voor Mini-KVM en KVM-GO

Op softwaregebied hebben we een stevige stap voorwaarts gezet.

Dankzij onze nieuwste updates kan **dezelfde Openterface-applicatie naadloos samenwerken met zowel Mini-KVM als de KVM-GO-serie**. Voor gebruikers betekent dit:

* Een consistente ervaring voor alle producten
* Minder fragmentatie als u meer dan één Openterface-apparaat gebruikt

We hebben ook tijd besteed aan het verbeteren van de **toetsenbord- en muisprestaties**, met de nadruk op:

* Lagere algehele latentie
* Stabielere invoerverwerking, inclusief betere detectie van de verbindingsstatus en signaalkwaliteit
* Snellere respons tijdens snelle of continue interacties

Hoewel gamen niet het primaire doelgebruik is voor onze KVM-oplossingen, hechten we nog steeds grote waarde aan de responsiviteit van invoer in scenario's in de echte wereld. Als je geïnteresseerd bent in de technische details, vooral over macOS, hebben we hier onlangs een diepgaande duik gepubliceerd:
👉 **[Openterface Mini-KVM Mouse Speed & Gaming Performance on macOS](https://openterface.com/app/updates/20251218-macos-mouse-speed/)**

Veel van de daar besproken verbeteringen worden nu rechtstreeks ingevoerd in onze uniforme softwarestack voor zowel Mini-KVM als KVM-GO.

## Kernhardware-upgrades in KVM-GO (vergeleken met Mini-KVM)

Voor degenen die geïnteresseerd zijn in de interne onderdelen: hier is een korte vergelijking van de belangrijkste hardwarewijzigingen van Mini-KVM naar KVM-GO.

### Upgrade van de videopijplijn

| Aspect | **MS2109 (Mini-KVM)** | **MS2130S (KVM-GO)** | Verbetering |
| ---------------- | ----------------------- | ------------------- | -------------------- |
| HDMI-ingang | 4K bij 30 Hz | 4K bij 60 Hz | 2× invoerbandbreedte |
| USB-video-uitgang | 1080p bij 30 Hz | 4K bij 60 Hz | 4× pixeldoorvoer |
| Interne schaling | 4K → 1080p | Native 4K | Geen gedwongen schaalverkleining |
| Framelatentie | Hoger (scaler + buffer) | Lager (direct pad) | Verminderde latentie |

### Upgrade van USB-toetsenbord- en muisemulatie

| Aspect | **CH340 + CH9329 (Mini-KVM)** | **CH32V208 (KVM-GO)** | Verbetering |
| ------------------ | --------------------------- | -------------------- | --------------- |
| Chiptelling | 2 fiches | Enkele MCU | Eenvoudiger systeem |
| USB-verwerking | USB–seriële brug | Native USB-apparaat | Lagere latentie |
| HID-generatie | Vaste functie | Door firmware gedefinieerd | Volledige controle |
| Gegevenspad | USB → UART → HID | USB → HID | Eén hop verwijderd |
| BIOS-compatibiliteit | Gemengd | Uitstekend | Betrouwbaarder |

## Geavanceerde functies in actieve ontwikkeling

Er zijn verschillende geavanceerde functies gepland en actief in ontwikkeling voor de definitieve KVM-GO-firmware. Een snel voorproefje:

* **Aangepaste EDID-ondersteuning** voor het oplossen van compatibiliteitsproblemen met beeldschermen
* **Scriptgebaseerde bediening** voor automatisering en geavanceerde workflows

We zullen meer details delen naarmate deze functies volwassener worden.

## Open source-engagement (zoals altijd)

Ja, **KVM-GO blijft volledig open source**.

Zodra het hardwareontwerp klaar is voor massaproductie, zullen we een **OSHWA-certificering (Open Source Hardware Association)** aanvragen.

Alle hardwareontwerpbestanden en STL-modellen worden hier gepubliceerd:
👉 [https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware](https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware)

Transparantie en samenwerking met de gemeenschap blijven de kern van wat we doen.

## Laatste dagen van de campagne: een vriendelijke herinnering

We bevinden ons nu in de **laatste dagen** van de crowdfundingcampagne.

Crowdfunding is de **beste kans om KVM-GO tegen de laagste prijs** te krijgen. Zodra de campagne eindigt en we overgaan tot post-crowdfunding-bestellingen, gaat de prijs omhoog.

Als je op het hek hebt gezeten, is dit het moment.

👉 **Steun de campagne en beveilig uw eenheid op Crowd Supply:**
[https://www.crowdsupply.com/techxartisan/openterface-kvm-go](https://www.crowdsupply.com/techxartisan/openterface-kvm-go)

Nogmaals bedankt voor uw geduld, vertrouwen en steun. Er komen binnenkort meer updates en we zullen proberen het niet weer stil te houden. Warme vakantiewensen van ons allemaal!

**Openterface-team | TechxArtisaan**