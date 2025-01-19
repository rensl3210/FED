# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Rens Lous

  #### Je startniveau:
  Rood

  #### Je focus:
  Responsive
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://golflefleur.com/
  
  #### Screenshot(s) van de eerste pagina (small screen): 
  Homepage
  <img src="readme-images/LeFleur1_Homepage.PNG" width="375px" alt="Homepagina van de website van kledingmerk Golf le Fleur">

  #### Screenshot(s) van de tweede pagina (small screen):
  Shop luggage  
  <img src="readme-images/LeFleur2_Luggage.PNG" width="375px" alt="Detail pagina van koffers op de website.">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen

  Verbeterpunten
  -Geen highlight om aan te geven waar je bent in de website.
  -Carousel onderaan pagina is niet te bedienen met arrow keys, wel met tab.
  -Sommige elements met interactie maken dit niet toonbaar/hebben geen hover.

  Goed
  -Navigatie verplaatst naar beneden in telefoon formaat
  -Menu geeft met screenreader aan dat het ingeklapt is, dus hidden elementen worden niet meegelezen door de screenreader!

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="images/IMG_2260.jpg" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="images/IMG_2261.jpg" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="images/IMG_2260.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
  Ik heb alle divs, sections en de header op de juiste plek, ik snap alleen niet hoe de knoppen vanaf de bovenkant van de site,
  responsive naar de onderkant kunnen gaan?

  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - In plaats van een header en een footer, is de gehele header de onder en bovenkant van de pagina.
  - Door position fixed en @media te gebruiken, kan je doormiddel van top 0, en bottom 0 de buttons naar boven en beneden laten floepen.
  - Verder zag mijn website er goed uit, Thomas dacht al dat ik op de echte website zat. Sanne was minder onder de onderuk, het kwam alleen door de plaatjes, dat kon hij ook.

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Ik heb eindelijk de header werkend gekregen, en heb ervoor gezorgd dat alle delen van de website waar je mee kan interacteren dit nu aangeven, met een hover state. Ik ben blij met mijn menu, maar ben nu bezig met de navigatie (die verspringt vanuit de linkerkant en rechterkant van het scherm), en ik snap niet waarom mijn z-indexes niet werken.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Sanne heeft me laten zien hoe ik het allemaal kan oplossen met navigatie en met wat hulp van Thomas en Iris werken ze nu helemaal.
  - Ik moest nog veel divjes uit mijn code halen en vervangen met sections.
  - De hele indeling van mijn website veranderen zodat het semantisch allemaal klopt.

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  - Mijn website heeft nu nog hidden elementen, met name een hoop in het uitklap menu. Zoals hij nu werkt raak je de focus highlight kwijt en weet je niet meer waar je bent als je in het menu beland.
  -Veel images hebben nog geen alt text waardoor de screenreader een beetje op hol slaat.
  -Bij mij werken in ieder geval wel de highlight focus doosjes, deze krijg ik op de echte site niet aan de praat.
  -Ik heb voor mezelf ik een mental note gemaakt om sommige afbeeldingen die ik gebruik een null alt text moeten krijgen aangezien ik best wel wat decoratieve afbeeldingen heb.
  -Ik twijfel over de contrast van de letters in de laatste section, misschien moet dit nog beter?
  -Ik moet me nog verdiepen in skip links.
  -Ik mis nog een darkmode
  -Ik heb animaties die volgens mij nog niet werken met reduced motion.

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Ik moet voor de main page nog een carousel ontwerpen en kom er niet uit hoe ik deze kan laten werken. Ik wil scrollen combineren met knoppen zodat je er op meerdere manieren doorheen kan.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Door inline-block en overflow: scroll kan ik ervoor zorgen dat de carousel scrollbaar is.
  - Dmv van javascript heeft sanne me laten zien hoe ik ervoor kan zorgen dat de carousel ook met knoppen bedienbaar is.
  - Website ziet er verder goed uit en navigatie werkt goed en is responsive!

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="images/ss_karakter1.png" width="375px" alt="uitomst opdracht 1">
  <img src="images/ss_karakter2.png" width="375px" alt="uitomst opdracht 1">
  <img src="images/ss_karakter3.png" width="375px" alt="uitomst opdracht 1">
  <img src="images/ss_karakter4.png" width="375px" alt="uitomst opdracht 1">
  <img src="images/ss_karakter5.png" width="375px" alt="uitomst opdracht 1">
  <img src="images/ss_karakter6.png" width="375px" alt="uitomst opdracht 1">
  <img src="images/ss_karakter7.png" width="375px" alt="uitomst opdracht 1">
  <img src="images/ss_karakter8.png" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Ik was uiteindelijk echt lekker bezig met programmeren en merkte bij de tweede pagina dat ik al echt veel geleerd had, omdat dit veel sneller ging. De indeling en vormgeving van de website ging elke keer snel en goed, dit lukt mij al goed. CSS gaat dus goed. Af en toe met behulp van ChatGPT, lukte het mij alsnog goed om bijvoorbeeld de shopping cart te maken en te laten werken, het debuggen van chatGPT oplossingen lukt mij ook goed waardoor ik best wel snel kan werken!

  <img src="images/ss_cart.png" width="375px" alt="top">
  <img src="images/ss_product.png" width="375px" alt="top">
  <img src="images/ss_header.png" width="375px" alt="top"> 


  ### Dit was lastig/Is niet gelukt:
  Met Javascript heb ik vaak nog problemen, ik ga vaak naar ChatGPT om me te helpen met mijn code, veel dingen lukken al wel zelf alleen ik heb vaak minder geduld om te gaan debuggen met ingewikkelde elementen. Minder goed ging de carousels, elke keer als dit weer voorbij kwam had ik er moeite mee. En uiteraard was mijn website niet complex genoeg, waardoor ik zelf elementen moest gaan verzinnen, hier had ik ook nog best wel moeite mee.

  Ik wilde bovendien ook de laatste section op mijn website een scrollbased animatie maken, maar kwam hier totaal niet uit...

  <img src="images/ss_animatie.png" width="375px" alt="bummer">
  <img src="images/ss_carousel.png" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. [bron 1](https://stackoverflow.com/questions/10671174/changing-button-text-onclick)
  2. [bron 2](https://stackoverflow.com/questions/3369593/how-to-detect-escape-key-press)
  3. [bron 3](https://chatgpt.com/c/67578522-1cec-800e-9dfe-47ccf2d074f7)
  4. [bron 4](https://stackoverflow.com/questions/4564414/delete-first-character-of-string-if-it-is-0)


</details>