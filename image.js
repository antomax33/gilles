
const acquarelleLs = ["mahamudra.jpg", "salamba-sarvangasana.jpg", "utkatasana.jpg", "utthita-parsvakonasana.jpg", "virabhadrasana.jpg", "femme-en-tailleur.jpg"];
const yogaLs = ["mahamudra.jpg", "salamba-sarvangasana.jpg", "utkatasana.jpg", "utthita-parsvakonasana.jpg", "virabhadrasana.jpg", "femme-en-tailleur.jpg"];
const noirBlancLs = ["aurore-lucas-nb-2.webp"];
const couleurLs = ["cat-2-1.jpg"];




var compteur=0;

function changerImage(positif, nomTableau){

    var list;

    switch(nomTableau){
        case 'acquarelle':
            list=acquarelleLs;
            break;

        case 'yoga':
            list=yogaLs;
            break;
        
        
        case 'noirBlanc':
            list=noirBlancLs;
            break;
                
        case 'couleur':
            list=couleurLs;
            break;

        default:
            list=acquarelleLs;
            break;

    }
    
    var tailleTableau=list.length;
    
    if(positif){
        compteur++;
        if(compteur>=tailleTableau){
            compteur=0;
        }
    }else{
        compteur--;
        if(compteur<0){
            compteur=tailleTableau-1;
        }
    }

    const tableau = document.getElementById(nomTableau);
    tableau.src="image/"+list[compteur]; 
}