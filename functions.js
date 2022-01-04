// Changes theme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// Calls for change of theme when button is clicked
function changeTheme() {
    var icon = document.getElementById("icon");  // Made the icon a variable

    if (localStorage.getItem("theme") === "dark-theme") {  // If it is already dark theme
        setTheme("light-theme");
        icon.src = "images/moon.png";
        build.src = "images/build-light.png";
        nhs.src = "images/nhs-light.png";
        orch.src = "images/orch-light.png";
        uil.src = "images/uil-light.png";
    } else {
        setTheme("dark-theme");
        icon.src = "images/sun.png";
        build.src = "images/build-dark.png";
        nhs.src = "images/nhs-dark.png";
        orch.src = "images/orch-dark.png";
        uil.src = "images/uil-dark.png";
    }
}

// Returns the theme on refresh
(function () {
    if (localStorage.getItem("theme") === "dark-theme") {
        setTheme("dark-theme");
        icon.src = "images/sun.png";
        build.src = "images/build-dark.png";
        nhs.src = "images/nhs-dark.png";
        orch.src = "images/orch-dark.png";
        uil.src = "images/uil-dark.png";
    } else {
        setTheme("light-theme");
        icon.src = "images/moon.png";
        build.src = "images/build-light.png";
        nhs.src = "images/nhs-light.png";
        orch.src = "images/orch-light.png";
        uil.src = "images/uil-light.png";
    }
})();