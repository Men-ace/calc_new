const allButtonsElm = document.querySelectorAll(".btn")

let strToDisplay = "";
const displayElm = document.querySelector(".display");


const operators = ["/", "*", "-", "+", "%"];

 const buttonAction = (value) => {
    if (value ==="AC"){
        strToDisplay = "";
        return display(strToDisplay);
    }

    if(value === "="){
        // get the last character
        const lastChar = strToDisplay[strToDisplay.length - 1];

        // check it is one of the operaators
        if (operators.includes(lastChar)){
            strToDisplay = strToDisplay.slice(0, -1); 
        }


        return displayTotal();
    }

    if (value === "C"){
        strToDisplay = strToDisplay.slice(0, -1);
        return display(strToDisplay);
    }

    strToDisplay += value; 

    display(strToDisplay);
 };

//attching click event to all the buttons 
allButtonsElm.forEach((btn) => {
   btn.addEventListener("click", () => {
       const value = btn.innerText;
        buttonAction(value);
    });
});
// updating value in the diusplay area
const display = (str) => {
    displayElm.innerText = str  || "0.0"
};



//calculate total 
const displayTotal = () =>{
    const total = eval(strToDisplay);

    strToDisplay = total.toString();
    display(strToDisplay);
};

