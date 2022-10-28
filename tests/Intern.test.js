const contact = require('..00contactCard')

describe ("Intern", () => {

    it ("Should return itern's name entered by user.", () => {
        //Arrange & Act
        let obj = new contact("Nneka Ogwumike", '#30', 'nneka@theLASparks.com', 'Stanford WBB Alum', 'Intern');
        //Assert 
        expect(obj.name()).toEqual("Nneka Ogwumike");
    });

    it ("Should return itern's id entered by user.", () => {
        //Arrange & Act
        let obj = new contact("Nneka Ogwumike", '#30', 'nneka@theLASparks.com', 'Stanford WBB Alum', 'Intern');
        //Assert 
        expect(obj.id()).toEqual("#30");
    });
    
    it ("Should return itern's email entered by user.", () => {
        //Arrange & Act
        let obj = new contact("Nneka Ogwumike", '#30', 'nneka@theLASparks.com', 'Stanford WBB Alum', 'Intern');
        //Assert 
        expect(obj.email()).toEqual("nneka@theLASparks.com");
    });

    it ("Should return itern's name entered by user.", () => {
        //Arrange & Act
        let obj = new contact("Nneka Ogwumike", '#30', 'nneka@theLASparks.com', 'Stanford WBB Alum', 'Intern');
        //Assert 
        expect(obj.name()).toEqual("Nneka Ogwumike");
    });

    it ("Should return itern's name entered by user.", () => {
        //Arrange & Act
        let obj = new contact("Nneka Ogwumike", '#30', 'nneka@theLASparks.com', 'Stanford WBB Alum', 'Intern');
        //Assert 
        expect(obj.name()).toEqual("Nneka Ogwumike");
    });

});