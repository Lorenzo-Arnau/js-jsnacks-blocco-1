var arryNumeri = [];
var numero;
for (var i = 0; i < 5; i++) {
  numero = parseInt(prompt('inserisci un numero'))
  arryNumeri.push(numero);
}
var i = 0;
var count = 0;
while (i < arryNumeri.length) {
 count += arryNumeri[i];
 i++
}
console.log(count);
