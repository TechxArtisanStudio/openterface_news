---
locale: tw
translationKey: "20260521-kvm-go-keycmd-app-update"
slug: "20260521-kvm-go-keycmd-app-update"
title: "KVM-GO 更新：使用 KeyCmd 0.19 通過手機控制目標機器"
description: "通過 USB 或藍牙配合 KVM-GO 使用 KeyCmd 0.19：支持 KM 基礎版與專業版鍵盤、撰寫模式、遊戲手柄預設、快捷鍵中心及演示控制——無需視頻採集卡即可進行 HID 輸入。"
date: 2026-05-21
channel: software
app: keycmd
product: keymod
topic: ["software", "campaign"]
category: "產品更新"
tags: ["KVM-GO", "KeyCmd", "產品更新", "Android", "USB", "藍牙", "鍵盤", "遊戲手柄", "發佈"]
featured: false
draft: false
author: "Openterface Team | TechxArtisan"
---

大家好，

感謝大家支持 **KVM-GO**，也感謝大家在產品生產和運輸期間的耐心等待。我們深知許多朋友仍在等待硬件到手，因此我們希望在您收到貨的第一天就能擁有完整的體驗。

除了 **Openterface KVM** 應用（可在手機或平板上實現視頻顯示及完整的 KVM 控制）外，我們一直在優化 **KeyCmd**，這是我們用於鍵盤、鼠標、遊戲手柄及快捷鍵輸入的配套應用。**KeyCmd 0.19** 是我們目前推薦配合 KVM-GO 使用的版本。您可以通過 **USB** 或 **藍牙** 配對，並直接在舊版本上覆蓋安裝，您的設置、配置文件和已配對設備都將完整保留。

<img src="https://assets2.openterface.com/images/kvm-go/kvm-go-keycmd-phone-keyboard-setup.webp" alt="手機上的 KeyCmd 鍵盤配合筆記本電腦上的 KVM-GO 使用" style="max-width:720px;width:100%;height:auto" loading="lazy">

以下是 KeyCmd 配合 KVM-GO 的功能介紹、不同場景下的模式選擇，以及如何在目標機器上最大化發揮其效用。

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Welcome-Screen-landscape_1.webp" alt="KeyCmd 歡迎界面" style="max-height:320px;width:auto" loading="lazy">

## 模式及使用方法

### 鍵盤與鼠標（基礎版）

當您只需要一個**簡潔的全屏鍵盤**，且不希望被其他元素干擾時，請開啟此模式。

**適用場景：** 輸入 BIOS 密碼、簡短的 Shell 命令、數字鍵盤輸入，或者在 KVM-GO 顯示屏幕時使用大面積觸控板控制鼠標。

**使用方法：**

- 從側邊欄菜單打開 **KM Basic**。
- 根據需要使用屏幕鍵盤、**數字鍵盤**（橫屏或豎屏）或**觸控板**標籤頁。
- 在**設置**中，您可以選擇**粘滯修飾鍵**（點擊以鎖定 Shift/Ctrl）或**組合修飾鍵**（長按並點擊組合鍵）。

**核心優勢：** 為按鍵提供更大的屏幕空間，界面簡潔，在僅需輸入而非快捷鍵時操作更迅速。

<img src="https://assets2.openterface.com/images/keymod/KM-Basic-Keyboard_1.webp" alt="KM Basic 全屏鍵盤" style="max-height:320px;width:auto" loading="lazy">

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-NumPad-landscape_1.webp" alt="KeyCmd 橫屏下的數字鍵盤" style="max-height:320px;width:auto" loading="lazy">

### 鍵盤與鼠標（專業版）

<img src="https://assets2.openterface.com/images/keymod/KM-Pro-Keyboard-landscape-split_1.webp" alt="KM Pro 橫屏下的分體鍵盤" style="max-height:320px;width:auto" loading="lazy">

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Keyboard-TouchPad-portrait_1.webp" alt="KeyCmd 豎屏下的鍵盤與觸控板" style="max-height:320px;width:auto" loading="lazy">

