const menuItems = [
    {
        image: "images/soup.jpg",
        name: "Dýňová polévka",
        price: 70
    },
    {
        image: "images/hamburger.jpg",
        name: "Hamburger",
        price: 200
    },
    {
        image: "images/pasta.jpg",
        name: "Těstoviny s rajčaty",
        price: 170
    }
]

const menu = document.querySelector(".menu-container")

menuItems.forEach((item) => {
    const menuItem = document.createElement("div")
    const foodImage = document.createElement("img")
    const foodTitle = document.createElement("h3")
    const foodPrice = document.createElement("p")
    const foodInfo = document.createElement("div")
   
    menu.appendChild(menuItem)
    menuItem.classList.add("one-menu-item")
    menuItem.appendChild(foodImage)
    menuItem.appendChild(foodInfo)
    foodInfo.appendChild(foodTitle)
    foodInfo.appendChild(foodPrice)

    foodImage.src = item.image
    foodTitle.textContent = item.name
    foodPrice.textContent = `${item.price} Kč`
})