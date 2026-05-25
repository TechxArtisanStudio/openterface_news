---
locale: tw
translationKey: "20260509-keymod-015-release"
slug: "20260509-keymod-015-release"
title: "KeyMod 0.15：遊戲手柄預設管線、鍵盤與鼠標（Basic）層級、多點觸控板佈局"
description: "KeyMod 0.15 搭載遊戲手柄預設管線（schema v7）、多點觸控板佈局、全屏鍵盤的鍵盤與鼠標（Basic）層級，以及全應用範圍的 KeyMod 品牌標識。向精緻的輸入體驗邁出重要一步。"
date: 2026-05-09
channel: product
product: keymod
topic: ["beta", "software"]
category: "產品更新"
tags: ["KeyMod", "產品更新", "發佈", "遊戲手柄", "鍵盤", "Android"]
featured: false
draft: false
author: "TechxArtisan Studio"
---

KeyMod **0.15**（`versionCode` **15**）是一個里程碑式的版本，包含三大核心功能：**遊戲手柄預設管線**（佈局 schema **v6-v7**）、專用的**鍵盤與鼠標（Basic）**層級以及**多點觸控板**佈局。此更新還在歡迎流程和構建產物中全面引入了 **KeyMod** 品牌標識。

## 遊戲手柄：預設管線 v7

遊戲手柄現在使用了真正的**預設系統**，你可以保存、加載、導入和導出自定義手柄佈局。

### 變更內容

- **Preset store v7** 替代了舊的內置佈局。經典出廠預設（`preset_classic_*`）和**Two buttons**（`preset_two_buttons`）已從磁盤中移除。僅保留 **`preset_default`** 作為受刪除保護的出廠佈局。
- **Schema v7** 使 **`stick_left`** 變為可選。佈局現在可以完全沒有左側搖桿模塊。**Add module** 菜單會插入 **`stick_left`**、**`stick_left_2`**、**`stick_left_3`** 等。
- **多點觸控板支持**：預設可包含多個觸控板（`touchpad_1`、`touchpad_2`）。添加觸控板會分配下一個可用 ID，錨點略微偏移。內置的 L/M/R 鼠標按鈕在所有觸控板之間共享。
- **觸控板鼠標按鈕大小調整**：鼠標按鈕現在使用更大的默認繪製半徑。你可以通過長按觸控板上的 **Mouse button size** 調整大小，或在單個鼠標模塊上長按 **This button size**。
- **輔助搖桿默認值**：**`stick_left_2+`** 默認為方向鍵十字 + WASD 映射。

### 預設管理

- **輕觸**工具欄中的 Preset 芯片可切換可用佈局
- **長按**可打開完整的預設列表，包含導入、添加模塊和導出選項
- 附帶的 **emu-6** 佈局作為初始預設
- 導出創建器支持 i18n，便於跨語言分享預設

## 鍵盤與鼠標（Basic）

專為專注打字設計的全屏鍵盤層級，無應用頂部標題欄。

### 功能

- **全屏鍵盤**：無應用主標題欄，提供更多屏幕空間
- **豎屏和橫屏數字鍵盤**：豎屏 5x8 網格（PrtSc / ScrLk / Pause / Home / End），橫屏 8x5 網格（帶加高的 +、Enter 和 00）
- **IME 純 ASCII 發送門**：在 compose 模式下輸入長文本，以乾淨的 HID 按鍵發送
- **長按重複**：按住字符/功能鍵可自動重複（約 400ms 延遲，約 50ms 重複間隔）
- **按鍵預覽**：按下按鍵時，浮動氣泡會在按鍵上方顯示實際標籤
- **觸覺反饋**和**主題自適應**按鍵表面

### 粘滯修飾符 vs 組合鍵修飾符

設置中可選擇 Basic 鍵盤使用**粘滯修飾符**（輕觸鎖定）或**瞬時 + 長按組合鍵**（默認）。

## 品牌標識

- 應用顯示名稱現已改為 **KeyMod**
- 歡迎屏幕顯示 **KeyMod** 標識
- CI 產物和 APK 文件名使用 **KeyMod** 前綴
- `applicationId` 保持為 **`com.openterface.keymod`**，支持原地升級

## 未變更內容

**鍵盤與鼠標 Pro**（複合模式，含 Shortcut Hub 條行、分割佈局和完整的 IME 行為）保持不變，仍是功能完整的體驗。

## 獲取更新

**此版本（0.15）：** [KeyMod-release-0.15.apk](https://assets2.openterface.com/data/KeyMod-release-0.15.apk)

> **Beta 說明：** KeyMod Android 應用仍處於活躍 Beta 階段。源碼倉庫尚未公開 — 我們計劃在眾籌成功後正式開源。如果你是 Beta 測試者並需要最新 APK，請在 Discord 上聯繫我們，我們會發送構建給你。

> **已知問題：** 此版本對遊戲手柄預設系統和 Basic 鍵盤層級進行了大量改動。我們的開發團隊仍在內部測試中，可能會遇到一些 bug。如果遇到任何異常情況，請在 Discord 上報告 — 你的反饋能幫助我們更快穩定版本。

已安裝用戶可直接原地升級。

## 兼容 Mini-KVM 和 KVM-Go

KeyMod 應用不僅限於 KeyMod 硬件。現有的 Openterface 用戶也可以試用：

- **KVM-Go**：可通過**藍牙**或 **USB** 連接
- **Mini-KVM**：可通過 **USB** 連接

## 升級說明

- **遊戲手柄**：你之前的雙按鈕偏好會在首次啟動時自動激活 **Two buttons** 預設。請使用 **Preset**（輕觸切換，長按查看列表）替代舊的 1 Button / 2 Buttons 控件。
- **鍵盤與鼠標（Basic）**：打開 Basic 即可體驗全屏鍵盤。Pro 模式可通過導航抽屜獲取完整的 Shortcut Hub 體驗。

此致，

Openterface Team | TechxArtisan