此模式適用於配合 KVM-GO 對機器進行**日常管理工作**：支持分體鍵盤、輸入法（IME）、快捷鍵中心（Shortcut Hub）工具欄以及**撰寫（Compose）**編輯器。

**適用場景：** 較長時間的文字輸入、宏與快捷鍵操作、在觀察 KVM 畫面的同時向主機發送大段文本或腳本。

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Script-Running-portrait_1.webp" alt="撰寫模式正在發送腳本" style="max-height:320px;width:auto" loading="lazy">

如果您經常需要粘貼命令或腳本，非常推薦嘗試 **撰寫（Compose）** 功能：在手機上編寫、檢查，然後將其模擬為按鍵發送給主機。[YouTube 上的演示短片](https://www.youtube.com/watch?v=_rJF-hTF3_E) 展示了完整的操作流程。

**使用方法：**

- 從側邊欄打開 **KM Pro**。
- 像基礎版一樣使用鍵盤和觸控板，此外頂部的 **快捷鍵中心（Shortcut Hub）** 分類可讓您一鍵執行在配置文件中設置的動作。
- 打開 **撰寫（Compose）** 在手機上起草長文本，核對後點擊**發送**（以 HID 按鍵形式）。長文本發送會顯示進度條。如果文本包含非 ASCII 字符，應用會在發送前發出警告，以便您檢查主機兼容性（對 macOS 特別有用）。

**核心優勢：** 集打字、光標控制、快捷鍵及類似“粘貼”的工作流於一體，無需為目標機器攜帶實體鍵盤。

### 遊戲手柄

當您希望在屏幕上使用專為遊戲或特定應用優化的**虛擬手柄**佈局時，請開啟此模式。

**適用場景：** 模擬器、休閒遊戲，或在 KVM-GO 處理顯示時作為帶有搖桿和按鈕的緊湊控制面板。

**使用方法：**

- 切換到 **Gamepad** 模式。
- 點擊工具欄中的 **Preset** 可**輪換**已保存的佈局。**長按 Preset** 可打開完整列表進行**導入/導出**或**添加模塊**（搖桿、按鈕、觸控板）。
- 建議從內置的 **emu-6** 預設開始嘗試並自行編輯。您可以在一個佈局中添加**多個觸控板**和額外的搖桿模塊。

**核心優勢：** 不受出廠佈局限制；您可以按遊戲或機器保存佈局，並與他人分享預設。

<img src="https://assets2.openterface.com/images/keymod/Gamepad-perset-1_1.webp" alt="遊戲手柄預設佈局" style="max-height:320px;width:auto" loading="lazy">

<img src="https://assets2.openterface.com/images/keymod/Gamepad-perset-minecraft_1.webp" alt="在我的世界中使用遊戲手柄預設" style="max-height:320px;width:auto" loading="lazy">

*為《我的世界 (Minecraft)》定製的預設。*

### 快捷鍵中心 (Shortcut Hub)

這是 KM Pro 內部的**配置文件與快捷鍵**管理中心：包含分類、詳情面板以及您分配到工具欄的快捷鍵。

**適用場景：** 在保持 KVM-GO 視頻連接的同時，執行目標機器上的重複性操作（打開終端、粘貼命令鏈、切換設置）。

**使用方法：**

- 在 KM Pro 中使用 **Default** 配置文件（或您自己的配置）。
- 使用分類標籤頁和詳情界面管理快捷鍵。
- 如果您是第一次接觸配置文件管理，建議運行 **Shortcut Hub 導覽**。

### 演示模式 (Presentation)

一個更簡潔的**演示器風格**控制界面，固定為**豎屏**顯示，以防止旋轉手機時按鈕位置發生跳變。

**適用場景：** 切換幻燈片或對目標機器進行簡單的演示控制。

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Presentation-Google-Slides.webp" alt="演示模式控制 Google Slides" style="max-height:320px;width:auto" loading="lazy">

---

## 語言支持

應用界面現已支持 **11 種語言**。最近新增了：韓語、意大利語、俄語和巴西葡萄牙語。

請前往 **Settings** → **App language** 進行切換。

---

## 獲取 KeyCmd 0.19 並連接 KVM-GO

**下載地址：** [KeyCmd-release-0.19.apk](https://assets2.openterface.com/data/KeyCmd-release-0.19.apk)

如果您已安裝舊版本，直接覆蓋安裝即可，無需清除數據。

**連接 KVM-GO（視頻端口可保持空置）：**

對於 **KVM-GO 的所有三種版本**（HDMI、VGA 和 DP），若僅需 KeyCmd 輸入，您無需將**轉接頭上的視頻接口**接入任何設備。HDMI、VGA 或 DP 端口可以保持空置。請根據以下兩種方案進行連接。

**方案 A —— 藍牙連接（目標機器為 KVM-GO 供電）**

1. 將**黑色短 USB 線**插入 KVM-GO 的 **Target** 端口，另一端接入您要控制的機器。僅此連接即可為 KVM-GO **供電**。
2. 在手機上打開 **KeyCmd** 並通過**藍牙**搜索 KVM-GO。

**方案 B —— USB 連接安卓手機（Host 端口）**

1. 將**橙色長線**從 KVM-GO 的 **Host** 端口連接到您的安卓手機。
2. 打開 **KeyCmd** 並在應用中選擇通過 **USB** 連接。

<img src="https://assets2.openterface.com/images/kvm-go/kvm-go-target-port-laptop-power.webp" alt="KVM-GO Target 端口通過黑色短 USB 線連接到筆記本電腦供電" style="max-height:360px;width:auto" loading="lazy">

如需全屏視頻加輸入，請使用 **Openterface KVM** 查看目標畫面，並使用 **KeyCmd** 進行鍵盤、鼠標和快捷鍵操作。當目標機器已有顯示器而您只需要輸入控制時，僅使用 KeyCmd 即可。

如果您同時擁有兩款設備，本應用也支持通過 USB 連接 **Mini-KVM**。

> **當前仍為測試版。** 遊戲手柄預設和撰寫發送功能在不同主機系統上的表現可能有所不同。如果配合 KVM-GO 使用時出現異常，請帶上截圖、您的 KVM-GO 版本（HDMI / DP / VGA）以及您的預期效果，通過 **Discord** 聯繫我們。

> **源代碼：** 尚未公開。我們計劃在相關項目的眾籌里程碑完成後進行開源。如在獲取 APK 時需要幫助，請在 Discord 中諮詢。

---

## 關於 KeyMod（可選，獨立於 KVM-GO）

我們同時也在開發 **[KeyMod](https://openterface.com/product/keymod/)**，這是一個專為 KeyCmd 應用設計的獨立 USB 和藍牙 HID 適配器。KVM-GO 的支持者無需購買 KeyMod 即可實現上述工作流；目前我們推薦您使用 KeyCmd 配合 KVM-GO。

如果您對非 KVM 場景下的獨立適配器感興趣，可以關注 [Crowd Supply 上的 KeyMod 眾籌項目](https://www.crowdsupply.com/techxartisan/openterface-keymod)。該項目與 KVM-GO 的發貨是分開進行的。

---

## 我們期待您的反饋

如果您有幾分鐘時間，請安裝 **KeyCmd 0.19**，連接到您的 KVM-GO（或 Mini-KVM），並告訴我們哪些地方用起來還不順手。來自機房應急和家庭實驗室（homelab）等實際場景的反饋將直接推動我們下一個版本的更新。

幫助 KVM-GO 項目的實際方式：

- 在 Discord 或您的社區中**分享使用心得**（如 BIOS 設置技巧、藍牙配對經驗、最喜歡的模式等）
- **向同事推薦**，特別是那些管理無頭設備、需要口袋 KVM 的朋友
- **持續發送真實的反饋**，尤其是那些“粗糙”的地方。相比於讚美，這些反饋對產品的塑造作用更大

再次感謝大家支持 KVM-GO，並幫助我們為每一個人打造更好的便攜式 KVM-over-USB 體驗。

順頌商祺，

**Openterface 團隊 | TechxArtisan**
