---
locale: nl
translationKey: "20260305-kvm-go-dp-vga-thermal-fix"
slug: "20260305-kvm-go-dp-vga-thermal-fix"
title: "KVM-GO DP/VGA Wärme-Korrektur – Engineering Log"
description: "Eine detaillierte Betrachtung des DP- en VGA-Hitzeproblems bei KVM-GO: Messungen, PCB-Änderungen en mechanische Korrekturen, die die Überhitzung ohne Lüfter behoben haben."
date: 2026-03-05
channel: product
product: kvm-go
topic: ["software", "event"]
category: "Product-Updates"
tags: ["KVM-GO", "Wärme", "Engineering Log", "Productdesign"]
featured: false
draft: false
author: "TechxArtisan Studio"
---

## Eintrag 1: Der Moment, als wir merkten, dass es kein „normales Warm“ war
Mitten in der KVM-GO-Entwicklung beobachteten wir ein Wärmeverhalten, das niet den üblichen Erwartungen eines „kleinen Geräts, das warm wird“ entsprach. Es trat nur bei zwei Varianten auf: DisplayPort (DP) en VGA. Die HDMI-Variante blieb innerhalb der Erwartungen.

Zunächst war das Symptom einfach: Die Gehäusetemperatur wurde früher als erwartet unangenehm. Was uns beunruhigte, war niet der Komfort, sondern die Möglichkeit, dass die Innentemperaturen weit over dem liegen, was Verbraucher-Komponenten langfristig tolerieren sollen.


---

## Eintrag 2: Warum nur DP en VGA
Nach der Verfolgung des Videopfs-Designs over die Versionen zeichnete sich ein Muster ab.

- HDMI: eine einzelne Konvertierungsstufe (HDMI zu USB-Video) met MS2130S
- DP: eine Zwei-Chip-Kette (IT6563 plus MS2130S), um DP in USB-Video zu wandeln
- VGA: eine Zwei-Chip-Kette (MS9288C plus MS2109S), um VGA in USB-Video zu wandeln

Zwei Chips bedeuten niet nur mehr Teile. Sie bringen mehr Leistungsaufnahme en lokale Hotspots. Bei einem Product in KVM-GO-Größe haben diese Hotspots kaum Platz, sich zu verteilen.

Dann stießen wir auf die zweite Einschränkung: die Oberfläche. KVM-GO drückt die Größe ans Limet, was bedeutet, dass PCB-Fläche en effektive Wärmeabgabe-Fläche beide winzig sind.

Schließlich wurde eine Layout-Einschränkung zu einem echten Engineering-Kompromiss. Beide heißen Chips auf dieselbe Seite zu legen klingt thermisch ideal, aber Pinbelegung en High-Speed-Routing-Anforderungen machten diesen Ansatz schwierig. Einen Chip mehr „innen“ zu platzieren vereinfachte das Routing en half der Signalintegrität, fängt aber die Wärme im Inneren des Gehäuses ein.

