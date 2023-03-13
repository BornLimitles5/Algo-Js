// Exercice 1:
// Quelle sera la valeur de C à la fin de cet algorithme ?
// DEBUT
// A = 12
// B = 2
// C = A * B
// La Variable C a la valeur de 24
// Car C est égal a 12 * 2
// FIN

// Exercice 2:
// Quel serait la valeur de C à la fin de cette algorithme ?
// DEBUT
// A = "123"
// B = "12"
// C = A + B
// La Variable C a la valeur de 12312
// Car C est la concaténation du string 123 et 12
// FIN

// Exercice3:
// Écrire un algorithme qui demande à l'utilisateur le prix Hors taxe
//d'un objet et qui donne sa valeur TTC (multiplier le prix par 1.196).

// function taxe(x){
//    x = prompt("Prix HT");
//  console.log( x * 1.196)
// }

// taxe()

// Exercice4:
// Ecrire un algorithme qui demande à l'utilisateur son prénom et son nom
// et qui affiche ensuite la phrase"Bonjour prénom votre nom est nom"

// function whatYourName(x , y){
//     x = prompt("Prénom");
//     y = prompt("Nom");
//     console.log( "Bonjour " + x + " votre nom  est " +  y )
// }

// whatYourName()

// Exercice5:
// Écrire un algorithme qui demande 2 nombres à un utilisateur.
//  Il indique ensuite à l'utilisateur si le produit de ces 2 nombre (A * B)est positif ou négatif

// function negativity(x,y){
//     x = prompt("Premier Nombre à multiplier");
//     y = prompt("Multipliant");
//     result = x * y;
//     if (result > 0){
//         document.write("Le résultat es positif" + "( "+ result + " )")
//     }else{
//         document.write("Le résultat es négatif"  + "( "+ result + " )")
//     }

// }

// negativity()

// Exercice6:
// Écrire un algorithme qui demande à l'utilisateur son age.
//  Il indique ensuite à l'utilisateur quel film il peut aller voir.
//  "Action Man" si moins de 13 ans
//  "Matrix" si il a entre 13 et 18 ans
//  "Evil Dead" si plus de 18 ans
//  Pour résoudre ce problème vous pouvez utilisez la structure suivante :
//  SI condition ALORS...SINON SI condition ALORS...SINON...FIN SI
//   Cette structure permet d'éviter trop d'imbrication

// function movie(x){
//     x = prompt("Quel es votre Age");
//     if(x <  13){
//         document.write("Vous pouvez voir Action Man");
//     }else if(x >= 13 && x <= 18){
//         document.write("Vous pouvez voir Matrix");
//     }else{
//         document.write("Vous pouvez voir Evil Dead");
//     }
// }

// movie()

// Exercice7:
//  un algorithme qui demande à l'utilisateur
//  un nombre comprisentre 0 et 10 jusqu'à ce que la réponse soit bonne.

// function justePrix(x){
//     random =  Math.floor(Math.random()*10) +1
//     x = parseInt(prompt("Choisiser un nombre entre 0 et 10"))
//     while(x !== random){
//         x = parseInt(prompt("Choisiser un nombre entre 0 et 10"))
//     }
//     document.write('Vous avez trouver le Bon Nombre')
// }

// justePrix()

// Exercice8:
// Écrire un algorithme qui demande un chiffre et qui affiche ensuitetous les chiffres jusqu'à 0.

// function toZero(x){
//     x = parseInt(prompt('Choisisez un Nombre'));
//     while(x !== 0){
//         x--
//         document.write(x);
//     }

// }
// toZero()

// Exercice9:
// Ecrire un algorithme qui fait deviner un chiffre à l'utilisateur
//  en lui indiquant si il est au dessus ou au dessous de la bonne valeur
//  DEBUTaDeviner = 14...FIN

// function justePrixHint(x){
//     random =  Math.floor(Math.random()*10) +1
//     x = parseInt(prompt("Choisiser un nombre entre 0 et 10"))
//     while(x !== random){
//         if(x > random){
//             alert("C'est Moins ")
//         }else if( x < random){
//             alert("C'est Plus ")
//         }
//         x = parseInt(prompt("Choisiser un nombre entre 0 et 10"))
//     }
//     document.write('Vous avez trouver le Bon Nombre')
// }

// justePrixHint()

// Exercice 10:
// Écrire un algorithme qui calcule la somme des valeurs
//  d'un tableau.chiffres = [10, 15, 20, 15, 14, 8]

// function total(){
//     var chiffres = [10, 15, 20, 15, 14, 8];
//     var somme = 0;
   
// for (var i = 0; i < chiffres.length; i++) {
//   somme += chiffres[i];
// }

// console.log("La somme est : " + somme);
// }

// total()

// Exercice11:
// Écrire un algorithme qui permette de rentrer les notes des élèves dela classe.
//  On demande dans un premier temps le nombre d'élève.

// function notes(){
//         let note = [];

//         let nbr = prompt("Nombre D'éleve?");

//         for(var i = 0; i < nbr ; i++){
//             //Demande la note pour chaque eleve
//             x = prompt("Note de l'éleve?");
//             //Mettre la note dan le tableu
//             note.push(x);
//         }
//         document.write(note);
//     }
    
//     notes()
// Exercice12:
// Reprendre l'algorithme précédent et 
// afficher le nombre d'élève au dessus de la moyenne

// function bonneNotes(){
//     let note = [];
//     let bnote= [];
//     let nbr = prompt("Nombre D'éleve?");
//     for(var i = 0; i < nbr ; i++){
//         //Demande la note pour chaque eleve
//         x = prompt("Note de l'éleve?");
//         //Mettre la note dan le tableu
//         if(x > 10 ){
//             bnote.push(x);
//         }else{
//             note.push(x)
//         }     
//     }
//     document.write("il y a eu " + bnote.length + " notes au dessus de la moyenne sur " + nbr + " éleves" )
// }
// bonneNotes()

