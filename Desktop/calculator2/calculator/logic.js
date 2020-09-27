class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1);

    }

    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation){
        if(this.currentOperand === '') return;
        if(this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation; 
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    

    compute(){
        let computation;
        const amountOfDigits = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );
        const prev = parseFloat(this.previousOperand);
        const curr = parseFloat(this.currentOperand);
        const amountOfDigitsMax = Math.max(amountOfDigits(curr), amountOfDigits(prev));
        const amountOfDigitsMin = Math.min(amountOfDigits(curr), amountOfDigits(prev));
        let pow = Math.pow(10,amountOfDigitsMax);
        let powMin = Math.pow(10,amountOfDigitsMin);
        //alert(amountOfDigitsMax);
        if(isNaN(prev) || isNaN(curr)) return;
        switch(this.operation){
            case '+':
                if(amountOfDigitsMax == 0){
                    computation = prev + curr;
                    break;
                }else{
                    computation = (prev * pow + curr * pow) / pow;
                    break;
                }
                
            case '-':
                if(amountOfDigitsMax == 0){
                    computation = prev - curr;
                    break;
                }else{
                    computation = (prev * pow - curr * pow) / pow;
                    break;
                }
            case '*':
                if(amountOfDigitsMax == 0){
                    computation = prev * curr;
                    break;
                }else{
                    computation = (prev * pow * curr * pow) / (pow * powMin);
                    break;
                }
            case '÷':
                computation = prev / curr;
                break;
            case '^':
                computation = Math.pow(prev, curr);
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    getDisplayNumber(number){
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        if(isNaN(integerDigits)){
            integerDisplay = ''
        }else{
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`;
        }else{
            return integerDisplay;
        }
    }    

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if(this.operation != null){
            this.previousOperandTextElement.innerText = 
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        }else{
            this.previousOperandTextElement.innerText = '';
        }
    }
    sqrtMaking(){
        let result;
        let curr = parseFloat(this.currentOperand);
        if(curr >= 0){
            result = Math.sqrt(curr);
            this.currentOperand = result;
        }else{
            alert("You cannot root a negative number!");
            calculator.clear();
        }
    }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const sqrtButton = document.querySelector('[data-operation-sqrt]');


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    });
});

equalsButton.addEventListener('click', button =>{
    calculator.compute();
    calculator.updateDisplay();
});

allClearButton.addEventListener('click', button =>{
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', button =>{
    calculator.delete();
    calculator.updateDisplay();
});

sqrtButton.addEventListener('click', button =>{
    calculator.sqrtMaking();
    calculator.updateDisplay();
});
