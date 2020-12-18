var n = parseInt(prompt('dammi un numero'));
var numeroUtente;
if (n > 10) {
  alert('nun se po');
}else{
  for (var i = 1; i <= n; i++) {
    numeroUtente = Math.pow(i , 3);
    console.log(numeroUtente);
  }
}
