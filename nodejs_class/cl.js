class person {
    constructor(number1,number2){
        this.num1 = number1;
        this.num2 = number2;
    }

    static add(){
        return console.log(this.num1+this.num2);
    }
}

module.exports = person;