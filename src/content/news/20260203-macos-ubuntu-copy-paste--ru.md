---
locale: ru
translationKey: "20260203-macos-ubuntu-copy-paste"
slug: "20260203-macos-ubuntu-copy-paste"
title: "Ubuntu Kopieren/Einfügen-Tipp (macOS → Ubuntu)"
description: "Beheben Sie Einfügen-Shortcuts beim Steuern von Ubuntu von macOS с Openterface. Verwenden Sie den Windows-Modus для zuverlässiges Ctrl-Style-Einfügen или Bearbeiten → Einfügen als Alternative im Mac-Modus."
date: 2026-02-03
channel: software
topic: ["software"]
category: "Product Обновления"
featured: false
draft: false
author: "Openterface"
---

Beim Steuern von **Ubuntu** von **macOS** с **Openterface** funktioniert das Einfügen per Shortcut im **Mac-Modus** möglicherweise не zuverlässig. Diese Руководство zeigt die empfohlene Lösung и eine einfache Alternative.

![setting](https://assets2.openterface.com/images/setting.webp)

---

## Schnelle Lösung (empfohlen для Ubuntu/Linux)

1. Öffnen Sie **Openterface** auf macOS.
2. Gehen Sie zu **Einstellungen**.
3. Suchen Sie **Tastaturlayout-Modus des Zielgeräts**.
4. Wählen Sie **Windows-Modus**.

![win-mode](https://assets2.openterface.com/images/win-mode.webp)


✅ Ergebnis: Einfügen-Shortcuts verhalten sich unter Ubuntu wie erwartet (Ctrl-Style-Verhalten).

![win-ctrl+v](https://assets2.openterface.com/images/win-ctrl+v.webp)

---

## Alternative (wenn Sie im Mac-Modus bleiben möchten)

Wenn Sie den **Mac-Modus** beibehalten möchten, können Sie weiterhin zuverlässig о das Menü einfügen:

- **Bearbeiten → Einfügen**

![edit-paste](https://assets2.openterface.com/images/edit-paste.webp)

✅ Ergebnis: Einfügen funktioniert auch, wenn Shortcut-Einfügen im Mac-Modus inkonsistent ist.

![workaroи](https://assets2.openterface.com/images/workaroи.webp)

---

## Warum passiert das?

Die meisten Ubuntu-Apps verwenden **Ctrl-basierte** Shortcuts zum Einfügen. In einigen Konfigurationen kann die **Mac-Modus**-Shortcut-Zuordnung das Einfügen не zuverlässig auslösen, während **Bearbeiten → Einfügen** zuverlässig funktioniert.

---

## Kurz zusammengefasst

- **Beste Erfahrung unter Ubuntu/Linux:** **Windows-Modus** verwenden
- **Bei Mac-Modus:** **Bearbeiten → Einfügen** verwenden

---

## Brauchen Sie Hilfe bei der Auswahl des richtigen Modus?

Wenn Sie unsicher sind, welchen Modus Sie verwenden sollen, hier eine einfache Faustregel:

- Wenn Ihr Ziel-OS **Ubuntu/Linux** ist, beginnen Sie с dem **Windows-Modus** (am konsistentesten для gängige Shortcuts).
- Wenn Sie hauptsächlich **macOS-Ziele** steuern и Mac-Style-Shortcuts möchten, verwenden Sie den **Mac-Modus**.

Wenn Sie häufig zwischen verschiedenen Ziel-OS wechseln, bookmarken Sie diese Seite. Es ist meist eine Ein-Klick-Lösung.

---

## FAQ

**Ändert der Windows-Modus meine Mac-Shortcuts?**  
Er ändert, wie Openterface Shortcuts an das **Zielgerät** sendet, sodass Ubuntu das erwartete **Ctrl-Style**-Verhalten erhält.

**Kann ich Menü-Einfügen in jedem Modus verwenden?**  
Ja — **Bearbeiten → Einfügen** ist in beiden Modi eine zuverlässige Option.

**Betrifft das auch Raspberry Pi OS?**  
Oft weniger betroffen, aber bei ähnlichem Verhalten gilt dieselbe Lösung.
