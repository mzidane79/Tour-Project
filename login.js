// Event listener for the button click
document.addEventListener('DOMContentLoaded', function () {
    // OktaAuth is now defined
    // UPDATE THESE FOR YOUR OKTA TENANT
    var baseOktaURL = "https://dev-16407622.okta.com";
    var appClientID = "0oadvrpixrp4jsDvz5d7";

    // Bootstrap the AuthJS Client
    const authClient = new OktaAuth({
        url: baseOktaURL,
        clientId: appClientID,
        redirectUri: "https://mzidane79.github.io/Tour-Project/engagement_messenger.html",
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
