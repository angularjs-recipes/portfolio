describe('route tests', function() {
    it('checks homepage route', function() {
        browser.get('http://localhost:9000/');

        var title = element(by.css('p'));
        expect(title.getText()).toBe('home');
    });

    it('checks about route', function() {
        browser.get('http://localhost:9000/#/about');

        var title = element(by.css('p'));
        expect(title.getText()).toBe('about');
    });

    it('checks projects route', function() {
        browser.get('http://localhost:9000/#/projects');

        var title = element(by.css('p'));
        expect(title.getText()).toBe('projects');
    });

    it('checks single project route', function() {
        browser.get('http://localhost:9000/#/projects/1/my-project');

        var title = element(by.css('p'));
        expect(title.getText()).toBe('project');
    });

    it('checks contact route', function() {
        browser.get('http://localhost:9000/#/contact');

        var title = element(by.css('p'));
        expect(title.getText()).toBe('contact');
    });

    it('checks error route', function() {
        browser.get('http://localhost:9000/#/error');

        var title = element(by.css('p'));
        expect(title.getText()).toBe('error');
    });
});
