const allButtonsElm = document.querySelectorAll(".btn")

let strToDisplay = "";
const displayElm = document.querySelector(".display");

 const buttonAction = (value) => {
    if (value ==="AC"){
        strToDisplay = "";
        return display(strToDisplay);
    }

    if(value === "="){
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

