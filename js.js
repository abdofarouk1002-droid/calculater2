function darkmode(){
      document.body.classList.toggle('dark-mode');

}



const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const operation = document.getElementById('operation');
const result = document.getElementById('result');
const historyList = document.getElementById('historyList');

let history = [];

function calculate() {
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);
    if(operation.value === '+') {
         res = num1 + num2;
    }

    else if(operation.value === '-') {
         res = num1 - num2;

    }
    else if(operation.value === '*') {
        res = num1 * num2;
      
    }
    else if(operation.value === '/') {
        if(num2 === 0) {
            resultHeader = 'Error: Division by zero';
     
        } else {
            res = num1 / num2;
      
        }
    }
    else if(operation.value === '*') {
           res= (num1 / num2) * 100;
    
    }
    else if(operation.value === '%') {
       res= (num1 / num2) / 100;
          }
        else if(operation.value === '^') {
         res = (num1 ^ num2);
        }
    
    else if(operation.value === 'sqrt') {
         res = Math.sqrt(num1);
         
    }

    else{
        resultHeader = 'Invalid operation';
        
   
    }

    result.innerHTML = `Result:` + res;
    history.push(`${num1} ${operation.value} ${num2} = ${res}`);
    updateHistory();

} 
function updateHistory() {
    historyList.innerHTML = history.map(x => `<li>${x}</li>`).join("");
}

function clearFields(){
    input1.value = '';
    input2.value = '';
    operation.value = '';
    result.innerHTML  = '';
    
}