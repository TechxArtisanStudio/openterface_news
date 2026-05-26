---
locale: tr
translationKey: "240531-livestram-with-david-make"
slug: "240531_livestram_with_david_make"
title: "MAKE: Magazine'den David Groom ile Günlük Sohbet: Openterface Mini-KVM'nin Hikayesi"
description: "Teknik sanat projelerinden topluluk odaklı geliştirmeye kadar Openterface Mini-KVM'nin başlangıç ​​hikayesini ve başsız cihaz yönetimi için açık kaynaklı bir çözüm oluşturma yolculuğumuzu tartışırken MAKE: Magazine'den David Groom ile canlı yayınımızı izleyin."
date: 2024-05-31
channel: product
product: minikvm
topic: ["shipping", "production", "beta", "software", "campaign", "event", "community", "analysis"]
category: "Product Updates"
featured: false
draft: false
author: "Openterface Team"
---
Herkese merhaba!

MAKE: Magazine'den David Groom'la muhteşem bir [YouTube livestream](https://www.youtube.com/live/lwitzvmxsgc?si=s9a1t5_Sce5v22e1)'ı tamamladık! Oturum sırasında, yalnızca dizüstü bilgisayarınızı kullanarak başsız cihazları ve Raspberry Pis gibi tek kartlı bilgisayarları zahmetsizce kontrol etmek için tasarlanmış yenilikçi bir açık kaynaklı donanım çözümü olan Openterface Mini-KVM'nin arkasındaki hikayeyi derinlemesine inceledik. Daha fazla ayrıntı için YouTube canlı yayınına göz atabilir veya aşağıdaki hikayeyi okuyabilirsiniz.

![youtube-with-david-2](https://www.crowdsupply.com/img/2b83/081f1376-b266-4e83-b1af-5628dbe62b83/youtube-with-david_jpg_gallery-lg.jpg)

## Bir Fikrin Doğuşu

Mini-KVM'nin yolculuğu Çin'in hareketli Guangzhou şehrinde TechxArtisan stüdyomuzda başladı. Son beş yılda yerel ve uluslararası sanatçılara yönelik çok sayıda teknoloji sanat projesine derinlemesine dahil olduk. Çalışmalarımız arasında yapay zeka algılamalı etkileşimli aydınlatma kurulumları, tiyatro gösterileri için robotik kollar, rastgele labirentleri çözen sürücüsüz mini arabalar ve hatta çöller ve ormanlar gibi kimsenin olmadığı toprakları keşfetmek için tasarlanmış bir robot köpek inşa etmek yer alıyor.

![techxartisan_tech_art](https://www.crowdsupply.com/img/bce8/9c580077-993a-42b2-b781-a30d34acbce8/techxartisan-tech-art_jpg_gallery-lg.jpg)

### Yaygın Bir Baş Ağrısı
Çalışmalarımızda tekrar eden bir zorluk, Raspberry Pis ve Jetson Nanos gibi monitörleri, klavyeleri veya ağ bağlantısı olmayan çok sayıda başsız bilgisayarı yönetmekti. Bu durum çoğu zaman zorlu koşullarda bu cihazlara sorun gidermek ve bunlara erişmek için yedek monitör ve klavyelerin çılgınca aranmasına yol açıyordu.

### Geçici Çözümler
Başlangıçta, pil paketleri ve dokunmatik yüzeyli kablosuz mini klavyelerle çalışan derme çatma taşınabilir monitör çözümlerine başvurduk. Ancak bunlar sıklıkla unutuluyor veya yanlış yerleştiriliyordu; bu da kodlama ve kurulum için her zaman yanımızda taşıdığımız dizüstü bilgisayarlardan yararlanabilecek özel bir donanım çözümüne ihtiyaç duyulmasına neden oluyordu.

![diy-monitor-keyboard](https://www.crowdsupply.com/img/2efd/4459eff9-2d01-4552-ac91-a1941ed82efd/diy-monitor-keyboard_jpg_gallery-lg.jpg)
*Bu iki cihazın sahadaki projeler için taşınması gerekir.*

### İlk Prototip
İlk Kendin Yap prototipimiz, başsız cihazdan video almak için bir yakalama kartı ile bir USB klavye/fare simülatörünün, tümü dizüstü bilgisayarlarımıza bağlanan tek bir USB kablosuna entegre edilmiş basit ama etkili bir kombinasyonuydu. 

![/early-mini-kvm-pcb](https://www.crowdsupply.com/img/1f7e/fb91d879-dee7-45cc-bbdc-dc3ea5731f7e/early-mini-kvm-pcb_jpg_gallery-lg.jpg)
*Mini-KVM PCB'nin ilk versiyonlarından biri*

Mini KVM prototipini David'e göstermek amacıyla harika teknoloji sanat projelerimizi Kasım 2023'te Shenzhen Maker Faire'de sergiledik. Ancak David'in hediyeleri bizi o kadar heyecanlandırdı ki unuttuk!

![techxartisan_team_with_david_groom](https://www.crowdsupply.com/img/bc4e/17bdcc6e-0a34-4f2f-bf64-fee0b8d6bc4e/techxartisan-team-with-david-groom_jpg_gallery-lg.jpg)
*MAKE: Magazine'den çıkartmalar ve kartpostallar gerçekten harika!*

## Topluluk Geri Bildirimi ve Gelişimi
Prototipimizi Reddit'te paylaştıktan sonra [the community](/community/)'dan çok değerli geri bildirimler aldık ve bu geri bildirimler bizi çözümümüzü geliştirip gösterişli bir ürüne dönüştürmeye teşvik etti. Bu topluluk desteği, geçici cihazımızı ev çalışanları, sistem yöneticileri, teknoloji meraklıları ve başsız bilgisayarlarla çalışan herkes için şık, etkili bir araca dönüştürmede etkili oldu.

![got_feedback_from_reddit](https://www.crowdsupply.com/img/b24b/e04dfa15-1e5b-4bfb-b97c-acdba784b24b/got-feedback-from-reddit_jpg_gallery-lg.jpg)
*Evdeki çalışanlardan çok fazla geri bildirim aldım*

## Şüphelerin Üstesinden Gelmek
Mevcut benzer çözümlerle rekabet etme konusundaki ilk şüphelere rağmen, çevrimiçi topluluklardan gelen olumlu yanıtlar ve yapıcı öneriler, potansiyel kullanım durumlarının netleşmesine yardımcı oldu ve güvenimizi artırdı. Bu destek ve çabalarımızın onaylanması olmasaydı, projeyi daha fazla sürdüremeyebilirdik.

## Kitlesel Fonlama ve Gelecek Planları
Crowd Supply'da Openterface Mini-KVM için kitlesel fonlama kampanyası ciddi bir ivme kazanıyor ve yaklaşık iki hafta kaldı. Bu kampanya yalnızca Mini-KVM'yi geliştirmekle ilgili değil; bu, topluluk odaklı inovasyonun gücünün bir kanıtıdır. Daha sonra, üretim yönetimine, yazılım iyileştirmelerine ve bu kullanışlı aygıtın harika destekçilerimize teslim edilmesine odaklanacağız; bunların tümü muhteşem açık kaynak topluluğumuz tarafından destekleniyor.

![techxartisan_openterface_discord](https://www.crowdsupply.com/img/8d7a/58e213e7-7a81-47b4-9d6b-69be3c698d7a/techxartisan-openterface-discord_jpg_gallery-lg.jpg)
*Beta test kullanıcıları günlük teknoloji görevlerinde Openterface Mini-KVM kullanımlarını TechxArtisan'ın Discord sayfasında paylaşıyorlar*

## Açık Kaynak Vizyonunu Benimsiyorum

Openterface Mini-KVM, yaratıcılığımızın, azmimizin ve destekleyici açık kaynak topluluğunun bir kanıtıdır. Kişisel zorluklarımıza basit bir çözüm olarak başlayan şey, dünya çapındaki bilgisayar korsanlarına, tamircilere ve teknoloji meraklılarına fayda sağlayacak çok yönlü, açık kaynaklı bir araca dönüştü. Mini-KVM resmi çıkışına yaklaştıkça daha fazla güncelleme için bizi takip etmeye devam edin!