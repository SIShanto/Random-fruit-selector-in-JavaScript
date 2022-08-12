//  random select a fruit from array

fruits=["🍑","🍍","🍌","🍐","🍓","🫐","🍎"];

const randomFruit=(fruit)=>{
  const random= Math.floor(Math.random()*fruits.length);
     
  return fruits[random];
}

console.log(randomFruit(fruits))
