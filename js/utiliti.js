
// step no 1 blog function ;
function getBlogFaq(id){
    const displayNumber = document.getElementById(id).innerText;
    const toNumber = parseFloat(displayNumber);

    return toNumber;
};

// step no 2 input text function;
function getInputMoney(id){
    const inputNumber = document.getElementById(id).value;
    const toInputNumber = parseFloat(inputNumber);
    
    return toInputNumber;
};


//hidden function;
function getHiddenById(id){
    document.getElementById("his").classList.add("hidden");
    document.getElementById("main-section").classList.add("hidden");

    document.getElementById(id).classList.remove("hidden");
}




















