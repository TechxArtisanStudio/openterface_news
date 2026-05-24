---
locale: pt
translationKey: "240823-overcoming-hurdles"
slug: "240823-overcoming-hurdles"
title: "Superando obstáculos: Atualização de progresso e nova cronologia"
description: "Atualização importante Openterface Mini-KVM: certificação CE concluída, produção em andamento, nova ETA meados de janeiro. Hardware V1.9 finalizado com pinos de expansão, desenvolvimento de app Android, embalagem melhorada e manual multilíngue em progresso."
date: 2024-08-22
channel: product
product: minikvm
topic: ["production", "software", "campaign"]
category: "Product Updates"
featured: false
draft: false
author: "Openterface Team"
---

Olá pessoal,

Espero que todos estejam bem. Faz um tempo desde nossa última atualização. Gostaria de poder dizer que tudo tem corrido suavemente para o Openterface, mas encontramos alguns obstáculos que atrasarão nosso cronograma de entrega. Embora isso não fosse o que esperávamos, estamos enfrentando esses desafios de frente e fazendo progresso constante com muitas boas notícias para compartilhar. Este post é uma **leitura de 7 minutos**, então vamos mergulhar nos detalhes para que vocês saibam exatamente onde as coisas estão e o que vem a seguir.

## Regulamentação, produção e qualidade

Antes de podermos iniciar a produção, tivemos que passar nos testes de qualidade necessários de acordo com as regulamentações, particularmente a certificação CE. Como nossa versão toolkit inclui não apenas o Mini-KVM mas também vários acessórios, cada parte precisou passar por testes CE. Esses testes levaram mais tempo que o esperado (acontece que cabos podem ser bem exigentes), mas a grande notícia é que **passamos na CE para nosso Mini-KVM e todos os seus componentes!** Abaixo está uma visão geral das certificações para todas as nossas partes: Mini-KVM, cabo HDMI, cabo Type-C laranja, cabo Type-C curto preto e cabo VGA2HDMI. Com a certificação em mãos, nosso cronograma de produção agora é certo, e nossos fabricantes estão **atualmente produzindo todas as partes** enquanto falo.

