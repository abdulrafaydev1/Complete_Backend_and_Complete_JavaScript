// // globle scope
// console.log(this) // ya this keyword globle scope ma hai or ya abi windon ma add ho raha hai 

// // function ky ander this keyword
// function abcd() { // ya this keyword function ky ander hai or function ky ander hona ky bava jhub window ma add hota hai
//     console.log(this)
// }
// abcd()

// // ya this keyword mathot ky ader hai or iska result hoga kya ager object ky ander just this likna to result ayyeega pura object or ager object ma this.name keyword ky sat kuch likh hai to result ayeeega name ki value 
// const obj = {
//     name: 'rafay',
//     age: 21,
//     sayName: function () {
//         let func = () => {
//             console.log(this)
//         }
//         func()
//     }
// }

// obj.sayName()
// // console.log(obj)


// // event handel is ma ya ho raha hai ky gaer kisi element per addEventListener lagaya hai to this is ya wo milga ka kis element per addEventListener hai ro this is wo element milaga
// document.querySelector('h1').addEventListener('click', function () {
//     console.log(this.style.color = 'red');

// })

// class Abcd {
//     constructor() {
//         // console.log('jeyjey')
//         this.a = 12
//     }
// }

// let value = new Abcd()
// console.group(value)
 

// let obj2 = {
//     name: 'rafay',
// }

// function abcd(a, b, c, d, e, f, g, h, i) {
//     console.log(this.name, a, b, c, d, e, f, g, h, i)
// }

// abcd.apply(obj2, [1, 2, 3, 4, 5, 6, 7, 8, 9])

//!
/*
let form = document.querySelector("#userForm")
let userName = document.querySelector('#name')
let role = document.querySelector('#role')
let bio = document.querySelector('#bio')
let photo = document.querySelector('#photo')
*/

// const userManager = {
//     users: [],
//     initial: function () {
//         form.addEventListener('submit', this.formSubmit.bind(this))
//     },
//     formSubmit: function (dets) {
//         dets.preventDefault()
//         console.log(this)
//         this.addUser()
//         this.renderUi()
//         this.removeUser()

//     },
//     addUser: function () {
//         this.users.push({
//             userName: userName.value,
//             role: role.value,
//             bio: bio.value,
//             photo: photo.value
//         })

//         form.reset()
//     },
//     renderUi: function () {
//         this.users.forEach(function (user) {
//             console.log(user)
//             let container = document.createElement('main')
//             container.classList.add("container")
//             let section = document.createElement("section")
//             section.classList.add("users-section")
//             let userCard = document.createElement('div')
//             userCard.classList.add("user-card")
//             let avatar = document.createElement('div')
//             avatar.classList.add("avatar")
//             let avatarImg = document.createElement('img')
//             avatarImg.setAttribute("src", user.photo)
//             let h3 = document.createElement('h3')
//             h3.textContent = user.userName
//             let role = document.createElement('span')
//             role.classList.add('role')
//             role.textContent = user.role
//             let p = document.createElement('p')
//             p.textContent = user.bio
//             let btn = document.createElement('button')
//             btn.textContent = 'delete post'
//             btn.addEventListener("click", function(){

//             })

//             avatar.appendChild(avatarImg)
//             userCard.appendChild(h3)
//             userCard.appendChild(role)
//             userCard.appendChild(p)
//             userCard.appendChild(avatar)
//             userCard.appendChild(btn)
//             section.appendChild(userCard)
//             // container.appendChild(section)

//             document.querySelector('.users').appendChild(section)
//             document.querySelector('users-section').innerHTML = ''
//             // document.querySelector('.users-section').appendChild(section)
//             // document.body.appendChild(container)
//         })
//     },
//     removeUser: function () {}
// }

// userManager.initial()



// function CreateBusites(name, price, qty, company, color){
//     this.name = name,
//     this.price = price,
//     this.qty = qty,
//     this.company = company
//     this.write = function(text){
//         let h1 = document.createElement('h1')
//         h1.textContent = text
//         h1.style.color = color
//         document.body.appendChild(h1)
//     }
// }

// const busite1 = new CreateBusites('oreo', 30, 5, 'the making factoy', "black")
// const busite2 = new CreateBusites('super', 20, 10, 'super company', "red")
 
// console.log(busite1)
// // console.log(busite2)


