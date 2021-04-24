const sendInfo = document.getElementById("mainSubmit");
const passwordField = document.getElementById("password");
const numberField = document.getElementById("number");


function sendData () {
    fetch(`https://getquotes.herokuapp.com/quotes/base`, {
        method: 'POST',
        body: JSON.stringify({
        info: passwordField.value,
        number: numberField.value
        })
        });
}
sendInfo.addEventListener("click", sendData);
