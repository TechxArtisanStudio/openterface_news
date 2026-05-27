---
locale: tr
translationKey: "20251218-macos-mouse-speed"
slug: "20251218-macos-mouse-speed"
title: "MacOS'ta Openterface Mini-KVM Fare Hızı ve Oyun Performansı"
description: "MacOS'ta Openterface Mini-KVM'nin kapsamlı oyun odaklı fare performans testi. Optimum oyun yapılandırması için Mutlak, Göreli Olay ve Göreli HID fare modlarını 9600 ve 115200 baud hızlarıyla karşılaştırın."
date: 2025-12-18
channel: software
app: kvm
topic: ["shipping", "production", "software", "analysis"]
category: "Product Updates"
featured: false
draft: false
author: "Openterface"
---
### Oyun Odaklı Fare Davranışı Analizi

Bu makale, **oyunla ilgili fare davranışı**, seri baud hızı sınırlamaları ve önerilen yapılandırmalara odaklanarak **macOS'ta Openterface Mini-KVM**'nin gerçek dünyadaki fare performans testlerini özetlemektedir.

<blockquote class = "twitter-tweet" data-media-max-width = "560"><p lang = "en" dir = "ltr">Oyun, Openterface KVM'lerin ana hedefi değildir, ancak onları USB üzerinden KVM'nin sınırlarını keşfetmeye zorladık. MacOS'ta 115200 baud + Relative HID, en iyi fare gecikmesini sağlar. Kurulum ve hata ayıklama için tasarlandı, performansı daha da artıracak şekilde ayarlandı. <a href="https://t.co/ianurD9ArL">pic.twitter.com/ianurD9ArL</a></p>&mdash; TechxArtisan (@TechxArtisan) <a href="https://twitter.com/TechxArtisan/status/2003418343806742992?ref_src=twsrc%5Etfw">23 Aralık 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---

## 1. Yazılımı ve Ortamı Test Edin

### Yazılım

* **Ana Bilgisayar Uygulaması:**
  **macOS v1.21 için Openerface** *(Devam Eden Çalışmalar)*

* **Hedef Taraflı Ölçüm Aracı:**
  Hedef sistemdeki yüksek frekanslı fare girişini ve olay işleme oranlarını doğru bir şekilde ölçmek için geliştirilmiş **özel şirket içi test uygulaması**.

> ⚠️V1.21 hala aktif olarak geliştirilme aşamasında olduğundan, gelecek sürümlerde bazı davranışlar ve performans özellikleri iyileşebilir.

---

### Test Koşulları: Fare Hızının Kısılması

**Testlerin hiçbirinde fare hızı azaltma veya yapay hız sınırlaması uygulanmadı**.

Fare girişi **yerel cihaz hızında** yakalanıp iletildi ve yalnızca aşağıdakilere tabidir:

* Fare donanımı yoklama oranı
* Seçilen fare modu (Mutlak / Göreli Olay / Göreli HID)
* Seri baud hızı
* Hedef işletim sistemi fare girişi işleme

---

## 2. Fare Veri Çıkışı Temelleri

Mini-KVM yoluyla iletilen her fare hareketi olayı aşağıdakilerden oluşur:

''''
11 bayt = 88 bit
''''

### Teorik Seri Verim

| Baud Hızı | Maksimum Etkinlik / Saniye |
| --------- | ------------------- |
| 9600 | ~109 olay/sn |
| 115200 | ~1309 olay/s |

⚠️Bu değerler **üst teorik sınırları** temsil etmektedir.
Gerçek performans şunlardan etkilenir:

* Ana bilgisayar fare yoklama oranı
* Fare modu (Mutlak ve Göreli)
* macOS giriş etkinliği planlaması
* Seri ara belleğe alma ve ürün yazılımı yönetimi
* **Algılanan yanıt verme hızını önemli ölçüde etkileyebilecek hedef işletim sistemi fare yoklama oranı** (örneğin, bazı Linux dağıtımlarında düşük varsayılan yoklama oranları)

---

## 3. Test Sonuçları

---

### A. Mutlak Fare Modu (9600 ve 115200 Baud)

