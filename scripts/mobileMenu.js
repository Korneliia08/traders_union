let hamburgerMobileMenu = document.querySelector("#hamburger-mobileMenu")
let mobileMenu = document.querySelector("#mobileMenu")


hamburgerMobileMenu.addEventListener("click", toggleHamburger)
let isMobileMenuOpen = false;

function toggleHamburger() {
    if (isMobileMenuOpen) {
        hamburgerMobileMenu.classList.remove("open")
        mobileMenu.classList.remove("open")
        isMobileMenuOpen = false
    } else {
        hamburgerMobileMenu.classList.add("open")
        mobileMenu.classList.add("open")
        isMobileMenuOpen = true
    }

}


let serachIconInHeader = document.querySelector("#serachIconInHeader")
let serachInputInHeader = document.querySelector("#serachInputInHeader")
serachIconInHeader.addEventListener("click", () => {
    if (serachInputInHeader.style.opacity == 0) {
        serachInputInHeader.style.opacity = '1'
    } else {
        serachInputInHeader.style.opacity = '0'
    }

})
