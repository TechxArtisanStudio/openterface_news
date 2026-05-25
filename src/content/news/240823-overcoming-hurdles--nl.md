---
locale: nl
translationKey: "240823-overcoming-hurdles"
slug: "240823-overcoming-hurdles"
title: "Hürden overwinden: Fortschritts-Update en neuer Zeitplan"
description: "Wichtiges Openterface Mini-KVM Update: CE-Zertifizierung abgeschlossen, Production läuft, neue ETA Mitte Januar. Hardware V1.9 finalisiert met Erweiterungs-Pins, Android-App-Entwicklung, verbesserter Verpackung en mehrsprachigem Handbuch in Arbeit."
date: 2024-08-22
channel: product
product: minikvm
topic: ["software", "campaign", "community"]
category: "Product Updates"
featured: false
draft: false
author: "Openterface Team"
---

Hey alle zusammen,

Ich hoffe, es geht euch allen gut. Es ist eine Weile her seit unserem letzten Update. Ich wünschte, ich könnte sagen, dass alles reibungslos voor Openterface gelaufen ist, aber wir sind auf ein paar Hindernisse gestoßen, die unseren Lieferzeitplan verzögern werden. Obwohl das niet das war, was wir erwartet hatten, gehen wir diese Herausforderungen direkt an en machen stetige Fortschritte met vielen guten Nachrichten zum Teilen. Dieser Post ist etwa **7 Minuten Lesezeit**, also lasst uns in die Details eintauchen, damet ihr genau wisst, wo die Dinge stehen en was als nächstes kommt.

## Regulierung, Production en Qualität

Bevor wir die Production starten konnten, mussten wir notwendige Qualitätstests gemäß den Vorschriften bestehen, insbesondere die CE-Zertifizierung. Da unsere Toolkit-Version niet nur das Mini-KVM, sondern auch mehrere Zubehörteile enthält, musste jeder Teil CE-Tests durchlaufen. Diese Tests dauerten länger als erwartet (es stellt sich heraus, dass Kabel ziemlich wählerisch sein können), aber die gute Nachricht ist, dass **wir CE voor unser Mini-KVM en alle seine Komponenten bestanden haben!** Unten ist eine Overzicht der Zertifizierungen voor alle unsere Teile: Mini-KVM, HDMI-Kabel, oranges Type-C-Kabel, schwarzes kurzes Type-C-Kabel en VGA2HDMI-Kabel. Mit der Zertifizierung in der Hand ist unser Productionszeitplan jetzt sicher, en unsere Hersteller **produzieren derzeit alle Teile**, während ich spreche.

