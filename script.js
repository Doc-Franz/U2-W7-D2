const userForm = document.getElementById("user-form");
const removeBtn = document.getElementById("remove-btn");
const textArea = document.getElementById("text-area");
const userText = document.querySelector("p");
console.log(userText);

userForm.onsubmit = (e) => {
  e.preventDefault();
  const userName = document.getElementById("userName").value;
  localStorage.setItem("userName", userName);
  userText.innerText = userName;

  userForm.reset();

  removeBtn.onclick = () => {
    localStorage.removeItem("userName");
    userText.innerText = "";
  };
};

let contSeconds = sessionStorage.getItem("check-seconds-session") ? parseInt(sessionStorage.getItem("check-seconds-session")) : 0;

const checkSeconds = document.getElementById("check-seconds");

window.addEventListener("DOMContentLoaded", function () {
  setInterval(() => {
    contSeconds += 1;
    sessionStorage.setItem("check-seconds-session", contSeconds);
  }, 1000);
  checkSeconds.onclick = () => {
    console.log(contSeconds);
  };
});
