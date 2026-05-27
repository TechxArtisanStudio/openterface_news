---
locale: ro
translationKey: "20251218-macos-mouse-speed"
slug: "20251218-macos-mouse-speed"
title: "Viteza mouse-ului și performanța în jocuri a Openterface Mini-KVM pe macOS"
description: "Testare cuprinzătoare a performanței mouse-ului orientată spre gaming pentru Openterface Mini-KVM pe macOS. Compară modurile Absolute, Relative Event și Relative HID, cu rate de baud de 9600 vs 115200, pentru configurarea optimă în jocuri."
date: 2025-12-18
channel: software
app: kvm
topic: ["software"]
category: "Product Updates"
featured: false
draft: false
author: "Openterface"
---

### Analiza comportamentului mouse-ului orientată spre gaming

Acest articol rezumă testele de performanță ale mouse-ului în condiții reale pentru **Openterface Mini-KVM pe macOS**, cu accent pe **comportamentul mouse-ului în jocuri**, limitările ratei de baud seriale și configurațiile recomandate.

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">Gaming isn't the main goal of Openterface KVMs, but we pushed them to explore the limits of KVM-over-USB. On macOS, 115200 baud + Relative HID gives the best mouse latency. Built for setup and debugging, tuned to stretch performance further. <a href="https://t.co/ianurD9ArL">pic.twitter.com/ianurD9ArL</a></p>&mdash; TechxArtisan (@TechxArtisan) <a href="https://twitter.com/TechxArtisan/status/2003418343806742992?ref_src=twsrc%5Etfw">December 23, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---

## 1. Software și mediu de testare

### Software

* **Aplicație pe host:**
  **Openterface pentru macOS v1.21** *(în curs de dezvoltare)*

* **Instrument de măsurare pe sistemul țintă:**
  O **aplicație internă personalizată**, dezvoltată pentru a măsura cu precizie intrările de mouse la frecvență mare și ratele de procesare a evenimentelor pe sistemul țintă.

> ⚠️ Deoarece v1.21 este încă în dezvoltare activă, unele comportamente și caracteristici de performanță pot fi îmbunătățite în versiunile viitoare.

---

### Condiții de testare: limitarea vitezei mouse-ului

**Nu s-a aplicat nicio limitare a vitezei mouse-ului sau restricție artificială a ratei** în timpul testelor.

Intrarea mouse-ului a fost capturată și transmisă la **viteza nativă a dispozitivului**, fiind limitată doar de:

* Rata de interogare a hardware-ului mouse-ului
* Modul de mouse selectat (Absolute / Relative Event / Relative HID)
* Rata de baud serială
* Gestionarea intrărilor de mouse de către sistemul de operare țintă

---

## 2. Noțiuni de bază despre debitul datelor de mouse

Fiecare eveniment de mișcare al mouse-ului transmis prin Mini-KVM este format din:

```
11 bytes = 88 biți
```

### Debit serial teoretic

| Rată de baud | Evenimente max./secundă |
| ------------ | ----------------------- |
| 9600         | ~109 evenimente/s       |
| 115200       | ~1309 evenimente/s      |

⚠️ Aceste valori reprezintă **limite teoretice superioare**.
Performanța reală este influențată de:

* Rata de interogare a mouse-ului pe host
* Modul mouse-ului (Absolut vs Relativ)
* Programarea evenimentelor de intrare în macOS
* Bufferizarea serială și gestionarea firmware-ului
* **Rata de interogare a mouse-ului pe sistemul țintă**, care poate afecta semnificativ senzația de receptivitate (de exemplu, rate implicite scăzute pe unele distribuții Linux)

---

## 3. Rezultatele testelor

---

### A. Modul mouse absolut (9600 și 115200 baud)

| Tip mouse | Rată de baud | Rată host (Hz) | Rată țintă (Hz) | Observații                                                                   |
| --------- | ------------ | -------------- | --------------- | ---------------------------------------------------------------------------- |
| Bluetooth | 9600         | ~125           | ~75             | Lățime de bandă serială saturată; intrări în coadă, mișcare întârziată       |
| Cu fir    | 9600         | ~150           | ~75             | Lățime de bandă serială saturată; intrări în coadă, mișcare întârziată       |
| Gaming    | 9600         | ~1000          | ~75             | Intrări de frecvență mare puternic puse în coadă; receptivitate sever redusă |
| Bluetooth | 115200       | ~125           | ~125            | Mapare stabilă 1:1 host-țintă                                                |
| Cu fir    | 115200       | ~175           | ~175            | Debit îmbunătățit; latență vizibilă la mișcări rapide                        |
| Gaming    | 115200       | ~1000          | ~350            | Limita debitului serial atinsă; intrări suplimentare puse în coadă           |

**Concluzie (mod absolut):**

Modul mouse absolut scalează cu rata de baud, dar rămâne limitat de **debitul serial și bufferizarea intrărilor**.
La **9600 baud**, toate tipurile de mouse sunt limitate și mișcarea este întârziată.
La **115200 baud**, mouse-urile standard funcționează stabil, dar **mouse-urile de gaming cu rată mare de interogare depășesc în continuare lățimea de bandă disponibilă**, introducând latență.

**Modul absolut este potrivit pentru control de desktop, nu pentru jocuri sensibile la latență.**

---

### B. Modul mouse relativ pe bază de evenimente

Modul Relative Mouse Event captează **evenimentele de mișcare ale mouse-ului direct din fereastra sistemului de operare**, calculează **delta de mișcare între poziții consecutive ale cursorului** și transmite doar datele de mișcare relativă către sistemul țintă.

Acest mod:

