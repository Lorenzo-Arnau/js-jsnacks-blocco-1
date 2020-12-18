var numeroUtente = prompt('inserisci un num di 4 cifre');
var x = 0;
if (numeroUtente.length === 4) {
  for (var i = 0; i < 4; i++) {
    x += parseInt(numeroUtente[i]);
  }
  console.log(x);
}else {
 alert('ho detto 4 cifre')
}
