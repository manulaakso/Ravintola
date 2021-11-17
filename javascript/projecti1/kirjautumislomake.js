// Lomakkeen varsinainen tarkastus
function tarkasta(form)
{
  // Haetaan uudella tavalla tietoa lomakkeelta
  // jossa form-tulee yllÃ¤ olevasta sulkujen sisÃ¤ltÃ¤
  // ja sen tilalla voi olla mikÃ¤ tahansa (tÃ¤ssÃ¤ form)
  // form.nimi - kohdan nimi tulee HTML-Lomakkeen
  // input-sarakkeen name-mÃ¤Ã¤ritteestÃ¤ ja lopuksi
  // valitaan arvo (.value), joka ko. kohdassa on
  var etunimi = form.enimi.value;
  // var etunimi = document.getElementsByName('enimi').value;
  var sukunimi = form.snimi.value;
  var sahkoposti = form.email.value;
  var palaute = form.palaute.value;
  var pallukka = form.mainos; // HUOM! ei valueta
  var check = form.boksi; //HUOM! ei valueta

  // Tarkastus alkaa, ensin tekstiboksit:
  if(etunimi.length < 3)
  {
    alert("Anna vähintään 3-merkkinen etunimi");
    form.enimi.focus(); // SiirtÃ¤Ã¤ kohdistimen etunimikenttÃ¤Ã¤n
    return false; // HyvÃ¤ ohjelmistokÃ¤ytÃ¤ntÃ¤, eli ei palauta mitÃ¤Ã¤n
  }
  if(sukunimi.length < 3)
  {
    alert("Anna vähintään 3-merkkinen sukunimi");
    form.snimi.focus(); // SiirtÃ¤Ã¤ kohdistimen sukuunimikenttÃ¤Ã¤n
    return false; // HyvÃ¤ ohjelmistokÃ¤ytÃ¤ntÃ¤, eli ei palauta mitÃ¤Ã¤n
  }
  // Tarkastetaan, lÃ¶ytyykÃ¶ @-merkkiÃ¤
  var ehdot = /\S+@\S+/;
  if(!ehdot.test(sahkoposti))
  {
    alert("Anna kunnon sähköpostiosoite");
    form.email.focus();
    return false;
  }

  // Tarkastetaan textarea
  if(palaute.length < 20)
  {
    alert("Palautteessa pitää olla vähintään 20 merkkiä");
    form.palaute.focus();
    return false;
  }

  // Tarkastetaan radio-buttonit
  // Luodaan tosi/epÃ¤tosi -muuttuja, joka asetetaan epÃ¤todeksi
  var vastaus = false;
  // luodaan sitÃ¤ varten silmukka, joka kÃ¤y lÃ¤pi kaikki painikkeet
  for(var i = 0; i < pallukka.length; i++) // tÃ¤ssÃ¤ siis mennÃ¤Ã¤n siihen saakka, kun pallukoita riittÃ¤Ã¤
  {
    if(pallukka[i].checked == true)
    {
      vastaus = true;
    }
  }
  if(vastaus == false)
  {
    alert('Et ole valinnut haluatko mainoksia');
    return false;
  }

  // Tarkastetaan aivan samalla tavalla Checkboxit
  var checkvastaus = false;
  for(var j = 0; j < check.length; j++)
  {
    if(check[j].checked == true)
    {
      checkvastaus = true;
    }
  }
  if(checkvastaus == false)
  {
    alert("Et valinnut, mikä on kivaa");
    return false;
  }
  else {
    alert("Kiitos lomakkeen täyttämisestä");
    //return false;
  }
}

// TyhjennetÃ¤Ã¤n lomake, jos siinÃ¤ dataa
function tyhjenna(lomake)
{
  var clean = lomake.value;
  if(!confirm("Oletko varma?"))
  {
    return false;
  }
}
