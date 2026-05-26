---
locale: tr
translationKey: "20260521-kvm-go-keycmd-app-update"
slug: "20260521-kvm-go-keycmd-app-update"
title: "KVM-GO güncellemesi: KeyCmd 0.19 ile hedefinizi telefonunuzdan kontrol edin"
description: "KeyCmd 0.19'u USB veya Bluetooth üzerinden KVM-GO ile kullanın: KM Basic ve Pro klavyeler, Oluşturma modu, oyun kumandası ön ayarları, Kısayol Merkezi ve sunum kontrolleri; HID girişi için video kilidi gerekmez."
date: 2026-05-21
channel: software
product: keymod
topic: ["shipping", "production", "beta", "software", "campaign", "community"]
category: "Product Updates"
tags: ["KVM-GO", "KeyCmd", "Product Updates", "Android", "USB", "Bluetooth", "Keyboard", "Gamepad", "Release"]
featured: false
draft: false
author: "Openterface Team | TechxArtisan"
---
Herkese merhaba,

**KVM-GO**'yu desteklediğiniz için ve birimleriniz üretim ve sevkiyat aşamalarında gösterdiğiniz sabır için teşekkür ederiz. Birçoğunuzun hâlâ donanım beklediğini biliyoruz ve kurulumunuzun ilk günden itibaren tamamlanmış olmasını istiyoruz.

**Openterface KVM** uygulamasının (telefonunuzda veya tabletinizde video ve tam KVM kontrolü) yanı sıra, klavye, fare, oyun kumandası ve kısayol girişi için yardımcı uygulamamız olan **KeyCmd**'yi geliştiriyoruz. **KeyCmd 0.19**, KVM-GO kullanıyorsanız bugün önerdiğimiz yapıdır. **USB** veya **Bluetooth** üzerinden eşleştirin, önceki herhangi bir yapının üzerine yükleyin; ayarlarınız, profilleriniz ve eşlenen cihazlarınız aktarılır.

<img src="https://assets2.openterface.com/images/kvm-go/kvm-go-keycmd-phone-keyboard-setup.webp" alt = "Telefonda KeyCmd klavye bulunan bir dizüstü bilgisayarda KVM-GO" style="max-width:720px;width:100%;height:auto"loading="lazy">

Aşağıda KeyCmd'nin KVM-GO ile ne yaptığı, hangi iş için hangi modun açılacağı ve gerçek bir hedef makinede bundan en iyi şekilde nasıl yararlanılacağı anlatılmaktadır.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Welcome-Screen-landscape_1.webp" alt = "KeyCmd karşılama ekranı" style = "max-height:320px;width:auto" yükleme = "tembel">

## Modlar ve bunların nasıl kullanılacağı

### Klavye ve Fare (Temel)

**Basit, tam ekran bir klavye** istiyorsanız ve başka hiçbir şeyin size engel olmasını istemiyorsanız bunu açın.

**Şunlar için iyi:** BIOS şifreleri, kısa kabuk komutları, sayısal tuş takımı girişi veya KVM-GO size ekranı gösterirken büyük dokunmatik yüzeyli fare kontrolü.

**Nasıl kullanılır:**

- Gezinme çekmecesinden **KM Basic**'i açın.
- Gerektiğinde ekran klavyesini, **sayısal tuş takımını** (dikey veya yatay) veya **dokunmatik yüzey** sekmesini kullanın.
- **Ayarlar**'da **yapışkan değiştiricileri** (Shift/Ctrl'yi kilitlemek için dokunun) veya basılı tutma ve dokunma kombinasyonlarını tercih ediyorsanız **akor stili** değiştiricileri seçin.

**Neden yardımcı olur:** tuşlar için daha fazla ekran alanı, daha az krom, kısayollara değil yalnızca girişe ihtiyacınız olduğunda daha hızlı.

<img src="https://assets2.openterface.com/images/keymod/KM-Basic-Keyboard_1.webp" alt = "KM Temel tam ekran klavye" style = "max-height:320px;width:auto" yükleme = "tembel">

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-NumPad-landscape_1.webp" alt = "Yatay modda KeyCmd sayısal tuş takımı" style = "max-height:320px;width:auto" yükleme = "tembel">

### Klavye ve Fare (Pro)

<img src="https://assets2.openterface.com/images/keymod/KM-Pro-Keyboard-landscape-split_1.webp" alt = "KM Pro yatay olarak bölünmüş klavye" style = "max-height:320px;width:auto" yükleme = "lazy">

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Keyboard-TouchPad-portrait_1.webp" alt = "KeyCmd klavye ve dikey olarak dokunmatik yüzey" style = "max-height:320px;width:auto" yükleme = "tembel">

KVM-GO'nun arkasındaki makinelerde **günlük kontrol çalışmaları** için bunu açın: bölünmüş klavyeler, IME, Kısayol Hub şeritleri ve **Compose** düzenleyicisi.

