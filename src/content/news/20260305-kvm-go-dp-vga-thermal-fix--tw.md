---
locale: tw
translationKey: "20260305-kvm-go-dp-vga-thermal-fix"
slug: "20260305-kvm-go-dp-vga-thermal-fix"
title: "KVM-GO DP/VGA 散熱修復 – 工程日誌"
description: "深入探討 KVM-GO 的 DP 與 VGA 發熱問題，詳述測量數據、PCB 改動及機械散熱方案，在不增加風扇的前提下解決過熱。"
date: 2026-03-05
channel: product
product: kvm-go
topic: ["event"]
category: "產品更新"
tags: ["KVM-GO", "散熱", "工程日誌", "產品設計"]
featured: false
draft: false
author: "TechxArtisan Studio"
---

## 記錄 1：意識到這不再是「正常溫熱」的時刻
在 KVM-GO 開發中期，我們觀察到發熱行為與常見的「小設備會有點熱」預期不符。問題只出現在兩個型號上：DisplayPort（DP）和 VGA。HDMI 型號的溫度表現符合預期。

最初症狀很直觀：外殼溫度比預期更早達到令人不適的程度。讓我們擔心的不是舒適度，而是內部溫度可能已經遠超消費級元器件長期耐受的上限。


---

## 記錄 2：為什麼只有 DP 和 VGA
在對各版本的視頻路徑設計進行梳理後，我們發現了規律。

- HDMI：單級轉換（HDMI 轉 USB 視頻），使用 MS2130S
- DP：雙芯片鏈路（IT6563 + MS2130S）實現 DP 轉 USB 視頻
- VGA：雙芯片鏈路（MS9288C + MS2109S）實現 VGA 轉 USB 視頻

雙芯片不只是多了幾個器件，還帶來了額外的功耗和局部熱點。在 KVM-GO 這樣的尺寸下，這些熱點幾乎沒有擴散空間。

其次是表面積約束。KVM-GO 把體積壓到了極限，PCB 面積和有效散熱面積都非常有限。

最後是佈局帶來的取捨。把兩顆發熱芯片都放在同一側在散熱上很理想，但引腳排布和高速佈線要求讓這種做法很難實現。把一顆 chip 放在更「靠內」的位置能簡化佈線和信號完整性，但熱量會積在殼體內部。

