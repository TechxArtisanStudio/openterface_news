---
locale: es
translationKey: "20251224-kvm-go-demo-software-hardware"
slug: "20251224-kvm-go-demo-software-hardware"
title: "Nuevo video de demostración, progreso del software y lo que hay dentro del KVM-GO"
description: "Mira el nuevo video de demostración del KVM-GO que muestra las versiones HDMI/DP/VGA en acción. Aprende sobre el software unificado para Mini-KVM y KVM-GO, actualizaciones de hardware que incluyen el procesador de video MS2130S 4K@60Hz y la MCU CH32V208, además de características futuras como el soporte personalizado para EDID. Actualización de la campaña: $72k con más de 220 patrocinadores."
date: 2025-12-24
channel: product
product: kvm-go
topic: ["software", "campaign", "community"]
category: "Actualizaciones del producto"
tags: ["KVM-GO", "Actualizaciones del producto", "Software", "Hardware", "Video de demostración", "Crowdfunding", "Análisis técnico"]
featured: true
draft: false
author: "TechxArtisan Studio"
---

¡Hola a todos! Lo siento por el período tranquilo. Estuvimos enfocados en pulir tanto el hardware como el software para [KVM-GO](https://openterface.com/product/kvm-go/), y el tiempo pasó rápido. Hasta finales de diciembre, alcanzamos los **$72k con más de 220 patrocinadores**, lo cual es asombroso. Si puedes ayudarnos a llevarlo más lejos, por favor **difunde la palabra**!

Gracias muchísimas por su paciencia y apoyo. Y sí, la Navidad definitivamente añadió caos 🙂🎄 Ahora, actualicemos.

![blog-Gemini_Generated_Image_kvm-go](https://assets.openterface.com/images/blog/Gemini_Generated_Image_kvm-go.webp)
*Imagen temática de Navidad generada con Nano Banana, basada en fotos reales de nuestros productos KVM-GO.*

## Nuevo video de demostración: KVM-GO en acción

Acabamos de publicar un [**nuevo video de demostración**](https://www.youtube.com/watch?v=459rWCQbJRE) mostrando el KVM-GO en uso real.


En el video, verás:

* Versiones KVM-GO **HDMI / DP / VGA** en acción
* Lo que incluye **en la caja**
* Cómo controlar dispositivos objetivo diferentes
* Cómo el KVM-GO se ajusta a flujos de trabajo reales, desde el acceso rápido hasta configuraciones multi-objetivo

Si te interesa más pruebas casuales, manuales y uso real, no dudes en revisar nuestro [medios sociales](https://openterface.com/community/). A menudo compartimos clips de pruebas crudas y escenarios prácticos que muestran cómo se comporta el KVM-GO en frentes tecnológicos reales.

## Progreso del software: Una aplicación para Mini-KVM y KVM-GO

En cuanto al software, hemos dado un paso sólido hacia adelante.

Nuestras últimas actualizaciones permiten que la **misma aplicación Openterface funcione de forma fluida con ambos Mini-KVM y la serie KVM-GO**. Para los usuarios, esto significa:

* Una experiencia coherente a través de los productos
* Menos fragmentación si usas más de un dispositivo Openterface

También hemos dedicado tiempo a mejorar el **rendimiento del teclado y mouse**, con enfoque en:

* Menor latencia general
* Manejo más estable de la entrada, incluyendo una mejor detección del estado de conexión y calidad de señal
* Respuesta más ágil durante interacciones rápidas o continuas

Aunque el gaming no es el uso principal de nuestros soluciones KVM, aún nos preocupamos profundamente por la responsividad de la entrada en escenarios reales. Si te interesa los detalles técnicos, especialmente en macOS, recientemente publicamos un análisis profundo aquí:
👉 **[Velocidad del mouse y rendimiento de gaming en Openterface Mini-KVM con macOS](https://news.openterface.com/apps/20251218-macos-mouse-speed/)**

Muchas de las mejoras discutidas allí ahora se están integrando directamente en nuestro stack de software unificado para ambos Mini-KVM y KVM-GO.

## Mejoras principales del hardware en el KVM-GO (en comparación con Mini-KVM)

Para quienes están interesados en lo interno, aquí hay una rápida comparación de cambios clave del Mini-KVM al KVM-GO.

### Mejora en el pipeline de video

| Aspecto           | **MS2109 (Mini-KVM)**    | **MS2130S (KVM-GO)** | Mejora           |
| ---------------- | ------------------------ | -------------------- | ----------------- |
| Entrada HDMI       | 4K @ 30Hz                | 4K @ 60Hz            | Ancho de banda de entrada x2    |
| Salida USB video   | 1080p @ 30Hz             | 4K @ 60Hz            | Flujo de píxeles x4   |
| Escalado interno   | 4K → 1080p               | 4K nativo            | Sin escalado forzado |
| Latencia de frame   | Mayor (escalador + búfer) | Menor (ruta directa)  | Latencia reducida       |

### Mejora en la emulación de teclado y mouse USB

| Aspecto             | **CH340 + CH9329 (Mini-KVM)** | **CH32V208 (KVM-GO)** | Mejora     |
| ------------------ | ----------------------------- | --------------------- | ---------- |
| Cantidad de chips   | 2 chips                       | MCU único             | Sistema más simple  |
| Manejo USB          | Puente USB–Serial             | Dispositivo USB nativo     | Latencia más baja   |
| Generación de HID    | Función fija                  | Definida por firmware      | Control total    |
| Ruta de datos       | USB → UART → HID              | USB → HID             | Eliminado un salto |
| Compatibilidad BIOS  | Mezclada                      | Excelente             | Más confiable   |

## Características avanzadas en desarrollo activo

Varias características avanzadas están planeadas y actualmente en desarrollo para el firmware final del KVM-GO. Una rápida vista previa:

* **Soporte personalizado para EDID** para resolver problemas de compatibilidad con pantallas
* **Control basado en scripts** para automatización y flujos de trabajo avanzados

Compartiremos más detalles a medida que estas características se desarrollen.

## Compromiso con el código abierto (como siempre)

Sí, **el KVM-GO permanecerá completamente de código abierto**.

Una vez que el diseño del hardware esté finalizado para la producción masiva, solicitaremos **certificación OSHWA (Asociación de Hardware de Código Abierto)**.

Todos los archivos de diseño del hardware y modelos STL se publicarán aquí:
👉 [https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware](https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware)

La transparencia y la colaboración comunitaria siguen siendo esenciales para lo que hacemos.

## Últimos días de la campaña: Un recordatorio amable

Ahora estamos en los **últimos días** de la campaña de crowdfunding.

El crowdfunding es la **mejor oportunidad para obtener el KVM-GO al menor precio**. Una vez que termine la campaña y pasemos a pedidos post-crowdfunding, el precio subirá.

Si has estado indeciso, ahora es el momento.

👉 **Apóyala y asegura tu unidad en Crowd Supply:**
[https://www.crowdsupply.com/techxartisan/openterface-kvm-go](https://www.crowdsupply.com/techxartisan/openterface-kvm-go)

Gracias nuevamente por su paciencia, confianza y apoyo. Próximas actualizaciones llegarán pronto, y trataremos de no quedarnos callados otra vez. Nuevos deseos navideños desde todos nosotros.

**Equipo Openterface | TechxArtisan**