![240823-0](https://www.crowdsupply.com/img/fcb5/db59e179-2413-4d57-8462-2285c007fcb5/openterface-240823-0_jpg_gallery-lg.jpg)
*Requisitos UKCA e CE são os mesmos para nossos produtos eletrônicos, com CE também cobrindo conformidade RoHS.*

Duas semanas atrás, visitamos um de nossos fabricantes para treinar seus gerentes de linha em controle de qualidade para os cabos laranjas antes de enviá-los para nós. Agora, TODOS os cabos laranjas foram produzidos e estão sentados em um canto do nosso estúdio.
![240823-1](https://www.crowdsupply.com/img/28dc/34844b54-0e02-414d-b58b-d40e8abe28dc/openterface-240823-1_jpg_gallery-lg.jpg)
*Kevin e Shawn estavam explicando os métodos de teste para garantir que o cabo laranja funcione corretamente com nosso Openterface Mini-KVM.*

Faremos a mesma tarefa esta semana para treinar QA na linha de frente de produção para as outras partes também. Aqui estão amostras de cabos adicionais.
![240823-2](https://www.crowdsupply.com/img/e703/abb8ffa5-eb85-4eb9-b5f8-d8a3d349e703/openterface-240823-2_jpg_md-xl.jpg)
*Orgulhosamente marcados com nosso logo TechxArtisan, estes são exemplos do cabo HDMI, cabo Type-C curto e cabo VGA-to-HDMI.*

Esperamos que as outras partes e Mini-KVMs cheguem em breve de nossos fabricantes, momento em que verificaremos a qualidade de cada componente e os embalaremos adequadamente em nosso estúdio antes do envio. Em outras palavras, **nossa equipe garantirá pessoalmente a qualidade** antes que chegue às suas mãos.

## Envio, atrasos potenciais e nova ETA

**A incerteza atual reside no processo de envio**. Após investigar várias empresas de envio, descobrimos que o envio levará tempo adicional já que provavelmente transferiremos pacotes através de um armazém antes de chegar ao armazém da Crowd Supply. Ainda estamos debatendo se escolher transporte marítimo ou aéreo—por favor tenham paciência conosco por mais alguns dias enquanto resolvemos os arranjos.

O despacho aduaneiro é outro obstáculo potencial que pode causar atrasos inesperados. Uma vez que nossos produtos cheguem ao armazém da Crowd Supply nos Estados Unidos, levarão uma ou duas semanas para serem enviados globalmente baseado em cada pedido. Para apoiadores fora dos Estados Unidos, pacotes individuais ainda precisarão passar por envio global e despacho aduaneiro no país de destino.

Considerando a situação atual e adicionando algum tempo de buffer, permaneço cautelosamente otimista de que completaremos a entrega antes do final deste ano, com **uma nova ETA de meados de janeiro**. Realmente me desculpo pelo inconveniente e aprecio seu apoio e paciência durante esta mudança.

## Hardware V1.9 finalizado

Como vocês podem saber de nosso [post anterior no Reddit](https://www.reddit.com/r/Openterface_miniKVM/comments/1e25pco/openterface_minikvm_v19_with_pins_for_more/), decidimos **atualizar nosso hardware para V1.9**, incluindo um conjunto de pinos de expansão hackeáveis. Isso não fazia parte do plano original para a campanha de crowdfunding, mas acreditamos que melhora significativamente o **potencial para uso mais amplo** do hardware.

![240823-3](https://www.crowdsupply.com/img/77d7/09a9d0e5-3065-4f3e-8b61-bae66b5c77d7/openterface-240823-3_jpg_md-xl.jpg)
*Os pinos VCC, GND, Target D+, Target D-, Host D+ e Host D-—onde 'D' significa dados USB.*

Uma motivação chave era **permitir que o interruptor USB seja alternado no nível de software**. Por que isso é importante? Em nossa rota, **visamos suportar uma solução KVM-over-IP**, como VNC, no futuro. A ideia é fazer corresponder o controle KVM local com o protocolo VNC, permitindo aos usuários controlar remotamente o computador alvo através do computador host. Em tal cenário remoto, a capacidade para usuários alternarem a porta USB é essencial, especialmente quando transferências de arquivos entre host e alvo são necessárias.

**Os pinos de expansão também abrem possibilidades para mais**, como integração com iPadOS, controle ATX, bridging de rede e bypass de áudio. Embora não mergulhe em todos os detalhes aqui, encorajo vocês a se juntarem à nossa comunidade Openterface para discutir mais conosco.

Esta atualização de hardware poderia potencialmente estender nossa solução Openterface para operar sobre IP e incluir recursos mais avançados enquanto ainda mantém sua força central como ferramenta KVM-over-USB plug-and-play—perfeita para profissionais de TI navegando ambientes de TI incertos, como data centers não familiares.

Estou feliz em reportar que V1.9 passou em nossos testes internos básicos e será finalizado como a versão oficial para todos nossos apoiadores. No entanto, esta atualização de hardware requererá testes adicionais, e qualquer desenvolvimento baseado nesses pinos de expansão será experimental e provavelmente terá bugs. É aqui que vocês podem contribuir. Contamos com a comunidade open-source para nos ajudar a melhorar o Openterface juntos.

## Mais atualizações de software

Na frente de software, estamos fazendo progressos emocionantes. Estamos agora mergulhando no **app Openterface Android**! Dê uma olhada neste [tweet](https://x.com/TechxArtisan/status/1825460088922071398) para uma demo inicial mostrando controle KVM fluido, movimento do mouse e cliques em ação. Mais recursos estão a caminho, e como sempre, uma vez que polimos o código um pouco mais, **este app também será open-sourced** em nosso repo GitHub [Openterface_Android](https://github.com/TechxArtisanStudio/Openterface_Android).
![240823-4](https://www.crowdsupply.com/img/7007/b192f260-1e1f-4dab-905b-fb0a6d927007/openterface-240823-4_jpg_md-xl.jpg)
*Usando apenas nossas pontas dos dedos para controlar KVM um computador Linux de um tablet Android. Legal!*

Nossa versão QT acabou de receber uma atualização útil—agora vocês podem [transferir texto do host para o alvo](https://x.com/TechxArtisan/status/1825919721960780131)! Então agora este recurso é suportado nos apps host macOS, Windows e Linux.

Além disso, também estamos planejando adicionar um recurso divertido—[um movimento automático do mouse para prevenir que seu computador alvo durma](https://x.com/TechxArtisan/status/1825471186668847241). Devemos ir com a bola de ping-pong quicando pela tela ou o efeito clássico do protetor de tela DVD? Votem e comentem o [tweet](https://x.com/TechxArtisan/status/1825470086800691459) 😃

## Design de pacote, rotulagem e manual

Temos [experimentado com vários mock-ups e designs de embalagem](https://www.reddit.com/r/Openterface_miniKVM/comments/1elm4vq/almost_ready_to_finalize_our_package_design/) para encontrar o equilíbrio perfeito entre vários fatores-chave:

- Selecionar materiais robustos o suficiente para proteger o produto e suas partes durante o envio,
- Criar rotulagem informativa que ajude usuários a entender o produto de relance,
- Garantir conformidade com regulamentações,
- Tornar a embalagem visualmente atraente,
- E ser eco-friendly minimizando o uso de plástico sempre que possível.

Além disso, fizemos várias melhorias na bolsa toolkit antiga, incluindo:

- Espaço de armazenamento maior,
- Zíper laranja elegante,
- Materiais exteriores e interiores atualizados,
- E um bolso de malha super elástico.

Escolhemos este material porque atinge o equilíbrio ideal entre ser econômico, agradável ao toque e durável o suficiente para proteger os itens dentro. **Estamos confiantes de que vocês vão adorar**.

![240823-5](https://www.crowdsupply.com/img/099a/75e16f52-bd0c-4652-af27-08caf448099a/openterface-240823-5_jpg_md-xl.jpg)

Também estamos atualizando os rótulos na carcaça de alumínio para torná-los o mais informativos e visualmente atraentes possível. Esperamos que essas melhorias melhorem sua experiência do usuário e tornem mais fácil começar com o Openterface.

![240823-6](https://www.crowdsupply.com/img/94d8/441a5757-2d6a-4c79-885b-7b5b3a7094d8/openterface-240823-6_jpg_md-xl.jpg)

Estamos finalizando o manual Openterface, que estará disponível em inglês, alemão, francês, japonês e chinês. Desculpas se perdemos seu idioma—nossa caixa não é do tamanho TARDIS (a caixa de polícia do Doctor Who)! Mas faremos nosso melhor para adicionar mais traduções em nosso site.

![240823-7](https://www.crowdsupply.com/img/e2d9/2e5a2086-20f0-47ec-a27b-288d10d0e2d9/openterface-240823-7_jpg_md-xl.jpg)

## Revisão de idioma da comunidade

Tenho usado ChatGPT para assistir com traduções, mas às vezes pode errar o alvo com frases e escolha de palavras. Se não for muito problema, apreciaria muito qualquer ajuda na revisão do conteúdo em outros idiomas, especialmente para os materiais impressos que estamos prestes a finalizar. Atualizei todo o conteúdo textual para embalagem em nossa pasta GitHub [product-printed-materials](https://github.com/TechxArtisanStudio/Openterface/tree/main/product-printed-materials), onde vocês podem revisar e enviar qualquer melhoria. Vocês também podem me DM diretamente. Obrigado!

## Observações finais e progresso em andamento

Nos desculpamos novamente pelos atrasos e a mudança na ETA de nosso produto. Obrigado por sua paciência e por ficarem conosco—estamos trabalhando duro para entregar isso a vocês o mais rápido possível! Vou atualizá-los imediatamente assim que nosso envio for arranjado. Mais atualizações estão a caminho, então juntem-se à nossa comunidade Openterface e fiquem ligados!

Saúde,

Billy Wang  
Gerente de Produto  
Equipe Openterface | TechxArtisan