![240823-0](https://www.crowdsupply.com/img/fcb5/db59e179-2413-4d57-8462-2285c007fcb5/openterface-240823-0_jpg_gallery-lg.jpg)
*UKCA- en CE-Anforderungen sind voor unsere Elektronikprodukte gleich, wobei CE auch RoHS-Konformetät abdeckt.*

Vor zwei Wochen besuchten wir einen unserer Hersteller, um ihre Linienmanager in Qualitätskontrolle voor die orangen Kabel zu schulen, bevor sie sie an uns verschickten. Nu wurden ALLE orangen Kabel produziert en sitzen in einer Ecke unseres Studios.
![240823-1](https://www.crowdsupply.com/img/28dc/34844b54-0e02-414d-b58b-d40e8abe28dc/openterface-240823-1_jpg_gallery-lg.jpg)
*Kevin en Shawn erklärten die Testmethoden, um sicherzustellen, dass das orange Kabel ordnungsgemäß met unserem Openterface Mini-KVM funktioniert.*

Wir werden diese Woche dieselbe Aufgabe voor andere Teile durchführen, um QA an der Productionsfront zu schulen. Hier sind Proben zusätzlicher Kabel.
![240823-2](https://www.crowdsupply.com/img/e703/abb8ffa5-eb85-4eb9-b5f8-d8a3d349e703/openterface-240823-2_jpg_md-xl.jpg)
*Stolz met unserem TechxArtisan-Logo markiert, das sind Proben des HDMI-Kabels, des kurzen Type-C-Kabels en des VGA-to-HDMI-Kabels.*

Wir erwarten, dass die anderen Teile en Mini-KVMs bald von unseren Herstellern ankommen, zu welchem Zeitpunkt wir die Qualität jeder Komponente overprüfen en sie ordnungsgemäß in unserem Studio verpacken werden, bevor sie versandt werden. Mit anderen Worten, **unser Team wird persönlich die Qualität sicherstellen**, bevor sie eure Hände erreicht.

## Versand, potenzielle Verzögerungen en neue ETA

**Die aktuelle Unsicherheit liegt im Versandprozess**. Nach der Untersuchung mehrerer Versandunternehmen fanden wir heraus, dass der Versand zusätzliche Zeit in Anspruch nehmen wird, da wir wahrscheinlich Pakete over ein Lager transferieren werden, bevor sie das Lager von Crowd Supply erreichen. Wir diskutieren noch, ob wir Seefracht of Luftfracht wählen sollen—bitte habt noch ein paar Tage Geduld, während wir die Arrangements klären.

Der Zollabfertigung ist ein weiteres potenzielles Hindernis, das unerwartete Verzögerungen verursachen könnte. Sobald unsere Producte im US-Lager von Crowd Supply ankommen, werden sie ein bis zwei Wochen brauchen, um weltweit basierend auf jeder Bestellung versandt zu werden. Für Unterstützer außerhalb der USA müssen individuelle Pakete immer noch durch globalen Versand en Zollabfertigung im Zielland gehen.

Unter Berücksichtigung der aktuellen Situation en dem Hinzufügen von etwas Pufferzeit bleibe ich vorsichtig optimistisch, dass wir die Lieferung vor Ende dieses Jahres abschließen werden, met **einer neuen ETA von Mitte Januar**. Es tut mir wirklich leid voor die Unannehmlichkeiten en ich schätze eure Unterstützung en Geduld während dieser Änderung.

## Finalisierte Hardware V1.9

Wie ihr vielleicht aus unserem vorherigen [Reddit-Post](https://www.reddit.com/r/Openterface_miniKVM/comments/1e25pco/openterface_minikvm_v19_with_pins_for_more/) wisst, haben wir beschlossen, **unsere Hardware auf V1.9 zu upgraden**, einschließlich eines Satzes hackbarer Erweiterungs-Pins. Das war niet Teil des ursprünglichen Plans voor die Crowdfening-Kampagne, aber wir glauben, dass es das **Potenzial voor breitere Nutzung** der Hardware erheblich verbessert.

![240823-3](https://www.crowdsupply.com/img/77d7/09a9d0e5-3065-4f3e-8b61-bae66b5c77d7/openterface-240823-3_jpg_md-xl.jpg)
*Die VCC-, GND-, Target D+-, Target D--, Host D+- en Host D--Pins—wobei 'D' voor USB-Daten steht.*

Ein wichtiger Antrieb war, **den USB-Schalter auf Software-Ebene umschalten zu können**. Warum ist das wichtig? Auf unserer Roadmap **streben wir an, eine KVM-over-IP-Lösung** wie VNC in der Zukunft zu unterstützen. Die Idee ist, lokale KVM-Steuerung met dem VNC-Protokoll zu verbinden, wodurch Benutzer den Zielcomputer over den Host-Computer fernsteuern können. In einem solchen Remote-Szenario ist die Fähigkeit voor Benutzer, den USB-Port zu wechseln, wesentlich, besonders wenn Dateiovertragungen zwischen Host en Ziel erforderlich sind.

**Die Erweiterungs-Pins öffnen auch Möglichkeiten voor mehr**, wie Integration met iPadOS, ATX-Steuerung, Netzwerk-Bridging en Audio-Bypass. Obwohl ich hier niet in alle Details eintauchen werde, ermutige ich euch, unserer Openterface-Community beizutreten, um met uns weiter zu diskutieren.

Dieses Hardware-Upgrade könnte potenziell unsere Openterface-Lösung erweitern, um over IP zu operieren en erweiterte Functies zu enthalten, während es seine Kernstärke als Plug-and-Play KVM-over-USB-Tool beibehält—perfekt voor IT-Profis, die unsichere IT-Umgebungen wie unbekannte Rechenzentren navigieren.

Ich bin froh zu berichten, dass V1.9 unsere internen Basistests bestanden hat en als offizielle Version voor alle unsere Unterstützer finalisiert wird. Dieses Hardware-Upgrade wird jedoch weitere Tests erfordern, en jede Entwicklung basierend auf diesen Erweiterungs-Pins wird experimentell sein en wahrscheinlich Bugs haben. Hier könnt ihr beitragen. Wir verlassen uns auf die Open-Source-Community, um uns zu helfen, Openterface zusammen zu verbessern.

## Mehr Software-Updates

Auf der Software-Seite machen wir aufregende Fortschritte. Wir tauchen jetzt in die **Openterface Android-App** ein! Schaut euch diesen [Tweet](https://x.com/TechxArtisan/status/1825460088922071398) voor eine frühe Demo an, die flüssige KVM-Steuerung, Mausbewegung en Klicks in Aktion zeigt. Mehr Functies sind unterwegs, en wie immer, sobald wir den Code etwas mehr poliert haben, **wird diese App auch open-sourced** in unserem GitHub-Repo [Openterface_Android](https://github.com/TechxArtisanStudio/Openterface_Android).
![240823-4](https://www.crowdsupply.com/img/7007/b192f260-1e1f-4dab-905b-fb0a6d927007/openterface-240823-4_jpg_md-xl.jpg)
*Nur unsere Fingerspitzen verwenden, um einen Linux-Computer von einem Android-Tablet aus KVM zu steuern. Schick!*

Unsere QT-Version hat gerade ein praktisches Update erhalten—ihr könnt jetzt [Text vom Host zum Ziel overtragen](https://x.com/TechxArtisan/status/1825919721960780131)! Also wird diese Funktion jetzt auf macOS-, Windows- en Linux-Host-Apps unterstützt.

Außerdem planen wir, eine lustige Funktion hinzuzufügen—[eine automatische Mausbewegung, um zu verhindern, dass euer Zielcomputer schläft](https://x.com/TechxArtisan/status/1825471186668847241). Sollen wir met dem Ping-Pong-Ball gehen, der um den Bildschirm hüpft, of dem klassischen DVD-Bildschirmschoner-Effekt? Stimmt ab en kommentiert den [Tweet](https://x.com/TechxArtisan/status/1825470086800691459) 😃

## Verpackungsdesign, Beschriftung en Handbuch

Wir haben [met verschiedenen Mock-ups en Verpackungsdesigns experimentiert](https://www.reddit.com/r/Openterface_miniKVM/comments/1elm4vq/almost_ready_to_finalize_our_package_design/), um das perfekte Gleichgewicht zwischen mehreren Schlüsselfaktoren zu finden:

- Materialien auswählen, die robust genug sind, um das Product en seine Teile während des Versands zu schützen,
- Informative Beschriftung erstellen, die Benutzern hilft, das Product auf einen Blick zu verstehen,
- Einhaltung der Vorschriften sicherstellen,
- Die Verpackung visuell ansprechend machen,
- Und umweltfreenlich sein, indem Plastikverwendung wo immer möglich minimiert wird.

Zusätzlich haben wir mehrere Verbesserungen an der alten Toolkit-Tasche vorgenommen, einschließlich:

- Größerer Stauraum,
- Stilvollem orangen Reißverschluss,
- Aufgewerteten Außen- en Innenmaterialien,
- Und einer super dehnbaren Mesh-Tasche.

Wir haben dieses Material gewählt, weil es das ideale Gleichgewicht zwischen budgetfreenlich, angenehm zu berühren en haltbar genug, um die Artikel darin zu schützen, bietet. **Wir sind zuversichtlich, dass ihr es lieben werdet**.

![240823-5](https://www.crowdsupply.com/img/099a/75e16f52-bd0c-4652-af27-08caf448099a/openterface-240823-5_jpg_md-xl.jpg)

Wir aktualisieren auch die Beschriftungen auf dem Aluminiumgehäuse, um sie so informativ en visuell ansprechend wie möglich zu machen. Wir hoffen, dass diese Verbesserungen eure Benutzererfahrung verbessern en es einfacher machen werden, met Openterface zu beginnen.

![240823-6](https://www.crowdsupply.com/img/94d8/441a5757-2d6a-4c79-885b-7b5b3a7094d8/openterface-240823-6_jpg_md-xl.jpg)

Wir finalisieren das Openterface-Handbuch, das auf Englisch, Deutsch, Französisch, Japanisch en Chinesisch verfügbar sein wird. Entschuldigung, wenn wir eure Sprache verpasst haben—unsere Box ist niet TARDIS-groß (die Polizeibox von Doctor Who)! Aber wir werden unser Bestes geben, um mehr Übersetzungen auf unserer Website hinzuzufügen.

![240823-7](https://www.crowdsupply.com/img/e2d9/2e5a2086-20f0-47ec-a27b-288d10d0e2d9/openterface-240823-7_jpg_md-xl.jpg)

## Community-Sprachoverprüfung

Ich habe ChatGPT verwendet, um bei Übersetzungen zu helfen, aber es kann manchmal bei Formulierungen en Wortwahl daneben liegen. Wenn es niet zu viel Mühe ist, würde ich jede Hilfe bei der Überprüfung von Inhalten in anderen Sprachen sehr schätzen, besonders voor die Druckmaterialien, die wir gerade finalisieren. Ich habe alle Textinhalte voor die Verpackung in unserem GitHub-Ordner [product-printed-materials](https://github.com/TechxArtisanStudio/Openterface/tree/main/product-printed-materials) aktualisiert, wo ihr overprüfen en Verbesserungen einreichen könnt. Ihr könnt mich auch direkt DMen. Danke!

## Abschließende Bemerkungen en laufende Fortschritte

Wir entschuldigen uns nochmals voor die Verzögerungen en die Änderung in der ETA unseres Products. Danke voor eure Geduld en davoor, dass ihr bei uns bleibt—wir arbeiten hart daran, es euch so schnell wie möglich zu bringen! Ich werde euch sofort aktualisieren, sobald unser Versand arrangiert ist. Mehr Updates sind unterwegs, also trett unserer Openterface-Community bei en bleibt dran!

Prost,

Billy Wang  
Productmanager  
Openterface-Team | TechxArtisan
