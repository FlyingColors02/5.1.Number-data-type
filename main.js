/*     DATA TYPE 
    1. Value Type    --> NUMBER, STRING, BOOLEAN
    2.Reference Type --> ARRAY, CLASS              */

//Number Data Type:

let numValue1; //declaration
 numValue1=2;  //defining int value
 console.log(numValue1); //2
 console.log(typeof(numValue1)); //number

 numValue1=22.5; //float
 console.log(numValue1); //22.5
 console.log(typeof(numValue1)); //number

 numValue1=120.55; //double
 console.log(numValue1); //120.55
 console.log(typeof(numValue1)); //number

 numValue1=22789.50908; //long
 console.log(numValue1); //22789.50908
 console.log(typeof(numValue1)); //number


 //number data type consider int,float,double, and long as 'number'

/* IMPORTANT */

 numValue1="shraddha"; //string
 console.log(numValue1); //shraddha
 console.log(typeof(numValue1)); //string

 /*we can use same variable to assign different data type values because 
 JS understands data type at run time. And unlike any other language, 
 JS variable is not bounded to data type declaring format.
 
 Eg; int numValue=10;   <-- here variable is bounded to int data type no 
 other data type can be assigned to numValue */

 //Javascript is a dynamic language...