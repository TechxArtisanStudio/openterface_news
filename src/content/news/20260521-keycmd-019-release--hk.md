---
locale: hk
translationKey: "20260521-keycmd-019-release"
slug: "20260521-keycmd-019-release"
title: "KeyCmd 0.19：應用品牌更名、KM Pro 輸入模式、多語言支持及各模式引導教程"
description: "KeyCmd 0.19 帶來從 KeyMod 到 KeyCmd 的重大品牌更名、全新 KM Pro 輸入模式（支持 Unicode HID 發送）、多語言 UI（韓語、意大利語、俄語、巴西葡語）、各模式交互式引導教程，以及數十項 UX 優化。"
date: 2026-05-21
channel: software
app: keycmd
product: keymod
topic: ["beta", "software"]
category: "Product Updates"
tags: ["KeyCmd", "Product Updates", "Release", "Compose", "i18n", "Android"]
featured: false
draft: false
author: "TechxArtisan Studio"
---

KeyCmd **0.19**（`versionCode` **19**）是一次重大更新，帶來了從 KeyMod 到 KeyCmd 的**應用品牌更名**、支持 Unicode 感知 HID 發送的全新 **KM Pro 輸入模式**、擴展的**多語言 UI**（包括韓語、意大利語、俄語和巴西葡語）、**各模式交互式引導教程**，以及鍵盤、遊戲手柄和演示模式中的數十項 UX 優化。

## 應用品牌更名：KeyMod → KeyCmd

應用顯示名稱現已在所有入口點統一為 **KeyCmd**。此次更名清晰區分了 **KeyMod 硬件**與其配套的 **KeyCmd 應用**。

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Welcome-Screen-landscape.webp" alt="KeyCmd 歡迎頁面" style="max-width:100%; border-radius:8px; margin:16px 0;" loading="lazy">

### 變更內容

- **應用顯示名稱**：啓動器圖標和系統 UI 現在顯示"KeyCmd"
- **歡迎流程**：從 KeyMod 更新為 KeyCmd 的品牌標識和文案
- **CI 產物和 APK 文件名**：使用 **KeyCmd** 前綴
- `applicationId` 仍為 **`com.openterface.keymod`**，確保無縫原地升級

老用户：你的設置、配置文件和已配對設備均已保留，升級過程無縫銜接。

## 鍵盤與鼠標：全屏體驗

KeyCmd 提供全屏鍵盤、觸控板和數字鍵盤體驗 — 針對豎屏和橫屏方向均進行了優化。

<div class="slideshow-container" id="slideshow-keycmd-019-kbm-zh" data-auto-slide="true" data-auto-slide-interval="3000">
  <div class="slideshow-wrapper">
    <div class="slide active">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-Full-Keyboard-landscape.webp" alt="橫屏全屏鍵盤"  loading="lazy">
    </div>
    <div class="slide">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-NumPad-landscape.webp" alt="橫屏數字鍵盤"  loading="lazy">
    </div>
    <div class="slide">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-NumPad-portrait.webp" alt="豎屏數字鍵盤"  loading="lazy">
    </div>
    <div class="slide">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-Keyboard-TouchPad-portrait.webp" alt="豎屏鍵盤和觸控板"  loading="lazy">
    </div>
    <div class="slide">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-km-basic-Touchpad.webp" alt="橫屏觸控板"  loading="lazy">
    </div>
    <div class="slide">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-Remote-Coding-portrait.webp" alt="使用 KeyCmd 遠程編程"  loading="lazy">
    </div>
    <div class="slide">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-Settings-screen.webp" alt="KeyCmd 設置頁面"  loading="lazy">
    </div>
  </div>

  <div class="slideshow-navigation">
    <button class="nav-arrow left" onclick="changeSlide('slideshow-keycmd-019-kbm-zh', -1)">❮</button>
    <div class="slideshow-dots">
      <span class="dot active" onclick="currentSlide('slideshow-keycmd-019-kbm-zh', 1)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm-zh', 2)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm-zh', 3)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm-zh', 4)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm-zh', 5)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm-zh', 6)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm-zh', 7)"></span>
    </div>
    <button class="nav-arrow right" onclick="changeSlide('slideshow-keycmd-019-kbm-zh', 1)">❯</button>
  </div>
</div>

## KM Pro：輸入模式

0.19 版本中最重要的新功能是 KM Pro 中的**輸入模式** — 一個專用的文本編輯器，可讓你輸入長段文字並將其作為 HID 按鍵發送到目標機器。

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Script-Running-portrait.webp" alt="輸入模式中的腳本運行" style="max-width:100%; border-radius:8px; margin:16px 0;" loading="lazy">

<p><strong>Compose &amp; Send demo (YouTube Short)</strong></p>

<iframe width="560" height="315" loading="lazy" src="https://www.youtube.com/embed/_rJF-hTF3_E" title="KeyCmd Compose &amp; Send demo (YouTube Short)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


### 輸入編輯器

- **頂部快捷欄 + 輸入操作行**，包含**清除**和**撤銷/清除**控件
- **草稿保留**：你的文本在子模式切換甚至成功發送後均會保留
- **輸入法集成**：使用手機鍵盤輸入，以乾淨的 HID 按鍵形式發送
- **確定性發送進度**：長 HID 緩衝區的可見進度條，讓你清楚知道發送進度

### 感知 Unicode 的 HID 發送

