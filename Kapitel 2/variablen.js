/* Seite 391
var regalboeden=8;
var paareJeBoden=5;
var paareNebenDemRegal=7;
var paare=paareNebenDemRegal+paareJeBoden*regalboeden;
var schuhe=paare*2;
var TAGE_IM_JAHR=365

document.write(TAGE_IM_JAHR / schuhe);
*/

/*var ergebnis=7/11;
document.write(ergebnis.toFixed(2));
document.write(Math.sqrt(-1));
document.write(7/0);*/

/*
function zaehleSchuhe(){
  var TAGE_IM_JAHR=365;
  var regalboeden=8;
  var paareJeBoden=5;
  var paareNebenDemRegal=7;
  var paare= paareNebenDemRegal+paareJeBoden*regalboeden;
  var schuhe=paare*2;
  alert(schuhe);
zaehleSchuhe();
}
*/

function zaehleSchuhe(){
  var regalboeden=document.getElementById("boeden").value;
  var paareJeBoden=document.getElementById("paare-je-boden").value;
  var paareNebenDemRegal=document.getElementById("nebem-dem-regal").value;
  regalboeden=parseInt(regalboeden);
  paareJeBoden=parseInt(paareJeBoden);
  paareNebenDemRegal=parseInt(paareNebenDemRegal);
  var paare=paareNebenDemRegal+paareJeBoden*regalboeden;
  var schuhe=paare*2;
  document.getElementById("ausgabe").innerHTML=schuhe;
}

var kommentar;
if(schuhe>10000){
  kommentar="Oh mein Gott";
} else if (schuhe>1000){
  kommentar="Das sind zu viele Schuhe";
}
else if (schuhe>100){
  kommentar="Das sind sehr viele Schuhe";
}
else if (schuhe>10){
  kommentar="Das sind viele Schuhe";
}
else {
  kommentar="das sind wenige Schuhe";
}
document.getElementById("kommentar").innerHTML=kommentar;

/*
if (schuhe<10) {
  alert("Das sind wenige Schuhe.");
}
if (schuhe>10) {
  alert("Das sind viele Schuhe.")
}
if (schuhe>100) {
  alert("Das sind sehr viele Schuhe.")
}
if (schuhe>1000) {
  alert("Das sind zu viele Schuhe.")
}
if (schuhe>10000) {
  alert("Oh mein Gott!!!")d
}
*/
/*  Seite 415
function neuerEintrag(){
  var eingabe=document.getElementById("neu");
  var neu=eingabe.value;
  var liste=document.getElementById("einkaufsliste");
  var inhalt=liste.innerHTML+"<li>"+neu+"</li>";
  liste.innerHTML=inhalt;
  eingabe.value="";
}
*/
