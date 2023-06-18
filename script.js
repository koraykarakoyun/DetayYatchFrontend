
const mediaQuery = window.matchMedia('(max-width: 992px)')
// Check if the media query is true
if (mediaQuery.matches) {
    console.log("a")
    // Then trigger an alert
    document.getElementById("last_product").classList.remove("col-6", "col-lg-4", "col-sm-6 ");
}
