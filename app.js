
const section = document.querySelector('ul'); // Selection la section du HTML pour y insere la reponce

// url du json
var requestURL = 'pokedex.json';

var request = new XMLHttpRequest();
// Cree une requete

request.open('GET', requestURL);
// Ouvrir la requete, methode 'get' afficher, Afficher quoi le 'pokedex.json', si la reponce est vrai 'true' alors fait onload

request.responseType = 'json';
request.send();

request.onload = // La fonction laod est declenché quand une reponce du serveur a ete renvoyee avec succes

    function () {

        var pokedexJson = request.response;
        // reponse requete stocker dans la variable pokedexJson
        showPokemon(pokedexJson);
        // cree l'obj showPokemon qui est = a la variable pokedexJson
    }

function showPokemon(jsonObj) {
    // creation de la fonction avec parametre jsonObj

    var listePokemon = jsonObj;
    // creation vairalbe en prenant le tableauj pesent dans le json pour pouvoir cree la boucle

    for (var i = 0; i < listePokemon.length; i++) {
        // creation de la boucle 'length' sert a parcourir tt le liste

        // creation des element .........................................

        var myArticle = document.createElement('li');
        // cree un nouvelle article 'OBLIGATOIRE'

        var name = document.createElement('h3');
        // cree un h2 pour metre le nom du villageois
        var genre = document.createElement('ul');
        // Cree un paragraphe pour l'espece
        var vitesse = document.createElement('p');
        // Cree un paragraphe pour l'anniversaire
        var hp = document.createElement('p');
        var Defense = document.createElement('p');
        // Cree un paragraphe pour le hobies
        var Attaque = document.createElement('p');
        // Cree un paragraphe pour le genre M ou F

        // ............................................................

        // Attribuer une cle api a chaque element

        /*
         * Class Div parent myArticle
         */
        myArticle.className = 'bdr m-2 p-1'

        name.textContent = listePokemon[i].name.french;
        // insert le nom du villageoi

        genre.textContent = 'Type:' + ' ' + listePokemon[i].type;
        // insert le genre
        Attaque.textContent = 'Attaque: ' + listePokemon[i].base.Attack;
        hp.textContent = 'HP: ' + listePokemon[i].base.HP;
        Defense.textContent = 'Defence: ' + listePokemon[i].base.Defense;
        vitesse.textContent = 'Vitesse: ' + listePokemon[i].base.Speed;
        //...............................................................

        // relié le tout a l'article
        myArticle.appendChild(name);
        myArticle.appendChild(hp);
        myArticle.appendChild(Attaque);
        myArticle.appendChild(Defense);
        myArticle.appendChild(vitesse);
        myArticle.appendChild(genre);

        // .............................................................

        // On relie le tout a la const section cree au tout debut
        section.appendChild(myArticle);
        // L'ordre d'ajout est important, c'est l'ordre dans lequel les éléments seront affichés dans le HTML.

    }

}

// ........................FILTRE...........................................................
function myFunction() {

    // Déclaration de nos variables
    var input, filter, ul, li, a, j, txtValue;

    // Récupération du input
    input = document.getElementById("myInput");

    // atribuons la variable filter a la récupération de notre valeur de notre input
    filter = input.value.toUpperCase();

    // On récupère la liste complète grace à ul
    ul = document.getElementById("myUL");

    //  On définit que li est un enfant de ul
    li = ul.getElementsByTagName("li");

    // Ici nous avons la boucle qui permet de trier nos résultat
    for (j = 0; j < li.length; j++) {

        // Ici on définit a comme étant l'enfant de li[i] Ici ils recherche des "h3"
        a = li[j].getElementsByTagName("h3")[0];

        // txtValue est egale au contenu de a
        txtValue = a.textContent || a.innerText;

        // Ici on check si notre txtValue est bien égale à filter
        if (txtValue.toUpperCase().indexOf(filter) > -1) {

            // On laisse notre class vide si ça match
            li[j].style.display = "";
        } else {
            // Sinon on les fait disparaitre
            li[j].style.display = "none";
        }
    }
}
// ........................FILTRE...........................................................