---
locale: tr
translationKey: "260128-keyboard-mouse-issue-analysis"
slug: "260128-keyboard-mouse-issue-analysis"
title: "Openterface MiniKVM Klavye ve Fare Çalışmama Sorunları Kök Neden Analizi"
description: "Openterface MiniKVM'de aralıklı olarak ortaya çıkan klavye ve fare sorunlarının şeffaf bir temel neden analizi, CH213K ideal diyot varyasyonunu, normal QA'nın neden geçtiğini ve sorunun nasıl düzeltilip ilerlemesinin nasıl önlendiğini açıklıyor."
date: 2026-01-28
channel: product
product: minikvm
topic: ["shipping", "production", "software", "campaign", "analysis"]
category: "Product Updates"
featured: false
draft: false
author: "Openterface Team"
---
Geçtiğimiz ay boyunca, çok sayıda kullanıcı Openterface ile ilgili, çoğunlukla klavye ve fare kararsızlığından kaynaklanan aralıklı sorunlar bildirdi. Ne olduğuna, temel nedeni nasıl belirlediğimize ve yanıt olarak ne yaptığımıza ve hala yapmakta olduğumuza ilişkin şeffaf ve ayrıntılı bir teknik açıklamayı paylaşmak istiyoruz.

## İlk Üretim Grubu: Kararlı ve İyi Karşılandı

Kitlesel fonlama kampanyamız sırasında **4.000 Openterface ünitesinin** ilk partisini ürettik.  
Bu parti tam dahili QA sürecimizden geçti ve genel kalite çok sağlamdı. Yalnızca az sayıda sorun bildirildi ve kullanıcıların büyük çoğunluğu ürünün stabilitesinden ve kullanılabilirliğinden memnun kaldı.

Bu bize hem donanım tasarımının hem de üretim sürecinin sağlam olduğuna dair güven verdi.

## İkinci Parti: Aynı Tasarım, Aynı Fabrika, "Aynı" Bileşenler

İlk partinin tamamı tükendikten sonra, aynı fabrikada üretilen ve aynı tedarikçilerden temin edilen bileşenleri kullanan **500 Openterface MiniKVM ünitesinden** oluşan ikinci bir parti ürettik.

İlgili önemli bileşenlerden biri **WCH** kaynaklı **CH213K ideal diyot**'tur.  
Openterface MiniKVM'de bu bileşen **Ana Bilgisayar tarafı ile Hedef taraf arasındaki USB güç yollarını korumak ve izole etmek** için kullanılır, ters akımı ve istenmeyen güç enjeksiyonunu önler.

Bu ikinci grupta CH213K üzerindeki serigrafi işareti değişti:

- İlk parti: **“13K”**
- İkinci parti: **“3k10”**

Parça numarası, tedarikçi ve yayınlanan spesifikasyonlar değişmediğinden, bunu rutin bir parti veya markalama güncellemesi olarak ele aldık ve başlangıçta bunu bir risk faktörü olarak değerlendirmedik.

