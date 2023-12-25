console.log('Hello from index JS');

// Bootstrap the AuthJS Client
const authClient = new OktaAuth({
    url: "https://dev-16407622.okta.com",
    clientId: "0oadvrpixrp4jsDvz5d7",
    redirectUri: "https://mzidane79.github.io/Tour-Project/index.html",
    issuer: "https://dev-16407622.okta.com",
    scope: ['openid', 'profile', 'email']
});

// Initialize the Engagement Messenger
SN_CSM_EC.init({
    moduleID: "https://dev175885.service-now.com/#6246e8d6474331104c5e379bd36d43d7",
    loadFeature: SN_CSM_EC.loadEMFeature()
});

// Function to display user information
function displayUserInfo() {
    const userInfoContainer = document.getElementById('userInfo');

    // Check if the user is authenticated
    if (authClient.tokenManager.get('idToken')) {
        const idToken = authClient.tokenManager.get('idToken');

        // Display user information
        userInfoContainer.innerHTML = `<p>User Info:</p>
                                       <p>Name: ${idToken.claims.name}</p>
                                       <p>Email: ${idToken.claims.email}</p>`;
    } else {
        userInfoContainer.innerHTML = '<p>User is not authenticated. Please login first.</p>';
        console.log('Error generating token');
    }
}

// Automatically display user information on page load
displayUserInfo();

// Event listener for the "Get User Info" button click
document.getElementById('getUserInfoButton').addEventListener('click', displayUserInfo);
