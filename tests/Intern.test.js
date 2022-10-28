const contact = require('..00contactCard')
test ('Intern Test', () => {
    const x = new contact("Nneka Ogwumike", '#30', 'nneka@theLASparks.com','Intern');
    expect (x.name).toBe("Nneka Ogwumike");
    expect (x.name()).toBe("Nneka Ogwumike");
    expect (x.id).toBe('#30')
    expect (x.id()).toBe('#30')
    expect (x.email).toBe('nneka@theLASparks.com')
    expect (x.email()).toBe('nneka@theLASparks.com')
    expect (x.postion).toBe('Intern'); 
    expect (x.position()).toBe('Intern');

})