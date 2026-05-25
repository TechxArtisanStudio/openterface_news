---
locale: tw
translationKey: "240823-overcoming-hurdles"
slug: "240823-overcoming-hurdles"
title: "克服障礙：進度更新和新時間表"
description: "重要的Openterface Mini-KVM更新：CE認證完成，生產進行中，新ETA一月中旬。硬件V1.9最終確定，包含擴展引腳、Android應用開發、改進包裝和多語言手冊進行中。"
date: 2024-08-22
channel: product
product: minikvm
topic: ["software", "campaign"]
category: "Product Updates"
featured: false
draft: false
author: "Openterface Team"
---

大家好，

希望大家都好。距離我們上次更新已經有一段時間了。我希望我能說Openterface一切順利，但我們遇到了一些障礙，會延遲我們的交付時間表。雖然這不是我們預期的，但我們正在正面應對這些挑戰，並取得了穩定的進展，有很多好消息要分享。這篇文章大約**7分鐘閱讀**，所以讓我們深入瞭解細節，這樣你們就知道事情的確切狀況和接下來會發生什麼。

## 法規、生產和質量

在我們開始生產之前，我們必須根據法規通過必要的質量測試，特別是CE認證。由於我們的工具包版本不僅包括Mini-KVM，還包括幾個配件，每個部分都需要進行CE測試。這些測試比預期的時間更長（事實證明電纜可能相當挑剔），但好消息是**我們已經通過了Mini-KVM及其所有組件的CE認證！**下面是我們所有部件認證的概述：Mini-KVM、HDMI電纜、橙色Type-C電纜、黑色短Type-C電纜和VGA2HDMI電纜。有了認證在手，我們的生產時間表現在是確定的，我們的製造商**目前正在生產所有部件**，正如我所說。

