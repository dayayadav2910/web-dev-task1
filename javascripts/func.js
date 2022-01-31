// var x =5; 
// function getname1()
// {
//     return x * x; 
// }
// var k = getname1();
// console.log(k);


function person(firstname,lastname,dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = dob; 
}

const person1 = person('daya', 'yadav', '22-01-2000');

console.log(person1);