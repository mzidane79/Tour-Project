// index.js

document.addEventListener('DOMContentLoaded', function () {
    // Function to get user information from Okta
    function getUserInfo() {
        // Initialize the OktaAuth client
        const authClient = new OktaAuth({
            url: "https://dev-16407622.okta.com", // Update with your Okta URL
            clientId: "0oadvrpixrp4jsDvz5d7", // Update with your Okta client ID
            redirectUri: "https://mzidane79.github.io/Tour-Project/index.html", // Update with your redirect URI
            issuer: "https://dev-16407622.okta.com", // Update with your Okta issuer
            scope: ['openid', 'profile', 'email']
        });

        // Get the user information
        authClient.token.getUserInfo()
            .then(userInfo => {
                // Display user information in the userInfo div
                const userInfoDiv = document.getElementById('userInfo');
                userInfoDiv.innerHTML = `
                    <p><strong>User ID:</strong> ${userInfo.sub}</p>
                    <p><strong>Email:</strong> ${userInfo.email}</p>
                    <p><strong>Name:</strong> ${userInfo.name}</p>
                `;
            })
            .catch(error => {
                console.error('Error fetching user information:', error);
            });
    }

    // Event listener for the button click
    document.getElementById('loginButton').addEventListener('click', function () {
        // Redirect to Okta for authentication
        authClient.token.getWithRedirect({
            responseType: ['id_token']
        });
    });

    // Event listener for the button click to get user information
    document.getElementById('getUserInfoButton').addEventListener('click', getUserInfo);
});
