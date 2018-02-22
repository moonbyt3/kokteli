import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

const mockCoctailDatabase = {
  "drinks": [
      {
          "idDrink": "0",
          "drink": "Martini",
          "video": "1Jq4tPutdGQ",
          "category": "Klasični koktel",
          "alcoholic": true,
          "glass": "Ohlađena čaša za koktel",
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
          "category": "Klasični koktel",
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
          "category": "Klasični koktel",
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
          "category": "Klasični koktel",
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
          "category": "Klasični koktel",
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
        "glass": "Šuter 0.3ml",
        "instructions": "Sipajte prvo vodku i limunov/limetin sok. Ukapajte nekoliko kapi Grenadine-a i zatim prelijte Baileys-om koji će zbog limuna dobiti teksturu mozga.",
        "drinkThumb": "assets/img/monkey-brain.jpg",
        "ingredients": [
          "Vodka - 0.1ml",
          "Limunov/limetin sok - 0.1ml",
          "Baileys® irish cream - 0.1ml",
          "Grenadine - nekoliko kapi"
          
        ],
        "dateModified": "2018-02-12 16:21:31"
    },
    {
      "idDrink": "6",
      "drink": "Screwdriver (đus-vodka)",
      "video": "ZCtpPMZsajg",
      "category": "Klasični koktel",
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
      "category": "",
      "alcoholic": true,
      "glass": "Pinta ili 0.3dl",
      "instructions": "Još jedan veoma lagan koktel. Stavite sve sastojke u čašu sa ledom, promešajte i ukrasite sa kriškama limete.",
      "drinkThumb": "assets/img/cuba-libre.jpg",
      "ingredients": [
        "Tamni / svetli rum - 1/3",
        "Coca-Cola - 2/3",
        "Sok limuna/limete - 0.1ml",
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
        "Sok od narandže - 1.5dl",
        "Tekila - 0.4dl",
        "Grenadine sirup - 0.1dl"
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
        "Baileys® irish cream - 0.1ml",
        "Mleko 0.1ml"
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
      "instructions": "U sejker dodajte sastojke i mesajte dok se svi sastojci ne pomesaju. Zatim dodajte dosta leda i mesajte dok sejker ne postane hladan. Dekorisite sa kriskama limuna.",
      "drinkThumb": "assets/img/name.jpg",
      "ingredients": [
        "Johnnie Black - 0.03ml",
        "Triple Sec Narandza - 0.015ml",
        "Sok od limuna - 0.02ml",
        "Belance - 1 jaje",
        "Sirup od šećera - 0.015ml"
      ],
      "dateModified": "2018-02-12 16:21:31"
    },
    {
      "idDrink": "12",
      "drink": "Moscow Mule",
      "video": "W1_eAahUUpM",
      "category": "Klasicni kokteli",
      "alcoholic": true,
      "glass": "Ohlađena čaša za koktel",
      "instructions": "Sipajte vodku u casu, dodati svezu limetu iseckanu. Dodajte sirup od secera. Sve to dobro iznjecite zatim dodajte sirup od djumbira i napuniti casu punu leda i dodati sprajt do vrha case. Dekorisati sa limetom i nekoliko listova nane",
      "drinkThumb": "assets/img/name.jpg",
      "ingredients": [
        "Vodka - 0.06ml",
        "Limeta - 1/2",
        "Sirup od šećera - 0.015ml",
        "Sirup od đumbira - 0.015ml",
        "Sprajt",
        "Nana - nekoliko listova"
      ],
      "dateModified": "2018-02-12 16:21:31"
    },
    {
      "idDrink": "13",
      "drink": "Hard Lemonade",
      "video": "9mwoSjuD-5Y",
      "category": "Klasicni kokteli",
      "alcoholic": true,
      "glass": "Ohlađena čaša za koktel",
      "instructions": "Sipajte sve sastojke u sejker i dodajte led. Mesajte dok sejker ne postane hladan. Koktel je spreman za serviranje, dekorisite ga sa limunom ili limetom.",
      "drinkThumb": "assets/img/name.jpg",
      "ingredients": [
        "Vodka - 0.06ml",
        "Limunov sok - 0.01ml",
        "Sirup od secera - 0.03ml",
        "Mineralna voda"
      ],
      "dateModified": "2018-02-12 16:21:31"
    },
    {
      "idDrink": "14",
      "drink": "Rose Cosmo",
      "video": null,
      "category": "Klasicni kokteli",
      "alcoholic": true,
      "glass": "Ohlađena čaša za martini",
      "instructions": "",
      "drinkThumb": "assets/img/name.jpg",
      "ingredients": [
        "Vodka Smirnoff - 0.03ml",
        "Limunov sok - 0.01ml",
        "Triple sec - 0.02ml",
        "Sirup od ruze - 0.02ml",
        "Sok od borovnice"
      ],
      "dateModified": "2018-02-12 16:21:31"
    },
    {
      "idDrink": "15",
      "drink": "Metropolitian",
      "video": "S45bqty03DQ",
      "category": "Klasicni kokteli",
      "alcoholic": true,
      "glass": "Ohlađena čaša za martini",
      "instructions": "",
      "drinkThumb": "assets/img/name.jpg",
      "ingredients": [
        "Vodka - 0.03ml",
        "Triple sec - 0.03ml",
        "Sok od brusnice - 0.045ml",
        "Sok od limete - 0.02ml"
      ],
      "dateModified": "2018-02-12 16:21:31"
    },
    {
      "idDrink": "16",
      "drink": "Caipirosca",
      "video": "wZGTVXeSaAU",
      "category": "",
      "alcoholic": true,
      "glass": "0.2dl",
      "instructions": "",
      "drinkThumb": "assets/img/name.jpg",
      "ingredients": [
        "Vodka - 0.06ml",
        "Limeta - 1/2",
        "Smedji secer - 2 kasicice",
        "Led"
      ],
      "dateModified": "2018-02-12 16:21:31"
    },
    {
      "idDrink": "17",
      "drink": "Fruity Carpirosca",
      "video": "37dL-L52kRc",
      "category": "",
      "alcoholic": true,
      "glass": "Ohlađena čaša za koktel",
      "instructions": "",
      "drinkThumb": "assets/img/name.jpg",
      "ingredients": [
        "Vodka - 0.06ml",
        "Smedji secer - 2 kasicice",
        "Limeta - 1/2",
        "Sveze voce - sitno iseckano",
        "Led - mleveni"
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
      "drinkThumb": "assets/img/name.jpg",
      "ingredients": [
        "Vodka - 0.05ml",
        "Sok od kruske - 0.065ml",
        "Sok od limuna - 0.015ml",
        "Sirup od zove - 0.015ml"
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
        "Vodka - 0.06ml",
        "Sok od limuna - 0.015ml",
        "Sirup od secera - 0.015ml",
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
  constructor(private sanitizer: DomSanitizer) {
    this.coctails = mockCoctailDatabase;
    this.tempCocktail = this.coctails.drinks[0];
    this.fullVideoURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseVideoURL + this.tempCocktail.video);
  }
  ngOnInit() {
    
  }
  updateCocktail(e, sanitizer?: DomSanitizer) {
    this.tempCocktail = this.coctails.drinks[e.value];
    this.fullVideoURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseVideoURL + this.tempCocktail.video)
  }
}
