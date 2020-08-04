document.getElementById('match-pin').style.display = 'none';
document.getElementById('misMatch-pin').style.display = 'none';

//Automatic pin generate button activity
document.getElementById("pin-generate-button").addEventListener("click", function() {
    document.getElementById("pin-OTP").value = Math.floor(1000 + Math.random() * 8999);
})