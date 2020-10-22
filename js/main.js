var array = [];
var distributionArray = [];
var prevNumber = null;

///////////////////////////////
const nextTable = document.getElementById("next")
nextTable.addEventListener("click", () => {
  hide("table1")
  show('table2')
  hide("next")
  show("previous")
  show("next2")
})

const prevTable = document.getElementById("previous")
prevTable.addEventListener("click", () => {
  show("table1")
  hide("table2")
  hide("previous")
  show("next")
  hide("next2")
})

const nextTable2 = document.getElementById("next2")
nextTable2.addEventListener("click", () => {
  hide("table2")
  show('table3')
  show("previous2")
  hide("previous")
  hide("next2")
})

const prevTable2 = document.getElementById("previous2")
prevTable2.addEventListener("click", () => {
  show("table2")
  hide("table3")
  hide("previous2")
  show("next2")
  show("previous")
})

//////////////////////////////

const numberInput = document.getElementById("number");

const action = document.getElementById("action")


const generateBtn = document.getElementById("generate");
const addBtn = document.getElementById("add")

const buttonListener = (event) => {
  event.preventDefault();

  let newNum = numberInput.value;
  let actionInfo = action.value;

  if(newNum > 9 || newNum < 0 || newNum == ""){
    numberInput.focus()
  }
  else{
    if(actionInfo === "append"){
      array.push(newNum)
      numberInput.value = ""
      numberInput.focus()
    }
    else{
      let newArray = [newNum]
      array = newArray.concat(array)
      numberInput.value = ""
      numberInput.focus()
    }

    const tbody = document.getElementById("tbody")
    tbody.innerHTML = ""
    let numOfRed = 0;
    let numOfGreen = 0;
    let numOfViolet = 0;

    if(array.length <10){
      for(let num of array){
        if(num == 0){
          numOfRed++
          numOfViolet++
        }
        else if(num == 5){
          numOfGreen++
          numOfViolet++
        }
        else if(num == 1 || num == 3 || num == 5 || num == 7 || num == 9){
          numOfGreen++
        }
        else if(num == 2 || num == 4 || num == 6 || num == 8){
          numOfRed++
        }
        else{}
      }
      let trow = document.createElement("tr")
      let s_n = document.createElement("td")
      let distribution = document.createElement("td")

      s_n.innerHTML = `<h3>${0}</h3>`;

      distribution.innerHTML = `<h3>${numOfRed} <div class="color-box red"></div>&nbsp;&nbsp;&nbsp;&nbsp;${numOfGreen} <div class="color-box green"></div>&nbsp;&nbsp;&nbsp;&nbsp;${numOfViolet} <div class="color-box violet"></div></h3>`
      trow.appendChild(s_n)
      trow.appendChild(distribution)
      tbody.appendChild(trow)
    }
    else{
      let noOfLists = array.length - 10;
      for(let i=0; i<=noOfLists; i++){
        numOfRed = 0;
        numOfGreen = 0;
        numOfViolet = 0;
        for(let j=i; j<=i+9; j++){
          let num = array[j];
          
          if(num == 0){
            numOfRed++
            numOfViolet++
          }
          else if(num == 5){
            numOfGreen++
            numOfViolet++
          }
          else if(num == 1 || num == 3 || num == 5 || num == 7 || num == 9){
            numOfGreen++
          }
          else if(num == 2 || num == 4 || num == 6 || num == 8){
            numOfRed++
          }
          else{}

          
        }

        let s_n = document.createElement("td")
        let distribution = document.createElement("td")
        let trow = document.createElement("tr")

        s_n.innerHTML = `<h3>${i}</h2>`;

        distribution.innerHTML = `<h3>${numOfRed} <div class="color-box red"></div>&nbsp;&nbsp;&nbsp;&nbsp;${numOfGreen} <div class="color-box green"></div>&nbsp;&nbsp;&nbsp;&nbsp;${numOfViolet} <div class="color-box violet"></div></h3>`
        trow.appendChild(s_n)
        trow.appendChild(distribution)

        tbody.appendChild(trow)
      }
    }

    const tbody2 = document.getElementById("tbody-2")
    tbody2.innerHTML = ""

    for(let i=0; i<array.length; i++){
      let num = array[i];
      let tr = document.createElement("tr")
      let td1 = document.createElement("td")
      let td2 = document.createElement("td")
      let td3 = document.createElement("td")
      let colorText = ""
      if(num == 0){
        colorText = `<div class="color-box red"></div>&nbsp;&nbsp;&nbsp;&nbsp;<div class="color-box violet"></div>`
        td2.innerHTML = `<h4 class="text-danger">${num}</h4>`
      }
      else if(num == 5){
        colorText = `<div class="color-box green"></div>&nbsp;&nbsp;&nbsp;&nbsp;<div class="color-box violet"></div>`
        td2.innerHTML = `<h4 class="text-success">${num}</h4>`
      }
      else if(num == 1 || num == 3 || num == 5 || num == 7 || num == 9){
        colorText = `<div class="color-box green"></div>`
        td2.innerHTML = `<h4 class="text-danger">${num}</h4>`
      }
      else if(num == 2 || num == 4 || num == 6 || num == 8){
        colorText = `<div class="color-box red"></div>`
        td2.innerHTML = `<h4 class="text-danger">${num}</h4>`
      }
      else{}

      td1.textContent = i;
      td3.innerHTML = colorText;

      tr.appendChild(td1)
      tr.appendChild(td2)
      tr.appendChild(td3)

      tbody2.appendChild(tr)
    }

    calculateRecurrence()
  }
}
addBtn.addEventListener("click", buttonListener)

