/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////Couleur de fond///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

var bgcolors = ["red","green","blue","purple"];

/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////Personnages///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

var personnages = [
   "Hulk",
   "Shrek",
   "Superman",
   "Wonder Woman",
   "Spiderman",
   "Un savant fou",
   "Un astronaute",
   "Un sportif de haut niveau",
   "Harry Potter",
   "Voldemort",
   "Un apiculteur",
   "Un plombier",
   "Un chevalier",
   "Un étudiant",
   "Un extra-terrestre",
   "Un enfant",
   "Un concierge",
   "Une personne âgée",
   "Un bébé",
   "Un nain",
   "Une fée"
]

/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////Actions///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

var actions = [
   "mange",
   "danse",
   "cuisine",
   "dessine",
   "se bat",
   "tonds la pelouse",
   "répare une horloge",
   "aiguise une épée",
   "désamorce une bombe",
   "cueille une pomme",
   "nettoie une table",
   "fait les courses",
   "joue au cartes",
   "fait du jardinage"
]

/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////Lieux/////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

var lieux = [
   "dans un supermarché" ,
   "dans un bar",
   "sur la lune",
   "dans un parc",
   "au commissariat de police",
   "à l'école",
   "sur la plage",
   "dans une voiture",
   "sur un bateau",
   "dans une prairie",
   "dans une caravane",
   "dans une grotte",
   "dans un sous-marin",
   "sur des montagnes russes",
   "sur une voie de chemin de fer",
   "dans une auberge de jeunesse",
   "dans la jungle",
   "dans un musée",
   "dans un restauration",
   "dans une piscine municipale"
]

/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////Evenement//////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

var evenements = [
   "pendant la canicule",
   "pendant une chute de météorites",
   "pendant une fouille archéologique",
   "pendant une fuite d'eau",
   "pendant une tempête",
   "pendant une coupure de courant"
]

/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////Sentiment/////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

var sentiments = [
   "joyeux",
   "anxieux",
   "timide",
   "dépressif",
   "en colère",
   "rêveur"
]

/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////Code//////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

// Au chargement de la page
window.onload = function()
 {
   //document.body.style.backgroundColor = bgcolors[Math.floor(Math.random() * bgcolors.length)]; //change couleur de fond alétoire.
    
 }

//
//Fonctions de création
//

function personnage()
{
   return personnages[Math.floor(Math.random() * personnages.length)];
}

function lieu()
{
   return lieux[Math.floor(Math.random() * lieux.length)];
}

function action()
{
   return actions[Math.floor(Math.random() * actions.length)];
}

function evenement()
{
   return evenements[Math.floor(Math.random() * evenements.length)];
}

function sentiment()
{
   return sentiments[Math.floor(Math.random() * sentiments.length)];
}

function changeResult(text)
{
   document.getElementById("result").innerHTML = text;

   /*
   document.getElementById("result").innerHTML = "";
   var words = text.split(" ");
   for(var i = 0 ; i < words.length; i++)
   {
      
      setTimeout(() => { document.getElementById("result").innerHTML += words[0];console.log(words[0]) }, i*100);
   }
   */

}


//Evènement on click
document.addEventListener('click', function (event) {

   if(event.target.matches("#p")){
      changeResult(personnage());
   }

   if(event.target.matches("#l")){
      changeResult(lieu());
   }

   if(event.target.matches("#e")){
      changeResult(evenement());
   }

   if(event.target.matches("#s")){
      changeResult(sentiment());
   }

   if(event.target.matches("#pl")){
      changeResult(personnage()+" "+lieu()+".");
   }

   if(event.target.matches("#ple")){
      changeResult(personnage()+" "+lieu()+" "+evenement()+".");
   }

   if(event.target.matches("#pa")){
      changeResult(personnage()+" qui "+action()+".");
   }

   if(event.target.matches("#pal")){
      changeResult(personnage()+" "+action()+" "+lieu()+".");
   }

   if(event.target.matches("#pale")){
      changeResult(personnage()+" "+action()+" "+lieu()+" "+evenement()+".");
   }

   if(event.target.matches("#psale")){
      changeResult(personnage()+" "+sentiment()+" "+action()+" "+lieu()+" "+evenement()+".");
   }

}, false);

