// Ceci un commentaire

/* Ceci est commentaire
sur plusieurs lignes */

function bonjour() {
  document.getElementById("reponseBonjour").innerHTML = "Bonjour !";
}

const direBonjour = document.querySelector("#direBonjour");

direBonjour.addEventListener("click", () => {
  document.getElementById("reponseBonjour").innerHTML =
    "Bonjour via addEventListener<br>Comment allez-vous ?";
});

function exoGuide() {
  let userFirstName = document.getElementById("userFirstName").value;
  let userName = document.getElementById("userName").value;
  const retourExoGuide = document.getElementById("retourExoGuide");

  retourExoGuide.innerHTML = "Bonjour " + userFirstName + " " + userName + " !";
  retourExoGuide.classList.add("exoGuide");
}

function testPrompt() {
  let prenom = prompt("Veuillez entrer votre prénom : ");
  let nom = prompt("Veuillez entrer votre nom : ");
  alert("Bonjour " + prenom + " " + nom + "\nComment allez-vous ?");
}

function testMajeur() {
  let ageUser = document.getElementById("ageUser").value;
  const repMajeur = document.getElementById("repMajeur");
  if (ageUser >= 18) {
    repMajeur.innerHTML = "Vous êtes majeur<br>Vous êtes trop vieux !";
  } else {
    repMajeur.innerHTML = "Vous êtes mineur.";
  }
  repMajeur.classList.add("exoGuide");
}

function calculPrix() {
  let prixArticle = Number(document.getElementById("prixArticle").value);
  let nbreArticle = Number(document.getElementById("nbreArticle").value);
  let tva = Number(document.getElementById("tva").value);

  let prixHtva = nbreArticle * prixArticle;
  let prixTVAC = prixHtva + (prixHtva * tva) / 100;

  document.getElementById("reponseCalculPrix").innerHTML =
    "<p>Total HTVA : " +
    prixHtva +
    "€.</p><p>Total TVAC : " +
    prixTVAC +
    "€.</p>";
  document.getElementById("reponseCalculPrix").classList.add("exoGuide");
}

function calculSphere() {
  let rayon = Number(document.getElementById("rayonUser").value);
  let volume = (4 * Math.PI * rayon ** 3) / 3;
  const reponseVolume = document.getElementById("reponseSphere");

  reponseVolume.innerHTML =
    "Le volume d'une sphere d'un rayoin de " +
    rayon +
    " est de " +
    volume.toFixed(2);

  reponseVolume.classList.add("exoGuide");
}

function demandeFormation() {
  let naisUser = Number(document.getElementById("naissanceUser").value);
  let anneActuelle = new Date();
  anneActuelle = anneActuelle.getFullYear();
  let ageUser = anneActuelle - naisUser;
  let msg = "";
  if (ageUser >= 18 && ageUser < 35) {
    msg =
      "Vous pouvez suivre une de nos formations, rendez vous sur <a href='https://www.interface3namur.be' target='_blank'>Interface3.Namur</a>";
  } else {
    msg = "Vous ne rentrez pas dans les conditions pour suivre nos formations.";
  }

  document.getElementById("repFormation").innerHTML = msg;
  document.getElementById("repFormation").classList.add("exoGuide");
}

function bissextile() {
  let anneeUser = document.getElementById("anneeUser").value;
  let msg = "";
  let colorRep = true;
  /*
  divisible par 400
  OU
  divisible par 4 mais pas par 100
  */
  if (anneeUser % 400 == 0 || (anneeUser % 4 == 0 && anneeUser % 100 != 0)) {
    msg = "L'année est bissextile";
    document.getElementById("repBissextile").style.color = "green";
  } else {
    msg = "L'année n'est pas bissextile";
    document.getElementById("repBissextile").style.color = "red";
  }

  document.getElementById("repBissextile").innerHTML = msg;
}

function pwChallenge() {
  let pw01 = document.getElementById("pw01").value;
  const pw2Element = document.getElementById("pw02");
  let pw02 = pw2Element.value;
  let msg = "";

  if (pw01 == pw02) {
    msg = "Mot de passe validé !";
    pw2Element.style.backgroundColor = "rgb(95, 159, 95)";
  } else {
    msg = "Les mots de passe entrés sont différents.";
    pw2Element.style.backgroundColor = "rgb(254, 105, 105)";
  }
  document.getElementById("reppwChallenge").innerHTML = msg;
}

function condSwitch() {
  let nbreUser = document.getElementById("condSwitch").value;
  console.log(nbreUser);

  switch (nbreUser) {
    case "1":
    case "i":
      alert("Vous appuyez sur 1");
      break;
    case "2":
      alert("Vous appuyez sur 2");
      break;
    case "3":
      alert("Vous appuyez sur 3");
      break;
    case "4":
      alert("Vous appuyez sur 4");
      break;
    default:
      alert("Entre 1 et 4 on t'a dit !");
  }
}

function entreOuPas() {
  let genreUser = document.querySelector("input[name=genre]:checked").value;
  let ageUser = document.getElementById("ageUserEntre").value;
  let msg = "";

  if (ageUser < 18) {
    msg = "Vous ne pouvez pas entrer.";
  } else if (genreUser != "homme" || ageUser <= 25 || ageUser >= 55) {
    msg = "Bienvenue, c'est gratuit pour vous";
  } else {
    msg = "C'est 12.50€ l'entrée";
  }

  document.getElementById("repEntre").innerHTML = msg;
  document.getElementById("repEntre").classList.add("exoGuide");
}