![240823-0](https://www.crowdsupply.com/img/fcb5/db59e179-2413-4d57-8462-2285c007fcb5/openterface-240823-0_jpg_gallery-lg.jpg)
*UKCA和CE要求對我們的電子產品是相同的，CE還涵蓋RoHS合規性。*

兩週前，我們訪問了我們的一個製造商，在他們將橙色電纜運給我們之前，培訓他們的生產線經理進行質量控制。現在，所有的橙色電纜都已經生產完成，正坐在我們工作室的一個角落裡。
![240823-1](https://www.crowdsupply.com/img/28dc/34844b54-0e02-414d-b58b-d40e8abe28dc/openterface-240823-1_jpg_gallery-lg.jpg)
*Kevin和Shawn正在解釋測試方法，以確保橙色電纜與我們的Openterface Mini-KVM正常工作。*

我們將在本週進行同樣的任務，為其他部件的生產前線培訓QA。以下是額外電纜的樣品。
![240823-2](https://www.crowdsupply.com/img/e703/abb8ffa5-eb85-4eb9-b5f8-d8a3d349e703/openterface-240823-2_jpg_md-xl.jpg)
*自豪地標記著我們的TechxArtisan標誌，這些是HDMI電纜、短Type-C電纜和VGA-to-HDMI電纜的樣品。*

我們預計其他部件和Mini-KVM很快就會從我們的製造商那裡到達，屆時我們將仔細檢查每個組件的質量，並在發貨前在我們的工作室正確包裝它們。換句話說，**我們的團隊將親自確保質量**，然後它才會到達你們的手中。

## 發貨、潛在延遲和新ETA

**當前的不確定性在於發貨過程**。在調查了幾家運輸公司後，我們發現運輸需要額外的時間，因為我們可能會在到達Crowd Supply的倉庫之前通過倉庫轉移包裹。我們仍在爭論是選擇海運還是空運——請再給我們幾天時間來安排。

清關是另一個可能造成意外延遲的潛在障礙。一旦我們的產品到達Crowd Supply在美國的倉庫，它們將根據每個訂單在全球範圍內發貨一到兩週。對於美國以外的支持者，個別包裹仍需要通過全球運輸和目的地國家的清關。

考慮到當前情況並增加一些緩衝時間，我仍然謹慎樂觀地認為我們將在今年年底前完成交付，**新的ETA為一月中旬**。對於造成的不便，我深表歉意，並感謝你們在這次變化中的支持和耐心。

## 最終確定的硬件V1.9

正如你們可能從我們之前的[Reddit帖子](https://www.reddit.com/r/Openterface_miniKVM/comments/1e25pco/openterface_minikvm_v19_with_pins_for_more/)中瞭解到的，我們決定**將硬件升級到V1.9**，包括一套可破解的擴展引腳。這不是眾籌活動原始計劃的一部分，但我們相信它顯著增強了硬件的**更廣泛使用潛力**。

![240823-3](https://www.crowdsupply.com/img/77d7/09a9d0e5-3065-4f3e-8b61-bae66b5c77d7/openterface-240823-3_jpg_md-xl.jpg)
*VCC、GND、Target D+、Target D-、Host D+和Host D-引腳——其中'D'代表USB數據。*

一個關鍵動機是**能夠在軟件級別切換USB開關**。為什麼這很重要？在我們的路線圖上，我們**旨在支持KVM-over-IP解決方案**，如VNC，在未來。這個想法是將本地KVM控制與VNC協議匹配，允許用戶通過主機計算機遠程控制目標計算機。在這種遠程場景中，用戶切換USB端口的能力是必不可少的，特別是當主機和目標之間需要文件傳輸時。

**擴展引腳還為更多可能性打開了大門**，如與iPadOS集成、ATX控制、網絡橋接和音頻旁路。雖然我不會在這裡深入所有細節，但我鼓勵你們加入我們的Openterface社區，與我們進一步討論。

這個硬件升級可能會將我們的Openterface解決方案擴展到通過IP操作，幷包含更高級的功能，同時仍然保持其作為即插即用KVM-over-USB工具的核心優勢——非常適合在不確定的IT環境中導航的IT專業人士，如不熟悉的數據中心。

我很高興地報告V1.9已經通過了我們的內部基本測試，並將作為我們所有支持者的正式版本最終確定。然而，這個硬件升級需要進一步測試，基於這些擴展引腳的任何開發都將是實驗性的，可能會有錯誤。這就是你們可以貢獻的地方。我們依靠開源社區幫助我們共同改進Openterface。

## 更多軟件更新

在軟件方面，我們正在取得令人興奮的進展。我們現在正在深入**Openterface Android應用**！查看這個[推文](https://x.com/TechxArtisan/status/1825460088922071398)的早期演示，顯示流暢的KVM控制、鼠標移動和點擊操作。更多功能即將推出，一如既往，一旦我們進一步完善代碼，**這個應用也將在我們的GitHub倉庫[Openterface_Android](https://github.com/TechxArtisanStudio/Openterface_Android)上開源**。
![240823-4](https://www.crowdsupply.com/img/7007/b192f260-1e1f-4dab-905b-fb0a6d927007/openterface-240823-4_jpg_md-xl.jpg)
*僅用我們的指尖從Android平板電腦KVM控制Linux計算機。太好了！*

我們的QT版本剛剛得到了一個方便的更新——你現在可以[將文本從主機傳輸到目標](https://x.com/TechxArtisan/status/1825919721960780131)！所以現在這個功能在macOS、Windows和Linux主機應用上都受支持。

此外，我們還計劃添加一個有趣的功能——[自動鼠標移動以防止你的目標計算機休眠](https://x.com/TechxArtisan/status/1825471186668847241)。我們應該選擇在屏幕上彈跳的乒乓球還是經典的DVD屏幕保護程序效果？投票並評論[推文](https://x.com/TechxArtisan/status/1825470086800691459)😃

## 包裝設計、標籤和手冊

我們一直在[嘗試各種模型和包裝設計](https://www.reddit.com/r/Openterface_miniKVM/comments/1elm4vq/almost_ready_to_finalize_our_package_design/)，以在幾個關鍵因素之間找到完美平衡：

- 選擇足夠堅固的材料來保護產品及其部件在運輸過程中，
- 創建信息豐富的標籤，幫助用戶一目瞭然地理解產品，
- 確保符合法規，
- 使包裝在視覺上吸引人，
- 通過儘可能減少塑料使用來環保。

此外，我們對舊工具包包進行了幾項改進，包括：

- 更大的存儲空間，
- 時尚的橙色拉鏈，
- 升級的外部和內部材料，
- 超級有彈性的網眼口袋。

我們選擇這種材料是因為它在預算友好、觸感愉悅和足夠耐用以保護內部物品之間達到了理想的平衡。**我們相信你們會喜歡它**。

![240823-5](https://www.crowdsupply.com/img/099a/75e16f52-bd0c-4652-af27-08caf448099a/openterface-240823-5_jpg_md-xl.jpg)

我們還在更新鋁製外殼上的標籤，使其儘可能信息豐富和視覺吸引人。我們希望這些增強功能將改善你們的用戶體驗，並使開始使用Openterface變得更容易。

![240823-6](https://www.crowdsupply.com/img/94d8/441a5757-2d6a-4c79-885b-7b5b3a7094d8/openterface-240823-6_jpg_md-xl.jpg)

我們正在最終確定Openterface手冊，它將提供英語、德語、法語、日語和中文版本。如果我們錯過了你們的語言，我們深表歉意——我們的盒子不是TARDIS大小的（神秘博士的警亭）！但我們會盡力在我們的網站上添加更多翻譯。

![240823-7](https://www.crowdsupply.com/img/e2d9/2e5a2086-20f0-47ec-a27b-288d10d0e2d9/openterface-240823-7_jpg_md-xl.jpg)

## 社區語言審查

我一直在使用ChatGPT來協助翻譯，但它有時可能會在措辭和用詞上偏離目標。如果不太麻煩的話，我非常感謝你們在審查其他語言內容方面的任何幫助，特別是對於我們即將最終確定的印刷材料。我已經更新了我們在GitHub文件夾[product-printed-materials](https://github.com/TechxArtisanStudio/Openterface/tree/main/product-printed-materials)中包裝的所有文本內容，你們可以在那裡審查並提交任何改進。你們也可以直接私信我。謝謝！

## 最終評論和持續進展

我們再次為延遲和產品ETA的變化道歉。感謝你們的耐心和堅持與我們在一起——我們正在努力盡快將產品送到你們手中！一旦我們的發貨安排好了，我會立即更新你們。更多更新即將到來，所以請加入我們的Openterface社區並保持關注！

乾杯，

Billy Wang  
產品經理  
Openterface團隊 | TechxArtisan
