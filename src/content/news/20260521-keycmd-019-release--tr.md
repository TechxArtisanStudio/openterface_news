---
locale: tr
translationKey: "20260521-keycmd-019-release"
slug: "20260521-keycmd-019-release"
title: "KeyCmd 0.19: Uygulamanın Yeniden Markalanması, KM Pro Oluşturma Modu, Çoklu Dil Desteği ve Mod Başına Rehber Turları"
description: "KeyCmd 0.19, KeyMod'dan KeyCmd'ye büyük bir yeniden markalaşma, Unicode HID gönderimi ile yeni KM Pro Compose modu, çok dilli kullanıcı arayüzü (Korece, İtalyanca, Rusça, pt-BR), mod başına etkileşimli rehber turları ve düzinelerce UX iyileştirmesi getiriyor."
date: 2026-05-21
channel: software
product: keymod
topic: ["shipping", "production", "beta", "software", "campaign", "community"]
category: "Product Updates"
tags: ["KeyCmd", "Product Updates", "Release", "Compose", "i18n", "Android"]
featured: false
draft: false
author: "TechxArtisan Studio"
---
KeyCmd **0.19** (`versionCode` **19**), KeyMod'dan KeyCmd'ye **uygulamanın yeniden markalanmasını**, Unicode uyumlu HID gönderimi ile yepyeni **KM Pro Compose modunu**, genişletilmiş **çok dilli kullanıcı arayüzünü** (Korece, İtalyanca, Rusça ve Brezilya Portekizcesi dahil), **mod başına etkileşimli rehber turlarını** ve klavye, oyun kumandası ve sunum modlarında düzinelerce UX iyileştirmesi sağlayan büyük bir güncellemedir.

## Uygulamanın Yeniden Markalanması: KeyMod → KeyCmd

Uygulamanın görünen adı artık tüm giriş noktalarında **KeyCmd** şeklindedir. Bu yeniden markalama, **KeyMod donanımı** ile ona eşlik eden **KeyCmd uygulaması** arasındaki ayrımı netleştiriyor.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Welcome-Screen-landscape.webp" alt = "KeyCmd karşılama ekranı" style = "max-width:100%; border-radius:8px; marj:16px 0;" yükleniyor = "tembel">

### Ne değişti

- **Uygulamanın görünen adı**: Başlatıcı simgesi ve sistem arayüzü artık "KeyCmd"yi gösteriyor
- **Karşılama akışı**: Kelime işareti ve KeyMod'dan KeyCmd'ye kopyalama güncellendi
- **CI yapıları ve APK dosya adları**: **KeyCmd** önekini kullanın
- Sorunsuz yerinde yükseltmeler için `applicationId` **`com.openterface.keymod`** olarak kalır

Mevcut kullanıcılar: ayarlarınız, profilleriniz ve eşlenen cihazlarınız korunur. Yükseltme sorunsuzdur.

## Klavye ve Fare: Tam Ekran Deneyimi

KeyCmd, tümü hem dikey hem de yatay yönlendirmeler için optimize edilmiş tam ekran klavye, dokunmatik yüzey ve sayısal tuş takımı deneyimi sağlar.

