---
locale: tr
translationKey: "250520-veera-post"
slug: "250520-Veera-post"
title: "Ses Köprüsü Konsepti: İlham Veren Çift Yönlü Ses ve Yapay Zeka İş Akışları"
description: "Veera Pendyala'nın Openterface Mini-KVM için çift yönlü ses iletişimi ve yapay zeka iş akışlarına olanak tanıyan yenilikçi Ses Köprüsü konseptini keşfedin. Bu NVIDIA mühendisinin vizyonu, konuşmaya dayalı yapay zeka ve ev otomasyonu için sıfır altyapılı bir çözüm oluşturmak üzere USB ses donanım kilitlerini, Jetson Nano'yu ve KVM teknolojisini birleştirir."
date: 2025-05-20
channel: events
eventType: contest
topic: ["software", "campaign", "event", "community"]
category: "Product Updates"
featured: false
draft: false
author: "Openterface Team"
---
Veera Pendyala'nın uygulamalı deneylerle kanıtlanmış "Ses Köprüsü" konsepti, Mini-KVM'de çift yönlü ses ve Jetson destekli yapay zeka için ileri görüşlü fikirlerin kıvılcımını ateşledi. Veera, NVIDIA'da 15 yılı aşkın yazılım mühendisliği deneyimine sahip Kıdemli Yazılım Mühendisi olarak bir vizyon keşfetti: ana bilgisayar – hedef ses, konuşma yapay zekası ve ev otomasyonu iş akışlarını USB KVM'ye getirmek.

Veera Pendyala, USB-KVM DIY Challenge 2024'e ileri görüşlü bir fikir getirdi. Openterface Mini-KVM ile çift yönlü sesi etkinleştirme konsepti, özellikle Jetson Nano gibi tek kartlı bilgisayarlar için uzaktan kontrolü ve yapay zeka destekli uygulamaları geliştirmeyi amaçlıyor. Veera'nın USB ses donanım kilitleriyle yaptığı deneyler ve röportajı, ev otomasyonu ve konuşmaya dayalı yapay zeka iş akışlarında ses köprüleme potansiyeli hakkında ilham verici tartışmalara yol açtı.

![Veera discussing audio bridge ideas with Billy & Kevin](https://assets.openterface.com/images/blog/Veera-audio-bridge-chat-with-veera.webp)

## Mücadele

- **Tek Yönlü Ses**
    Mini-KVM'den gelen HDMI, yalnızca _hedef → ana bilgisayar_ sesini aktarır; ana bilgisayar mikrofonunun uzak cihaza ulaşması için bir yol yoktur

- **Sıfır Altyapı Hedefi**
    Tüm çözümler internet, harici güç veya büyük ekstralar olmadan çalışmalıdır

- **Yapay Zeka ve Otomasyon Kullanım Durumları**
    Veera, konuşmaya dayalı yapay zeka, uzaktan yardım ve ev izleme senaryoları için başsız bir cihaza canlı konuşma yapılmasını öngörüyor

## Önerilen Köprü Mimarisi

1. **Çift USB Ses Adaptörleri**

    - **Ana bilgisayar tarafındaki donanım kilidi** yerel mikrofonu/sesi yakalar
    - **Hedef taraftaki donanım kilidi** bu sesi uzaktaki makinenin mikrofon jakına enjekte eder

2. **Ses Yönlendiricisi olarak Jetson Nano**

    - İki donanım kilidi arasında eşleme yapmak için ALSA/PulseAudio'yu çalıştırır
    - KVM kontrolü ve potansiyel yapay zeka çıkarımı için OpenterfaceQT'yi barındırır

3. **Video ve Kontrol için Mini KVM**
    - HDMI, videoyu ve hedef sesi ana bilgisayara geri taşır
    - Tek USB bağlantısı klavye/fare ve (gelecekteki) ses kanallarını yönetir
4. **Yazılım Kanal Eşlemesi**
    - OpenterfaceQT'nin birden fazla USB arayüzünü açığa çıkaracak şekilde genişletilmesini önerir
    - Ana bilgisayar mikrofonunu etkinleştirmek için kullanıcı arayüzü geçişi → KVM akışlarının yanı sıra hedef yönlendirme

## Etki ve Topluluk

Veera'nın deneyleri, Mini-KVM ekosistemine ses eklenerek kilidi açılmayı bekleyen kullanım senaryolarının genişliğini vurguluyor. Konseptleri, yapay zeka destekli iş akışları, ev otomasyonu ve daha zengin uzaktan BT deneyimlerine yönelik yol haritamızla yakından örtüşüyor.

Vizyonunu paylaştığı ve yeni nesil Mini-KVM özelliklerimize ilham verdiği için Veera Pendyala'ya özellikle teşekkür ederiz. Daha fazla bilgi edinin ve USB-KVM Kendin Yap Yarışması 2024 sayfasındaki diğer girişleri keşfedin:

- [Crowd Supply Challenge](https://www.crowdsupply.com/techxartisan/usb-kvm-diy-challenge-2024)

Openterface Mini-KVM ve Yarışmadaki harika fikirler hakkında daha fazla bilgi edinmek için Helen Leigh, Billy R.B. Wang ve Kevin Peng ile YouTube yayın konuşmamız Crowd Supply Teardown'a katılın:
[https://youtu.be/Tp4f_uxEo6E](https://youtu.be/Tp4f_uxEo6E)