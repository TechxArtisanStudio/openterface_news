---
locale: tr
translationKey: "20251224-kvm-go-demo-software-hardware"
slug: "20251224-kvm-go-demo-software-hardware"
title: "Yeni Demo Videosu, Yazılım İlerlemesi ve KVM-GO'nun İçinde Neler Var?"
description: "HDMI/DP/VGA versiyonlarını çalışırken gösteren yeni KVM-GO demo videosunu izleyin. Mini-KVM ve KVM-GO için birleşik yazılım, MS2130S 4K@60Hz video işlemcisi ve CH32V208 MCU dahil donanım yükseltmelerinin yanı sıra özel EDID desteği gibi gelecek özellikler hakkında bilgi edinin. Kampanya güncellemesi: 220'den fazla destekçiyle 72 bin dolar."
date: 2025-12-24
channel: product
product: kvm-go
topic: ["production", "software", "campaign", "community", "analysis"]
category: "Product Updates"
tags: ["KVM-GO", "Product Updates", "Software", "Hardware", "Demo Video", "Crowdfunding", "Technical Deep Dive"]
featured: true
draft: false
author: "TechxArtisan Studio"
---
Herkese merhaba! Sessiz dönem için özür dilerim. [KVM-GO](https://openterface.com/product/kvm-go/) için hem donanım hem de yazılım üzerinde kafa yoruyorduk ve zaman uçup gitti. Aralık sonu itibarıyla **220'den fazla destekçiyle** 72 bin dolara ulaştık, bu harika bir şey. Eğer bunu daha da ileri götürmemize yardımcı olabilirseniz, lütfen **bu haberi yayın**!

Sabrınız ve desteğiniz için çok teşekkür ederiz. Ve evet, kaosa kesinlikle Noel de eklendi 🙂🎄 Şimdi gelin yetişelim.

![blog-Gemini_Generated_Image_kvm-go](https://assets.openterface.com/images/blog/Gemini_Generated_Image_kvm-go.webp)
*Nano Banana ile oluşturulmuş tatil temalı görsel, KVM-GO ürünlerimizin gerçek fotoğraflarına dayanmaktadır.*

## Yeni Demo Videosu: KVM-GO İş Başında

Az önce KVM-GO'yu gerçek dünyadaki kullanımını gösteren bir [**new demo video**](https://www.youtube.com/watch?v=459rWCQbJRE) yayınladık.

<iframe width = "560" height = "315" src="https://www.youtube.com/embed/459rWCQbJRE?si=6IbiJwkcpuZurepz" title = "YouTube video oynatıcı" çerçeveborder = "0" izin = ivme ölçer; otomatik oynatma; panoya yazma; şifreli medya; jiroskop; resim içinde resim; web paylaşımı" referrerpolicy = "strict-origin-when-cross-origin" izin veren tam ekran></iframe>

Videoda şunları göreceksiniz:

* KVM-GO **HDMI / DP / VGA** sürümleri iş başında
* Dahil olanlar **kutuya**
* Farklı hedef cihazlar nasıl kontrol edilir
* Hızlı erişimden çok hedefli kurulumlara kadar KVM-GO gerçek iş akışlarına nasıl uyum sağlar?

Daha gündelik, uygulamalı testler ve gerçek kullanımı merak ediyorsanız [social media](https://openterface.com/about/community/) sayfamıza da göz atmaktan çekinmeyin. KVM-GO'nun gerçek teknoloji ön saflarında nasıl davrandığını gösteren ham test kliplerini ve pratik senaryoları sıklıkla paylaşıyoruz.

## Yazılım İlerlemesi: Mini-KVM ve KVM-GO için Tek Uygulama

Yazılım tarafında ileriye doğru sağlam bir adım attık.

En son güncellemelerimiz **aynı Openterface uygulamasının hem Mini-KVM hem de KVM-GO serisiyle sorunsuz çalışmasına** olanak tanır. Kullanıcılar için bu şu anlama gelir:

* Ürünler arasında tutarlı bir deneyim
* Birden fazla Openterface cihazı kullanıyorsanız daha az parçalanma

Ayrıca aşağıdaki konulara odaklanarak **klavye ve fare performansını** iyileştirmeye de zaman ayırdık:

* Daha düşük genel gecikme
* Bağlantı durumunun ve sinyal kalitesinin daha iyi algılanması da dahil olmak üzere daha kararlı giriş yönetimi
* Hızlı veya sürekli etkileşimler sırasında daha hızlı yanıt

KVM çözümlerimiz için birincil hedef kullanım durumu oyun olmasa da, gerçek dünya senaryolarında girdi duyarlılığına hala büyük önem veriyoruz. Özellikle macOS'taki teknik ayrıntılarla ilgileniyorsanız, yakın zamanda burada ayrıntılı bir inceleme yayınladık:
👉 **[Openterface Mini-KVM Mouse Speed & Gaming Performance on macOS](https://openterface.com/app/updates/20251218-macos-mouse-speed/)**

Burada tartışılan iyileştirmelerin çoğu artık hem Mini-KVM hem de KVM-GO için birleşik yazılım yığınımıza doğrudan besleniyor.

## KVM-GO'daki Temel Donanım Yükseltmeleri (Mini-KVM ile Karşılaştırıldığında)

Dahili bileşenlerle ilgilenenler için Mini-KVM'den KVM-GO'ya kadar önemli donanım değişikliklerinin hızlı bir karşılaştırmasını burada bulabilirsiniz.

### Video Ardışık Düzen Yükseltmesi

| Görünüş | **MS2109 (Mini-KVM)** | **MS2130S (KVM-GO)** | İyileştirme |
| ---------------- | ------------------------ | -------------------- | --------------------- |
| HDMI girişi | 4K @ 30Hz | 4K @ 60Hz | 2× giriş bant genişliği |
| USB video çıkışı | 1080p @ 30Hz | 4K @ 60Hz | 4× piksel çıkışı |
| Dahili ölçeklendirme | 4K → 1080p | Yerel 4K | Zorunlu küçültme yok |
| Çerçeve gecikmesi | Daha yüksek (ölçekleyici + arabellek) | Aşağı (doğrudan yol) | Azaltılmış gecikme |

### USB Klavye ve Fare Emülasyon Yükseltmesi

| Görünüş | **CH340 + CH9329 (Mini-KVM)** | **CH32V208 (KVM-GO)** | İyileştirme |
| ------------------ | ----------------------------- | --------------------- | --------------- |
| Çip sayısı | 2 çip | Tek MCU | Daha basit sistem |
| USB kullanımı | USB–Seri köprü | Yerel USB aygıtı | Daha düşük gecikme |
| HID nesli | Sabit fonksiyonlu | Firmware tanımlı | Tam kontrol |
| Veri yolu | USB → UART → HID | USB → HID | Bir atlama kaldırıldı |
| BIOS uyumluluğu | Karışık | Mükemmel | Daha güvenilir |

## Aktif Geliştirmede Gelişmiş Özellikler

Sonlandırılmış KVM-GO ürün yazılımı için çeşitli gelişmiş özellikler planlanmış ve aktif olarak geliştirilme aşamasındadır. Hızlı bir önizleme:

* **Ekran uyumluluğu sorunlarını çözmek için özel EDID desteği**
* **Komut dosyası tabanlı kontrol**, otomasyon ve gelişmiş iş akışları için

Bu özellikler olgunlaştıkça daha fazla ayrıntı paylaşacağız.

## Açık Kaynak Taahhüdü (Her Zamanki Gibi)

Evet, **KVM-GO tamamen açık kaynak olarak kalacaktır**.

Seri üretim için donanım tasarımı tamamlandıktan sonra **OSHWA (Açık Kaynak Donanım Birliği) sertifikasyonu** için başvuruda bulunacağız.

Tüm donanım tasarım dosyaları ve STL modelleri burada yayınlanacaktır:
👉 [https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware](https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware)

Şeffaflık ve topluluk işbirliği yaptığımız işin temelini oluşturmaya devam ediyor.

## Kampanyanın Son Günleri: Dostça Bir Hatırlatma

Artık kitlesel fonlama kampanyasının **son günlerinde**yiz.

Kitle fonlaması **KVM-GO'yu en düşük fiyata almak için en iyi şanstır**. Kampanya sona erdiğinde ve kitlesel fonlama sonrası siparişlere geçtiğimizde fiyat artacaktır.

Eğer çitin içindeyseniz, şimdi tam zamanı.

👉 **Kampanyayı destekleyin ve biriminizi Crowd Supply'da güvence altına alın:**
[https://www.crowdsupply.com/techxartisan/openterface-kvm-go](https://www.crowdsupply.com/techxartisan/openterface-kvm-go)

Sabrınız, güveniniz ve desteğiniz için tekrar teşekkür ederiz. Yakında daha fazla güncelleme gelecek ve bir daha sessiz kalmamaya çalışacağız. Hepimizden sıcak tatil dileklerimle!

**Açık Arayüz Ekibi | TechxArtisan**