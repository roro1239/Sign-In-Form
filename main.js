let password = document.getElementById("password");
let confirmPassword= document.getElementById("confirmPass");
let btn = document.getElementById("btnCreate");
let element = document.createElement("p");
let fieldSet = document.getElementById("set");
confirmPassword.addEventListener('keyup',()=>{
    if(password.value !== confirmPassword.value){
        password.style.cssText="border: 2px solid rgb(255, 69, 100);";
        confirmPassword.style.cssText="border: 2px solid rgb(255, 69, 100);";
        element.textContent="passwords donot match!";
        element.style.cssText="color: rgb(255, 69, 100);";
        fieldSet.appendChild(element);
        btn.disabled=true;
    } else if(password.value === confirmPassword.value){
        password.style.cssText=" border: 2px solid rgb(0, 183, 255);";
        confirmPassword.style.cssText=" border: 2px solid rgb(0, 183, 255);";
        fieldSet.removeChild(element);
        btn.disabled=false;
    }
});

password.addEventListener('keyup',()=>{
    if(password.value !== confirmPassword.value){
        password.style.cssText="border: 2px solid rgb(255, 69, 100);";
        confirmPassword.style.cssText="border: 2px solid rgb(255, 69, 100);";
        element.textContent="passwords donot match!";
        element.style.cssText="color: rgb(255, 69, 100);";
        fieldSet.appendChild(element);
        btn.disabled=true;
    } else if(password.value === confirmPassword.value){
        password.style.cssText=" border: 2px solid rgb(0, 183, 255);";
        confirmPassword.style.cssText=" border: 2px solid rgb(0, 183, 255);";
        fieldSet.removeChild(element);
        btn.disabled=false;
    }
});