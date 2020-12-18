var arrayInvitati = ['Mario','Luigi','Sofia','Paolo'];
var nomeUtente= prompt('Ciao come ti chiami?');
var invitato = false;
for (var i = 0; i < arrayInvitati.length; i++) {
  if (nomeUtente === arrayInvitati[i]) {
    invitato=true;
  }
}
if (invitato === true) {
    console.log('Benvenuto');
}else {
  console.log('non puoi entrare');
}
