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