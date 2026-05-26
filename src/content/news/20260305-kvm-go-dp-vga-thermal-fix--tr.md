---
locale: tr
translationKey: "20260305-kvm-go-dp-vga-thermal-fix"
slug: "20260305-kvm-go-dp-vga-thermal-fix"
title: "KVM-Go DP/VGA Termal Düzeltme – Mühendislik Günlüğü"
description: "KVM-Go'daki DP ve VGA ısı sorununa ayrıntılı bir bakış, ölçümleri, PCB değişikliklerini ve fan eklemeden aşırı ısınmayı çözen mekanik düzeltmeleri ayrıntılarıyla anlatıyor."
date: 2026-03-05
channel: product
product: kvm-go
topic: ["software", "event", "analysis"]
category: "Product Updates"
tags: ["KVM-Go", "Thermal", "Engineering Log", "Product Design"]
featured: false
draft: false
author: "TechxArtisan Studio"
---
## Giriş 1: Havanın "normal sıcak" olmadığını anladığımız an
KVM-GO geliştirme sürecinin ortasında, tipik "küçük cihaz ısınır" beklentileriyle eşleşmeyen termal davranış gördük. Yalnızca iki modelde göründü: DisplayPort (DP) ve VGA. HDMI çeşidi beklentiler dahilinde kaldı.

İlk başta semptom basitti. Muhafaza sıcaklığı beklenenden daha erken rahatsız edici hale geldi. Bizi ilgilendiren şey rahatlık değildi. İç sıcaklıkların, tüketici sınıfı bileşenlerin zaman içinde tolere etmesi beklenen sıcaklığın çok üzerinde olması ihtimali vardı.


---

## Giriş 2: Neden yalnızca DP ve VGA
Video yolu tasarımını sürümler arasında izledikten sonra bir model ortaya çıktı.

