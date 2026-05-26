---
locale: nl
translationKey: "240823-overcoming-hurdles"
slug: "240823-overcoming-hurdles"
title: "Hindernissen overwinnen: voortgangsupdate en nieuwe tijdlijn"
description: "Belangrijke Openterface Mini-KVM-update: CE-certificering voltooid, productie gestart, nieuwe verwachte aankomsttijd medio januari. Hardware V1.9 afgerond met uitbreidingspinnen, ontwikkeling van Android-apps, verbeterde verpakking en meertalige handleiding in uitvoering."
date: 2024-08-22
channel: product
product: minikvm
topic: ["shipping", "production", "software", "campaign", "community"]
category: "Product Updates"
featured: false
draft: false
author: "Openterface Team"
---
Hallo allemaal,

Ik hoop dat het goed met jullie gaat. Het is alweer een tijdje geleden sinds onze laatste update. Ik wou dat ik kon zeggen dat alles soepel verliep voor Openterface, maar we zijn een paar verkeersdrempels tegengekomen die onze levertijd zullen vertragen. Hoewel dit niet was wat we hadden verwacht, pakken we deze uitdagingen frontaal aan en boeken we gestage vooruitgang, met veel goed nieuws om te delen. Dit bericht duurt ongeveer **een leestijd van zeven minuten**, dus laten we in de details duiken, zodat u precies weet waar de zaken voor staan ​​en wat er gaat gebeuren.

## Regulering, productie en kwaliteit

Voordat we de productie konden starten, moesten we de noodzakelijke kwaliteitstests doorstaan volgens de regelgeving, met name de CE-certificering. Omdat onze toolkitversie niet alleen de Mini-KVM bevat, maar ook verschillende accessoires, moest elk onderdeel een CE-test ondergaan. Deze tests duurden langer dan verwacht (het blijkt dat kabels behoorlijk kieskeurig kunnen zijn), maar het goede nieuws is dat **we CE hebben doorstaan ​​voor onze Mini-KVM en al zijn componenten!** Hieronder vindt u een overzicht van de certificeringen voor al onze onderdelen: Mini-KVM, HDMI-kabel, oranje Type-C-kabel, zwarte korte Type-C-kabel en VGA2HDMI-kabel. Nu de certificering in handen is, is onze productietijdlijn nu zeker, en onze fabrikanten produceren momenteel **alle onderdelen** terwijl ik spreek.

