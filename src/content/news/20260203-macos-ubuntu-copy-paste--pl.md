---
locale: pl
translationKey: "20260203-macos-ubuntu-copy-paste"
slug: "20260203-macos-ubuntu-copy-paste"
title: "Wskazówka dotycząca kopiowania/wklejania Ubuntu (macOS → Ubuntu)"
description: "Napraw skróty wklejania podczas kontrolowania Ubuntu z systemu macOS za pomocą Openterface. Użyj trybu Windows, aby uzyskać niezawodne wklejanie w stylu Ctrl, lub Edycja → Wklej jako obejście w trybie Mac."
date: 2026-02-03
channel: software
app: kvm
topic: ["software"]
category: "Product Updates"
featured: false
draft: false
author: "Openterface"
---
Podczas kontrolowania **Ubuntu** z **macOS** przy użyciu **Openterface**, wklejanie skrótów może nie działać niezawodnie w **Trybie Mac**. W tym przewodniku przedstawiono zalecaną poprawkę i proste obejście.

![setting](https://assets2.openterface.com/images/setting.webp)

---

## Szybka poprawka (zalecana dla Ubuntu/Linux)

1. Otwórz **Openterface** na macOS.
2. Przejdź do **Ustawienia**.
3. Znajdź **Tryb układu klawiatury urządzenia docelowego**.
4. Wybierz **Tryb Windows**.

![win-mode](https://assets2.openterface.com/images/win-mode.webp)


✅ Wynik: skróty wklejania zachowują się zgodnie z oczekiwaniami w systemie Ubuntu (zachowanie w stylu Ctrl).

![win-ctrl+v](https://assets2.openterface.com/images/win-ctrl+v.webp)

---

## Obejście (Jeśli chcesz pozostać w trybie Mac)

Jeśli wolisz zachować **Tryb Mac**, nadal możesz bezpiecznie wklejać, korzystając z menu:

- **Edytuj → Wklej**

![edit-paste](https://assets2.openterface.com/images/edit-paste.webp)

✅ Wynik: wklejanie działa, nawet jeśli wklejanie skrótów jest niespójne w trybie Mac.

![workaround](https://assets2.openterface.com/images/workaround.webp)

---

## Dlaczego tak się dzieje

Większość aplikacji Ubuntu używa skrótów **opartych na Ctrl** do wklejania. W niektórych konfiguracjach mapowanie skrótów **Tryb Mac** może nie powodować spójnego wklejania, natomiast **Edycja → Wklej** działa niezawodnie.

---

## Szybkie podsumowanie

- **Najlepsze wrażenia z Ubuntu/Linux:** użyj **Trybu Windows**
- **Jeśli pozostaniesz w trybie Mac:** użyj **Edytuj → Wklej**

---

## Potrzebujesz pomocy w określeniu odpowiedniego trybu dla swojej konfiguracji?

Jeśli nie masz pewności, którego trybu użyć, oto krótka praktyczna zasada:

- Jeśli docelowy system operacyjny to **Ubuntu/Linux**, zacznij od **Trybu Windows** (najbardziej spójny dla popularnych skrótów).
- Jeśli kontrolujesz głównie **obiekty macOS** i potrzebujesz skrótów w stylu Maca, użyj **Trybu Mac**.

Jeśli często przełączasz się między różnymi docelowymi systemami operacyjnymi, rozważ dodanie tej strony do zakładek. Zwykle jest to rozwiązanie jednym kliknięciem.

---

## Często zadawane pytania

**Czy tryb Windows zmienia skróty mojego komputera Mac?**  
Zmienia sposób, w jaki Openterface wysyła skróty do **urządzenia docelowego**, więc Ubuntu otrzymuje oczekiwane zachowanie **w stylu Ctrl**.

**Czy mogę wklejać menu w dowolnym trybie?**  
Tak — **Edycja → Wklej** to niezawodna opcja w obu trybach.

**Czy dotyczy to również systemu operacyjnego Raspberry Pi?**  
Często mniej dotknięty, ale jeśli zauważysz podobne zachowanie, zastosuje się tę samą poprawkę.