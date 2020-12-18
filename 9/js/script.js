var numeroUtente;
var listaNumeri = [];
for (var i = 0; i < 10; i++) {
  numeroUtente = parseInt(prompt('inserisci un num'));
  listaNumeri.push(numeroUtente);
}
i=0;
somma=0;
while (i < 10) {
somma += listaNumeri[i];
i++
}
console.log(somma);
var media = somma / 10;
console.log(media);
