zime = "X";
gajieni = 0;

function gajiens(poga) {
  poga.innerHTML = zime;
  gajieni++;
  uzvara();
  if (zime == "X") { 
    zime = "O"; 
  }
  else { zime = "X"; }
  poga.disabled = true;
}

function uzvara() {
  poga1 = document.getElementById("poga1").innerHTML;
  poga2 = document.getElementById("poga2").innerHTML;
  poga3 = document.getElementById("poga3").innerHTML;
  poga4 = document.getElementById("poga4").innerHTML;
  poga5 = document.getElementById("poga5").innerHTML;
  poga6 = document.getElementById("poga6").innerHTML;
  poga7 = document.getElementById("poga7").innerHTML;
  poga8 = document.getElementById("poga8").innerHTML;
  poga9 = document.getElementById("poga9").innerHTML;

  //Horizontāles
  if (poga1 == "X" && poga2 == "X" && poga3 == "X") {
    alert(zime+" uzvarēja");
  }
  else if (poga1 == "O" && poga2 == "O" && poga3 == "O") {
    alert(zime+" uzvarēja");
  }
  else if (poga4 == "X" && poga5 == "X" && poga6 == "X") {
    alert(zime+" uzvarēja");
  }
  else if (poga4 == "O" && poga5 == "O" && poga6 == "O") {
    alert(zime+" uzvarēja");
  }
  else if (poga7 == "X" && poga8 == "X" && poga9 == "X") {
    alert(zime+" uzvarēja");
  }
  else if (poga7 == "O" && poga8 == "O" && poga9 == "O") {
    alert(zime+" uzvarēja");
  }

  //Vertikāles
  else if (poga1 == "X" && poga4 == "X" && poga7 == "X") {
    alert(zime+" uzvarēja");
  }
  else if (poga1 == "O" && poga4 == "O" && poga7 == "O") {
    alert(zime+" uzvarēja");
  }
  else if (poga2 == "X" && poga5 == "X" && poga8 == "X") {
    alert(zime+" uzvarēja");
  }
  else if (poga2 == "O" && poga5 == "O" && poga8 == "O") {
    alert(zime+" uzvarēja");
  }
  else if (poga3 == "X" && poga6 == "X" && poga9 == "X") {
    alert(zime+" uzvarēja");
  }
  else if (poga3 == "O" && poga6 == "O" && poga9 == "O") {
    alert(zime+" uzvarēja");
  }

  //Diagonāles
  else if (poga1 == "X" && poga5 == "X" && poga9 == "X") {
    alert(zime+" uzvarēja");
  }
  else if (poga1 == "O" && poga5 == "O" && poga9 == "O") {
    alert(zime+" uzvarēja");
  }
  else if (poga3 == "X" && poga5 == "X" && poga7 == "X") {
    alert(zime+" uzvarēja");
  }
  else if (poga3 == "O" && poga5 == "O" && poga7 == "O") {
    alert(zime+" uzvarēja");
  }
  else if (gajieni == 9) {
    alert("Neizšķirts")
  }
}