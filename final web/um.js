document.addEventListener('DOMContentLoaded', function() {
    const historyContainer = document.getElementById('history-container');
    const missionContainer = document.getElementById('mission-container');
    
    // Hide all containers initially
    historyContainer.style.display = 'none';
    missionContainer.style.display = 'none';
    
    document.querySelector('.history-link').addEventListener('click', function(event) {
        event.preventDefault();
        historyContainer.style.display = 'block';
        missionContainer.style.display = 'none';
    });

    document.querySelector('.mission-link').addEventListener('click', function(event) {
        event.preventDefault();
        historyContainer.style.display = 'none';
        missionContainer.style.display = 'block';
    });
});

