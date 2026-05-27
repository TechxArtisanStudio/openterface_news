---
locale: tw
translationKey: "20260203-macos-ubuntu-copy-paste"
slug: "20260203-macos-ubuntu-copy-paste"
title: "Ubuntu 複製/粘貼技巧（macOS → Ubuntu）"
description: "使用 Openterface 從 macOS 控制 Ubuntu 時修復粘貼快捷鍵。使用 Windows 模式可獲得可靠的 Ctrl 風格粘貼，或在 Mac 模式下使用編輯 → 粘貼作為替代方案。"
date: 2026-02-03
channel: software
app: kvm
topic: ["software"]
category: "Product Updates"
featured: false
draft: false
author: "Openterface"
---

使用 **Openterface** 從 **macOS** 控制 **Ubuntu** 時，**Mac 模式**下的快捷鍵粘貼可能無法穩定工作。本指南介紹推薦的修復方法和簡單的替代方案。

![setting](https://assets2.openterface.com/images/setting.webp)

---

## 快速修復（推薦用於 Ubuntu/Linux）

1. 在 macOS 上打開 **Openterface**。
2. 進入 **設置**。
3. 找到 **目標設備鍵盤佈局模式**。
4. 選擇 **Windows 模式**。

![win-mode](https://assets2.openterface.com/images/win-mode.webp)


✅ 結果：Ubuntu 上的粘貼快捷鍵按預期工作（Ctrl 風格行為）。

![win-ctrl+v](https://assets2.openterface.com/images/win-ctrl+v.webp)

---

## 替代方案（如希望保持 Mac 模式）

如果希望保持 **Mac 模式**，仍可通過菜單可靠粘貼：

- **編輯 → 粘貼**

![edit-paste](https://assets2.openterface.com/images/edit-paste.webp)

✅ 結果：即使 Mac 模式下快捷鍵粘貼不穩定，菜單粘貼仍可正常工作。

![workaround](https://assets2.openterface.com/images/workaround.webp)

---

## 原因說明

大多數 Ubuntu 應用使用 **Ctrl** 風格的快捷鍵進行粘貼。在某些配置下，**Mac 模式**的快捷鍵映射可能無法穩定觸發粘貼，而 **編輯 → 粘貼** 則能可靠工作。

---

## 快速總結

- **Ubuntu/Linux 最佳體驗：** 使用 **Windows 模式**
- **若保持 Mac 模式：** 使用 **編輯 → 粘貼**

---

## 不確定該選哪種模式？

如果不確定使用哪種模式，可參考以下簡單規則：

- 若目標系統為 **Ubuntu/Linux**，建議使用 **Windows 模式**（常用快捷鍵最一致）。
- 若主要控制 **macOS 目標**且希望使用 Mac 風格快捷鍵，請使用 **Mac 模式**。

若經常在不同目標系統間切換，建議收藏本頁，通常只需一鍵即可切換。

---

## 常見問題

**Windows 模式會改變我的 Mac 快捷鍵嗎？**  
它會改變 Openterface 向**目標設備**發送快捷鍵的方式，使 Ubuntu 收到預期的 **Ctrl 風格**行為。

**任何模式下都能使用菜單粘貼嗎？**  
可以 — **編輯 → 粘貼** 在兩種模式下都是可靠選項。

**Raspberry Pi OS 也會受影響嗎？**  
通常影響較小，但若出現類似情況，同樣可採用上述修復方法。
