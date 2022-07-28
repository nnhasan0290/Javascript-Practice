let form = document.querySelector('form');
let input = document.querySelector('.text-input');
let messages = document.querySelector('.messages');


form.onsubmit = (e) => {
    e.preventDefault();
    if(input.value !== ""){

        messages.innerHTML = `${messages.innerHTML} <h2>${input.value}</h2>`
        input.value = '';
    } else {
        alert("You haven't typed anything");
    }
}
console.log(messages.length);