![240823-0](https://www.crowdsupply.com/img/fcb5/db59e179-2413-4d57-8462-2285c007fcb5/openterface-240823-0_jpg_gallery-lg.jpg)
*UKCA- en CE-vereisten zijn hetzelfde voor onze elektronische producten, waarbij CE ook de RoHS-conformiteit dekt.*

Twee weken geleden hebben we een van onze fabrikanten bezocht om hun lijnmanagers te trainen in de kwaliteitscontrole van de oranje kabels voordat ze deze naar ons verscheepten. Nu zijn ALLE oranje kabels geproduceerd en liggen ze in een hoek van onze studio.
![240823-1](https://www.crowdsupply.com/img/28dc/34844b54-0e02-414d-b58b-d40e8abe28dc/openterface-240823-1_jpg_gallery-lg.jpg)
*Kevin en Shawn legden de testmethoden uit om ervoor te zorgen dat de oranje kabel goed werkt met onze Openterface Mini-KVM.*

We zullen deze week dezelfde taak uitvoeren om QA aan de productiefrontlijn ook voor andere onderdelen te trainen. Hier vindt u voorbeelden van extra kabels.
![240823-2](https://www.crowdsupply.com/img/e703/abb8ffa5-eb85-4eb9-b5f8-d8a3d349e703/openterface-240823-2_jpg_md-xl.jpg)
*Trots gemarkeerd met ons TechxArtisan-logo. Dit zijn voorbeelden van de HDMI-kabel, de korte Type-C-kabel en de VGA-naar-HDMI-kabel.*

We verwachten dat de andere onderdelen en Mini-KVM's binnenkort van onze fabrikanten arriveren. Op dat moment zullen we de kwaliteit van elk onderdeel dubbel controleren en ze vóór verzending op de juiste manier in onze studio verpakken. Met andere woorden: **ons team zal persoonlijk de kwaliteit garanderen** voordat deze bij u terechtkomt.

## Verzending, mogelijke vertragingen en nieuwe verwachte aankomsttijd

**De huidige onzekerheid ligt in het verzendproces**. Nadat we verschillende rederijen hadden onderzocht, kwamen we erachter dat de verzending extra tijd in beslag zal nemen, omdat we pakketten waarschijnlijk via een magazijn zullen overbrengen voordat we het magazijn van Crowd Supply bereiken. We zijn nog steeds aan het twijfelen of we voor zee- of luchtvracht zullen kiezen. Heb nog een paar dagen geduld terwijl we de regelingen regelen.

Inklaring door de douane is een ander potentieel obstakel dat onverwachte vertragingen kan veroorzaken. Zodra onze producten aankomen in het magazijn van Crowd Supply in de VS, duurt het één tot twee weken voordat ze wereldwijd worden verzonden, afhankelijk van elke bestelling. Voor donateurs buiten de VS moeten individuele pakketten nog steeds door de wereldwijde verzending en douane-inklaring in het land van bestemming gaan.

Rekening houdend met de huidige situatie en wat buffertijd toevoegend, blijf ik voorzichtig optimistisch dat we de levering vóór het einde van dit jaar zullen voltooien, met **een nieuwe verwachte aankomsttijd van medio januari**. Mijn excuses voor het ongemak en ik waardeer uw steun en geduld tijdens deze wijziging.

## Gefinaliseerde hardware V1.9

Zoals je misschien weet uit onze vorige [Reddit post](https://www.reddit.com/r/Openterface_miniKVM/comments/1e25pco/openterface_minikvm_v19_with_pins_for_more/), hebben we besloten **onze hardware te upgraden naar V1.9**, inclusief een set hackbare uitbreidingspinnen. Dit maakte geen deel uit van het oorspronkelijke plan voor de crowdfundingcampagne, maar we zijn van mening dat dit het **potentieel van de hardware voor breder gebruik** aanzienlijk vergroot.

![240823-3](https://www.crowdsupply.com/img/77d7/09a9d0e5-3065-4f3e-8b61-bae66b5c77d7/openterface-240823-3_jpg_md-xl.jpg)
*De VCC-, GND-, Target D+-, Target D--, Host D+- en Host D--pinnen, waarbij ‘D’ staat voor USB-gegevens.*

Eén belangrijke motivatie was om ervoor te zorgen dat **de USB-schakelaar op softwareniveau kon worden omgeschakeld**. Waarom is dit belangrijk? Op onze roadmap streven we ernaar om in de toekomst een KVM-over-IP-oplossing**, zoals VNC, te ondersteunen. Het idee is om lokale KVM-besturing te matchen met het VNC-protocol, waardoor gebruikers de doelcomputer op afstand kunnen bedienen via de hostcomputer. In een dergelijk extern scenario is de mogelijkheid voor gebruikers om van USB-poort te wisselen essentieel, vooral wanneer bestandsoverdracht tussen de host en het doel vereist is.

**De uitbreidingspinnen bieden ook mogelijkheden voor meer**, zoals integratie met iPadOS, ATX-bediening, netwerkbridging en audio-bypass. Hoewel ik hier niet op alle details zal ingaan, moedig ik je aan om lid te worden van onze Openterface-gemeenschap om verder met ons te praten.

Deze hardware-upgrade zou onze Openterface-oplossing mogelijk kunnen uitbreiden om via IP te werken en meer geavanceerde functies te bevatten, terwijl de kernkracht als plug-and-play KVM-over-USB-tool behouden blijft - perfect voor IT-professionals die door onzekere IT-omgevingen navigeren, zoals onbekende datacenters.

Ik ben blij te kunnen melden dat V1.9 onze interne basistests heeft doorstaan ​​en zal worden afgerond als de officiële versie voor al onze donateurs. Deze hardware-upgrade vereist echter verder testen, en elke ontwikkeling op basis van deze uitbreidingspinnen zal experimenteel zijn en waarschijnlijk bugs bevatten. Hier kunt u een bijdrage leveren. We rekenen op de open-sourcegemeenschap om ons samen te helpen Openterface te verbeteren.

## Meer software-updates

Op softwaregebied maken we spannende stappen. We duiken nu in de **Openterface Android-app**! Bekijk deze [tweet](https://x.com/TechxArtisan/status/1825460088922071398) voor een vroege demo die soepele KVM-bediening, muisbewegingen en klikken in actie laat zien. Er komen nog meer functies aan, en zoals altijd, zodra we de code wat verder hebben opgepoetst, zal **deze app ook open source zijn** op onze GitHub-repository [Openterface_Android](https://github.com/TechxArtisanStudio/Openterface_Android).
![240823-4](https://www.crowdsupply.com/img/7007/b192f260-1e1f-4dab-905b-fb0a6d927007/openterface-240823-4_jpg_md-xl.jpg)
*Met slechts onze vingertoppen kunt u met KVM een Linux-computer bedienen vanaf een Android-tablet. Leuk!*

Onze QT-versie heeft zojuist een handige update gekregen: je kunt nu [transfer text from the host to the target](https://x.com/TechxArtisan/status/1825919721960780131)! Deze functie wordt nu dus ondersteund op macOS-, Windows- en Linux-host-apps.

Bovendien zijn we ook van plan een leuke functie toe te voegen: [an auto mouse movement to prevent your target computer from sleeping](https://x.com/TechxArtisan/status/1825471186668847241). Moeten we kiezen voor de pingpongbal die over het scherm stuitert of voor het klassieke dvd-screensaver-effect? Stem en reageer op [tweet](https://x.com/TechxArtisan/status/1825470086800691459) 😃

## Pakketontwerp, etikettering en handleiding

We hebben [experimenting with various mock-ups and packaging designs](https://www.reddit.com/r/Openterface_miniKVM/comments/1elm4vq/almost_ready_to_finalize_our_package_design/) gezocht naar de perfecte balans tussen verschillende belangrijke factoren:

- Het selecteren van materialen die stevig genoeg zijn om het product en de onderdelen ervan tijdens verzending te beschermen,
- Het creëren van informatieve labels die gebruikers helpen het product in één oogopslag te begrijpen,
- Zorgdragen voor naleving van de regelgeving,
- Het visueel aantrekkelijk maken van de verpakking,
- En milieuvriendelijk zijn door het plasticgebruik waar mogelijk te minimaliseren.

Daarnaast hebben we verschillende verbeteringen aangebracht aan de oude toolkit, waaronder:

- Grotere opslagruimte,
- Een stijlvolle oranje ritssluiting,
- Verbeterde exterieur- en interieurmaterialen,
- En een super rekbare mesh zak.

We hebben voor dit materiaal gekozen omdat het de ideale balans biedt tussen budgetvriendelijk, aangenaam om aan te raken en duurzaam genoeg om de spullen erin te beschermen. **We zijn ervan overtuigd dat je het geweldig zult vinden**.

![240823-5](https://www.crowdsupply.com/img/099a/75e16f52-bd0c-4652-af27-08caf448099a/openterface-240823-5_jpg_md-xl.jpg)

We werken ook de labels op de aluminium behuizing bij om ze zo informatief en visueel aantrekkelijk mogelijk te maken. We hopen dat deze verbeteringen uw gebruikerservaring zullen verbeteren en het gemakkelijker zullen maken om aan de slag te gaan met Openterface.

![240823-6](https://www.crowdsupply.com/img/94d8/441a5757-2d6a-4c79-885b-7b5b3a7094d8/openterface-240823-6_jpg_md-xl.jpg)

We zijn bezig met de laatste hand aan de Openterface-handleiding, die beschikbaar zal zijn in het Engels, Duits, Frans, Japans en Chinees. Excuses als we uw taalgebruik hebben gemist: onze box is niet van TARDIS-formaat (de politiebox van Doctor Who)! Maar we zullen ons best doen om meer vertalingen op onze website toe te voegen.

![240823-7](https://www.crowdsupply.com/img/e2d9/2e5a2086-20f0-47ec-a27b-288d10d0e2d9/openterface-240823-7_jpg_md-xl.jpg)

## Gemeenschapstaalrecensie

Ik gebruik ChatGPT om te helpen met vertalingen, maar het kan soms de plank misslaan met frasering en formulering. Als het niet te veel moeite is, zou ik alle hulp bij het beoordelen van de inhoud in andere talen zeer op prijs stellen, vooral voor het gedrukte materiaal dat we binnenkort gaan afronden. Ik heb alle tekstinhoud voor de verpakking bijgewerkt in onze GitHub-map [product-printed-materials](https://github.com/TechxArtisanStudio/Openterface/tree/main/product-printed-materials), waar u eventuele verbeteringen kunt bekijken en indienen. Je kunt mij ook rechtstreeks een DM sturen. Bedankt!

## Slotopmerkingen en voortdurende vooruitgang

Wij verontschuldigen ons nogmaals voor de vertragingen en de wijziging in de verwachte aankomsttijd van ons product. Bedankt voor uw geduld en dat u bij ons blijft. We werken er hard aan om dit zo snel mogelijk bij u te bezorgen! Ik breng u onmiddellijk op de hoogte zodra onze verzending is geregeld. Er komen meer updates aan, dus sluit u aan bij onze Openterface-community en blijf op de hoogte!

Proost,

Billy Wang  
Productmanager  
Openterface-team | TechxArtisan