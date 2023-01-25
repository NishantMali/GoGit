var itemlist = document.querySelector('#items');
// // parentelement
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = '#f4f4f4';


// // lastelementchild
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = 'HELLO 4';

// lastchild
// console.log(itemlist.lastChild);

// createchild



// firstelementchild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = 'HELLO 1';

// firstchild
// console.log(itemlist.firstChild);

// nextsibling
// console.log(itemlist.nextSibling);

// nextelementsibling
// console.log(itemlist.nextElementSibling);

// previoussibling
// console.log(itemlist.previousSibling);

// // previouselementsibling
// console.log(itemlist.previousElementSibling);

// createelement

var newDiv = document.createElement('div');

// addclass
newDiv.className = 'Hello';

// add id
newDiv.id = 'hello 1';

// add attribute , set attribute
newDiv.setAttribute('title','Hello Div');


// create text node
var newDivText = document.createTextNode('Hello World');


// append child , add text to div
newDiv.appendChild(newDivText);

// adding into DOM
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');



console.log(newDiv);

container.insertBefore(newDiv,h1);


parentNode = document.getElementById('items');
// console.log(parentNode.innerHTML);

put = ' <li class="list-group-item">HELLO WORLD</li>' + parentNode.innerHTML ; 
console.log(put) ;
