const input = document.getElementById("input");
const add = document.getElementById("add");
const ul = document.querySelector("ul");

add.addEventListener("click",()=>{
    
    if(input.value){
        const li = document.createElement("li");
        const idelete=document.createElement("button");
    
        idelete.innerText="X";
        li.innerText=input.value;
    
        li.appendChild(idelete);  
        ul.appendChild(li);
    
        input.value="";
    
        idelete.addEventListener("click",()=>{
            li.remove();
        })
    }
    else{
        alert("Please enter item");
    }

    
});






