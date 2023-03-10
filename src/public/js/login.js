const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
e.preventDefault();

const data = new FormData(form);
const obj = {};

data.forEach((value,key) => {
    obj[key] = value;
})



const url = "/auth";
const method = "POST";
const headers = {
    "Content-type": "application/json"
};
const body = JSON.stringify(obj);

fetch(url,{method,headers,body})
    .then(response => {
        return response.json();})
        .then(data => {
            if (data.success) {
                window.location.href = '/products';
            } else {
                console.log(data.error);
            }
        })
    .catch(error =>console.log(error) )
})