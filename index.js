// La logique de la calculatrice 
// ON commence par séléctionner tous les boutons
const buttons = document.querySelectorAll('.btn');

// Ensuite je récupére la balise l'id result dédié aux resultats
const result = document.getElementById('result');

// J'utilise ma méthode forEach pour boucler sur chaque buttons

buttons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
            //on injecte du texte dans la balise h3 en récupérant l'id de chaque button . on met += pour concaténer les chiffres les unes à la suite des autres.
            result.textContent += e.target.id;
      })
})
// J'utilise equal pour faire la calcul avec la méthode eval()
equal.addEventListener('click', () => {
      result.textContent = eval(result.textContent)
})
// Pour nettoyer la calculatrice
clear.addEventListener('click', () => {
      result.textContent = "";
})