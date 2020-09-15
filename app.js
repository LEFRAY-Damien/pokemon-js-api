
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
        console.log('1')
        console.log(pokedexJson);
        console.log('2')
        console.log(pokedexJson[0]);

        showPokemon(pokedexJson);
        // cree l'obj showPokemon qui est = a la variable pokedexJson
        console.log('3')
        console.log(showPokemon);
    }



function showPokemon(jsonObj) {
    // creation de la fonction avec parametre jsonObj

    var listePokemon = jsonObj;
    // creation vairalbe en prenant le tableauj pesent dans le json pour pouvoir cree la boucle

    for (var i = 0; i < listePokemon.length; i++) {
        // creation de la boucle 'length' sert a parcourir tt le liste

        // creation des element .........................................

        var myArticle = document.createElement('article');
        // cree un nouvelle article 'OBLIGATOIRE'

        var name = document.createElement('h2');
        // cree un h2 pour metre le nom du villageois

        var genre = document.createElement('ul');
        // Cree un paragraphe pour l'espece

        var vitesse = document.createElement('p');
        // Cree un paragraphe pour l'anniversaire

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

        genre.textContent = 'Type';
        // insert le genre

        Attaque.textContent = 'Attaque: '+ listePokemon[i].base.Attack;

        Defense.textContent = 'Defence: ' +listePokemon[i].base.Defense;

        vitesse.textContent = 'Vitesse: '+ listePokemon[i].base.Speed;
        //...............................................................
        // boucle pour le Type
        var Ellement = listePokemon[i].type;
        for (var j = 0; j<Ellement.length; j++){
            var listItem = document.createElement('li');
            listItem.textContent = Ellement[j];
            genre.appendChild(listItem);
        }

        // relié le tout a l'article

        myArticle.appendChild(name);

        myArticle.appendChild(Attaque);

        myArticle.appendChild(vitesse);

        myArticle.appendChild(Defense);

        myArticle.appendChild(genre);

        // .............................................................

        // On relie le tout a la const section cree au tout debut
        section.appendChild(myArticle);
        // L'ordre d'ajout est important, c'est l'ordre dans lequel les éléments seront affichés dans le HTML.

    }

}