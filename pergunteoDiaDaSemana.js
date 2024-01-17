
 /*Pergunte ao usuário qual é o dia da semana. 
 Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". 
 Caso contrário, mostre "Boa semana!". */

 let diaDaSemana = prompt('qual é o dia da semana?');

 if (diaDaSemana === 'sabado' || diaDaSemana === 'domingo') {
    alert ('Bom fim de semana!');
 } else {
    alert ('Boa semana');
 }