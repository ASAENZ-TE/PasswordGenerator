function generatePassword() {
  var pwLength = document.querySelector("#slider").value;
  var options = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  var password = "";
  for (var i = 0; i <= pwLength; i++) {
      password += options.charAt(Math.floor(Math.random()*options.length -1));
 }
 document.getElementById("display").value = password;
}

document.getElementById("length").innerHTML = "length : 50";

document.getElementById("slider").oninput = function() {
  if (document.getElementById("slider").value >0){
    document.getElementById("length").innerHTML = "length: " + document.getElementById("slider").value;
  }
}

function copyPassword() {
  
  document.getElementById("display").select();
  
  document.execCommand("copy");

  alert("New password has been copied to clipboard!");
}