// Event listener for the button click
document.addEventListener('DOMContentLoaded', function () {
    // OktaAuth is now defined
    // UPDATE THESE FOR YOUR OKTA TENANT
    var baseOktaURL = "https://your-okta-domain.okta.com";
    var appClientID = "your-app-client-id";

    // Bootstrap the AuthJS Client
    const authClient = new OktaAuth({
        url: baseOktaURL,
        clientId: appClientID,
        redirectUri: "https://your-redirect-uri.com",
        issuer: baseOktaURL,
        scope: ['openid', 'profile', 'email']
    });

    // Event listener for the button click
    document.getElementById('loginButton').addEventListener('click', function () {
        // Redirect to Okta for authentication
        authClient.token.getWithRedirect({
            responseType: ['id_token']
        });
    });
});
