// alert("Nothing is working")
// console.log("I still want to go home")

// for (let i = 2; i <= 1024; i = i * 2  ) {
//     console.log(i);
// }
// let i = 1;
// while (i < 1024){
//     i = i * 2;
//     console.log(i);
// }
let input = "";

do{
    input = prompt("What is your name?");
}
while(Number(input) || input == 0);

alert("Welcome " + input);
alert(`Welcome ${input}`);
