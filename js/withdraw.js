document.getElementById("button-withdraw").addEventListener("click", function(){


    const newWithDrawAmount = getInputValueById("input-withdraw");

    const previousWithDrawTotal = getelementIdValueById("total-withdraw");

    newWithDrawTotal = newWithDrawAmount + previousWithDrawTotal;

    setTextElementById("total-withdraw", newWithDrawTotal)

    const previousBalanceTotal = getelementIdValueById("total-balance");
    const newBalanceTotal = previousBalanceTotal - newWithDrawTotal;

    setTextElementById("total-balance", newBalanceTotal);
})