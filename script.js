/*
  Petit script JavaScript :
  affiche automatiquement l'année actuelle
  dans le pied de page.
*/


const annee = document.getElementById("annee");


annee.textContent = new Date().getFullYear();