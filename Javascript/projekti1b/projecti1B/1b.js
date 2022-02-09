function tarkistaTiedot(form)
{
//Alla määritän nimi kentän ja tarkastan sen.
  var nimi = form.nimi.value;
    if(nimi.length >= 5)
    {
    }else{
      alert("Kirjoita Koko Nimesi(Etunimi ja Sukunimi)");
      form.nimi.focus();
      return false;
    }
// Alla sähköposti kentän ja tarkistan sähköpostin oikeinkirjoituksen
  var email = form.email.value;
  var ehdot = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!ehdot.test(email))
    {
      alert("Et antanut sähköpostiosoitettasi tai se on virheellinen!");
      form.email.focus();
      return false;
    }

  var ika = parseInt(form.ika.value);
    if(isNaN(ika)){
      alert("Antamasi syöte on virheellinen, syotä luku!");
      form.ika.focus();
      return false;
    }

    if(Math.min(ika < 18)){
      alert("olet liian nuori!");
      form.ika.focus();
      return false;
    }

    if(Math.max(ika >= 120)){
      alert("Tarkista ikäsi");
      form.ika.focus();
      return false;
    }
  var radioButton = form.kieli;
  var vastaus = false;

  for(var i = 0; i < radioButton.length; i++)
  {
    if(radioButton[i].checked == true)
    {
      vastaus = true;
    }
  }
    if(vastaus == false)
    {
      alert("Et vastannut minkä ohjelmointikielen osaat parhaiten!");
      return false;
    }

  var select = document.getElementById("pudotus");
  if(select.value == ""){
    alert("et kertonut mielipidettäsi sivusta!");
    return false;
  }
//return true;

var check = form.boksi;
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
  alert("Kerro osallistutko kilpailuun?");
  return false;
}
else {
    alert("Kiitos lomakkeen täytöstä");
    //return false;
  }

var message = form.message.value;
if(message.length < 20)
  {
    alert("Palautteessa pitää olla vähintään 20 merkkiä");
    form.message.focus();
    return false;
  }
}
function tyhjenna(lomake)
{
  var clean = lomake.value;
  if(!confirm("Oletko varma?"))
  {
    return false;
  }
}
