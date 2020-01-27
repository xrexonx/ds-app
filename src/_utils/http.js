function _send(url = '', options = {}) {
    const defaultOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch(url, {
        ...defaultOptions,
        ...options
    })
        .then(async response => {
            const resBody = await response.json();
            return {
                ...resBody,
                statusCode: response.status,
                errors: !response.ok ? resBody : []
            }
        })
}

function _get(url, options = {}) {
    const newUrl = new URL(url);
    if (Object.keys(options).length) {
        newUrl.search = new URLSearchParams(options);
    }

    return _send(newUrl, options);
}

function _post(url, options = {}) {
    options.method = 'POST';
    return _send(url, options);
}

function _put(url, options = {}) {
    options.method = 'PUT';
    return _send(url, options);
}

function _delete(url, options = {}) {
    options.method = 'DELETE';
    return _send(url, options);
}

export const Http = {
    get: _get,
    post: _post,
    put: _put,
    delete: _delete
};
