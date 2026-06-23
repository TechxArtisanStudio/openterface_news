---
locale: pt
translationKey: "20251224-kvm-go-demo-software-hardware"
slug: "20251224-kvm-go-demo-software-hardware"
title: "Novo Vídeo Demonstrativo, Progresso do Software e o que há dentro do KVM-GO"
description: "Assista ao novo vídeo demonstrativo do KVM-GO mostrando as versões HDMI/DP/VGA em ação. Aprenda sobre o software unificado para Mini-KVM e KVM-GO, atualizações de hardware incluindo o processador de vídeo MS2130S 4K@60Hz e MCU CH32V208, além de recursos futuros como suporte personalizado para EDID. Atualização da campanha: $72k com mais de 220 apoiadores."
date: 2025-12-24
channel: product
product: kvm-go
topic: ["production", "software", "campaign", "community"]
category: "Atualizações de Produto"
tags: ["KVM-GO", "Atualizações de Produto", "Software", "Hardware", "Vídeo Demonstrativo", "Crowdfunding", "Análise Técnica"]
featured: true
draft: false
author: "TechxArtisan Studio"
---

Oi a todos! Peço desculpas pelo período de silêncio. Estivemos focados em polir tanto o hardware quanto o software para [KVM-GO](https://openterface.com/product/kvm-go/), e o tempo passou rápido. Até o final de dezembro, atingimos **$72k com mais de 220 apoiadores**, o que é incrível. Se você puder nos ajudar a ir ainda mais longe, por favor **divulgue**!

Muito obrigado pela sua paciência e apoio. E sim, o Natal certamente contribuiu para o caos 🙂🎄 Agora, vamos atualizar.

![blog-Gemini_Generated_Image_kvm-go](https://assets.openterface.com/images/blog/Gemini_Generated_Image_kvm-go.webp)
*Imagem temática de Natal gerada com Nano Banana, baseada em fotos reais dos nossos produtos KVM-GO.*

## Novo Vídeo Demonstrativo: KVM-GO em Ação

Acabamos de publicar um [**novo vídeo demonstrativo**](https://www.youtube.com/watch?v=459rWCQbJRE) mostrando o KVM-GO em uso real.


No vídeo, você verá:

* Versões KVM-GO **HDMI / DP / VGA** em ação
* O que está incluído **na embalagem**
* Como controlar diferentes dispositivos-alvo
* Como o KVM-GO se encaixa em fluxos de trabalho reais, desde acesso rápido até configurações com múltiplos alvos

Se você estiver curioso sobre testes mais casuais, práticos e uso real, sinta-se à vontade para conferir nossas [redes sociais](https://openterface.com/community/). Compartilhamos frequentemente cliques brutos de testes e cenários práticos mostrando como o KVM-GO se comporta em frente de tecnologia real.

## Progresso do Software: Um App para Mini-KVM e KVM-GO

Do lado do software, fizemos um passo sólido adiante.

As nossas últimas atualizações permitem que a **mesma aplicação Openterface funcione de forma sem falhas com ambos o Mini-KVM e a série KVM-GO**. Para os usuários, isso significa:

* Experiência consistente entre produtos
* Menos fragmentação se você usar mais de um dispositivo Openterface

Também dedicamos tempo a melhorar o **desempenho do teclado e mouse**, com foco em:

* Latência geral mais baixa
* Manipulação de entrada mais estável, incluindo melhor detecção do estado da conexão e qualidade do sinal
* Resposta mais ágil durante interações rápidas ou contínuas

Embora o gaming não seja o uso principal dos nossos soluções KVM, ainda nos importamos profundamente com a responsividade de entrada em cenários reais. Se você estiver interessado nos detalhes técnicos, especialmente no macOS, publicamos recentemente uma análise profunda aqui:
👉 **[Velocidade do Mouse e Desempenho de Jogos do Mini-KVM Openterface no macOS](https://news.openterface.com/apps/20251218-macos-mouse-speed/)**

Muitas das melhorias discutidas lá estão agora diretamente alimentando nossa pilha de software unificada para ambos o Mini-KVM e KVM-GO.

## Atualizações de Hardware Principais no KVM-GO (Comparado ao Mini-KVM)

Para aqueles interessados nos detalhes internos, aqui está uma comparação rápida das principais mudanças de hardware do Mini-KVM para o KVM-GO.

### Atualização da Pipeline de Vídeo

| Aspecto           | **MS2109 (Mini-KVM)**    | **MS2130S (KVM-GO)** | Melhoria           |
| ---------------- | ------------------------ | -------------------- | --------------------- |
| Entrada HDMI       | 4K @ 30Hz                | 4K @ 60Hz            | 2× largura de banda de entrada    |
| Saída USB de vídeo | 1080p @ 30Hz             | 4K @ 60Hz            | 4× throughput de pixels   |
| Escalamento interno | 4K → 1080p               | 4K nativo            | Nenhuma escala forçada para baixo |
| Latência de quadro    | Maior (escalonador + buffer) | Menor (caminho direto)  | Latência reduzida       |

### Atualização da Emulação de Teclado e Mouse USB

| Aspecto             | **CH340 + CH9329 (Mini-KVM)** | **CH32V208 (KVM-GO)** | Melhoria     |
| ------------------ | ----------------------------- | --------------------- | --------------- |
| Número de chips         | 2 chips                       | MCU único            | Sistema mais simples  |
| Manipulação USB       | Ponte USB–Serial             | Dispositivo USB nativo     | Latência mais baixa   |
| Geração HID     | Função fixa                | Definida no firmware      | Controle total    |
| Caminho de dados          | USB → UART → HID              | USB → HID             | Um salto removido |
| Compatibilidade BIOS | Misturada                         | Excelente             | Mais confiável   |

## Recursos Avançados em Desenvolvimento Ativo

Vários recursos avançados estão planejados e ativamente em desenvolvimento para o firmware finalizado do KVM-GO. Uma prévia rápida:

* **Suporte personalizado para EDID** para resolver problemas de compatibilidade com exibição
* **Controle baseado em script** para automação e fluxos de trabalho avançados

Compartilharemos mais detalhes conforme esses recursos maturam.

## Compromisso com Código Aberto (Como Sempre)

Sim, **o KVM-GO permanecerá totalmente de código aberto**.

Uma vez que o design do hardware for finalizado para produção em massa, aplicaremos para **certificação OSHWA (Associação de Hardware de Código Aberto)**.

Todos os arquivos de design do hardware e modelos STL serão publicados aqui:
👉 [https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware](https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware)

Transparência e colaboração comunitária permanecem no núcleo do que fazemos.

## Últimos Dias da Campanha: Lembrete Amigável

Agora estamos nos **últimos dias** da campanha de crowdfunding.

O crowdfunding é a **melhor chance de obter o KVM-GO ao menor preço**. Uma vez que a campanha terminar e passarmos para pedidos pós-crowdfunding, o preço aumentará.

Se você esteve hesitante, agora é o momento.

👉 **Apoie a campanha e garanta sua unidade no Crowd Supply:**
[https://www.crowdsupply.com/techxartisan/openterface-kvm-go](https://www.crowdsupply.com/techxartisan/openterface-kvm-go)

Obrigado novamente pela sua paciência, confiança e apoio. Mais atualizações estão chegando em breve, e tentaremos não ficar quietos de novo. Nossas saudações de Natal a todos!

**Equipe Openterface | TechxArtisan**
