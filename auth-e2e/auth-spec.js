describe('angularjs homepage todo list', function() {
  beforeEach(function() {
    browser.get('http://localhost:4600/auth');
  });
  it('should display signin page', function() {
    getTitleText = element(by.tagName('app-login')).getText();
    expect(getTitleText).toContain('Sign in');
  });
  it('should invalid login', function() {
    txt = 'LOGIN';
    i = 0;
    element(by.name('email')).sendKeys('ss@fju.us');
    element(by.name('password')).sendKeys('Password123');
    element.all(by.partialButtonText(txt)).get(i).click();
    toolbar = element(by.css('.mat-error'));
    expect(toolbar.getText()).toContain('Wrong Email or Password');
  });

  it('should valid login', function() {
    txt = 'LOGIN';
    i = 0;
    element(by.name('email')).sendKeys('ss@fju.us');
    element(by.name('password')).sendKeys('Password@123');
    element.all(by.partialButtonText(txt)).get(i).click();
    toolbar = element(by.css('.mat-toolbar'));
    expect(toolbar.getText()).toContain('ss@fju.us');
  });

});
