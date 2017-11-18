const assert = require('assert');

Feature('Repro test');

Scenario('with headers', function *(I) {
    I.haveRequestHeaders({
        'Authorization': 'Bearer validToken'
    });

    const {request: {headers}} = yield I.sendGetRequest('/ping');

    assert.equal(headers.Authorization, 'Bearer validToken');
});

Scenario('without headers', function *(I) {
    const {request: {headers}} = yield I.sendGetRequest('/ping');
    console.log(headers);

    assert.equal(headers.Authorization, undefined);
});
