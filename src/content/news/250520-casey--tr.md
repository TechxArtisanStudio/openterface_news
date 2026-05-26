---
locale: tr
translationKey: "250520-casey"
slug: "250520-Casey"
title: "iPad KVM: iOS ve Düşük Seviyeli Cihazlar Arasında Yaratıcı Köprü"
description: "Casey Howard'ın, Raspberry Pi'yi köprü olarak kullanarak, cihazların bir iPad'den doğrudan BIOS düzeyinde kontrol edilmesini sağlayan yenilikçi bir iPad KVM çözümünü nasıl oluşturduğunu keşfedin. Başsız cihaz yönetimi için Raspberry Pi gadget modunu, VNC'yi ve Openterface Mini-KVM'yi birleştiren bu Kendin Yap projesi hakkında bilgi edinin."
date: 2025-05-20
channel: events
eventType: contest
topic: ["shipping", "software", "campaign", "event", "community", "analysis"]
category: "Product Updates"
featured: false
draft: false
author: "Openterface Team"
---
Casey Howard'ın yenilikçi "iPad KVM" projesi, olağanüstü sorun çözme eylemini gösteriyor. Her öğrenciye bir iPad verilen Kentucky Üniversitesi'nde Bilgisayar Bilimi ve Matematik öğrencisi olarak Casey bir zorlukla karşılaştı: Düşük seviyeli cihazlara doğrudan iPad'lerinden erişmek ve bunları yönetmek. Openterface Mini-KVM'nin yerel iOS bağlantısına sahip olmadığını keşfettikten sonra kendi köprülerini kurdular.

![Screenshot of YouTube chat interview with Casey on iPad KVM](https://assets.openterface.com/images/blog/Casey-iPad-KVM-chat.webp)

## Mücadele

- iOS USB'yi kilitleyerek Arduino programlamayı, BIOS düzeyinde kontrolü ve başsız sunucu erişimini engeller
- Casey'nin iPad'ini Wi-Fi, harici güç veya büyük çevre birimleri olmadan Arduino'dan Ubuntu sunucularına kadar her şey için BIOS düzeyinde bir konsol olarak kullanmanın bir yoluna ihtiyacı vardı

## Çözüm: Raspberry Pi Köprüsü

Projenin temel yeniliği, çift amaçlı bir köprü olarak "gadget modunda" bir Raspberry Pi kullanıyor:

1. **Güç Çeker**
    - Pi'nin USB-C bağlantı noktası doğrudan iPad'den 5 V çekecek şekilde yapılandırılmıştır
2. **IP Trafiğini Taşır**
    - Dahili ağ köprüsü IP paketlerini aynı USB-C kablosu üzerinden taşır
3. **VNC'ye hizmet eder**
    - Pi'deki VNC sunucusu, iPad'de doğrudan uzak masaüstüne izin verir, Wi-Fi gerekmez
4. **KVM'yi çalıştırır**
    - Mini-KVM donanımıyla Pi arayüzlerinde OpenterfaceQT
    - iPad'in VNC oturumu videoyu yayınlar ve klavye/fare olaylarını herhangi bir hedef bilgisayara gönderir

## Uygulama Ayrıntıları

1. **Raspberry Pi Yapılandırması**

    - _/boot/config.txt_ ve _/etc/modules_'da gadget modunu etkinleştirin
    - USB-C'yi 5 V güç dağıtımı için yapılandırın
    - Statik IP ile ağ köprüsü kurun (10.55.0.1)

2. **Uzak Masaüstü Kurulumu**

    - Pi'ye _x11vnc_ kurun ve yapılandırın
    - Köprü arayüzünde VNC sunucusunu otomatik başlat
    - iPad'de bir VNC istemcisi (örn. RNC Görüntüleyici) ile "10.55.0.1" veya "pi.local"a bağlanın

3. **Mini-KVM Entegrasyonu**

    - ARM mimarisi için OpenterfaceQT'yi derleyin
    - Mini-KVM'yi Pi'nin USB ve HDMI bağlantı noktalarına takın
    - Pi'ye USB-C bağlantı noktası üzerinden güç verin

4. **Çalıştırma**
    - Tek bir USB-C kablosu kullanarak Pi'yi iPad'e bağlayın
    - VNC istemcisini başlatın ve kimlik doğrulaması yapın
    - Pi'deki Mini-KVM arayüzünü açın
    - Hedef cihazın video akışını yayınlayın ve gerçek zamanlı olarak kontrol edin

## Sistem Mimarisi

![Standalone KVM Setup](https://assets.openterface.com/images/blog/Casey-Setup-with-Pi-and-minikvm.webp)

### Bileşenler

- **iPad (Ana Bilgisayar)**: VNC istemcisi ve güç kaynağı
- **Raspberry Pi 5**: USB aygıtı, ağ köprüsü ve OpenterfaceQT ana bilgisayarı
- **Openterface Mini-KVM**: Hedef bilgisayarlar için donanım arayüzü
- **Bağlantı**: USB-C (güç + ağ), HDMI ve USB-A kabloları

## Etki ve Erişilebilirlik

Casey, yalnızca bir iPad, bir Pi ve Mini-KVM ile günlük tabletleri ekstra donanıma veya ağa ihtiyaç duymadan BIOS düzeyindeki konsollara dönüştürdü. Bu çözüm tamamen iPad pil gücüyle çalışır, harici güç veya internet gerektirmez ve sahada kullanım için son derece taşınabilir kalır. Casey'nin ayrıntılı belgeleri ve derleme komut dosyaları, bu yaklaşımı Raspberry Pi ve iPad sahibi herkesin erişebilmesini sağlıyor.

USB-KVM Kendin Yap Yarışması 2024'ün **Donanım Kahramanı** kazananımız Casey Howard'a, Mini-KVM'nin yeteneklerini genişlettiği ve yerel iOS desteği mevcut olana kadar zarif bir geçici çözüm sağladığı için özellikle teşekkür ederiz. Daha fazla bilgiyi burada bulabilirsiniz:

- [Contest on Crowd Supply](https://www.crowdsupply.com/techxartisan/usb-kvm-diy-challenge-2024)
- [GitHub: iPad-KVM](https://github.com/FireFreexe/iPad-KVM)