const notetxt = document.getElementById("noteText");
const form = document.getElementById("form");

function onClick(evt){
    evt.preventDefault();
    let newLi = document.createElement("li");
    newLi.innerText = notetxt.value;
    document.getElementById("notesList").appendChild(newLi);
    form.reset();
}

form.addEventListener("submit", onClick);