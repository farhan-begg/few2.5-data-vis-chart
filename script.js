import data from './titanic-data.js'

// Get a reference to the #titanic
const titanic = document.querySelector('#titanic')
const btn = document.querySelector('#btn')
const btns = document.querySelector('#btns')
const btnss = document.querySelector('#btnss')
const btnage = document.querySelector('#btnage')
const btnfare = document.querySelector('#btnfare')
const btnpclass = document.querySelector('#btnss')


// Set some styles on the titanic
// display flex, justifyContent center, alignItems flex-end
titanic.style.display = 'grid'
titanic.style.gridTemplateColumns = 'repeat(34, 21px)'
titanic.style.gridGap = '1.4px'

// Map over the data and make a new element for each passenger
const passengers = data.map(p => {
  return document.createElement('div')
})



// Loop over each passenger and append them to the titanic
passengers.forEach(p => {
  titanic.appendChild(p)
})

function renderPassengers(){
  passengers.forEach((p, i) => {
    p.classList.add('passenger')
    p.dataset.id = i
    p.style.width = '20px'
    p.style.height = '20px'
    p.style.backgroundColor = '#000'
    p.style.borderRadius = data[i].fields.sex === 'female' ? '50%' : '0'
    p.style.opacity = data[i].fields.survived === 'Yes' ? '1.0' : '.3'
    const portColor = { S: 'tomato', C: 'cornflowerblue', Q: 'orange', undefined: 'green' }
    p.style.backgroundColor = portColor[data[i].fields.embarked]


  })
}

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

btnage.addEventListener("click", () => {
  sortAge()
  renderPassengers()

});

btnfare.addEventListener("click", () => {
  sortFare()
  renderPassengers()

});

btnpclass.addEventListener("click", () => {
  sortPClass()
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

function sortFare() {
  data.sort((a, b) => {
    return a.fields.fare - b.fields.fare
  })
}

function sortPClass(){
  data.sort((a, b) => {
   return  b.fields.pclass - a.fields.pclass
  })
}



function sortAge() {
  data.sort((a, b) => {
    return a.fields.age - b.fields.age
  })
}



const passengerDetails = document.querySelector('#passenger-details')

document.body.addEventListener('mouseover', (e) => {
  if (e.target.matches('.passenger')) {
    console.log('mouse enter passenger')
    const id = e.target.dataset.id
    const fields = data[id].fields

    passengerDetails.style.display = 'block'
    passengerDetails.style.position = 'absolute'
    passengerDetails.style.left = `${e.pageX + 3}px`
    passengerDetails.style.top = `${e.pageY + 3}px`
    passengerDetails.style.backgroundColor = 'black'
    passengerDetails.style.color = '#fff'

    passengerDetails.style.opacity = '.7'
    passengerDetails.style.border = '.3px solid'
    passengerDetails.style.padding = '0.5em'

    passengerDetails.innerHTML = 
    `
    <ul>
    <li>Name: ${fields.name}</li>
    
      <li>Age: ${fields.age}</li>     
       <li>Fare: ${fields.fare}</li>
       <li>Gender: ${fields.sex}</li>   
       <li>Survived: ${fields.survived}</li>    

    </ul>`
  }
})

document.body.addEventListener('mouseout', (e) => {
  if (e.target.matches('.passenger')) {
    passengerDetails.style.display = 'none'
  }

})