<div class = "slideshow-container" id = "slideshow-keycmd-019-kbm" data-auto-slide = "true" data-auto-slide-interval = "3000">
  <div class = "slayt gösterisi-sarmalayıcı">
    <div class = "slayt etkin">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-Full-Keyboard-landscape.webp" alt = "Tam klavye ortamı" yükleme = "tembel">
    </div>
    <div class = "slayt">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-NumPad-landscape.webp" alt = "Sayısal tuş takımı manzarası" yükleme = "tembel">
    </div>
    <div class = "slayt">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-NumPad-portrait.webp" alt = "Sayısal tuş takımı portresi" yükleme = "tembel">
    </div>
    <div class = "slayt">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-Keyboard-TouchPad-portrait.webp" alt = "Klavye ve dokunmatik yüzey portresi" yükleme = "tembel">
    </div>
    <div class = "slayt">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-km-basic-Touchpad.webp" alt = "Dokunmatik yüzey manzarası" yükleme = "tembel">
    </div>
    <div class = "slayt">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-Remote-Coding-portrait.webp" alt = "KeyCmd ile uzaktan kodlama" yükleme = "tembel">
    </div>
    <div class = "slayt">
      <img src="https://assets2.openterface.com/images/keymod/KeyCmd-Settings-screen.webp" alt = "KeyCmd ayarları ekranı" yükleme = "tembel">
    </div>
  </div>

  <div class = "slayt gösterisi-navigasyon">
    <button class="nav-arrow left" onclick="changeSlide('slideshow-keycmd-019-kbm', -1)">❮</button>
    <div class = "slayt gösterisi-noktalar">
      <span class="dot active" onclick="currentSlide('slideshow-keycmd-019-kbm', 1)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm', 2)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm', 3)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm', 4)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm', 5)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm', 6)"></span>
      <span class="dot" onclick="currentSlide('slideshow-keycmd-019-kbm', 7)"></span>
    </div>
    <button class="nav-arrow right" onclick="changeSlide('slideshow-keycmd-019-kbm', 1)">❯</button>
  </div>
</div>

## KM Pro: Oluşturma ve Gönderme Modu

0.19'daki en büyük yeni özellik, uzun pasajlar yazmanıza ve bunları hedef makineye HID tuş vuruşları olarak göndermenize olanak tanıyan özel bir metin düzenleyici olan KM Pro'daki **Oluşturma modu**'dur.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Script-Running-portrait.webp" alt = "Oluşturma modunda çalışan komut dosyası" style = "max-width:100%; border-radius:8px; marj:16px 0;" yükleniyor = "tembel">

<p><strong>Oluştur ve amp; Demo gönder (YouTube Short)</strong></p>

<iframe width = "560" height = "315" yükleme = "lazy" src="https://www.youtube.com/embed/_rJF-hTF3_E" title = "KeyCmd Demo Oluştur ve Gönder (YouTube Kısa)" çerçeveborder = "0" izin = ivmeölçer; otomatik oynatma; panoya yazma; şifreli medya; jiroskop; resim içinde resim; web paylaşımı" referrerpolicy = "strict-origin-when-cross-origin" izin veren tam ekran></iframe>


### Oluşturma düzenleyicisi

- **Temizle** ve **Geri Al/Temizle** kontrolleriyle **Üst kısayol şeridi + eylem satırı oluşturma**
- **Taslak saklama**: Metniniz alt mod geçişlerinde ve hatta başarılı bir gönderimden sonra bile korunur
- **IME entegrasyonu**: telefonunuzun klavyesini kullanarak yazın, temiz HID tuş vuruşları olarak gönderin
- **Gönderme ilerlemesini belirleme**: uzun HID arabellekleri için görünür bir ilerleme çubuğu; böylece gönderimin tam olarak ne kadar ilerlediğini bilirsiniz

### Unicode uyumlu HID gönderimi

- **Çift modlu risk incelemesi**: ASCII olmayan metin göndermeden önce, bir iletişim kutusu Unicode uyumluluğu konusunda uyarır ve inceleme/önizleme eylemleri sağlar
- **macOS Unicode hex akışı**: macOS ana makinelerinde uygulama, genişletilmiş karakterler için Option+hex kod giriş yöntemini kullanır
- **Daha güvenli gönderme iletişim kutuları**: İnceleme ekranı, arabelleğin saf ASCII olmasına veya Unicode karakterleri içerip içermediğine göre içeriğini uyarlar
- **Karakter inceleme araçları**: risk gönderme iletişim kutusu **Kontrol Et** ve **Önizleme** eylemleri sağlar ve macOS ana bilgisayarları özel bir **Unicode onaltılık yol denetimi** girişi içerir