function boucleWhile() {
  let repUser = prompt("Veuillez appuyez sur 4");
  while (repUser != "4") {
    repUser = prompt("On t'a dit d'appuyez sur 4");
  }
  alert("Merci pour le 4 !");
}

function whileCompteur() {
  let compteur = 0;
  while (compteur < 10) {
    alert("Mon compteur vaut " + compteur);
    compteur++;
  }
  alert("Boucle terminée !");
}

function boucleDoWhile() {
  let repUser = "";
  do {
    repUser = prompt("Appuye sur 4");
  } while (repUser != "4");

  alert("Merci pour le 4");
}

function boucleFor() {
  for (i = 0; i < 10; i++) {
    alert("La valeur de i  est " + i);
  }
  alert("Boucle est terminée");
}

function concaBoucle() {
  let motUser = "";
  let msg = "";

  for (i = 0; i < 3; i++) {
    motUser = prompt("Veuillez entrer un mot :");
    msg += motUser + "\n";
  }

  alert(msg);
}

function expliI() {
  for (i = 0; i < 6; i++) {
    alert(i);
  }
}

function for15Suivants() {
  let msg = "";
  let nbreDepart = Number(document.getElementById("nbreUser15Suivants").value);
  //Methode 1
  for (i = 1; i < 15; i++) {
    msg += nbreDepart + i + " ";
  }
  document.getElementById("rep15Suivants").innerHTML = msg;
  document.getElementById("rep15Suivants").classList.add("exoGuide");
}

function combienEnsuite() {
  let nbreDepart = Number(document.getElementById("nbreDepart").value);
  let nbreEnsuite = Number(document.getElementById("nbreSuivants").value);
  let msg = "";

  for (i = nbreDepart + 1; i <= nbreDepart + nbreEnsuite; i++) {
    msg += i + " ";
  }

  document.getElementById("retourCombien").innerHTML = msg;
  document.getElementById("retourCombien").classList.add("exoGuide");
}

function faireTableMulti() {
  let nbreUser = Number(document.getElementById("nbreUserMulti").value);
  let msg = "<h4>Table de multiplication de " + nbreUser + "</h4>";
  for (i = 0; i <= 10; i++) {
    msg += "<p>" + nbreUser + " x " + i + " = " + nbreUser * i + "</p>";
  }
  document.getElementById("repfaireTableMulti").innerHTML = msg;
  document.getElementById("repfaireTableMulti").classList.add("exoGuide");
}

function tableMulti() {
  let msg = "";
  for (i = 1; i < 11; i++) {
    msg +=
      "<div class='tableMulti'><h4>Table de multiplication de " + i + "</h4>";
    for (j = 0; j < 11; j++) {
      msg += "<p>" + i + " x " + j + " = " + i * j + "<p>";
    }
    msg += "</div>";
  }
  document.getElementById("reptableMulti").innerHTML = msg;
}

function diviseur() {
  let nbreUser = Number(document.getElementById("nbreUserDiviseur").value);
  let msg = "";
  //Boucle qui n'intégre pas le nbreUser
  //nbreUser est un diviseur de toutes façons
  for (i = 1; i < nbreUser; i++) {
    if (nbreUser % i == 0) {
      msg += i + " ";
    }
  }
  // Ajout du nbreUser au msg
  msg += "et " + nbreUser;

  document.getElementById("repDiviseurs").innerHTML = msg;
  document.getElementById("repDiviseurs").classList.add("exoGuide");
}

function scriptBoucle() {
  let msg = "";
  // Si ds msg je veux un p
  for (i = 0; i < 5; i++) {
    msg += "<p>" + i + "e test</p>";
    alert(msg);
  }
  msg +=
    "<input type='button' value='Fonction prompt' onclick='testPrompt()' />";

  document.getElementById("repScriptBoucle").innerHTML = msg;
}

function changeCouleur() {
  let r = document.getElementById("rangeRouge").value;
  let v = document.getElementById("rangeVert").value;
  let b = document.getElementById("rangeBleu").value;
  let a = document.getElementById("rangeAlpha").value;

  let couleurFond = "rgba(" + r + "," + v + "," + b + "," + a + ")";

  document.body.style.backgroundColor = couleurFond;
}

function testMdp() {
  let mdpUser = document.getElementById("mdpUser").value;
  const divRep = document.getElementById("repTestMdp");
  let msg = "";

  if (mdpUser.length < 6) {
    msg += "<p style='color:red'>Le mot de passe est trop court</p>";
  }

  if (!mdpUser.match(/[A-Z]/g)) {
    msg += "<p style='color:red'>Y a pas de majuscule !</p>";
  }

  if (!mdpUser.match(/[0-9]/g)) {
    msg += "<p style='color:red'>Y a pas de chiffre.";
  }

  if (!mdpUser.match(/[^a-zA-Z\d]/g)) {
    msg += "<p style='color:red'>Y a pas de caractere spécial</p>";
  }

  if (msg == "") {
    msg = "<p style='color:green'>Mot de passe ok !</p>";
  }
  divRep.innerHTML = msg;
}
