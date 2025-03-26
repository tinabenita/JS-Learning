class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ // prevents access to instantiated objects
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId()) // error as createId is static so can't be accessed by object

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId()); // error as createId is static so can't be accessed by object