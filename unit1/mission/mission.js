const colorDropdown = document.getElementById("themeSelector")

colorDropdown.addEventListener("change", function() {
    const colorTheme = colorDropdown.value
    const mainLogo = document.getElementById("logo")

    if (colorTheme === "light") {
        document.body.classList.remove("dark")
        mainLogo.src = "images/byui-logo_blue.webp"
        
    }
    else {
        document.body.classList.add("dark")
        mainLogo.src = "images/byui-logo_white.webp"
    }
});