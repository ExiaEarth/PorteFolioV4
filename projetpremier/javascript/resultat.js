function resultat() {
  let score = 0;
  let rep1 = document.querySelector("input[name=q01]:checked").value;
  let rep2 = document.querySelector("input[name=q02]:checked").value;

  if (rep1 == "true") {
    score++;
  }
  if (rep2 == "true") {
    score++;
  }

  document.getElementById("repResultat").innerHTML = score;

  const divBonneRep = document.querySelectorAll(".bonneRep");
  divBonneRep.forEach((elem) => {
    elem.style.backgroundColor = "green";
  });
}
