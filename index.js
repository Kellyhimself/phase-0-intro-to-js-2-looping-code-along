// Code your solutions in this file

/* writeCards()
      ✓ returns an array of thank you messages for each name provided to the function */
    
let messages=[];

function writeCards(stringNames, eventName){
   for (let i = 0; i<stringNames.length; i++){
      messages.push(`Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`);
   }
   return messages;
}
writeCards();


/* countDown()    ✓ invokes console.log once for each number, counting down from the number provided to zero      ✓ logs each number when counting down, starting from the number provide */
function countDown(positiveInteger){
let i = 0;
while(i <= positiveInteger){
      console.log(positiveInteger--)
}
}
countDown()