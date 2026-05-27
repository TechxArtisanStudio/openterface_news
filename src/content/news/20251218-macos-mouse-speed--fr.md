---
locale: fr
translationKey: "20251218-macos-mouse-speed"
slug: "20251218-macos-mouse-speed"
title: "Vitesse de souris et performances de jeu Openterface Mini-KVM sur macOS"
description: "Tests de performance de souris axés sur le jeu complets d'Openterface Mini-KVM sur macOS. Comparez les modes de souris absolu, événement relatif et HID relatif avec des débits de 9600 vs 115200 pour une configuration de jeu optimale."
date: 2025-12-18
channel: software
app: kvm
topic: ["software"]
category: "Product Updates"
featured: false
draft: false
author: "Openterface"
---

### Analyse du comportement de la souris axée sur le jeu

Cet article résume les tests de performance de souris en conditions réelles d'**Openterface Mini-KVM sur macOS**, en se concentrant sur le **comportement de la souris lié au jeu**, les limitations du débit série et les configurations recommandées.

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">Gaming isn't the main goal of Openterface KVMs, but we pushed them to explore the limits of KVM-over-USB. On macOS, 115200 baud + Relative HID gives the best mouse latency. Built for setup and debugging, tuned to stretch performance further. <a href="https://t.co/ianurD9ArL">pic.twitter.com/ianurD9ArL</a></p>&mdash; TechxArtisan (@TechxArtisan) <a href="https://twitter.com/TechxArtisan/status/2003418343806742992?ref_src=twsrc%5Etfw">December 23, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---

## 1. Logiciel et environnement de test

### Logiciel

* **Application hôte:**
  **Openterface pour macOS v1.21** *(En cours de développement)*

* **Outil de mesure côté cible:**
  Une **application de test interne personnalisée** développée pour mesurer avec précision les entrées de souris haute fréquence et les taux de traitement des événements sur le système cible.

> ⚠️ Comme v1.21 est encore en développement actif, certains comportements et caractéristiques de performance peuvent s'améliorer dans les versions futures.

---

### Conditions de test : limitation de vitesse de la souris

**Aucune limitation de vitesse de souris ou limitation de débit artificielle n'a été appliquée** pendant aucun des tests.

L'entrée de la souris a été capturée et transmise à la **vitesse native de l'appareil**, soumise uniquement à :

* Le taux d'échantillonnage matériel de la souris
* Le mode de souris sélectionné (Absolu / Événement relatif / HID relatif)
* Le débit série
* Le traitement des entrées de souris du système d'exploitation cible

---

## 2. Bases du débit de données de la souris

Chaque événement de mouvement de souris transmis via Mini-KVM se compose de :

```
11 octets = 88 bits
```

### Débit série théorique

| Débit | Événements max / Seconde |
| --------- | ------------------- |
| 9600      | ~109 événements/s       |
| 115200    | ~1309 événements/s      |

⚠️ Ces valeurs représentent des **limites théoriques supérieures**.
Les performances réelles sont influencées par :

