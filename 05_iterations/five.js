const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val); // js, ruby, java, python, cpp
// } )

// coding.forEach( (item) => {
//     console.log(item); // js, ruby, java, python, cpp
// } )

// function printMe(item){
//     console.log(item); 
// }

// coding.forEach(printMe) // js, ruby, java, python, cpp

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr); // js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName); // javascript, java, python
} )