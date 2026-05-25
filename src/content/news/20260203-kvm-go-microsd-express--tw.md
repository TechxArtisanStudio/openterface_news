---
locale: tw
translationKey: "20260203-kvm-go-microsd-express"
slug: "20260203-kvm-go-microsd-express"
title: "KVM-GO 上的 microSD EXPRESS：兼容性測試與實際傳輸速度"
description: "KVM-GO microSD EXPRESS 兼容性測試，使用 SanDisk 128GB 卡。確認：檢測和讀寫正常。實際速度約 30 MB/s 寫入、20 MB/s 讀取，受 USB 2.0 橋接限制。UHS-I 卡足以滿足 KVM-GO 的 microSD 路徑需求。"
date: 2026-02-03
channel: product
product: kvm-go
topic: ["production"]
category: "產品更新"
tags: ["KVM-GO", "產品更新", "microSD", "存儲", "兼容性", "性能"]
featured: false
draft: false
author: "Openterface 團隊 | TechxArtisan"
---

有社區成員詢問 KVM-GO 是否支持 microSD EXPRESS 卡。我們沒有猜測，而是拿了一張真實的 microSD EXPRESS 卡進行了簡單的兼容性和速度測試。

---

## 測試內容

- **測試卡：** SanDisk microSD EXPRESS 128GB  

![測試用卡：SanDisk microSD EXPRESS 128GB。](https://assets2.openterface.com/images/blog/SD-card.webp)  
*測試用卡：SanDisk microSD EXPRESS 128GB。*

- **目標：** 確認基本兼容性（檢測 + 讀寫）並測量通過 KVM-GO microSD 路徑的實際傳輸速度。

---

## 測試環境

這是一次簡單的「實際使用」風格傳輸測試：

1. 將 microSD EXPRESS 卡插入 KVM-GO 的 microSD 卡槽。  
2. 在 Windows PC 上，將大文件夾/文件集複製到 microSD 卡以觀察持續寫入速度。  
3. 將數據從 microSD 卡複製回 PC 以觀察持續讀取速度。  
4. 我們使用系統自帶的文件複製，並記錄 Windows 傳輸對話框中顯示的速度。

![測試環境：將 microSD EXPRESS 插入 KVM-GO 進行讀寫檢查。](https://assets2.openterface.com/images/blog/plug.webp)  
*測試環境：將 microSD EXPRESS 插入 KVM-GO 進行讀寫檢查。*

---

## 兼容性結果

KVM-GO 可以正常識別 SanDisk microSD EXPRESS 卡。  
讀寫均無問題。

所以如果你的問題只是「能用嗎？」，答案是 **能**。

---

## 傳輸速度結果

儘管是 microSD EXPRESS 卡，但此處獲得的傳輸速度取決於 KVM-GO 內部的存儲路徑。

在我們的測試中，我們觀察到大約：

- **寫入速度：** 約 **30 MB/s** 

![寫入測試（PC → microSD）：文件複製期間觀察到約 28 MB/s。](https://assets2.openterface.com/images/blog/Performance.webp) 
*寫入測試（PC → microSD）：文件複製期間觀察到約 28 MB/s。*

- **讀取速度：** 約 **20 MB/s**

![讀取測試（microSD → PC）：文件複製期間觀察到約 22 MB/s。](https://assets2.openterface.com/images/blog/Performance2.webp)  
*讀取測試（microSD → PC）：文件複製期間觀察到約 22 MB/s。*

這些數字可能因文件大小、大小文件混合、系統緩存行為和工作負載而異，但這是我們一致觀察到的範圍。

---

## 為什麼達不到 Express 速度

microSD EXPRESS 卡在合適的配置下可以達到更高性能，但 KVM-GO 的 microSD 存儲路徑受限於用於 microSD 轉 USB 存儲的內部橋接/控制器。

在 KVM-GO 中，該橋接工作在 USB 2.0。USB 2.0 通常描述為 480 Mbps（理論值），但在實際文件傳輸中，由於協議開銷和實現細節，持續吞吐量通常要低得多。

![USB 2.0 存儲路徑參考。](https://assets2.openterface.com/images/blog/USB.webp)
*microSD 存儲橋接為 USB 2.0（理論 480 Mbps）。實際文件傳輸吞吐量較低。*

這就是為什麼 microSD EXPRESS 在 KVM-GO 上可以正常工作，但不應期望通過此 microSD 路徑獲得 Express 級速度。

---

## 實用要點

1. **microSD EXPRESS 與 KVM-GO 兼容**  
   可正常檢測，讀寫正常。

2. **通過 KVM-GO 的 microSD 路徑無法達到 Express 級速度**  
   瓶頸是內部 USB 2.0 存儲橋接，而非卡本身。

3. **買什麼卡合適**  
   如果主要購買用於 KVM-GO microSD 功能的卡，一張好的 UHS-I microSD 卡通常就足夠了，因為在此場景下接口是限制因素。

4. **如果需要 Express 速度**  
   使用獨立的 microSD EXPRESS 讀卡器連接更快的 USB 接口（與 KVM-GO 分開）。

---

## 如需我們測試其他卡

如果你有特別關心的 microSD EXPRESS 型號（品牌 + 容量 + 型號），可以告訴我們，我們可以進行相同測試並添加結果。
