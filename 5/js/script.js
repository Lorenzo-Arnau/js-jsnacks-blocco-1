var arrayNumeri = [];
var numeroUtente;
for (var i = 0; i <= 6; i++) {
  numeroUtente = parseInt(prompt('Dimmi un numero'));
  if (numeroUtente % 2 !== 0) {
    arrayNumeri.push(numeroUtente);
  }
}
console.log(arrayNumeri);
