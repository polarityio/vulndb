/*
TODO: Fix dependency vunlerabilties
"devDependencies": {
    "chai": "~3.5",
    "mocha": "~3.2"
},
let integration = require('./integration');

describe('vulndb', () => {
    it('should get the token', (done) => {
        integration.doLookup([], {
            testHost: 'vulndb.cyberriskanalytics.com',
            key: '',
            secret: ''
        }, (err, token) => {
            console.error(err);
            console.log(token);
            done(err);
        });
    });
});
