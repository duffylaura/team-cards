const contact = require('..00contactCard')
test ('Engineer Test', () => {
    const x = new contact("Diana Taurasi", '#3', 'DianaTaurasi@theMercury.com','Engineer');
    expect (x.name).toBe("Diana Taurasi");
    expect (x.name()).toBe("Diana Taurasi");
    expect (x.id).toBe('#3')
    expect (x.id()).toBe('#3')
    expect (x.email).toBe('DianaTaurasi@theMercury.com')
    expect (x.email()).toBe('DianaTaurasi@theMercury.com')
    expect (x.postion).toBe('Engineer'); 
    expect (x.position()).toBe('Engineer');

})