### KM Temel kapsamı

0.19'da **Oluştur ve Gönder, Klavye ve Fare Pro özelliği olarak kalmaya devam ediyor**. KM Basic, tam ekran klavye, dokunmatik yüzey ve sayısal tuş takımı iş akışlarına odaklanır.

## Çoklu Dil Desteği

KeyCmd artık **11 uygulama kullanıcı arayüzü dilini** destekliyor. Bu sürüm dört yeni yerelleştirme ekler:

- **Korece (ko)**: tam kullanıcı arayüzü çevirisi
- **İtalyanca (it)**: tam kullanıcı arayüzü çevirisi
- **Rusça (ru)**: tam kullanıcı arayüzü çevirisi
- **Brezilya Portekizcesi (pt-BR)**: tam kullanıcı arayüzü çevirisi

Mevcut İngilizce, Basitleştirilmiş Çince, Geleneksel Çince, Japonca, Fransızca, Almanca ve İspanyolca ile birlikte KeyCmd artık küresel kullanıcı tabanımızın büyük çoğunluğunu kapsıyor.

### Ne değişti

- Ayarlar'da standart uygulama dili adlarına sahip **Dil seçici**
- **Bluetooth başlıkları** ve **tuş dokunuşu önizlemesi** yerelleştirilmiş
- Tüm dillerde uyarı sekmeleri oluşturmaya yönelik **lint yayınlayın** düzeltmeleri

## İnteraktif Rehber Turları

Artık her modda, özellikleri konusunda size adım adım yol gösteren **yerleşik etkileşimli bir rehber turu** bulunmaktadır.

### Mevcut turlar

- **Kısayol Merkezi turu**: Varsayılan profili açar ve ayrıntılı kullanıcı arayüzünü, kategori sekmelerini ve kısayol yönetimini kapsar
- **Oyun kumandası turu**: oyun kumandası düzenini, modül yönetimini ve ön ayar sistemini açıklar
- **KM Pro turu**: Oluşturma modunu, kısayol panelini ve Pro'ya özgü özellikleri kapsar
- **KM Temel turu**: tam ekran klavyeyi, değiştiriciyi basılı tutmayı ve sayısal tuş takımını açıklar

### Tur özellikleri

- **Moda özel kılavuzlar**: her modun kendine özel turu vardır
- **Tekrar oynatma sayfası**: **Mod Kılavuzu** düğmesi (bağlantı kromunun solundaki simge) aracılığıyla herhangi bir turu istediğiniz zaman yeniden ziyaret edin
- **i18n desteği**: tur içeriği tüm uygulama dili kümesinde yerelleştirilmiştir
- **Yatay optimizasyonlu**: alt sayfa düzenleri yatay yönde doğru şekilde uyarlanır

## Kullanıcı Deneyimi İyileştirmeleri

### Klavye

