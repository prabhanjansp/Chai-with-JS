const name="prabhanjan";
const repoCount=100;
console.log(repoCount+name+"hi")

// stringinterpolution

console.log(` hello my name is ${name} and the repository count is ${repoCount}`)
const gameaName=new String("prabhanjan-puranik")
console.log(gameaName)
console.log(typeof(gameaName))
console.log(gameaName[7]);

console.log(gameaName.__proto__);
console.log(gameaName.length);
console.log(gameaName.toUpperCase()); //PRABHANJAN (Please do remember the concept of the stack memory primitive data type)

console.log(gameaName.charAt(5)) //a
console.log(gameaName.indexOf('j')) //7 

const subName=gameaName.substring(0,12);
console.log(subName) //prabhanjan-p

const anotherString=gameaName.slice(-2,5)
console.log(anotherString) //will produce the negative value
const newStr=gameaName.substring(-9,5)
console.log(newStr) //will produce the negative value

const stringOne="    prabhanjan    ";
console.log(stringOne)
console.log(stringOne.trim());

const url="htps://prabhanjansp%20.web.app.com";
console.log(url.replace('%20','-'));

console.log(url.includes('sundaraa'))
console.log(gameaName.split(''));

