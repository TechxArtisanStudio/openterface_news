---
locale: tr
translationKey: "250520-kashall-project"
slug: "250520-kashall-project"
title: "Openterface Viewer: Kashall'ın Hafif, Tarayıcı Tabanlı KVM Çözümü"
description: "Kashall'ın, kurulum gerektirmeden başsız cihazların doğrudan kontrolünü sağlayan tarayıcı tabanlı bir KVM çözümü olan yenilikçi Openterface Viewer'ı keşfedin. Bu açık kaynaklı proje, BT uzmanları ve geliştiriciler için mükemmel olan, geleneksel KVM yazılımına hafif, taşınabilir bir alternatif sunmak için WebUSB, WebSerial ve WebHID API'lerinden yararlanıyor."
date: 2025-05-20
channel: events
eventType: contest
topic: ["software", "campaign", "event", "community"]
category: "Product Updates"
featured: false
draft: false
author: "Openterface Team"
---
Kashall'ın **Openterface Viewer**, **USB-KVM DIY Challenge 2024**'te göze çarpan bir giriştir ve Openterface_QT masaüstü uygulamasına hafif, açık kaynaklı bir alternatif sunar. Bu tarayıcı tabanlı KVM arayüzü, Chromium tabanlı tarayıcılarda tamamen istemci tarafında çalışır ve herhangi bir kurulum veya arka uç sunucusu gerektirmez. Openterface Mini-KVM ile kullanılmak üzere tasarlanan bu ürün, başsız cihazların yönetimi için taşınabilir bir çözüm sağlamak üzere WebUSB, WebSerial ve WebHID gibi yeni ortaya çıkan web standartları üzerine kurulmuştur.

![Screenshot of Openterface Viewer Web Interface showing the browser-based control panel](https://assets.openterface.com/images/blog/Kashall-app-ui.webp)
![Screenshot of Openterface Viewer in action controlling a target device](https://assets.openterface.com/images/blog/Kashall-app-in-action.webp)

## Neden Önemlidir

Openterface_QT'nin ilk sürümü kurulum gerektiriyordu ve yalnızca temel işlevler sunuyordu. Buna karşılık Openterface Viewer:

- Kurulum gerektirmeden tarayıcıda çalışır
- Statik dağıtım sayesinde farklı sistemlerde çalışır
- Klavye girişi ve fare yakalama gibi özelliklerle işlevselliği geliştirir
- Donanım kontrolü için modern web API'lerinin gücünü gösterir

## Temel Özellikler

1. **Kurulumsuz Çalıştırma**
   Doğrudan Chrome gibi Chromium tabanlı tarayıcılarda çalışır; yazılım veya sunucu kurulumu gerekmez.

2. **İstemci Tarafı Mimarisi**
   Statik bir web uygulaması olarak oluşturulan ve Cloudflare Sayfalarında ([openterface-viewer.pages.dev](https://openterface-viewer.pages.dev)) barındırılan Viewer, aşağıdakileri kullanarak doğrudan Mini-KVM ile iletişim kurar:

    - Video ve kontrol verileri için **WebUSB**
    - **WebSerial** yapılandırma için
    - Fare ve klavye girişi için **WebHID**

3. **Hafif ve Taşınabilir**
   Minimum kaynak kullanımıyla dizüstü bilgisayarlardan tabletlere kadar çeşitli kurulumlara hızlı erişim için idealdir.

4. **Gelişmiş Kontrol Özellikleri**
   Fare yakalama, klavye giriş desteği ve duyarlı bir arayüz ile QT'nin ilk sınırlamalarını geliştirir.

## Uygulama

- **Codebase**: Hızlı kurulumlar için modüler tasarım ve Vite ile TypeScript'te geliştirildi
- **Barındırma**: Cloudflare Sayfaları aracılığıyla statik dağıtım
- **Bağımlılıklar**: Düşük seviyeli cihaz etkileşimleri için "usb" ve "seriport" kitaplıklarını içerir
- **Kullanıcı Arayüzü**: Canlı video beslemesi, giriş geçişleri ve dinamik çözünürlük desteği içeren duyarlı web arayüzü
- **Hata İşleme**: Özellikle USB 3.0/3.1 bağlantı noktalarında kararsız USB API davranışını yönetmek için yeniden bağlanma mantığını içerir

## Sisteme Genel Bakış

- **Ana Cihaz**: Herhangi bir Chromium tarayıcısı (ör. Chrome)
- **Mini-KVM**: USB ve HDMI aracılığıyla başsız cihazlara bağlanır
- **Hedef Cihaz**: SBC'ler veya sunucular (ör. Jetson Nano)
- **İletişim**: USB (kontrol + veri), HDMI (video)
- **Dağıtım**: Cloudflare Sayfalarında barındırılan statik web uygulaması

## Zorluklar ve Sınırlamalar

- WebUSB/WebSerial/WebHID hala deneyseldir ve farklı bağlantı noktaları veya platformlarda tutarsız davranabilir
- Chromium tabanlı tarayıcılarla sınırlıdır
- Görüntüleyici gelişimi zaman zaman hızlı QT güncellemelerini takip etse de Kashall'ın katkıları QT'deki yeni özellikleri doğrudan etkiledi (ör. gelişmiş fare desteği)

## Etki

Openterface Viewer, tak ve çalıştır KVM erişimini yeniden tanımlıyor; indirme yok, sürücü yok; yalnızca bir tarayıcı açın ve başlayın. Aşağıdakiler için pratik bir araçtır:

- Taşınabilir uzaktan kumandaya ihtiyaç duyan BT profesyonelleri
- SBC'leri ve başsız cihazları yöneten hobiciler
- Kurulumlarını karmaşıklaştırmadan platformlar arasında çalışan geliştiriciler

Bu proje aynı zamanda gelecekte daha gelişmiş, platformlar arası araçların önünü açarak web yerel donanım arayüzlerinin büyüyen potansiyelini de vurguluyor.

## Daha Fazlasını Keşfedin

- Şimdi deneyin: [openterface-viewer.pages.dev](https://openterface-viewer.pages.dev)
- GitHub Deposu: [github.com/kashalls/openterface-viewer](https://github.com/kashalls/openterface-viewer)
- Yarışma Sayfası: [USB-KVM DIY Challenge 2024](https://www.crowdsupply.com/techxartisan/usb-kvm-diy-challenge-2024)

USB-KVM DIY Challenge 2024'teki bu zarif ve ileri görüşlü çözüm için **Kashall**'a özellikle teşekkür ederiz!