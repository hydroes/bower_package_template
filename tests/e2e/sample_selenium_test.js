describe('Protractor Demo App', function() {
  it('webpage title test', function() {
    // when browser.ignoreSynchronization is set to true then angularjs does not need to be loaded
    browser.ignoreSynchronization = true;
    browser.get('/#');
    
    expect(browser.getTitle()).toEqual('template module demo');
  });
});