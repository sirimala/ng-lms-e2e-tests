describe('angularjs homepage', function() {
  beforeEach(function() {
    browser.get('http://localhost:4600');
  });
  it('should display signin page', function() {
    getTitleText = element(by.tagName('app-login')).getText();
    expect(getTitleText).toContain('Sign in');
  });

});