* **Nu necesită permisiuni suplimentare de sistem**
* Este independent de **coordonatele absolute ale ecranului**
* Beneficiază de o **fereastră de captură mai mare**, permițând diferențe de mișcare mai fine
* Evită bufferizarea pozițiilor absolute, rezultând **latență mai mică și receptivitate mai bună**

#### Performanța modului Relative Mouse Event

| Tip mouse | Rată de baud | Rată host (Hz) | Rată țintă (Hz) | Observații                                                     |
| --------- | ------------ | -------------- | --------------- | -------------------------------------------------------------- |
| Bluetooth | 9600         | ~100           | ~90             | Aproape de limita serială; stabil pentru uz casual             |
| Cu fir    | 9600         | ~125           | ~90             | Lățime de bandă serială saturată; latență minoră               |
| Gaming    | 9600         | ~1000          | ~100            | Rata mare depășește lățimea de bandă; intrări comprimate       |
| Bluetooth | 115200       | ~125           | ~125            | Mapare 1:1 host-țintă                                          |
| Cu fir    | 115200       | ~180           | ~150            | Debit îmbunătățit; urmărire fluidă                             |
| Gaming    | 115200       | ~1000          | ~450            | Cea mai bună performanță observată; limitată de debitul serial |

🔴 **9600 baud este insuficient pentru mouse-uri de gaming cu rată mare de interogare**
🟢 **115200 baud permite intrare receptivă de clasă gaming în modul Relative Event**

---

### C. Modul mouse relativ HID

Modul Relative Mouse HID **convertește direct intrarea HID a mouse-ului din macOS în evenimente HID pe sistemul țintă**, ocolind procesarea cursorului la nivel de fereastră și maparea coordonatelor absolute.

Acest mod:

* Funcționează pe **evenimente brute de mouse la nivel HID**
* **Nu depinde de dimensiunea ferestrei aplicației**
* Păstrează **caracteristicile native de interogare ale mouse-ului**
* Minimizează bufferizarea și traducerea intermediară
* Oferă **cea mai mică latență** dintre toate modurile de mouse

Ca rezultat, modul Relative Mouse HID oferă un comportament **cel mai apropiat de o conexiune USB directă a mouse-ului**, în special la rate de baud mai mari.

#### Performanța modului Relative Mouse HID

| Tip mouse | Rată de baud | Rată host (Hz) | Rată țintă (Hz) | Observații                                                    |
| --------- | ------------ | -------------- | --------------- | ------------------------------------------------------------- |
| Bluetooth | 9600         | ~100           | ~90             | Aproape de limita serială; acceptabil pentru uz de bază       |
| Cu fir    | 9600         | ~250           | ~180            | Lățime de bandă serială parțial saturată                      |
| Gaming    | 9600         | >1000          | ~90             | Rata mare depășește lățimea de bandă disponibilă              |
| Bluetooth | 115200       | ~160           | ~155            | Aproape de mapare 1:1 host-țintă                              |
| Cu fir    | 115200       | ~250           | ~150            | Stabil și receptiv                                            |
| Gaming    | 115200       | >1000          | ~500            | Cea mai bună performanță generală; limitată de debitul serial |

**Idei-cheie (mod Relative HID):**

* Oferă **cea mai mică latență** dintre toate modurile de mouse
* La **9600 baud**, mouse-urile cu rată mare rămân limitate de lățimea de bandă
* La **115200 baud**, mouse-urile de gaming ating **sute de evenimente pe secundă pe sistemul țintă**
* **Recomandat ferm pentru gaming și mișcări rapide ale camerei**

---

### D. Mouse direct pe Windows (referință)

| Tip mouse       | Rată țintă (Hz) |
| --------------- | --------------- |
| Mouse Bluetooth | 80–85           |
| Mouse cu fir    | 120–125         |
| Mouse de gaming | >1000           |

Această referință arată că **Mini-KVM (115200 baud, modul Relative HID)** se poate apropia de performanța nativă a unui mouse cu fir, deși nu poate elimina complet suprasarcina inerentă KVM-ului și transportului serial.

---

## 4. Configurație recomandată pentru gaming

### ✅ Recomandat

* **Mod mouse:** Relative Mouse HID
* **Rată de baud:** 115200
* **Tip mouse:** Cu fir sau mouse de gaming
* **Rată de interogare:** ≤1000 Hz recomandat

### ❌ De evitat

* Modul mouse absolut pentru gaming
* 9600 baud cu mouse-uri cu rată mare de interogare
* Rate de interogare excesiv de mari fără lățime de bandă serială suficientă

---

## 5. Așteptări importante

Openterface Mini-KVM este conceput în principal pentru:

✔ Interacțiune BIOS / UEFI
✔ Configurare și depanare de sistem
✔ Acces și administrare la distanță

Deși **gaming-ul este posibil**, Mini-KVM **nu este un înlocuitor pentru un mouse de gaming USB direct**, în special pentru titluri extrem de competitive sau sensibile la latență.

---

## 6. Rezumat final

* **Gaming-ul cu Openterface Mini-KVM este posibil** atunci când este configurat corect

* Receptivitatea în jocuri este dominată de **modul mouse-ului, rata de interogare și rata de baud**, nu de performanța CPU-ului host

* **Modul mouse absolut** prioritizează acuratețea pozițională și este nepotrivit pentru gaming

* **9600 baud** creează un plafon dur al lățimii de bandă pentru intrări

* **Modul Relative Mouse HID la 115200 baud** oferă cel mai bun echilibru între:

  * Frecvența intrărilor
  * Latență
  * Stabilitate

* Deși Mini-KVM nu poate egala complet o conexiune USB nativă, poate oferi o **experiență jucabilă și receptivă** pentru gaming casual și unele scenarii competitive

---

### Verdict general

✅ **Solid din punct de vedere tehnic**
✅ **Poziționare clară pentru gameri**
✅ **Onest în privința limitărilor**
