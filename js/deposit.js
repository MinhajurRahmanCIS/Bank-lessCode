document.getElementById("button-deposit").addEventListener("click", function(){

    const newDepositAmount = getInputValueById("input-deposit");


    const previousDepositTotal = getelementIdValueById("total-deposit");
    
    newDepositTotal = newDepositAmount + previousDepositTotal;
    
    setTextElementById("total-deposit", newDepositTotal);
    
    const previousBalanceTotal =  getelementIdValueById("total-balance");
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    setTextElementById("total-balance", newBalanceTotal);

})