![Original-PCB-layout](https://assets2.openterface.com/images/Original-PCB-layout.webp)

*原始 PCB 佈局*

![original-Wiring](https://assets2.openterface.com/images/original-Wiring.webp)

*原始高速佈線*

![KVM-Go-tructure](https://assets2.openterface.com/images/KVM-Go-tructure.webp)


*KVM-GO 內部堆疊結構*

---

## 記錄 3：測量真正重要的指標——內部 vs 外部溫度
我們決定不再猜測，而是同時測量內外部溫度。我們設置了外部和內部監測點，然後進行了長時間負載測試。

結果讓人擔心，尤其是 VGA 型號。

在約一小時的持續運行後：
- 外表面達到約 65°C
- 內部溫度峰值約 115°C

許多消費級元器件的額定最高工作溫度約為 85°C（具體取決於型號和等級）。三位數的內部溫度意味著我們面對的不僅是「摸起來燙」的問題，而是可能導致產品壽命縮短或在不同環境下出現不可預測故障的情況。 

![Original-emperature-test](https://assets2.openterface.com/images/Original-emperature-test.webp)

*基線溫度測試（內部 vs 外部）*

---

## 記錄 4：快速 sanity check——強制風冷有效（但這不是產品方案）
在重新設計任何東西之前，我們想先做一個快速驗證：如果更快地散走熱量，溫度能否顯著下降？

我們用 DIY 風扇做了簡單的強制風冷測試。結果符合物理定律：溫度明顯下降，測試中約降了 15°C。這確認了問題是散熱瓶頸，而非測量誤差或軟件行為。

同時這也說明：風扇與我們正在做的產品形態不符。KVM-GO 需要保持緊湊、靜音、一體化。因此強制風冷只作為診斷手段，而不是最終方案。

![Fan-1png](https://assets2.openterface.com/images/Fan-1png.webp)

*DIY 風扇散熱 setup*

![Fan-2](https://assets2.openterface.com/images/Fan-2.webp)

*DIY 風扇散熱，另一視角*

![Temperature-test-fan](https://assets2.openterface.com/images/Temperature-test-fan.webp)

*風扇散熱下的溫度測試*

---

## 記錄 5：修復步驟 1——將熱源外移（同時保持信號完整性）
第一個實質性的改動在 PCB 上。我們儘可能把兩顆發熱芯片佈置在更靠近外殼的一側。

這並不是「隨便挪一下」那麼簡單。DP 和 VGA 的佈線約束很嚴，必須保證高速信號尤其是差分對乾淨，這是不可妥協的。把兩顆芯片都往外放讓佈線更難，我們必須小心翼翼，避免影響信號完整性。

我們對比了新舊佈局和佈線，並打樣驗證了硬件行為。 

![New-PCB-ayout](https://assets2.openterface.com/images/New-PCB-ayout.webp)

*修改後的 PCB 佈局（芯片外移）*

![Wiring-layout-modification](https://assets2.openterface.com/images/Wiring-layout-modification.webp)

*修改後的佈線（第一輪）*

![Wiring-layout-modification-2](https://assets2.openterface.com/images/Wiring-layout-modification-2.webp)

*修改後的佈線（關鍵區域）*

![PCB-ayout-modifications](https://assets2.openterface.com/images/PCB-ayout-modifications.webp)

*修改後的 PCB，用於驗證*

### 步驟 1 之後的變化
散熱有所改善，但我們發現了一個次級問題：熱量仍未能有效傳遞到外殼。部分區域溫度偏高，熱成像顯示外殼並未起到足夠的熱 spread 作用。

步驟 1 降低了內部熱點強度，但沒有徹底打通導熱路徑。  

![Modified-fever-symptoms](https://assets2.openterface.com/images/Modified-fever-symptoms.webp)

*佈局更改後的溫度（步驟 1）*

![Casing-temperature-test](https://assets2.openterface.com/images/Casing-temperature-test.webp)

*外殼傳熱檢查（步驟 1 後）*

---

## 記錄 6：修復步驟 2——建立真正的導熱路徑（CNC 鋁塊 + 導熱界面材料）
到了這一步，我們把外殼視為散熱系統的一部分，而不只是外罩。

我們增加了：
- 上下 PCB 堆疊上的 CNC 鋁塊
- 導熱界面材料（導熱硅脂或導熱墊），將熱量傳導到鋁塊再傳導到鋁製外殼

目標很直接：增大有效散熱面積，並建立穩定、低熱阻的路徑，讓熱量到達外殼後安全散出。

![cnc](https://assets2.openterface.com/images/cnc.webp)

*CNC 導熱塊（步驟 2）*

![cnc2](https://assets2.openterface.com/images/cnc2.webp)

*CNC 塊安裝細節*

### 步驟 2 後的最終結果
添加導熱路徑後：
- 外殼溫度穩定在約 65°C
- 內部溫度降至約 55°C

熱成像顯示了我們希望看到的效果：熱量分佈更均勻，外殼終於參與到散熱中，而不再讓熱量在內部累積。 

![Temperature-measurement-after-adding-CNC](https://assets2.openterface.com/images/Temperature-measurement-after-adding-CNC.webp)

*添加 CNC 導熱後的溫度（步驟 2）*

![CNC-machining](https://assets2.openterface.com/images/CNC-machining.webp)

*CNC 導熱後的外殼溫度*

---

## 結語
這次問題的啟示不僅是「DP 和 VGA 更熱」。多級轉換帶來更高功耗是預期之內的，真正的收穫在於：在這樣小的設備中，熱量往哪裡去和產生了多少熱量同樣重要。

步驟 1（佈局）降低了內部熱點強度。  
步驟 2（機械導熱路徑）讓解決方案穩定且符合產品形態。

沒有風扇，也不需要用戶特殊操作，有的只是可預測的、穩定的設計。
