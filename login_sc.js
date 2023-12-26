console.log('Hi From login JS');
document.addEventListener('DOMContentLoaded', function () {
    var baseOktaURL = "https://dev-16407622.okta.com";
    var appClientID = "0oadvrpixrp4jsDvz5d7";

    const authClient = new OktaAuth({ url: baseOktaURL, clientId: appClientID, redirectUri: "https://mzidane79.github.io/Tour-Project/index.html", issuer: baseOktaURL, scope: ['openid', 'profile', 'email'] });

    document.getElementById('loginButton').addEventListener('click', function () {
        // Redirect to Okta for authentication
        authClient.token.getWithRedirect({
            responseType: ['id_token']
        });
    });
console.log(authClient.token);
});