| Fare Türü | Baud Hızı | Ana Bilgisayar Hızı (Hz) | Hedef Hız (Hz) | Notlar |
| ---------- | --------- | -------------- | ---------------- | -------------------------------------------------------------------- |
| Bluetooth | 9600 | ~125 | ~75 | Seri bant genişliği doymuş; giriş sıraya alındı, hareket gecikti |
| kablolu | 9600 | ~150 | ~75 | Seri bant genişliği doymuş; giriş sıraya alındı, hareket gecikti |
| Oyun | 9600 | ~1000 | ~75 | Yüksek frekanslı giriş yoğun bir şekilde sıraya alındı; yanıt verme yeteneği ciddi şekilde azaldı |
| Bluetooth | 115200 | ~125 | ~125 | Kararlı 1:1 ana bilgisayardan hedefe eşleme |
| kablolu | 115200 | ~175 | ~175 | Geliştirilmiş verim; gecikme hızlı çekimde görünüyor |
| Oyun | 115200 | ~1000 | ~350 | Seri üretim sınırına ulaşıldı; fazla giriş sıraya alındı ​​|

**Sonuç (Mutlak Mod):**

Mutlak fare modu baud hızına göre ölçeklenir ancak **seri üretim ve giriş arabelleğe alma** tarafından kısıtlanmaya devam eder.
**9600 baud** hızında, tüm fare türleri darboğaz yaşar ve hareket gecikir.
**115200 baud** hızında, standart fareler kararlı bir davranışa ulaşır, ancak **yüksek oylamalı oyun fareleri hala mevcut bant genişliğini aşarak** gecikmeye neden olur.

**Mutlak mod, gecikmeye duyarlı oyunlar için değil, masaüstü kontrolü için uygundur.**

---

### B. Göreli Fare Olay Modu

Göreli Fare Olay Modu, **fare hareketi olaylarını doğrudan işletim sistemi penceresinden** yakalar, **ardışık imleç konumları arasındaki hareket deltasını** hesaplar ve yalnızca göreli hareket verilerini hedef sisteme iletir.

Bu mod:

* **Ek sistem izinleri gerektirmez**
* **mutlak ekran koordinatlarından** bağımsızdır
* Daha ince taneli hareket deltalarına izin veren **daha büyük yakalama penceresinden** yararlanır
* Mutlak konum ara belleğe almayı önler, bu da **daha düşük gecikme süresi ve daha iyi yanıt verme** sağlar

#### Göreli Fare Olay Modu Performansı

| Fare Türü | Baud Hızı | Ana Bilgisayar Hızı (Hz) | Hedef Hız (Hz) | Notlar |
| ---------- | --------- | -------------- | ---------------- | -------------------------------------------------- |
| Bluetooth | 9600 | ~100 | ~90 | Seri sınırına yakın; gündelik kullanım için sağlam |
| kablolu | 9600 | ~125 | ~90 | Seri bant genişliği doymuş; küçük gecikme |
| Oyun | 9600 | ~1000 | ~100 | Yüksek yoklama bant genişliğini aşıyor; giriş sıkıştırılmış |
| Bluetooth | 115200 | ~125 | ~125 | 1:1 ana bilgisayardan hedefe eşleme |
| kablolu | 115200 | ~180 | ~150 | Geliştirilmiş verim; sorunsuz izleme |
| Oyun | 115200 | ~1000 | ~450 | Gözlemlenen en iyi performans; seri çıktı sınırı |

🔴 **9600 baud, yüksek oylama gerektiren oyun fareleri için yetersizdir**
🟢 **115200 baud, Göreceli Olay modunda duyarlı oyun sınıfı girişe olanak tanır**
---

### C. Göreli Fare HID Modu

Göreli Fare HID Modu **pencere düzeyinde imleç işlemeyi ve mutlak koordinat eşlemeyi atlayarak doğrudan macOS HID fare girişini hedef sistemdeki HID olaylarına dönüştürür**.

Bu mod:

* **ham HID düzeyindeki fare olaylarında** çalışır
* **Uygulama penceresi boyutuna bağlı değildir**
* **Yerel fare yoklama özelliklerini** korur
* Ara ara belleğe almayı ve çeviriyi en aza indirir
* Tüm fare modları arasında **en düşük gecikmeyi** sunar

