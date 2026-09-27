const users = [
    {
        name: "Abdul Rafay",
        pic: "https://i.pravatar.cc/300?img=1",
        bio: "Creative coder who loves building modern and interactive websites."
    },
    {
        name: "Ali Khan",
        pic: "https://i.pravatar.cc/300?img=2",
        bio: "Frontend developer focused on creating clean and responsive user interfaces."
    },
    {
        name: "Hamza Ahmed",
        pic: "https://i.pravatar.cc/300?img=3",
        bio: "JavaScript enthusiast who enjoys solving problems and learning new technologies."
    },
    {
        name: "Usman Tariq",
        pic: "https://i.pravatar.cc/300?img=4",
        bio: "Full stack developer passionate about APIs, databases, and scalable applications."
    },
    {
        name: "Hassan Rauf",
        pic: "https://i.pravatar.cc/300?img=10",
        bio: "Web developer passionate about creating fast, accessible, and modern websites."
    },
    {
        name: "Ayan Malik",
        pic: "https://i.pravatar.cc/300?img=5",
        bio: "UI designer who turns creative ideas into beautiful and user-friendly experiences."
    },
    {
        name: "Saad Hassan",
        pic: "https://i.pravatar.cc/300?img=6",
        bio: "Backend developer working with Node.js, Express, and MongoDB."
    },
    {
        name: "Zain Ali",
        pic: "https://i.pravatar.cc/300?img=7",
        bio: "Tech learner exploring React, modern web development, and frontend animations."
    },
    {
        name: "Bilal Ahmed",
        pic: "https://i.pravatar.cc/300?img=8",
        bio: "Software developer who enjoys building practical projects and useful tools."
    },
    {
        name: "Danish Raza",
        pic: "https://i.pravatar.cc/300?img=9",
        bio: "Problem solver interested in algorithms, coding challenges, and clean code."
    },
    {
        name: "Hassan Rauf",
        pic: "https://i.pravatar.cc/300?img=10",
        bio: "Web developer passionate about creating fast, accessible, and modern websites."
    }
];

function showUser(arr) {
    arr.forEach(function (user) {

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.classList.add("bg-img");
        img.src = user.pic
        img.alt = "User";

        const blurredLayer = document.createElement("div");
        blurredLayer.classList.add("blurred-layer");
        // blurredLayer.style.backgroundImage = `url${user.pic}`

        const content = document.createElement("div");
        content.classList.add("content");

        const h3 = document.createElement("h3");
        h3.textContent = user.name

        const p = document.createElement("p");
        p.textContent = user.bio
        // Content ke andar h3 aur p
        content.appendChild(h3);
        content.appendChild(p);

        // Card ke andar sab elements
        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        // Cards container mein card add karo
        const cardsContainer = document.querySelector(".cards-container");
        cardsContainer.appendChild(card);

    })
}

showUser(users)

let input = document.querySelector('.search-input')
input.addEventListener('input', function(){
    let newUser = users.filter((user) => {
        return user.name.startsWith(input.value);  
    })

    document.querySelector('.card').innerHTML = ''
    showUser(newUser) 
})