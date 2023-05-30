let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');


document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

document.querySelector('.btn_num').addEventListener('click',  (e) => {
    
    const buttonInfo = e.target.innerHTML;

    const setOperation = new Set(["+", "-", "*", "/"]);

    if (setOperation.has(buttonInfo)){
        lastOperand = parseInt(inputWindow.value);
        operation = buttonInfo;
        inputWindow.value = '';
        }
    else if (buttonInfo.charCodeAt(0) == 8730) {
        inputWindow.value = Math.sqrt(parseInt(inputWindow.value));
        operation = null;
        }
    else if (buttonInfo === '='){
        const currentOperand = parseInt(inputWindow.value);    

        if (operation === "+") {
            inputWindow.value = lastOperand + currentOperand;
            }
        if (operation === "-") {
            inputWindow.value = lastOperand - currentOperand;
            }
        if (operation === "*") {
            inputWindow.value = lastOperand * currentOperand;
            }
        if (operation === "/") {
            if (currentOperand === 0){
                inputWindow.value = "error";
                lastOperand = 0;
                }
            else{
                inputWindow.value = lastOperand / currentOperand;
                }    
            }
        operation = null;
        }    
    else{
        inputWindow.value += buttonInfo;
        }
})

