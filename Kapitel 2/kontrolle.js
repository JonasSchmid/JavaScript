function schreibeFehler(meldung){
  //diese Funktion
}

function pruefeNachnamen(){
  var nachnamen=document.getElementById("nachnamen").value;
  if (nachnamen==""){
  schreibeFehler("Bitte geben sie einen Nachnamen an");
}

function pruefeEmail(){
  var email=document.getElementById("email").value;
  if (email==""){
  schreibeFehler("Bitte geben sie eine Email an");
}
  }

function pruefeVornamen(){
  var vorname=document.getElementById("vorname").value;
  if (vorname==""){
    schreibeFehler("Bitte geben sie einen Vornamen an");
  }
  else if (vorname=="Klausie") {
    schreibeFehler("Klausie muss draussen bleiben!")
  }
}

function pruefeFormular(){
  versteckeFehler();
  pruefeVornamen();
  pruefeNachnamen();
  pruefeEmail();
  schickeFormular();
}

function schickeFormular(){
}
