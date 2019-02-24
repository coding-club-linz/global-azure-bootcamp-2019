var webAuth = new auth0.WebAuth({
    domain: 'coderdojolinz.eu.auth0.com',
    clientID: 'ky7oHm7WqIU9MDYg60ei78Yx0IvltTQ3',
    responseType: 'token',
    //audience: 'https://coderdojolinz.eu.auth0.com/userinfo',
    scope: 'openid',
    redirectUri: window.location.origin + '/global-azure-bootcamp-2019/'
});

var loginBtn, logoutBtn;

function handleAuthentication() {
    webAuth.parseHash(function (err, authResult) {
        if (authResult && authResult.accessToken && authResult.idToken) {
            window.location.hash = '';
            setSession(authResult);
            loginBtn.style.display = 'none';

            var redirectUri = window.localStorage.getItem('auth0RedirectUrl');
            if (redirectUri) {
                document.location.href = redirectUri;
            }
        } else if (err) {
            console.log(err);
            alert(
                'Error: ' + err.error + '. Check the console for further details.'
            );
        }
        displayButtons();
    });
}

function setSession(authResult) {
    // Set the time that the Access Token will expire at
    var expiresAt = JSON.stringify(
        authResult.expiresIn * 1000 + new Date().getTime()
    );

    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
}

function displayButtons() {
    if (loginBtn && logoutBtn) {
        if (isAuthenticated()) {
            loginBtn.style.display = 'none';
            logoutBtn.style.display = 'inline-block';
        } else {
            loginBtn.style.display = 'inline-block';
            logoutBtn.style.display = 'none';
        }
    }
}

window.addEventListener('load', function () {
    loginBtn = document.getElementById('btn-login');
    logoutBtn = document.getElementById('btn-logout');

    loginBtn.addEventListener('click', function (e) {
        e.preventDefault();

        // store current url
        login();
    });

    logoutBtn.addEventListener('click', logout);

    function logout() {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        displayButtons();
        document.location.reload();
    }

    handleAuthentication();
});

function login() {
    window.localStorage.setItem('auth0RedirectUrl', location.href);
    webAuth.authorize();
}

function isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiry time
    var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
}

var apiUrl = 'https://participants-management-service.azurewebsites.net/api/';

function getRequestHeader() {
    return { Authorization: 'Bearer ' + localStorage.getItem('id_token') };
}

function initializeSessions() {
    if (isAuthenticated()) {
        $.ajax({
            type: 'GET',
            url: apiUrl + 'sessions/events/gab2019',
            dataType: 'json',
            headers: getRequestHeader()
        }).done(function (result) {
            result.forEach(function (item) {
                var element = $('#session-' + item.sessionId);
                element.parent().addClass('selected');
                element.data('_id', item._id);
            });
        }).fail(function (err) {
            console.log('Request failed: ' + err.statusText);
        });
    }
}

function selectSession(e, url) {
    e.preventDefault();
    e.stopPropagation();

    if (isAuthenticated()) {
        var data = {
            "eventId": "gab2019",
            "sessionId": getSessionId(url)
        };

        $.ajax({
            type: 'POST',
            url: apiUrl + 'sessions/events/gab2019',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data),
            dataType: 'json',
            headers: getRequestHeader()
        }).done(function (result) {
            var element = $('#session-' + getSessionId(url));
            element.parent().addClass('selected');
            element.data('_id', result._id);
        }).fail(function (err) {
            console.log('Request failed: ' + err.statusText);
        });
    } else {
        confirmLogin();
    }
}

function deselectSession(e, url) {
    e.preventDefault();
    e.stopPropagation();

    if (isAuthenticated()) {
        var id = $('#session-' + getSessionId(url)).data('_id');

        $.ajax({
            type: 'DELETE',
            url: apiUrl + 'sessions/' + id,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            headers: getRequestHeader()
        }).done(function (result) {
            $('#session-' + getSessionId(url)).parent().removeClass('selected');
        }).fail(function (err) {
            $('#session-' + getSessionId(url)).parent().removeClass('selected');
            console.log('Request failed: ' + err.statusText);
        });
    } else {
        confirmLogin();
    }
}

function getSessionId(url) {
    return url.replace(/\/sessions\//, '').replace(/\.html/, '')
}

function confirmLogin() {
    $('#confirmLoginModal').modal({});

    var modalConfirm = function (callback) {

        $("#modal-btn-login").on("click", function () {
            callback(true);
            $("#mi-modal").modal('hide');
        });

        $("#modal-btn-cancel").on("click", function () {
            callback(false);
            $("#mi-modal").modal('hide');
        });
    };

    // window.localStorage.setItem('auth0RedirectUrl', location.href);
    //     webAuth.authorize();
}