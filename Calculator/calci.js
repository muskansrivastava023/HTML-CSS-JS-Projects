let boxClass = document.querySelectorAll(".box");
let inputOpClass = document.querySelector(".inputOp");
let equalsClass= document.querySelector(".equals");
let resetClass= document.querySelector(".reset");
let removeOneCharClass= document.querySelector(".removeOneChar");


boxClass.forEach((box)=>{
    box.addEventListener("click",()=>{
        inputOpClass.value += box.innerText;
    })
});

equalsClass.addEventListener("click",()=>{
    try{
    let evaluate= eval(inputOpClass.value);
    inputOpClass.value=evaluate;
    }
    catch(e){
        alert("There is something wrong with the input you provided!")
    }
})

resetClass.addEventListener("click",()=>{
    inputOpClass.value="";
})

removeOneCharClass.addEventListener("click",()=>{
    let convStr= inputOpClass.value.toString();

    convStr= convStr.replace(/.$/,"");
    inputOpClass.value= convStr;
    

})

