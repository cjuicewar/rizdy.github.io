// Function to show specific content based on the clicked link
function showContent(contentId) {
    // Hide all content containers
    document.querySelectorAll('.content-container').forEach(container => {
        container.style.display = 'none';
    });

    // Show the selected content container
    if (contentId) {
        const container = document.getElementById(contentId);
        if (container) {
            container.style.display = 'block';
        }
    }
}

// Event listeners for dropdown links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.dropdown-content a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            const contentId = event.target.getAttribute('onclick').match(/'(.*?)'/)[1];
            showContent(contentId);
        });
    });
});



