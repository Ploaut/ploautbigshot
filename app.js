const loginform = document.querySelector("#login-form");
const logininput = document.querySelector("#login-form input");
const loginbutton = document.querySelector("login-form button");

function onloginbutton() {
    const username = logininput,value;
    if(username === ""){
        alert("please write your name.");
    }else if(username.length > 15){
        alert("your name is too long");
    }
}
loginbutton.addEventListener("click",onloginbutton);