**Şunlar için uygundur:** daha uzun yazma oturumları, makrolar ve kısayollar, siz sonucu KVM görünümünde izlerken ana makineye metin blokları veya komut dosyaları gönderme.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Script-Running-portrait_1.webp" alt = "Komut dosyası göndererek oluşturma modu" style = "max-height:320px;width:auto" yükleme = "lazy">

Komutları veya komut dosyalarını sık sık yapıştırıyorsanız **Oluşturma** denemeye değer: Telefonunuza yazın, inceleyin ve ardından tuş vuruşlarını ana makineye gönderin. [Short demo on YouTube](https://www.youtube.com/watch?v=_rJF-hTF3_E) akışı uçtan uca gösterir.

**Nasıl kullanılır:**

- Gezinme çekmecesinden **KM Pro**'yu açın.
- Profillerde ayarladığınız tek dokunuşla işlemler için Temel'deki gibi klavyeyi ve dokunmatik yüzeyi, ayrıca üst kısımdaki **Kısayol Merkezi** kategorilerini kullanın.
- Telefonunuzda daha uzun bir metin taslağı oluşturmak için **Oluştur**'u açın, metni inceleyin ve ardından HID tuş vuruşları olarak **gönderin**. Uzun gönderimler bir ilerleme çubuğu gösterir. Metninizde ASCII olmayan karakterler varsa uygulama göndermeden önce sizi uyarır, böylece ana bilgisayar uyumluluğunu kontrol edebilirsiniz (özellikle macOS'ta faydalıdır).

**Neden yardımcı olur:** Hedefe tam bir klavye taşımadan yazma, işaretleme, kısayollar ve yapıştırma benzeri iş akışları için tek bir yer.

### Oyun Kumandası

Ekranda oyunlara veya oyun kumandası bekleyen hedefteki herhangi bir uygulamaya göre ayarlanmış bir **sanal denetleyici** düzeni istediğinizde bunu açın.

**Şunlar için uygundur:** emülatörler, gündelik oyunlar veya ekranı KVM-GO yönetirken çubuklar ve düğmeler içeren kompakt bir kontrol yüzeyi.

**Nasıl kullanılır:**

- **Oyun Kumandası** moduna geçin.
- Kayıtlı düzenleri **döngüye almak** için araç çubuğunda **Ön Ayar**'a dokunun. **Tam listeyi açmak, **içe aktarmak/dışa aktarmak** veya **modülleri eklemek** (çubuklar, düğmeler, dokunmatik yüzeyler) için **Ön Ayar** tuşuna uzun basın.
- Birlikte verilen **emu-6** ön ayarından başlayın ve oradan düzenleyin. Tek bir düzende **birden fazla dokunmatik yüzey** ve ekstra çubuk modülleri ekleyebilirsiniz.

**Neden yardımcı olur:** tek bir fabrika düzenine bağlı kalmazsınız; Düzenleri oyun başına veya makine başına kaydedin ve ön ayarları başkalarıyla paylaşın.

<img src="https://assets2.openterface.com/images/keymod/Gamepad-perset-1_1.webp" alt = "Oyun kumandası ön ayar düzeni" style = "max-height:320px;width:auto" yükleme = "tembel">

<img src="https://assets2.openterface.com/images/keymod/Gamepad-perset-minecraft_1.webp" alt = "Minecraft'ta kullanılan oyun kumandası ön ayarı" style = "max-height:320px;width:auto"loading = "lazy">

*Minecraft için özelleştirilmiş ön ayar.*

### Kısayol Merkezi

Burası KM Pro'nun içindeki **profil ve kısayol** ana sayfasıdır: kategoriler, ayrıntı panelleri ve şeritlere atadığınız kısayollar.

**Şunlar için iyi:** KVM-GO video için bağlı kalırken hedefte tekrarlanabilir işlemler (terminalin açılması, komut zincirinin yapıştırılması, ayarların değiştirilmesi).

**Nasıl kullanılır:**

- KM Pro'da **Varsayılan** profilde (veya kendi profilinizde) çalışın.
- Kısayolları yönetmek için kategori sekmelerini ve ayrıntı kullanıcı arayüzünü kullanın.
- Profillerin nasıl düzenleneceği konusunda yeniyseniz **Kısayol Merkezi kılavuzu turunu** çalıştırın.

### Sunum

**portre** olarak tutulan daha basit bir **sunucu tarzı** kontrol yüzeyi, telefonu çevirdiğinizde düğmelerin atlamamasını sağlar.

**Şunlar için iyi:** Hedefte slaytlar veya hafif sunum kontrolleri arasında geçiş yapmak.

<img src="https://assets2.openterface.com/images/keymod/KeyCmd-Presentation-Google-Slides.webp" alt = "Google Slaytlar'ı kontrol eden sunum modu" style = "max-height:320px;width:auto"loading = "lazy">

---

## Diller

Uygulama kullanıcı arayüzü **11 dilde** mevcuttur. Son eklenenler: Korece, İtalyanca, Rusça ve Brezilya Portekizcesi.

Geçiş yapmak için **Ayarlar** → **Uygulama dilini** açın.

