// Code your solutions in this file

for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}
wrapGifts(gifts);


const names =[];
function writeCards(gifts, event) {
    for (let i = 0; i < gifts.length; i++) {
    
      console.log(`Thank you, ${gifts[i]}, for the wonderful ${event} gift!`);
      names.push(`Thank you, ${gifts[i]}, for the wonderful ${event} gift!`);
    }
    return names;
  }


  function countDown(number){
    let i = 0;  
    while (i <= number){
        console.log(i);
        i++
    }
  }