function setCookie(name, value, domain) {
    domain = domain || '.mydomain.com';

    var cookieStr = name.toString() + '=' + JSON.stringify(value) + '; domain=' + domain;
    document.cookie = cookieStr;
}

function displayCookie() {
    var span = document.createElement('span');
    span.textContent = document.cookie;

    var cookieDisplay = document.getElementById('cookies');
    cookieDisplay.innerHTML = '';
    cookieDisplay.appendChild(span);
}
