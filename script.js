var upCas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowCas = "abcdefghijklmnopqrstuvwxyz";
var charSp = "!@#$%^&*:?>+";
var num = "1234567890";
var fill = "";
var pwLengthV = document.getElementById("pwLength");
var numBox = document.getElementById("numB");
var upBox = document.getElementById("capLet");
var lowBox = document.getElementById("lowLet");
var spBox = document.getElementById("spChar");
var generate = document.getElementById("generate");
var copy = document.getElementById("copy");
var password = document.getElementById("password");
generate.addEventListener("click", function(event) {
  var characters = fill;
  upBox.checked ? (characters += upCas) : " ";
  lowBox.checked ? (characters += lowCas) : " ";
  numBox.checked ? (characters += num) : " ";
  spBox.checked ? (characters += charSp) : " ";
  password.value = passwordGenerator(pwLengthV.value, characters);
});
function passwordGenerator(len, characters) {
  var pWord = " ";
  for (var i = 0; i < len; i++) {
    pWord += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return pWord;
}
function copyPassword(){
  var copyPassword = document.getElementById("password");
  copyPassword.select();
  document.execCommand("copy");
  alert("Your password has been successfully saved to the clipboard!");
}
