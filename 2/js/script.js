var primaParola = prompt('inserisci la prima parola');
var secondaParola = prompt('inserisci la seconda parola');

var lunghezzaPp = primaParola.length;
var lunghezzaSp = secondaParola.length;

if (lunghezzaPp > lunghezzaSp) {
  console.log(secondaParola + ' ' + primaParola)
}else if (lunghezzaSp > lunghezzaPp) {
  console.log(primaParola + ' ' + secondaParola)
}else {
  console.log('sono uguali');
}