- **Tuş dokunuşu önizlemesi**: Dokunmadan önce tam olarak ne gönderileceğini görün. Ayarlar aracılığıyla etkinleştirin. Varsayılan olarak etkindir.
- **Hızlı dokunma HID düzeltmesi**: daha hızlı yazma için iyileştirilmiş klavye dokunma bırakma zamanlaması ve birleştirilmiş bırakma etkinlikleri
- **Alternatif dokunma kullanımı**: `a' tuşuna uzun basıldığında artık iyileştirilmiş görsel geri bildirimle ¥ (yukarı), £ (sol), € (sağ) alternatifleri gösteriliyor
- **Değiştiriciyi basılı tutarak hızlıca kaydırma**: KM Temel/Pro turlarında, yeni bir adım, hızlı değiştirici erişimi için basılı tutarak kaydırma hareketini öğretir

### Oyun Kumandası

- **Oturum düzenleme çubuğu kaldırıldı**: eski düzenleme oturumu araç çubuğu olmadan daha temiz oyun kumandası kromu
- **Gamepad kromu ve tur**: yeni görsel cila ve entegre rehber turu
- **Mod kılavuzu simgesi**: kolay erişim için bağlantı kromunun soluna yerleştirilmiştir

### Sunum

- **Portre çifti kilidi**: Sunum modu, kararlı sunucu kontrolleri için dikey ve ters dikey yönlerle sınırlandırılmıştır

### Kullanıcı Arayüzü ve Tema

- **Vurgu renk örnekleri**: Daha kolay renk seçimi için tema renk ailesi döndürücüyü görsel vurgu renk örnekleriyle değiştirdik
- **Kullanıcı arayüzü vurgu hizalaması**: Tüm kullanıcı arayüzü vurguları artık tema renk ailesini takip ediyor (eski ana rengi değil)
- **Sağ başlık kümesi**: hem ana uygulamada hem de KM Basic kromunda bağlantı simgeleri için iyileştirilmiş boyutlar
- **Gönderme düğmesi stili oluşturma**: ışık modunda hizalanmış, ASCII olmayan gönderme düğmesi görünümü

### Ayarlar

- **Ayarların yeniden düzenlenmesi**: standart uygulama dili adları; Anlaşılır olması için emülatör yükleme komut dosyaları yeniden adlandırıldı
- **Geliştirme yardımcı komut dosyaları**: daha net cihaz tanımlaması ve eylem adlandırması için yeniden adlandırıldı
- **SSS belgeleri**: güncel uygulama davranışıyla birlikte `docs/FAQ.md' güncellendi

## Gerçek Dünyadaki Kullanım Durumları

### Uzaktan Kodlama

KeyCmd yalnızca sunucu yönetimi için değildir. Geliştiriciler bunu **uzaktan kodlama oturumları** için kullanıyor; tam klavye, dokunmatik yüzey ve sayısal tuş takımı desteğiyle tamamlanan bir telefon veya tabletten başsız bir geliştirici kutusunu kontrol ediyor.

## Değişmeyen şey

**Klavye ve Fare Pro** (Kısayol Hub şeritleri, bölünmüş düzenler ve zengin IME davranışıyla bileşik mod) daha önce olduğu gibi tam özellikli bir deneyim olmaya devam ediyor. Mevcut tüm profiller, ön ayarlar ve eşleştirilmiş cihazlar korunur.

## Güncellemeyi alın

**Bu sürüm (0.19):** [KeyCmd-release-0.19.apk](https://assets2.openterface.com/data/KeyCmd-release-0.19.apk)

> **Beta bildirimi:** KeyCmd Android uygulaması hâlâ aktif beta sürümündedir. Kaynak deposu henüz halka açık değil; başarılı bir kitlesel fonlama kampanyasından sonra açık kaynak kodlu hale getirmeyi planlıyoruz. Beta testçisiyseniz ve en son APK'ya ihtiyacınız varsa Discord üzerinden bize ulaşın, biz de size sürümü sunalım.

Mevcut yüklemeler güncelleniyor.

## Mini-KVM ve KVM-Go ile çalışır

KeyCmd uygulaması KeyMod donanımıyla sınırlı değildir. Mevcut Openterface kullanıcıları da deneyebilir:

- **KVM-Go**: **Bluetooth** veya **USB** ile bağlanın
- **Mini-KVM**: **USB** aracılığıyla bağlanın

## Yükseltme notları

- **Yeniden Markalama**: Uygulama adı KeyMod'dan KeyCmd'ye değişir. Verileriniz korunur.
- **Oluşturma modu**: Keyboard & Mouse Pro'da yeni.
- **Rehber turları**: Etkileşimli turu başlatmak için herhangi bir modda rehber simgesine (bağlantı kromunun solunda) dokunun.
- **Diller**: Uygulama dilini değiştirmek için Ayarlar'a gidin. KeyCmd artık 11 uygulama kullanıcı arayüzü dilini destekliyor.

Saygılarımızla,

Açık Arayüz Ekibi | TechxArtisan