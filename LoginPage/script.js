let erp = document.querySelector("#erp");
erp.addEventListener("mouseover", function(){
    erp.style.cursor = "pointer";
})
erp.addEventListener("click", function(){
    window.location.reload();
})
let logoImg = document.querySelector("#logoImg");
logoImg.addEventListener("mouseover", function(){
    logoImg.style.cursor = "pointer";
})
logoImg.addEventListener("click", function(){
    window.location.reload();
})
let username = document.querySelector("#username");
let password = document.querySelector("#password");


function redirect(){
    if (username.value == "23104072" && password.value == "23104072") {
        alert("hello");
    }
    else{
        document.querySelector("#error").style.display = "block";
    }
}