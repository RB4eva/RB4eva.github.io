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

// Zum Beispiel für ein Dropdown-Menü bei kleineren Bildschirmgrößen
document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.getElementById("navbar");
  const links = navbar.querySelectorAll("a");

  links.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default link behavior
      const targetId = this.getAttribute("href").substr(1); // Get the target ID from href attribute
      const targetElement = document.getElementById(targetId); // Find the target element by ID
      if (targetElement) {
        // Smooth scroll to the target element
        targetElement.scrollIntoView({
          behavior: "smooth" // Smooth scroll behavior
        });
      }
    });
  });
});