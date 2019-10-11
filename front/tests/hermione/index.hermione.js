const assert = require('assert')
describe('Просмотр содержимого репозитория', () => {
    it('Корневой url', function() {
        return this.browser
            .url('/')
            .isExisting('.Page')
            .then(exists => {
                assert.ok(exists, 'Страница не появилась')
            })
    });
});

