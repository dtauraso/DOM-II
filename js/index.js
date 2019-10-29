// Your code goes here

// 1
// make signup buttons enlarge and shrink
// no propigation(reguarding event 5)
let mysignup_buttons = document.querySelectorAll(".btn").forEach(item => {
    // console.log(item)
    item.addEventListener("mouseover", () => {
        // console.log("i was clicked")
        item.style.transform ="scale(1.05)";
        item.style.transition = "all 0.3s"
        event.stopPropagation()

    })
    item.addEventListener("click", (event) => {
        console.log("i was clicked")
        event.stopPropagation()
    })
    item.addEventListener("mouseleave", () => {
        item.style.transform ="scale(1)";
        item.style.transition = "all 0.3s"
        event.stopPropagation()

    })
})

// 2
// change text color for nat items
let my_nav = document.querySelectorAll(".nav-link").forEach(nav_link => {

    // only works if you click on it first
    nav_link.addEventListener("keydown", () => {
        nav_link.style.color = "blue"
        // console.log(nav_link)
    })
})
// 3
// have bus image "dance"
let my_bus = document.querySelector(".intro").children[0]
my_bus.addEventListener("wheel", () => {

        console.log("wheel!")
        my_bus.setAttribute("style", "transform: rotate(180deg)")
})
// 4 run a doubleclick when ceratain passages are clicked on

// 5
// hilight entire sign up prompt with a color when mousing over it
// (make sure this doesn't interfeer with the button clicks)
let my_destinations = document.querySelectorAll(".destination").forEach(destination => {

    destination.addEventListener("click", () => {
        destination.style.color = "pink"

    })
    // destination.style.color = "pink"
})
// 6
// rotate funbus "icon"
let my_fun_bus_icon = document.querySelector(".logo-heading")
console.log(my_fun_bus_icon)
my_fun_bus_icon.addEventListener("mouseenter", () => {
    my_fun_bus_icon.setAttribute("style", "transform: rotate(90deg)")

})
// have 7 as of here
// 7 change background color for footer

// 8
// have the destination image change to the buss image when clicked

// 9
// show another link when at a certain place in the nav bar

// 10 change text to lorem lala for a single passage when clicked


