

// if(form){
// form.addEventListener("submit", function(e){

// e.preventDefault();

// const userData = {
// name: document.getElementById("name").value,
// mobile: document.getElementById("mobile").value,
// email: document.getElementById("email").value,
// location: document.getElementById("location").value
// };

// localStorage.setItem("fitnovaUser", JSON.stringify(userData));

// document.getElementById("successMsg").innerText =
// "Login Successful! Details Saved in Local Storage.";

// form.reset();

// });
// }


// if(form){

// form.addEventListener("submit", function(e){

// e.preventDefault();

// const userData = {

// name: document.getElementById("name").value,
// mobile: document.getElementById("mobile").value,
// email: document.getElementById("email").value,
// location: document.getElementById("location").value

// };

// localStorage.setItem("fitnessiaUser", JSON.stringify(userData));

// alert("Registration Successful ✅");

// window.location.href = "dashboard.html";

// });

// }

const form = document.getElementById("loginForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const userData = {

name: document.getElementById("name").value,
mobile: document.getElementById("mobile").value,
email: document.getElementById("email").value,
location: document.getElementById("location").value

};

localStorage.setItem("fitnessiaUser", JSON.stringify(userData));

const toast = document.getElementById("toast");

toast.classList.add("show");

setTimeout(() => {

window.location.href = "dashboard.html";

}, 2000);

});

}