- **雙模式風險審查**：在發送非 ASCII 文本之前，對話框會警告 Unicode 兼容性並提供檢查/預覽操作
- **macOS Unicode 十六進制流程**：在 macOS 主機上，應用使用 Option+十六進制代碼輸入法輸入擴展字符
- **更安全的發送對話框**：審查頁面會根據緩衝區是純 ASCII 還是包含 Unicode 字符自適應內容
- **字符檢查工具**：發送風險對話框提供**檢查**和**預覽**操作，macOS 主機還包含專用的 **Unicode 十六進制路徑審核**入口

### KM Basic 範圍

在 0.19 版本中，**輸入模式仍然是鍵盤與鼠標 Pro 的功能**。KM Basic 專注於全屏鍵盤、觸控板和數字鍵盤工作流。

## 多語言支持

KeyCmd 現已支持 **11 種應用 UI 語言**。本次更新新增了四種本地化：

- **韓語 (ko)**：完整 UI 翻譯
- **意大利語 (it)**：完整 UI 翻譯
- **俄語 (ru)**：完整 UI 翻譯
- **巴西葡萄牙語 (pt-BR)**：完整 UI 翻譯

加上現有的英語、簡體中文、繁體中文、日語、法語、德語和西班牙語，KeyCmd 現已覆蓋我們絕大部分全球用户羣體。

### 變更內容

- **設置中的語言選擇器**，使用標準應用語言名稱
- **藍牙標題**和**按鍵點擊預覽**已本地化
- **發佈 lint**修復了所有語言中輸入警告標籤的問題

## 交互式引導教程

每個模式現在都有**內置的交互式引導教程**，逐步帶你瞭解其功能。

### 可用教程

- **快捷中心教程**：打開默認配置，涵蓋詳情 UI、分類標籤和快捷方式管理
- **遊戲手柄教程**：解釋遊戲手柄佈局、模塊管理和預設系統
- **KM Pro 教程**：涵蓋輸入模式、快捷面板和 Pro 專屬功能
- **KM Basic 教程**：解釋全屏鍵盤、修飾鍵按住滑動和數字鍵盤

### 教程功能

- **各模式獨立引導**：每個模式都有量身定製的教程
- **回放面板**：隨時通過**模式引導**按鈕（連接狀態圖標左側的圖標）重訪任何教程
- **i18n 支持**：教程內容已本地化為全部應用語言
- **橫屏優化**：底部面板佈局在橫屏方向下正確適配

## UX 優化

### 鍵盤

- **按鍵點擊預覽**：在點擊之前就能看到將要發送的內容。通過設置啓用。默認啓用。
- **快速點擊 HID 修復**：改進了鍵盤點擊釋放時間和合並釋放事件，實現更快的打字體驗
- **替代字符觸摸處理**：長按 `a` 鍵現在顯示替代字符 ¥（上）、£（左）、€（右），並帶有改進的視覺反饋
- **修飾鍵按住滑動**：在 KM Basic/Pro 教程中，新增步驟教授按住滑動手勢以快速訪問修飾鍵

### 遊戲手柄

- **編輯會話欄已移除**：更簡潔的遊戲手柄界面，去除了舊的編輯會話工具欄
- **遊戲手柄界面和教程**：全新視覺打磨和集成的引導教程
- **模式引導圖標**：放置在連接狀態圖標左側，方便訪問

### 演示模式

- **豎屏鎖定**：演示模式被限制為豎屏和反向豎屏方向，以確保穩定的演示控制

### UI 與主題

- **強調色色板**：將主題色族選擇器替換為可視化強調色色板，更方便顏色選擇
- **UI 強調色對齊**：所有 UI 強調色現在跟隨主題色族（而非舊版主色）
- **頭部右側集羣**：改進了主應用和 KM Basic 界面中連接圖標的尺寸
- **輸入發送按鈕樣式**：對齊了亮色模式下非 ASCII 發送按鈕的外觀

### 設置

- **設置重組**：標準應用語言名稱；重命名了模擬器安裝腳本以提高清晰度
- **開發者輔助腳本**：重命名以更清晰地標識設備和操作命名
- **FAQ 文檔**：更新了 `docs/FAQ.md` 以反映當前應用行為

## 真實使用場景

### 遠程編程

KeyCmd 不僅僅用於服務器管理。開發者用它進行**遠程編程會話** — 從手機或平板控制無頭開發機，配備完整的鍵盤、觸控板和數字鍵盤支持。

## 不變的部分

**鍵盤與鼠標 Pro**（包含快捷中心條、分割佈局和豐富的輸入法行為的複合模式）依然是之前的完整功能體驗。所有現有配置、預設和已配對設備均已保留。

## 獲取更新

**此版本 (0.19)：** [KeyCmd-release-0.19.apk](https://assets2.openterface.com/data/KeyCmd-release-0.19.apk)

> **Beta 提示：** KeyCmd Android 應用仍處於活躍 Beta 階段。源代碼倉庫尚未公開 — 我們計劃在眾籌活動成功後開源。如果你是 Beta 測試者並需要最新的 APK，請在 Discord 上聯繫我們，我們會為你提供構建版本。

現有安裝可原地升級。

## 兼容 Mini-KVM 和 KVM-Go

KeyCmd 應用不僅限於 KeyMod 硬件。現有 Openterface 用户也可以試用：

- **KVM-Go**：通過**藍牙**或 **USB** 連接
- **Mini-KVM**：通過 **USB** 連接

## 升級説明

- **品牌更名**：應用名稱從 KeyMod 更改為 KeyCmd。你的數據已保留。
- **輸入模式**：鍵盤與鼠標 Pro 新增功能。
- **引導教程**：在任何模式下點擊引導圖標（連接狀態圖標左側）即可開始交互式教程。
- **語言**：前往設置更改應用語言。KeyCmd 現支持 11 種應用 UI 語言。

此致，

Openterface Team | TechxArtisan