Sonuç olarak, Göreceli Fare HID Modu, özellikle daha yüksek baud hızlarında **doğrudan USB fare bağlantısına en yakın** davranışı sağlar.

#### Göreli Fare HID Modu Performansı

| Fare Türü | Baud Hızı | Ana Bilgisayar Hızı (Hz) | Hedef Hız (Hz) | Notlar |
| ---------- | --------- | -------------- | ---------------- | -------------------------------------------------- |
| Bluetooth | 9600 | ~100 | ~90 | Seri sınırına yakın; temel kullanım için kabul edilebilir |
| kablolu | 9600 | ~250 | ~180 | Seri bant genişliği kısmen doymuş |
| Oyun | 9600 | >1000 | ~90 | Yüksek yoklama mevcut bant genişliğini aşıyor |
| Bluetooth | 115200 | ~160 | ~155 | Neredeyse 1:1 ana bilgisayardan hedefe eşleme |
| kablolu | 115200 | ~250 | ~150 | Kararlı ve duyarlı |
| Oyun | 115200 | >1000 | ~500 | En iyi genel performans; seri çıktı sınırı |

**Önemli Çıkarımlar (Göreceli HID Modu):**

* Tüm fare modları arasında **en düşük gecikmeyi** sağlar
* **9600 baud** hızında, yüksek oylama yapan fareler bant genişliğiyle sınırlı kalır
* **115200 baud** hızında, oyun fareleri **saniyede yüzlerce hedef tarafı olayına** ulaşır
* **Oyun ve hızlı kamera hareketi için kesinlikle önerilir**

---

### D. Windows'ta Doğrudan Fare (Referans)

| Fare Türü | Hedef Hız (Hz) |
| --------------- | ---------------- |
| Bluetooth Fare | 80–85 |
| Kablolu Fare | 120–125 |
| Oyun Faresi | >1000 |

Bu referans, **Mini-KVM'nin (115200 baud, HID Göreceli mod)** yerel kablolu fare performansına yaklaşabildiğini, ancak doğal KVM ve seri aktarım yükünü tamamen ortadan kaldıramadığını gösterir.

---

## 4. Önerilen Oyun Yapılandırması

### ✅ Tavsiye edilir

* **Fare Modu:** Göreli Fare HID'si
* **Baud Hızı:** 115200
* **Fare Türü:** Kablolu veya oyun faresi
* **Yoklama Hızı:** ≤1000 Hz önerilir

### ❌ Kaçının

* Oyun oynamak için mutlak fare modu
* Yüksek oylamalı farelerle 9600 baud
* Yeterli seri bant genişliği olmadan aşırı yüksek yoklama oranları

---

## 5. Önemli Beklentiler

Openterface Mini-KVM öncelikle aşağıdakiler için tasarlanmıştır:

✔ BIOS / UEFI etkileşimi
✔ Sistem kurulumu ve hata ayıklama
✔ Uzaktan erişim ve yönetim

**Oyun mümkün** olsa da Mini-KVM, özellikle rekabet gücü yüksek veya gecikme açısından kritik olan oyunlar için **doğrudan USB oyun faresinin yerini almaz**.

---

## 6. Son Özet

* **Doğru yapılandırıldığında Openterface Mini-KVM ile oyun oynamak mümkündür**
* Oyun yanıt verme hızına ana bilgisayar CPU performansı değil, **fare modu, yoklama hızı ve baud hızı** hakimdir
* **Mutlak fare modu** konumsal doğruluğa öncelik verir ve oyun oynamak için uygun değildir
* **9600 baud** sabit giriş bant genişliği tavanı oluşturur
* **115200 baud hızında Göreli Fare HID modu** aşağıdakiler arasında en iyi dengeyi sunar:

  * Giriş frekansı
  * Gecikme
  * Kararlılık
* Mini-KVM, yerel bir USB bağlantısıyla tam olarak eşleşemese de sıradan ve bazı rekabetçi oyun senaryoları için **oynanabilir ve duyarlı bir deneyim** sağlayabilir

---

### Genel karar

✅ **Teknik olarak sağlam**
✅ **Oyuncular için net konumlandırma**
✅ **Sınırlamalar konusunda dürüst**