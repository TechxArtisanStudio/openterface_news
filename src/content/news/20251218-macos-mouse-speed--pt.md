---
locale: pt
translationKey: "20251218-macos-mouse-speed"
slug: "20251218-macos-mouse-speed"
title: "Velocidade do Mouse e Desempenho em Jogos do Openterface Mini-KVM no macOS"
description: "Testes abrangentes de desempenho do mouse focados em jogos no Openterface Mini-KVM no macOS. Comparação entre os modos de mouse Absoluto, Evento Relativo e HID Relativo, com taxas de 9600 vs 115200 baud, para uma configuração ideal para jogos."
date: 2025-12-18
channel: software
app: kvm
topic: ["software"]
category: "Product Updates"
featured: false
draft: false
author: "Openterface"
---

### Análise do Comportamento do Mouse com Foco em Jogos

Este artigo resume testes de desempenho do mouse em uso real do **Openterface Mini-KVM no macOS**, com foco em **comportamento do mouse relacionado a jogos**, limitações de baud rate serial e configurações recomendadas.

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">Gaming isn't the main goal of Openterface KVMs, but we pushed them to explore the limits of KVM-over-USB. On macOS, 115200 baud + Relative HID gives the best mouse latency. Built for setup and debugging, tuned to stretch performance further. <a href="https://t.co/ianurD9ArL">pic.twitter.com/ianurD9ArL</a></p>&mdash; TechxArtisan (@TechxArtisan) <a href="https://twitter.com/TechxArtisan/status/2003418343806742992?ref_src=twsrc%5Etfw">December 23, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---

## 1. Software de Teste & Ambiente

### Software

* **Aplicação Host:**
  **Openterface para macOS v1.21** *(Em desenvolvimento)*

* **Ferramenta de Medição no Sistema Alvo:**
  Uma **aplicação de testes interna personalizada**, desenvolvida para medir com precisão entradas de mouse em alta frequência e taxas de processamento de eventos no sistema alvo.

> ⚠️ Como a v1.21 ainda está em desenvolvimento ativo, alguns comportamentos e características de desempenho podem melhorar em versões futuras.

---

### Condições de Teste: Limitação de Velocidade do Mouse

**Nenhuma limitação de velocidade do mouse ou controle artificial de taxa foi aplicada** durante os testes.

A entrada do mouse foi capturada e encaminhada na **velocidade nativa do dispositivo**, limitada apenas por:

* Taxa de polling do hardware do mouse
* Modo de mouse selecionado (Absoluto / Evento Relativo / HID Relativo)
* Baud rate serial
* Tratamento de entrada de mouse pelo sistema operacional alvo

---

## 2. Noções Básicas de Throughput de Dados do Mouse

Cada evento de movimento do mouse transmitido pelo Mini-KVM consiste em:

```
11 bytes = 88 bits
```

### Throughput Serial Teórico

| Baud Rate | Máx. Eventos / Segundo |
| --------- | ---------------------- |
| 9600      | ~109 eventos/s         |
| 115200    | ~1309 eventos/s        |

⚠️ Esses valores representam **limites teóricos máximos**.
O desempenho real é influenciado por:

* Taxa de polling do mouse no host
* Modo de mouse (Absoluto vs Relativo)
* Agendamento de eventos de entrada do macOS
* Bufferização serial e tratamento no firmware
* **Taxa de polling do mouse no sistema alvo**, que pode afetar significativamente a responsividade percebida (por exemplo, taxas padrão baixas em algumas distribuições Linux)

---

## 3. Resultados dos Testes

---

### A. Modo de Mouse Absoluto (9600 & 115200 Baud)

| Tipo de Mouse | Baud Rate | Taxa no Host (Hz) | Taxa no Alvo (Hz) | Observações                                                           |
| ------------- | --------- | ----------------- | ----------------- | --------------------------------------------------------------------- |
| Bluetooth     | 9600      | ~125              | ~75               | Largura de banda serial saturada; entrada em fila, movimento atrasado |
| Com fio       | 9600      | ~150              | ~75               | Largura de banda serial saturada; entrada em fila, movimento atrasado |
| Gamer         | 9600      | ~1000             | ~75               | Entrada de alta frequência fortemente enfileirada; baixa responsividade |
| Bluetooth     | 115200    | ~125              | ~125              | Mapeamento estável 1:1 do host para o alvo                             |
| Com fio       | 115200    | ~175              | ~175              | Throughput melhorado; latência perceptível em movimentos rápidos      |
| Gamer         | 115200    | ~1000             | ~350              | Limite de throughput serial atingido; excesso de entrada enfileirado  |

**Conclusão (Modo Absoluto):**

O modo de mouse absoluto escala com o baud rate, mas continua limitado por **throughput serial e bufferização de entrada**.
A **9600 baud**, todos os tipos de mouse sofrem gargalo e apresentam atraso no movimento.
A **115200 baud**, mouses comuns apresentam comportamento estável, mas **mouses gamer de alta taxa de polling ainda excedem a largura de banda disponível**, introduzindo latência.

**O modo absoluto é adequado para controle de desktop, não para jogos sensíveis à latência.**

---

### B. Modo de Evento de Mouse Relativo

O Modo de Evento de Mouse Relativo captura **eventos de movimento do mouse diretamente da janela do sistema operacional**, calcula o **delta de movimento entre posições consecutivas do cursor** e encaminha apenas os dados de movimento relativo para o sistema alvo.

Este modo:

