// step no 1 blog function;
document.getElementById("btn-blog")
    .addEventListener("click", function(event){
        event.preventDefault();
        window.location.href = "/faq.html";
});

// step no 2 input function;
document.getElementById("btn-noakhali")
    .addEventListener("click", function(event){
        event.preventDefault();

        const inputMoney = getInputMoney("input-noakhali");
        const displayMoney = getBlogFaq("display-amount");
        const donateDisplayAmount1 = getBlogFaq("noa-display-amount");

        //check condition ;

        if(isNaN(inputMoney)){
            alert("Please enter number!");
            return;
        }
        else if(displayMoney < inputMoney){
            alert("Please check your account balance!");
            return;
        };

        if(inputMoney + donateDisplayAmount1){
            alert('Thank you for donate.');

            //display amount function;
            const toMinus = displayMoney - inputMoney;
            const toAdd = inputMoney + donateDisplayAmount1;
            document.getElementById("display-amount").innerText = toMinus;
            document.getElementById("noa-display-amount").innerText = toAdd;
        };

});

// feni function;
document.getElementById("btn-feni")
    .addEventListener("click", function(event){
        event.preventDefault();

        const inputMoney = getInputMoney("input-feni");
        const displayMoney = getBlogFaq("display-amount");
        const donateDisplayAmount2 = getBlogFaq("display-feni");

        //check condition ;

        if(isNaN(inputMoney)){
            alert("Please enter number!");
            return;
        }
        else if(displayMoney < inputMoney){
            alert("Please check your account balance!");
            return;
        };

        if(inputMoney + donateDisplayAmount2){
            alert('Thank you for donate.');

        //     //display amount function;
             const toMinus = displayMoney - inputMoney;
            const toAdd = inputMoney + donateDisplayAmount2;
            document.getElementById("display-amount").innerText = toMinus;
            document.getElementById("display-feni").innerText = toAdd;
        };

});



















