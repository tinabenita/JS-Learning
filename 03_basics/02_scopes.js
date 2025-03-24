//var c = 300

//SCOPE
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

//NESTED SCOPE
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website); // will throw error as website is not defined in this scope

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // will throw error as website is not defined in this scope
}
 
// console.log(username); 


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //will not throw error as function is hoisted, function

function addone(num){
    return num + 1
}



addTwo(5) // will throw error as function is not hoisted, function expression
const addTwo = function(num){
    return num + 2
}