* **Não requer permissões adicionais do sistema**
* É independente de **coordenadas absolutas da tela**
* Se beneficia de uma **janela de captura maior**, permitindo deltas de movimento mais precisos
* Evita bufferização por posição absoluta, resultando em **menor latência e melhor responsividade**

#### Desempenho do Modo de Evento de Mouse Relativo

| Tipo de Mouse | Baud Rate | Taxa no Host (Hz) | Taxa no Alvo (Hz) | Observações                                         |
| ------------- | --------- | ----------------- | ----------------- | --------------------------------------------------- |
| Bluetooth     | 9600      | ~100              | ~90               | Próximo ao limite serial; estável para uso casual   |
| Com fio       | 9600      | ~125              | ~90               | Largura de banda serial saturada; leve latência     |
| Gamer         | 9600      | ~1000             | ~100              | Polling alto excede a largura de banda; entrada comprimida |
| Bluetooth     | 115200    | ~125              | ~125              | Mapeamento 1:1 host-alvo                             |
| Com fio       | 115200    | ~180              | ~150              | Throughput melhorado; rastreamento suave            |
| Gamer         | 115200    | ~1000             | ~450              | Melhor desempenho observado; limitado pelo serial  |

🔴 **9600 baud é insuficiente para mouses gamer de alto polling**  
🟢 **115200 baud permite entrada responsiva de nível gamer no modo Evento Relativo**

---

### C. Modo de Mouse HID Relativo

O Modo de Mouse HID Relativo **converte diretamente a entrada HID do mouse no macOS em eventos HID no sistema alvo**, ignorando o processamento do cursor em nível de janela e o mapeamento de coordenadas absolutas.

Este modo:

* Opera com **eventos de mouse em nível HID bruto**
* **Não depende do tamanho da janela da aplicação**
* Preserva as **características nativas de polling do mouse**
* Minimiza bufferizações e traduções intermediárias
* Oferece a **menor latência** entre todos os modos de mouse

Como resultado, o Modo de Mouse HID Relativo apresenta um comportamento **mais próximo de uma conexão USB direta**, especialmente em baud rates mais altos.

#### Desempenho do Modo de Mouse HID Relativo

| Tipo de Mouse | Baud Rate | Taxa no Host (Hz) | Taxa no Alvo (Hz) | Observações                                        |
| ------------- | --------- | ----------------- | ----------------- | -------------------------------------------------- |
| Bluetooth     | 9600      | ~100              | ~90               | Próximo ao limite serial; aceitável para uso básico |
| Com fio       | 9600      | ~250              | ~180              | Largura de banda serial parcialmente saturada     |
| Gamer         | 9600      | >1000             | ~90               | Polling alto excede a largura de banda disponível |
| Bluetooth     | 115200    | ~160              | ~155              | Próximo de mapeamento 1:1 host-alvo                |
| Com fio       | 115200    | ~250              | ~150              | Estável e responsivo                               |
| Gamer         | 115200    | >1000             | ~500              | Melhor desempenho geral; limitado pelo serial      |

**Principais Conclusões (Modo HID Relativo):**

* Oferece a **menor latência** entre todos os modos
* A **9600 baud**, mouses de alto polling continuam limitados pela largura de banda
* A **115200 baud**, mouses gamer atingem **centenas de eventos por segundo no sistema alvo**
* **Altamente recomendado para jogos e movimentos rápidos de câmera**

---

### D. Mouse Direto no Windows (Referência)

| Tipo de Mouse     | Taxa no Alvo (Hz) |
| ----------------- | ----------------- |
| Mouse Bluetooth   | 80–85             |
| Mouse com fio     | 120–125           |
| Mouse Gamer       | >1000             |

Esta referência mostra que o **Mini-KVM (115200 baud, modo HID Relativo)** pode se aproximar do desempenho nativo de um mouse com fio, embora não elimine totalmente a sobrecarga inerente ao KVM e ao transporte serial.

---

## 4. Configuração Recomendada para Jogos

### ✅ Recomendado

* **Modo de Mouse:** Mouse HID Relativo
* **Baud Rate:** 115200
* **Tipo de Mouse:** Com fio ou gamer
* **Taxa de Polling:** ≤1000 Hz recomendado

### ❌ Evitar

* Modo de mouse absoluto para jogos
* 9600 baud com mouses de alto polling
* Taxas de polling excessivamente altas sem largura de banda serial suficiente

---

## 5. Expectativas Importantes

O Openterface Mini-KVM é projetado principalmente para:

✔ Interação com BIOS / UEFI  
✔ Configuração e depuração de sistemas  
✔ Acesso e gerenciamento remoto  

Embora **jogar seja possível**, o Mini-KVM **não substitui um mouse gamer USB direto**, especialmente para títulos altamente competitivos ou críticos em latência.

---

## 6. Resumo Final

* **Jogar com o Openterface Mini-KVM é possível** quando configurado corretamente
* A responsividade em jogos é dominada por **modo de mouse, taxa de polling e baud rate**, não pelo desempenho da CPU do host
* O **modo de mouse absoluto** prioriza precisão posicional e não é adequado para jogos
* **9600 baud** impõe um limite rígido de largura de banda de entrada
* **Modo de Mouse HID Relativo a 115200 baud** oferece o melhor equilíbrio entre:

  * Frequência de entrada
  * Latência
  * Estabilidade

* Embora o Mini-KVM não iguale totalmente uma conexão USB nativa, ele pode oferecer uma **experiência jogável e responsiva** para jogos casuais e alguns cenários competitivos

---

### Veredicto geral

✅ **Tecnicamente sólido**  
✅ **Posicionamento claro para gamers**  
✅ **Honesto quanto às limitações**
