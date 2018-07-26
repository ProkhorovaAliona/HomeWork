const checkAuth = function (login, pwd) {
    const errors = [];
    if (login !== 'abc') {
        errors.push('bad login');
    } else if (pwd !== '123') {
        errors.push('bad password');
    }
    
    const response = {}
    if (errors.length > 0) {
        response.status = 'error';
        response.errors = errors;     
    }
    else {
        response.status = 'OK';
    }
    return response;
}

module.exports.checkAuth = checkAuth;