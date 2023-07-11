"use strict";
function val(value) {
    const output = document.getElementById("output");
    const clearButton = document.getElementById("button4");
    const store1 = document.getElementById("store1");
    const store2 = document.getElementById("store2");
    const store3 = document.getElementById("store3");



    if (store3.innerText=='-' || store3.innerText=='*' || store3.innerText=='/' || store3.innerText=='+' ) {
        if (Number(output.innerText)==0) {
            const newValue = output.innerHTML + value;
            output.innerHTML = value;
            store2.innerHTML = newValue;
            } else {
                const newValue = output.innerHTML + value;
                output.innerHTML = newValue;
                store2.innerHTML = newValue;
            }
            if (Number(output.innerHTML)>0) {
                clearButton.innerHTML="C";
            } else {
                clearButton.innerHTML="AC";
            }
    } else {
        if (Number(output.innerHTML)===0) {
        output.innerHTML = value;
        } else {
            const newValue = output.innerHTML + value;
            output.innerHTML = newValue;
            store1.innerHTML = newValue;
        }
        if (Number(output.innerHTML)>0) {
            clearButton.innerHTML="C";
        } else {
            clearButton.innerHTML="AC"
        }
    }

}



function clearScreen() {
    const clearButton = document.getElementById("button4");
    clearButton.innerHTML = "AC"
    const output = document.getElementById("output");
    const store1 = document.getElementById("store1");
    const store2 = document.getElementById("store2");
    const store3 = document.getElementById("store3");
    output.innerHTML = "0";
    store1.innerHTML = "0";
    store2.innerHTML = "0";
    const element1 = document.getElementById("button1");
    const element2 = document.getElementById("button5");
    const element3 = document.getElementById("button9");
    const element4 = document.getElementById("button13");
    store3.innerHTML = "0";

    const opElement = Array(element1, element2, element3, element4);
    let i = 0;
    while (i<5) {
                opElement[i].style.backgroundColor = "rgb(255, 106, 0)";
                opElement[i].style.color = "white";
                i++;
            }
}

function subEvent() {
    const element = document.getElementById("button9");
    const store3 = document.getElementById("store3");
    const output = document.getElementById("output");
    element.style.backgroundColor="white";
    element.style.color = "black";
    output.innerHTML = "0";
    store3.innerHTML = '-';
}

function addEvent() {
    const element = document.getElementById("button13");
    const store3 = document.getElementById("store3");
    element.style.backgroundColor="white";
    element.style.color = "black";
    const output = document.getElementById("output");
    output.innerHTML = "0";
    store3.innerHTML = '+';
}

function sqrtEvent() {
    const element = document.getElementById("button2");
    const store3 = document.getElementById("store3");
    const output = document.getElementById("output");
    const value = output.innerText;
    output.innerHTML = `√${value}`;
    store3.innerHTML = 'sqrt';
}

function logEvent() {
    const element = document.getElementById("button2");
    const store3 = document.getElementById("store3");
    const output = document.getElementById("output");
    const value = output.innerText;
    output.innerHTML = `log(${value})`;
    store3.innerHTML = 'log';
}

function sinEvent() {
    const element = document.getElementById("button2");
    const store3 = document.getElementById("store3");
    const output = document.getElementById("output");
    const value = output.innerText;
    output.innerHTML = `sin(${value})`;
    store3.innerHTML = 'sin';
}

function cosEvent() {
    const element = document.getElementById("button2");
    const store3 = document.getElementById("store3");
    const output = document.getElementById("output");
    const value = output.innerText;
    output.innerHTML = `cos(${value})`;
    store3.innerHTML = 'cos';
}

function tanEvent() {
    const element = document.getElementById("button2");
    const store3 = document.getElementById("store3");
    const output = document.getElementById("output");
    const value = output.innerText;
    output.innerHTML = `tan(${value})`;
    store3.innerHTML = 'sqrt';
}

function multiEvent() {
    const element = document.getElementById("button5");
    const store3 = document.getElementById("store3");
    element.style.backgroundColor="white";
    element.style.color = "black";
    const output = document.getElementById("output");
    output.innerHTML = "0";
    store3.innerHTML = '*';
}

function divEvent() {
    const element = document.getElementById("button1");
    const store3 = document.getElementById("store3");
    element.style.backgroundColor="white";
    element.style.color = "black";
    const output = document.getElementById("output");
    output.innerHTML = "0";
    store3.innerHTML = '/';
}

