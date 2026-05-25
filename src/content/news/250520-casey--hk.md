---
locale: hk
translationKey: "250520-casey"
slug: "250520-Casey"
title: "iPad KVM：iOS與底層設備之間的創新橋接"
description: "瞭解Casey Howard如何利用樹莓派作為橋接器創建創新的iPad KVM解決方案，實現從iPad直接控制設備的BIOS級別。瞭解這個結合樹莓派gadget模式、VNC和Openterface Mini-KVM的無頭設備管理DIY項目。"
date: 2025-05-20
channel: events
eventType: contest
topic: ["software", "campaign", "event"]
category: "Product Updates"
featured: false
draft: false
author: "Openterface Team"
---

Casey Howard的創新"iPad KVM"項目展示了卓越的問題解決能力。作為肯塔基大學計算機科學與數學專業的學生，該校為每位學生配備iPad，Casey面臨一個挑戰：直接從iPad訪問和管理底層設備。在發現Openterface Mini-KVM缺乏原生iOS連接後，他們構建了自己的橋接方案。

![Casey iPad KVM聊天採訪的YouTube截圖](https://assets.openterface.com/images/blog/Casey-iPad-KVM-chat.webp)

## 挑戰

-   iOS鎖定USB，阻止Arduino編程、BIOS級別控制和無頭服務器訪問
-   Casey需要一種方式將iPad用作從Arduino到Ubuntu服務器的BIOS級別控制台，無需Wi-Fi、外部電源或笨重的外設

## 解決方案：樹莓派橋接

該項目的核心創新使用樹莓派的"gadget模式"作為雙用途橋接：

1. **供電**
    - Pi的USB-C端口配置為直接從iPad獲取5V電源
2. **傳輸IP流量**
    - 內部網絡橋接通過同一USB-C線纜傳輸IP數據包
3. **提供VNC服務**
    - Pi上的VNC服務器允許iPad直接遠程桌面，無需Wi-Fi
4. **驅動KVM**
    - Pi上的OpenterfaceQT與Mini-KVM硬件接口
    - iPad的VNC會話流式傳輸視頻並將鍵盤/鼠標事件發送到任何目標計算機

## 實現細節

1. **樹莓派配置**

    - 在_/boot/config.txt_和_/etc/modules_中啓用gadget模式
    - 配置USB-C進行5V電源傳輸
    - 建立靜態IP（10.55.0.1）的網絡橋接

2. **遠程桌面設置**

    - 在Pi上安裝和配置_x11vnc_
    - 在橋接接口上自動啓動VNC服務器
    - 在iPad上，使用VNC客户端（如RNC Viewer）連接到`10.55.0.1`或`pi.local`

3. **Mini-KVM集成**

    - 為ARM架構編譯OpenterfaceQT
    - 將Mini-KVM插入Pi的USB和HDMI端口
    - 通過Pi的USB-C端口供電

4. **操作**
    - 使用單根USB-C線纜將Pi連接到iPad
    - 啓動VNC客户端並進行身份驗證
    - 在Pi上打開Mini-KVM界面
    - 流式傳輸目標設備的視頻源並實時控制

## 系統架構

![獨立KVM設置](https://assets.openterface.com/images/blog/Casey-Setup-with-Pi-and-minikvm.webp)

### 組件

-   **iPad（主機）**：VNC客户端和電源
-   **樹莓派5**：USB gadget、網絡橋接和OpenterfaceQT主機
-   **Openterface Mini-KVM**：目標計算機的硬件接口
-   **連接**：USB-C（電源+網絡）、HDMI和USB-A線纜

## 影響和可訪問性

僅需iPad、Pi和Mini-KVM，Casey將日常平板電腦轉變為BIOS級別控制台，無需額外設備或網絡。此解決方案完全依靠iPad電池供電運行，無需外部電源或互聯網，在野外使用時保持高度便攜性。Casey的詳細文檔和構建腳本使任何擁有樹莓派和iPad的人都能使用這種方法。

特別感謝Casey Howard，我們2024年USB-KVM DIY挑戰賽的**硬件英雄**獲獎者，他們擴展了Mini-KVM的功能，並在原生iOS支持可用之前提供了優雅的解決方案。瞭解更多信息：

-   [Crowd Supply上的競賽](https://www.crowdsupply.com/techxartisan/usb-kvm-diy-challenge-2024)
-   [GitHub: iPad-KVM](https://github.com/FireFreexe/iPad-KVM)
