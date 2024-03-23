const setCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
}

document.addEventListener("DOMContentLoaded", function() {
    setCurrentYear();

    var footer = document.getElementById("dynamic-footer");
    var lastScrollTop = 0;

    window.addEventListener("scroll", function() {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        
        if (st > lastScrollTop) {
            // Scrolling down, hide the footer
            footer.style.display = "none";
        } else {
            // Scrolling up, show the footer
            footer.style.display = "block";
        }

        lastScrollTop = st;
    });
});

