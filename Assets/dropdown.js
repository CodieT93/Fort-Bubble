document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.nav-item.dropdown');
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function(event) {
            if (window.innerWidth > 992) { // Adjust the width as per your responsive breakpoint
                event.preventDefault();
                event.stopImmediatePropagation();
            }
        });
    });
});