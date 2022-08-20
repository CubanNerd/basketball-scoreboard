let home = 0
let guest = 0
let homeCounter = document.getElementById('home-cntr')
let guestCounter = document.getElementById('guest-cntr')

function add(counter,type) {
    if (type == "home") {
        home += counter
        result = home
        homeCounter.textContent = result
    } else {
        guest += counter
        result = guest
        guestCounter.textContent = result    
    }
    
}