---

## KeyCmd 0.19'u edinin ve KVM-GO'ya bağlanın

**İndir:** [KeyCmd-release-0.19.apk](https://assets2.openterface.com/data/KeyCmd-release-0.19.apk)

Zaten bir uygulamanız varsa mevcut uygulamanızın üzerine yükleyin. Verileri silmeye gerek yok.

**KVM-GO'ya bağlanın (video bağlantı noktası prizden çıkarılabilir):**

**Üç KVM-GO modelinin tamamında** (HDMI, VGA ve DP), KeyCmd girişi için **donanım kilidindeki video konektörünü** herhangi bir şeye takmanıza gerek yoktur. HDMI, VGA veya DP bağlantı noktası boş kalabilir. Aşağıdaki kurulumlardan birini seçin.

**Seçenek A — Bluetooth (hedef KVM-GO'ya güç verir)**

1. **kısa siyah USB kablosunu** KVM-GO üzerindeki **Hedef** bağlantı noktasına ve kontrol ettiğiniz makineye takın. Bu bağlantı tek başına KVM-GO'ya **güç sağlar**.
2. Telefonunuzda **KeyCmd**'yi açın ve **Bluetooth** üzerinden KVM-GO'yu bulun.

**Seçenek B — Android telefonunuza USB (ana bilgisayar bağlantı noktası)**

1. **Uzun turuncu kabloyu** KVM-GO'daki **Host** bağlantı noktasından Android telefonunuza takın.
2. **KeyCmd**'yi açın ve uygulamada **USB** üzerinden bağlanın.

<img src="https://assets2.openterface.com/images/kvm-go/kvm-go-target-port-laptop-power.webp" alt = "Kısa siyah USB kablosuyla bir dizüstü bilgisayara bağlanan KVM-GO Hedef bağlantı noktası" style = "max-height:360px;width:auto" yükleme = "lazy">

Tam ekran video ve giriş için, hedef ekran için **Openterface KVM**'yi ve klavye, fare ve kısayollar için **KeyCmd**'yi kullanın. Hedefin zaten kendi ekranı olduğunda ve yalnızca girişe ihtiyacınız olduğunda KeyCmd tek başına yeterlidir.

**Her iki cihazı da kullanıyorsanız USB üzerinden Mini-KVM** ile de çalışır.

> **Hala beta.** Oyun kumandası ön ayarları ve Oluşturma gönderimleri, ana işletim sistemine bağlı olarak farklı davranabilir. KVM-GO'da tuhaf bir şey olursa ekran görüntüsü, KVM-GO varyantınız (HDMI / DP / VGA) ve beklentilerinizle birlikte **Discord** üzerinden bize ulaşın.

> **Kaynak kodu:** Henüz herkese açık değil. İlgili projelerde kitlesel fonlama aşamalarının ardından açık kaynak yapmayı planlıyoruz. APK'yı bulma konusunda yardıma ihtiyacınız varsa Discord'a sorun.

---

## KeyMod hakkında (isteğe bağlı, KVM-GO'dan ayrı)

Aynı KeyCmd uygulaması için özel bir USB ve Bluetooth HID donanım kilidi olan **[KeyMod](https://openterface.com/product/keymod/)**'yi de geliştiriyoruz. KVM-GO destekçilerinin yukarıdaki iş akışları için KeyMod'a ihtiyacı yoktur; KVM-GO üzerinden KeyCmd, şu anda gitmenizi istediğimiz yoldur.

KVM dışı kurulumlar için bağımsız bir donanım kilidini merak ediyorsanız [KeyMod campaign on Crowd Supply](https://www.crowdsupply.com/techxartisan/openterface-keymod) adresini takip edebilirsiniz. Bu, KVM-GO'nun yerine getirilmesinden ayrıdır.

---

## Geri bildiriminizi almak isteriz

Birkaç dakikanız varsa **KeyCmd 0.19**'u yükleyin, KVM-GO'nuza (veya Mini-KVM) bağlayın ve hâlâ neyin garip geldiğini bize bildirin. Acil araba ve ev laboratuvarı kullanım örneklerinden elde edilen raporlar doğrudan sonraki sürümlerimizde yer alacaktır.

KVM-GO projesine yardımcı olmanın pratik yolları:

- Discord'da veya topluluğunuzda **işe yarayanları paylaşın** (BIOS ipuçları, Bluetooth eşleştirme, favori modlar)
- **Başsız teçhizat kullanan ve cep KVM'si kullanabilen bir meslektaşınıza söyleyin**
- **Dürüst geri bildirimler göndermeye devam edin**, özellikle de sert noktalar. Bu, ürünü amigo kızlıktan daha fazla şekillendiriyor

KVM-GO'yu desteklediğiniz ve taşınabilir USB üzerinden KVM'yi herkes için daha iyi hale getirmemize yardımcı olduğunuz için tekrar teşekkür ederiz.

Saygılarımızla,

**Açık Arayüz Ekibi | TechxArtisan**