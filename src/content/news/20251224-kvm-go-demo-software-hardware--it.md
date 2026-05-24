---
locale: it
translationKey: "20251224-kvm-go-demo-software-hardware"
slug: "20251224-kvm-go-demo-software-hardware"
title: "Nuovo video dimostrativo, progressi del software e cosa c'è dentro KVM-GO"
description: "Guarda il nuovo video dimostrativo di KVM-GO che mostra le versioni HDMI/DP/VGA in azione. Scopri il software unificato per Mini-KVM e KVM-GO, gli aggiornamenti hardware che includono il processore video MS2130S 4K@60Hz e il microcontrollore CH32V208, più funzionalità in arrivo come il supporto personalizzato per EDID. Aggiornamento della campagna: $72k con oltre 220 sostenitori."
date: 2025-12-24
channel: product
product: kvm-go
topic: ["production", "software", "campaign", "community"]
category: "Aggiornamenti sui prodotti"
tags: ["KVM-GO", "Aggiornamenti sui prodotti", "Software", "Hardware", "Video dimostrativo", "Crowdfunding", "Analisi tecnica"]
featured: true
draft: false
author: "TechxArtisan Studio"
---

Ciao a tutti! Scusate per il periodo tranquillo. Abbiamo lavorato intensamente per polire sia hardware che software per [KVM-GO](https://openterface.com/product/kvm-go/), e il tempo è volato. A fine dicembre, siamo arrivati a **$72k con oltre 220 sostenitori**, che è eccezionale. Se puoi aiutare a portare avanti la campagna, per favore **diffondi la notizia**!

Grazie tantissimo per la pazienza e il supporto. Sì, il Natale ha aggiunto al caos 🙂🎄 Ora, facciamo un aggiornamento.

![blog-Gemini_Generated_Image_kvm-go](https://assets.openterface.com/images/blog/Gemini_Generated_Image_kvm-go.webp)
*Immagine a tema natalizio generata con Nano Banana, basata su foto reali dei nostri prodotti KVM-GO.*

## Nuovo video dimostrativo: KVM-GO in azione

Abbiamo appena pubblicato un [**nuovo video dimostrativo**](https://www.youtube.com/watch?v=459rWCQbJRE) che mostra KVM-GO in uso reale.

<iframe width="560" height="315" src="https://www.youtube.com/embed/459rWCQbJRE?si=6IbiJwkcpuZurepz" title="Player video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Nel video, vedrai:

* Le versioni HDMI / DP / VGA di KVM-GO in azione
* Cosa è incluso nella confezione
* Come controllare diversi dispositivi target
* Come KVM-GO si adatta a diversi flussi di lavoro, dai semplici accessi veloci alle configurazioni multi-dispositivo

Se sei curioso di testi più casuali, manici ai test e uso reale, puoi controllare i nostri [social media](https://openterface.com/about/community/). Spesso condividiamo clip di test grezze e scenari pratici per mostrare come KVM-GO si comporta su frontiere tecnologiche reali.

## Progressi del software: un'app per Mini-KVM e KVM-GO

Sul fronte software, abbiamo fatto un passo importante.

Gli aggiornamenti più recenti consentono all'applicazione Openterface di funzionare in modo senza problemi sia con Mini-KVM che con la serie KVM-GO. Per gli utenti, ciò significa:

* Un'esperienza coerente tra i prodotti
* Meno frammentazione se si usano più dispositivi Openterface

Abbiamo anche migliorato l'**esecuzione del tastiera e mouse**, con un focus su:

* Latenza totale inferiore
* Gestione più stabile dell'input, con una migliore rilevazione dello stato di connessione e della qualità del segnale
* Risposta più rapida durante interazioni rapide o continue

Sebbene il gaming non sia lo scenario principale di utilizzo per le nostre soluzioni KVM, ci preoccupiamo comunque molto della risposta dell'input in scenari reali. Se sei interessato ai dettagli tecnici, specialmente su macOS, abbiamo recentemente pubblicato un'analisi approfondita qui:
👉 **[Velocità del mouse Openterface Mini-KVM e prestazioni per il gaming su macOS](https://openterface.com/app/updates/20251218-macos-mouse-speed/)**

Molte delle migliorie discusse lì saranno direttamente incorporate nel nostro stack software unificato per entrambi Mini-KVM e KVM-GO.

## Aggiornamenti hardware principale in KVM-GO (rispetto a Mini-KVM)

Per chi è interessato all'interno, ecco un rapido confronto delle modifiche principali hardware da Mini-KVM a KVM-GO.

### Aggiornamento del pipeline video

| Aspetto           | **MS2109 (Mini-KVM)**    | **MS2130S (KVM-GO)** | Miglioramento           |
| ---------------- | ------------------------ | -------------------- | --------------------- |
| Input HDMI       | 4K @ 30Hz                | 4K @ 60Hz            | 2× larghezza di banda d'ingresso    |
| Output video USB | 1080p @ 30Hz             | 4K @ 60Hz            | 4× throughput dei pixel   |
| Scaling interno | 4K → 1080p               | 4K nativo            | Nessun ridimensionamento obbligatorio |
| Latenza del frame | Più alta (scaler + buffer) | Inferiore (percorso diretto)  | Ridotta la latenza       |

### Aggiornamento dell'emozione del tastiera e mouse USB

| Aspetto             | **CH340 + CH9329 (Mini-KVM)** | **CH32V208 (KVM-GO)** | Miglioramento     |
| ------------------ | ----------------------------- | --------------------- | --------------- |
| Conteggio chip         | 2 chips                       | Singolo MCU            | Sistema più semplice  |
| Gestione USB       | Ponte USB–Serial              | Dispositivo USB nativo     | Latenza più bassa   |
| Generazione HID     | Fissa                           | Definito dal firmware      | Controllo completo    |
| Percorso dati          | USB → UART → HID              | USB → HID             | Rimossa un'intermediazione |
| Compatibilità BIOS | Mist              | Eccellente             | Più affidabile   |

## Funzionalità avanzate in fase di sviluppo

Più funzionalità avanzate sono previste e attualmente in sviluppo per il firmware finale di KVM-GO. Ecco un'anteprima:

* **Supporto personalizzato EDID** per risolvere problemi di compatibilità tra schermi
* **Controllo basato su script** per l'automazione e flussi di lavoro avanzati

Condivideremo più dettagli man mano che queste funzionalità matureranno.

## Impegno Open Source (Come sempre)

Sì, **KVM-GO rimarrà interamente open source**.

Una volta finalizzato il design hardware per la produzione di massa, richiederemo la **certificazione OSHWA (Open Source Hardware Association)**.

Tutti i file del design hardware e i modelli STL saranno pubblicati qui:
👉 [https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware](https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware)

Trasparenza e collaborazione con la comunità rimangono al cuore di ciò che facciamo.

## Gli ultimi giorni della campagna: un promemoria amichevole

Siamo ora negli **ultimi giorni** della campagna di crowdfunding.

Il crowdfunding è la **migliore occasione per ottenere KVM-GO al prezzo più basso**. Una volta che la campagna finirà e passeremo agli ordini post-crowdfunding, il prezzo salirà.

Se hai esitato a sostenere la campagna, adesso è il momento giusto.

👉 **Sostieni la campagna e prenota il tuo unità su Crowd Supply:**
[https://www.crowdsupply.com/techxartisan/openterface-kvm-go](https://www.crowdsupply.com/techxartisan/openterface-kvm-go)

Grazie di nuovo per la pazienza, la fiducia e il supporto. Arriveranno ulteriori aggiornamenti presto, e cercheremo di non tornare silenziosi. Auguri di Natale da tutta la squadra!

**Team Openterface | TechxArtisan**
