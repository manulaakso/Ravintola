// Luodaan kortit
var merkit = ["kissa0.jpg",'kissa1.jpg','kissa2.jpg','kissa3.jpg','kissa4.jpg','kissa5.jpg','kissa6.jpg','kissa7.jpg','kissa0.jpg','kissa1.jpg','kissa2.jpg','kissa3.jpg','kissa4.jpg','kissa5.jpg','kissa6.jpg','kissa7.jpg'];
// luodaan laskurimuuttuja
var smerkki = 0;
// luodaan vanha-muuttuja vanhaa korttia varten
// eli verrataan uutta korttia ja vanhaa korttia
var vanha = -1;
// luodaan vanhan kortin alt-ominaisuutta varten muuttuja
var valtti;
// varsinaisen taulukon luonti-funktio, jota kutsutaan HTML:n onload-komennolla
function luoTaulukko() {
  // Sekoitetaan alkuperÃ¤inen taulukko
   sekoitetut = sekoita(merkit);
   // Haetaan HTML-sivulta paikka, johon peli tulee
   var paikka = document.getElementById('pelialue');
   // Luodaan peliÃ¤ varten taulukkoelementti
   var taulukko = document.createElement('table');
   // Luodaan peliÃ¤ varten taulukon sisÃ¤ltÃ¶ elementti
  var taulukonSisus = document.createElement('tbody');
  // Itse taulukon luominen, ulompi for tekee rivit ja sisempi sarakkeet
  for(var i = 0; i < 4; i++)
  {
    // Luodaan rivielementti
    var rivi = document.createElement('tr');

    for(var j = 0; j < 4; j++)
    {
      // luodaan sarake-elementti
      var solu = document.createElement('td');
      // luodaan elementti, johon kortti asetetaan
      var sisus = document.createTextNode('');
      // MÃ¤Ã¤ritetÃ¤Ã¤n kortin alt-muuttuja, 0 - 15, eli jokaisella kortilla omansa
      solu.setAttribute('alt', sekoitetut[(smerkki)]);
      // MÃ¤Ã¤ritetÃ¤Ã¤n kortin id-muuttuja: solu+numero, esim. solu12
      solu.setAttribute('id', 'solu' + smerkki);
      // MÃ¤Ã¤ritetÃ¤Ã¤n kortin name-muuttuja 0 - 15, jokaisella omansa
      solu.setAttribute('name', smerkki);
      // MÃ¤Ã¤ritetÃ¤Ã¤n kortille onclick -toiminta, kutsutaan nayta-funktiota
      solu.setAttribute('onclick', 'nayta('+smerkki+');');
      // kasvatetaan laskuria yhhdellÃ¤
      smerkki += 1;
      // syÃ¶tetÃ¤Ã¤n yllÃ¤olevat muutoksen kortin-tietoihin
      solu.appendChild(sisus);
      // syÃ¶tetÃ¤Ã¤n yllÃ¤olavat muutokset rivin tietoihin
      rivi.appendChild(solu);
    }
    // syÃ¶tetÃ¤Ã¤n rivit taulukon tbody-elementtiin
    taulukonSisus.appendChild(rivi);
  }
  // syÃ¶tetÃ¤Ã¤n lopuksi taulukon tbody-elementti taulukkoon
  taulukko.appendChild(taulukonSisus);
  // Ja aivan viimeiseksi syÃ¶tetÃ¤Ã¤n taulukko sille varattuun paikkaan
  paikka.appendChild(taulukko);
  // MÃ¤Ã¤ritetÃ¤Ã¤n taulukolle CSS-arvo border, joka on 2px
  taulukko.setAttribute('border', '2');
}
// Valmiiksi annettu funktio, joka sekoittaa pakan.
function sekoita(taulukko)
{
    taulukko.sort(function(a, b){return 0.5 - Math.random()});
    return taulukko;
}
// Funktio, joka laitetaan jokaisen kortin onclick-toiminnoksi
function nayta(numero)
{
  // haetaan napautettu kortti
  var tunnus = document.getElementById('solu'+numero);
  // haetaan napautetun kortin alt-muuttuja
  var altti = tunnus.getAttribute('alt');
  // tarkistetaan, onko kortteja napautettu aiemmin
  if(vanha != -1)
  {
    // jos on, haetaan vanhan kortin alt-muuttuja
    valtti = vanha.getAttribute('alt');
  }
  else{
    // muussa tapauksessa syÃ¶tetÃ¤Ã¤n siihen -1
    valtti = vanha;
  }

  // syÃ¶tetÃ¤Ã¤n napautetun taustan tilalle valitun kortin kuva
  tunnus.innerHTML = '<img src="kuvat/'+altti+'">';
  // tarkastetaan, onko edellinen kortti ja nykyinen kortti samoja (altit)
  if(altti == valtti){
    // mikÃ¤li ovat, haetaan nykyisen kortin alt-muuttuja
    var altti = tunnus.getAttribute('alt');
    // nÃ¤ytetÃ¤Ã¤n vanhakortti
    vanha.innerHTML = '<img src="kuvat/'+altti+'">';
    // nÃ¤ytetÃ¤Ã¤n uusi kokrtti
    tunnus.innerHTML = '<img src="kuvat/'+altti+'">';
  }
  else{
    // muussa tapauksessa tehdÃ¤Ã¤n nykyisestÃ¤ kortista vanha
    vanha = tunnus;
    // pysÃ¤ytetÃ¤Ã¤n ohjelman suoritus hetkeksi
    odota(tunnus);
  }
if(smerkki) {
  
}
}
// funktio, joka pysÃ¤yttÃ¤Ã¤ ohjelman suorituksen 1000-millisekunniksi
function odota(joku) {
  // varsinainen pysÃ¤ytys funktio
  setTimeout(function(){
      // pysÃ¤ytyksen jÃ¤lkeen tyhjennetÃ¤Ã¤n nykyisen kortin tiedot
     joku.innerHTML = '';
     // PysÃ¤ytyksen pituus 1000 ms = 1 sekunti
   }, 1000);
}
