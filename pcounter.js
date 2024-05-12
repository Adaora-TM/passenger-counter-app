//document.getElementById("count-el").innerText=5


//ctrl+k+c to comment a group og highlighted lines of code
// let firstBatch=5
// let secondBatch=7

// let count = firstBatch + secondBatch  //let count be 0
// console.log(count) //console: checking that the variable count is 0

// let myAge=18
// let humanDogRatio=7 //7 because 1 human year=7 dog years

// let myDogAge= myAge * humanDogRatio
// console.log(myDogAge)

//Reassigning variables

// let count=5

// //count + 1 for increment by 1
// count=3
// count= count +1 //3 + 1
// count=count+2
// count=count+10
// count=count-2
// console.log(count)

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints=bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints=bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints=bonusPoints + 45
// console.log(bonusPoints)


//To make the increment button interactive
// let count=0

// function increment(){           //used when the button is clicked, declared as onclick=increment() in the html file
//      console.log("The button is clicked")
// }


// function coolgirl(){
//     console.log(42)
// }

// coolgirl()

// let lap1=34
// let lap2=33
// let lap3=36

// let sumlaps= lap1 + lap2 + lap3 //i can also create this variable inside the function

// function logsum(){
//     console.log(sumlaps)

// }

// logsum()

// let lapsCompleted = 0

// function incrementLap(){
//     lapsCompleted = lapsCompleted + 1
// }
// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)

// let countEl =document.getElementById("count-el")
// console.log(countEl)
// let count = 0
// function increment() {
//     console.log("The button is clicked")
//     count = count + 1
//     countEl.innerText = count //changing/incrementing the 0 value of h2 in the html file
//     console.log(count)

// }

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log("countEl")
let count=0

function increment(){
    console.log("clicked")
    count = count + 1
    countEl.innerText=count
    console.log(count)
}

 function save(){

       let countdash= count + " - "
       saveEl.textContent += countdash //textContent for symbols that are not very human readable like "-"
       console.log(count)
       countEl.textContent = 0
       count=0                          //to make sure the entry value returns back to 0 before saving another value

 }

 save()


 
// let username = "per"

// let message = "You have three new notifications"
// console.log(message + ", " + username + "!")

// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)


// let name = "Adaora"
// let greeting = "Hi, my name is"
// let myGreeting = greeting + " " + name
// console.log(myGreeting)

// let points=4
// let bonusPoints="10" //10 is a string because of the quotaions

// let totalPoints = points + bonusPoints
// console.log(totalPoints)

// let welcomeEl = document.getElementById("welcome-el")


// let name = "Adaora"
// let greeting = "Welcome to Scrimba, "

// welcomeEl.innerText=greeting + name

// //adding emoji
// //i don't have one so i'll use an exclamation mark instead
// welcomeEl.innerText+= "!"

