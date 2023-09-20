//Recupération
var articles = document.querySelectorAll('.item');
var prixTotal = document.getElementById('total-price');

// Fonction pour gérer chaque article
function gestionArticle(article) {
  var boutonAjout = article.querySelector('.increase');
  var boutonDiminution = article.querySelector('.decrease');
  var boutonSuppression = article.querySelector('.remove');
  var boutonFavoris = article.querySelector('.like');
  var quantiteAffichee = article.querySelector('.quantity');
  var quantite = parseInt(quantiteAffichee.innerText);
  var prixTotalArticle = article.querySelector('.total span');
  var prixUnitaire = article.querySelector('.price');
  var prixArticle = parseInt(prixUnitaire.innerText);

  //AUGMENTER LE NOMBRE D'ARTICLE ET METTRE A JOUR
  boutonAjout.addEventListener('click', function () {
    quantite++;
    quantiteAffichee.innerText = quantite;
    prixTotalArticle.innerText = quantite * prixArticle;
    calculerPrixTotal();
  });

//DECREMENTER LE NOMBRE D'ARTICLE ET METTRE A JOUR LE PRIX
  boutonDiminution.addEventListener('click', function () {
    if (quantite > 0) {
      quantite--;
      quantiteAffichee.innerText = quantite;
      prixTotalArticle.innerText = quantite * prixArticle;
      calculerPrixTotal();
    }
  });

//SUPPRIMER UN ARTICLE ET METTRE A JOUR
  boutonSuppression.addEventListener('click', function () {
    var prixArticleTotal = parseFloat(prixTotalArticle.innerText.replace('$', ''));
    prixTotal.innerText = (parseFloat(prixTotal.innerText.replace('$', '')) - prixArticleTotal).toFixed(2) + ' $';
    article.remove();
  });

 //AJOUT EN FAVORIS ET CHANGEMENT DE COULEUR
  const couleursFavoris = ['red', 'transparent'];
  let indiceCouleur = 0;

  boutonFavoris.addEventListener('click', function () {
    boutonFavoris.style.backgroundColor = couleursFavoris[indiceCouleur];
    indiceCouleur = (indiceCouleur + 1) % couleursFavoris.length;
    alert('Ajouté aux favoris');
  });
}

//Gestion de tous les articles
for (var i = 0; i < articles.length; i++) {
  gestionArticle(articles[i]);
}

// Calcul du prix total
function calculerPrixTotal() {
  var prixTotalCalculé = 0;

  for (var i = 0; i < articles.length; i++) {
    var prixArticleTotal = parseFloat(articles[i].querySelector('.total span').innerText.replace('$', ''));
    prixTotalCalculé += prixArticleTotal;
  }

  prixTotal.innerText = prixTotalCalculé.toFixed(2) + ' $';
}

// Calcul du prix total initial 
calculerPrixTotal();
