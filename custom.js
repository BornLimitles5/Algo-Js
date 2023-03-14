// Exercice1:
// Récrire la fonction length()
// qui aura lenom myLength().

// function myLength(x){
//     let total = 0;
//     for (let i  in x) {
//        total++
//     }
//     console.log(total)
// }
// myLength('Coucou')


// Exercice2:Récrirelafonctiontrim()quiauralenommyTrim().
// function myTrim(str) {
//     // Supprimer les espaces en début de chaîne
//     while (str.charAt(0) === ' ') {
//       str = str.slice(1);
//     }
  
//     // Supprimer les espaces en fin de chaîne
//     while (str.charAt(str.myLength - 1) === ' ') {
//       str = str.slice(0, -1);
//     }
  
//     return console.log(str);
//   }
// myTrim('   Pomme de terre ')  
// Exercice1Bis:
// Écrire un algorithme qui demande à l’utilisateur 
// un nombre compris entre 1 et 3 jusqu’à ce que la réponse convienne.
    // function justePrixEncore(x){
    //     x = parseInt(prompt("Choisisez nombre entre 1 et 3"))
    //     console.log(typeof(x))
    //     let random = Math.round(Math.random()*3);
    //     console.log(random)
    //     console.log(typeof(random))
    //     while(x !== random){
    //         x = parseInt(prompt("Choisisez nombre entre 1 et 3"))
    //     }
        
    // }
    // justePrixEncore()

   
// Exercice2Bis:
// Écrire un algorithme qui demande un nombre compris entre 10 et 20 
// , jusqu’à ce que la réponse convienne
// .Encasderéponsesupérieureà20,
// onferaapparaîtreunmessage:«Pluspetit!»,etinversement,«Plusgrand!»silenombreestinférieurà10.

// function justePrixHint(min,max){
//     var min=10;
//     var max=20;
//     random =  Math.floor(Math.random() * (max - min) + min)
//     x = parseInt(prompt("Choisiser un nombre entre 10 et 20"))
//     while(x !== random){
//         if(x > random){
//             alert("C'est Moins ")
//         }else if( x < random){
//             alert("C'est Plus ")
//         }
//         x = parseInt(prompt("Choisiser un nombre entre 10 et 20"))
//     }
//     document.write('Vous avez trouver le Bon Nombre')
// }

// justePrixHint()

// Exercice3:
// Écrire un algorithme qui demande un nombre de départ 
// , et qui en suite affiche les dix nombres suivants.
// Parexemple,sil'utilisateurentrelenombre17,leprogrammeafficherales nombres de 18 à 27.

// function plusDix(x){
//     let i = 0;
//     while( i !== 9){
//         i++
//         x++
//         console.log(x)
//     }
    
// }
// plusDix(18)


// Exercice4:
// Écrire un algorithme qui demande un nombre de départ 
// , et qui en suite affiche les dix nombres suivants.
// Parexemple,sil'utilisateurentrelenombre17,leprogrammeafficherales nombres de 18 à 27.

// function plusDix(x){
//     for (let i = 0; i < 9; i++) {
//         x++;
//         console.log(x)      
//     }

// }
// plusDix(18)

// Exercice5:
// Ecrire un algorithme qui demande un nombrede départ 
// ,et qui en suite écrit la table de multiplication de ce nombre 
// ,présentéecommesuit(casoùl'utilisateurentrelenombre7):Tablede7:

// function multiplication(x){
//     for (let i = 0; i < 11; i++) {
//         document.write(x + " X " + i + " = " + x*i + "<br>")
//     }
   
// }
// multiplication(2)

// Exercice6:
// Écrire un algorithme qui demande un nombre de départ ,
// et qui calcule la somme de sentiers jusqu’à ce nombre. 
// Par exemple , si l’on entre 5 , 
// le programme doit calculer:1+2+3+4+5=15
//  NB: on souhaite afficher uniquement le résultat ,
//  pas la décomposition du calcul.


// function add(x){
//     let somme = 0;
//     for (let i = 1; i <= x; i++) {
//         somme += i;
//         somme
//         i
//       }
//       console.log( somme);

// }
// add(5)

//Exercice 7
// function factorielle(n) {
//     if (n === 0) {
//       return 1;
//     } else {
//       var fact = 1;
//       for (var i = 1; i <= n; i++) {
//         fact *= i;
//       }
//       return console.log(fact);
//     }
//   }
// factorielle(8)  

// Exercice 8:

// function trouverPlusGrand() {
//     let c = 0
//     let plusGrandNombre = 0;
//     for (let i = 1; i <= 20; i++) {
//     let nombre = parseInt(prompt("Veuillez saisir le nombre n°" + i + " :"));
//       if (nombre > plusGrandNombre) {
//         plusGrandNombre = nombre;
//         c = i;
//       }
//     }
//     document.write(plusGrandNombre + i);
//   }
//   trouverPlusGrand();
  
//Exercice 9 :
// function trouverPlusGrandbis() {
//     let plusGrandNombre = 0;
//     while(true)
     
//         if (nombre === 0) break
//         let nombre = parseInt(prompt("Veuillez saisir le nombre n°" + i + " :"));
//           if (nombre > plusGrandNombre) {
//             plusGrandNombre = nombre;
//           }
//         }
//         document.write(plusGrandNombre);
      
      
//       trouverPlusGrandbis();



// Exercice10:
// A la naissance de Marie,
// son grand-père Nestor , lui ouvre un compte bancaire
// .Ensuite , à chaque anniversaire ,le grand-père de Marie verse sur son compte 100e 
// ,auxquels il ajoute le double de l’âge de Marie .Par exemple , lorsqu’elle a deux ans
// ,il lui verse104e . Écrire un algorithme qui permette de déterminer quelle somme 
// aura Marie lors de son n-ième anniversaire.

// function cashMoney(n) {
//     let age = n;
//     let somme = 0;
    
//     for (let i = 1; i <= n; i++) {
//       somme += 100 + 2*age;
//       age++;
//     }
    
//     return console.log(somme);
//   }
//   cashMoney();  