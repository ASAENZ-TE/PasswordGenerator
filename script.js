function generatePassword() {
   
    var pwLength = document.querySelector("#slider").value;
    var options = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    var password = "";

    for (var i = 0; i <= pwLength; i++) {
        password += password + options.charAt(Math.floor(Math.random()*Math.floor(options.length -1)));
   }
   document.getElementById("display").value = password;
}

/*
// We need to randomly pick from all capital, lower case, and special characters
// A button to make the generator go, with an event listener click 
// Input to decide how long the generated password will be
// A button to copy the password

 var pwLength = document.querySelector("#slider");
 var options = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
 var password = "";
 var makePw = document.querySelector("#generate");
// var copy = document.querySelector("#copy");
// var newPw = document.querySelector("#output");
// var pwForm = document.querySelector("#pwMaker");

function generatePassword(){
   
    var pwLength = document.querySelector("#slider").value;
    var options = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    var password = "";
    // var capLet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    // var lowLet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    // var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // var specOps = '';
    // var options = capLet.concat(lowLet,nums,specOps);

    for (var i = 0; i <= pwLength; i++) {
         password = options.charAt(Math.floor(Math.random()*Math.floor(options.length -1)));
    }
    document.getElementById("#output").value = password;

    if (password === null) {
        return password;
    }
}

makePw.addEventListener("submit", function(event) {
    event.preventDefault();
    generatePassword();
    document.getElementById("#output").textContent = password;
});

function populatePw (enterLength) {
}


function copyPassword () {

}
copy.addEventListener("submit", function(event) {
    event.preventDefault();
    copyPassword();
    document.getElementById("#copy").textContent;
    
});

