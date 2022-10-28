const contact = require('..00contactCard')
test ('Manager Test', () => {
    const x = new contact("A'ja Wilson", '#22', 'ajawilson@theLVaces.com','Manager');
    expect (x.name).toBe("A'ja Wilson");
    expect (x.name()).toBe("A'ja Wilson");
    expect (x.id).toBe('#22')
    expect (x.id()).toBe('#22')
    expect (x.email).toBe('ajawilson@theLVaces.com')
    expect (x.email()).toBe('ajawilson@theLVaces.com')
    expect (x.postion).toBe('Manager'); 
    expect (x.position()).toBe('Manager');

})