// Bron code: Mohamad Al Ghorani - https://github.com/MohamadAlGhorani/web-design-1920

const messages = document.querySelectorAll(".chat")
const people = document.querySelectorAll(".people")

const messagesArray = Array.from(messages)
const peopleArray = Array.from(people)
const button = document.querySelector("#start")
const buttonStop = document.querySelector("#stop")
const buttonBegin = document.querySelector("#begin")
const buttonEnd = document.querySelector("#end")
const intro = document.querySelector("#intro")
const dialogue = document.querySelector("#dialogue")


var i = 0;
var p = 0;
var countMessage = 1;
var countPeople = 1;


dialogue.classList.add("hidden")

button.addEventListener("click", function() {
  console.log(intro.className)
  dialogue.classList.remove("hidden")
  intro.classList.add("hidden")
  console.log(intro.className)
    // window.scrollTo(0, 0);
  if (button.className == "pause") {
    button.className = "play"
    clearInterval(val)
  } else {
    button.className = "pause"
    val = setInterval(() => {

      // window.scrollTo(0, document.querySelector("#dialogue").scrollHeight + document.querySelector("#dialogue").clientHeight - 20)
      // console.log(document.querySelector("#dialogue").scrollHeight)

      messagesArray[countMessage].classList.add("show")
      messagesArray[countMessage].scrollIntoView()
      messagesArray[countMessage].classList.remove("hidden")
      peopleArray[countPeople].classList.add("show")
      peopleArray[countPeople].classList.remove("hidden")

      //   if (countMessage == messagesArray.length -1) {

      //     messagesArray.forEach(item => {
      //       item.classList.remove("show")
      //     })
      //     peopleArray.forEach(item => {
      //       item.classList.remove("show")
      //     })
      //     countMessage = 1
      //     countPeople = 1
      //     console.log(countMessage)
      //   } else {


      countMessage++
      countPeople++
      //   console.log(countMessage)
      //   }
    }, 4000);
  }
  if (intro.className == "") {
    buttonBegin.classList.add("hidden")
    buttonEnd.classList.add("hidden")
  } else {
    buttonBegin.classList.remove("hidden")
    buttonEnd.classList.remove("hidden")
  }
})

buttonStop.addEventListener("click", function() {
  dialogue.classList.add("hidden")
  intro.classList.remove("hidden")
  if (button.className == "pause") {
    button.className = "play"
    clearInterval(val)
    messagesArray.forEach(item => {
      item.classList.remove("show")
    })
    peopleArray.forEach(item => {
      item.classList.remove("show")
    })
    countMessage = 0;
    countPeople = 0;
  }
  if (intro.className == "") {
    buttonBegin.classList.add("hidden")
    buttonEnd.classList.add("hidden")
  } else {
    buttonBegin.classList.remove("hidden")
    buttonEnd.classList.remove("hidden")
  }
})

buttonBegin.addEventListener("click", function() {
  console.log(intro.className)
  clearInterval(val)
  messagesArray.forEach(item => {
    item.classList.remove("show")
    item.classList.add("hidden")
  })
  peopleArray.forEach(item => {
    item.classList.remove("show")
    item.classList.add("hidden")
  })
  countMessage = 0;
  countPeople = 0;
  if (button.className == "pause") {
    button.className = "play"
  }
  if (intro.className == "") {
    buttonBegin.classList.add("hidden")
    buttonEnd.classList.add("hidden")
  } else {
    buttonBegin.classList.remove("hidden")
    buttonEnd.classList.remove("hidden")
  }
})

buttonEnd.addEventListener("click", function() {
  console.log(intro.className)
  clearInterval(val)
  messagesArray.forEach(item => {
    // item.classList.remove("hidden")
    item.classList.add("show")
  })
  peopleArray.forEach(item => {
      //   item.classList.remove("hidden")
      item.classList.add("show")
    })
    //   countMessage = 0
    //   countPeople = 0
    //   console.log(countMessage)
  if (intro.className == "") {
    buttonBegin.classList.add("hidden")
    buttonEnd.classList.add("hidden")
  } else {
    buttonBegin.classList.remove("hidden")
    buttonEnd.classList.remove("hidden")
  }
})

console.log(intro.className)
if (intro.className == "") {
  buttonBegin.classList.add("hidden")
  buttonEnd.classList.add("hidden")
} else {
  buttonBegin.classList.remove("hidden")
  buttonEnd.classList.remove("hidden")
}