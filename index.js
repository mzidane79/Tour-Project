console.log('index.js script executed');

document.addEventListener('DOMContentLoaded', function () {
    // Function to parse and display user information
    function displayUserInfo() {
        // Get the ID token from the URL
        const idToken = new URLSearchParams(window.location.hash).get('id_token');

        if (idToken) {
            // Parse the ID token
            const parsedToken = JSON.parse(atob(idToken.split('.')[1]));

            // Display user information
            const userInfoContainer = document.getElementById('userInfo');
            userInfoContainer.innerHTML = `
                <h2>User Information</h2>
                <p>Name: ${parsedToken.name}</p>
                <p>Email: ${parsedToken.email}</p>
                <p>Sub: ${parsedToken.sub}</p>
            `;
        } else {
            console.error('ID token not found in the URL.');
        }
    }

    // Call the function to display user information
    displayUserInfo();

});
