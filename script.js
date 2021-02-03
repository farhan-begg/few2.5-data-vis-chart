import data from './titanic-data.js'

// Get a reference to the #titanic
const titanic = document.querySelector('#titanic')
const btn = document.querySelector('#btn')
const btns = document.querySelector('#btns')
const btnss = document.querySelector('#btnss')


// Set some styles on the titanic
// display flex, justifyContent center, alignItems flex-end
titanic.style.display = 'grid'
titanic.style.gridTemplateColumns = 'repeat(30, 15px)'
titanic.style.gridGap = '1.5px'

// Map over the data and make a new element for each passenger
const passengers = data.map(p => {
  return document.createElement('div')
})


btn.addEventListener("click", () => {
  sortGender()
  renderPassengers()

});
btns.addEventListener("click", () => {
  sortSurvived()
  renderPassengers()
});

btnss.addEventListener("click", () => {
  sortEmbarked()
  renderPassengers()
});



function sortGender(){
  data.sort((a, b) => {
    if (a.fields.sex === 'female'){
      return 1
    }
    return -1
  })

}

function sortSurvived() {
  data.sort((a, b) => {
    if (a.fields.survived === 'Yes'){ 
      return -1
    }
    return 1
  })

}

function sortEmbarked(){
  data.sort((a, b) => {
    if(a.fields.embarked < b.fields.embarked) {
      return - 1
    }else if (a.fields.embarked > b.fields.embarked) {
      return 1
    }
    return 0
  
  })

}








// Loop over each passenger and append them to the titanic
passengers.forEach(p => {
  titanic.appendChild(p)
})

function renderPassengers(){
  passengers.forEach((p, i) => {
    p.style.width = '15px'
    p.style.height = '15px'
    p.style.backgroundColor = '#000'
    p.style.borderRadius = data[i].fields.sex === 'female' ? '50%' : '0'
    p.style.opacity = data[i].fields.survived === 'Yes' ? '1.0' : '.3'
    const portColor = { S: 'tomato', C: 'cornflowerblue', Q: 'orange', undefined: 'green' }
    p.style.backgroundColor = portColor[data[i].fields.embarked]


  })


}

function flash(el, c1, c2) {
  var text = document.getElementById(el);
  text.style.color = (text.style.color == c2) ? c1 : c2;
}
var clr1 = setInterval(function() { flash('foo1', 'gray', 'red') }, 1000);
var clr2 = setInterval(function() { flash('foo2', 'gray', 'blue') }, 1000);
var clr3 = setInterval(function() { flash('foo3', 'gray', 'green') }, 1000);

renderPassengers()
// Let's loop over each passenger and set some styles 

// Challenges - 

// Make the squares a little bigger 15px by 15px. 
// You'll need to change both the gridTemplateColumn on the
// titanic and the width and height of each passenger. 



// Change the number of columns on the titanic to 34


// Display each passenger as a circle if they are female. 
// Do this by setting the borderRadius of each passenger. 
// Match the passenger in passengers to the object data 
// in the data array by the index. 



// Display each passengers who did not survive as 
// opacity 0.5. 



// Set the backgroundColor of each passenger by their 
// embarked value. There are three possible values: 
// 'S', 'C', and 'Q'



const passengerDetails = document.querySelector('#passenger-details')

document.body.addEventListener('mouseover', (e) => {
  if (e.target.matches('.passenger')) {
    const id = e.target.dataset.id
    const fields = data[id].fields

    passengerDetails.style.display = 'block'
    passengerDetails.style.position = 'absolute'
    passengerDetails.style.left = `${e.pageX + 3}px`
    passengerDetails.style.top = `${e.pageY + 3}px`
    passengerDetails.style.backgroundColor = '#fff'
    passengerDetails.style.border = '1px solid'
    passengerDetails.style.padding = '0.5em'

    passengerDetails.innerHTML = 
    `<strong>${fields.name}</strong>
    <ul>
      <li>Age: ${fields.age}</li>     
       <li>Age: ${fields.fare}</li>
    </ul>`
  }
})

document.body.addEventListener('mouseout', (e) => {
  if (e.target.matches('.passenger')) {
    passengerDetails.style.display = 'none'
  }

})