- HDMI: MS2130S kullanılarak tek bir dönüştürme aşaması (HDMI'dan USB videoya)
- DP: DP'yi USB videoya dönüştürmek için iki çipli zincir (IT6563 artı MS2130S)
- VGA: VGA'yı USB videoya dönüştürmek için iki çipli zincir (MS9288C artı MS2109S)

İki çip yalnızca parça eklemez. Güç dağıtımı ve yerelleştirilmiş sıcak noktalar eklerler. KVM-GO gibi boyutlardaki bir üründe bu sıcak noktaların yayılma alanı çok azdır.

Daha sonra ikinci kısıtla, yüzey alanıyla karşılaştık. KVM-GO, boyutun sınırlarını zorluyor; bu da hem PCB alanının hem de etkili ısı yayma alanının çok küçük olduğu anlamına geliyor.

Son olarak, gerçek bir mühendislik değiş tokuşuna dönüşen bir yerleşim kısıtlaması vardı. Her iki sıcak çipin aynı tarafa yerleştirilmesi termal açıdan ideal gibi görünse de pin çıkışı ve yüksek hızlı yönlendirme gereklilikleri bu yaklaşımı zorlaştırdı. Bir çipin daha "içeriye" yerleştirilmesi yönlendirmeyi basitleştirdi ve sinyal bütünlüğüne yardımcı oldu, ancak ısıyı muhafazanın içinde hapsetti.

![Original-PCB-layout](https://assets2.openterface.com/images/Original-PCB-layout.webp)

*Orijinal PCB düzeni*

![original-Wiring](https://assets2.openterface.com/images/original-Wiring.webp)

*Orijinal yüksek hızlı yönlendirme*

![KVM-Go-tructure](https://assets2.openterface.com/images/KVM-Go-tructure.webp)


*KVM-GO dahili yığın düzeni*

---

## Giriş 3: Önemli olanın ölçülmesi, iç sıcaklık ve dış sıcaklık
Tahmin etmeyi bırakıp sorunun her iki tarafını da ölçmeye karar verdik. Harici ve dahili izleme için sıcaklık ölçüm noktaları oluşturduk ve ardından uzun süreli bir iş yükü testi gerçekleştirdik.

Sonuç özellikle VGA'da endişe vericiydi.

Yaklaşık bir saatlik sürekli çalışmanın ardından:
- dış yüzey yaklaşık 65°C'ye ulaştı
- iç sıcaklık 115°C civarında zirve yaptı

Pek çok tüketici bileşeni, tam parçaya ve kaliteye bağlı olarak 85°C civarındaki maksimum çalışma sıcaklıklarına göre derecelendirilmiştir. Üç haneli iç sıcaklıkları görmek, yalnızca "dokunulacak kadar sıcak" ile karşı karşıya olmadığımız anlamına geliyordu. Ürün ömrünü kısaltabilecek veya ortamlarda öngörülemeyen davranışlar yaratabilecek bir şeye bakıyorduk. 

![Original-emperature-test](https://assets2.openterface.com/images/Original-emperature-test.webp)

*Temel sıcaklık testi (dahili ve harici)*

---

## Giriş 4: Hızlı bir sağlık kontrolü, cebri hava akışı işe yarıyor (ancak bu bir ürün çözümü değil)
Herhangi bir şeyi yeniden tasarlamadan önce hızlı bir doğrulama istedik. Isıyı daha hızlı uzaklaştırabilirsek sıcaklıklar anlamlı bir şekilde düşer mi?

Bir DIY fanı kullanarak basit bir basınçlı hava kurulumu denedik. Fiziğin yapması gerektiğini söylediği şeyi yaptı. Testimizde sıcaklıklar gözle görülür şekilde yaklaşık 15°C düştü. Bu, sorunun ölçüm hataları veya yazılım davranışından ziyade termal bir darboğaz olduğunu doğruladı.

Ayrıca bir şeyi daha doğruladı. Fan, ürettiğimiz ürünle uyumlu değil. KVM-GO'nun kompakt, sessiz ve bağımsız kalması gerekiyor. Dolayısıyla basınçlı hava akışı nihai çözüm değil, teşhis aracı haline geldi.

![Fan-1png](https://assets2.openterface.com/images/Fan-1png.webp)

*Kendin Yap fan soğutma kurulumu*

![Fan-2](https://assets2.openterface.com/images/Fan-2.webp)

*Kendin Yap fan soğutması, alternatif görünüm*

![Temperature-test-fan](https://assets2.openterface.com/images/Temperature-test-fan.webp)

*Fan soğutmalı sıcaklık testi*

---

## Giriş 5: 1. adımı düzeltin, ısı kaynaklarını dışarıya doğru taşıyın (sinyal bütünlüğünü bozmadan)

İlk gerçek düzeltme PCB'deydi. Her iki ısı üreten çipi de dış tarafa daha yakın yerleştirmek için tasarımı elimizden geldiğince zorladık.

Bu "sadece parçaları hareket ettirin" değildi. DP ve VGA ile yönlendirme kısıtlamaları sıkıdır. Yüksek hızlı sinyallerin, özellikle de diferansiyel çiftlerin temiz tutulması tartışılamaz. Her iki çipin de dışarıya yerleştirilmesi yönlendirmeyi zorlaştırıyordu ve sinyal bütünlüğünün bozulmasını önlemek için dikkatli çalışmamız gerekiyordu.

Eski ve yeni düzeni ve yönlendirmeyi karşılaştırdık, ardından davranışı doğrulamak için donanım oluşturduk. 

![New-PCB-ayout](https://assets2.openterface.com/images/New-PCB-ayout.webp)

*Revize edilmiş PCB düzeni (yongalar dışarıya doğru taşındı)*

![Wiring-layout-modification](https://assets2.openterface.com/images/Wiring-layout-modification.webp)

*Yönlendirme yeniden düzenlendi (geçiş 1)*

![Wiring-layout-modification-2](https://assets2.openterface.com/images/Wiring-layout-modification-2.webp)

*Yenilenmiş yönlendirme (anahtar alan)*

![PCB-ayout-modifications](https://assets2.openterface.com/images/PCB-ayout-modifications.webp)

*Doğrulama için revize edilmiş PCB*

### 1. adımdan sonra ne değişti?
Termaller iyileşti ancak ikinci dereceden bir sorun tespit ettik. Sıcaklık hala muhafazanın içine etkili bir şekilde aktarılmıyordu. Bazı alanlar olması gerekenden daha sıcak kaldı ve termal görüntüleme, muhafazanın uygun bir ısı yayıcı gibi davranmadığını gösterdi.

Adım 1, en yüksek ısı stresini azalttı, ancak ısı yolunu tam olarak çözmedi.  

![Modified-fever-symptoms](https://assets2.openterface.com/images/Modified-fever-symptoms.webp)

*Yerleşim değişikliğinden sonraki sıcaklık (1. adım)*

![Casing-temperature-test](https://assets2.openterface.com/images/Casing-temperature-test.webp)

*Gövde ısı transferi kontrolü (1. adımdan sonra)*

---

## Giriş 6: 2. adımı düzeltin, gerçek bir ısı yolu oluşturun (CNC alüminyum bloklar artı termal arayüz)
Bu noktada mahfazayı sadece bir örtü değil, termal sistemin bir parçası olarak ele aldık.

Ekledik:
- Üst ve alt PCB yığınında CNC alüminyum bloklar
- ısıyı alüminyuma ve ardından alüminyum mahfazaya aktarmak için termal arayüz malzemesi (termal gres veya ped)

Amaç basitti. Etkili ısı yayma alanını artırın ve ısının güvenli bir şekilde dağılabileceği mahfazaya ulaşması için sabit, düşük dirençli bir yol oluşturun.

![cnc](https://assets2.openterface.com/images/cnc.webp)

*CNC termal bloğu (adım 2)*

![cnc2](https://assets2.openterface.com/images/cnc2.webp)

*CNC blok takılı detayı*

### 2. adımdan sonraki nihai sonuç
İletim yolunu ekledikten sonra:
- dış sıcaklık 65°C civarında sabitlendi
- iç sıcaklık yaklaşık 55°C'ye düştü

Termal görüntüleme görmek istediklerimizi gösterdi. Isı dağılımı daha eşit hale geldi ve muhafaza, sonunda ısının dahili olarak birikmesine izin vermek yerine, ısının dağıtılmasına katkıda bulundu. 

![Temperature-measurement-after-adding-CNC](https://assets2.openterface.com/images/Temperature-measurement-after-adding-CNC.webp)

*CNC iletiminden sonraki sıcaklık (adım 2)*

![CNC-machining](https://assets2.openterface.com/images/CNC-machining.webp)

*CNC iletiminden sonra kabuk sıcaklığı*

---

## Kapanış notu
Bu sorunun çıkarımı sadece "DP ve VGA'nın daha sıcak çalışması" değildi. Çok aşamalı dönüşüm daha fazla güce mal olur ve bu da beklenen bir durumdur. Asıl ders şuydu: Bu kadar küçük bir cihazda, ne kadar ısı üretildiği kadar ısının nereye gittiği de önemli.

Adım 1 (düzen), dahili sıcak noktanın şiddetini azalttı.  
Adım 2 (mekanik iletim yolu), çözümü dayanıklı ve ürüne uygun hale getirdi.

Fan yok, özel kullanıcı müdahalesi yok, yalnızca öngörülebilir şekilde davranan bir tasarım.