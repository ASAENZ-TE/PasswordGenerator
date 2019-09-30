function generatePassword() {
  var pwLength = document.querySelector("#slider").value;
  var options = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  var password = "";
  for (var i = 0; i <= pwLength; i++) {
      password += options.charAt(Math.floor(Math.random()*options.length -1));
 }
 document.getElementById("display").value = password;
}