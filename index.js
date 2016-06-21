var speed = 0;

function accelerate(amount) {
   if (typeof amount === "undefined" || speed === 0){
   amount = 1;
 } 
   speed += amount;

}

accelerate();

console.assert(speed === 1);

accelerate(5);

console.assert(speed === 6);

accelerate();

console.assert(speed === 7);