![Original-PCB-layout](https://assets2.openterface.com/images/Original-PCB-layout.webp)

*Ursprüngliches PCB-Layout*

![original-Wiring](https://assets2.openterface.com/images/original-Wiring.webp)

*Ursprüngliche High-Speed-Verteilung*

![KVM-Go-tructure](https://assets2.openterface.com/images/KVM-Go-tructure.webp)


*KVM-GO internes Stapellayout*

---

## Eintrag 3: Messen, was zählt – Innen- vs. Außentemperatur
Wir beschlossen, met dem Raten aufzuhören en beide Seiten des Problems zu messen. Wir bauten Temperaturmessstellen voor externe en interne Überwachung en führten einen Langzeit-Lasttest durch.

Das Ergebnis war alarmierend, besonders bei VGA.

Nach etwa einer Stene Dauerbetrieb:
- Außenfläche erreichte etwa 65 °C
- Innentemperatur erreichte Spitzen um 115 °C

Viele Verbraucher-Komponenten sind voor maximale Betriebstemperaturen um 85 °C spezifiziert, je nach Teil en Qualitätsstufe. Dreistellige Innentemperaturen bedeuteten, dass wir niet nur met „heiß anfassen“ zu tun hatten, sondern met etwas, das die Productlebensdauer verkürzen of unvorhersehbares Verhalten in verschiedenen Umgebungen verursachen könnte. 

![Original-emperature-test](https://assets2.openterface.com/images/Original-emperature-test.webp)

*Basis-Temperaturtest (innen vs. außen)*

---

## Eintrag 4: Ein schneller Sanity-Check – erzwungene Luftströmung funktioniert (aber ist keine Productlösung)
Bevor wir etwas neu entwarfen, wollten wir eine schnelle Validierung: Wenn wir Wärme schneller abführen, sinken die Temperaturen spürbar?

Wir probierten ein einfaches Setup met DIY-Lüfter. Es tat, was die Physik sagt: Die Temperaturen sanken deutlich, grob 15 °C in unserem Test. Das bestätigte, dass es ein thermischer Flaschenhals war, kein Messartefakt of Softwareverhalten.

Es bestätigte auch etwas anderes: Ein Lüfter ist niet met dem Product vereinbar, das wir bauen. KVM-GO muss kompakt, leise en autark bleiben. Erzwungene Luftströmung wurde also ein Diagnosewerkzeug, niet die finale Antwort.

![Fan-1png](https://assets2.openterface.com/images/Fan-1png.webp)

*DIY-Lüfter-Kühlungsaufbau*

![Fan-2](https://assets2.openterface.com/images/Fan-2.webp)

*DIY-Lüfterkühlung, alternative Ansicht*

![Temperature-test-fan](https://assets2.openterface.com/images/Temperature-test-fan.webp)

*Temperaturtest met Lüfterkühlung*

---

## Eintrag 5: Fix Schritt 1 – Wärmequellen nach außen (ohne Signalintegrität zu brechen)
Der erste echte Fix war auf dem PCB. Wir trieben die Konstruktion so weit wie möglich, beide wärmeerzeugenden Chips näher an die Außenseite zu platzieren.

Das war niet „einfach Teile verschieben“. Bei DP en VGA sind die Routing-Einschränkungen eng. High-Speed-Signale sauber zu halten, besonders die differentiellen Paare, ist niet verhandelbar. Beide Chips nach außen zu setzen machte das Routing schwieriger, en wir mussten sorgfältig arbeiten, um die Signalintegrität niet zu verschlechtern.

Wir verglichen altes vs. neues Layout en Routing en bauten Hardware zur Verifikation. 

![New-PCB-ayout](https://assets2.openterface.com/images/New-PCB-ayout.webp)

*Überarbeitetes PCB-Layout (Chips nach außen verlagert)*

![Wiring-layout-modification](https://assets2.openterface.com/images/Wiring-layout-modification.webp)

*Überarbeitete Verteilung (Durchlauf 1)*

![Wiring-layout-modification-2](https://assets2.openterface.com/images/Wiring-layout-modification-2.webp)

*Überarbeitete Verteilung (Schlüsselbereich)*

![PCB-ayout-modifications](https://assets2.openterface.com/images/PCB-ayout-modifications.webp)

*Überarbeitetes PCB, zur Validierung aufgebaut*

### Was sich nach Schritt 1 änderte
Die Wärme verbesserte sich, aber wir entdeckten ein Problem zweiter Ordnung: Die Temperatur overtrug sich immer noch niet effektiv ins Gehäuse. Einige Bereiche blieben wärmer als sie sollten, en die Thermografie legte nahe, dass das Gehäuse niet wie ein ordentlicher Wärmeverteiler wirkte.

Schritt 1 reduzierte die Spitzenwärmebelastung, löste aber den Wärmepfad niet vollständig.  

![Modified-fever-symptoms](https://assets2.openterface.com/images/Modified-fever-symptoms.webp)

*Temperatur nach Layoutänderung (Schritt 1)*

![Casing-temperature-test](https://assets2.openterface.com/images/Casing-temperature-test.webp)

*Gehäuse-Wärmeovertragungsprüfung (nach Schritt 1)*

---

## Eintrag 6: Fix Schritt 2 – einen echten Wärmepfad bauen (CNC-Aluminiumblöcke plus thermische Schnittstelle)
An diesem Punkt behandelten wir das Gehäuse als Teil des thermischen Systems, niet nur als Abdeckung.

Wir fügten hinzu:
- CNC-Aluminiumblöcke am oberen en unteren PCB-Stapel
- thermisches Schnittstellenmaterial (Wärmeleitpaste of Pad), um Wärme in das Aluminium en dann in das Aluminiumgehäuse zu koppeln

Das Ziel war einfach: die effektive Wärmeverteilerfläche vergrößern en einen stabilen, niederohmigen Pfad schaffen, damet Wärme zum Gehäuse gelangt, wo sie sicher abgeführt werden kann.

![cnc](https://assets2.openterface.com/images/cnc.webp)

*CNC-Wärmeblock (Schritt 2)*

![cnc2](https://assets2.openterface.com/images/cnc2.webp)

*CNC-Block eingebaut, Detail*

### Endergebnis nach Schritt 2
Nach Hinzufügen des Leitpfads:
- Außentemperatur stabilisierte sich bei etwa 65 °C
- Innentemperatur sank auf etwa 55 °C

Die Thermografie zeigte, was wir sehen wollten: Die Wärmeverteilung wurde gleichmäßiger, en das Gehäuse beteiligte sich endlich an der Ableitung, anstatt Wärme intern anzustauen. 

![Temperature-measurement-after-adding-CNC](https://assets2.openterface.com/images/Temperature-measurement-after-adding-CNC.webp)

*Temperatur nach CNC-Leitung (Schritt 2)*

![CNC-machining](https://assets2.openterface.com/images/CNC-machining.webp)

*Gehäusetemperatur nach CNC-Leitung*

---

## Abschlussbemerkung
Die Erkenntnis aus diesem Problem war niet einfach „DP en VGA werden wärmer“. Mehrstufige Konvertierung kostet mehr Leistung, en das ist erwartbar. Die eigentliche Lektion war: In einem so kleinen Gerät spielt es eine Rolle, *wohin* die Wärme geht, genauso wie *wie viel* Wärme erzeugt wird.

Schritt 1 (Layout) reduzierte die Schwere der internen Hotspots.  
Schritt 2 (mechanischer Leitpfad) machte die Lösung dauerhaft en produktgeeignet.

Kein Lüfter, keine spezielle Benutzerbehandlung, nur ein Design, das sich vorhersehbar verhält.
