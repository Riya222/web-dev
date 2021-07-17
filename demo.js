let age;
  	age=35;
  	console.log(age);


const pi=3.14;
   console.log(pi);
const mybirthday= '3.08.1996' ;
   console.log(mybirthday);  


 let name='ABC';
 let salary= 20000;
 let option= true;
 let height;
 console.log(name);
 console.log(salary);
 console.log(option);
 console.log(height);




 let shoping=[];
     shoping=['brush','paste','paint','canvas','bread'];
     console.log(shoping);
     console.log(shoping[2]);
     console.log(shoping[1,2,3,4]);



let numbers=[];
    number=[1,2,3,4,5];
    console.log(number[0]+number[2]);
    numbers=[6,2,8,5,9,1];
    console.log(numbers.sort());
    numbers.push(7);
    console.log(numbers);
    console.log(numbers.sort());


 let mix=[];
     mix=['one',1,'five',7];
     console.log(mix);




 let emily={
 	age:16,
 	school:'ABC',
 	class: '10th std',
 	subjects:['phy','chem','maths','computer'],
 } ;
  console.log(emily.subjects[2]);




function mult(a,b)
{
	return a/b;
}  
let x=mult(6,3);
console.log(x);




let games='football';
switch(games){
	case "throwball":
	console.log("throwball");
	break;
	case "footbal":
	console.log("I love football");
	break;
	default:
	console.log("another game");
	break;
}