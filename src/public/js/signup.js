const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
e.preventDefault();

const data = new FormData(form);
const obj = {};

data.forEach((value,key) => {
    obj[key] = value;
})



const url = "/users";
const method = "POST";
const headers = {
    "Content-type": "application/json"
};
const body = JSON.stringify(obj);

fetch(url,{method,headers,body})
    .then(response => {
        
        response.json()})
    .then(data => console.log(data))
    .catch(error =>console.log(error) )
})