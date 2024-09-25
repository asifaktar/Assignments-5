//step no 1 blog function;
document.getElementById("btn-blog")
    .addEventListener("click", function(event){
        event.preventDefault();
        
        window.location.href = "./blog.html";
        
});


// step no 2 input function;
document.getElementById("btn-noakhali")
    .addEventListener("click", function(event){
        event.preventDefault();

        const inputMoney = getInputMoney("input-noakhali");
        const displayMoney = getBlogFaq("display-amount");
        const donateDisplayAmount1 = getBlogFaq("noa-display-amount");

        //check condition ;
// console.log()
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

            //history function;
            const history = document.getElementById("history-1").innerText;
            const p = document.createElement("p");
            const d = new Date();
             
            p.innerText = `${history} Date ${d}`;

            document.getElementById("history-section").appendChild(p);
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
// console.log()
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
            
            //history function;
            const history = document.getElementById("history-2").innerText;
            const p = document.createElement("p");
             const date = new Date();
            p.innerText = `${history} Date ${date}`;

            document.getElementById("history-section").appendChild(p);
        };

});

// injured function;
document.getElementById("btn-injured")
    .addEventListener("click", function(event){
        event.preventDefault();

        const inputMoney = getInputMoney("input-injured");
        const displayMoney = getBlogFaq("display-amount");
        const donateDisplayAmount3 = getBlogFaq("display-injured");

        //check condition ;

        if(isNaN(inputMoney)){
            alert("Please enter number!");
            return;
        }
        else if(displayMoney < inputMoney){
            alert("Please check your account balance!");
            return;
        };

        if(inputMoney + donateDisplayAmount3){
            alert('Thank you for donate.');

        //     //display amount function;
             const toMinus = displayMoney - inputMoney;
            const toAdd = inputMoney + donateDisplayAmount3;
            document.getElementById("display-amount").innerText = toMinus;
            document.getElementById("display-injured").innerText = toAdd;

            //history function;
            const history = document.getElementById("history-3").innerText;
            const p = document.createElement("p");
             const de = new Date()
            p.innerText = `${history} Date ${de}`;

            document.getElementById("history-section").appendChild(p);

        };

});

//main btn section;
document.getElementById("btn-history").addEventListener("click", function(){
    
    getHiddenById("his");
});

document.getElementById("donate-history").addEventListener("click", function(){
    
    getHiddenById("main-section");
});















