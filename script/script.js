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
// let input = "";

// do{
//     input = prompt("What is your name?");
// }
// while(Number(input) || input == 0);

// alert("Welcome " + input);
// alert(`Welcome ${input}`);

// let friuts = ["apple","banana"];
// friuts.push("orange");
// friuts.pop();
// friuts.unshift("mangos");
// friuts.shift();
// console.log(friuts);

// const person ={
//     name: ["bob","pob"],
//     age: 20,
//     gender: "male",
//     interests: ["music","skiing"],
// }
// for (let i in person)
// {
//     console.log(`My ${i} is ${person[i]}`)
// }
// console.log(`My name is ${person.name[0]} ${person.name[1]} I am interested in ${person.interests[0]} and ${person.interests[1]}`)

let student1 = {
    ID: "A00022",
    GPA: 3.0,
    program: "CIT"
    };
    let student2 = {
    ID: "A01000",
    GPA: 3.1,
    program: "CST"
    };
    let student3 = {
    ID: "A00114",
    GPA: 3.2,
    program: "CIT"
    };
    let students = [student1, student2, student3];

    for(let i of students)
    {
        if (i.GPA > 3.0 && i.program == "CIT")
        {
        console.log(i);
        }

    }











