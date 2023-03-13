function bonneNotes(){
    let note = [];
    let bnote= [];
    let nbr = prompt("Nombre D'éleve?");
    for(var i = 0; i < nbr ; i++){
        //Demande la note pour chaque eleve
        x = prompt("Note de l'éleve?");
        //Mettre la note dan le tableu
        if(x > 10 ){
            bnote.push(x);
        }else{
            note.push(x)
        }     
    }
    document.write("il y a eu " + bnote.length + " notes au dessus de la moyenne sur " + nbr + " éleves" )
}
bonneNotes()