function calculate() {
    const store1 = document.getElementById("store1");
    const store2 = document.getElementById("store2");
    const store3 = document.getElementById("store3");
    const output = document.getElementById("output");
    const sign = store3.innerText;
    let a = store1.innerHTML;
    let b = store2.innerHTML;

    if (sign=='-') {
        let result = Number(a)-Number(b);
        output.innerHTML=(result);
        store1.innerHTML= result;
    } else if (sign=='+') {
        let result = Number(a)+Number(b);
        output.innerHTML=(result);
        store1.innerHTML= result;
    } else if (sign=='*') {
        let result = Number(a)*Number(b);
        output.innerHTML=result;
        store1.innerHTML= result;
    } else if (sign=='/') {
        let result = Number(a)/Number(b);
        let strResult = String(result)
        let sizeResult = strResult.length;
        if (sizeResult>15) {
            let point = strResult[6];
            const arr = strResult.split(point);
    
            output.innerHTML=(arr[0]);
            store1.innerHTML= arr[0];
        } else {
            output.innerHTML=result;
            store1.innerHTML= result;
        }

    } else if (sign=='sqrt') {
        let result = Math.sqrt(Number(a));
        let strResult = String(result)
        let sizeResult = strResult.length;
        if (sizeResult>15) {
            let point = strResult[6];
            const arr = strResult.split(point);
    
            output.innerHTML=(arr[0]);
            store1.innerHTML= arr[0];
        } else {
            output.innerHTML=result;
            store1.innerHTML= result;
        };
    } else if (sign=='log') {
        let result = Math.log(Number(a));
        let strResult = String(result)
        
        let point = strResult[6];
        const arr = strResult.split(point);

        output.innerHTML=(arr[0]);
        store1.innerHTML= arr[0];
    } else if (sign=='sin') {
        let result = Math.sin(Number(a));
        let strResult = String(result)
        
        let point = strResult[6];
        const arr = strResult.split(point);

        output.innerHTML=(arr[0]);
        store1.innerHTML= arr[0];
    } else if (sign=='cos') {
        let result = Math.cos(Number(a));
        let strResult = String(result)
        
        let point = strResult[6];
        const arr = strResult.split(point);

        output.innerHTML=(arr[0]);
        store1.innerHTML= arr[0];
    } else if (sign=='tan') {
        let result = Math.tan(Number(a));
        let strResult = String(result)
        
        let point = strResult[6];
        const arr = strResult.split(point);

        output.innerHTML=(arr[0]);
        store1.innerHTML= arr[0];
    }
    store3.innerHTML='0'

    const element1 = document.getElementById("button1");
    const element2 = document.getElementById("button5");
    const element3 = document.getElementById("button9");
    const element4 = document.getElementById("button13");
    store3.innerHTML = "0";

    const opElement = Array(element1, element2, element3, element4);
    let i = 0;
    while (i<=5) {
                opElement[i].style.backgroundColor = "rgb(255, 106, 0)";
                opElement[i].style.color = "white";
                i++;
            }
    store1.innerHTML= result;
}

function switchbutton() {
    const button = document.getElementById("switchbutton");
    const body = document.getElementsByTagName("body")[0];
    const footerpara = document.getElementById("footerpara");
    const calculator = document.getElementById("calculator-body");
    const pad = document.getElementById("pad");
    const donate = document.getElementsByClassName("donate")[0];
    const mode = document.getElementById("switchpara");
    if (mode.innerText == "Dark Mode") {
        button.style.marginLeft = "40px";
        mode.innerHTML = "Light Mode";
        body.style.backgroundColor = "white";
        footerpara.style.color = "black";
        calculator.style.borderColor = "rgb(231, 160, 53)";
        calculator.style.backgroundColor = "rgb(250, 224, 147)";
        pad.style.borderColor = "rgb(231, 160, 53)";
        donate.style.borderColor = "black";
        donate.style.color = "black";
        donate.style.backgroundColor = "white";
    } else {
        button.style.marginLeft = "0px";
        mode.innerHTML = "Dark Mode";
        body.style.backgroundColor = "rgb(85, 85, 85";
        footerpara.style.color = "white";
        calculator.style.borderColor = "rgb(178, 178, 178)";
        calculator.style.backgroundColor = "rgb(31, 31, 31)";
        pad.style.borderColor = "rgb(178, 178, 178)";
        donate.style.borderColor = "white";
        donate.style.color = "white";
        donate.style.backgroundColor = "black";
    }

    // button.style.animationName = "switch1";
    // button.style.animationDuration = "1.5s";
}