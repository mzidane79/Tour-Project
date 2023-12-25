// Event listener for the button click
document.addEventListener('DOMContentLoaded', function () {
    // Function to get user information from Okta
    function getUserInfo() {
        const userInfoContainer = document.getElementById('userInfo');

        // Check if the user is authenticated
        if (authClient.token.hasTokensInUrl()) {
            // Parse the tokens from the URL
            authClient.token.parseFromUrl()
                .then(data => {
                    const idToken = data.tokens.idToken;

                    // Display user information
                    userInfoContainer.innerHTML = `<p>User Info:</p>
                                                   <p>Name: ${idToken.claims.name}</p>
                                                   <p>Email: ${idToken.claims.email}</p>`;
                })
                .catch(error => {
                    console.error('Error parsing tokens:', error);
                });
        } else {
            userInfoContainer.innerHTML = '<p>User is not authenticated. Please login first.</p>';
        }
    }

    // Event listener for the "Get User Info" button click
    document.getElementById('getUserInfoButton').addEventListener('click', getUserInfo);
});
