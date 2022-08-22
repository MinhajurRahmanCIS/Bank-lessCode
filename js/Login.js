document.getElementById("login-button").addEventListener("click", function(event){
    document.getElementById("userEmail");
    const email = userEmail.value;
    document.getElementById("userPass");
    const pass = userPass.value;
    if(email === "newman@gmail.com" && pass === "123"){
   window.location.href = "transaction.html";          
    }
    else{
       alert("You have left 3 attemps")
    }
})