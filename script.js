
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.onclick = () => {
navLinks.classList.toggle("active");
};

function calculateBMI(){

const height =
document.getElementById("height").value / 100;

const weight =
document.getElementById("weight").value;

const bmi =
(weight / (height * height)).toFixed(1);

let result = "";

if(bmi < 18.5){
result = "Underweight";
}
else if(bmi < 25){
result = "Normal Weight";
}
else{
result = "Overweight";
}

document.getElementById("result").innerHTML =
`Your BMI is ${bmi} (${result})`;

}

const testimonials = [

{
text:"Best gym experience ever. Amazing trainers and atmosphere.",
name:"- Arjun"
},

{
text:"Very professional trainers and excellent workout plans.",
name:"- Rahul"
},

{
text:"The diet plans and workouts changed my lifestyle completely.",
name:"- Kavin"
}

];

let index = 0;

setInterval(() => {

index++;

if(index >= testimonials.length){
index = 0;
}

document.getElementById("testimonialText").innerText =
`"${testimonials[index].text}"`;

document.getElementById("testimonialName").innerText =
testimonials[index].name;

},3000);
