/*
	mazo de cartas por diez cartas por palo(4 palos)
cada figura,vale su valor numerico 8,9,10(valen 20)
sacaremos cartas del mazo
19,20,21 GANA
 */

/*Creo los array necesarios*/

var cardStick = new Array("e","c","d","t"); //array de palos
var values = new Array(1,2,3,4,5,6,7,8,9,10); //array de valores
var usedStick = new Array(); //cartas usadas
var points = 0;



function madeDeckOfCard(){
	var deckOfCards = new Array();
	for (var i = 0; i < 4; i++) { //4 palos
		for (var j = 1; j <= 10; j++) { //10 cartas por palo
			deckOfCards.push(j);
		}
	}
	return deckOfCards;
}


function random(battery){
	var selected = battery.length;
	var num = Math.floor(Math.random()*selected);
	var card = battery[num];

	return card;
}

var deckOfCards = madeDeckOfCard(); //creamos el mazo de 40 cartas

var toStand = false; //plantarse
var cardS = ""; 

	

while(toStand == false){
	
	var option = window.prompt("CARTAS EN EL MAZO: " +deckOfCards.length+"\nPUNTOS: " +points+ "\n¿DESEA CARTA?\n s(pedir carta)\n n(plantarse)");
	
	if(option == "s" || option == "S"){

			cardV = random(deckOfCards); //valor de la carta
			points = points + cardV; //sumo la puntuacion de esta

			//elimino la carta del mazo
			var index = deckOfCards.indexOf(cardV);
			if(index > -1){
				deckOfCards.splice(index, 1);
			}
			toStand = false; 		//mantengo false en plantarse para volver al while
			
			if(deckOfCards.length == 0){
				toStand = true; //si la baraja se queda a 0,el juego acabaria
			}
			
		console.log(points);
		console.log(usedStick);
		console.log(cardV);
			
	}else{

		//el usuario,en este punto,se ha plantado


		if(points == 21){
			window.alert("HICISTE " +points+"!!enhorabuena!");
			toStand = true;
		}else if(points == 20 || points == 19){
			window.alert("HICISTE " +points+ " te acercaste a 21!!enhorabuena!");
			toStand = true;
		}else if(points >21){
			window.alert("HICISTE " +points+ " te pasaste de 21!!lo sentimos,GANA LA BANCA");
			toStand =  true;
		}
	}
}








