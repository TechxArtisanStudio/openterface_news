---
locale: ar
translationKey: "250520-casey"
slug: "250520-Casey"
title: "iPad KVM: جسر إبداعي بين iOS والأجهزة ذات المستوى المنخفض"
description: "اكتشف كيف أنشأ Casey Howard حل iPad KVM المبتكر باستخدام Raspberry Pi كجسر، مما يتيح التحكم المباشر على مستوى BIOS في الأجهزة من iPad. تعرف على مشروع DIY هذا الذي يجمع بين وضع أداة Raspberry Pi وVNC وOpenterface Mini-KVM لإدارة الأجهزة مقطوعة الرأس."
date: 2025-05-20
channel: events
eventType: contest
topic: ["shipping", "software", "campaign", "event", "community", "analysis"]
category: "Product Updates"
featured: false
draft: false
author: "Openterface Team"
---
يُظهر مشروع Casey Howard المبتكر "iPad KVM" حلًا استثنائيًا للمشكلات أثناء العمل. بصفته طالبًا في علوم الكمبيوتر والرياضيات في جامعة كنتاكي، حيث يحصل كل طالب على جهاز iPad، واجه كيسي تحديًا: الوصول إلى الأجهزة ذات المستوى المنخفض وإدارتها مباشرة من جهاز iPad الخاص به. بعد اكتشاف أن Openterface Mini-KVM يفتقر إلى اتصال iOS الأصلي، قاموا ببناء الجسر الخاص بهم.

![Screenshot of YouTube chat interview with Casey on iPad KVM](https://assets.openterface.com/images/blog/Casey-iPad-KVM-chat.webp)

##التحدي

- يقوم iOS بإغلاق USB، مما يمنع برمجة Arduino والتحكم على مستوى BIOS والوصول إلى الخادم بدون رأس
- احتاج Casey إلى طريقة لاستخدام جهاز iPad الخاص به كوحدة تحكم على مستوى BIOS لكل شيء بدءًا من Arduinos وحتى خوادم Ubuntu، بدون شبكة Wi-Fi أو طاقة خارجية أو أجهزة طرفية ضخمة

## الحل: جسر راسبيري باي

يستخدم الابتكار الأساسي للمشروع Raspberry Pi في "وضع الأداة" كجسر ثنائي الغرض:

1. ** يستمد الطاقة **
    - تم تكوين منفذ USB-C الخاص بـ Pi لسحب 5 فولت مباشرة من جهاز iPad
2. ** يحمل حركة مرور IP **
    - يحمل جسر الشبكة الداخلي حزم IP عبر نفس كابل USB-C
3. ** يخدم VNC **
    - يسمح خادم VNC الموجود على Pi بسطح المكتب البعيد المباشر على iPad، دون الحاجة إلى اتصال Wi-Fi
4. ** محركات KVM **
    - OpenterfaceQT على واجهات Pi مع أجهزة Mini-KVM
    - تعمل جلسة VNC الخاصة بجهاز iPad على بث الفيديو وإرسال أحداث لوحة المفاتيح/الماوس إلى أي جهاز كمبيوتر مستهدف

## تفاصيل التنفيذ

1. ** تكوين راسبيري باي **

    - تمكين وضع الأداة الذكية في _/boot/config.txt_ و_/etc/modules_
    - قم بتكوين USB-C لتوصيل الطاقة بجهد 5 فولت
    - إنشاء جسر شبكة باستخدام IP ثابت (10.55.0.1)

2. **إعداد سطح المكتب البعيد**

    - تثبيت وتكوين _x11vnc_ على Pi
    - تشغيل خادم VNC تلقائيًا على واجهة الجسر
    - على جهاز iPad، اتصل بعميل VNC (على سبيل المثال، RNC Viewer) إلى "10.55.0.1" أو "pi.local"

3. **تكامل Mini-KVM**

    - تجميع OpenterfaceQT لهندسة ARM
    - قم بتوصيل Mini-KVM بمنافذ USB وHDMI الخاصة بـ Pi
    - قم بتشغيل Pi عبر منفذ USB-C الخاص به

4. ** العملية **
    - قم بتوصيل Pi بجهاز iPad باستخدام كابل USB-C واحد
    - قم بتشغيل عميل VNC والمصادقة
    - افتح واجهة Mini-KVM على Pi
    - قم ببث بث الفيديو الخاص بالجهاز المستهدف والتحكم فيه في الوقت الفعلي

## هندسة النظام

![Standalone KVM Setup](https://assets.openterface.com/images/blog/Casey-Setup-with-Pi-and-minikvm.webp)

### المكونات

- **iPad (المضيف)**: عميل VNC ومصدر الطاقة
- **Raspberry Pi 5**: أداة USB وجسر الشبكة ومضيف OpenterfaceQT
- **Openterface Mini-KVM**: واجهة الأجهزة لأجهزة الكمبيوتر المستهدفة
- **الاتصال**: كابلات USB-C (طاقة + شبكة)، وHDMI، وUSB-A

## التأثير وإمكانية الوصول

باستخدام جهاز iPad وPi وMini-KVM فقط، قام Casey بتحويل الأجهزة اللوحية اليومية إلى وحدات تحكم على مستوى BIOS، دون الحاجة إلى معدات إضافية أو شبكة. يعمل هذا الحل بالكامل على طاقة بطارية iPad، ولا يتطلب أي طاقة خارجية أو إنترنت، ويظل قابلاً للنقل بدرجة كبيرة للاستخدام الميداني. إن وثائق Casey التفصيلية ونصوص الإنشاء تجعل هذا النهج في متناول أي شخص لديه Raspberry Pi وiPad.

شكر خاص لـ Casey Howard، الفائز بـ **Hardware Hero** في تحدي USB-KVM DIY 2024، لتوسيع قدرات Mini-KVM وتوفير حل بديل أنيق حتى يتوفر دعم iOS الأصلي. تعرف على المزيد هنا:

- [Contest on Crowd Supply](https://www.crowdsupply.com/techxartisan/usb-kvm-diy-challenge-2024)
- [GitHub: iPad-KVM](https://github.com/FireFreexe/iPad-KVM)