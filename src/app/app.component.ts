import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

const mockCoctailDatabase = {
  "drinks": [
      {
          "idDrink": "0",
          "drink": "Martini",
          "video": "1Jq4tPutdGQ",
          "category": "Klasični kokteli",
          "alcoholic": true,
          "glass": "Ohlađena čaša za martini",
          "instructions": "Istrljajte ivicu čaše sa limunovom kriškom i na ovlaženi deo dodajte so. Ohladite šejker, čašu, džin i vermut. Dodajte zatim u šejker dosta leda, džin i vermut i izmiksajte. Dodajte masline. Koktel  ima veliki broj varijacija i načina pripreme, a razlika je u odnosu dva osnovna sastojka koktela, vermuta i džina.",
          "drinkThumb": "assets/img/martini.jpg",
          "ingredients": [
            "Džin - 45 do 60ml",
            "Slatki ili suvi vermut - 1 kap do 30ml",
            "Limunov sok - 1 kriška",
            "So",
          ],
          "dateModified": "2018-02-12 15:21:31"
      },
      {
          "idDrink": "1",
          "drink": "Long Island Iced Tea",
          "video": "_CIxQcyWbTo",
          "category": "Klasični kokteli",
          "alcoholic": true,
          "glass": "Ohlađena čaša za koktel",
          "instructions": "Za pripremu ovog koktela, potrebno je sve sastojke sipati u šejker i dobro promućkati. Potom sve procijediti u velike čaše s ledom i na kraju dopuniti s Coca-Colom.",
          "drinkThumb": "assets/img/long-island-ice-tea.jpg",
          "ingredients": [
            "Triple sec - 7ml",
            "Rum - 20ml",
            "Džin - 20ml",
            "Vodka - 20ml",
            "Sok od narandže - 20ml",
            "1/2 Limete",
            "Coca-Cola"
          ],
          "dateModified": "2018-02-12 15:30:31"
      },
      {
          "idDrink": "2",
          "drink": "Cosmopolitan",
          "video": "zIsttJCAPgI",
          "category": "Klasični kokteli",
          "alcoholic": true,
          "glass": "Ohlađena čaša za koktel",
          "instructions": "Osnovni sastojak ovog koktela je vodka, pa bi bilo poželjno da bude što boljeg kvaliteta. Sve sastojke dobro promešajte i poslužite bez leda u velikim martini čašama. Čašu možete ukrasiti limunom ili limetom.",
          "drinkThumb": "assets/img/cosmopolitan.jpg",
          "ingredients": [
            "Vodka - 30ml",
            "Triple sec - 15ml",
            "Limun ili limeta - 15ml",
            "Sok od brusnice - 15ml",
          ],
          "dateModified": "2018-02-12 15:36:31"
      },
      {
          "idDrink": "3",
          "drink": "Pina Colada",
          "video": "YaQEaf92z00",
          "category": "Klasični kokteli",
          "alcoholic": true,
          "glass": "Ohlađena čaša za koktel",
          "instructions": "Za pripremu je potrebno sve sastojke staviti u električni mikser i miksati s drobljenim ledom na najvećoj brzini, potom iscediti u čaše i servirati sa slamkom. Za dekoraciju se mogu koristiti kriške ananasa ili Maraskino trešnje.",
          "drinkThumb": "assets/img/pina-colada.png",
          "ingredients": [
            "Beli rum - 50ml",
            "Sok od ananasa - 100ml",
            "Šlag - 25ml",
            "Led - 150gr"
          ],
          "dateModified": "2018-02-12 15:49:31"
      },
      {
          "idDrink": "4",
          "drink": "Mojito",
          "video": "NANdz-YKMUw",
          "category": "Klasični kokteli",
          "alcoholic": true,
          "glass": "Ohlađena visoka čaša",
          "instructions": "Stavite listove nane u ohlađenu visoku čašu. Dodajte 2 kašičice smeđeg šećera i sipajte 10 ml soka od limete. Popunite sa kockama leda i sipajte 40 ml ruma. Prelijte mineralnom vodom i dobro promešajte. Dekorišite sa kriškom limete i poslužite sa jednom ili dve debele slamke po želji",
          "drinkThumb": "assets/img/mojito.jpg",
          "ingredients": [
            "Beli rum - 40ml",
            "Sok limete - 10ml",
            "Nana - nekoliko listova",
            "Led - puna čaša",
            "Smeđi šećer - 5gr",
            "Mineralna voda - dopuniti čašu"
          ],
          "dateModified": "2018-02-13 02:05:31"
      },
      {
        "idDrink": "5",
        "drink": "Monkey Brain",
        "video": "26Va836YJoY",
        "category": "Šuter",
        "alcoholic": true,
        "glass": "Šuter 0.03dl",
        "instructions": "Sipajte prvo vodku i limunov/limetin sok. Ukapajte nekoliko kapi Grenadine-a i zatim prelijte Baileys-om koji će zbog limuna dobiti teksturu mozga.",
        "drinkThumb": "assets/img/monkey-brain.jpg",
        "ingredients": [
          "Vodka - 10ml",
          "Limunov/limetin sok - 10ml",
          "Baileys® irish cream - 10ml",
          "Grenadine - nekoliko kapi"
          
        ],
        "dateModified": "2018-02-12 16:21:31"
    },
    {
      "idDrink": "6",
      "drink": "Screwdriver (đus-vodka)",
      "video": "ZCtpPMZsajg",
      "category": "Klasični kokteli",
      "alcoholic": true,
      "glass": "Čaša 0.2dl",
      "instructions": "Veoma jednostavan koktel. Sipajte preko malo leda trećinu mere vodke i dolijte sok od narandže. Možete ukrasiti voćem",
      "drinkThumb": "assets/img/screwdriver.jpg",
      "ingredients": [
        "Vodka - 1/3",
        "Sok od narandže - 2/3",
        "Crveno grožđe",
        "Limun",
        "Crno grožđe",
        "Čačkalica"
      ],
      "dateModified": "2018-02-12 02:44:58"
    },
    {
      "idDrink": "7",
      "drink": "Cuba Libre",
      "video": "BRUpluOmonk",
      "category": "Klasični kokteli",
      "alcoholic": true,
      "glass": "Pinta ili 0.3dl",
      "instructions": "Još jedan veoma lagan koktel. Stavite sve sastojke u čašu sa ledom, promešajte i ukrasite sa kriškama limete.",
      "drinkThumb": "assets/img/cuba-libre.jpg",
      "ingredients": [
        "Tamni / svetli rum - 1/3",
        "Coca-Cola - 2/3",
        "Sok limuna/limete - 10ml",
        "Slamčica"
      ],
      "dateModified": "2018-02-12 02:58:31"
    },
    {
      "idDrink": "8",
      "drink": "Tequila Sunrise",
      "video": "NVeTGvwk8y0",
      "category": "Klasični kokteli",
      "alcoholic": true,
      "glass": "Čaša od 2dl",
      "instructions": "Ovaj se koktel priprema direktno u čaši od 2 dl i to na način da prvo stavite kocke leda, a zatim dodate sok od narandže.  Nakon toga dodajte 0.4 dl tekile i Grenadine sirupa. Možete dekorisati kolutom narandže i Maraskino trešnjom Koktel se promeša barskom kašičicom i spreman je za konzumiranje.",
      "drinkThumb": "assets/img/tequila-sunrise.jpg",
      "ingredients": [
        "Sok od narandže - 150ml",
        "Tekila - 40ml",
        "Grenadine sirup - 10ml"
      ],
      "dateModified": "2018-02-12 03:12:31"
    },
    {
      "idDrink": "9",
      "drink": "Margarita",
      "video": "q-gYcvipozY",
      "category": "Klasični koktel",
      "alcoholic": true,
      "glass": "Čaša 0.2dl",
      "instructions": "Stavite piće, led i isceđeni limun u šejker i mešajte dok šejker ne postane hladan. Sipajte u čašu i dekorišite žalfijom i mangom. Dekorišite sa žalfijom i mangom",
      "drinkThumb": "assets/img/margarita.png",
      "ingredients": [
        "Tekila - 1/3",
        "Cointreau® Triple sec - 1/3",
        "Led - 4 kocke",
        "Limun - 1",
        "Žalfija",
        "Mango"
      ],
      "dateModified": "2018-02-12 03:14:31"
    },
    {
      "idDrink": "10",
      "drink": "Sex Machine",
      "video": null,
      "category": "Klasični koktel",
      "alcoholic": true,
      "glass": "Ohlađena čaša za koktel",
      "instructions": "Prvo sipati Kahlua liker pa mleko, zatim uteti kašiku i okrenuti je naopako pa preko nje sipati Baileys® kako ne bi propao na dno.",
      "drinkThumb": "assets/img/sex-maschine-cocktail.jpg",
      "ingredients": [
        "Kahlua liker kafa - 1/3",
        "Baileys® irish cream - 1/3",
        "Mleko 1/3"
      ],
      "dateModified": "2018-02-12 16:21:31"
    },
    {
      "idDrink": "11",
      "drink": "Johnnie Black Sweet & Sour",
      "video": "DHiZGCzSMbE",
      "category": "Klasični koktel",
      "alcoholic": true,
      "glass": "Ohlađena čaša za koktel",
      "instructions": "U šejker dodajte sastojke i mešajte dok se svi sastojci ne sjedine. Dodajte dosta leda i mešajte dok šejker ne postane hladan. Dekorišite sa kriškama limuna. Dekorišite limunom ili limetom",
      "drinkThumb": "assets/img/johnnie-walker-black-sour.jpg",
      "ingredients": [
        "Johnnie Black - 50ml",
        "Sok od limuna - 15ml",
        "Sirup od šećera - 15ml",
        "Led"
      ],
      "dateModified": "2018-02-12 16:21:31"
    },
    {
      "idDrink": "12",
      "drink": "Moscow Mule",
      "video": "W1_eAahUUpM",
      "category": "Klasični kokteli",
      "alcoholic": true,
      "glass": "0.3dl",
      "instructions": "Sipajte vodku u čašu i dodajte svežu limetu iseckanu. Dodajte sirup od šećera. Sve to dobro iznječite zatim dodajte sirup od đumbira i napunite čašu punu leda i dodati sprajt do vrha caše. Dekorisati sa limetom i nekoliko listova nane",
      "drinkThumb": "assets/img/moscow-mule.jpg",
      "ingredients": [
        "Vodka - 60ml",
        "Limeta - 1/2",
        "Sirup od šećera - 15ml",
        "Sirup od đumbira - 15ml",
        "Sprajt",
        "Nana - nekoliko listova"
      ],
      "dateModified": "2018-02-12 16:21:31"
    },
    {
      "idDrink": "13",
      "drink": "Hard Lemonade",
      "video": "9mwoSjuD-5Y",
      "category": "Klasični koktel",
      "alcoholic": true,
      "glass": "Ohlađena čaša za koktel",
      "instructions": "Sipajte sve sastojke u šejker i dodajte led. Mešajte dok šejker ne postane hladan. Koktel je spreman za serviranje, dekorišite ga sa limunom ili limetom.",
      "drinkThumb": "assets/img/hard-lemonade.jpg",
      "ingredients": [
        "Vodka - 60ml",
        "Limunov sok - 10ml",
        "Sirup od šećera - 30ml",
        "Mineralna voda"
      ],
      "dateModified": "2018-02-23 01:11:21"
    },
    {
      "idDrink": "14",
      "drink": "Rose Cosmo",
      "video": null,
      "category": "Klasični koktel",
      "alcoholic": true,
      "glass": "Ohlađena čaša za martini",
      "instructions": "",
      "drinkThumb": "assets/img/rose-cosmo.jpg",
      "ingredients": [
        "Vodka Smirnoff - 30ml",
        "Limunov sok - 10ml",
        "Triple sec - 20ml",
        "Sirup od ruže - 20ml",
        "Sok od brusnice"
      ],
      "dateModified": "2018-02-21 13:41:31"
    },
    {
      "idDrink": "15",
      "drink": "Jameson Ginger and Lime",
      "video": "3hX3nstpbA4",
      "category": "Klasicni kokteli",
      "alcoholic": true,
      "glass": "3dl",
      "instructions": "Napunite čašu ledom do vrha i Sipajte deo Jamesona. dodajte 4 dela Ginger Ale-a i promešajte. Krišku limete malo iscedite i stavite u led.",
      "drinkThumb": "assets/img/jameson-ginger-and-lime.jpg",
      "ingredients": [
        "Jameson Irish Whiskey - 50ml",
        "Schwepps Ginger Ale - 200ml",
        "Limeta"
      ],
      "dateModified": "2018-02-12 16:21:31"
    },
    {
      "idDrink": "16",
      "drink": "Caipiroska",
      "video": "wZGTVXeSaAU",
      "category": "",
      "alcoholic": true,
      "glass": "2dl",
      "instructions": "Isecite polovinu limete na sitnije komade, stavite ih u čašu i iscedite sa tučkom. Uzmite nekoliko listova bosiljka, stavite ih na dlan i pljesnite dva puta. Bosiljak stavite u čašu i blago ga presujte tučkom da otpusti aromu. Dodajte Vermut, Vodku, drobljeni led i promešajte. Dekorišite sa nekoliko listova bosiljka i limetom",
      "drinkThumb": "assets/img/caipiroska.jpg",
      "ingredients": [
        "Vermut - 60ml",
        "Vodka - 20ml",
        "Limeta - 1",
        "Bosiljak",
        "Led - drobljeni"
      ],
      "dateModified": "2018-02-12 16:21:31"
    },
    {
      "idDrink": "17",
      "drink": "Fruity Carpiroska",
      "video": "37dL-L52kRc",
      "category": "",
      "alcoholic": true,
      "glass": "3dl",
      "instructions": "Iseckajte limetu na sitne komade i dodajte smeđi šećer. Sa tučkom ispresujte da limeta otpusti sok. Zatim dodajte seckano voće i ponovo ispresujte. Dodajte drobljeni led i votku i promesajte. Dekorišite sa limetom i voćem.",
      "drinkThumb": "assets/img/fruity-capiroska.jpg",
      "ingredients": [
        "Vodka - 50ml",
        "Smeđi šećer - 2 kasičice",
        "Limeta - 1/2",
        "Sveže voće - sitno iseckano",
        "Led - drobljeni"
      ],
      "dateModified": "2018-02-12 16:21:31"
    },
    {
      "idDrink": "18",
      "drink": "Pear Elder Flower Martini",
      "video": "pGWDRDxWz-o",
      "category": "Klasicni kokteli",
      "alcoholic": true,
      "glass": "Ohlađena čaša za martini",
      "instructions": "",
      "drinkThumb": "assets/img/pear-elder-flower-martini.jpg",
      "ingredients": [
        "Vodka - 50ml",
        "Sok od kruske - 65ml",
        "Sok od limuna - 15ml",
        "Sirup od zove - 15ml"
      ],
      "dateModified": "2018-02-12 16:21:31"
    },
    {
      "idDrink": "19",
      "drink": "MoMo Special",
      "video": null,
      "category": "",
      "alcoholic": true,
      "glass": "Ohlađena čaša za koktel",
      "instructions": "",
      "drinkThumb": "assets/img/name.jpg",
      "ingredients": [
        "Vodka - 60ml",
        "Sok od limuna - 15ml",
        "Sirup od secera - 15ml",
        "Mineralna voda",
        "Nana",
        "Limeta"
      ],
      "dateModified": "2018-02-12 16:21:31"
    },
    {
      "idDrink": "20",
      "drink": "name",
      "video": null,
      "category": "",
      "alcoholic": true,
      "glass": "Ohlađena čaša za koktel",
      "instructions": "",
      "drinkThumb": "assets/img/name.jpg",
      "ingredients": [
        "juice",
        "alcohol"
      ],
      "dateModified": "2018-02-12 16:21:31"
    }
  ]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // drinks>0>"Drink"
  //        >1>"Drink"
  coctails: any;
  tempCocktail: any;
  baseVideoURL: string = 'https://www.youtube.com/embed/';
  fullVideoURL: SafeResourceUrl;

  optionBar: any;

  constructor(private sanitizer: DomSanitizer) {
    this.coctails = mockCoctailDatabase;
    this.tempCocktail = this.coctails.drinks[0];
    this.fullVideoURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseVideoURL + this.tempCocktail.video);
  }
  ngOnInit() {
    this.optionBar = document.getElementById('cocktail');
  }
  updateCocktail(e, sanitizer?: DomSanitizer) {
    this.tempCocktail = this.coctails.drinks[e.value];
    this.fullVideoURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseVideoURL + this.tempCocktail.video);
  }
  sidebarUpdateCocktail(e){
    this.tempCocktail = this.coctails.drinks[e];
    this.fullVideoURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseVideoURL + this.tempCocktail.video);
    this.optionBar.selectedIndex = e;
  }
}
