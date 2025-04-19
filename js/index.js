document.querySelectorAll(".faq-question").forEach(item => {
    item.addEventListener("click" , () => {
        const parent = item.parentElement;
        parent.classList.toggle( 'active' );
    });
});

/* Contact form*/
const Name = document.getElementById("name");
const form = document.getElementById("form");
const number = document.getElementById("Phonenumber");
const errorElement = document.getElementById("error");

form.addEventListener("submit" ,(e) =>{
    let message =[];
    if(Name.value === ""|| Name.value == null){
        messages.push("Name is required");
    }
    if (!/^\d+$/.test(number.value)) {
            messages.push("Phone Number must contain only digits");
        }
    if(number.value.length <= 6){
        messages.push("Phone Number must be longer than 6 characters");
    }
    if(number.value.length >= 10){
        message.push("Phone Number must not be longer than 10 characters");
    }
    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(" , ");
    }
});
form.addEventListener("submit" , function(event){
    event.preventDefault();
});