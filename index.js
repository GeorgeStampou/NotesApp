const notetxt = document.getElementById("noteText");
const form = document.getElementById("form");
const notesLst = document.getElementById("notesList");

function onClick(evt){
    evt.preventDefault();

    let newDiv = document.createElement("div");
    newDiv.setAttribute("class","libtn");
    
    let newLi = document.createElement("li");
    newLi.innerText = notetxt.value;
    newDiv.appendChild(newLi);

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class","btn");
    deleteBtn.innerHTML = "<img src='./icons/removeIcon.ico' >";

    newDiv.appendChild(deleteBtn).addEventListener("click", removeItem);

    notesLst.appendChild(newDiv);
    
    form.reset();
}


function removeItem(){
    this.parentNode.remove();
}

form.addEventListener("submit", onClick);