generateBtn.addEventListener("click", buttonListener)

function show(id=""){
  let element = document.getElementById(id);
  element.className = element.className.replace(/hide/g, "")
}

function hide(id=""){
  let element = document.getElementById(id)
  element.className+= " hide"
}

function calculateRecurrence(){
  let numOfRed = 0;
  let numOfGreen = 0;
  let numOfRedAndViolet = 0;
  let numOfGreenAndViolet = 0;
  let numOfViolet = 0;
  let numOfOnlyRed = 0;
  let numOfOnlyGreen = 0;

  for(let num of array){
    if(num == 0){
      numOfRed++
      numOfViolet++
      numOfRedAndViolet++
    }
    else if(num == 5){
      numOfGreen++
      numOfViolet++
      numOfGreenAndViolet++
    }
    else if(num == 1 || num == 3 || num == 5 || num == 7 || num == 9){
      numOfGreen++
      numOfOnlyGreen++
    }
    else if(num == 2 || num == 4 || num == 6 || num == 8){
      numOfRed++
      numOfOnlyRed++
    }
    else{}
  }

  let total = array.length
  document.getElementsByName("total").forEach(name => {
    name.textContent = total
  })

  document.getElementById("numOfRed").textContent = numOfRed
  document.getElementById("numOfGreen").textContent = numOfGreen
  document.getElementById("numOfViolet").textContent = numOfViolet
  document.getElementById("numOfOnlyRed").textContent = numOfOnlyRed
  document.getElementById("numOfOnlyGreen").textContent = numOfOnlyGreen
  document.getElementById("numOfRedAndViolet").textContent = numOfRedAndViolet
  document.getElementById("numOfGreenAndViolet").textContent = numOfGreenAndViolet

  document.getElementById("numOfRedPercent").textContent = (numOfRed / total).toFixed(4)
  document.getElementById("numOfGreenPercent").textContent = (numOfGreen / total).toFixed(4)
  document.getElementById("numOfVioletPercent").textContent = (numOfViolet / total).toFixed(4)
  document.getElementById("numOfOnlyRedPercent").textContent = (numOfOnlyRed / total).toFixed(4)
  document.getElementById("numOfOnlyGreenPercent").textContent = (numOfOnlyGreen / total).toFixed(4)
  document.getElementById("numOfRedAndVioletPercent").textContent = (numOfRedAndViolet / total).toFixed(4)
  document.getElementById("numOfGreenAndVioletPercent").textContent = (numOfGreenAndViolet / total).toFixed(4)
}