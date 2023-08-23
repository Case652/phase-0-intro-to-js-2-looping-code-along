// Code your solutions in this file
names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names) {
  let messages = [];
  names.forEach((name) => {
    messages.push("Thank you, " + name + ", for the wonderful surprise gift!");
  });
  return messages;
}

console.log(writeCards(names));
function countDown () {
let count = 10;
while (count > -1) {
  console.log(count--);
}
}