// Write your code here!
document.querySelector('main#main').remove();
const newHeader = document.createElement('h1');
newHeader.setAttribute('id','victory');
newHeader.innerHTML = "YOUR-NAME is the champion";
console.log(newHeader);
document.body.append(newHeader);