// Exercice13:
// Écrire un algorithme qui trouve la plus grande valeur
//  dans ce tableaumultidimensionnel.nbres = [[0, 18], [1, 45], [45, 48], [-3, 2]]

// function plusGrand(tab){
// z = tab.flat()


// let str = 0


// for (let i = 0; i < z.length; i++) {
//   if(str < z[i]){
//     str = z[i]
//   }
// }
// return str
// }

// console.log(plusGrand([[0, 18], [1, 45], [45, 48], [-3, 2]]))


//  Exercice14:
//  Écrivez un algorithme qui demande un mot à l'utilisateur et lui affiche
//   ensuite le nombre de lettres qui compose le mot.
//    La fonction àutiliser s'appelle COMPTER

// function COMPTER(x){
//     x = prompt('Ecriver un mot');
//     y = x.length
//     document.write('Votre mots est composé de ' + y + ' lettres')
// }

// COMPTER()

//Exercice15:
// Écrivez un algorithme qui génère un chiffre aléatoire entre 0 et 5.
// Demandez ensuite à l'utilisateur de deviner ce chiffre avec desindices 
// ("plus grand", "plus petit").
//  La fonction a utiliser estALÉATOIRE(nbre)

// function justePrixHint(x){
//     random =  Math.floor(Math.random()*5) +1
//     x = parseInt(prompt("Choisiser un nombre entre 0 et 10"))
//     while(x !== random){
//         if(x > random){
//             alert("C'est Moins ")
//         }else if( x < random){
//             alert("C'est Plus ")
//         }
//         x = parseInt(prompt("Choisiser un nombre entre 0 et 10"))
//     }
//     document.write('Vous avez trouver le Bon Nombre')
// }

// justePrixHint()

// Exercice16:
// Ecrire une fonction qui prend 2 paramètre
//  (A et B) et qui retourne 0 si A est plus grand que B et 1 sinon.

// function compa(a,b){
//     a = prompt("Nombre 1");
//     b = prompt("Nombre 2");
//     if(a > b){
//         document.write(0)
//     }else{
//         document.write(1)
//     }
// }
// compa()


// Exercice17:
// Maintenant que vous gérez l'algorithme vous êtes prêt à affronter leboss final 
// : Le tri de tableau !Essayez de comprendre cesméthodes de tri.
// Vous pouvez commencer par le tri par sélection,
//  le but étant toujoursd'organiser un tableau par ordre croissant.*

// function triCroissant(tableau) {
//     let n = tableau.length;
  
//     // Boucle sur chaque élément du tableau
//     for (let i = 0; i < n; i++) {
  
//       // Boucle sur les éléments restants pour trouver le minimum
//       for (let j = i + 1; j < n; j++) {
  
//         // Si un élément plus petit est trouvé, échangez les positions
//         if (tableau[j] < tableau[i]) {
//           let temp = tableau[i];
//           tableau[i] = tableau[j];
//           tableau[j] = temp;
//         }
//       }
//     }
  
//     return tableau;
//   }
  
//   const tableau = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
//   const tableauTrie = triCroissant(tableau);
//   console.log(tableauTrie); 
  

// Exercice18:
// Écrire une fonction qui prend un tableau de nombres
//  en entrée etrenvoie le plus grand nombre de ce tableau  

// function plusGrand(tab){
//     z = tab.flat()
    
//     let str = 0
      
//     for (let i = 0; i < z.length; i++) {
//       if(str < z[i]){
//         str = z[i]
//       }
//     }
//     return str
//     }
    
//     console.log(plusGrand([0, 18 ,1, 45, 45, 48, -3, 2]))

// Exercice19:
// Écrire une fonction qui prend une chaîne de caractères en entrée et 
// renvoie le nombre de voyelles dans cette chaîne

//function compterVoyelles(chaine) {
    // On définit un tableau contenant toutes les voyelles en minuscules
    //const voyelles = ["a", "e", "i", "o", "u", "y"];
    // On initialise un compteur de voyelles à 0
    //let nbVoyelles = 0;
    // On parcourt chaque caractère de la chaîne en minuscules
    //for (let i = 0; i < chaine.length; i++) {
    //   const caractere = chaine[i].toLowerCase();
    //   // Si le caractère est une voyelle, on incrémente le compteur de voyelles
    //   if (voyelles.includes(caractere)) {
    //     nbVoyelles++;
    //   }
    // }
    // On renvoie le nombre de voyelles
    // return nbVoyelles;
//   }
  



// function reverse(s){
//     return console.log(s.split("").reverse().join("");
// }
// reverse("Coucou")

// Exercice20:Écrire une fonction qui prend un tableau de nombres en entrée 
// et 
// renvoie un nouveau tableau contenant uniquement les nombres pairs 
// dutableau d'entrée.
// function plusGrand(tab){
//     z = tab.flat()
    
//     let str = []
    
//     for (let i = 0; i < z.length; i++) {
//       if(z[i] % 2 === 0 ){
//         str.push(z[i]) 
//       }
//     }
//     return str
//     }
//     console.log(plusGrand([0, 18 ,1, 45, 45, 48, -3, 2]))




// Exercice21
// Écrire une fonction qui prend une chaîne
//  de caractères en entrée etrenvoie la même chaîne,
//   mais avec chaque mot inversé
// function reverso(a){

//     a = "Kenzo";
//     b = a.split("");
//     b
//     c = b.reverse()
//     c
//     d = c.join("");
//     d
//      return d
//     }
    
//     console.log(reverso(""));