* Le taux d'échantillonnage de la souris hôte
* Le mode de souris (Absolu vs Relatif)
* La planification des événements d'entrée macOS
* La mise en tampon série et le traitement du firmware
* **Le taux d'échantillonnage de la souris du système d'exploitation cible**, qui peut affecter considérablement la réactivité perçue (par exemple, faibles taux d'échantillonnage par défaut sur certaines distributions Linux)

---

## 3. Résultats des tests

---

### A. Mode souris absolu (9600 et 115200 débits)

| Type de souris | Débit | Débit hôte (Hz) | Débit cible (Hz) | Notes                                                                |
| ---------- | --------- | -------------- | ---------------- | -------------------------------------------------------------------- |
| Bluetooth  | 9600      | ~125           | ~75              | Bande passante série saturée ; entrées en file d'attente, mouvement retardé           |
| Filaire      | 9600      | ~150           | ~75              | Bande passante série saturée ; entrées en file d'attente, mouvement retardé           |
| Jeu     | 9600      | ~1000          | ~75              | Entrées haute fréquence fortement en file d'attente ; réactivité gravement réduite |
| Bluetooth  | 115200    | ~125           | ~125             | Mappage stable 1:1 hôte-cible                                    |
| Filaire      | 115200    | ~175           | ~175             | Débit amélioré ; latence apparente lors des mouvements rapides               |
| Jeu     | 115200    | ~1000          | ~350             | Limite de débit série atteinte ; entrées excessives en file d'attente                 |

**Conclusion (Mode absolu) :**

Le mode souris absolu s'adapte au débit mais reste contraint par le **débit série et la mise en tampon des entrées**.
À **9600 débits**, tous les types de souris sont limités et le mouvement est retardé.
À **115200 débits**, les souris standard atteignent un comportement stable, mais les **souris de jeu à échantillonnage élevé dépassent toujours la bande passante disponible**, introduisant une latence.

**Le mode absolu convient au contrôle du bureau, pas aux jeux sensibles à la latence.**

---

### B. Mode événement souris relatif

Le mode événement souris relatif capture **les événements de mouvement de la souris directement depuis la fenêtre du système d'exploitation**, calcule le **delta de mouvement entre les positions consécutives du curseur**, et transmet uniquement les données de mouvement relatif au système cible.

Ce mode :

* **Ne nécessite pas d'autorisations système supplémentaires**
* Est indépendant des **coordonnées d'écran absolues**
* Bénéficie d'une **fenêtre de capture plus large**, permettant des deltas de mouvement plus fins
* Évite la mise en tampon de position absolue, résultant en **une latence plus faible et une meilleure réactivité**

#### Performances du mode événement souris relatif

| Type de souris | Débit | Débit hôte (Hz) | Débit cible (Hz) | Notes                                              |
| ---------- | --------- | -------------- | ---------------- | -------------------------------------------------- |
| Bluetooth  | 9600      | ~100           | ~90              | Proche de la limite série ; stable pour usage occasionnel           |
| Filaire      | 9600      | ~125           | ~90              | Bande passante série saturée ; latence mineure          |
| Jeu     | 9600      | ~1000          | ~100             | Échantillonnage élevé dépasse la bande passante ; entrées compressées   |
| Bluetooth  | 115200    | ~125           | ~125             | Mappage 1:1 hôte-cible                         |
| Filaire      | 115200    | ~180           | ~150             | Débit amélioré ; suivi fluide               |
| Jeu     | 115200    | ~1000          | ~450             | Meilleures performances observées ; limité par le débit série |

🔴 **9600 débits est insuffisant pour les souris de jeu à échantillonnage élevé**
🟢 **115200 débits permet une entrée de niveau jeu réactive en mode événement relatif**

---

### C. Mode souris HID relatif

Le mode souris HID relatif **convertit directement l'entrée de souris HID macOS en événements HID sur le système cible**, contournant le traitement du curseur au niveau de la fenêtre et le mappage des coordonnées absolues.

Ce mode :

* Fonctionne sur **les événements de souris de niveau HID bruts**
* **Ne dépend pas de la taille de la fenêtre de l'application**
* Préserve les **caractéristiques d'échantillonnage natives de la souris**
* Minimise la mise en tampon et la traduction intermédiaires
* Offre la **latence la plus faible** parmi tous les modes de souris

En conséquence, le mode souris HID relatif offre un comportement **le plus proche d'une connexion de souris USB directe**, en particulier à des débits plus élevés.

#### Performances du mode souris HID relatif

| Type de souris | Débit | Débit hôte (Hz) | Débit cible (Hz) | Notes                                             |
| ---------- | --------- | -------------- | ---------------- | ------------------------------------------------- |
| Bluetooth  | 9600      | ~100           | ~90              | Proche de la limite série ; acceptable pour usage de base       |
| Filaire      | 9600      | ~250           | ~180             | Bande passante série partiellement saturée              |
| Jeu     | 9600      | >1000          | ~90              | Échantillonnage élevé dépasse la bande passante disponible          |
| Bluetooth  | 115200    | ~160           | ~155             | Mappage proche de 1:1 hôte-cible                   |
| Filaire      | 115200    | ~250           | ~150             | Stable et réactif                             |
| Jeu     | 115200    | >1000          | ~500             | Meilleures performances globales ; limité par le débit série |

**Points clés (Mode HID relatif) :**

* Offre la **latence la plus faible** de tous les modes de souris
* À **9600 débits**, les souris à échantillonnage élevé restent limitées par la bande passante
* À **115200 débits**, les souris de jeu atteignent **des centaines d'événements côté cible par seconde**
* **Fortement recommandé pour le jeu et les mouvements rapides de caméra**

---

### D. Souris directe sur Windows (Référence)

| Type de souris      | Débit cible (Hz) |
| --------------- | ---------------- |
| Souris Bluetooth | 80–85            |
| Souris filaire     | 120–125          |
| Souris de jeu    | >1000            |

Cette référence montre que **Mini-KVM (115200 débits, mode HID relatif)** peut approcher les performances d'une souris filaire native, bien qu'il ne puisse pas complètement éliminer la surcharge inhérente au transport KVM et série.

---

## 4. Configuration de jeu recommandée

### ✅ Recommandé

* **Mode souris :** Souris HID relative
* **Débit :** 115200
* **Type de souris :** Souris filaire ou de jeu
* **Taux d'échantillonnage :** ≤1000 Hz recommandé

### ❌ À éviter

* Mode souris absolu pour le jeu
* 9600 débits avec des souris à échantillonnage élevé
* Taux d'échantillonnage excessivement élevés sans bande passante série suffisante

---

## 5. Attentes importantes

Openterface Mini-KVM est principalement conçu pour :

✔ Interaction BIOS / UEFI
✔ Configuration et débogage du système
✔ Accès et gestion à distance

Bien que **le jeu soit possible**, Mini-KVM **n'est pas un remplacement pour une souris de jeu USB directe**, en particulier pour les titres hautement compétitifs ou critiques en termes de latence.

---

## 6. Résumé final

* **Le jeu avec Openterface Mini-KVM est possible** lorsqu'il est correctement configuré
* La réactivité du jeu est dominée par le **mode de souris, le taux d'échantillonnage et le débit**, et non par les performances du CPU hôte
* Le **mode souris absolu** privilégie la précision de position et ne convient pas au jeu
* **9600 débits** crée un plafond de bande passante d'entrée dur
* Le **mode souris HID relatif à 115200 débits** offre le meilleur équilibre entre :

  * Fréquence d'entrée
  * Latence
  * Stabilité
* Bien que Mini-KVM ne puisse pas correspondre pleinement à une connexion USB native, il peut fournir une **expérience jouable et réactive** pour les scénarios de jeu occasionnel et certains scénarios de jeu compétitif

---

### Verdict global

✅ **Techniquement solide**
✅ **Positionnement clair pour les joueurs**
✅ **Honnête sur les limitations**
