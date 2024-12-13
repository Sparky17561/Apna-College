console.log("Hello World")

console.log("Hello World")


let a = 10;
let b = 5;
console.log(`sum is ${a+b}`);


if(a>1){
    console.log("You are eligible");
}
else{
    console.log("you are not");
}




let size = ""

if(size == "XL"){
    console.log("Rs250")

}
else if (size == "L") {
    console.log("Rs200")
} 

else if (size == "M") {
    console.log("Rs150")
} 

else if (size == "S") {
    console.log("Rs100")
} 

else{
    console.log("invalid")
}



let num =25;

if(num%10==0){
    console.log("good")
}
else{
    console.log("bad")
}


// let name = prompt("Enter name");
// let age = prompt("enter age");

// console.log(`${name} is ${age} years old`)

let ch = 1;

switch(ch){
    case 1: console.log("Jan,Feb,Mar");
            break;

    case 2: console.log("Apr,May,Jun");
    break;
    case 3: console.log("Jul,Aug,Sep");
    break;
    case 4: console.log("Oct,Nov,Dec");
}



let msg = " hi "
console.log(msg)

console.log(msg.trim())

str="ADFE";
let idx=3;
if(str[idx]==str[idx].toLowerCase())
    {
        console.log("characterislowercase");

    }
    else
    {
        console.log("characterisnotlowercase");
    }


// odd
for(let i=1;i<=15;i++){
    if(i%2 != 0)
        console.log(i)

}
// even
for(let j=20;j>=2;j--)
{
    if(j%2 == 0){
        console.log(j)
    }
        
}

let post = {
    username : "@sai13",
    context : "this is my first post",
    likes : 150,
    reposts : 5,
    tags : ["#firsttime","#elonmusk34"]
};





const square = (n) => (n*n);
console.log(square)

let arr = [10,20,40,5];


let ans = arr.every((el) =>(el%10==0));

console.log(ans)


let mina = arr.reduce((el,min)=>{
    if (el < min)
        return el;
    else 
        return min;
});


console.log(mina)



const data = {
    email:'sai@gmail.com',
    password:'1234',
};

const dataCopy = {...data,id:20,country:'India'};

console.log(dataCopy)


let ar1 = [2,3,5,4];

let an1 = ar1.map((el) => {
    return el*el;
})


console.log(an1)

let sum = ar1.reduce((res,ele) => (res+ele));

let avg = sum/ ar1.length

console.log(avg)



let ar2 = ar1.map((el) => {return el+5;})


let ar3 = ['hello','My','Sai'].map((el) => {return el.toUpperCase()})
console.log(ar2)
console.log(ar3)



function doubleAndReturnArgs(ar1,...args){
    let ar2 = args.map((el) => {
        return el*el;
    })

    let ar3 = [...ar1,...ar2]
    console.log(ar3)
}


let student = {
    name : "sai",
    age : 23,
    marks : 95,
    city : "Mumbai"
};


function mergeObjects(arr,arr2){
    let object = {...arr,...arr2};
    console.log(object)
}




let h1 = document.querySelector('h1')


function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve('color changed');
        },delay);
    });
}

async function demo(){
    await changeColor('green',1000);
    await changeColor('blue',1000);
    await changeColor('yellow',1000);
    changeColor('indigo',1000);
}


// CONVERT THE API RESULT JSON TO JS OBJECT
let jsonRes = '{"fact":"Approx 1/3","length":78}';

console.log(jsonRes)

console.log(jsonRes.fact) // this fails 

let validRes = JSON.parse(jsonRes)

console.log(validRes)
console.log(validRes.fact) // this works



// CONVERT UR JS OBJECT TO JSON
let student1 = {
    name: 'sai',
    marks:90
};


let a12 = JSON.stringify(student1)
console.log(a12)



let url = 'https://catfact.ninja/fact';
fetch(url)
    .then((response)=>{
        console.log(response);
        return response.json()
        })
        .then((data)=>{
            console.log(data.fact)
            return fetch(url);
        })
        .then((res)=>{
            return res.json();
        })
        .then((data2)=>{
            console.log(data2.fact)
        })
        .catch((err)=>{
            console.log(err);
        });


// async function getFacts(){
//     try{
//         let res = await fetch(url);
//         let data = await res.json()
//         console.log(data.fact)

//         let res2 = await fetch(url);
//         let data2 = await res.json()
//         console.log(data2.fact)
//     }catch(e){
//         console.log(e)
//     }
    
// }


async function getFacts() {
    try{
        let res = await axios.get(url);
        console.log(res.data.fact)
    }catch(e){
        console.log(e)
    }
    
}


