function showContent(sectionId) {
    // Hide all content sections
    var contentSections = document.getElementsByClassName('content-section');
    for (var i = 0; i < contentSections.length; i++) {
        contentSections[i].style.display = 'none';
    }

    // Show the selected content section
    document.getElementById(sectionId).style.display = 'block';

    // Hide the dropdown menu
    var dropdowns = document.getElementsByClassName('dropdown-content');
    for (var j = 0; j < dropdowns.length; j++) {
        dropdowns[j].style.display = 'none';
    }
}

// Hide the dropdown menu when clicking outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}
