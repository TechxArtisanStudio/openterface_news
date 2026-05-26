---
locale: tr
translationKey: "20260203-macos-ubuntu-copy-paste"
slug: "20260203-macos-ubuntu-copy-paste"
title: "Ubuntu Kopyala/Yapıştır İpucu (macOS → Ubuntu)"
description: "Ubuntu'yu macOS'tan Openterface ile kontrol ederken yapıştırma kısayollarını düzeltin. Güvenilir Ctrl stili yapıştırma için Windows Modunu kullanın veya Mac Modunda geçici çözüm olarak Düzen → Yapıştır'ı kullanın."
date: 2026-02-03
channel: software
topic: ["software"]
category: "Product Updates"
featured: false
draft: false
author: "Openterface"
---
**Ubuntu**'yu **macOS** üzerinden **Openterface** kullanarak kontrol ederken, kısayol yapıştırma **Mac Modunda** güvenilir şekilde çalışmayabilir. Bu kılavuzda önerilen düzeltme ve basit bir geçici çözüm gösterilmektedir.

![setting](https://assets2.openterface.com/images/setting.webp)

---

## Hızlı Düzeltme (Ubuntu/Linux için önerilir)

1. macOS'ta **Openterface**'i açın.
2. **Ayarlar**'a gidin.
3. **Hedef cihaz klavye düzeni modunu** bulun.
4. **Windows Modu**'nu seçin.

![win-mode](https://assets2.openterface.com/images/win-mode.webp)


✅ Sonuç: Yapıştırma kısayolları Ubuntu'da beklendiği gibi davranıyor (Ctrl tarzı davranış).

![win-ctrl+v](https://assets2.openterface.com/images/win-ctrl+v.webp)

---

## Geçici Çözüm (Mac Modunda kalmak istiyorsanız)

**Mac Modu**'nu korumayı tercih ederseniz menüyü kullanarak yine de güvenilir bir şekilde yapıştırabilirsiniz:

- **Düzenle → Yapıştır**

![edit-paste](https://assets2.openterface.com/images/edit-paste.webp)

✅ Sonuç: Mac Modunda kısayol yapıştırma tutarsız olsa bile yapıştırma işlemi çalışır.

![workaround](https://assets2.openterface.com/images/workaround.webp)

---

## Bu neden oluyor?

Çoğu Ubuntu uygulaması yapıştırma için **Ctrl tabanlı** kısayolları kullanır. Bazı kurulumlarda, **Mac Modu** kısayol eşlemesi yapıştırmayı tutarlı bir şekilde tetiklemeyebilir, **Düzenle → Yapıştır** ise güvenilir bir şekilde çalışır.

---

## Hızlı Özet

- **Ubuntu/Linux'ta en iyi deneyim:** **Windows Modunu** kullanın
- **Mac Modunda kalırsanız:** **Düzenle → Yapıştır** seçeneğini kullanın

---

## Kurulumunuz için doğru modu belirleme konusunda yardıma mı ihtiyacınız var?

Hangi modu kullanacağınızdan emin değilseniz, işte kısa bir genel kural:

- Hedef işletim sisteminiz **Ubuntu/Linux** ise **Windows Modu** ile başlayın (genel kısayollar için en tutarlısı).
- Esas olarak **macOS hedeflerini** kontrol ediyorsanız ve Mac tarzı kısayollar istiyorsanız **Mac Modu**'nu kullanın.

Farklı hedef işletim sistemleri arasında sık sık geçiş yapıyorsanız, bu sayfayı yer imlerine eklenmiş olarak tutmayı düşünün. Genellikle tek tıklamayla yapılan bir düzeltmedir.

---

## SSS

**Windows Modu Mac kısayollarımı değiştirir mi?**  
Openterface'in **hedef cihaza** kısayolları nasıl gönderdiğini değiştirir, böylece Ubuntu beklenen **Ctrl tarzı** davranışı alır.

**Menü yapıştırmayı herhangi bir modda kullanabilir miyim?**  
Evet — **Düzenle → Yapıştır** her iki modda da güvenilir bir seçenektir.

**Bu durum Raspberry Pi işletim sistemini de etkiliyor mu?**  
Genellikle daha az etkilenir, ancak benzer bir davranışla karşılaşırsanız aynı düzeltme uygulanır.