![CH213K_Compare.png](https://assets.openterface.com/images/blog/20260128/Ch213K_Compare.webp)

## QA Sonuçları: Kaçırılması Kolay İnce Sinyaller

İlk partidekiyle aynı QA prosedürlerini uyguladık.  
Genel kusur oranı biraz arttı ancak kabul edilebilir bir aralıkta olduğunu düşündüğümüz aralıkta kaldı. Tek bir arıza modu açıkça göze çarpmadı ve sonuçlar belirli bir bileşene veya tasarım sorununa işaret etmedi. Geriye dönüp baktığımızda, bu hafif bozulma yeterince derinlemesine araştırmadığımızın erken bir sinyaliydi.

## Kullanıcı Raporları Daha Derin Araştırmaları Tetikledi

Geçen aydan itibaren, klavye ve farenin beklendiği gibi çalışmadığını açıklayan, giderek artan sayıda kullanıcı raporu almaya başladık. Bu raporların dikkate değer bir özelliği, sorunun aşağıdaki gibi değişkenlere bağlı görünmesiydi:

- Ana bilgisayar
- Hedef bilgisayar
- Kullanılan USB kablosu

Bu değişkenlik, bir donanım yazılımı veya USB protokolü sorunu yerine, **güç yolu uç durumunu** akla getiriyordu. Bu nedenle üretim partileri arasında değişen tüm faktörlerin sistematik bir karşılaştırmasını başlattık.

Bu süreç sayesinde, etkilenen birimler arasında ortak faktör olarak **"3k10" işaretli**CH213K ideal diyotu belirledik.

## Temel Neden: Düşük Olasılık, Ortama Bağlı Güç Kararsızlığı

Gerilim ölçümleri ve karşılaştırmalı testler sayesinde aşağıdaki davranışı gözlemledik:

- Eski **“13K”** ideal diyotu kullanan üniteler:
  - Dahili USB voltajı, test edilen tüm ana bilgisayarlarda, hedeflerde ve kablolarda sabit kalır.
- Daha yeni **“3k10”** ideal diyotu kullanan üniteler:
  - Çoğu durumda dahili voltaj sabit kalır ve cihaz normal şekilde çalışır.
  - Bununla birlikte, kullanıcı raporları ve takip testlerine göre, **birimlerin küçük bir yüzdesi (\~%5 dahilinde**) **belirli ana cihaz ve USB kablo kombinasyonları altında** dahili voltaj dengesizliği yaşayabilir.

Bu davranış **deterministik değildir** ve tüm kurulumlarda tutarlı bir şekilde gerçekleşmez; bu da standart QA testi sırasında yeniden oluşturmanın neden zor olduğunu açıklar. Bununla birlikte, bizim ölçeğimizde bu görülme oranı önemlidir ve acil araştırmayı gerektirmektedir.

CH213K doğrudan USB güç yolunda bulunduğundan, bu noktadaki voltaj dengesizliği aşağı yönde yayılabilir ve USB HID davranışını etkileyerek aralıklı klavye veya fare arızalarına neden olabilir.

Her iki bileşen de **CH213K** olarak etiketlenmiş olsa da, değişen USB güç koşulları altında gerçek dünyadaki davranışların bu işaretler veya dahili üretim revizyonları arasında farklılık gösterdiği görülmektedir.

![CH213K_InternalVoltage](https://assets.openterface.com/images/blog/20260128/CH213K_InternalVoltage.webp)

## Doğrulama: Ek Çıkış Kapasitansı ile Kararlılığın Geri Kazanılması

Hipotezimizi doğrulamak için hedefe yönelik bir donanım değişikliği başlattık:

- CH213K ideal diyotunun çıkışına **10 µF kapasitör** eklenmesi.

Bu kapasitör yerleştirildiğinde, daha önce sorunlu olan tüm konfigürasyonlarda dahili voltaj kararlılığı yeniden sağlandı. Klavye ve fare davranışının normale dönmesi, sorunun ürün yazılımı veya USB mantığından ziyade **güç kararlılığıyla ilgili** olduğunu doğruladı.

![fixed_test](https://assets.openterface.com/images/blog/20260128/fixed_test.webp)

Ek olarak, MiniKVM ünitelerinde **osiloskop gerektirmeden** **Vpp'yi (tepeden tepeye voltaj dalgalanması)** ölçmek için **ESP32 tabanlı hızlı bir QA doğrulama aracı** geliştirdik. Bu, QA mühendislerimizin üretim ve yeniden inceleme sırasında laboratuvar ortamı dışında bile güç stabilitesini hızlı ve tutarlı bir şekilde kontrol etmelerine olanak tanır. Gerilim kalitesi kontrolleri için alet ve beceri engelini azaltarak, yalnızca işlevsel testlerle yakalanması zor olan uç durumlar da dahil olmak üzere tüm birimleri daha ayrıntılı ve güvenilir bir şekilde tarayabiliriz.

![ESP32_QA_Tool](https://assets.openterface.com/images/blog/20260128/qatool.webp)

### Etkilenen Kullanıcılar İçin Neler Yaptık

Teknik inceleme ve düzeltmeye paralel olarak kullanıcı etkisini en aza indirmeye ve destek verimliliğini artırmaya odaklandık:

1. **Platformlar arası kendi kendine teşhis aracı**  
   **macOS, Windows ve Linux** için bir kendi kendine teşhis aracı geliştirdik. Bu araç, kullanıcıların klavye veya fare kararsızlığının bu sorunla ilgili olup olmadığını hızlı bir şekilde belirlemesine yardımcı olur ve sonuçları doğrudan bize bildirmelerine olanak tanır.  
   Onaylanmış vakalar için, kullanıcıların distribütör tarafında uzun doğrulama prosedürlerinden geçmesine gerek kalmadan **hemen yeni bir ünite gönderiyoruz**.
2. **Satışlarda duraklama ve proaktif donanım düzeltmesi**  
   Sorun onaylandıktan sonra **mevcut tüm stokların sevkiyatını geçici olarak durdurduk**. Artık Crowd Supply için **kapasitör tabanlı düzeltmeyi** de içeren yeni envanter partisi gönderiyoruz; devam eden ve gelecekteki satışların bu düşük olasılıklı ancak gerçek sorundan etkilenmemesini sağlıyoruz.
3. **Daha hızlı çözüm için canlı teknik destek**  
   Sorunu teşhis etmekte zorluk çeken kullanıcılara, kontrolleri birlikte yapmaları için **canlı aramalar** sunuyoruz. Bu, uzun süreli e-posta alışverişlerini önler ve sorunları çok daha hızlı tespit edip çözmemize olanak tanır.

## Öğrenilen Dersler

Bu olay bizim için birkaç önemli dersi güçlendirdi:

1. Parça numaraları değişmeden kalsa bile güç yolu bileşenleri, partiler veya dahili revizyonlar arasında ince davranış farklılıkları sergileyebilir.
2. QA başarısızlık oranlarındaki küçük artışlar, daha derin sorunların erken göstergeleri olabilir.
3. USB güç ortamları gerçek dünyada büyük farklılıklar gösterir ve kontrollü testlerde tamamen kopyalanması zordur.
4. Hızlı, insandan insana destek, sorunlar meydana geldiğinde teknik düzeltmeler kadar önemlidir.

## İleriye Yönelik Taahhüdümüz

Bu sorunun ve daha önce tespit edilmemesinin tüm sorumluluğunu üstleniyoruz. Şeffaflık bizim için önemlidir ve kullanıcılarımızın açık ve dürüst bir teknik açıklamayı hak ettiğine inanıyoruz.

İleriye dönük olarak:

- USB güç yolu stabilite marjlarını iyileştirmek için donanım tasarımının güncellenmesi.
- Parça numaraları değişmese bile güç yolu bileşenlerinin doğrulama ve karakterizasyonunun güçlendirilmesi.
- **QA mühendislerinin Vpp'yi osiloskop olmadan ölçmesine olanak tanıyan ESP32 tabanlı hızlı QA aracının kullanılması**, güç stabilitesi kontrollerinin daha hızlı, daha tekrarlanabilir ve üretim genelinde ölçeklendirilmesini daha kolay hale getirir.
- Düşük olasılıklı, ortama bağlı sorunları daha iyi yakalamak için QA eşiklerinin ve test kapsamının iyileştirilmesi.

Ünitenizin etkilenebileceğini düşünüyorsanız veya özel kurulumunuzla ilgili sorularınız varsa, lütfen [support@openterface.com](mailto:support@openterface.com) adresinden bizimle iletişime geçin; sizi desteklemeye ve bunu doğru yapmaya kararlıyız.

Sabrınız, geri bildirimleriniz ve Openterface MiniKVM'ye olan güveniniz için teşekkür ederiz.

Saygılarımızla,

Açık Arayüz Ekibi | TechxArtisan