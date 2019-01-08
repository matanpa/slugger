const slugger = require('./index');

describe('Testing slugger basic functionality', () => {
    it('Slugger can slug strings with spaces', () => {
        let input = slugger('hello world what\'s up', 'how are you doin today?');
        let output = 'hello-world-what\'s-up-how-are-you-doin-today?';
        expect(input).toEqual(output);
    });
});