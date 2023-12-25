document.addEventListener('DOMContentLoaded', function () {
    // Function to load the Engagement Messenger content
    function loadEngagementMessenger() {
        // Container to hold the Engagement Messenger content
        const engagementMessengerContainer = document.getElementById('engagementMessengerContainer');

        // Use AJAX to fetch the content dynamically
        fetch('https://dev175885.service-now.com/')
            .then(response => response.text())
            .then(content => {
                // Inject the content into the container
                engagementMessengerContainer.innerHTML = content;
            })
            .catch(error => {
                console.error('Error loading Engagement Messenger:', error);
            });
    }

    // Event listener for the button click
    document.getElementById('loadEngagementMessenger').addEventListener('click', loadEngagementMessenger);
});
