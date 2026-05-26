---
locale: tr
translationKey: "240716-teardown-to-production"
slug: "240716-teardown-to-production"
title: "Yıkımdan Üretime: İlerliyoruz!"
description: "Openterface Mini-KVM üretim güncellemesi: Başarılı Teardown 2024 gösterimi, OSHWA sertifikası alındı, hacklenebilir pinlerle donanım V1.9 sürümü ve Eylül ayında teslimat yolunda. Üstelik Raspberry Pi uyumluluğu ve uConsole entegrasyonu!"
date: 2024-07-16
channel: product
product: minikvm
topic: ["shipping", "production", "beta", "software", "campaign", "event", "community", "analysis"]
category: "Product Updates"
featured: false
draft: false
author: "Openterface Team"
---
Herkese merhaba,

Kitlesel fonlama kampanyamızın sona ermesinden bu yana bir süre geçti ve sizinle paylaşacağımız harika güncellemelerimiz var. Openterface Mini-KVM'mizin üretim aşamasına balıklama dalmaktan ve sizi ilerlememiz hakkında bilgilendirmekten heyecan duyuyoruz.

## Yıkım 2024'ün Öne Çıkanları

Her şeyden önce, geçen ay Portland'da [**Crowd Supply**](https://www.crowdsupply.com/teardown/portland-2024) tarafından düzenlenen [Teardown 2024](https://x.com/TechxArtisan/status/1810619822948090092) muhteşemdi. Pek çok teknoloji dostumuz ve destekçimizle demo masamızda şahsen tanışmak muhteşemdi! Güzel sözleriniz bizim için büyük bir teşvik ve motivasyondur. İşte etkinlikten bazı kareler:

![openterface-billy-at-teardown2024-2](https://www.crowdsupply.com/img/f0a2/16c34150-c59a-40d0-ab77-7c5dada8f0a2/openterface-billy-at-teardown2024-2_jpg_gallery-lg.jpg)

Etkinlik sırasında ürünümüzü tanıttığı için Electromaker'a büyük bir teşekkür ederiz! Bu videodaki sohbetimize göz atın:

<iframe width = "800" height = "450" src="https://www.youtube.com/embed/K0EuMSQEwKo" title = "YouTube video oynatıcı" çerçeve sınırı = "0" izin = hızlanma ölçer; otomatik oynatma; panoya yazma; şifreli medya; jiroskop; resim içinde resim; web paylaşımı" izin veren tam ekran></iframe>

## Üretim Tüm Hızıyla

Şu anda, üretime hazırlanırken CH9329 ve CH340 gibi **parça ve çip siparişleriyle** meşgulüz. Ayrıca Mini-KVM'mizi ve kablolarımızı CE, RoHS ve UKCA sertifikasyon testlerine gönderiyoruz. Her şey yolunda giderse yakın zamanda fabrikalarda üretime başlayacağız. Ekibimiz, hem eğlenceli hem de güvenilir, birinci sınıf bir ürün sunmak için üretim hattının her adımının sorunsuz ilerlemesini sağlıyor! Turuncu Type-C kablomuzun RoHS ve CE test raporlarından bazı görüntüler:

![openterface-test-report-typec](https://www.crowdsupply.com/img/8d57/cd1d5f8e-820b-40c2-b758-1f075e2e8d57/openterface-test-report-typec_jpg_gallery-lg.jpg)

Mini-KVM'lerimiz ve diğer kablolarımızın gerekli sertifika standartlarını karşıladığından emin olmak için daha fazla benzer rapora sahip olacağımızdan bizi takip etmeye devam edin.

## OSHWA Sertifikası

Openterface Mini-KVM'mizin artık resmi olarak tamamen açık kaynak olarak **OSHWA** sertifikalı olduğunu duyurmaktan heyecan duyuyoruz! 🥳 Sertifikalarımıza buradan göz atabilirsiniz: [OSHWA UID CN000015](https://certification.oshwa.org/cn000015.html). Teknoloji severlerin USB KVM'nin potansiyelini keşfetmesine, geliştirilmesine katkıda bulunmasına ve birlikte canlı bir topluluk oluşturmasına olanak tanıyarak hem yazılımı hem de donanımı açık kaynak tutmaya kararlıyız.

![openterface-oshw-cn000015](https://www.crowdsupply.com/img/925a/fbf33f8d-0c0d-405e-bb34-6e0038c9925a/openterface-oshw-cn000015_jpg_md-xl.jpg)

## Donanım Güncellemesi V1.9


Daha fazla hacklenebilir eğlence için **ekstra pinlere sahip donanım V1.9'u piyasaya sürdük: VCC, GND, Target D+, Target D-, Host D+, Host D-**! Bu veri pinleri Hedefin ve Ana Bilgisayarın USB hub'ına bağlanır. Artık Openterface için DIY uzantıları yapabilirsiniz; ATX, ağ köprüleme, ses bypass ve daha fazlasını düşünün. Mini-KVM'mizi bu pinlerle hacklemek için hangi yaratıcı fikirleriniz var? [Reddit](/reddit) veya [Discord](/discord) grubumuza katılın, düşüncelerinizi paylaşın ve bizimle kodlamanın keyfini çıkarın!

![openterface-v1-9-hackable](https://www.crowdsupply.com/img/caf8/7b5bb696-2342-487a-b0e8-aa137e6dcaf8/openterface-v1-9-hackable_jpg_md-xl.jpg)

## Pi'de Openterface'i çalıştırın ve uConsole ile Ekip Oluşturun

**QT ana bilgisayar uygulamamızı Pi ortamında başarıyla çalıştırdık**! Daha da heyecan verici olan ise Mini-KVM'mizin Clockwork'ün **uConsole** ile bir araya gelerek onu taşınabilir bir KVM aracına dönüştürebilmesidir. Tak-çalıştır ve yakındaki herhangi bir başsız cihazda hızlı sorun giderme için son derece kullanışlıdır.

<iframe width = "800" height = "450" src="https://www.youtube.com/embed/n7k_FwgM9kA" title = "YouTube video oynatıcı" çerçeveborder = "0" izin = hız ölçer; otomatik oynatma; panoya yazma; şifreli medya; jiroskop; resim içinde resim; web paylaşımı" izin veren tam ekran></iframe>

## Geliştirme ve Son Dokunuşlar

Kevin liderliğindeki geliştirme ekibimiz, kodu test etmek ve geliştirmek için yorulmadan çalışıyor. Geliştirme ve beta ekibimizle takılmak ve ilerlememiz hakkında güncel bilgilere sahip olmak için [Techxartisan's Discord](/discord) grubumuza katılın. Bu arada Billy tüm evrak işlerini hallediyor ve ürünümüz, ambalajımız ve ürün kılavuzumuzun tasarımını tamamlıyor. 

Billy'nin Tokyo, Japonya'da onunla paylaştığı [Kazubu’s tweet](https://x.com/_kazubu/status/1803442407800971612)'de sergilenen alüminyum kasa için güncellenmiş baskılarımıza ve etiketlerimize kısa bir bakış:

![openterface-kazubu-tweet-new-look](https://www.crowdsupply.com/img/a680/71cdf2d7-27a3-4b93-8271-b3e82229a680/openterface-kazubu-tweet-new-look_jpg_md-xl.jpg)

## Eylül Ayına Doğru Yoldayız

Şu anda tam planladığımız gibi ilerliyoruz ve Mini-KVM'lerimizi Eylül sonuna kadar elinize geçirmek için çok çalışıyoruz.

Mini-KVM'mizi duyurmak için yardımınızı çok isteriz. Daha fazla teknoloji meraklısına fayda sağlayabileceğini ve başsız cihazları yöneten herkes için teknoloji hayatını kolaylaştıracağını umuyoruz.

Desteğiniz ve coşkunuz için çok teşekkür ederiz. Sen olmasaydın bunu başaramazdık!

Şerefe,  
Billy Wang  
Açık Arayüz Ekibi