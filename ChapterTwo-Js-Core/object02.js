const demo = new Object();
console.log(demo); //{}
demo.id = 123;
demo.name = "prabhanjan";
demo.isLoggedin = false;
console.log(demo); //{ id: 123, name: 'prabhanjan', isLoggedin: false }

const user = {
  email: "prabhanjan@gmail.com",
  fullname: {
    userfullname: {
      firstname: "prabhanjan",
      lasttname: "puranik",
    },
  },
};
console.log(user);
/*
{
  email: 'prabhanjan@gmail.com',
  fullname: { userfullname: { firstname: 'prabhanjan', lasttname: 'puranik' } }
}
*/

console.log(user.fullname);
/*
{ userfullname: { firstname: 'prabhanjan', lasttname: 'puranik' } }   
*/
console.log(user.fullname.userfullname);
// { firstname: 'prabhanjan', lasttname: 'puranik' }
console.log(user.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

const obj3 = { obj1, obj2 };
console.log(obj3);

const res = Object.assign(obj1, obj2);
console.log(res);

const res1 = Object.assign({}, obj1, obj2);
console.log(res1);
//  { target object}
// obj1,obj2  source

const res2 = { ...obj1, ...obj2 };
console.log(res2);

const info = [
  {
    id: 1,
    email: "p@gmail.com",
  },
  {
    id: 1,
    email: "p@gmail.com",
  },
  {
    id: 1,
    email: "p@gmail.com",
  },
  {
    id: 1,
    email: "p@gmail.com",
  },
  {
    id: 1,
    email: "p@gmail.com",
  },
  {
    id: 1,
    email: "p@gmail.com",
  },
];

info[1].email // way to access the array of object 
/**
 * access the array index 
 * then put . operator
 * 
 */
console.log(demo) //{ id: 123, name: 'prabhanjan', isLoggedin: false }
console.log(Object.keys(demo)) //[ 'id', 'name', 'isLoggedin' ]
console.log(typeof Object.keys(demo)) //object
console.log( Object.values(demo)) //[ 123, 'prabhanjan', false ]
console.log( Object.entries(demo)) //[ [ 'id', 123 ], [ 'name', 'prabhanjan' ], [ 'isLoggedin', false ] ]
console.log(demo.hasOwnProperty('isLoggedin'));