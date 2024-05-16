// +
// Addition
// -
// subraction
// *
// multiplication
// **
// Exponentiation
// /
// divison
// %
// Modulus(remainder)
// ++
// Increment
// --Decrement
// alert ("hello world");

// // var  x = ("10");
// // var y= ("5");
// // console.log(x+y);
// console.log('helloworld');
// var name = 'anusraza';
// console.log(name)

// alert ('hello world');
// var num1 = '10';
// var num2= '10';
// var num3 = '10';
// console.log(typeof(num1))
// console.log(num1 + num2')



// var head=document.querySelector('.head');
// var paragraph=document.querySelector("#para");
// console.log(paragraph.innerHTML);

// function changeText(){
//     if(paragraph.innerHTML ==='changed through js '&& head.innerHTML === 'changed through js'){
// paragraph.innerHTML ='pakistan zindabad';
// head.innerHTML = 'hi'
//     }else{
//         paragraph.innerHTML ='changed through js'
//         head.innerHTML ='changed through js'
//     }
// // }

 


// var chemistryMarks =document.querySelector('#chemistry-marks');
// var mathsMarks =document.querySelector('#maths-marks');
// var islamitMarks =document.querySelector('#islamit-marks');
// var physicsMarks =document.querySelector('#physics-marks');
// var studentTotal =document.querySelector('#total-marks');
// var studentPercentage=document.querySelector('#studentPercentage');
// var grade =document.querySelector('#grade');

// function submit(){
//     console.log(chemistryMarks.value);
//     console.log(mathsMarks.value);
//     console.log(islamitMarks.value);
//     console.log(physicsMarks.value);

//     var totalMarks= 400;
//     var obtainedMarks = +chemistryMarks.value + +mathsMarks.value + +islamitMarks.value + +physicsMarks.value;

//     console.log('obtained marks ===>', obtainedMarks);
//     studentTotal.innerHTML =obtainedMarks;

//     var percentage =obtainedMarks/totalMarks*100;
//     Percentage.innerHTML=studentPercentage;

//     if (studentPercentage >80 ){
//         grade.innerHTML = 'A+'

//     }else if(studentPercentage>70){
//         grade.innerHTML ='A'
//     }else if(studentPercentage >60){
//         grade.innerHTML ='B'
//     }else{
//         grade.innerHTML ='fails'
//     }
// }

// var urduMarks=document.querySelector('#urdu-marks');l-marks');
// var studentPercentage=document.querySelector('#studentPercentage');
// var grade=document.querySelector('#grade');

// function calpercentage(){
//     console.log(urduMarks.value);
//     console.log(accnMarks.value);
//     console.log(costMarks.value);
//     var totalMarks=300;
//     var obtainedMarks= +urduMarks.value + +accnMarks.value + +costMarks.value;
//     console.log('obtained marks ===>', obtainedMarks);
//     studentTotal.innerHTML=obtainedMarks;
// var accnMarks=document.querySelector('#accn-marks');
// var costMarks=document.querySelector('#cost-marks');
// var studentTotal=document.querySelector('#tota

//     var Percentage =obtainedMarks/totalMarks*100;
//     Percentage.innerHTML=studentPercentage;

//     if(Percentage >80){
//         grade.innerHTML='A+'
//     }else if(Percentage >70){
//         grade.innerHTML='A'
    
//     }else if(Percentage >50)[
//         grade.innerHTML='B'
//     ]
//     else{
//         grade.innerHTML='fails'
//     }
// }

// const sales=['comb','pin' ,'clips', 'fancyitems',  'elastic','azharband','hanger'];
// const input=document.querySelector('#input');

// function submit(){
//     console.log(input.value);
//     if(sales.includes(input.value)){
//         console.log('items is avalible');

//     }else{
//         console.log('not avalible')

//     }
// }

// const userInput =+prompt('enter table number');
// const times =+prompt('times')
//     for (let i = 1; i <= times ; i++){
//         console.log(`${userInput}* ${i}=${userInput}`);
// //     }
//     for(let i =1;  i  >0; i++){
//          console.log('i')
//          }

// document.write('qulification');
// const education=['hsc','ssc','b.com','m.phil','phd']
// const ul =document.querySelector('o1')
// console.log(education);
// for (let i= 0; i<education.length; i++){
//     ul.innerHTML +=( `<li>${education[i]}</li>`)
// }





// anArray = new int[1o];
// int[] anArray =
//     100.200
// }
const boolean=document.querySelector('#input')
function button(){
    console.log(input)
    if(10<9){
        console.log('false')
}else
console.log('true')
}


const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}


// var head = document.querySelector('.head');
// var paragraph = document.querySelector("#para");
// console.log(paragraph.innerHTML)

// function changeText(){

//     if(paragraph.innerHTML === 'changed through js' && head.innerHTML === 'changed through js'){
//         paragraph.innerHTML = 'lorem ipsum';
//         head.innerHTML = 'hello world'
//     }else{
        // paragraph.innerHTML = 'changed through js'
        // head.innerHTML = 'changed through js'
    
// }

// console.log(10=='10');
// console.log(10===11);



//   const qulification=['bbc','b.com','matric']
// console.log(includes.value )
// console.log(qulification)




// const stringArray=['2',4,5]
// const numberArray=[]
// length=stringArray.length

// for (var i = 0; i < length; i++)
// numberArray.push(parseInt(stringArray[i]));
// console.log(numberArray)

// const stringArray=['4',7,8];
// const numberArray=[]
// length=stringArray.length
// for ( var i = 0; i < length; i++){
//   let value;
//   if(typeof stringArray[i]=== 'string'){
//     value=parseInt(stringArray[i]  )
//   }else{
//     value=stringArray[i]
//   }
//   numberArray.push(value);
// }
// console.log(numberArray)




const education=['SSC','HSC','BSC','BS','BCOM','MS','M.Phil','PhD']
const input=document.querySelector("#input")
const arr=[]
function button() {
  // console.log('education.values');
  if (education !=null && education.length > 0) {
    for (let i = 0;  i < education.length; i++) {
      console.log(education[i]);
      input.innerHTML+=`
      
      <h1>${education[i]}</h1>`
      
    }
      
    }else{
      console.log('no education');

      }
  
}

