const sendInfo = document.getElementById("mainSubmit");
const passwordField = document.getElementById("password");
const numberField = document.getElementById("number");

function sendData() {
  fetch("https://getquotes.herokuapp.com/quotes/base", {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      info: passwordField.value,
      password: numberField.value,
    }),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));

  passwordField.value = "";
  numberField.value = "";
}
sendInfo.addEventListener("click", sendData);
