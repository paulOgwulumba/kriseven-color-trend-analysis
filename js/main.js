var array = [];
var prevNumber = null;

const numberInput = document.getElementById("number");

const action = document.getElementById("action")


const generateBtn = document.getElementById("generate");
const addBtn = document.getElementById("add")

const buttonListener = (event) => {
  event.preventDefault();

  let newNum = numberInput.value;
  let actionInfo = action.value;

  if(newNum > 9 || newNum < 0){
    numberInput.focus()
  }
  else{
    if(actionInfo === "append"){
      array.push(newNum)
      numberInput.value = ""
      console.log(array)
    }
    else{
      let newArray = [newNum]
      array = newArray.concat(array)
      numberInput.value = ""
      console.log(array)
    }
  }
}
addBtn.addEventListener("click", buttonListener)

generateBtn.addEventListener("click", buttonListener)