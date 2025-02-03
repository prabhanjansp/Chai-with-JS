console.log(window);
console.log(window.document);
console.log(document);
console.dir(document);

console.log(document.links[2]);
console.log(document.getElementById("firstHeading"));

console.log(
  (document.getElementById("firstHeading").innerHTML = "<h1> lol</h1>")
);

//need to work with the links

console.log(document.getElementById('title'))
document.getElementById('title')
//<h1 id=​"title" class=​"heading">​Learning the dom​</h1>​
document.getElementById('title').id
//'title'
document.getElementById('title').class
//undefined
document.getElementById('title').className
//heading
document.getElementById('title').getAttribute('id')
// 'title'
document.getElementById('title').getAttribute('class')
// 'heading'
document.getElementById('title').setAttribute('class','test heading')
// undefined and will override the previous heading
const title= document.getElementById('title');
title.style.backgroundColor='green';
const title1= document.getElementById('title');
title1.style.backgroundColor='green';
'green'
title.style.padding="15px";
// VM872:1 Uncaught ReferenceError: title is not defined
    // at <anonymous>:1:1
// (anonymous) @ VM872:1
title1.style.padding="15px";
// '15px'
title1.style.borderRadius="15px";
// '15px'
title.textContent // will return all the text visible in the web page
//will display the text content  value
// title.innerHTML   will return exactly the html value
title.innerText // will return only what is visible in the web page


document.querySelector('h1')
//  will return all the tags which are present in the page with tag name

document.querySelector('ul')
//<ul>​…​</ul>​
const myUl=document.querySelector('ul')
undefined
myUl.querySelector("li")
//<li>​::marker​"one"</li>​
const turnGree=myUl.querySelector("li")
undefined
tu
// VM1920:1 Uncaught ReferenceError: tu is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM1920:1
// turnGree.style.backgroundColor="green";
// 'green'
// turnGree.innerText="six";
// 'six'

